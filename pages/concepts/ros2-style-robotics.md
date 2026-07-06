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
---

# ROS 2-Style Robotics

## What it is

Synthesised: robotic systems organised around ROS 2-like graph, middleware, package, launch, configuration, and ecosystem conventions, including deployments that augment or wrap ROS workflows.

## Why it matters

The thesis is not only about canonical tutorial ROS. It is about ROS-like integration patterns as they meet industrial deployment, containers, orchestration, safety/security, and local practice.

## In this PhD

This concept anchors the project's domain without requiring every system to be pure or canonical ROS 2.

## In relevant RQs

- RQ2: defines the class of systems whose boundaries are being studied.
- RQ3: provides safety/security interface surfaces.

## Relations

- `supports` [System boundary](system-boundary.md)
- `supports` [Deployment context](deployment-context.md)
- `is_recoverable_fragment_for` future ROSness audit

## Source provenance

- [ros2-style-robotics.md](../../wiki/ros2/ros2-style-robotics.md)
- [Prevalence or 'ROSness'.md](../../03_research_questions/Prevalence%20or%20'ROSness'.md)

## Open tensions

The ROSness note contains external-web-derived examples and needs source audit before becoming evidence-heavy.

