---
compiled: true
node_type: evidence
status: active
targets:
  - rq1
  - rq2
  - rq3
  - rq4
  - rotifer-paper
sources:
  - 05_prototype_ideas/robotics-testbench-framework/results/command_authority/case_study.md
  - 02_my_notes/papers/Making Command Authority Assumptions Explicit in ROS 2 Robotics Experiments/Canonical Nav2 Evidence Ladder.md
  - 05_prototype_ideas/robotics-testbench-framework/rotifer-devlog-20-05-26.md
---

# Rotifer Trace Evidence

## What it is

Evidence from Rotifer runs/devlogs where assumptions, providers, deployments, probes, and outcomes are made explicit.

## Why it matters

It shows how integration assumptions can become inspectable evidence rather than tacit debugging history.

## In this PhD

Rotifer trace evidence supports the executable-evidence strand.

## In relevant RQs

- RQ1: shows artefact-mediated system understanding.
- RQ2: separates scenario/app/provider/deployment boundaries.
- RQ3: command authority as safety/security-relevant assumption.
- RQ4: evidence scoped to assumptions and claim interpretation.

## Relations

- `supports` [Executable assumption tracing turns failures into evidence](../arguments/executable-assumption-tracing-turns-failures-into-evidence.md)
- `is_part_of_workflow` [Rotifer paper](../workflows/rotifer-paper/index.md)

## Source provenance

- [case_study.md](../../05_prototype_ideas/robotics-testbench-framework/results/command_authority/case_study.md)
- [Canonical Nav2 Evidence Ladder.md](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [rotifer-devlog-20-05-26.md](../../05_prototype_ideas/robotics-testbench-framework/rotifer-devlog-20-05-26.md)

## Open tensions

Trace evidence is bounded prototype evidence, not production assurance.

