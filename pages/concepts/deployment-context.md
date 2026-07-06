---
compiled: true
node_type: concept
status: active
targets:
  - rq2
  - rq4
sources:
  - wiki/concepts/deployment-context.md
  - 05_prototype_ideas/robotics-testbench-framework/rotifer-devlog-15-05-26.md
---

# Deployment Context

## What it is

The environment in which a robotic system is built, launched, connected, operated, maintained, and changed.

## Why it matters

Deployment context affects discovery, timing, permissions, responsibility, observability, and failure recovery.

## In this PhD

Deployment context is a first-class condition of system meaning and claim validity.

## In relevant RQs

- RQ2: shapes boundaries.
- RQ4: affects evidence and claim validity.
- RQ3: affects safety/security interfaces.

## Relations

- `supports` [Deployment context changes system meaning](../arguments/deployment-context-changes-system-meaning.md)
- `depends_on` [Configuration](configuration.md)
- `supports` [Continuous assurance](continuous-assurance.md)

## Source provenance

- [deployment-context.md](../../wiki/concepts/deployment-context.md)
- [rotifer-devlog-15-05-26.md](../../05_prototype_ideas/robotics-testbench-framework/rotifer-devlog-15-05-26.md)

## Open tensions

Need to distinguish simulated, lab, field, and organisational deployment contexts.

