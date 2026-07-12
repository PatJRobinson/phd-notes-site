# Unresolved Decisions

## Research question wording

- Decide whether each RQ should explicitly say "ROS 2-style robotics".
- RQ1 terminology is mostly resolved for now: "mental models" and "working understanding" can be used interchangeably at this stage, with "working understanding" as the safer operational term.
- RQ4 is retained for now, but still needs to show whether it is a full RQ, a synthesis chapter, or both.
- Recent feedback suggests the RQ2/RQ4 boundary may not be visible enough. Decide whether to revise wording, add scope statements, or test the distinction through chapter outlines.

## Concept naming

- Review `assumption-bearing invariant`; it is synthesised and may need a cleaner name.
- Decide whether `command authority` is a concept, case, invariant, or all three.
- Decide whether responsibility handoffs are interfaces or a separate concept.
- Decide whether `visibility and observability` should be split.
- Decide whether `assumption` remains a sensitising concept, becomes a typology, or becomes a smaller set of analytical dimensions.
- Decide whether `scenario` remains one comparative term or splits into scenario, configuration, operating context, test case, and assurance context.
- ROSness is now promoted as a valid source for the ROS 2-style robotics thread, with older security-invariant provenance retained.

## Scope boundaries

- Keep RQ3 distinct from RQ4 unless deliberately merging the assurance thread.
- Decide how central Rotifer is to the thesis as a whole.
- SROS2 is now positioned as an important mediating technology and official ROS 2 security mechanism, not the thesis centre.
- Safety/security is now positioned as motivating/consequential rather than structurally central.
- Keep case studies analytical and evidence-traceable rather than merely illustrative.

## Evidence gaps

- Practitioner evidence for working understanding, responsibility boundaries, operational pressure, and lifecycle drift.
- Direct case evidence for safety/security interaction beyond command authority.
- Standards-specific assurance analysis.
- External/user evaluation of Rotifer.
- Literature-backed ROSness/prevalence evidence.
- Public evidence for candidate case studies, including AMR deployments, scenario constructs in standards, SROS2 policy practice, and IEC 62443 boundary examples.
- Literature grounding for the Rotifer developer-facing design-research direction.

## Notes requiring human judgement

- [rotifer-forest-for-the-trees.md](../../02_my_notes/analysis_fragments/rotifer-forest-for-the-trees.md)
- [robotics-security-as-layer-misalignment.md](../../02_my_notes/analysis_fragments/robotics-security-as-layer-misalignment.md)
- [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [Prevalence or 'ROSness'.md](../../03_research_questions/Prevalence%20or%20'ROSness'.md)
- [case-studies/index.md](../../02_my_notes/case-studies/index.md)
- [rotifer-as-developer-facing-design-research.md](../../05_prototype_ideas/robotics-testbench-framework/rotifer-as-developer-facing-design-research.md)
- NotebookLM/commissioned analysis fragments

## Rotifer paper decisions

- Nav2 ladder and assumption-tracing methodology are now the paper centre; command authority is secondary/security-relevant and possible follow-on paper material.
- Tool paper vs method paper vs thesis evidence chapter.
- How much implementation detail to include.
- Whether SROS2 is future work or a paper discussion section.
- Whether developer-facing design research belongs in the current paper, a later output, or only the thesis methodology.

## Case-study and article decisions

- Which candidate case should become the first public article.
- Which outputs belong under [06_outputs](../../06_outputs/) as authored work.
- How to represent mature public articles in the organised notes without rewriting their substantive argument.
- Whether the scenario explainer should be a standards comparison, Rotifer article, or methods note.

## Safety/security decisions

- Whether to add a second safety/security case.
- Whether secure-by-design remains title-level language.
- Whether to develop a dedicated SROS2/DDS security section.
