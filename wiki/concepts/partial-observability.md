---
status: seed
maturity: draft
type: concept
author_review: needed
---

# Partial Observability

## Short definition

Partial observability means that system behaviour is visible only through limited, mediated, and situated representations.

## Why it matters

Robotics integrators do not encounter the whole system directly. They work through logs, ROS graph views, topic echoes, traces, simulator displays, diagrams, documentation, tests, and conversations. These representations can be useful while still omitting timing, hidden middleware state, deployment assumptions, or responsibility boundaries.

This should not be reduced to a claim that people do not understand systems. The issue is that understanding is constructed through limited evidence surfaces.

## In this PhD

Partial observability helps explain why working understanding, debugging, and assurance maintenance are difficult in distributed robotics. It also links practice to evidence: what can be known depends partly on what can be observed and interpreted.

## Related concepts

- [Working understanding](working-understanding.md)
- [Debugging](../practice/debugging.md)
- [System behaviour](system-behaviour.md)
- [Assurance claim](../assurance/assurance-claim.md)
- [ROS graph](../ros2/ros-graph.md)

## Sources and anchors

- [Core Concepts](../../02_my_notes/Interview%20Preperation/Core%20Concepts.md)
- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Canonical Nav2 Evidence Ladder](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)

## Open questions

- Which observability artefacts should be tracked in interviews?
