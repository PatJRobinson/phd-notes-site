# RQ4 Compilation

## Current wording or inferred wording

Best current wording: How do changes in system composition, configuration, and operational context affect the validity and maintenance of assurance claims for modular robotics systems?

Sources: [wiki/meta/rq-pathways.md](../../../wiki/meta/rq-pathways.md), [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md).

## What this question is really asking

RQ4 asks how claims about system properties survive, weaken, expire, or need re-evaluation when modular robotic systems are changed, redeployed, reconfigured, retuned, ported, or interpreted under new conditions.

## Why it matters

Assurance involves property claims, evidence, scope, reasoning, and maintenance. Modular ROS 2-style systems can continue to work while the conditions that made previous evidence meaningful have drifted.

## How it relates to the thesis

RQ4 is the assurance-over-change question. It depends on RQ1's account of working understanding, RQ2's account of boundaries and deployment context, and RQ3's safety/security interface concerns.

## Main concepts

- [Assurance claim](../../concepts/assurance-claim.md)
- [Continuous assurance](../../concepts/continuous-assurance.md)
- [Deployment context](../../concepts/deployment-context.md)
- [Configuration](../../concepts/configuration.md)
- [System boundary](../../concepts/system-boundary.md)
- [Local knowledge](../../concepts/local-knowledge.md)
- [Assumption](../../concepts/assumption.md)
- [Scenario](../../concepts/scenario.md)
- [Assumption-bearing invariant](../../concepts/assumption-bearing-invariant.md)

## Main arguments

- [Assurance claims are scope-and-context dependent](../../arguments/assurance-claims-are-scope-and-context-dependent.md)
- [Change can invalidate evidence without obvious failure](../../arguments/change-can-invalidate-evidence-without-obvious-failure.md)
- [Continuous assurance is a problem space, not a solved method](../../arguments/continuous-assurance-is-a-problem-space.md)

## Evidence base

- Wiki assurance pages.
- Fragmentation/architectural instability note.
- Rotifer positioning and evidence-ladder material.
- Interview concepts around lifecycle drift, visibility, and local knowledge.
- Scenario and case-study programme as a route into assurance context, evidence scope, and claim maintenance.

## Open tensions

See [open-tensions.md](open-tensions.md). The main tension is how much of RQ4 is method, theory, Rotifer evidence, or future work. A second live tension is how visibly RQ4 differs from RQ2 and RQ3.

## Reading route

Use [reading-route.md](reading-route.md).

## Source provenance

Detailed provenance is in [source-provenance.md](source-provenance.md).
