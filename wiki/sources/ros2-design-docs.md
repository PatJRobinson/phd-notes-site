---
status: seed
maturity: needs-source-anchor
type: source-anchor
author_review: needed
---

# ROS 2 Design Documentation

## What it is

Official ROS 2 design documentation covering architecture and concepts such as nodes, topics, QoS policies, discovery, middleware abstraction, and the relationship between ROS 2 and DDS.

## What it anchors in the wiki

- [ROS 2-style robotics](../ros2/ros2-style-robotics.md)
- [ROS graph](../ros2/ros-graph.md)
- [QoS](../ros2/qos.md)
- [System boundary](../concepts/system-boundary.md)
- [Configuration](../concepts/configuration.md)

## What it contributes

This source helps clarify the intended ROS 2 abstraction model and the concepts integrators use when reasoning about nodes, topics, discovery, and middleware-backed communication.

## Limits / do not overuse for

Do not use design documentation alone as evidence of real-world deployment practice. It describes architecture and intended abstractions; it does not settle how integrators understand or maintain those abstractions in context.

## Related concepts

- [DDS](../ros2/dds.md)
- [Interface](../concepts/interface.md)
- [Partial observability](../concepts/partial-observability.md)

## Source location

- Internal anchor: [research questions and contributions, 20-04-26](../../03_research_questions/research-questions-and-contributions-and-risks-20_04_26.md)
- URL noted there: `https://design.ros2.org/`
