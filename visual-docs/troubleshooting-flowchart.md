# Troubleshooting Flowchart Guide

## 🔧 Quick Problem Identification & Resolution

This visual guide helps owners and marketers quickly identify common issues and take immediate corrective action.

---

## 🚨 Emergency Triage System

### Quick Problem Assessment
```mermaid
graph TD
    A[⚠️ Issue Detected] --> B{Impact Level?}
    
    B -->|🔴 Critical| C[Revenue Stop]
    B -->|🟡 High| D[Performance Drop]
    B -->|🟢 Medium| E[Optimization Need]
    
    C --> F[🚨 Immediate Action<br/>Call Tech Team]
    D --> G[📊 Investigate Within 2h]
    E --> H[📋 Schedule Review]
    
    classDef critical fill:#ffebee,stroke:#c62828,stroke-width:3px
    classDef high fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    classDef medium fill:#e8f5e8,stroke:#2e7d32,stroke-width:1px
    
    class C,F critical
    class D,G high
    class E,H medium
```

---

## 📉 Lead Generation Problems

### Low Lead Volume Diagnosis
```mermaid
graph TD
    A[📉 Lead Volume Drop] --> B{Check Traffic Sources}
    
    B -->|Ads Down| C[🔧 Fix Ad Issues]
    B -->|Traffic Normal| D[🎯 Check Conversion]
    
    C --> C1[Ad Account Suspended?]
    C --> C2[Budget Depleted?]
    C --> C3[Ad Disapproved?]
    
    D --> D1[Form Working?]
    D --> D2[Page Load Speed?]
    D --> D3[Mobile Responsive?]
    
    C1 -->|Yes| C1A[📞 Call Ad Rep<br/>Appeal Suspension]
    C2 -->|Yes| C2A[💳 Increase Budget<br/>Check Billing]
    C3 -->|Yes| C3A[✏️ Edit Ad Copy<br/>Resubmit]
    
    D1 -->|No| D1A[🔧 Fix Form Code<br/>Test Submission]
    D2 -->|Slow| D2A[⚡ Optimize Images<br/>Check Hosting]
    D3 -->|No| D3A[📱 Fix Mobile Layout<br/>Test All Devices]
    
    classDef problem fill:#ffebee,stroke:#c62828,stroke-width:2px
    classDef solution fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    
    class A,C1,C2,C3,D1,D2,D3 problem
    class C1A,C2A,C3A,D1A,D2A,D3A solution
```

### Lead Quality Issues
```mermaid
graph TD
    A[📊 Low Qualification Rate] --> B{Rate Below 60%?}
    
    B -->|Yes| C[🔍 Source Analysis]
    B -->|No| D[🎯 Minor Optimization]
    
    C --> E[Check Top Sources]
    E --> F{Facebook <50% qual?}
    E --> G{Google <65% qual?}
    E --> H{SEO >80% qual?}
    
    F -->|Yes| F1[📝 Tighten FB Targeting<br/>Test New Audiences]
    G -->|Yes| G1[🎯 Add Negative Keywords<br/>Adjust Bidding]
    H -->|No| H1[📈 Scale SEO Efforts<br/>More Content]
    
    D --> D1[🔧 A/B Test AI Questions]
    
    classDef analysis fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef action fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    
    class A,C,E analysis
    class F1,G1,H1,D1 action
```

---

## 📞 AI Call System Issues

### Call Performance Troubleshooting
```mermaid
graph TD
    A[📞 Low Call Success] --> B{Answer Rate <50%?}
    
    B -->|Yes| C[📱 Check Call Timing]
    B -->|No| D[🎯 Check Call Quality]
    
    C --> C1[Calling Outside Business Hours?]
    C --> C2[Too Many Attempts Same Day?]
    C --> C3[Phone Numbers Invalid?]
    
    D --> D1[Script Too Long?]
    D --> D2[AI Voice Quality Poor?]
    D --> D3[Background Noise Issues?]
    
    C1 -->|Yes| C1A[⏰ Adjust Call Windows<br/>9AM-6PM Local Time]
    C2 -->|Yes| C2A[📅 Space Calls 4+ Hours<br/>Max 2 Attempts/Day]
    C3 -->|Yes| C3A[🔧 Validate Phone Format<br/>Check Area Codes]
    
    D1 -->|Yes| D1A[✂️ Shorten Script<br/>Focus Key Points]
    D2 -->|Yes| D2A[🔧 Adjust Voice Settings<br/>Test Audio Quality]
    D3 -->|Yes| D3A[🎤 Check Server Audio<br/>Noise Cancellation]
    
    classDef issue fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    classDef fix fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    
    class C1,C2,C3,D1,D2,D3 issue
    class C1A,C2A,C3A,D1A,D2A,D3A fix
```

### n8n Integration Problems
```mermaid
graph TD
    A[🔌 n8n Connection Issues] --> B{Webhook Responding?}
    
    B -->|No| C[🚨 Server Down]
    B -->|Yes| D[🔍 Check Data Flow]
    
    C --> C1[📞 Alert Tech Team]
    C --> C2[🔧 Check Server Status]
    C --> C3[📊 Review Error Logs]
    
    D --> D1[Tags Not Applying?]
    D --> D2[Calls Not Triggering?]
    D --> D3[Recordings Not Saving?]
    
    D1 --> D1A[🏷️ Check GHL API Keys<br/>Verify Tag Names]
    D2 --> D2A[📞 Test Webhook Payload<br/>Check Contact Data]
    D3 --> D3A[💾 Check Storage Settings<br/>Verify File Upload]
    
    classDef critical fill:#ffebee,stroke:#c62828,stroke-width:2px
    classDef diagnostic fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef solution fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    
    class A,C,C1 critical
    class D,D1,D2,D3 diagnostic
    class C2,C3,D1A,D2A,D3A solution
```

---

## 📄 Document Collection Issues

### Portal Performance Problems
```mermaid
graph TD
    A[📋 Low Doc Completion] --> B{Completion Rate?}
    
    B -->|<40%| C[🚨 Major Issue]
    B -->|40-55%| D[🔧 Process Problem]
    B -->|55-65%| E[📈 Optimization Needed]
    
    C --> C1[Portal Down?]
    C --> C2[Email Not Sending?]
    C --> C3[SMS Not Delivering?]
    
    D --> D1[Instructions Unclear?]
    D --> D2[Upload Process Broken?]
    D --> D3[Mobile Not Working?]
    
    E --> E1[Follow-up Too Slow?]
    E --> E2[Reminders Not Helpful?]
    E --> E3[Doc List Too Long?]
    
    C1 -->|Yes| C1A[🔧 Check Portal Status<br/>Contact Tech Support]
    C2 -->|Yes| C2A[📧 Test Email Delivery<br/>Check Spam Filters]
    C3 -->|Yes| C3A[📱 Verify SMS Service<br/>Check Phone Numbers]
    
    D1 -->|Yes| D1A[✏️ Rewrite Instructions<br/>Add Screenshots]
    D2 -->|Yes| D2A[🔧 Test Upload Flow<br/>Check File Limits]
    D3 -->|Yes| D3A[📱 Optimize Mobile UX<br/>Test All Devices]
    
    E1 -->|Yes| E1A[⚡ Speed Up Follow-up<br/>Automate Reminders]
    E2 -->|Yes| E2A[📝 Improve Reminder Copy<br/>Add Urgency]
    E3 -->|Yes| E3A[📄 Simplify Doc List<br/>Prioritize Essentials]
    
    classDef critical fill:#ffebee,stroke:#c62828,stroke-width:2px
    classDef warning fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    classDef info fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef success fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    
    class C,C1,C2,C3 critical
    class D,D1,D2,D3 warning
    class E,E1,E2,E3 info
    class C1A,C2A,C3A,D1A,D2A,D3A,E1A,E2A,E3A success
```

---

## 🏦 Lender Processing Issues

### Submission Delays
```mermaid
graph TD
    A[⏰ Submission Delays] --> B{SLA Breach?}
    
    B -->|>24 Hours| C[🚨 Escalate Immediately]
    B -->|8-24 Hours| D[🔍 Investigate Cause]
    B -->|<8 Hours| E[📊 Monitor Closely]
    
    C --> C1[📞 Contact Operations Manager]
    C --> C2[🚨 Alert Client of Delay]
    C --> C3[📊 Review Process Bottleneck]
    
    D --> D1[Staff Shortage?]
    D --> D2[Complex File?]
    D --> D3[Missing Documents?]
    
    E --> E1[📈 Track Current Queue]
    E --> E2[⚡ Identify Optimization]
    
    D1 -->|Yes| D1A[👥 Add Temp Staff<br/>Redistribute Workload]
    D2 -->|Yes| D2A[👤 Assign Senior Staff<br/>Create Template]
    D3 -->|Yes| D3A[📞 Contact Client<br/>Request Missing Docs]
    
    classDef emergency fill:#ffebee,stroke:#c62828,stroke-width:3px
    classDef urgent fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    classDef normal fill:#e8f5e8,stroke:#2e7d32,stroke-width:1px
    
    class C,C1,C2,C3 emergency
    class D,D1,D2,D3,D1A,D2A,D3A urgent
    class E,E1,E2 normal
```

### Lender Decline Analysis
```mermaid
graph TD
    A[❌ High Decline Rate] --> B{Decline Rate >25%?}
    
    B -->|Yes| C[📊 Analyze Decline Reasons]
    B -->|No| D[🎯 Target Optimization]
    
    C --> C1[Credit Issues?]
    C --> C2[Income Documentation?]
    C --> C3[Business Metrics?]
    C --> C4[Lender Criteria Change?]
    
    C1 -->|Yes| C1A[🔧 Improve Pre-Screening<br/>Better Credit Checks]
    C2 -->|Yes| C2A[📄 Enhance Doc Collection<br/>Clearer Requirements]
    C3 -->|Yes| C3A[📈 Better Business Analysis<br/>Financial Health Check]
    C4 -->|Yes| C4A[🤝 Contact Lender Rep<br/>Update Criteria]
    
    D --> D1[🎯 A/B Test Lender Selection]
    D --> D2[📊 Optimize Application Quality]
    
    classDef analysis fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef action fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    
    class A,C,C1,C2,C3,C4 analysis
    class C1A,C2A,C3A,C4A,D1,D2 action
```

---

## 💰 Close Rate Issues

### Offer Acceptance Problems
```mermaid
graph TD
    A[📉 Low Close Rate] --> B{Rate <40%?}
    
    B -->|Yes| C[🔍 Deep Analysis Needed]
    B -->|No| D[🎯 Fine-Tuning Required]
    
    C --> C1[Pricing Too High?]
    C --> C2[Terms Presentation Poor?]
    C --> C3[Competition Beating Us?]
    C --> C4[Client Expectations Wrong?]
    
    D --> D1[📧 Improve Offer Email]
    D --> D2[📞 Better Follow-up]
    
    C1 -->|Yes| C1A[💰 Market Rate Analysis<br/>Adjust Pricing Strategy]
    C2 -->|Yes| C2A[🎨 Redesign Offer Format<br/>Clearer Benefits]
    C3 -->|Yes| C3A[🔍 Competitive Analysis<br/>Unique Value Props]
    C4 -->|Yes| C4A[📞 Better Expectation Setting<br/>Realistic Estimates]
    
    D1 --> D1A[✏️ A/B Test Subject Lines<br/>Improve Copy]
    D2 --> D2A[⏰ Faster Response Time<br/>Personal Touch]
    
    classDef problem fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    classDef solution fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    
    class A,C,C1,C2,C3,C4 problem
    class C1A,C2A,C3A,C4A,D1A,D2A solution
```

---

## 📱 System Integration Issues

### GHL Automation Problems
```mermaid
graph TD
    A[🔧 Automation Not Working] --> B{Which Component?}
    
    B -->|Tags| C[🏷️ Tag Issues]
    B -->|Emails| D[📧 Email Problems]
    B -->|SMS| E[📱 SMS Issues]
    B -->|Workflows| F[⚙️ Workflow Errors]
    
    C --> C1[Tags Not Applying?]
    C --> C2[Wrong Tags Applied?]
    C1 --> C1A[🔧 Check Trigger Logic<br/>Test Conditions]
    C2 --> C2A[📝 Review Tag Names<br/>Fix Spelling/Case]
    
    D --> D1[Emails Not Sending?]
    D --> D2[Going to Spam?]
    D1 --> D1A[📧 Check Email Service<br/>Verify Templates]
    D2 --> D2A[📬 Check Domain Rep<br/>Improve Content]
    
    E --> E1[SMS Not Delivering?]
    E --> E2[Wrong Phone Format?]
    E1 --> E1A[📱 Check SMS Credits<br/>Service Status]
    E2 --> E2A[🔢 Validate Phone Numbers<br/>Standard Format]
    
    F --> F1[Workflow Stuck?]
    F --> F2[Steps Skipping?]
    F1 --> F1A[⏰ Check Wait Conditions<br/>Manual Progression]
    F2 --> F2A[🔍 Review Logic Gates<br/>Test Each Step]
    
    classDef issue fill:#fff3e0,stroke:#ef6c00,stroke-width:2px
    classDef fix fill:#e8f5e8,stroke:#2e7d32,stroke-width:2px
    
    class C1,C2,D1,D2,E1,E2,F1,F2 issue
    class C1A,C2A,D1A,D2A,E1A,E2A,F1A,F2A fix
```

---

## 🔧 Quick Fix Checklist

### Daily Health Check (5-Minute Scan)
```
□ 📊 Lead volume normal (within 20% of yesterday)
□ 🎯 Qualification rate >60%
□ 📞 AI calls functioning (check last hour)
□ 📧 Emails sending (check delivery rate)
□ 📱 SMS working (check delivery rate)
□ 🏷️ Tags applying correctly (spot check)
□ ⏰ No SLA breaches (check alerts)
□ 💰 Funded deals on track (daily target)
```

### Weekly Deep Check (30-Minute Review)
```
□ 📈 CPL trending within budget
□ 🔄 Conversion rates at benchmark
□ 📞 AI call scripts performing
□ 📋 Document collection optimized
□ 🏦 Lender relationships healthy
□ 💰 Close rates competitive
□ 📊 Pipeline velocity normal
□ 🎯 Team performance targets met
```

---

## 📞 Emergency Contacts

### Escalation Matrix
| Issue Type | Severity | Contact | Response Time |
|------------|----------|---------|---------------|
| **Revenue Stop** | 🔴 Critical | CEO + Tech Lead | 15 minutes |
| **System Down** | 🔴 Critical | Tech Team | 30 minutes |
| **SLA Breach** | 🟡 High | Operations Manager | 2 hours |
| **Performance Drop** | 🟡 High | Team Lead | 4 hours |
| **Optimization** | 🟢 Medium | Next team meeting | 24 hours |

### Quick Contact List
- 🚨 **Emergency**: Alert all stakeholders
- 🔧 **Tech Issues**: tech-team@nexli.com
- 📊 **Operations**: ops@nexli.com
- 💰 **Revenue**: management@nexli.com
- 📈 **Marketing**: marketing@nexli.com

---

*This troubleshooting guide should be your first stop when issues arise. For performance optimization, see the kpi-dashboard-guide.md*