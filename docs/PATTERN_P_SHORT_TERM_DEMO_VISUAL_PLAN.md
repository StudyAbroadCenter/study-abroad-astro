# Pattern P × RSJP Experience System — Comparison Test

Status: implementation branch `pattern-p-short-term-demo`
Purpose: compare the current RSJP Experience System with a Pattern P editorial-brand implementation without changing production pages.

## Product philosophy carried into the Pattern P test
- Student-centred recruitment experience, not a university information portal.
- Accuracy before persuasion; decision-critical facts must never be hidden under visual polish.
- Programme discovery must help students choose the right programme rather than merely display programme names.
- Mobile is a primary surface; 390px must preserve identity, key value, essential facts and next action.
- Authentic programme photography has priority over generic decorative imagery.
- Buddy / co-learning is part of the learning ecosystem, not a decorative side activity.
- Inbound participation should visibly connect to Ritsumeikan student learning, outbound study and long-term connections.
- Multilingual delivery is one product family: Japanese is the controlled master experience; facts remain shared while communication is naturally localised.
- Public evidence must be verified, scoped and privacy-safe.

## Pattern P translation
Pattern P is used as the visual language rather than the product strategy. The current RSJP strategy remains the governing product logic.

| RSJP principle | Pattern P expression |
|---|---|
| Programme discovery | mixed-scale programme mosaic with clear routes to detail pages |
| Decision-critical facts | dedicated contrasting decision tile and clarity section |
| Authenticity | existing real programme photographs |
| Buddy / co-learning | yellow editorial statement + documented activity mosaic + learning journey |
| Global evidence | large dark proof field using verified 2023–2026 aggregate evidence |
| Multilingual product family | language mosaic explaining same-facts / native-communication principle |
| Institutional impact | ecosystem diagram connecting inbound, co-learning, outbound and partner network |
| Mobile clarity | separate stacked / horizontal-rail composition rather than desktop shrinkage |

## Verified data used
The page imports `programmePublicDescriptors`, `shortTermParticipationEvidence`, and `documentedCoLearningActivities` from the repository. It does not invent dates, fees, eligibility, accommodation conditions or programme status.

## Visual QA
Authoritative visual language: Pattern P — Modular Editorial Brand Grid / Story Mosaic.
Product authority: current repository product/UX/design/localisation specifications and verified data sources.

Next gate after this single batched commit:
1. wait for one Vercel Preview Deployment;
2. inspect `/pattern-p-demo` at representative desktop and mobile widths;
3. compare against both the approved Pattern P visual reference and the current production homepage;
4. record material deviations before any further push.

Vercel saving rule for this test: batch corrections before the next commit; do not push cosmetic changes one by one.
