# Rotifer Paper Safety/Security Thread

## Current position

Rotifer relates to safety/security by making safety/security-relevant assumptions explicit and checkable in bounded experiments. It does not provide enforcement or complete assurance.

## Command authority

Command authority is the clearest current safety/security case. It links `/cmd_vel`, declared command roles, undeclared publishers, robot motion, DDS/SROS2 relevance, and claim invalidation.

## Relation to SROS2

Rotifer supplies experiment-level semantics: which role should be allowed to command motion. SROS2/DDS Security would be the enforcement layer in future work.

## Nonclaims

Rotifer does not secure ROS 2, authenticate DDS participants, reproduce MiR vulnerabilities, detect all malicious behaviour, or replace SROS2.

## Source provenance

- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
- [case_study.md](../../../05_prototype_ideas/robotics-testbench-framework/results/command_authority/case_study.md)

