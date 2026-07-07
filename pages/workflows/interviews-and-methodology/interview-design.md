# Interview Design

## Purpose

This page explains what the interview strand is designed to elicit. It is not a results page. Its role is to show how the current protocol turns the thesis concepts into participant-facing prompts without asking participants to perform the thesis argument for the researcher.

## Current position

The interview guide is designed around breakdowns, changes, responsibility, visibility, and tacit work. It avoids asking directly whether participants understand "cross-layer assumptions" or whether they are "security aware". Instead, it asks how systems are described, changed, debugged, maintained, handed off, and made sense of in practice.

That design is appropriate because the study is trying to surface assumptions that may be implicit, distributed, routine, or only visible when something breaks.

## What the guide probes

The current guide has seven strong participant-facing areas:

- system boundaries and ownership;
- deployment and change over time;
- debugging and fault diagnosis;
- visibility and expectations;
- access, maintenance, and things that expire;
- cross-machine or cloud services;
- trade-offs and pragmatism.

The closing retrospective prompt asks what a new team member would need to be warned about. This is a direct route into tacit knowledge without naming it as tacit knowledge.

## Why the design is indirect

Directly asking about security can distort the interview. It may invite normative answers about what participants think they should do, or narrow the conversation to explicitly labelled security controls. The current design instead elicits situations where safety/security-relevant assumptions may be present: ownership gaps, visibility loss, credential expiry, debugging pressure, deployment drift, and cross-boundary coordination.

This fits the thesis position that security and assurance concerns often become practical integration problems before they become formal security claims.

## How this relates to the RQs

- RQ1: "How do you know what is happening?" becomes questions about tools, traces, logs, expectations, surprises, and what new people learn the hard way.
- RQ3: "How are safety/security concerns managed across interfaces?" becomes questions about access, responsibility, debugging pressure, cloud/vendor boundaries, and unexpected communication.
- RQ4: "How do claims remain valid over time?" becomes questions about updates, redeployments, reusable configuration, maintenance burden, and persistent shortcuts.

## What is currently evidence

The interview design is evidence that the empirical study has been operationalised. It shows that the core concepts have been translated into answerable prompts.

It is not evidence that the candidate mechanisms occur in participant practice. That will require completed interviews, analytic memos, coded excerpts, and traceable theme development.

## Example prompt mapping

| Participant-facing prompt | Analytic target | Current status |
|---|---|---|
| "When you think about your system, what components does that include?" | System boundary, ownership, hidden dependencies | Design scaffold |
| "What tends to get reused from one deployment to the next?" | Lifecycle drift, configuration persistence, assumption carryover | Design scaffold |
| "What signals or tools do you rely on first?" | Working understanding, visibility, artefact-mediated diagnosis | Design scaffold |
| "What does 'everything looks fine' usually mean?" | Inferred correctness, silent failure, observability limits | Design scaffold |
| "What kinds of shortcuts feel acceptable?" | Trade-off, rational bypass, operational pressure | Design scaffold |
| "What do people usually learn the hard way?" | Tacit knowledge, invisible work, local fragility | Design scaffold |

## What remains unresolved

The guide still needs calibration around participant type. "ROS developer", "integrator", "operator", "security engineer", and "fleet maintainer" may produce different accounts and different responsibility boundaries. The compiled site should not imply that one guide is equally suitable for all of them without piloting.

## Source provenance

## Public sources

- [Hollnagel literature note](../../../01_literature/safety-resilience-theory/hollnagel-resilience-engineering-work-as-done.md)
- [Hutchins literature note](../../../01_literature/hci-infrastructure-practice/hutchins-distributed-cognition.md)
- [Star and Ruhleder literature note](../../../01_literature/hci-infrastructure-practice/star-ruhleder-infrastructure.md)
- [Suchman literature note](../../../01_literature/hci-infrastructure-practice/suchman-situated-action.md)

## Internal provenance

<!-- AUTONOTES:PRIVATE-SOURCES:START -->
- [Semi-Structured Interview Guide.md](../../../02_my_notes/Interview%20Preperation/Semi-Structured%20Interview%20Guide.md)
- [Candidate Questions and Themes.md](../../../02_my_notes/Interview%20Preperation/Candidate%20Questions%20and%20Themes.md)
- [Core Concepts.md](../../../02_my_notes/Interview%20Preperation/Core%20Concepts.md)
<!-- AUTONOTES:PRIVATE-SOURCES:END -->
