# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository serves as the primary Standard Operating Procedure (SOP) for Nexli Funding's marketing and customer journey workflows. It includes:

- Email templates (HTML)
- SMS templates (TXT)
- Voice prompt templates (MD)
- AI content generation prompts

**IMPORTANT**: This repository is the source of truth for all workflow documentation. Changes must be made here FIRST, before implementing them in GoHighLevel (GHL). This ensures proper documentation and version control of our marketing SOP before any technical implementation.

## Repository Structure

- `/templates/` - Main directory containing all templates
  - `/templates/emails/` - HTML email templates for different workflows
  - `/templates/sms/` - Text message templates for different workflows
  - `/templates/voice-prompts/` - AI voice call scripts for different workflows

## Workflow System

This repository defines the complete SOP for Nexli Funding's customer journey. The marketing and sales process is divided into distinct workflows, each with specific triggers, goals, and communication templates.

The templates in this repository correspond to the following workflows:

- WF-1: Welcome/Initial Contact - Initiates contact and sets up document request
- WF-2: Document Chase - Secures required uploads within 72 hours
- WF-3: Submit to Lender - Packages and sends files for review
- WF-4: Offer Review - Presents terms and handles client decisions
- WF-5: Review and Referral - Gathers social proof and referrals
- WF-6: Long-Term Nurture - Recycles non-funded leads
- WF-7: Credit Repair - Handles unqualified leads
- WF-8: Calendar Confirmations - Manages appointment reminders

For detailed workflow triggers, tag usage, and process flow, refer to the readme.md file which contains the complete flowchart and workflow definitions.

## Template Naming Convention

Templates follow a naming convention pattern:
`wf{number}-{purpose}-{channel}.{extension}`

Examples:
- `wf1-welcome-email.html`
- `wf2-docs-chase-sms.txt`
- `wf2-initial-call-prompt.md`

## Working with Templates

### Change Management Process
- All workflow changes must be documented in this repository first
- Update the readme.md to reflect any workflow changes
- After documentation is complete, implement changes in GHL
- Use the commit history to track when workflow changes were made and implemented

### Email Templates (HTML)
- Maintain mobile responsiveness
- Keep consistent branding elements (colors: #2B6B6B, #c1ff72)
- Preserve email best practices (preheader text, Gmail spacer fix, etc.)
- Templates use GoHighLevel merge tags like `{{contact.first_name}}`
- Test all templates for mobile rendering before implementation

### SMS Templates (TXT)
- Keep messages under 160 characters when possible
- Include a clear call to action
- Always identify as "Nexli Funding Team" at the end
- Follow compliance guidelines for marketing SMS

### Voice Prompts (MD)
- Structured as markdown with sections for different parts of the call
- Include system function calls where appropriate
- Test prompts with actual AI voice system before deployment

### AI Content Prompts (TXT)
- Used for generating dynamic content for nurture emails
- Include specific parameters and compliance guidelines
- Test generated content for compliance before implementation