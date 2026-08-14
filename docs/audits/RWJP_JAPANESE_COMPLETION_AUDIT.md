# RWJP Japanese Completion Audit

Status: **IN PROGRESS / CONTENT KNOWLEDGE STRONG / PUBLICATION NOT YET GO**

Scope: `/programs/rwjp/`

Verified: 2026-08-14

## Executive judgement

The Japanese RWJP page has moved beyond a visual prototype. Core 2027 facts and a large body of operational knowledge have now been confirmed by the programme owner. The remaining risk is no longer mainly "missing knowledge". It is now **integration, consistency, conversion flow, and maintainability**.

The current branch is suitable for continued completion work, but it is **not yet ready to merge as the final public RWJP Japanese master page**.

## What is now strong

### Core annual facts — confirmed

- Programme: 2027 Ritsumeikan Winter Japanese Program (RWJP)
- Programme period: 2027-01-12 through 2027-02-11
- Application period: 2026-09-30 through 2026-10-14
- Programme fee: JPY 370,000
- Daishogun Dormitory fee: JPY 94,500, paid in addition to programme fee when used
- Dormitory stay: check-in on 2027-01-11; check-out on 2027-02-12
- Daishogun accommodation is not guaranteed if rooms are physically unavailable
- Students may arrange external accommodation at their own cost while still paying the full programme fee to Ritsumeikan
- Programme and dormitory fees are paid together when Daishogun is used
- Payment instructions are sent after acceptance
- Failure to pay by the deadline causes automatic loss of the place
- Cancellation before payment: no cancellation fee
- Cancellation after payment: JPY 54,000 management fee plus any already-arranged non-refundable costs are deducted before refund

### Eligibility and Japanese study rules — confirmed

- Applicants must be currently enrolled university or graduate students
- Pre-enrolment and post-graduation applicants are not eligible
- Working adults enrolled as part-time university/graduate students are eligible
- JLPT N1 holders are not eligible
- Zero-beginner applicants may apply
- Hiragana and katakana must be mastered before programme start
- Hiragana/katakana are not taught from the beginning during the programme
- Japanese classes use the direct method and are conducted principally in Japanese
- Preliminary class placement uses prior Japanese study history and the handwritten Japanese essay
- Placement test is held in the first period of the first Japanese class, not necessarily on the programme's first day
- 2027 RWJP Japanese classes begin on programme day 2
- Students may consult their teacher about a class-level change after classes begin
- Assessment includes tests, quizzes, attendance, assignments, presentations, and participation
- Grades: A+, A, B, C, F
- Transcript and certificate are issued only when completion requirements are met
- No Ritsumeikan academic credit is issued

### Attendance, culture, conduct and safety — confirmed

- Participation in all scheduled Japanese classes, cultural activities and programme activities is expected in principle
- Japanese study and cultural activities each require at least two-thirds attendance for certificate eligibility
- The two-thirds rule is a minimum completion threshold, not permission to miss one-third freely
- Absence should be reported as early as possible by phone or email
- Repeated absence/late arrival may result in an interview with the programme office
- Serious or continued misconduct may result in termination without refund and notification to the home university
- Serious violations may also result in immediate Daishogun eviction without refund
- In such cases transcript and certificate may be withheld
- Staff instructions, Japanese law, university rules and dormitory rules must be followed
- Saturday and Sunday are normally programme holidays
- Japanese public holidays are not automatically programme holidays; Japanese classes/cultural activities may be held
- Domestic weekend travel needs no prior report and is at the participant's own risk
- Overseas leisure travel during the programme is not prohibited but is not recommended; it must not cause absence
- Employment/part-time work is prohibited
- For safety, participants may not use or purchase bicycles, rental bicycles, kick scooters, motorcycles, cars, skateboards, roller skates or similar wheeled personal transport during the programme, including weekends/free time
- Passenger travel in taxis or vehicles driven by family/friends is not prohibited

### Visa, insurance and medical support — confirmed

- Participants who need a visa use a short-term stay visa, not a student visa
- After programme payment, Ritsumeikan prepares the university-side visa application documents
- Visa application/consular costs are the participant's responsibility
- Visa issuance is not guaranteed by Ritsumeikan
- Visa refusal does not create additional compensation; the normal cancellation/refund policy applies
- Ritsumeikan purchases travel insurance for the programme period
- Pre-existing conditions and dental/tooth pain are outside the stated normal coverage scope
- Insurance app provides 24-hour contact support in Japanese, English, Chinese and Korean
- Participants should download/activate the app and use it first in an emergency
- Medical visits are normally handled by the participant; programme staff may accompany when appropriate

### Application process and documents — confirmed

- Individual online application is allowed
- Some home universities coordinate nominations/applications; applicants should check with their home university first
- Selection result is notified by email
- Required documents include enrollment certificate, passport copy, Japanese essay, Ritsumeikan-prescribed medical form, and academic transcript
- Certificate documents must be issued in English
- Medical form must use the Ritsumeikan template downloaded from the programme website and requires a physician's signature
- Japanese essay must use the programme template, follow the stated topic, be handwritten, and must not use translation software
- Essay quality does not determine acceptance
- Applicants unable to write Japanese should state that in English on the template

### Daishogun Dormitory — confirmed to a high level

- Up to four same-gender participants per room
- Two bunk beds per room
- Up to 12 rooms
- Shared showers, toilets and kitchen
- Free Wi-Fi
- Heating and air-conditioning
- No curfew
- Shared showers/toilets are available 24 hours
- Paid washing machines and dryers; exact fee remains unconfirmed
- No meal service
- Shared kitchen includes refrigerator, microwave, pots, pans, knives, plates and cutlery
- No cooking oil or seasonings are supplied
- Bedding, sheets and pillow are supplied
- Toilet paper is supplied
- Towels, tissues, detergent, shampoo, soap, toothpaste/toiletries must be supplied by the participant
- No iron, hair dryer or hangers are supplied
- Desk and chair are provided
- In-room storage is limited; suitcase storage space is available
- Shared lounge/common area and TV are available
- No common-use PC or printer
- Rooms/roommates/beds are assigned by the university/programme office; participants cannot choose them
- Unapproved room/bed swaps are prohibited
- Outside visitors are prohibited, including daytime visits and overnight stays
- Dormitory staff cannot receive parcels/Amazon deliveries on behalf of residents
- Residents clean their own rooms and follow Kyoto City waste-separation rules
- Damage/loss of facilities, equipment or keys is charged to the participant
- Check-in/check-out are within controlled time windows; exact official windows remain to be confirmed
- Temporary working assumption only: check-in 15:00–18:00; check-out 09:00–12:00
- Check-out includes a dormitory staff inspection and is not a free-choice departure time

## Strict audit findings

### P1-1 — Confirmed knowledge is not yet fully wired into the public page

A large amount of confirmed policy now exists as data/policy files, but the visible RWJP page currently exposes only a subset through `RwjpDecisionPanel`. Visa, application documents, attendance/completion, insurance, conduct, safety, practical preparation and most dormitory rules are not yet presented in a coherent public information architecture.

**Required action:** design and connect concise public sections/FAQ accordions from canonical data rather than leaving confirmed knowledge as unused source files.

### P1-2 — Data architecture is becoming fragmented

The branch contains many narrowly-scoped `rwjp-*.ts` policy files. This was useful while interviewing the programme owner, but keeping dozens of independent source files as the final architecture creates drift risk. Several concepts overlap with `rwjp-2027-facts.ts`, `rwjp-shared-knowledge.ts`, and shared Daishogun files.

**Required action:** consolidate before final merge into a small canonical hierarchy, for example:

1. annual facts (`RWJP 2027`: dates, fees, application period, annual schedule)
2. shared academic/participation policy
3. shared application/visa/insurance policy
4. shared Daishogun Dormitory policy (also reusable by RWJP Express)
5. presentation/localised copy layers for JA / EN / KO

The goal is one source of truth per fact, not one file per interview answer.

### P1-3 — Existing completion audit was stale

The earlier audit still listed accommodation, academic and culture information as unresolved even though these have now been substantially confirmed. This document is updated by this audit; future completion decisions must use the updated status.

### P1-4 — Payment presentation does not fully match the confirmed communication rule

`rwjp-2027-facts.ts` stores `Convera`, and the current Decision Panel publicly displays the payment method directly. The programme-owner instruction is that **the payment method/procedure is notified after acceptance**.

**Required action:** public page should say payment instructions are provided after acceptance. Convera may remain an internal/annual operational fact if desired, but should not become a durable public promise unless intentionally approved for publication.

### P1-5 — Application conversion journey is still missing

The page remains `noindex,nofollow`, and the current CTA explicitly states that the Japanese contact/application route is not yet active.

**Required action:** before GO, provide the real application destination and the Japanese inquiry/contact path, including a clear "Apply" and "Ask a Question" journey. Do not ship a recruitment page that explains everything but leaves the applicant at a dead end.

### P1-6 — Required downloadable forms are not yet connected

The medical certificate and Japanese essay require Ritsumeikan templates downloaded from the programme website, but the actual current downloadable assets/links are not yet connected in the audited page.

**Required action:** add authoritative downloadable forms or approved destinations and verify filename/version/year before publication.

### P1-7 — Current flagship wording overstates schedule regularity in places

The flagship page uses phrases such as "毎朝、日本語をしっかり学ぶ" and "毎日午前中". Confirmed policy is more precise: Japanese instruction follows the official schedule; 2027 RWJP's first Japanese class is programme day 2, and Japanese public holidays may still contain classes/activities.

**Required action:** keep the energetic tone but change absolute schedule language to wording such as "日本語講座のある日は、午前を中心にしっかり学ぶ" unless the final timetable confirms every weekday morning.

### P1-8 — Culture workload needs one final consistency check

Annual facts currently state 360 minutes of cultural learning/experience, while the programme-owner rule states that Japanese cultural experiences are conducted 11 times. Both may be correct, but the relationship is not yet self-explanatory.

**Required action:** verify whether `cultureMinutes: 360` remains the correct 2027 public figure and what it includes before using both figures together on the public page.

### P1-9 — Daishogun official check-in/check-out time windows remain provisional

Dates are confirmed, but official clock-time windows are not. Temporary assumptions are 15:00–18:00 and 09:00–12:00.

**Required action:** keep exact times out of public copy until the formal dormitory material is checked. Preserve only the confirmed rule that fixed time windows apply and that checkout includes staff inspection.

### P1-10 — Laundry price remains unknown

Laundry facilities and paid status are confirmed, but exact charges are unknown.

**Required action:** publish "有料" without inventing a price; optionally add the exact amount later when the official dormitory material is available.

### P1-11 — Public information must be layered, not dumped

The programme now has enough rules that publishing everything in one long page could reduce conversion rather than improve it.

**Required action:** use progressive disclosure:

- top: emotional value proposition + dates + fee + eligibility + Apply CTA
- decision section: programme structure, Japanese level, accommodation, refund
- practical section: arrival, devices, money, transport, insurance
- detailed FAQ: dormitory rules, conduct, visa, documents, attendance
- downloadable forms / application

This gives students confidence without turning the recruitment page into a legal manual.

## P2 — UX / technical verification before publication

Required before removing `noindex,nofollow`:

- desktop visual UAT
- tablet visual UAT
- 390px and 320px mobile UAT
- keyboard-only navigation and visible focus
- sticky-header / anchor offset behaviour
- image crop and loading behaviour
- reduced-motion behaviour
- heading hierarchy
- metadata, canonical and social-preview review
- application-date state behaviour around JST date boundaries
- broken-link scan
- downloadable-form link verification
- build/lint/test/CI green

## Current completion estimate

- **Programme knowledge:** 92–95%
- **Japanese recruitment copy/content:** ~80–85%
- **Canonical data architecture:** ~65–70% (too fragmented today)
- **Application/conversion journey:** ~50–60%
- **Publication/UAT readiness:** ~60–70%

Overall judgement: **about 78% complete as a Japanese master page.**

This is materially stronger than the earlier prototype, but the final 20% is the part that turns a beautiful page into a trustworthy recruitment system.

## Remaining questions — only targeted items

Do not resume broad interview-style questioning. Only resolve these targeted items when the source material is available:

1. Official Daishogun check-in clock-time window
2. Official Daishogun check-out clock-time window
3. Confirm whether 360 cultural-learning minutes remains the correct 2027 public figure alongside 11 cultural activities
4. Final authoritative URLs/files for the medical form and Japanese essay template
5. Final public Japanese application URL/form destination
6. Final Japanese inquiry/contact destination

Everything else should now move primarily through implementation and integration rather than further questioning.

## Release sequence

1. Consolidate canonical data/policies
2. Connect confirmed content to the Japanese page with progressive disclosure
3. Fix payment/schedule wording inconsistencies
4. Add application/contact and official downloadable forms
5. Preview UAT and accessibility review
6. CI / broken links / metadata / canonical checks
7. Remove `noindex,nofollow`
8. **GO — RWJP Japanese Master Page**
9. Create English adaptation from the same facts, written as natural native-facing English rather than literal translation
10. Create Korean adaptation from the same facts with the same fact IDs and policy structure

After RWJP is stable, reuse the architecture for RWJP Express, RDSP and RBMP.
