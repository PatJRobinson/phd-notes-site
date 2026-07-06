---
status: seed
maturity: draft
type: concept
author_review: needed
---

# QoS

## Short definition

QoS, or Quality of Service, is a set of communication policies that shape how data is delivered, retained, matched, and timed in DDS and ROS 2.

## Why it matters

QoS settings can affect whether publishers and subscribers communicate, how reliable communication is, whether late joiners receive data, and how timing or liveliness is handled. In ROS 2 systems, QoS is both a technical mechanism and an integration concern.

QoS matters because communication failure or mismatch may appear as an application problem even when it is caused by policy compatibility or runtime context. It also matters for safety/security and assurance when a claim depends on timely, reliable, or bounded communication.

## In this PhD

QoS is a useful example of a configuration-level concept that crosses abstraction layers. It affects how integrators understand and maintain system behaviour.

## Related concepts

- [DDS](dds.md)
- [Configuration](../concepts/configuration.md)
- [Interface](../concepts/interface.md)
- [Assumption](../concepts/assumption.md)
- [System behaviour](../concepts/system-behaviour.md)

## Sources and anchors

- [DDS + ROS 2 starter pack](../../02_my_notes/dds_ros2_starter_pack.md)
- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [DDS specification](../sources/dds-specification.md)
- [ROS 2 design docs](../sources/ros2-design-docs.md)

## Open questions

- Which QoS policies matter most for the thesis’s examples?
