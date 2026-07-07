# Unresolved Decisions

## Research question wording

- Decide whether each RQ should explicitly say "ROS 2-style robotics".
- RQ1 terminology is mostly resolved for now: "mental models" and "working understanding" can be used interchangeably at this stage, with "working understanding" as the safer operational term.
- RQ4 is retained for now, but still needs to show whether it is a full RQ, a synthesis chapter, or both.

## Concept naming

- Review `assumption-bearing invariant`; it is synthesised and may need a cleaner name.
- Decide whether `command authority` is a concept, case, invariant, or all three.
- Decide whether responsibility handoffs are interfaces or a separate concept.
- Decide whether `visibility and observability` should be split.
- ROSness is now promoted as a valid source for the ROS 2-style robotics thread, with older security-invariant provenance retained.

## Scope boundaries

- Keep RQ3 distinct from RQ4 unless deliberately merging the assurance thread.
- Decide how central Rotifer is to the thesis as a whole.
- SROS2 is now positioned as an important mediating technology and official ROS 2 security mechanism, not the thesis centre.
- Safety/security is now positioned as motivating/consequential rather than structurally central.

## Evidence gaps

- Practitioner evidence for working understanding, responsibility boundaries, operational pressure, and lifecycle drift.
- Direct case evidence for safety/security interaction beyond command authority.
- Standards-specific assurance analysis.
- External/user evaluation of Rotifer.
- Literature-backed ROSness/prevalence evidence.

## Notes requiring human judgement

- [rotifer-forest-for-the-trees.md](../../02_my_notes/analysis_fragments/rotifer-forest-for-the-trees.md)
- [robotics-security-as-layer-misalignment.md](../../02_my_notes/analysis_fragments/robotics-security-as-layer-misalignment.md)
- [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [Prevalence or 'ROSness'.md](../../03_research_questions/Prevalence%20or%20'ROSness'.md)
- NotebookLM/commissioned analysis fragments

## Rotifer paper decisions

- Nav2 ladder and assumption-tracing methodology are now the paper centre; command authority is secondary/security-relevant and possible follow-on paper material.
- Tool paper vs method paper vs thesis evidence chapter.
- How much implementation detail to include.
- Whether SROS2 is future work or a paper discussion section.

## Safety/security decisions

- Whether to add a second safety/security case.
- Whether secure-by-design remains title-level language.
- Whether to develop a dedicated SROS2/DDS security section.
