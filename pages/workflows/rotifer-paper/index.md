# Rotifer Paper

## Purpose

Develop the Rotifer paper around executable assumption tracing, concrete experiment realisation, and tools for making assumptions, evidence, and context easier to inspect.

## Current status

Active candidate paper. The paper centre is now resolved as evidence and assumption-tracing methodology, primarily carried by the Nav2 evidence ladder. Command authority remains a strong security-relevant example and possible follow-on paper strand, but it is not the organising centre of this paper.

## Related RQs

- RQ1: artefact-mediated working understanding.
- RQ2: scenario/app/provider/realisations/deployment boundaries.
- RQ3: command authority as safety/security-relevant interface assumption.
- RQ4: evidence validity and claim interpretation.

## Active concepts

[Rotifer as assumption tracing](../../concepts/rotifer-as-assumption-tracing.md), [Command authority](../../concepts/command-authority.md), [Assumption-bearing invariant](../../concepts/assumption-bearing-invariant.md), [Deployment context](../../concepts/deployment-context.md), [Visibility and observability](../../concepts/visibility-and-observability.md).

## Active arguments

[Executable assumption tracing turns failures into evidence](../../arguments/executable-assumption-tracing-turns-failures-into-evidence.md), [Deployment context changes system meaning](../../arguments/deployment-context-changes-system-meaning.md).

## Detailed subject pages

- [Assumption-tracing method](assumption-tracing-method.md): what Rotifer contributes methodologically.
- [Nav2 evidence ladder](nav2-evidence-ladder-subject.md): why the Nav2 sequence is the current paper centre.
- [Security relevance and nonclaims](security-relevance-and-nonclaims.md): how command authority and future SROS2/DDS Security work relate without overclaiming.
- [Evidence and provenance](evidence-and-provenance.md): separates implementation evidence, literature grounding, internal design notes, and missing evidence.

## Evidence base

[Rotifer trace evidence](../../evidence/rotifer-trace-evidence.md), [Nav2 evidence ladder](../../evidence/nav2-evidence-ladder.md), [Rotifer positioning and project ideology](../../evidence/rotifer-positioning-and-project-ideology.md).

## Source notes

- [positioning-note.md](../../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)
- [project-ideology.md](../../../05_prototype_ideas/robotics-testbench-framework/project-ideology.md)
- [plan_06-06-26.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/plan_06-06-26.md)
- [positioning_statements.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/positioning_statements.md)
- [Canonical Nav2 Evidence Ladder.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/Canonical%20Nav2%20Evidence%20Ladder.md)
- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
- [case_study.md](../../../05_prototype_ideas/robotics-testbench-framework/results/command_authority/case_study.md)

## Outputs this work supports

Rotifer paper, thesis methodology/evidence section, RQ3 safety/security case, RQ4 evidence-provenance discussion.

## Open decisions

- How exactly should the paper title/framing express the Nav2 evidence-ladder centre?
- How much command-authority material belongs in the paper as a secondary safety/security thread?
- Where should the cautious safety/security discussion section sit?

## Reading route

Start with [assumption-tracing method](assumption-tracing-method.md), then [Nav2 evidence ladder](nav2-evidence-ladder-subject.md), then [security relevance and nonclaims](security-relevance-and-nonclaims.md), then [writing-route.md](writing-route.md).
