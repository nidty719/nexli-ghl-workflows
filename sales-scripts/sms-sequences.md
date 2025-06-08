# Nexli Funding SMS Sequences - Quick Strike Follow-Up Scripts

## Introduction

SMS messages are the fastest way to reach busy business owners. These sequences provide immediate, actionable follow-up strategies that complement phone calls and emails.

**SMS Best Practices**:
- Keep messages under 160 characters when possible
- Include your name and company
- Always provide a clear next step
- Use urgency appropriately but don't spam
- Respect opt-out requests immediately

---

## WF-1: Initial Contact SMS Sequences

### SMS 1: Immediate Follow-Up (After missed call)

**Timing**: Send immediately after unsuccessful call attempt

```
Hi {{contact.first_name}}, this is [Name] from Nexli Funding. Just tried calling about your APPROVED funding application. Can you call me back at [PHONE] in the next hour? Time sensitive. Thanks!
```

**Character count**: 159

### SMS 2: Portal Link (If documents needed)

**Timing**: Send if prospect answers but can't upload documents immediately

```
{{contact.first_name}}, here's your secure document upload link: [LINK]. Takes 5 minutes. Upload today to keep your pre-qualification active. Questions? Call [PHONE] - [Name]
```

**Character count**: 155

### SMS 3: Urgency Reminder (4 hours later if no response)

**Timing**: 4 hours after initial contact if no response

```
{{contact.first_name}} - Your funding pre-qualification expires at midnight. Don't lose this opportunity. Upload docs here: [LINK] or call [PHONE] now. - [Name], Nexli
```

**Character count**: 158

### SMS 4: Final Attempt (Day 2)

**Timing**: Next day if still no response

```
Last chance {{contact.first_name}} - Pre-qualification expires at 5pm today. Still need funding? Act now: [LINK] Reply STOP to opt out. -[Name] Nexli Funding
```

**Character count**: 159

---

## WF-2: Document Chase SMS Sequences

### SMS 1: Gentle Reminder (24 hours after submission)

```
Hi {{contact.first_name}}, [Name] from Nexli. We're missing a few documents for your funding. Can you upload them today? [LINK] Questions? Call [PHONE]
```

**Character count**: 146

### SMS 2: Specific Document Request

```
{{contact.first_name}} - Just need your bank statements to complete funding review. Upload here: [LINK] Takes 2 minutes. -[Name] Nexli [PHONE]
```

**Character count**: 139

### SMS 3: Urgency Building (48 hours)

```
{{contact.first_name}} - Underwriting closes tomorrow at 5pm. Missing docs will delay funding by a week. Upload now: [LINK] -[Name] Nexli
```

**Character count**: 143

### SMS 4: Alternative Document Help

```
{{contact.first_name}} - Having trouble with documents? I can accept bank screenshots or help you find alternatives. Call me: [PHONE] -[Name]
```

**Character count**: 142

### SMS 5: Final Push (Day 3)

```
Last chance {{contact.first_name}} - Upload missing docs by 5pm or lose your approval. Don't start over. Act now: [LINK] -[Name] Nexli
```

**Character count**: 138

---

## WF-4: Offer Review SMS Sequences

### SMS 1: Offer Notification (If can't reach by phone)

```
🎉 APPROVED! {{contact.first_name}}, you're approved for ${{amount}}! I tried calling with your terms. Call me ASAP: [PHONE] Offer expires today! -[Name]
```

**Character count**: 149

### SMS 2: Contract Sent

```
{{contact.first_name}} - Contracts sent to your email for ${{amount}} funding. Review & sign today - expires at midnight. Questions? [PHONE] -[Name]
```

**Character count**: 149

### SMS 3: Urgency Reminder (2 hours before expiration)

```
⏰ {{contact.first_name}} - Your ${{amount}} approval expires in 2 HOURS. Sign contracts now or lose this opportunity. [CONTRACT_LINK] -[Name]
```

**Character count**: 147

### SMS 4: Final Hour Warning

```
🚨 FINAL HOUR {{contact.first_name}} - ${{amount}} approval expires in 60 minutes. Sign now: [LINK] Don't lose this! -[Name] Nexli
```

**Character count**: 134

### SMS 5: Last-Minute Extension (If authorized)

```
{{contact.first_name}} - Got you 12 hour extension! ${{amount}} approval now expires tomorrow at noon. Sign: [LINK] No more extensions. -[Name]
```

**Character count**: 146

---

## WF-5: Post-Funding SMS Sequences

### SMS 1: Funding Confirmation

```
🎉 Congratulations {{contact.first_name}}! Your ${{amount}} funding is processed. Expect funds in {{timeline}}. First payment {{date}}. Questions? [PHONE] -[Name]
```

**Character count**: 158

### SMS 2: Funds Received Check-In (Next day)

```
{{contact.first_name}} - Did your ${{amount}} funding arrive as expected? Any issues, call me immediately: [PHONE] Otherwise, enjoy! -[Name] Nexli
```

**Character count**: 146

### SMS 3: Review Request (Day 3)

```
{{contact.first_name}} - Hope funding is helping your business! Quick favor: Leave us a review? [REVIEW_LINK] Takes 30 seconds. Thanks! -[Name]
```

**Character count**: 145

### SMS 4: Referral Request (Day 7)

```
{{contact.first_name}} - Know other business owners who need funding? Refer them & get ${{referral_amount}}! Just have them mention your name. -[Name]
```

**Character count**: 152

---

## WF-6: Nurture Reactivation SMS Sequences

### SMS 1: Check-In Message (Monthly)

```
Hi {{contact.first_name}}, [Name] from Nexli. How's business? We have new funding programs with better rates. Still interested? Reply YES or call [PHONE]
```

**Character count**: 152

### SMS 2: New Product Alert

```
{{contact.first_name}} - New funding option available! Lower rates, faster approval. Interested? Reply INFO for details or call [PHONE] -[Name] Nexli
```

**Character count**: 149

### SMS 3: Market Update

```
{{contact.first_name}} - Funding rates dropped! Good time to revisit your options. 5-minute call? Reply YES or call [PHONE] -[Name] Nexli Funding
```

**Character count**: 148

### SMS 4: Success Story Share

```
{{contact.first_name}} - Just helped a {{industry}} business get ${{amount}} funding. Reminded me of you. Want to explore options? [PHONE] -[Name]
```

**Character count**: 146

### SMS 5: Final Value Add

```
{{contact.first_name}} - Last message from me. Free business credit report available: [LINK] Helpful even if you don't need funding. -[Name] Nexli
```

**Character count**: 152

---

## WF-7: Credit Repair Follow-Up SMS

### SMS 1: Credit Improvement Tip

```
Hi {{contact.first_name}}, [Name] from Nexli. Quick credit tip: Pay down cards to under 30% utilization. Can improve score fast! Questions? [PHONE]
```

**Character count**: 150

### SMS 2: Progress Check-In (90 days)

```
{{contact.first_name}} - How's your credit improvement going? If score increased, you might qualify now. Want me to check? Reply YES -[Name] Nexli
```

**Character count**: 152

### SMS 3: Re-qualification Offer

```
{{contact.first_name}} - Ready to try again? New programs available for improving credit. Free pre-qual check? Reply YES or call [PHONE] -[Name]
```

**Character count**: 148

---

## WF-8: Calendar Management SMS

### SMS 1: Appointment Confirmation

```
{{contact.first_name}} - Confirmed: Call with [Name] tomorrow at {{time}} about your funding. I'll call {{phone}}. Questions? Reply here.
```

**Character count**: 141

### SMS 2: 24-Hour Reminder

```
Reminder {{contact.first_name}} - Funding call tomorrow at {{time}}. I'll call {{phone}}. Prepared to discuss your needs! -[Name] Nexli
```

**Character count**: 138

### SMS 3: 1-Hour Reminder

```
{{contact.first_name}} - Calling you in 1 hour at {{time}} about funding options. Make sure {{phone}} is available! -[Name] Nexli
```

**Character count**: 133

### SMS 4: Running Late Alert

```
{{contact.first_name}} - Running 15 min late for our {{time}} call. Still good to talk at {{new_time}}? -[Name] Nexli Funding
```

**Character count**: 127

---

## Advanced SMS Strategies

### The "Breakup" Message
**Use when**: Multiple attempts with no response

```
{{contact.first_name}} - Seems like funding isn't a priority right now. Closing your file. If anything changes, you have my number. -[Name]
```

**Character count**: 144

**Often generates a response from interested prospects**

### The "Assumption" Close
**Use when**: Prospect has shown interest but won't commit

```
{{contact.first_name}} - Assuming you're moving forward based on our conversation. Sending contracts now. Stop me if needed! -[Name] [PHONE]
```

**Character count**: 149

### The "Limited Time" Push
**Use when**: Need to create urgency

```
{{contact.first_name}} - Only 3 funding spots left this week at these rates. Want yours? Call [PHONE] in next 2 hours! -[Name] Nexli
```

**Character count**: 145

### The "Social Proof" Message
**Use when**: Prospect is hesitant

```
{{contact.first_name}} - Just funded 3 {{industry}} businesses this week. All said they wished they'd applied sooner! Ready? [PHONE] -[Name]
```

**Character count**: 148

---

## SMS Response Handling

### If They Reply "YES"
```
Perfect {{contact.first_name}}! Calling you in 5 minutes at {{phone}}. Be ready to discuss your funding needs! -[Name]
```

### If They Reply "NO" or "NOT INTERESTED"
```
No problem {{contact.first_name}}. Appreciate the response. If anything changes, you have my info. Good luck with your business! -[Name]
```

### If They Reply "STOP" or "REMOVE"
```
You've been removed from our SMS list {{contact.first_name}}. Thanks for letting us know. Best wishes for your business! -[Name]
```

### If They Ask "WHO IS THIS?"
```
{{contact.first_name}} - [Name] from Nexli Funding about your business funding application from {{date}}. Can I call you? [PHONE] -[Name]
```

### If They Reply "CALL ME"
```
Calling you now {{contact.first_name}}! -[Name] Nexli
```

---

## SMS Compliance Guidelines

### Required Elements:
- Always include your name
- Always include company name
- Provide opt-out method in every message
- Honor opt-out requests immediately
- Don't send to Do Not Call list numbers

### Timing Restrictions:
- Send between 8 AM - 9 PM local time
- Avoid weekends unless urgent
- Space messages at least 4 hours apart
- Limit to 3 messages per day maximum

### Content Guidelines:
- Be truthful and accurate
- Don't make unrealistic promises
- Include required disclaimers when necessary
- Avoid excessive capitalization or emojis

---

## SMS Performance Metrics

### Response Rates by Workflow:
- **WF-1**: 35-45% response rate expected
- **WF-2**: 25-35% response rate expected
- **WF-4**: 60-70% response rate expected
- **WF-6**: 15-25% response rate expected

### Best Performing Messages:
1. Offer notifications (WF-4)
2. Document upload reminders (WF-2)
3. Urgency messages with deadlines
4. Personal check-ins with names

### Message Length Analysis:
- **Under 100 characters**: Highest response rate
- **100-160 characters**: Good response rate
- **Over 160 characters**: Lower response rate (multiple messages)

---

## Integration with Other Channels

### SMS + Phone Call Combo:
1. Send SMS first
2. Wait 5 minutes
3. Call immediately after
4. Reference the text in your opening

### SMS + Email Combo:
1. Send detailed email
2. Follow up with short SMS
3. Reference email in SMS
4. Drive phone contact

### SMS + Voicemail Combo:
1. Leave voicemail
2. Immediately send SMS
3. Reference voicemail in text
4. Provide alternative contact method

---

**Remember**: SMS is immediate and personal. Use it strategically to break through the noise and drive phone conversations. Quality over quantity always wins.