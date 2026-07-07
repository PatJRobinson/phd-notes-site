# Rotifer Paper Safety/Security Thread

## Current position

In the current Rotifer/Nav2 paper, safety/security should be threaded as motivation and consequence, not demonstrated as the main result. Rotifer matters for safety/security because later safety/security arguments need explicit knowledge of what system was realised, which assumptions were active, and what evidence supports behavioural claims about that realisation.

## Command authority

Command authority is the clearest current safety/security case, but for this paper it should remain secondary or future-facing. It links `/cmd_vel`, declared command roles, undeclared publishers, robot motion, DDS/SROS2 relevance, and claim invalidation.

## Relation to SROS2

Rotifer supplies experiment-level semantics: which role should be allowed to command motion. SROS2/DDS Security would be the enforcement layer in future work.

## Paper placement

- Introduction: safety/security as why integration knowledge matters beyond debugging convenience.
- Background: assurance/security as a supporting strand only.
- Method/results: keep the Nav2 evidence-ladder centre.
- Discussion: cautious subsection on implications for safety/security reasoning.
- Future work: command authority, SROS2 policy material, authority-boundary specifications.

## Nonclaims

Rotifer does not secure ROS 2, authenticate DDS participants, reproduce MiR vulnerabilities, detect all malicious behaviour, or replace SROS2.

## Source provenance

- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
- [case_study.md](../../../05_prototype_ideas/robotics-testbench-framework/results/command_authority/case_study.md)
- [decision-resolution_2026-07-07.md](../../../inbox/decision-resolution_2026-07-07.md)
