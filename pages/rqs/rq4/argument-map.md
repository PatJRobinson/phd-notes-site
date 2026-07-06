# RQ4 Argument Map

## Core argument

Assurance claims in modular robotics are only valid under scoped conditions, and those conditions can be altered by changes in composition, configuration, deployment context, evidence, and local knowledge.

## Supporting arguments

- A claim that holds in one realisation or deployment may not transfer automatically to another.
- Evidence can become stale without an obvious runtime failure.
- Local knowledge may be part of what makes a claim meaningful, but local knowledge is fragile.
- Rotifer-style evidence tracing can help identify what had to hold for a claim to be meaningful.

## Counterarguments / counterpressure

- Continuous assurance is not yet a method delivered by the project.
- RQ4 can become too broad if it tries to cover all assurance literature.
- Rotifer evidence is bounded and experimental; it should not be presented as production assurance.

## Dependencies between arguments

- `Assurance claims are scope-and-context dependent` `depends_on` RQ2 boundary work.
- `Change can invalidate evidence without obvious failure` `depends_on` RQ1 partial observability and local knowledge.
- `Continuous assurance is a problem space` `extends` RQ3 safety/security concerns into claim maintenance.

## Claims needing evidence

- Which changes most often invalidate claims in ROS 2-style systems.
- How practitioners know when evidence should be revisited.
- How Rotifer evidence objects might map to assurance artefacts.

## Source provenance

- [assurance-claim.md](../../../wiki/assurance/assurance-claim.md)
- [continuous-assurance.md](../../../wiki/assurance/continuous-assurance.md)
- [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [positioning-note.md](../../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)

