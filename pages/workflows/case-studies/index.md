---
compiled: true
node_type: workflow
status: active
targets:
  - rq2
  - rq3
  - rq4
sources:
  - 02_my_notes/case-studies/index.md
publication_profile: dual
---

# Case Studies and Articles

## Purpose

This area of work develops concrete cases, examples, and explanatory articles that make the project easier to understand without turning examples into decoration. A case should help ground abstract claims about ROS 2-style integration, assumptions, interfaces, deployment context, assurance, and system change.

## Current status

Active programme note. The source material defines standards for candidate cases, public articles, evidence discipline, and lifecycle. No new first-class article is being claimed as complete.

## Related RQs

- RQ2: cases can show how boundaries are drawn around projects, deployments, standards, and configurations.
- RQ3: cases can show how safety/security concerns appear at interfaces, responsibilities, and tools.
- RQ4: cases can show how evidence, assumptions, and assurance claims change as systems are redeployed, reconfigured, or reinterpreted.

## Active concepts

[Scenario](../../concepts/scenario.md), [Assumption](../../concepts/assumption.md), [ROS 2-style robotics](../../concepts/ros2-style-robotics.md), [System boundary](../../concepts/system-boundary.md), [Interface](../../concepts/interface.md), [Deployment context](../../concepts/deployment-context.md), [Assurance claim](../../concepts/assurance-claim.md).

## Active arguments

[System boundaries are operationally constructed](../../arguments/system-boundaries-are-operationally-constructed.md), [Deployment context changes system meaning](../../arguments/deployment-context-changes-system-meaning.md), [Assurance claims are scope-and-context dependent](../../arguments/assurance-claims-are-scope-and-context-dependent.md), [Executable assumption tracing turns failures into evidence](../../arguments/executable-assumption-tracing-turns-failures-into-evidence.md).

## Evidence base

The current evidence base is a programme structure and candidate backlog, not completed case findings. Existing source material supports early cases around Nav2/Rotifer, AV prototype versus warehouse AMR deployment, SROS2 policy and command authority, IEC 62443 boundary concepts, and scenario definition.

## Source notes

- [case-studies/index.md](../../../02_my_notes/case-studies/index.md)
- [av-prototype-vs-warehouse-amrs.md](../../../02_my_notes/contrast_cases/av-prototype-vs-warehouse-amrs.md)
- [Canonical Nav2 Evidence Ladder.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
- [note-on-analytical-approach.md](../../../04_research_methodologies/note-on-analytical-approach.md)
- [rotifer-as-developer-facing-design-research.md](../../../05_prototype_ideas/robotics-testbench-framework/rotifer-as-developer-facing-design-research.md)

## Outputs this work supports

- Case-study research notes.
- Public explanatory articles.
- Thesis examples and contrast cases.
- Standards and assurance comparison.
- Rotifer experiment write-ups.

## Open decisions

- Which candidates should become article outputs under `06_outputs/`.
- Which cases have enough public evidence to support reader-facing claims.
- Whether scenario remains a useful comparative term after standards analysis.
- How to keep case studies analytical rather than merely illustrative.

## Reading route

Start with [candidate backlog](candidate-backlog.md), then [article workflow](article-workflow.md), then [open tensions](open-tensions.md). For method background, read [Scenario](../../concepts/scenario.md) and [Assumption](../../concepts/assumption.md).
