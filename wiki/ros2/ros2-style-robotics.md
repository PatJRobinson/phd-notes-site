---
status: seed
maturity: draft
type: concept
author_review: needed
---

# ROS 2-style Robotics

## Short definition

ROS 2-style robotics refers to robotic systems organised around ROS 2-like modular composition, graph-based communication, middleware abstraction, launch/configuration workflows, and reusable packages.

## Why it matters

This term is broader than “a system that uses ROS 2 in a textbook way.” Many systems may prototype with ROS 2, extend it, containerise it, integrate it with cloud or orchestration tooling, or use ROS-compatible workflows while adding deployment machinery around it.

The term matters because the thesis is interested in integration practices and system understanding around this style of robotics, including but not limited to the formal ROS 2 API.

## In this PhD

ROS 2-style robotics is the empirical and technical setting for asking how modularity, configurability, deployment context, and practice shape system behaviour and assurance claims.

## Related concepts

- [ROS graph](ros-graph.md)
- [DDS](dds.md)
- [SROS2](sros2.md)
- [Integration](../concepts/integration.md)
- [Deployment context](../concepts/deployment-context.md)

## Sources and anchors

- [Prevalence or ROSness](../../03_research_questions/Prevalence%20or%20'ROSness'.md)
- [DDS + ROS 2 starter pack](../../02_my_notes/dds_ros2_starter_pack.md)
- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [ROS 2 design docs](../sources/ros2-design-docs.md)

## Open questions

- Where should the wiki draw the boundary between ROS 2 systems and ROS 2-style systems?

