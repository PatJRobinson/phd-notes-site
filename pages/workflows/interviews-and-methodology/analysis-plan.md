# Analysis Plan

## Purpose

This page compiles the current analysis plan for interviews and related artefacts. It clarifies the relationship between structured extraction, coding, and theme development.

## Current position

The analysis should be structured but not mechanically predetermined. The coding scheme is a listening and tagging aid for participant-facing phenomena: system boundaries, responsibility, deployment change, debugging, visibility, maintenance, access, and cross-machine or cloud interactions.

The analytic claim is not that these labels are the final findings. The stronger plan is to use them to build assumption records, compare across sources, and then develop explanatory themes.

## Structured extraction

For each relevant excerpt or artefact, the analysis should ask:

- What behaviour, state, or relationship is expected?
- What condition must hold for that expectation to remain true?
- Where is that condition represented, if anywhere?
- Who or what is assumed to maintain it?
- What evidence would show that it held?
- What would make it fail or become ambiguous?
- Which layer sees the issue: participant account, tool trace, ROS abstraction, DDS/security substrate, deployment context, or organisational responsibility?

These questions produce comparable assumption records. They do not by themselves produce the final themes.

## Coding posture

The coding scheme explicitly says the study is not coding for correctness or security awareness. It is coding for how work is done, how breakdowns are handled, and how people make sense of systems.

That posture matters because it avoids a deficit framing. A participant disabling a control, relying on a workaround, or treating a boundary as someone else's responsibility is not automatically a failure of knowledge. It may be a rational response to visibility limits, uptime pressure, tooling gaps, or responsibility structures.

## Theme development

Themes should be explanatory constructs, not renamed interview sections. For example:

- "system boundaries" as a prompt may become "boundary instability under integration";
- "debugging" as a prompt may become "diagnosis pressure shifts enforcement into workaround";
- "responsibility" as a prompt may become "assumed ownership without maintained authority";
- "visibility" as a prompt may become "continued operation substitutes for evidence".

The transformation from prompt to theme should be documented through memos and traceable examples.

## How this relates to the RQs

- RQ1 receives themes about working understanding, distributed cognition, artefact use, and local knowledge.
- RQ3 receives themes about safety/security concerns at interfaces, including authority, access, visibility, and responsibility.
- RQ4 receives themes about evidence drift, claim scope, change, maintenance, and what remains inspectable over time.

## What is currently evidence

The current analysis plan is strong design evidence. It demonstrates that the empirical route can connect source material to the RQs without collapsing into a generic interview study.

## What is only design scaffold

The proposed subcodes are provisional. Labels such as `assumed_owner`, `lifecycle_drift`, `bypass_for_diagnosis`, `silent_failure`, and `vendor_opacity` are useful candidate handles, but they should not be treated as confirmed empirical patterns until analysis has been completed.

## What remains unresolved

The largest unresolved decision is whether the assumption record itself becomes a thesis contribution. If so, the methods chapter should describe its schema, examples, and limits explicitly. If not, it can remain an internal analytic device supporting thematic analysis.

## Source provenance

## Public sources

- [Braun and Clarke literature note](../../../01_literature/hci-infrastructure-practice/braun-clarke-reflexive-thematic-analysis.md)
- [Hollnagel literature note](../../../01_literature/safety-resilience-theory/hollnagel-resilience-engineering-work-as-done.md)

## Internal provenance

<!-- AUTONOTES:PRIVATE-SOURCES:START -->
- [Coding Scheme.md](../../../02_my_notes/Interview%20Preperation/Coding%20Scheme.md)
- [note-on-analytical-approach.md](../../../04_research_methodologies/note-on-analytical-approach.md)
- [methodological-justification.md](../../../04_research_methodologies/methodological-justification.md)
<!-- AUTONOTES:PRIVATE-SOURCES:END -->
