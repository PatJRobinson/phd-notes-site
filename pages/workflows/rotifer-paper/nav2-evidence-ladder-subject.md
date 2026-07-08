# Nav2 Evidence Ladder

## Purpose

This page develops the Nav2 ladder as the detailed subject page for the current Rotifer paper centre.

## Current position

The Nav2 sequence is the clearest current demonstration of executable assumption tracing. It moves from weak evidence, such as topic presence, toward stronger bounded evidence about frame connectivity, timing, lifecycle surfaces, command production, odometry motion, and controller-specific behaviour.

The endpoint is deliberately narrow: RPP provides a bounded goal-success contrast on the prepared substrate, while MPPI exposes a controller-specific near-goal handoff boundary. The sequence does not validate production navigation.

## What the ladder shows

The ladder makes three claims increasingly concrete:

- Topic presence is not enough. `/tf`, `/scan`, or action topics may exist without the frame, timing, or semantic conditions needed for a navigation claim.
- Substrate preparation matters. TF, scan, map, lifecycle, costmap timing, and base/control frames are not incidental details; they are conditions under which a navigation claim becomes interpretable.
- A controller-specific boundary can remain after broad substrate causes have been ruled out. In the current sequence, RPP succeeds in the bounded setup while MPPI reveals a near-goal critic handoff boundary for the diagnostic task.

## Claim boundary

The ladder supports a claim about assumption tracing and bounded evidence interpretation. It does not support claims about:

- localization quality;
- costmap correctness in general;
- repeated navigation reliability;
- recovery behaviour;
- safety;
- production readiness;
- a complete internal explanation of MPPI command selection.

This boundary is not a weakness to hide. It is part of the method: the compiled evidence should state what has and has not been ruled out.

## Why this matters for the thesis

The ladder is a concrete example of the thesis spine. It shows how system meaning emerges from relations among components, representations, middleware surfaces, configuration, timing, and interpretation. It also shows how evidence can be invalidated or weakened without the system simply failing to launch.

## What is currently evidence

The ladder is active case-study evidence. It includes classified rungs, assumptions tested, key evidence, results, what each rung ruled out, and remaining limitations.

## What remains unresolved

The ladder still needs translation into paper prose and figures. It also needs a concise account of why the RPP/MPPI contrast is a methodological demonstration rather than a controller benchmark.

## Source provenance

## Public sources

- [ROS 2 design documents](/01_literature/middleware-and-standards/ros2-design-documents)
- [DDS specification](/01_literature/middleware-and-standards/dds-specification)

## Internal provenance

<!-- AUTONOTES:PRIVATE-SOURCES:START -->
- [Canonical Nav2 Evidence Ladder.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [Nav2 evidence ladder compiled evidence](../../evidence/nav2-evidence-ladder.md)
<!-- AUTONOTES:PRIVATE-SOURCES:END -->
