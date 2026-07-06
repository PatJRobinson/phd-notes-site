# RQ3 Argument Map

## Core argument

Safety/security concerns in ROS 2-style robotics are often produced and managed at integration interfaces because system-level behaviour depends on cross-layer conditions that no single component, abstraction, tool, or practitioner role fully owns.

This argument `depends_on` the current RQ framing, the interface/integration concept pages, the fragmentation argument, the interview concept map, and Rotifer evidence work.

## Supporting arguments

- Interface meanings are not self-guaranteeing. ROS topics, frames, DDS entities, QoS settings, simulator bridges, SROS2 policies, and launch files all expose interaction surfaces, but their safety/security meaning depends on configuration and context.
- ROS 2 abstractions are partial. They simplify integration while displacing responsibility for deployment architecture, timing, reliability, authority, and evidence to integrators.
- Operational pressure changes security practice. Security mechanisms may be weakened or bypassed when they conflict with uptime, debugging, or delivery pressure.
- Visibility determines actionability. If relevant system state cannot be observed and interpreted, safety/security concerns become difficult to evidence.
- Executable assumption tracing can turn opaque failures into evidence by classifying which boundary was reached.

## Counterarguments / counterpressure

- RQ3 risks becoming too broad if "interface" includes everything.
- The safety/security relation may be rhetorically strong but empirically under-evidenced unless specific cases are selected.
- Rotifer evidence currently supports assumption tracing and navigation/command surfaces more strongly than it supports organisational management of safety/security.
- SROS2 and DDS can enforce some properties, so the argument must not imply that middleware mechanisms are irrelevant.

## Dependencies between arguments

- `Safety/security emerges at integration interfaces` `depends_on` `Abstractions displace system-level responsibility`.
- `Executable assumption tracing turns failures into evidence` `supports` both the interface argument and the claim that concerns can be studied materially.
- `Operational pressure changes security practice` `supports` the empirical-management side of RQ3.
- `Visibility determines actionability` `supports` the link between integrator practice and technical evidence.

## Claims needing evidence

- Which safety/security concerns actually arise in observed practitioner workflows?
- How often are responsibility boundaries assumed rather than enforced?
- Which SROS2/DDS policy issues appear in real integration practice versus constructed cases?
- Whether command-authority probes can be extended from experimental semantics to safety/security case material.

## Source provenance

- [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Core Concepts.md](../../../02_my_notes/Interview%20Preperation/Core%20Concepts.md)
- [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [robotics-security-as-layer-misalignment.md](../../../02_my_notes/analysis_fragments/robotics-security-as-layer-misalignment.md)
- [plan_06-06-26.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/plan_06-06-26.md)

