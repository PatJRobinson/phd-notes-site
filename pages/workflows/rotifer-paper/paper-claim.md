# Rotifer Paper Claim

## Current paper claim

Rotifer can represent safety/security-relevant and behaviour-relevant assumptions as explicit experiment claims, collect bounded runtime evidence about whether those assumptions held, and use that evidence to classify the interpretation of a run.

## Strongest current wording

Rotifer is not a simulator-porting layer or a finished assurance method. It is a lightweight assumption-tracing workbench that makes the conditions of robotics experiment claims explicit, executable, and inspectable.

## What should be claimed

- Rotifer separates experiments, realisations/providers, deployment, probes, and evidence.
- Rotifer can make assumption boundaries visible.
- Failed or violated runs become classified evidence.
- Command authority is a small but concrete safety/security-relevant case.

## What should not be claimed

- Rotifer secures ROS 2.
- Rotifer replaces DDS Security or SROS2.
- Rotifer proves safety.
- Rotifer provides production assurance.
- Rotifer establishes general simulator equivalence.

## Source provenance

- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
- [case_study.md](../../../05_prototype_ideas/robotics-testbench-framework/results/command_authority/case_study.md)
- [positioning-note.md](../../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)

