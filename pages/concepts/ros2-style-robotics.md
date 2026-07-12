---
compiled: true
node_type: concept
status: active
targets:
  - rq2
  - rq3
sources:
  - wiki/ros2/ros2-style-robotics.md
  - 03_research_questions/Prevalence or 'ROSness'.md
  - 02_my_notes/dds_ros2_starter_pack.md
---

# ROS 2-Style Robotics

## What it is

Synthesised: robotic systems organised around ROS 2-like computation graphs, middleware, packages, launch files, configuration, and ecosystem conventions, including deployments that augment or wrap ROS-based work.

The ROSness note is now promoted as a valid source for this concept, with provenance: it comes from an older security-invariant framing and includes some stream-of-consciousness research reasoning.

## Why it matters

The thesis concerns ROS-like integration patterns as they meet industrial deployment, containers, orchestration, safety/security, and local practice.

## Communication model and contrast cases

ROS 2-style robotics is one communication and integration style, not the only possible architecture for robotic systems. Its usual coordination model combines nodes, topics, services, actions, parameters, launch/configuration artefacts, middleware-backed discovery, DDS, QoS, and reusable packages.

gRPC and Kafka are useful contrast cases, but only as contrasts. gRPC foregrounds defined remote procedure call interfaces. Kafka foregrounds durable asynchronous event streams. ROS 2 foregrounds graph-based robotic composition, middleware abstraction, discovery, QoS, and package-level reuse. The comparison is useful because each style makes different assumptions visible about interface contracts, synchronous or asynchronous interaction, decoupling, deployment, and system evolution.

This page should not treat gRPC or Kafka as direct replacements for ROS 2. The current research use is narrower: contrast cases help clarify what ROS 2-style integration tends to foreground or hide.

## In this PhD

This concept anchors the project's domain without requiring every system to be pure or canonical ROS 2.

## In relevant RQs

- RQ2: defines the class of systems whose boundaries are being studied.
- RQ3: provides safety/security interface surfaces.

## Relations

- `supports` [System boundary](system-boundary.md)
- `supports` [Deployment context](deployment-context.md)
- `is_historical_precursor_to` current ROS 2-style robotics scope
- `is_recoverable_fragment_for` public/source audit of ROSness examples

## Source provenance

- [ros2-style-robotics.md](../../wiki/ros2/ros2-style-robotics.md)
- [Prevalence or 'ROSness'.md](../../03_research_questions/Prevalence%20or%20'ROSness'.md)
- [decision-resolution_2026-07-07.md](../../inbox/decision-resolution_2026-07-07.md)
- [dds_ros2_starter_pack.md](../../02_my_notes/dds_ros2_starter_pack.md)

## Open tensions

The ROSness note is valid and promotable, but its older security-invariant framing should remain visible when the idea is reused. Its examples should still be source-audited before becoming public-facing evidence-heavy claims.

Contrast cases such as gRPC and Kafka need their own source notes before they carry literature or evidence claims.
