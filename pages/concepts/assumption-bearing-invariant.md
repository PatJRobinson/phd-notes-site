---
compiled: true
node_type: concept
status: active
target: rq3
sources:
  - 02_my_notes/papers/Making Command Authority Assumptions Explicit in ROS 2 Robotics Experiments/plan_06-06-26.md
  - 02_my_notes/analysis_fragments/rotifer next steps.md
  - wiki/concepts/assumption.md
---

# Assumption-Bearing Invariant

## What it is

Synthesised: a property treated as stable across a system boundary and relied upon in reasoning, but whose validity depends on conditions outside a single component.

## Why it matters

It gives RQ3 a way to name safety/security-relevant properties that are distributed across middleware, deployment, configuration, and practice.

## In this PhD

This concept preserves useful "architectural invariant" language while avoiding a claim that the invariant is automatically enforced.

## In RQ3

Command authority is the clearest current example.

## Relations

- `extends` [Assumption](../../wiki/concepts/assumption.md)
- `supports` [Command authority](command-authority.md)
- `is_evidence_for` [Executable assumption tracing turns failures into evidence](../arguments/executable-assumption-tracing-turns-failures-into-evidence.md)

## Source provenance

- [plan_06-06-26.md](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/plan_06-06-26.md)
- [rotifer next steps.md](../../02_my_notes/analysis_fragments/rotifer%20next%20steps.md)
- [assumption.md](../../wiki/concepts/assumption.md)

## Open tensions

This is synthesised terminology. It should be reviewed before becoming thesis vocabulary.

