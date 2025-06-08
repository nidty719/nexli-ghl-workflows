# Simplified Pipeline Overview

## 🎯 Quick Reference for Owners & Marketers

This visual guide breaks down the Nexli Funding sales pipeline into easy-to-understand stages that busy owners and marketers can scan quickly to understand performance and optimize conversions.

---

## 📊 High-Level Sales Funnel

```mermaid
graph TD
    A[🌐 Website Lead] --> B{🤖 AI Qualified?}
    B -->|✅ Yes| C[📋 Qualified Lead]
    B -->|❌ No| D[🔧 Credit Repair Path]
    
    C --> E[📞 AI Calls + Documents]
    E --> F{📄 Docs Received?}
    F -->|✅ Yes| G[🏦 Submit to Lender]
    F -->|❌ No| H[💌 Long-term Nurture]
    
    G --> I{💰 Lender Offer?}
    I -->|✅ Yes| J[📋 Present Offer]
    I -->|❌ No| H
    
    J --> K{🤝 Client Accepts?}
    K -->|✅ Yes| L[💵 FUNDED]
    K -->|❌ No| H
    
    L --> M[⭐ Reviews & Referrals]
    
    D --> H
    H --> N{🔥 Re-engaged?}
    N -->|Yes| E
    N -->|No| H

    classDef success fill:#d4edda,stroke:#155724,stroke-width:2px
    classDef warning fill:#fff3cd,stroke:#856404,stroke-width:2px
    classDef danger fill:#f8d7da,stroke:#721c24,stroke-width:2px
    classDef primary fill:#cce5ff,stroke:#004085,stroke-width:2px
    
    class L,M success
    class C,E,G,J primary
    class H,D warning
    class B,F,I,K,N danger
```

---

## 🚦 Lead Status at a Glance

| Stage | Icon | Status | Next Action | Typical Timeline |
|-------|------|---------|-------------|------------------|
| **Website Lead** | 🌐 | New inquiry | AI qualification | Immediate |
| **Qualified** | ✅ | Passed AI screening | Start doc process | 0-2 hours |
| **AI Calls Active** | 📞 | AI attempting contact | Monitor call outcomes | Same day |
| **Docs Requested** | 📋 | Portal sent to client | Follow up if no upload | 24-72 hours |
| **Ready to Submit** | 📄 | All docs received | Package for lender | 4-8 hours |
| **With Lender** | 🏦 | File submitted | Wait for decision | 24-48 hours |
| **Offer Presented** | 💰 | Terms available | Client decision | 24-72 hours |
| **FUNDED** | 💵 | Deal closed | Request reviews | Complete |
| **Nurture** | 💌 | Long-term follow-up | Monitor re-engagement | Ongoing |

---

## 📈 Conversion Funnel Metrics

```mermaid
graph LR
    A[100 Leads] --> B[70 Qualified<br/>70%]
    B --> C[45 Docs Received<br/>64%]
    C --> D[40 Submitted<br/>89%]
    D --> E[32 Offers<br/>80%]
    E --> F[16 Funded<br/>50%]
    
    classDef metric fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,font-weight:bold
    class A,B,C,D,E,F metric
```

**Key Benchmark Conversion Rates:**
- **Qualification Rate**: 70% (AI pre-screening)
- **Doc Completion**: 64% (qualified → docs received)
- **Lender Approval**: 80% (submitted → offer)
- **Offer Acceptance**: 50% (offer → funded)
- **Overall Conversion**: 16% (lead → funded)

---

## 🔄 Automation Workflows Overview

### Primary Workflows (WF-1 to WF-5)
```mermaid
graph LR
    WF1[WF-1<br/>📋 Prep Docs] --> WF2[WF-2<br/>📞 AI Calls<br/>📄 Doc Chase]
    WF2 --> WF3[WF-3<br/>🏦 Submit<br/>to Lender]
    WF3 --> WF4[WF-4<br/>💰 Offer<br/>Review]
    WF4 --> WF5[WF-5<br/>⭐ Reviews<br/>& Referrals]
    
    classDef workflow fill:#f8f9fa,stroke:#6c757d,stroke-width:2px
    class WF1,WF2,WF3,WF4,WF5 workflow
```

### Support Workflows
```mermaid
graph TD
    WF6[WF-6<br/>💌 Long-term<br/>Nurture]
    WF7[WF-7<br/>🔧 Credit<br/>Repair]
    WF8[WF-8<br/>📅 Calendar<br/>Management]
    WF9[WF-9<br/>📞 Nurture<br/>Call Sequence]
    
    classDef support fill:#fff3cd,stroke:#856404,stroke-width:2px
    class WF6,WF7,WF8,WF9 support
```

---

## ⚡ Quick Decision Points

### 🚨 When to Investigate
- **Doc completion < 60%**: Check portal links, follow-up messaging
- **AI call success < 50%**: Review call scripts, timing
- **Lender approval < 75%**: Check file quality, lender requirements
- **Offer acceptance < 45%**: Review terms presentation, pricing

### 🎯 Optimization Opportunities
- **High nurture pool**: Implement re-engagement campaigns
- **Low qualification rate**: Improve lead sources, AI criteria
- **Slow doc turnaround**: Simplify portal, improve instructions
- **Low offer acceptance**: Better expectation setting, competitive rates

---

## 📱 Mobile-Friendly Status Icons

| Status | Desktop View | Mobile Icon | Meaning |
|--------|--------------|-------------|---------|
| New Lead | 🌐 Website Lead | 🌐 | Fresh inquiry |
| Qualified | ✅ Qualified Lead | ✅ | Passed screening |
| AI Active | 📞 AI Calls Active | 📞 | Calling in progress |
| Docs Pending | 📋 Docs Requested | 📋 | Waiting for upload |
| Ready | 📄 Ready to Submit | 📄 | All docs received |
| With Lender | 🏦 With Lender | 🏦 | Under review |
| Offer Out | 💰 Offer Presented | 💰 | Terms available |
| Funded | 💵 FUNDED | 💵 | Deal closed |
| Nurture | 💌 Nurture | 💌 | Long-term follow-up |

---

*This overview provides the essential visual framework for understanding lead flow. For detailed workflow mechanics, see the workflow-stage-guide.md*