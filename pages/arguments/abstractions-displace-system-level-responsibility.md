---
compiled: true
node_type: argument
status: active
target: rq3
sources:
  - 02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md
  - 02_my_notes/dds_ros2_starter_pack.md
---

# Abstractions Displace System-Level Responsibility

## Claim

ROS 2 abstractions simplify integration while leaving some system-level responsibilities, such as timing, reliability, deployment architecture, authority, and evidence, to developers and integrators.

## Why it matters

This explains why safety/security concerns surface at interfaces and responsibility handoffs.

## Supports

[Safety/security emerges at integration interfaces](safety-security-emerges-at-integration-interfaces.md).

## Depends on

Partial abstraction, fragmentation, configuration, integrator responsibility.

## Evidence

Fragmentation note, DDS/ROS2 architecture starter pack, and interview concepts about trusted abstractions.

## Counterpressure

This must not be framed as a defect claim against ROS 2. The current project treats incomplete abstraction as normal, then asks how the remaining responsibilities are managed.

## Status

active

## Source provenance

- [Fragmentation and Architectural Instability](../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [dds_ros2_starter_pack.md](../../02_my_notes/dds_ros2_starter_pack.md)

