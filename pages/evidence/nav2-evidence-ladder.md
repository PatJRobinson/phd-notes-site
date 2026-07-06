---
compiled: true
node_type: evidence
status: active
target: rq3
sources:
  - 02_my_notes/papers/Making Command Authority Assumptions Explicit in ROS 2 Robotics Experiments/Canonical Nav2 Evidence Ladder.md
  - 02_my_notes/papers/Making Command Authority Assumptions Explicit in ROS 2 Robotics Experiments/surfaced-variation-across-controllers-and-configuration.md
---

# Nav2 Evidence Ladder

## What it is

A canonical sequence of Nav2/Gazebo experiments that moves from topic presence and substrate checks toward bounded navigation and controller-specific variation.

## Why it matters

It demonstrates that high-level robot behaviour claims rest on layered assumptions: TF, scan, map, lifecycle, costmap timing, action acceptance, command production, and motion interpretation.

## In this PhD

It is executable evidence that integration assumptions can be surfaced progressively.

## In RQ3

It supports the claim that interface conditions can be made visible and classified, which is necessary for safety/security management.

## Relations

- `is_evidence_for` [Executable assumption tracing turns failures into evidence](../arguments/executable-assumption-tracing-turns-failures-into-evidence.md)
- `supports` [Visibility and observability](../concepts/visibility-and-observability.md)
- `is_example_of` progressive concretisation

## Source provenance

- [Canonical Nav2 Evidence Ladder.md](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [surfaced-variation-across-controllers-and-configuration.md](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/surfaced-variation-across-controllers-and-configuration.md)

## Open tensions

This is strong evidence for assumption tracing, not direct evidence of deployed safety/security management.

