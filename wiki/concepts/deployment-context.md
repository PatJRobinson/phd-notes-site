---
status: seed
maturity: draft
type: concept
author_review: needed
---

# Deployment Context

## Short definition

Deployment context is the environment in which a robotic system is built, launched, connected, operated, maintained, and changed.

## Why it matters

The same ROS 2 application can behave differently across machines, networks, containers, simulators, middleware vendors, hardware platforms, operational sites, and organisational arrangements. Deployment context affects discovery, timing, permissions, responsibility, observability, and failure recovery.

Safety/security concerns are often context-dependent. Assurance claims therefore need to state the deployment conditions under which evidence is valid.

## In this PhD

Deployment context is one of the main ways modular systems become unstable or difficult to reason about across time. It is linked to system boundary, configuration, local knowledge, and continuous assurance.

## Related concepts

- [System boundary](system-boundary.md)
- [Configuration](configuration.md)
- [Continuous assurance](../assurance/continuous-assurance.md)
- [Local knowledge](../practice/local-knowledge.md)
- [ROS 2-style robotics](../ros2/ros2-style-robotics.md)

## Sources and anchors

- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Prevalence or ROSness](../../03_research_questions/Prevalence%20or%20'ROSness'.md)
- [Fragmentation and Architectural Instability](../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)

## Open questions

- How should simulated, lab, and field deployment contexts be distinguished?
