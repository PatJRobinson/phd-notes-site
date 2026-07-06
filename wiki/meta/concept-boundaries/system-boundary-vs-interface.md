---
status: seed
maturity: draft
type: concept-boundary
author_review: needed
---

# System Boundary vs Interface

## Distinction

A system boundary concerns what is counted as inside or outside the system for a given purpose. An interface concerns the point or medium of interaction between parts, tools, organisations, abstractions, or layers.

## Why the distinction matters

Boundaries define the scope of analysis, responsibility, or assurance. Interfaces define where interaction occurs. A boundary may pass through or around interfaces, but the two concepts do different work.

## Common confusion

ROS topics, network connections, APIs, and organisational handoffs can look like boundaries because they mark interaction points. They are interfaces unless the analysis uses them to define what is inside or outside the system.

## Usage in this wiki

Use system boundary for scope. Use interface for interaction.

## Related pages

- [System boundary](../../concepts/system-boundary.md)
- [Interface](../../concepts/interface.md)
- [Assurance claim](../../assurance/assurance-claim.md)
- [ROS graph](../../ros2/ros-graph.md)
