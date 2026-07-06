---
status: seed
maturity: draft
type: concept
author_review: needed
---

# System Boundary

## Short definition

A system boundary is the practical or analytical line around what counts as part of the system for a particular purpose.

## Why it matters

In modular robotics, the boundary may vary across design, deployment, runtime, debugging, responsibility, and assurance contexts. A ROS graph, a container boundary, a network boundary, a robot platform, a simulator, a deployment team, and an assurance case may each imply different boundaries.

This matters for safety/security because risks may cross the boundary assumed by a tool or standard. It matters for assurance because claims require a defined scope: what system, under which conditions, and with which external dependencies.

## In this PhD

The current RQ framing treats the system boundary as an empirical and analytical question rather than a fixed premise. The boundary is shaped by modularity, configurability, deployment context, and practice.

## Related concepts

- [Deployment context](deployment-context.md)
- [Modularity](modularity.md)
- [ROS 2-style robotics](../ros2/ros2-style-robotics.md)
- [Assurance claim](../assurance/assurance-claim.md)
- [Integrator](../practice/integrator.md)

## Sources and anchors

- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Fragmentation and Architectural Instability](../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)

## Open questions

- Which boundary types should become named sub-concepts in a later wiki pass?
