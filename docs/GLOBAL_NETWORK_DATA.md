# Global Learning Network data policy

The Global Learning Network section visualises Ritsumeikan short-term inbound education as both an institutional network and a student-to-student human network.

## Public-display rule

Every named country and university shown in the live network must be supported by a confirmed short-term programme participation, delivery, or partner-programme record. Do not add a university simply because it is a Ritsumeikan institutional partner.

The current review build contains 39 university examples across 9 countries / regions, confirmed for this project as short-term inbound / programme connection examples:

- United States: James Madison University (JMU), Case Western Reserve University (CWRU), Rutgers University, The City University of New York (CUNY), University of North Carolina Asheville (UNCA), Florida International University (FIU), University of Oklahoma, University of California, Davis (UC Davis), DePaul University, Georgia College & State University, University of Michigan, Appalachian State University, Princeton University
- Canada: University of Alberta, George Brown College, University of British Columbia (UBC), Simon Fraser University (SFU)
- Australia: Australian National University (ANU), RMIT University, The University of Melbourne, University of New South Wales (UNSW), Macquarie University, The University of Adelaide
- Korea: Yonsei University, Kyung Hee University, Sookmyung Women's University, Inha University, Gachon University, Konkuk University, Daejeon University, Pusan National University
- China: Shanghai Jiao Tong University, Shaoxing University, Beijing Normal University
- Taiwan: National Taiwan University (NTU), National Taiwan Normal University (NTNU)
- Indonesia: Universitas Airlangga
- Japan: Hiroshima University
- United Arab Emirates: Zayed University

The interface deliberately labels these as examples and explicitly states that the wider network includes additional countries, regions and universities that are not shown.

## Before public launch

Create or verify a source-of-truth table with at least:

- country / region
- official university name
- preferred short name
- programme name
- participation / implementation year(s)
- campus
- programme type (Japanese Language & Culture / Specialist / Custom)
- whether the relationship may be publicly named

The live `9 countries / regions` and `39 university examples` figures are calculated from `src/data/globalNetwork.ts`, not manually duplicated in the component. When the source-of-truth table is available, migrate those figures to verified historical data and calculate any participant totals from that table as well.

## Editorial principle

The visualisation should distinguish three layers:

1. **Fact** — participating countries, universities, programme records.
2. **Experience** — co-learning, interaction, language/culture experiences and student-to-student contact.
3. **Potential impact** — future learning, mobility and human networks. Describe this as possibility unless supported by measured outcomes.

Policy-oriented terms such as `国際共修`, `異文化間協働`, `国際教育連携`, `学生主体` and `学修成果の可視化` should be used only where the underlying activity supports the term. Student-facing copy remains primary.
