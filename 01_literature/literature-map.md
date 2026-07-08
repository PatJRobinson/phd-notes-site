# Literature Map

## Current review position

The literature review should be a structured integrative review, or a systematized interpretive narrative review with transparent search and selection procedures. The object of study is cross-layer assumptions in robotics systems: how assumptions about behaviour, integration, security, assurance, and practice are distributed across standards, middleware, tooling, architecture, and practitioner work.

This map is seeded from three commissioned reports:

- [Defensible search appendix report](../02_my_notes/analysis_fragments/commisioned-reports/definsible-search-appendix-for-a-cross-layer-narrative-review-in-robotics-assurance.md)
- [Theoretical foundation report](../02_my_notes/analysis_fragments/commisioned-reports/the-strongest-theoretical-foundation-for-this-project.md)
- [Progression literature survey report](../02_my_notes/analysis_fragments/commisioned-reports/what-counts-as-a-suitable-literature-survey-for-your-progression-exam.md)

## Mapping table

| Strand | Anchor | Current role in thesis | Relevant RQs | Status |
|---|---|---|---|---|
| Review method | [Structured integrative review](review-methods/structured-integrative-review.md) | Defends a heterogeneous, cross-disciplinary literature review without pretending to be a full SLR. | All | active |
| Review method | [Systematized interpretive narrative review](review-methods/systematized-interpretive-narrative-review.md) | Provides the progression-stage review identity: transparent, strand-based, interpretive, defensible. | All | active |
| Review method | [SANRA](review-methods/sanra-narrative-review-quality.md) | Quality support for describing the search strategy in a non-systematic review. | All | active |
| Review method | [Snyder review methodology](review-methods/snyder-review-methodology.md) | Supports the claim that narrative/integrative reviews need explicit search logic and synthesis rationale. | All | active |
| Review method | [Critical interpretive synthesis](review-methods/critical-interpretive-synthesis.md) | Possible later publication identity; too ambitious as the main progression-stage claim. | All | possible later |
| Review method | [Search sources and log template](review-methods/search-sources-and-log-template.md) | Operationalises the search appendix: sources, search routes, and fields to record. | All | active |
| Progression | [Progression literature survey requirement](review-methods/progression-literature-survey-requirement.md) | Keeps the review proportionate to progression criteria: breadth, judgement, critical evaluation, and positioning. | All | active |
| Methodology | [Braun and Clarke thematic analysis](hci-infrastructure-practice/braun-clarke-reflexive-thematic-analysis.md) | Grounds theory-informed, abductive, reflexive thematic analysis over assumption records. | RQ1, RQ3, RQ4 | active |
| ROS/SE | [Albonico ROS SE mapping](ros-and-robotics-se/albonico-ros-software-engineering-mapping.md) | Field-level baseline for software-engineering research on ROS. | RQ2 | active |
| ROS/SE | [Malavolta ROS architecture practice](ros-and-robotics-se/malavolta-ros-architecture-practice-guidelines.md) | Evidence that ROS architecture practice and guideline extraction are already research objects. | RQ1, RQ2 | active |
| ROS/SE | [Canelas ROS misconfiguration](ros-and-robotics-se/canelas-ros-misconfigurations.md) | Direct bridge between ROS components, unchecked assumptions, and misconfiguration. | RQ2, RQ3 | high priority |
| ROS/SE | [Portugal ROS 2 adoption](ros-and-robotics-se/portugal-ros2-adoption.md) | Practice/adoption evidence for migration, expectations, and barriers. | RQ1, RQ2 | active |
| Middleware | [ROS 2 design documents](middleware-and-standards/ros2-design-documents.md) | Authoritative layer for DDS, QoS, discovery, middleware interface, and ROS security design. | RQ2, RQ3 | active |
| Middleware | [DDS specification](middleware-and-standards/dds-specification.md) | Communication semantics and QoS substrate underlying ROS 2. | RQ2, RQ3 | active |
| Middleware/security | [DDS Security specification](middleware-and-standards/dds-security-specification.md) | Security-plugin architecture, governance, permissions, and policy semantics. | RQ2, RQ3 | active |
| Middleware/security | [SROS2 usable security tools](middleware-and-standards/sros2-usable-security-tools.md) | Shows security tooling as configuration, certificates, policy files, and usability problem. | RQ3 | active |
| Middleware/security | [ROS 2 threat model](middleware-and-standards/ros2-threat-model.md) | Practice-facing threat model anchor for ROS 2 security assumptions. | RQ3 | useful, needs source audit |
| Standards | [NIST SP 800-160](middleware-and-standards/nist-sp-800-160.md) | Trustworthy systems engineering in complex cyber-physical/system-of-systems contexts. | RQ3, RQ4 | active |
| Standards | [IEC 62443-3-2](middleware-and-standards/iec-62443-3-2.md) | System-under-consideration, zones, conduits, and risk assessment for industrial systems. | RQ2, RQ3, RQ4 | active |
| Standards | [ISO 10218](middleware-and-standards/iso-10218.md) | Robot systems and integration standard; supports boundary/responsibility framing. | RQ2, RQ4 | active |
| Assurance | [SACE safety assurance](middleware-and-standards/sace-safety-assurance-autonomous-systems.md) | Supports claim that justified confidence is difficult in complex, changing autonomous systems. | RQ4 | active, needs detail |
| Theory | [Perrow, Normal Accidents](safety-resilience-theory/perrow-normal-accidents.md) | Macro-level problem diagnosis: complexity and tight coupling make hidden dependencies consequential. | RQ3, RQ4 | active but not sole anchor |
| Theory | [Rasmussen dynamic risk](safety-resilience-theory/rasmussen-risk-management-dynamic-society.md) | Strongest cross-level sociotechnical control/boundary-migration anchor. | RQ2, RQ4 | high priority |
| Theory | [Leveson STAMP](safety-resilience-theory/leveson-engineering-safer-world-stamp.md) | Engineering-facing theory of constraints, control, observability, and emergent safety. | RQ3, RQ4 | high priority |
| Theory | [Hollnagel resilience engineering](safety-resilience-theory/hollnagel-resilience-engineering-work-as-done.md) | Work-as-imagined/work-as-done, adaptation, and practice as safety/resilience material. | RQ1, RQ4 | active |
| HCI/STS | [Star and Ruhleder infrastructure](hci-infrastructure-practice/star-ruhleder-infrastructure.md) | Invisibility, installed base, standards, breakdown, and invisible work. | RQ1, RQ2, RQ3 | high priority |
| HCI/STS | [Suchman situated action](hci-infrastructure-practice/suchman-situated-action.md) | Limits of formal representations and plans; situated accommodation. | RQ1, RQ2 | active |
| HCI/cognition | [Hutchins distributed cognition](hci-infrastructure-practice/hutchins-distributed-cognition.md) | Unit of analysis becomes people, artefacts, representations, environments, and time. | RQ1 | active |
| HCI/design | [Norman design and mediated understanding](hci-infrastructure-practice/norman-design-mediated-understanding.md) | Conceptual models, user-facing representations, expectation/reality gaps. | RQ1 | useful but not enough alone |
| Grey literature | [CRANE and Safe/Secure Robotics SIG](bounded-grey-literature/crane-safe-secure-robotics.md) | Situates the project in UK cyber-security, dependable robotics, and socio-technical community priorities. | All | contextual |
| Grey literature | [GitHub and Zenodo practice artefacts](bounded-grey-literature/github-zenodo-practice-artifacts.md) | Bounded source class for issues, releases, discussions, research software, and deployment traces. | RQ1, RQ2, RQ3 | source class |

## Synthesis

The review should culminate in a gap statement close to this:

Existing literatures provide strong ways of describing components, middleware, standards, and assurance intentions, but weaker ways of identifying, representing, and reasoning about the cross-layer assumptions on which robotic system viability depends in practice.

## Current gaps

- Complete bibliographic details for the anchor notes.
- Run and log the strand-specific searches with dates, sources, exact queries, filters, hit counts, screened counts, and included counts.
- Separate peer-reviewed support from official documentation, standards, and bounded grey literature.
- Decide whether critical interpretive synthesis remains only a later publication possibility or becomes part of the thesis method language.
