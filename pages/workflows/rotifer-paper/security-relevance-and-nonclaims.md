# Security Relevance and Nonclaims

## Purpose

This page explains how safety/security belongs in the Rotifer paper without recentering the paper as a security evaluation.

## Current position

Command authority is a strong security-relevant example because robot motion depends on who or what is allowed to publish motion commands. Rotifer can represent that assumption, collect evidence about whether it held in a run, and prevent a violated run from being interpreted as valid evidence for the original experiment claim.

However, command authority is not the current paper centre. The current paper centre is executable assumption tracing, carried primarily by the Nav2 evidence ladder. Command authority is a safety/security implication and possible follow-on paper route.

## What command authority shows

The command-authority case has a narrow structure:

- the experiment claim says robot motion is attributable only to declared command-authority roles;
- the baseline has only the trusted command source active;
- the violation introduces a rogue publisher;
- Rotifer checks observed command publishers and odometry displacement;
- the violated run cannot support the original attribution claim.

This is useful because it links security-relevant authority to evidence interpretation, rather than treating security as an external label added after the experiment.

## Nonclaims

Rotifer does not:

- prevent unauthorised publishers;
- authenticate ROS or DDS participants;
- replace DDS Security or SROS2;
- detect all malicious behaviour;
- secure ROS 2 deployments;
- reproduce real-world vulnerabilities.

The claim is narrower: Rotifer can make a command-authority assumption explicit, gather bounded runtime evidence about whether it held, and classify the resulting experiment claim accordingly.

## Future security-suite route

The updated source notes now point toward a future security experiment suite beyond command authority. Candidate topics include:

- identity and enclaves;
- policy drift;
- discovery and domain assumptions;
- QoS/security interactions;
- partial security deployment;
- configuration validity across realisations and deployment targets.

These should be treated as future work unless implemented and evidenced.

## Public grounding now reflected in the compiled site

- [DDS Security specification](../../../01_literature/middleware-and-standards/dds-security-specification.md) anchors governance, permissions, security plugins, and policy semantics.
- [SROS2 usable security tools](../../../01_literature/middleware-and-standards/sros2-usable-security-tools.md) anchors security tooling as configuration, certificates, policy files, and developer workflow.
- [ROS 2 threat model](../../../01_literature/middleware-and-standards/ros2-threat-model.md) is relevant but should be used cautiously until source-audited.
- [Canelas ROS misconfigurations](../../../01_literature/ros-and-robotics-se/canelas-ros-misconfigurations.md) supports the broader point that ROS integration problems often involve assumptions that are not checked or documented.

## Source provenance

## Public sources

- [DDS Security specification](../../../01_literature/middleware-and-standards/dds-security-specification.md)
- [SROS2 usable security tools](../../../01_literature/middleware-and-standards/sros2-usable-security-tools.md)
- [ROS 2 threat model](../../../01_literature/middleware-and-standards/ros2-threat-model.md)
- [Canelas ROS misconfigurations](../../../01_literature/ros-and-robotics-se/canelas-ros-misconfigurations.md)

## Internal provenance

<!-- AUTONOTES:PRIVATE-SOURCES:START -->
- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
- [positioning-note.md](../../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)
- [rotifer-security-experiment-suite-plan.md](../../../05_prototype_ideas/robotics-testbench-framework/rotifer-security-experiment-suite-plan.md)
<!-- AUTONOTES:PRIVATE-SOURCES:END -->
