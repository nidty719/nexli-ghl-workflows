# Lead Qualification Framework
## Nexli Funding Sales System

### Overview
This framework provides a systematic approach to qualify, score, and prioritize leads for maximum conversion efficiency. Based on proven sales psychology and data-driven metrics specific to financial services.

---

## Lead Scoring Matrix

### Primary Qualification Factors (0-100 points)

#### 1. Financial Health Score (30 points max)
| Factor | High (10pts) | Medium (5pts) | Low (0pts) |
|--------|-------------|---------------|------------|
| **Credit Score** | 680+ | 580-679 | <580 |
| **Monthly Revenue** | $50k+ | $17k-49k | <$17k |
| **Time in Business** | 2+ years | 6mo-2yrs | <6 months |

#### 2. Urgency Indicators (25 points max)
| Indicator | Points | Description |
|-----------|--------|-------------|
| **Immediate Need** | 15 | "Need funding ASAP" / "Urgent situation" |
| **Specific Purpose** | 10 | Clear use case (equipment, expansion, cash flow) |
| **Timeline Mentioned** | 5 | Mentions specific deadlines or timing |

#### 3. Engagement Level (25 points max)
| Behavior | Points | Measurement |
|----------|--------|-------------|
| **Response Speed** | 15 | Responds to calls/texts within 2 hours |
| **Question Quality** | 10 | Asks detailed questions about terms/process |
| **Follow-Through** | 5 | Completes requested actions promptly |

#### 4. Application Quality (20 points max)
| Element | Points | Criteria |
|---------|--------|----------|
| **Complete Information** | 10 | All required fields filled accurately |
| **Professional Email** | 5 | Business email address (not gmail/yahoo) |
| **Contact Reachability** | 5 | Phone number answers, not voicemail box full |

---

## Lead Categories & Actions

### 🔥 Hot Leads (80-100 points)
**Priority Level**: IMMEDIATE
- **Action**: Call within 5 minutes of application
- **Follow-up**: Every 2-4 hours until contact
- **Max Attempts**: 10 calls over 48 hours
- **Expected Close Rate**: 45-65%

**Sales Approach**:
- Skip lengthy qualification - assume interest
- Move directly to document collection
- Use urgency: "I have 15 minutes right now to get this started"
- Offer same-day processing

### 🌟 Warm Leads (60-79 points)
**Priority Level**: SAME DAY
- **Action**: Call within 1 hour of application
- **Follow-up**: Every 4-6 hours
- **Max Attempts**: 7 calls over 72 hours
- **Expected Close Rate**: 25-35%

**Sales Approach**:
- Quick qualification call (5 minutes max)
- Build urgency around limited-time rates/terms
- Use comparison: "Most businesses in your situation choose..."
- Schedule follow-up if not ready immediately

### 💡 Qualified Leads (40-59 points)
**Priority Level**: WITHIN 24 HOURS
- **Action**: Call within 4 hours of application
- **Follow-up**: Daily calls for 5 days
- **Max Attempts**: 5 calls over 5 days
- **Expected Close Rate**: 15-25%

**Sales Approach**:
- Educational approach - explain benefits
- Address common objections proactively
- Use social proof and testimonials
- Nurture with value-added content

### ❄️ Cold Leads (20-39 points)
**Priority Level**: NURTURE SEQUENCE
- **Action**: Automated nurture sequence
- **Follow-up**: Weekly automated touchpoints
- **Max Attempts**: 3 manual calls over 2 weeks
- **Expected Close Rate**: 5-10%

**Sales Approach**:
- Focus on education and trust-building
- Longer sales cycle approach
- Address fundamental objections
- Re-qualify after 30-60 days

### 🚫 Unqualified Leads (0-19 points)
**Priority Level**: DISQUALIFY
- **Action**: Single nurture email with credit repair options
- **Follow-up**: Monthly nurture email only
- **Manual Effort**: None unless they re-engage
- **Expected Close Rate**: <2%

---

## Real-Time Qualification Scripts

### Phase 1: Initial Qualification (30 seconds)
```
"Hi [Name], this is [Your Name] from Nexli Funding. I see you just 
applied for business funding. Do you have 2 minutes for me to 
explain your options?"

[If YES, continue. If NO, schedule callback]

"Perfect. Just to confirm - you're looking for funding for 
[purpose from application], correct? And you need about 
[amount from application]?"
```

### Phase 2: Quick Scoring Questions (60 seconds)
```
"Great. Three quick questions to match you with the right program:

1. How long has your business been operating?
2. What's your approximate monthly revenue?
3. How quickly do you need access to the funds?"

[Score responses mentally, adjust approach accordingly]
```

### Phase 3: Urgency Assessment (30 seconds)
```
"Based on what you've told me, I can help you. The question is 
timing - we have some programs that can fund as fast as 24 hours, 
but they require immediate document submission. 

Is speed important to you, or would you prefer to take some time 
to think about it?"

[High urgency = Hot lead treatment]
[Low urgency = Warm/Qualified lead treatment]
```

---

## Advanced Scoring Triggers

### Automatic Point Additions
- **Calls back within 1 hour**: +10 points
- **Mentions competitor shopping**: +5 points
- **Asks about rates/terms first**: +8 points
- **Mentions specific business challenges**: +7 points
- **References timing pressures**: +10 points

### Automatic Point Deductions
- **Vague about business details**: -5 points
- **Asks for "more information" without specifics**: -8 points
- **Wants to "think about it" without timeline**: -10 points
- **Multiple unreturned calls**: -15 points
- **Skeptical about legitimacy**: -12 points

---

## Behavioral Indicators Matrix

### High-Intent Signals (Increase Priority)
| Behavior | Score Impact | Action |
|----------|-------------|--------|
| Downloads rate sheet immediately | +15 | Call within 30 min |
| Responds to texts within 5 minutes | +10 | Text-first approach |
| Asks about approval timeline | +12 | Emphasize speed |
| Mentions specific expansion plans | +8 | Connect to business goals |
| References seasonal business needs | +10 | Create urgency around timing |

### Low-Intent Signals (Decrease Priority)
| Behavior | Score Impact | Action |
|----------|-------------|--------|
| Asks for "all options" without specifics | -8 | Educational approach |
| Wants information "for future reference" | -12 | Move to nurture |
| Can't discuss business finances | -15 | Disqualify or long nurture |
| Says "calling everyone" | -10 | Competitive positioning |
| Asks about "catch" or hidden fees | -5 | Trust-building focus |

---

## Technology Integration

### CRM Scoring Setup
```javascript
// Pseudo-code for GHL integration
leadScore = {
  creditScore: (creditScore >= 680) ? 10 : (creditScore >= 580) ? 5 : 0,
  monthlyRevenue: (revenue >= 50000) ? 10 : (revenue >= 17000) ? 5 : 0,
  timeInBusiness: (months >= 24) ? 10 : (months >= 6) ? 5 : 0,
  responseTime: calculateResponseTime(),
  urgencyIndicators: parseUrgencyKeywords(),
  engagementLevel: calculateEngagement()
}

totalScore = Object.values(leadScore).reduce((a, b) => a + b, 0)
assignPriority(totalScore)
```

### Automated Workflows by Score
- **80+ Score**: Immediate SMS + Call attempt
- **60-79 Score**: Call within 1 hour + Email follow-up
- **40-59 Score**: Email first, then call within 4 hours
- **20-39 Score**: Automated nurture sequence
- **0-19 Score**: Credit repair email only

---

## Quality Assurance Checklist

### Daily Lead Review (5 minutes)
- [ ] All Hot leads contacted within 5 minutes?
- [ ] Warm leads contacted within 1 hour?
- [ ] Lead scores accurate based on new information?
- [ ] Any manual score adjustments needed?

### Weekly Scoring Calibration (15 minutes)
- [ ] Review close rates by score category
- [ ] Adjust scoring criteria if needed
- [ ] Identify new behavioral patterns
- [ ] Update qualification scripts

### Monthly Performance Analysis (30 minutes)
- [ ] Calculate actual close rates by category
- [ ] Compare to expected ranges
- [ ] Identify highest-value lead sources
- [ ] Refine scoring algorithm

---

## ROI Impact Expectations

### Current State vs. Optimized State
| Metric | Before Framework | After Framework | Improvement |
|--------|-----------------|----------------|-------------|
| Lead Response Time | 2-6 hours | 5-60 minutes | 75% faster |
| Close Rate | 15-20% | 25-35% | 50% improvement |
| Sales Cycle Length | 7-14 days | 3-7 days | 60% reduction |
| Lead Prioritization Accuracy | 60% | 85% | 40% improvement |

### Expected Monthly Results (100 leads/month)
- **15-20 Hot Leads**: 8-12 closes (vs. 3-4 previously)
- **25-30 Warm Leads**: 6-9 closes (vs. 4-6 previously)  
- **30-35 Qualified Leads**: 5-8 closes (vs. 4-6 previously)
- **20-25 Cold Leads**: 1-2 closes (vs. 1-2 previously)
- **5-10 Unqualified**: 0 closes (vs. 0-1 previously)

**Total Expected**: 20-31 closes vs. 12-19 previously (55% improvement)

---

## Implementation Timeline

### Week 1: Setup & Training
- Configure CRM scoring system
- Train team on qualification scripts
- Establish lead routing protocols

### Week 2: Pilot Testing
- Test scoring accuracy with 50 leads
- Refine scripts based on results
- Adjust scoring thresholds

### Week 3: Full Deployment
- Implement across all lead sources
- Monitor performance metrics
- Daily team calibration calls

### Week 4: Optimization
- Analyze first month results
- Fine-tune scoring algorithm
- Document best practices

**Success Metrics**: 25%+ improvement in close rates within 30 days