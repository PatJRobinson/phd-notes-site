---
status: seed
maturity: needs-source-anchor
type: source-anchor
author_review: needed
---

# DDS Specification

## What it is

The Object Management Group specification for Data Distribution Service, describing a data-centric publish-subscribe model for distributed systems.

## What it anchors in the wiki

- [DDS](../ros2/dds.md)
- [QoS](../ros2/qos.md)
- [ROS graph](../ros2/ros-graph.md)
- [Interface](../concepts/interface.md)
- [Assumption](../concepts/assumption.md)

## What it contributes

It anchors DDS concepts such as participants, publishers, subscribers, topics, data readers/writers, discovery, and QoS. It is useful for explaining how ROS 2 communication rests on a lower-level middleware model.

## Limits / do not overuse for

The DDS specification should not be treated as evidence of how ROS 2 integrators reason in practice. It also should not be overextended into claims that DDS requires one fixed deployment architecture.

## Related concepts

- [ROS 2-style robotics](../ros2/ros2-style-robotics.md)
- [Configuration](../concepts/configuration.md)
- [System behaviour](../concepts/system-behaviour.md)

## Source location

- Internal anchor: [research questions and contributions, 20-04-26](../../03_research_questions/research-questions-and-contributions-and-risks-20_04_26.md)
- URL noted there: `https://www.omg.org/spec/DDS/`
- Related literature note: [DDS specification](/01_literature/middleware-and-standards/dds-specification)
