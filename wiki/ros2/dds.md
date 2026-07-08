---
status: seed
maturity: draft
type: concept
author_review: needed
---

# DDS

## Short definition

DDS, the Data Distribution Service, is the data-centric publish/subscribe middleware substrate used by ROS 2 communication implementations.

## Why it matters

DDS provides concepts such as domains, participants, publishers, subscribers, data writers, data readers, topics, discovery, QoS policies, and security mechanisms. ROS 2 exposes a simplified programming and tooling model over this substrate.

This matters because some system properties attach to DDS-level mechanisms while integrators may reason through ROS-level abstractions. The difference is important for communication behaviour, discovery, timing, access control, and security analysis.

## In this PhD

DDS is treated as an architectural layer that shapes what ROS 2-style systems can enforce, expose, or obscure. The project does not assume DDS is the problem; it asks how ROS 2-style integration depends on cross-layer relationships between DDS, ROS abstractions, configuration, and practice.

## Related concepts

- [ROS 2-style robotics](ros2-style-robotics.md)
- [ROS graph](ros-graph.md)
- [QoS](qos.md)
- [SROS2](sros2.md)
- [Interface](../concepts/interface.md)

## Sources and anchors

- [DDS + ROS 2 starter pack](../../02_my_notes/dds_ros2_starter_pack.md)
- [DDS specification](/01_literature/middleware-and-standards/dds-specification)

## Open questions

- Which DDS concepts need separate wiki pages later?
