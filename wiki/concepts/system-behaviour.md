---
status: seed
maturity: draft
type: concept
author_review: needed
---

# System Behaviour

## Short definition

System behaviour is what the robotic system does when its components, configurations, middleware, infrastructure, and operating context interact.

## Why it matters

Behaviour in distributed robotics is not always local to a single component. A node may behave correctly in isolation while the composed system behaves unexpectedly because of timing, discovery, QoS compatibility, frame conventions, deployment topology, or missing runtime assumptions.

Safety/security concerns attach to behaviour in context. Assurance claims also need to specify which behaviour is being justified and under what conditions.

## In this PhD

The wiki treats system behaviour as partially constructed through integration. This is a cautious framing: it does not mean behaviour is arbitrary or unknowable, but that relevant behaviour can be distributed across artefacts and practices. The current research questions focus on how integrators construct and maintain working understandings of such behaviour.

## Related concepts

- [Working understanding](working-understanding.md)
- [Partial observability](partial-observability.md)
- [ROS graph](../ros2/ros-graph.md)
- [DDS](../ros2/dds.md)
- [Assurance claim](../assurance/assurance-claim.md)

## Sources and anchors

- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Canonical Nav2 Evidence Ladder](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [Leveson: Engineering a Safer World](../sources/leveson-engineering-a-safer-world.md)

## Open questions

- Which behaviours should be treated as system-level rather than component-level in the empirical study?
