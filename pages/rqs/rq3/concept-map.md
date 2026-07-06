# RQ3 Concept Map

## Safety/security relation

### What it is

Safety and security are distinct traditions and concern types that can become entangled in cyber-physical robotic systems.

### Why it matters

Security failures can affect physical behaviour, but collapsing safety and security would hide differences in standards, evidence, responsibility, and reasoning.

### Role in RQ3

This is the central concern relation RQ3 tracks across interfaces.

### Related concepts

Interface, integration, assurance claim, SROS2, system behaviour.

### Source provenance

[wiki/assurance/safety-security-relation.md](../../../wiki/assurance/safety-security-relation.md), [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md).

### Status

active

## Interface

### What it is

A point of interaction between components, tools, frameworks, people, or responsibilities.

### Why it matters

Interfaces are where system meanings are translated and where assumptions can be overtrusted.

### Role in RQ3

RQ3 is explicitly about safety/security concerns across interfaces.

### Related concepts

Integration, configuration, command authority, responsibility boundary, visibility.

### Source provenance

[wiki/concepts/interface.md](../../../wiki/concepts/interface.md), [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md).

### Status

active

## Integration

### What it is

The work of making components, configurations, infrastructure, tools, documentation, and operating contexts function together as a robotic system.

### Why it matters

Safety/security behaviour may emerge from composition rather than from isolated components.

### Role in RQ3

Integration is the site where RQ3 concerns become observable and manageable.

### Related concepts

Interface, integrator, configuration, deployment context, system boundary.

### Source provenance

[wiki/concepts/integration.md](../../../wiki/concepts/integration.md), [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md).

### Status

active

## Configuration

### What it is

Parameters, launch choices, policies, mappings, and runtime settings that shape behaviour.

### Why it matters

Security and safety-relevant properties may depend on configuration that is editable, distributed, or only partially visible.

### Role in RQ3

Configuration is a major interface surface where security mechanisms, robot behaviour, and integrator practice meet.

### Related concepts

SROS2, QoS, command authority, lifecycle drift, deployment context.

### Source provenance

[wiki/concepts/configuration.md](../../../wiki/concepts/configuration.md), [dds_ros2_starter_pack.md](../../../02_my_notes/dds_ros2_starter_pack.md), [Core Concepts.md](../../../02_my_notes/Interview%20Preperation/Core%20Concepts.md).

### Status

active

## Assumption-bearing invariant

### What it is

Synthesised: a property treated as stable across a system boundary and relied upon in reasoning, but whose validity depends on conditions outside a single component.

### Why it matters

RQ3 needs a way to talk about safety/security-relevant properties that are neither purely code-level nor purely social.

### Role in RQ3

It links command authority, visibility, interface semantics, and Rotifer evidence.

### Related concepts

Assumption, architectural invariant, command authority, evidence ladder.

### Source provenance

[plan_06-06-26.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/plan_06-06-26.md), [rotifer next steps.md](../../../02_my_notes/analysis_fragments/rotifer%20next%20steps.md), [wiki/concepts/assumption.md](../../../wiki/concepts/assumption.md).

### Status

active

## Command authority

### What it is

The invariant that only declared and authorised roles may influence robot motion through the motion command interface.

### Why it matters

Motion command topics can mediate physical behaviour. If an undeclared publisher can command motion, the safety/security boundary assumed by the experiment is false.

### Role in RQ3

It is the clearest current worked example of a safety/security concern emerging at the interface between ROS graph semantics, DDS/SROS2 policy, deployment, and operator assumptions.

### Related concepts

SROS2, configuration, interface, safety/security relation, Rotifer.

### Source provenance

[plan_06-06-26.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/plan_06-06-26.md), [dds_ros2_starter_pack.md](../../../02_my_notes/dds_ros2_starter_pack.md).

### Status

active

## Visibility and observability

### What it is

The degree to which integrators can see and interpret security/safety-relevant states.

### Why it matters

If relevant state is not observable, concerns may be inferred from continued operation rather than evidenced.

### Role in RQ3

It connects empirical interview concepts to Rotifer probes and evidence traces.

### Related concepts

Debugging, working understanding, partial observability, evidence.

### Source provenance

[Core Concepts.md](../../../02_my_notes/Interview%20Preperation/Core%20Concepts.md), [wiki/practice/debugging.md](../../../wiki/practice/debugging.md), [Canonical Nav2 Evidence Ladder.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md).

### Status

active

