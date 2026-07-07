# Rotifer Paper Claim

## Current paper claim

Rotifer can turn executable robotics integration work into explicit integration knowledge by representing experiment claims, assumptions, realisations, probes, and evidence, then classifying which assumption boundary a run has reached.

## Strongest current wording

Rotifer is not a simulator-porting layer, security tool, or finished assurance method. It is a lightweight assumption-tracing workbench that makes the conditions of robotics experiment claims explicit, executable, and inspectable. The current paper demonstrates this primarily through the Nav2 evidence ladder.

## What should be claimed

- Rotifer separates experiments, realisations/providers, deployment, probes, and evidence.
- Rotifer can make assumption boundaries visible.
- Failed or violated runs become classified evidence.
- Safety/security relevance should be threaded as motivation and consequence.
- Command authority is a small but concrete safety/security-relevant example or follow-on strand, not the centre of this paper.

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
- [plan_06-06-26.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/plan_06-06-26.md)
- [decision-resolution_2026-07-07.md](../../../inbox/decision-resolution_2026-07-07.md)
