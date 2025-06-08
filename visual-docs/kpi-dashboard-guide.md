# KPI Dashboard Guide

## 📊 Visual Metrics & Performance Tracking

This guide helps owners and marketers understand key performance indicators, what they mean, and when to take action.

---

## 🎯 Executive Dashboard Overview

### Primary Revenue Metrics
```mermaid
graph LR
    subgraph "Lead Economics"
        A[CPL: $125] --> B[Qualification: 70%]
        B --> C[Doc Rate: 64%]
        C --> D[Fund Rate: 16%]
    end
    
    subgraph "Revenue Impact"
        D --> E[Avg Deal: $8,500]
        E --> F[Commission: $2,125]
        F --> G[ROI: 1,700%]
    end
    
    classDef metric fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,font-weight:bold
    classDef revenue fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px,font-weight:bold
    
    class A,B,C,D metric
    class E,F,G revenue
```

---

## 📈 Lead Generation Metrics

### Cost Per Lead (CPL) Tracking
| Source | CPL | Volume | Quality Score | Action |
|--------|-----|---------|---------------|--------|
| **Google Ads** | $145 | 45/day | ⭐⭐⭐⭐ | Optimize |
| **Facebook** | $95 | 30/day | ⭐⭐⭐ | Scale up |
| **SEO Organic** | $25 | 15/day | ⭐⭐⭐⭐⭐ | Maintain |
| **Referrals** | $0 | 8/day | ⭐⭐⭐⭐⭐ | Incentivize |

### Lead Quality Indicators
```mermaid
pie title Lead Source Quality Distribution
    "High Quality (80%+ qualify)" : 35
    "Medium Quality (60-79%)" : 45
    "Low Quality (<60%)" : 20
```

**Quality Scoring:**
- 🟢 **High**: 80%+ qualification rate
- 🟡 **Medium**: 60-79% qualification rate  
- 🔴 **Low**: <60% qualification rate

---

## 🔄 Pipeline Conversion Metrics

### Funnel Performance Visualization
```mermaid
graph TD
    A[100 Leads] --> |70%| B[70 Qualified]
    B --> |64%| C[45 Docs Complete]
    C --> |89%| D[40 Submitted]
    D --> |80%| E[32 Offers]
    E --> |50%| F[16 Funded]
    
    A1[CPL: $125] --> B1[Cost/Qualified: $179]
    B1 --> C1[Cost/Docs: $278]
    C1 --> D1[Cost/Submit: $313]
    D1 --> E1[Cost/Offer: $391]
    E1 --> F1[Cost/Fund: $781]
    
    classDef volume fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef cost fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    
    class A,B,C,D,E,F volume
    class A1,B1,C1,D1,E1,F1 cost
```

### Conversion Rate Benchmarks
| Stage | Current | Target | Best | Alert Level |
|-------|---------|--------|------|-------------|
| **Lead → Qualified** | 70% | 68-75% | 82% | <60% 🚨 |
| **Qualified → Docs** | 64% | 60-70% | 78% | <55% 🚨 |
| **Docs → Submit** | 89% | 85-95% | 97% | <80% 🚨 |
| **Submit → Offer** | 80% | 75-85% | 92% | <70% 🚨 |
| **Offer → Fund** | 50% | 45-55% | 68% | <40% 🚨 |

---

## ⏱️ Time-Based Performance

### SLA Compliance Dashboard
```mermaid
gantt
    title SLA Performance This Week
    dateFormat  X
    axisFormat %d
    
    section Docs Collection
    Target (72h)     :done, target1, 0, 3
    Actual Average   :active, actual1, 0, 2
    
    section File Prep
    Target (8h)      :done, target2, 0, 1
    Actual Average   :crit, actual2, 0, 1.5
    
    section Lender Response
    Target (24h)     :done, target3, 0, 1
    Actual Average   :active, actual3, 0, 1.2
```

### Response Time Metrics
| Metric | Target | Current | Trend | Status |
|--------|--------|---------|-------|--------|
| **AI Call Response** | <2 hours | 1.3h | ⬇️ | 🟢 |
| **Doc Portal Send** | <30 min | 18 min | ➡️ | 🟢 |
| **File Prep Time** | <8 hours | 6.2h | ⬇️ | 🟢 |
| **Offer Presentation** | <2 hours | 3.1h | ⬆️ | 🟡 |

---

## 💰 Revenue Performance

### Monthly Revenue Tracking
```mermaid
xychart-beta
    title "Monthly Commission Revenue"
    x-axis [Jan, Feb, Mar, Apr, May, Jun]
    y-axis "Revenue ($)" 0 --> 150000
    bar [85000, 92000, 108000, 125000, 135000, 142000]
```

### Deal Size Distribution
| Range | Count | Percentage | Revenue |
|-------|-------|------------|---------|
| **$1K-$5K** | 45 | 28% | $148K |
| **$5K-$10K** | 68 | 42% | $512K |
| **$10K-$25K** | 35 | 22% | $625K |
| **$25K+** | 12 | 8% | $385K |

### Commission Analysis
- **Average Deal**: $8,500
- **Average Commission**: $2,125 (25%)
- **Top Performer**: $45K deal ($11.25K commission)
- **Commission/Lead**: $341

---

## 🎪 Activity Metrics

### Daily Activity Heatmap
```mermaid
graph LR
    subgraph "Morning (8-12)"
        A1[AI Calls: 85%]
        A2[Doc Uploads: 45%]
    end
    
    subgraph "Afternoon (12-17)"
        B1[Lender Submissions: 70%]
        B2[Offer Presentations: 60%]
    end
    
    subgraph "Evening (17-20)"
        C1[Client Responses: 35%]
        C2[Follow-ups: 25%]
    end
    
    classDef high fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    classDef medium fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    classDef low fill:#ffebee,stroke:#c62828,stroke-width:2px
    
    class A1,B1 high
    class A2,B2 medium
    class C1,C2 low
```

### Team Performance Metrics
| Team Member | Calls/Day | Doc Rate | Close Rate | Revenue |
|-------------|-----------|----------|------------|---------|
| **AI System** | 125 | 68% | N/A | - |
| **Sarah (Closer)** | 15 | N/A | 52% | $85K |
| **Mike (Closer)** | 12 | N/A | 47% | $72K |
| **Operations** | N/A | 89% SLA | N/A | - |

---

## 🚨 Alert System Configuration

### Red Flag Indicators
```mermaid
graph TD
    A[System Monitoring] --> B{Performance Check}
    
    B -->|CPL >$200| C[🚨 High Cost Alert]
    B -->|Qual Rate <60%| D[🚨 Quality Alert]
    B -->|Doc Rate <50%| E[🚨 Process Alert]
    B -->|SLA Breach| F[🚨 Timeline Alert]
    
    C --> G[Review Ad Spend]
    D --> H[Check Lead Sources]
    E --> I[Review Portal/Process]
    F --> J[Escalate to Ops]
    
    classDef alert fill:#ffebee,stroke:#c62828,stroke-width:2px
    classDef action fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    
    class C,D,E,F alert
    class G,H,I,J action
```

### Automated Alerts Setup
| Trigger | Threshold | Recipients | Action |
|---------|-----------|------------|--------|
| **CPL Spike** | >150% of 7-day avg | Marketing Team | Pause low-performing ads |
| **Doc Rate Drop** | <55% for 24h | Operations | Check portal & follow-up |
| **AI Call Failure** | >20% no-answer | Tech Team | Review call system |
| **SLA Breach** | Any >24h delay | Management | Immediate escalation |

---

## 📱 Mobile Dashboard Widgets

### Quick Status Tiles
```
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ Today Leads │  Doc Rate   │ Fund Rate   │ Revenue MTD │
│     47      │    68%      │    16%      │   $45.2K    │
│   ⬆️ +12%    │   ➡️ Stable  │   ⬇️ -2%     │  ⬆️ +18%    │
└─────────────┴─────────────┴─────────────┴─────────────┘

┌─────────────┬─────────────┬─────────────┬─────────────┐
│ AI Calls    │ Lender SLA  │ Hot Nurture │ Calendar    │
│   Active    │  On Track   │     23      │   85% Show  │
│    🟢       │     🟢      │    ⬆️ +8     │     🟢      │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

### Traffic Light System
- 🟢 **Green**: Performance within target range
- 🟡 **Yellow**: Performance below target but manageable
- 🔴 **Red**: Performance requires immediate attention

---

## 📊 Weekly Executive Summary Template

### Performance Scorecard
| Metric | This Week | Last Week | Target | Status |
|--------|-----------|-----------|--------|--------|
| **Leads Generated** | 287 | 312 | 300 | 🟡 |
| **Qualification Rate** | 72% | 69% | 70% | 🟢 |
| **Funded Deals** | 18 | 15 | 16 | 🟢 |
| **Revenue** | $38.2K | $31.8K | $34K | 🟢 |
| **ROI** | 1,650% | 1,520% | 1,500% | 🟢 |

### Action Items for Next Week
1. 🎯 **Marketing**: Test new Facebook ad creative (CPL optimization)
2. 🔧 **Operations**: Reduce file prep time to <6 hours
3. 📞 **Sales**: Improve offer acceptance rate (+5%)
4. 📊 **Analytics**: Implement real-time SLA tracking

---

## 🔍 Drill-Down Analysis Tools

### When Metrics Are Off-Target

**Low Qualification Rate (<60%)**
```mermaid
graph TD
    A[Check Lead Sources] --> B[Review AI Criteria]
    B --> C[Analyze Form Abandonment]
    C --> D[Test New Pre-Qual Questions]
```

**Poor Doc Collection (<55%)**
```mermaid
graph TD
    A[Check Portal Performance] --> B[Review Follow-up Timing]
    B --> C[Test Simplified Instructions]
    C --> D[Improve AI Call Scripts]
```

**Low Close Rate (<40%)**
```mermaid
graph TD
    A[Review Offer Presentation] --> B[Check Pricing Competitiveness]
    B --> C[Analyze Client Objections]
    C --> D[Improve Follow-up Sequence]
```

---

*For troubleshooting specific issues, see the troubleshooting-flowchart.md*