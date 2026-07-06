---
status: seed
maturity: draft
type: concept
author_review: needed
---

# Modularity

## Short definition

Modularity is the organisation of a system into separable components that can be developed, configured, replaced, composed, or reused.

## Why it matters

Modularity is central to ROS 2-style robotics because systems are often assembled from packages, nodes, drivers, controllers, simulators, bridges, sensors, and infrastructure tools. Modularity supports reuse and flexibility, but it also shifts work to integration.

The safety/security issue is not modularity itself. The issue is that composed behaviour may depend on assumptions that are not captured by component-level descriptions. Assurance claims may also become harder to maintain when components, configurations, or operating contexts change.

## In this PhD

Modularity is treated as part of the condition that makes system boundaries, behaviour, and assurance claims variable. It connects the technical architecture of ROS 2 systems with the practical work of integrators.

## Related concepts

- [Integration](integration.md)
- [System boundary](system-boundary.md)
- [Deployment context](deployment-context.md)
- [ROS 2-style robotics](../ros2/ros2-style-robotics.md)
- [Continuous assurance](../assurance/continuous-assurance.md)

## Sources and anchors

- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Fragmentation and Architectural Instability](../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)

## Open questions

- How should this wiki relate modularity to MOSA and standards in a later pass?
