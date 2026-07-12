---
compiled: true
node_type: evidence
status: recoverable
target: rq3
sources:
  - 02_my_notes/dds_ros2_starter_pack.md
  - wiki/ros2/sros2.md
  - 01_literature/middleware-and-standards/ros2-design-documents.md
  - 01_literature/middleware-and-standards/dds-specification.md
  - 01_literature/middleware-and-standards/dds-security-specification.md
  - 01_literature/middleware-and-standards/sros2-usable-security-tools.md
---

# DDS/ROS2 Architectural Substrate

## What it is

Notes mapping DDS concepts to ROS 2 abstractions and SROS2 security mechanisms. This evidence item now also points to the active `01_literature` anchors for ROS 2 design documents, DDS, DDS Security, and SROS2.

The ROS 2-style robotics source page now also uses gRPC and Kafka as communication-model contrasts. Those contrasts are useful for explaining what ROS 2 foregrounds and hides, but they need their own source notes before they become evidence-heavy claims.

## Why it matters

RQ3 needs technical anchors for where security boundaries, discovery, QoS, permissions, identities, and command authority can attach.

## In this PhD

The substrate material supports architecture-level reasoning and future secure-by-design work. It should be treated as public technical grounding plus internal synthesis, not as a completed security evaluation.

## In RQ3

It anchors the technical side of interface safety/security.

## Relations

- `supports` [SROS2 policy semantics](../concepts/sros2-policy-semantics.md)
- `supports` [Command authority](../concepts/command-authority.md)
- `is_counterpressure_to` purely sociotechnical framings with no technical mechanism

## Source provenance

- [dds_ros2_starter_pack.md](../../02_my_notes/dds_ros2_starter_pack.md)
- [sros2.md](../../wiki/ros2/sros2.md)
- [ROS 2 design documents](../../01_literature/middleware-and-standards/ros2-design-documents.md)
- [DDS specification](../../01_literature/middleware-and-standards/dds-specification.md)
- [DDS Security specification](../../01_literature/middleware-and-standards/dds-security-specification.md)
- [SROS2 usable security tools](../../01_literature/middleware-and-standards/sros2-usable-security-tools.md)

## Open tensions

Needs exact version/citation details and section-level extraction before becoming a core evidence chapter.

Needs source notes for gRPC and Kafka before those contrast cases carry more than explanatory weight.
