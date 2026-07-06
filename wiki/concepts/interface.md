---
status: seed
maturity: draft
type: concept
author_review: needed
---

# Interface

## Short definition

An interface is a point of interaction between components, tools, frameworks, people, or organisational responsibilities.

## Why it matters

Interfaces in robotics include APIs, ROS topics and services, DDS entities, launch and configuration files, simulator bridges, documentation, operator procedures, and responsibility handoffs. Interfaces are where meaning is translated between layers.

Safety/security concerns can emerge when an interface is treated as stronger, clearer, or more stable than it is. Assurance claims also depend on interfaces because evidence often needs to show that the relevant interaction behaved as expected.

## In this PhD

The current RQ framing asks how safety and security concerns emerge and get managed across interfaces between components, tools, frameworks, and engineering practices. The wiki treats interface as a broad cross-layer concept rather than only a software construct.

## Related concepts

- [Integration](integration.md)
- [Configuration](configuration.md)
- [ROS graph](../ros2/ros-graph.md)
- [DDS](../ros2/dds.md)
- [Safety/security relation](../assurance/safety-security-relation.md)
- [System boundary vs interface](../meta/concept-boundaries/system-boundary-vs-interface.md)

## Sources and anchors

- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [DDS + ROS 2 starter pack](../../02_my_notes/dds_ros2_starter_pack.md)
- [Canonical Nav2 Evidence Ladder](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [DDS specification](../sources/dds-specification.md)
- [IEC 62443](../sources/iec-62443.md)

## Open questions

- Should responsibility handoffs be treated as interfaces or as a separate concept?
