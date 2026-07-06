# RQ2 Argument Map

## Core argument

In ROS 2-style robotics, system boundaries are operationally constructed through modular architecture, configuration, deployment context, and integration practice.

## Supporting arguments

- ROS 2 provides useful abstractions, but a ROS graph is not the only relevant boundary.
- Deployment context can change timing, discovery, permissions, observability, and responsibility.
- Modularity and provider substitution make system identity a relation between scenario intent, contracts, realisations, and runtime infrastructure.
- Configuration is not a minor implementation detail; it can define boundary conditions.

## Counterarguments / counterpressure

- Boundary instability can sound too strong. The safer claim is that boundaries are purpose-relative and require maintenance.
- RQ2 risks becoming purely conceptual unless tied to concrete ROS/DDS/Rotifer examples.

## Dependencies between arguments

- `System boundaries are operationally constructed` `depends_on` modularity, configuration, and deployment context.
- `Deployment context changes system meaning` `supports` RQ4 assurance-over-change.
- `Modularity shifts work to integration` `supports` RQ1 and RQ3.

## Claims needing evidence

- Which boundary types matter most in actual practitioner workflows.
- Which Rotifer provider/realisations examples best demonstrate boundary shifts.
- How industrial ROSness/workflow augmentation changes boundary assumptions.

## Source provenance

- [system-boundary.md](../../../wiki/concepts/system-boundary.md)
- [deployment-context.md](../../../wiki/concepts/deployment-context.md)
- [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [rotifer-devlog-15-05-26.md](../../../05_prototype_ideas/robotics-testbench-framework/rotifer-devlog-15-05-26.md)

