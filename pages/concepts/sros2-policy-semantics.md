---
compiled: true
node_type: concept
status: active
target: rq3
sources:
  - wiki/ros2/sros2.md
  - 02_my_notes/dds_ros2_starter_pack.md
  - 01_literature/B_ros_architecture_and_practice/SROS2-usable-cyber-security-tools-for-ros-2.md
---

# SROS2 Policy Semantics

## What it is

SROS2 is ROS 2 security tooling around DDS Security concepts such as governance, permissions, identities, and enclaves.

## Why it matters

SROS2 can enforce security policies, but the system-level meaning of those policies depends on roles, interfaces, deployment, and configuration.

## In this PhD

SROS2 is an important mediating technology. It is the officially supported ROS 2 security mechanism, so it deserves more weight than an arbitrary tool, but it is not the thesis centre and should not be treated as simply "default ROS security".

## In RQ3

It anchors the technical side of command authority, policy enforcement, and the usability/configuration burden of security mechanisms.

## Usability angle

The current frame treats SROS2 usability as analytically interesting rather than settled. A claim that SROS2 is usable because it provides command-line tooling or readable XML governance files is not enough. The stronger question is how SROS2 usability appears through configuration work, policy meaning, deployment context, responsibility, evidence, and maintenance.

## Relations

- `supports` [Command authority](command-authority.md)
- `depends_on` [Configuration](configuration.md)
- `is_example_of` security mechanism as mediating technology
- `is_counterpressure_to` any claim that RQ3 is only social/practice-oriented

## Source provenance

- [sros2.md](../../wiki/ros2/sros2.md)
- [dds_ros2_starter_pack.md](../../02_my_notes/dds_ros2_starter_pack.md)
- [SROS2 usable cyber security tools](../../01_literature/B_ros_architecture_and_practice/SROS2-usable-cyber-security-tools-for-ros-2.md)
- [decision-resolution_2026-07-07.md](../../inbox/decision-resolution_2026-07-07.md)

## Open tensions

SROS2 should be neither underweighted as just one random technology nor overweighted as the whole security story. Future compile should audit the SROS2 literature note and the usability claim specifically.
