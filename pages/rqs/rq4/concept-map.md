# RQ4 Concept Map

## Assurance claim

### What it is

A justified statement that a system has, maintains, or satisfies some property under specified conditions.

### Why it matters

Claims need scope, evidence, reasoning, and maintenance.

### Role in RQ4

This is the core concept.

### Related concepts

Continuous assurance, system boundary, assumption, deployment context, safety/security relation.

### Source provenance

[wiki/assurance/assurance-claim.md](../../../wiki/assurance/assurance-claim.md), [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md).

### Status

active

## Continuous assurance

### What it is

Ongoing maintenance of assurance claims as system, configuration, evidence, and operating context change.

### Why it matters

Modular systems may change faster than static claims can safely absorb.

### Role in RQ4

It names the problem space, not a finished solution.

### Related concepts

Deployment context, configuration, local knowledge, partial observability.

### Source provenance

[wiki/assurance/continuous-assurance.md](../../../wiki/assurance/continuous-assurance.md), [positioning-note.md](../../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md).

### Status

active

## Evidence validity over change

### What it is

Synthesised: the question of whether earlier evidence still supports a claim after composition, configuration, or context changes.

### Why it matters

Systems can still run while the meaning of prior evidence has changed.

### Role in RQ4

It is the main mechanism RQ4 needs to trace.

### Related concepts

Assurance claim, deployment context, Rotifer evidence, local knowledge.

### Source provenance

[positioning-note.md](../../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md), [Canonical Nav2 Evidence Ladder.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md).

### Status

active

## Lifecycle drift

### What it is

Changes over redeployment, updates, re-imaging, credential reuse, configuration persistence, and ad-hoc fixes.

### Why it matters

Drift can invalidate assumptions while the system appears to keep working.

### Role in RQ4

It is the empirical/practice route into assurance-over-change.

### Related concepts

Configuration, deployment context, local knowledge, visibility.

### Source provenance

[Core Concepts.md](../../../02_my_notes/Interview%20Preperation/Core%20Concepts.md), [Coding Scheme.md](../../../02_my_notes/Interview%20Preperation/Coding%20Scheme.md).

### Status

active

