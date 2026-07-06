# RQ2 Concept Map

## System boundary

### What it is

The practical or analytical line around what counts as part of the system for a particular purpose.

### Why it matters

Safety/security and assurance claims need a system scope.

### Role in RQ2

This is the core concept.

### Related concepts

Deployment context, modularity, configuration, interface, assurance claim.

### Source provenance

[wiki/concepts/system-boundary.md](../../../wiki/concepts/system-boundary.md), [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md).

### Status

active

## Modularity

### What it is

Organisation into separable components that can be developed, configured, replaced, composed, or reused.

### Why it matters

Modularity enables flexibility but shifts work to integration and makes composed behaviour dependent on cross-component assumptions.

### Role in RQ2

It is one of the forces making boundaries variable and purpose-relative.

### Related concepts

Integration, system boundary, deployment context, MOSA, continuous assurance.

### Source provenance

[wiki/concepts/modularity.md](../../../wiki/concepts/modularity.md), [Architecture instability and the evolving role of the human.md](../../../02_my_notes/positioning_statements/Architecture%20instability%20and%20the%20evolving%20role%20of%20the%20human.md).

### Status

active

## Deployment context

### What it is

The environment in which a robotic system is built, launched, connected, operated, maintained, and changed.

### Why it matters

The same application can have different discovery, timing, permissions, responsibility, and observability across contexts.

### Role in RQ2

It is a boundary-shaping condition.

### Related concepts

Configuration, local knowledge, continuous assurance, ROS 2-style robotics.

### Source provenance

[wiki/concepts/deployment-context.md](../../../wiki/concepts/deployment-context.md), [Prevalence or 'ROSness'.md](../../../03_research_questions/Prevalence%20or%20'ROSness'.md).

### Status

active

## Configuration

### What it is

Parameters, launch choices, policies, mappings, and runtime settings.

### Why it matters

Configuration can change what communicates, what is trusted, what is visible, and which boundaries are meaningful.

### Role in RQ2

Configuration is one mechanism by which boundaries are made.

### Related concepts

Deployment context, interface, SROS2, QoS, Rotifer environment manifests.

### Source provenance

[wiki/concepts/configuration.md](../../../wiki/concepts/configuration.md), [rotifer-devlog-22-05-26.md](../../../05_prototype_ideas/robotics-testbench-framework/rotifer-devlog-22-05-26.md).

### Status

active

