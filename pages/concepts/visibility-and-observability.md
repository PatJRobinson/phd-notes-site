---
compiled: true
node_type: concept
status: active
target: rq3
sources:
  - 02_my_notes/Interview Preperation/Core Concepts.md
  - wiki/practice/debugging.md
  - 02_my_notes/papers/Making Command Authority Assumptions Explicit in ROS 2 Robotics Experiments/Canonical Nav2 Evidence Ladder.md
---

# Visibility and Observability

## What it is

The ability to inspect and interpret safety/security-relevant system state.

## Why it matters

If security-relevant state is not visible, security can become unverifiable and inferred from continued operation.

## In this PhD

Visibility links integrator practice, debugging, and executable evidence.

## In RQ3

It explains when safety/security concerns can be managed rather than merely hoped for.

## Relations

- `supports` [Executable assumption tracing turns failures into evidence](../arguments/executable-assumption-tracing-turns-failures-into-evidence.md)
- `is_evidence_for` interface-level management
- `depends_on` probes, traces, logs, and practitioner interpretation

## Source provenance

- [Core Concepts.md](../../02_my_notes/Interview%20Preperation/Core%20Concepts.md)
- [debugging.md](../../wiki/practice/debugging.md)
- [Canonical Nav2 Evidence Ladder.md](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)

## Open tensions

The project needs to distinguish observability for debugging, testing, validation, and assurance.

