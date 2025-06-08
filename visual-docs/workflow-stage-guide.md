# Workflow Stage Guide

## 🎯 Detailed Breakdown for Operations & Management

This guide provides actionable insights for each stage of the Nexli Funding pipeline, with visual indicators and management checkpoints.

---

## 🌐 Stage 1: Lead Entry & Qualification

### Visual Status Flow
```mermaid
graph LR
    A[Website Form] --> B{AI Pre-Qual}
    B -->|Pass 70%| C[✅ form-qualified]
    B -->|Fail 30%| D[❌ form-unqualified]
    
    C --> E[🎯 Enter Main Pipeline]
    D --> F[🔧 Credit Repair Track]
    
    classDef success fill:#d4edda,stroke:#155724,stroke-width:2px
    classDef warning fill:#fff3cd,stroke:#856404,stroke-width:2px
    classDef primary fill:#cce5ff,stroke:#004085,stroke-width:2px
    
    class C,E success
    class D,F warning
    class A primary
```

### Key Management Indicators
| Metric | Target | Red Flag | Action Required |
|--------|--------|----------|----------------|
| **Qualification Rate** | 65-75% | <60% or >80% | Review AI criteria |
| **Lead Volume** | Consistent daily flow | 50% day-over-day drop | Check traffic sources |
| **Form Completion** | >85% | <80% | Optimize form UX |

### What You See in GHL
- **Pipeline Stage**: "New Lead" → "Qualified" or "Unqualified"
- **Tags Applied**: `form-qualified` or `form-unqualified`
- **Automatic Actions**: Qualified leads immediately get `docs-requested` tag

---

## 📞 Stage 2: AI Calls & Document Collection (WF-2)

### Detailed Process Flow
```mermaid
graph TD
    A[docs-requested] --> B[🔄 AI Call Attempt 1]
    B --> C{Call Result}
    
    C -->|✅ Connected| D[📋 Send Portal Link]
    C -->|📞 No Answer| E[⏰ Wait 4 Hours]
    C -->|🔄 Callback Request| F[👤 Manual Task]
    
    E --> G[🔄 AI Call Attempt 2]
    G --> H{Call Result}
    
    H -->|✅ Connected| D
    H -->|❌ Failed| I[💌 Nurture Sequence]
    H -->|🔄 Callback Request| F
    
    D --> J[⏰ Wait 24h for Docs]
    J --> K{Docs Uploaded?}
    K -->|✅ Yes| L[📄 docs-in]
    K -->|❌ No| M[📧 Reminder 1]
    
    M --> N[⏰ Wait 24h]
    N --> O{Docs Uploaded?}
    O -->|✅ Yes| L
    O -->|❌ No| P[📧 Reminder 2]
    
    P --> Q[⏰ Wait 24h]
    Q --> R{Docs Uploaded?}
    R -->|✅ Yes| L
    R -->|❌ No| S[💌 unresponsive-docs]
    
    classDef success fill:#d4edda,stroke:#155724,stroke-width:2px
    classDef warning fill:#fff3cd,stroke:#856404,stroke-width:2px
    classDef danger fill:#f8d7da,stroke:#721c24,stroke-width:2px
    
    class L success
    class D,J,M,N,P,Q warning
    class I,S danger
```

### Performance Monitoring
| Stage | Success Rate Target | What to Watch | Intervention Needed |
|-------|-------------------|---------------|-------------------|
| **AI Call Answer Rate** | 60-70% | <50% answer rate | Check call timing, scripts |
| **Portal Conversion** | 70-80% | <65% doc completion | Simplify portal, improve instructions |
| **72-Hour Rule** | 80% docs within 72h | >20% need reminders | Follow-up sequence optimization |

### Alert Triggers
- 🚨 **AI Call Fails 2x**: Lead moves to WF-9 Nurture Call Sequence
- 🚨 **No Docs After 3 Reminders**: Lead moves to WF-6 Long-term Nurture
- ✅ **Docs Received**: Immediate move to WF-3 Submission prep

---

## 🏦 Stage 3: Lender Submission (WF-3)

### Process Timeline
```mermaid
gantt
    title Lender Submission SLA Timeline
    dateFormat  X
    axisFormat %H:%M
    
    section File Prep
    Package File    :active, prep, 0, 4h
    QC Review      :qc, after prep, 2h
    
    section Submission
    Submit to Lender :submit, after qc, 1h
    
    section SLA Tracking
    24h Deadline    :crit, deadline, 0, 24h
    Alert Trigger   :milestone, 24h
```

### Management Dashboard View
| Metric | Target | Current Status | Action |
|--------|--------|----------------|--------|
| **Prep Time** | <8 hours | ⚡ Track in real-time | Alert if >8h |
| **Submission SLA** | <24 hours | 🎯 Auto-alert at 24h | Escalate to ops |
| **Lender Response** | 24-48 hours | 📊 Track by lender | Review slow lenders |

### What Triggers Next Stage
- ✅ **Lender Approval**: `offer-out` tag → WF-4 Offer Review
- ❌ **Lender Decline**: `lender-decline` tag → WF-6 Nurture

---

## 💰 Stage 4: Offer Review (WF-4)

### Decision Tree Flow
```mermaid
graph TD
    A[offer-out] --> B[📧 Send Terms Email]
    B --> C[📱 Send Terms SMS]
    C --> D[📅 Include Calendly Link]
    D --> E[⏰ Wait for Response]
    
    E --> F{Client Decision}
    F -->|✅ Accept| G[💵 funded]
    F -->|❌ Decline| H[💌 offer-declined]
    F -->|🤔 Questions| I[📞 Schedule Call]
    
    G --> J[🎉 WF-5 Reviews]
    H --> K[💌 WF-6 Nurture]
    I --> L[👤 Manual Follow-up]
    
    classDef success fill:#d4edda,stroke:#155724,stroke-width:2px
    classDef warning fill:#fff3cd,stroke:#856404,stroke-width:2px
    classDef primary fill:#cce5ff,stroke:#004085,stroke-width:2px
    
    class G,J success
    class H,K warning
    class A,B,C,D,E,I,L primary
```

### Conversion Optimization Points
| Factor | Impact | Optimization |
|--------|--------|--------------|
| **Response Time** | High | Send terms within 2 hours of lender approval |
| **Presentation** | Medium | Clear terms breakdown, visual format |
| **Follow-up** | High | Personal touch for high-value deals |

---

## ⭐ Stage 5: Post-Funding (WF-5)

### Review & Referral Sequence
```mermaid
timeline
    title Post-Funding Timeline
    
    Day 0  : Funding Complete
           : Send celebration message
    
    Day 1  : Review Request
           : Email with review links
           : SMS reminder
    
    Day 3  : Referral Request
           : Email referral program
           : SMS with incentive
    
    Day 7  : Follow-up
           : Check satisfaction
           : Additional referral ask
```

### Success Metrics
- **Review Rate**: Target 40% of funded clients leave reviews
- **Referral Rate**: Target 25% provide qualified referrals
- **Response Time**: 80% respond to satisfaction survey

---

## 💌 Stage 6: Nurture System (WF-6 & WF-9)

### Nurture Pool Management
```mermaid
graph LR
    subgraph "Entry Points"
        A[unresponsive-docs]
        B[lender-decline]
        C[offer-declined]
        D[nurture-call-sequence]
    end
    
    A --> E[WF-6 Email Nurture]
    B --> E
    C --> E
    D --> F[WF-9 Call Nurture]
    
    E --> G[📧 Email Every 14 Days]
    G --> H[📱 SMS Every 30 Days]
    F --> I[📞 Spaced Call Attempts]
    I --> J[💌 Value-Based Messages]
    
    H --> K{Re-engagement?}
    J --> K
    K -->|Yes| L[🔥 Back to Pipeline]
    K -->|No| M[Continue Nurture]
```

### Re-engagement Triggers (Hot Lead Sniffer)
| Trigger | Action | Priority |
|---------|--------|----------|
| **SMS Reply** | Immediate re-entry | 🔥 High |
| **Email Click** | Tag re-engaged | 🔥 High |
| **Calendar Booking** | Direct to appointment flow | 🔥 High |
| **Keyword Response** | ("READY", "START") | 🔥 High |

---

## 📅 Stage 7: Calendar Management (WF-8)

### Appointment Confirmation Flow
```mermaid
graph LR
    A[📅 Booking] --> B[✅ Instant Confirmation]
    B --> C[⏰ 24h Reminder]
    C --> D[⏰ 1h Reminder]
    
    B --> E[📧 Email + 📱 SMS]
    C --> F[📧 Email + 📱 SMS]
    D --> G[📱 SMS Only]
    
    classDef appointment fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    class A,B,C,D,E,F,G appointment
```

### Show Rate Optimization
- **Target Show Rate**: 75%
- **Confirmation Response**: 90% within 1 hour
- **Reminder Effectiveness**: 15% improvement with 1-hour SMS

---

## 🎯 Quick Status Reference

| Workflow | Duration | Success Indicator | Failure Action |
|----------|----------|-------------------|----------------|
| **WF-1** | Instant | `docs-requested` added | Check webhook |
| **WF-2** | 1-3 days | `docs-in` received | Move to nurture |
| **WF-3** | 1-2 days | `offer-out` or `lender-decline` | Escalate if delayed |
| **WF-4** | 2-5 days | `funded` or `offer-declined` | Personal follow-up |
| **WF-5** | 7 days | Reviews/referrals received | End sequence |
| **WF-6/9** | Ongoing | `re-engaged` tag | Continue nurture |
| **WF-8** | Per booking | Appointment attended | Reschedule flow |

---

*For performance metrics and KPI tracking, see the kpi-dashboard-guide.md*