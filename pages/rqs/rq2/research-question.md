# RQ2 - Current Interpretation

## Best current wording

How do architectural modularity, configurability, and deployment context shape what counts as the system boundary in ROS 2-style robotics systems?

## Plain-language version

When a ROS 2 robotic system is made of many parts and can be deployed in many ways, where does the system start and stop?

## What this question is trying to find out

It asks how boundaries are produced by architecture, configuration, runtime deployment, infrastructure, tool abstractions, and practice.

## What would count as an answer

An answer would classify boundary types, show how they shift across purposes, and explain how modularity/configuration/deployment context make boundary-setting an active integration task.

## What this question is not asking

It asks about how system boundaries are made and maintained, including but not limited to ROS graph structure. It treats boundaries as practical and technical achievements rather than arbitrary labels, and it leaves the assurance-over-change question to RQ4.

The boundary with RQ4 is under review. RQ2 should stay focused on the architectural and practical conditions through which modular robotic systems are composed, bounded, and integrated. RQ4 should take over when the issue becomes the validity and maintenance of assurance claims as those systems change.

## Relation to other RQs

- RQ1 `supports` RQ2 by showing how integrators interpret boundaries.
- RQ2 `supports` RQ3 by defining the interfaces across which safety/security concerns emerge.
- RQ2 `supports` RQ4 because assurance claims require scoped systems and conditions.

## Current confidence

Medium-high. The wording is explicit in the current RQ redraft and wiki pathways, but recent feedback suggests the distinction from RQ4 may not yet be visible enough to a reader.

## Source provenance

- [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md)
- [wiki/meta/rq-pathways.md](../../../wiki/meta/rq-pathways.md)
- [wiki/concepts/system-boundary.md](../../../wiki/concepts/system-boundary.md)
- [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md#known-tensions-and-boundaries-under-review)
