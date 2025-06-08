// ==UserScript==
// @name         GHL Pipeline Color Coding - Nexli (Clean)
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Clean CSS-based color coding for GHL pipeline cards
// @author       Nexli
// @match        https://app.datadrivenwebscraping.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Inject CSS styles only once
    function injectCSS() {
        if (document.getElementById('nexli-clean-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'nexli-clean-styles';
        style.textContent = `
            /* EXCLUDE headers and columns from ANY styling */
            [class*="stage"], [class*="column"], [class*="header"], 
            [class*="pipeline"], [class*="kanban-column"] {
                background: unset !important;
                border: unset !important;
                border-left: unset !important;
            }
            
            /* Only apply to individual opportunity cards - NO child element interference */
            div.nexli-card.nexli-urgent {
                background-color: #fee2e2 !important;
                border: 1px solid #fca5a5 !important;
                border-left: 4px solid #ef4444 !important;
                border-radius: 6px !important;
                margin: 2px !important;
                box-sizing: border-box !important;
            }
            
            div.nexli-card.nexli-attention {
                background-color: #fef3c7 !important;
                border: 1px solid #fcd34d !important;
                border-left: 4px solid #f59e0b !important;
                border-radius: 6px !important;
                margin: 2px !important;
                box-sizing: border-box !important;
            }
            
            div.nexli-card.nexli-on-track {
                background-color: #dcfce7 !important;
                border: 1px solid #86efac !important;
                border-left: 4px solid #10b981 !important;
                border-radius: 6px !important;
                margin: 2px !important;
                box-sizing: border-box !important;
            }
            
            /* Priority badges - larger and more readable */
            .nexli-badge {
                position: absolute !important;
                top: 8px !important;
                right: 8px !important;
                padding: 4px 8px !important;
                border-radius: 4px !important;
                font-size: 10px !important;
                font-weight: bold !important;
                color: white !important;
                z-index: 1000 !important;
                pointer-events: none !important;
                text-shadow: 0 1px 2px rgba(0,0,0,0.3) !important;
                box-shadow: 0 1px 3px rgba(0,0,0,0.2) !important;
            }
            
            .nexli-badge-urgent {
                background-color: #b91c1c !important;
                color: #ffffff !important;
            }
            
            .nexli-badge-attention {
                background-color: #92400e !important;
                color: #ffffff !important;
            }
            
            .nexli-badge-on-track {
                background-color: #047857 !important;
                color: #ffffff !important;
            }
        `;
        document.head.appendChild(style);
    }

    // Back to working detection but with minimal performance optimization
    function findCards() {
        const candidates = [];
        const startTime = performance.now();
        
        // Get all divs but process them efficiently
        const allDivs = document.querySelectorAll('div');
        
        for (const div of allDivs) {
            // Skip already processed
            if (div.classList.contains('nexli-card')) continue;
            
            const text = div.textContent || '';
            
            // Quick text checks first (most efficient)
            if (!text.includes('Business Name:') || !text.includes('Days Since Last Stage C')) continue;
            
            // Size filtering using offsetWidth/Height (faster than getBoundingClientRect)
            const width = div.offsetWidth;
            const height = div.offsetHeight;
            if (width < 250 || width > 400 || height < 120 || height > 300) continue;
            
            // Business name count check (most expensive, do last)
            if ((text.match(/Business Name:/g) || []).length !== 1) continue;
            
            candidates.push(div);
        }
        
        // Filter to outermost containers only
        const cards = candidates.filter(candidate => {
            return !candidates.some(other => 
                other !== candidate && other.contains(candidate)
            );
        });
        
        const endTime = performance.now();
        console.log(`Nexli: Found ${cards.length} cards in ${(endTime - startTime).toFixed(1)}ms`);
        return cards;
    }

    // Extract days from card text
    function getDaysFromCard(card) {
        const text = card.textContent || '';
        const match = text.match(/Days Since Last Stage C[^:]*:\s*(\d+)\s*Days?/i);
        return match ? parseInt(match[1]) : 0;
    }

    // Clean existing styling and apply new styling ONLY to exact cards
    function applyColorCoding() {
        // First, thoroughly clean up any existing nexli styling
        document.querySelectorAll('.nexli-card, .nexli-urgent, .nexli-attention, .nexli-on-track').forEach(el => {
            el.classList.remove('nexli-card', 'nexli-urgent', 'nexli-attention', 'nexli-on-track');
            // Remove all badges
            el.querySelectorAll('.nexli-badge').forEach(badge => badge.remove());
            // Reset any inline styles we might have added
            if (el.style.position === 'relative') {
                el.style.position = '';
            }
        });
        
        const cards = findCards();
        console.log(`Nexli: Processing ${cards.length} exact cards`);
            
        cards.forEach((card, index) => {
            try {
                const days = getDaysFromCard(card);
                
                // Apply base card class and priority class
                let priorityClass, badgeClass, badgeText;
                
                if (days >= 2) {
                    priorityClass = 'nexli-urgent';
                    badgeClass = 'nexli-badge-urgent';
                    badgeText = 'URGENT';
                } else if (days >= 1) {
                    priorityClass = 'nexli-attention';
                    badgeClass = 'nexli-badge-attention';
                    badgeText = 'ATTENTION';
                } else {
                    priorityClass = 'nexli-on-track';
                    badgeClass = 'nexli-badge-on-track';
                    badgeText = 'ON TRACK';
                }
                
                // Apply classes: base + priority
                card.classList.add('nexli-card', priorityClass);
                card.style.position = 'relative';
                
                // Add badge
                const badge = document.createElement('div');
                badge.className = `nexli-badge ${badgeClass}`;
                badge.textContent = badgeText;
                card.appendChild(badge);
                
                console.log(`Nexli: Card ${index + 1} styled with ${days} days - ${badgeText}`);
                
            } catch (error) {
                console.warn('Nexli: Error processing card:', error);
            }
        });
    }

    // Real-time updates for scroll and card movements
    let isRunning = false;
    let lastRunTime = 0;
    
    function waitForCardsAndApply() {
        let attempts = 0;
        const maxAttempts = 20; // Try for up to 10 seconds
        
        function checkForCards() {
            attempts++;
            
            // Look for any div with both "Business Name:" and "Days Since Last Stage C"
            const potentialCards = Array.from(document.querySelectorAll('div')).filter(div => {
                const text = div.textContent || '';
                return text.includes('Business Name:') && text.includes('Days Since Last Stage C');
            });
            
            if (potentialCards.length > 0) {
                console.log(`Nexli: Found ${potentialCards.length} potential cards after ${attempts * 500}ms`);
                // Wait a bit more for content to fully render
                setTimeout(applyColorCoding, 1000);
            } else if (attempts < maxAttempts) {
                console.log(`Nexli: No cards found yet, attempt ${attempts}/${maxAttempts}`);
                setTimeout(checkForCards, 500);
            } else {
                console.log('Nexli: Timed out waiting for cards to load');
            }
        }
        
        checkForCards();
    }
    
    // Immediate update for real-time changes (scroll, card moves)
    function quickUpdate() {
        const now = Date.now();
        if (isRunning || (now - lastRunTime) < 1000) return; // 1 second minimum for quick updates
        
        isRunning = true;
        lastRunTime = now;
        
        setTimeout(() => {
            applyColorCoding();
            isRunning = false;
        }, 200);
    }
    
    // Standard update with card waiting
    function standardUpdate() {
        const now = Date.now();
        if (isRunning || (now - lastRunTime) < 3000) return; // 3 second minimum for standard updates
        
        isRunning = true;
        lastRunTime = now;
        
        setTimeout(() => {
            waitForCardsAndApply();
            isRunning = false;
        }, 100);
    }
    
    function init() {
        console.log('Nexli: Real-time card detection started');
        
        // Inject CSS first
        injectCSS();
        
        // Wait for cards to load before first run
        setTimeout(waitForCardsAndApply, 1000);
        
        // Wait for cards after route changes
        window.addEventListener('routeLoaded', () => {
            console.log('Nexli: Route loaded - waiting for cards');
            setTimeout(waitForCardsAndApply, 2000);
        });
        
        window.addEventListener('routeChangeEvent', () => {
            console.log('Nexli: Route changed - waiting for cards');
            setTimeout(waitForCardsAndApply, 2000);
        });
        
        // SCROLL DETECTION for new cards loading
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                console.log('Nexli: Scroll detected - checking for new cards');
                quickUpdate();
            }, 1000); // 1 second delay after scroll stops
        }, { passive: true });
        
        // MUTATION OBSERVER for real-time card movements and changes
        const observer = new MutationObserver((mutations) => {
            let hasCardChanges = false;
            
            for (const mutation of mutations) {
                if (mutation.type === 'childList') {
                    // Check if any added/removed nodes might be opportunity cards
                    const allNodes = [...mutation.addedNodes, ...mutation.removedNodes];
                    for (const node of allNodes) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const text = node.textContent || '';
                            if (text.includes('Business Name:') || text.includes('Days Since Last Stage C')) {
                                hasCardChanges = true;
                                break;
                            }
                        }
                    }
                } else if (mutation.type === 'characterData' || mutation.type === 'attributes') {
                    // Check if text content changed in existing cards
                    const target = mutation.target;
                    if (target && target.nodeType === Node.ELEMENT_NODE) {
                        const text = target.textContent || '';
                        if (text.includes('Days Since Last Stage C')) {
                            hasCardChanges = true;
                            break;
                        }
                    }
                }
                
                if (hasCardChanges) break;
            }
            
            if (hasCardChanges) {
                console.log('Nexli: Card changes detected - updating colors');
                quickUpdate();
            }
        });
        
        // Start observing the document for changes
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true,
            attributeFilter: ['class', 'style'] // Watch for class/style changes
        });
        
        // Background periodic check (much less frequent)
        setInterval(() => {
            if (!isRunning) {
                console.log('Nexli: Periodic background check');
                standardUpdate();
            }
        }, 180000); // Every 3 minutes only
    }

    // Start when ready
    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }

})();