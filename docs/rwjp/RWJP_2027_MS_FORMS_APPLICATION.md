# 2027 RWJP Microsoft Forms application design

Status: Proposed application intake design confirmed in principle by programme owner on 2026-08-14.

## Purpose

Use Microsoft Forms as a lightweight first-stage application for external applicants. The form should collect only the minimum personal information needed to identify the applicant, confirm basic eligibility, understand Japanese-learning background, and continue the admissions process.

This first-stage form must not be treated as the document-submission system. External applicants are not expected to upload the official supporting documents through this form.

## Recommended fields

### Applicant identity and contact

1. Full name as shown on passport — required, short text
2. Preferred name — optional, short text
3. Email address — required, email-format text
4. Email address confirmation — required, email-format text
5. Country/region of citizenship — required, choice or short text
6. Current country/region of residence — required, choice or short text

Do not collect passport number, passport image, home address, emergency-contact details, financial information, medical details, or other high-sensitivity data at this first stage unless a later operational need is formally approved.

### University enrolment and eligibility

7. Current university / graduate school — required, short text
8. Country/region of institution — required, short text or choice
9. Current study level — required, choice: Undergraduate / Graduate / Other
10. Current enrolment status — required, choice: Full-time student / Part-time student
11. Expected graduation date — required, month/year or short text
12. Eligibility confirmation — required, Yes/No: I confirm that I will be enrolled at a university or graduate school both when I apply and when the programme takes place.

If No, the form should explain that the applicant does not meet the RWJP eligibility rule and should contact the programme office before continuing.

### Japanese-learning background

13. Have you studied Japanese before? — required, Yes/No
14. Approximate length of Japanese study — conditional, choice or short text
15. Where/how have you studied Japanese? — conditional, short text
16. JLPT level, if any — required choice: None / N5 / N4 / N3 / N2 / N1
17. N1 eligibility gate — if N1 is selected, display that JLPT N1 holders are not eligible for RWJP and direct the person to the programme office if clarification is needed.
18. Hiragana/Katakana confirmation — required acknowledgement: If I am a complete beginner, I understand that I must master hiragana and katakana before the programme begins.

### Programme and accommodation intention

19. Do you wish to request Taishogun Dormitory accommodation? — required, Yes / No / Undecided
20. Accommodation acknowledgement — required acknowledgement: Dormitory accommodation is not included in the programme fee, is subject to availability, and is not guaranteed.

This question is an intention check only and must not be worded as an accommodation reservation or guarantee.

### Application route and university coordination

21. Has your home institution instructed you to obtain a nomination or recommendation? — required, Yes / No / Not sure
22. If Yes, name of the relevant office/person at your institution — optional short text
23. Applicant acknowledgement — required: I understand that I should check with my home institution whether nomination or recommendation is required before submitting my final application documents.

### Final confirmations

24. Programme period acknowledgement — required: I understand that 2027 RWJP runs from 12 January to 11 February 2027.
25. Programme fee acknowledgement — required: I understand that the programme fee is JPY 370,000 and accommodation is separate.
26. Participation acknowledgement — required: I understand that active participation in Japanese classes and programme activities is expected.
27. Data-use notice acknowledgement — required: I understand that the information in this form will be used only for RWJP application screening, applicant communication, and programme administration in accordance with the applicable university privacy rules.
28. Optional message to the programme office — optional, long text, with a note not to enter sensitive medical, passport, financial, or confidential information.

## Do not collect in this form

- Passport copy or passport number
- Enrolment certificate
- Academic transcript
- Medical certificate or medical history
- Japanese essay file
- Visa documents
- Credit-card or banking information
- Detailed home address unless later operationally necessary
- Emergency-contact details at this initial stage

These documents/information should be collected later through an approved secure process after initial application/eligibility handling.

## Form settings

- External public response enabled only for the application period.
- Do not require a Microsoft organisational sign-in from external applicants.
- Do not enable file upload for this public form.
- Use required fields only where the information is genuinely necessary.
- Use branching for eligibility gates (not enrolled / JLPT N1) so ineligible applicants receive a clear explanation instead of submitting a misleading application.
- Confirmation screen should state that submission is not an acceptance decision and that the programme office will contact the applicant by email.
- Close the form automatically or manually immediately after the application deadline.
- Export access should be limited to authorised programme staff.

## Website integration

The public RWJP page must keep the Apply button disabled until the exact Microsoft Forms public response URL is confirmed. Once confirmed, set the canonical `application` destination in `src/data/rwjp-journey-links.ts`; do not paste the Forms URL into multiple components.
