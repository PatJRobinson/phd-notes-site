---
status: seed
maturity: draft
type: concept
author_review: needed
---

# ROS Graph

## Short definition

The ROS graph is the runtime communication structure of ROS nodes, topics, services, actions, parameters, and names as exposed through ROS tooling.

## Why it matters

The ROS graph is one of the main ways integrators inspect system structure. It makes some relationships visible: which nodes appear, which topics exist, and which action or service surfaces are present. It does not fully expose DDS state, network topology, security policy, timing, or deployment assumptions.

This matters because graph visibility can support debugging and assurance evidence, while also creating a risk of treating visible graph structure as stronger than it is.

## In this PhD

The ROS graph is treated as an important representation of system behaviour, not a complete account of the system. It is relevant to working understanding, partial observability, and the distinction between topic presence and semantic compatibility.

## Related concepts

- [ROS 2-style robotics](ros2-style-robotics.md)
- [DDS](dds.md)
- [QoS](qos.md)
- [Partial observability](../concepts/partial-observability.md)
- [System boundary](../concepts/system-boundary.md)

## Sources and anchors

- [DDS + ROS 2 starter pack](../../02_my_notes/dds_ros2_starter_pack.md)
- [Canonical Nav2 Evidence Ladder](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [ROS 2 design docs](../sources/ros2-design-docs.md)

## Open questions

- Which ROS graph representations do integrators actually rely on in practice?
