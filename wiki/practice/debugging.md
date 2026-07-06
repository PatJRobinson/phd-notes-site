---
status: seed
maturity: draft
type: concept
author_review: needed
---

# Debugging

## Short definition

Debugging is the practical work of investigating, interpreting, and changing a system when behaviour is unexpected, unclear, or unacceptable.

## Why it matters

In robotics integration, debugging may involve inspecting ROS graph surfaces, checking frames, sampling topics, changing launch files, comparing simulator and hardware behaviour, adjusting QoS, reading logs, or asking who changed a deployment.

Debugging matters because it is one way integrators construct working understanding. It also reveals what is observable, what is hidden, and which safety/security concerns become actionable under pressure.

## In this PhD

Debugging is treated as an empirical window into integration practice. It may show how responsibility, local knowledge, and partial observability shape what integrators think the system is doing.

## Related concepts

- [Working understanding](../concepts/working-understanding.md)
- [Partial observability](../concepts/partial-observability.md)
- [System behaviour](../concepts/system-behaviour.md)
- [Local knowledge](local-knowledge.md)
- [Integrator](integrator.md)

## Sources and anchors

- [Core Concepts](../../02_my_notes/Interview%20Preperation/Core%20Concepts.md)
- [Canonical Nav2 Evidence Ladder](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [Hollnagel: Work-as-Imagined / Work-as-Done](../sources/hollnagel-work-as-imagined.md)
- [Star: Ethnography of Infrastructure](../sources/star-ethnography-of-infrastructure.md)

## Open questions

- How should the interview protocol distinguish debugging, testing, validation, and assurance activity?
