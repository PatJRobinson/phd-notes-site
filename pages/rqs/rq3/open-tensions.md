# RQ3 Open Tensions

## Live tensions

- RQ3 vs RQ4 boundary: RQ3 asks how safety/security concerns emerge and are managed across interfaces; RQ4 asks how assurance claims remain valid over change. Rotifer and fragmentation notes often speak in assurance language, so they can blur the boundary.
- Safety/security relation: "no safety without security" is useful rhetorically, but the organised notes must keep safety and security distinct.
- Interface scope: the concept is powerful because it spans software, tooling, practice, and responsibility, but it risks becoming too broad.
- Rotifer role: Rotifer currently supports assumption tracing and evidence binding more strongly than full safety/security assurance.
- Empirical status: several RQ3 concepts are well-formed interview prompts but not yet findings.

## Historical tensions that may still matter

- Earlier assumption-misalignment framing may still offer explanatory power, but it can make the project sound like it has already decided the mechanism.
- Layer-misalignment framing usefully explains why robotics security frameworks may struggle with unstable system definitions, but it may be too governance-heavy for RQ3 if not tied to interfaces.
- Fragmentation and architectural instability strongly motivate assurance questions, but RQ3 should avoid turning every interface issue into an assurance claim.

## Superseded tensions

- "Is ROS incomplete?" is not the main question. The current framing treats incompleteness as normal for abstractions and asks how the remaining responsibilities are managed.
- "Is Rotifer a portability tool?" is superseded by the stronger framing of Rotifer as assumption tracing and evidence classification.

## Decisions needed from me

- Should command authority be the flagship RQ3 case or only one case among several?
- Should SROS2 be treated as central to RQ3 or as a technical anchor for one strand?
- Should responsibility handoffs be treated as a type of interface or as a separate concept?
- How strongly should the thesis use "assumption" language in RQ3?

## Risks if unresolved

- RQ3 may collapse into RQ4 and lose its safety/security specificity.
- The project may overclaim Rotifer as a safety/security tool.
- The empirical study may ask about "developer reasoning" too broadly without a clear unit of analysis.
- Interface may become a catch-all term and weaken analytical precision.

## Source provenance

- [wiki/meta/rq-pathways.md](../../../wiki/meta/rq-pathways.md)
- [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md)
- [robotics-security-as-layer-misalignment.md](../../../02_my_notes/analysis_fragments/robotics-security-as-layer-misalignment.md)
- [rotifer-forest-for-the-trees.md](../../../02_my_notes/analysis_fragments/rotifer-forest-for-the-trees.md)
- [Threat Models and Mental Models.md](../../../04_research_methodologies/Threat%20Models%20and%20Mental%20Models.md)
