Nexli Funding – Workflow & Tag Playbook

(Last updated 25 Apr 2025)

This document is the single source of truth for every automation that moves a prospect from website application to Funded deal, plus follow-up review and long-term nurture.
It explains:

| Section | What you'll find |
|---------|-----------------|
| 1. Tag Dictionary | What each tag means and who/what applies it |
| 2. Workflow Summaries | Trigger → goal → key steps for all seven workflows |
| 3. Global "Hot-Lead Sniffer" Trigger | How re-engaged prospects leap out of nurture |
| 4. Mermaid Flowchart | Visual map of the entire journey (renders in any Mermaid viewer) |
| 5. SLA & Reporting Notes | Quick reference for Ops & Management |
| 6. Calendar Appointment Workflow | Confirmation and reminder sequence for all calendar bookings |
| 7. TODO List | Outstanding action items and implementation tasks |


⸻

1 Tag Dictionary

| Tag | Added by | Purpose / Effect |
|-----|----------|------------------|
| form-qualified | Website AI Pre-Qualification → Webhook | Indicates prospect passed initial AI qualification |
| form-unqualified | Website AI Pre-Qualification → Webhook | Bypasses Fast-Five, sends to WF-7 Auto-Disqualify or Credit Repair |
| offerId-tracking | Website → Webhook | Unique identifier for tracking throughout application process |
| credit-stacking | User Selection → Webhook | Routes to MyScoreIQ for credit report |
| revenue-loan | User Selection → Webhook | Routes to document collection for business loans |
| mca-loan | User Selection → Webhook | Routes to document collection for merchant cash advance |
| call-answered | Closer (call disposition) | Branch logic only |
| call-noanswer | Closer | Triggers follow-up loop inside WF-1 |
| call-back | Closer | Creates future dial task; exits WF-1 |
| disqualified | Closer | Ends contact—no further workflows |
| docs-requested | Closer (one-click tag) | Starts WF-2 Docs Chase |
| docs-in | Portal webhook or Ops | Starts WF-3 Submit to Lender |
| submitted | Ops when file sent | Kicks off SLA timer; prerequisite for lender offer |
| lender-decline | Ops | Drops into WF-6 Nurture |
| offer-out | Ops when terms arrive | Starts WF-4 Offer Review |
| offer-declined | Prospect says "no" | Sends to WF-6 Nurture |
| funded | Ops (ACH confirmed) | Starts WF-5 Review & Referral |
| unresponsive-docs | WF-2 auto after 3 nudges | Sends to WF-6 Nurture |
| cold-lead | WF-1 auto after 3 failed calls | Sends to WF-6 Nurture |
| nurture-long | Auto tag inside WF-6 | Indicates contact is in long-term drip |
| re-engaged | Global trigger (reply, click, booking) or rep tag | Pulls contact out of WF-6 and back into pipeline |
| customer-booked-appointment | Calendar (QB8uLe2eg2L0jJwAk8Hq) | Triggers WF-8 Calendar Confirmation flow |


⸻

2 Workflow Summaries

| # | Name & Goal | Trigger | Key Actions | Exit / Next Tag |
|---|------------|---------|------------|----------------|
| WF-1 | Tag for Docs Chase<br/>Initiate document request | form-qualified | ① Website applies AI qualification<br/>② Apply docs-requested tag | docs-requested |
| WF-2 | Docs Chase<br/>Secure uploads within 72 h | docs-requested | Portal link → event-wait for docs-in with 2 reminder loops | docs-in or unresponsive-docs |
| WF-3 | Submit to Lender<br/>Package & send file | docs-in | Internal prep task → Ops adds submitted → await lender → tag offer-out or lender-decline | offer-out / lender-decline |
| WF-4 | Offer Review<br/>Show terms; client decision | offer-out | Email+SMS terms + Calendly → event-wait for accept | funded or offer-declined |
| WF-5 | Review & Referral<br/>Social proof + upsell | funded | Day 1 review ask; Day 3 referral ask | End after sequence |
| WF-6 | Long-Term Nurture<br/>Recycle non-funded leads | unresponsive-docs, cold-lead, lender-decline, offer-declined | 14-day ed emails + 30-day SMS check-in loop | Tag re-engaged (auto) returns them to pipeline |
| WF-7 | Credit Repair<br/>Handle form-unqualified leads | form-unqualified | Special intro email explaining credit repair options | Sends to WF-6 Nurture |
| WF-8 | Calendar Confirmations<br/>Manage appointment reminders | customer-booked-appointment | Immediate confirmation + 1-day and 1-hour reminders | No exit - standalone flow |


⸻

3 Global Hot-Lead Sniffer Trigger

| Condition (OR logic) | Action |
|----------------------|--------|
| Conversation → Customer Replied | Add re-engaged, remove nurture-long, notify rep |
| Trigger Link "get-started" Clicked | Same as above |
| Appointment Created (any calendar) | Same as above |
| Keyword = READY / START | Same as above |

Follow-up branch:

IF Tag docs-in exists
    → Add Tag submitted
ELSE
    → Add Tag docs-requested



⸻

4 Mermaid Flowchart

```mermaid
graph TD;
    %% ---------- LEAD ENTRY POINT ----------
    Z1([Website Application])
    Z1 -->|AI Qualification| A1([Tag: form-qualified])
    Z1 -->|AI Decline| A0([Tag: form-unqualified])
    
    %% ---------- LOAN TYPE SELECTION / INITIAL STEPS ----------
    A1 --> A5([Tag: docs-requested])
    
    %% ---------- WF-7 CREDIT REPAIR ----------
    subgraph CreditRepair["WF-7 Credit Repair"]
        A0 --> A0a[Credit Repair Options Email]
        A0a --> A0b([Send to Nurture])
    end
    
    %% ---------- WF-2 DOCS CHASE ----------
    subgraph DocsChase["WF-2 Docs Chase"]
        A5 --> B1[Portal Link Email + SMS]
        B1 --> B2{{Docs-in tag?<br/>24 h wait}}
        B2 -->|Yes| B8([Tag: docs-in])
        B2 -->|No| R1[Reminder 1] --> W1(Wait 24 h) --> B3{{Docs-in tag?}}
        B3 -->|Yes| B8
        B3 -->|No| R2[Reminder 2 + Dialer] --> W2(Wait 24 h) --> B4{{Docs-in tag?}}
        B4 -->|Yes| B8
        B4 -->|No| B5([Tag: unresponsive-docs])
    end

    %% ---------- WF-3 SUBMIT TO LENDER ----------
    subgraph Submit["WF-3 Submit to Lender"]
        B8 --> C1[Internal Task: Package File]
        C1 --> C2([Tag: submitted])
        C2 --> C3{{Lender Offer?}}
        C3 -->|Offer| C4([Tag: offer-out])
        C3 -->|Decline| C5([Tag: lender-decline])
    end

    %% ---------- WF-4 OFFER REVIEW ----------
    subgraph OfferReview["WF-4 Offer Review"]
        C4 --> D1[Send Terms + Scheduling Link]
        D1 --> D2{{Client Accepts?}}
        D2 -->|Yes| D3([Tag: funded])
        D2 -->|No| D4([Tag: offer-declined])
    end

    %% ---------- WF-5 REVIEW & REFERRAL ----------
    subgraph ReviewReq["WF-5 Review & Referral"]
        D3 --> E1(Wait 24 h)
        E1 --> E2[Email: review links]
        E2 --> E3(SMS: quick ask)
        E3 --> E4(Wait 48 h)
        E4 --> E5[Email + SMS: referral offer]
    end

    %% ---------- WF-6 LONG-TERM NURTURE ----------
    subgraph Nurture["WF-6 Long-Term Nurture"]
        A0b --> N1([Tag: nurture-long])
        B5 --> N1
        C5 --> N1
        D4 --> N1
        N1 --> N2(Email every 14 d)
        N2 --> N3(SMS every 30 d)
        N3 --> N4{{Re-engaged tag?}}
        N4 -->|Yes| A5
        N4 -->|No| N2
    end
    
    %% ---------- WF-8 CALENDAR CONFIRMATION FLOW ----------
    subgraph CalendarFlow["WF-8 Calendar Confirmation"]
        CAL1([Calendar Booking<br/>Tag: customer-booked-appointment])
        CAL1 --> CAL2[Immediate Confirmation<br/>Email + SMS]
        CAL2 --> CAL3(Wait for 24h before appointment)
        CAL3 --> CAL4[1-Day Reminder<br/>Email + SMS]
        CAL4 --> CAL5(Wait until 1h before appointment)
        CAL5 --> CAL6[1-Hour Reminder<br/>SMS Only]
    end

```

⸻

5 SLA & Reporting Quick Notes

- Docs-in → Submitted should average < 8 hours.
  - Smart-List: Tag docs-in AND NOT submitted AND lastTagAddedDate > 8h
- Submitted → Offer-out lender SLA = ≤ 24 hours.
  - Alert built in WF-3 (Wait 24 h; if no offer tag, Slack #ops).
- Dashboard KPIs
  - CPL (qualified), Cost per Docs-in, Fund-rate %, Gross Commission, Payback ROAS.
  - Build in Looker Studio pulling GHL pipeline + ad spend sheet.
- Monthly QA
  - Randomly audit 5 funded files: must contain disclosure PDF, signed broker fee page, correct bank statements.

⸻

6 Calendar Appointment Workflow

This workflow triggers automatically when any prospect books a call using any of our calendar links. GoHighLevel Calendar ID: QB8uLe2eg2L0jJwAk8Hq

| Timing | Communication | Content |
|--------|---------------|---------|
| Immediate | Confirmation Email + SMS | Thank you for booking, appointment details, add to calendar link |
| 24h before | Reminder Email + SMS | Reminder of upcoming call, what to expect, any preparation needed |
| 1h before | SMS Only | Quick reminder that call is starting soon |

⸻

7 TODO List

- [x] Review all emails for correct calendar links and automations
- [ ] Set up business review profiles and monitoring:
  - [ ] Google Business Profile
  - [ ] Yelp
  - [ ] Trustpilot
- [ ] Create SOP documentation for lender offer handling process
- [x] Verify all email templates are mobile responsive
- [ ] Test calendar booking flow with confirmation and reminder sequences
- [ ] Set up automated reports for workflow KPIs
- [ ] Create training documentation for new sales team members

⸻

Need to change something?
1. Add / rename a tag here first → then update the Trigger or Workflow.
2. Update this doc and bump the "Last updated" date so everyone knows they're reading the latest playbook.

Happy funding!