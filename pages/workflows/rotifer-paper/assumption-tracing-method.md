# Rotifer Assumption-Tracing Method

## Purpose

This page explains Rotifer as a method contribution, not only as a software prototype. It compiles the current paper position: Rotifer states, traces, tests, and interprets assumptions that allow robotics experiment claims to remain meaningful across realisations and deployment contexts.

## Current position

Rotifer is strongest when framed as executable assumption tracing. The important unit is not a single pass/fail test. The important unit is the relationship between:

- an experiment claim;
- the assumptions that must hold for the claim to mean what it says;
- the realisation and deployment context in which those assumptions are tested;
- probes and evidence that classify what happened;
- claim interpretation after the run.

The framework has value whether an assumption holds, fails, or remains undecidable. A passing assumption gives scoped confidence. A failing assumption exposes a fragility or semantic boundary. An undecidable assumption exposes an evidence gap.

## Why this matters

Robotics experiments often move from "the system ran" to "the claim is supported" too quickly. Rotifer slows that move down. It asks what had to be true for the run to count as evidence, and whether the available traces are enough to support that interpretation.

This is why Rotifer belongs in RQ2, RQ3, and RQ4 at the same time. It separates realisation and deployment boundaries, surfaces safety/security-relevant interface assumptions, and makes claim/evidence scope explicit.

## Source-grounded account

The positioning note states that the research object is not a single broken assumption, but the structure of what has to hold for claims to remain meaningful. The Nav2 evidence ladder now carries the current paper centre because it shows this structure across many progressively stronger assumptions: topic visibility, TF connectivity, scan-frame connection, lifecycle surfaces, costmap timing, controller frame assumptions, local feasibility, RPP success, and MPPI-specific controller boundary.

The command-authority case remains important because it shows the same apparatus on a safety/security-relevant assumption: only declared command-source roles may influence robot motion through the motion command interface. It should not be made to carry the whole paper by itself.

## Relation to the RQs

- RQ2: Rotifer distinguishes app, provider, realisation, deployment target, and claim scope.
- RQ3: Rotifer can express safety/security-relevant interface assumptions such as command authority, identity, policy, topic authority, and visibility.
- RQ4: Rotifer makes evidence validity conditional on context, scope, and the assumptions actually checked.
- RQ1: Rotifer acts as an artefact that mediates working understanding of what a run did and did not show.

## What is currently evidence

The current evidence is strongest for the Nav2 ladder and command-authority demonstration. The prototype has generated traceable runs that classify failures and bounded successes. These are implementation/case-study evidence, not user-evaluation evidence.

## What is only design scaffold

Future security-suite ideas are scaffold. They should be described as possible extension routes for identity/enclaves, policy drift, discovery/domain assumptions, QoS/security interaction, and partial security deployment, not as completed findings.

## Source provenance

## Public sources

- [ROS 2 design documents](../../../01_literature/middleware-and-standards/ros2-design-documents.md)
- [DDS specification](../../../01_literature/middleware-and-standards/dds-specification.md)
- [DDS Security specification](../../../01_literature/middleware-and-standards/dds-security-specification.md)
- [SROS2 usable security tools](../../../01_literature/middleware-and-standards/sros2-usable-security-tools.md)

## Internal provenance

<!-- AUTONOTES:PRIVATE-SOURCES:START -->
- [positioning-note.md](../../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)
- [Canonical Nav2 Evidence Ladder.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
<!-- AUTONOTES:PRIVATE-SOURCES:END -->
