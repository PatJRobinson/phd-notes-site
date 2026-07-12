# ROS 2 Security Configuration Surface

## Purpose

This page presents the ROS 2/DDS/SROS2 strand as a safety/security subject page. It focuses on configuration, policy semantics, identity, deployment context, and evidence rather than treating security as a single switch.

## Current position

ROS 2 security is best treated here as a configuration and interpretation surface across layers:

- ROS 2 names, nodes, topics, actions, QoS, and graph abstractions;
- DDS communication, discovery, and QoS semantics;
- DDS Security governance and permissions;
- SROS2 tooling, certificates, enclaves, and policy files;
- deployment context, responsibility, and maintenance practice.

The thesis interest is not whether SROS2 exists. It is how security-relevant meaning is represented, configured, maintained, evidenced, and understood across these layers.

Recent ROS 2-style robotics notes also clarify that this communication model should be understood by contrast. gRPC foregrounds defined remote procedure call interfaces, while Kafka foregrounds durable asynchronous event streams. ROS 2/DDS foreground graph-based robotic composition, middleware discovery, QoS, and package-level reuse. That comparison helps explain why security meaning in ROS 2 is tied to graph abstractions, middleware semantics, and deployment configuration rather than only to application-level service definitions or event streams.

## Why this matters

Security policy can encode permissions, but the meaning of those permissions depends on system-level assumptions: which role should publish a command topic, which enclave corresponds to which authority, which deployment context is in scope, and who keeps the configuration valid over time.

This makes ROS 2 security relevant to the thesis even when the thesis is not primarily a security-tool evaluation.

## Source-grounded account

The new literature evidence items sharpen the strand:

- [ROS 2 design documents](../../../01_literature/middleware-and-standards/ros2-design-documents.md) anchor the encoded ROS 2 layer: DDS, middleware interface, QoS, discovery, and security integration.
- [DDS specification](../../../01_literature/middleware-and-standards/dds-specification.md) anchors communication semantics below the ROS abstraction.
- [DDS Security specification](../../../01_literature/middleware-and-standards/dds-security-specification.md) anchors governance, permissions, plugins, and policy semantics.
- [SROS2 usable security tools](../../../01_literature/middleware-and-standards/sros2-usable-security-tools.md) anchors developer-facing security tooling as a configuration and usability problem.
- [Canelas ROS misconfigurations](../../../01_literature/ros-and-robotics-se/canelas-ros-misconfigurations.md) supports the broader assumption/misconfiguration bridge.

## Relation to Rotifer

Rotifer can provide experiment-level semantics that security tooling alone may not encode: what authority is expected, what claim depends on that authority, what evidence was observed, and whether the run still supports the claim.

A future route is to connect Rotifer declarations to SROS2/DDS Security policy generation or checking. That is future work. The current compiled position should not imply it is implemented.

## What is currently evidence

The current evidence is literature and concept grounding plus the command-authority case. It is enough to justify a safety/security configuration surface as a detailed subject area. It is not enough to claim that the thesis has evaluated SROS2 usability or DDS Security enforcement.

## Open tasks

- Add exact OMG DDS and DDS Security specification versions.
- Add exact SROS2 paper/source details.
- Add source notes for gRPC and Kafka before using them as more than explanatory contrasts.
- Decide whether ROS 2 threat-model material is an anchor source or a cautious supporting source.
- Implement or retire the future security-suite route.

## Source provenance

## Public sources

- [ROS 2 design documents](../../../01_literature/middleware-and-standards/ros2-design-documents.md)
- [DDS specification](../../../01_literature/middleware-and-standards/dds-specification.md)
- [DDS Security specification](../../../01_literature/middleware-and-standards/dds-security-specification.md)
- [SROS2 usable security tools](../../../01_literature/middleware-and-standards/sros2-usable-security-tools.md)
- [Canelas ROS misconfigurations](../../../01_literature/ros-and-robotics-se/canelas-ros-misconfigurations.md)
- [ROS 2 threat model](../../../01_literature/middleware-and-standards/ros2-threat-model.md)

## Internal provenance

<!-- AUTONOTES:PRIVATE-SOURCES:START -->
- [dds_ros2_starter_pack.md](../../../02_my_notes/dds_ros2_starter_pack.md)
- [sros2.md](../../../wiki/ros2/sros2.md)
- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
<!-- AUTONOTES:PRIVATE-SOURCES:END -->
