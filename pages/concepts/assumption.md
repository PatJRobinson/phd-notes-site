---
compiled: true
node_type: concept
status: active
targets:
  - rq1
  - rq2
  - rq3
  - rq4
sources:
  - wiki/concepts/assumption.md
  - 04_research_methodologies/note-on-analytical-approach.md
  - 05_prototype_ideas/robotics-testbench-framework/positioning-note.md
publication_profile: dual
---

# Assumption

## What it is

An assumption is a situated claim, expectation, or condition that must hold for a system, representation, experiment, standard, interface, or assurance claim to mean what it says. The current project should use the term cautiously: assumptions are analytically important, but they should not become a catch-all explanation for every integration problem.

## Why it matters

Assumptions can be distributed across code, configuration, policies, standards, documentation, tooling, organisational roles, deployment environments, and practitioner knowledge. They matter because they can remain active even when no single artefact explicitly owns them.

The useful question is not whether everything is an assumption. The useful question is how particular assumptions differ: what they concern, who relies on them, where they are represented, when they become relevant, how they are maintained, and what happens when they fail or become invalid.

## In this PhD

Assumption should be treated as a sensitising concept for analysis. It helps the project notice differences across artefacts and cases without forcing all phenomena into one category.

Current provisional dimensions include:

- Content: authority, identity, behaviour, timing, availability, environment, configuration, trust, responsibility, or boundary.
- Actor: who makes, inherits, relies on, contests, validates, or maintains the assumption.
- Time: when the assumption arises, changes, expires, or becomes relevant.
- Representation: whether it appears in code, configuration, policy, model, documentation, test, standard, practice, or tacit knowledge.
- Epistemic status: whether it is explicit, implicit, known, unrecognised, tested, inherited, stable, provisional, shared, or contested.
- Scope: whether it applies to a component, interface, deployment, organisation, environment, experiment, or lifecycle.
- Maintenance and ownership: who is expected to validate, communicate, update, retire, or recover it.
- Consequence: what follows if it is false, misunderstood, unmaintained, or invalidated.

## In relevant RQs

- RQ1: assumptions are part of how integrators construct working understanding across tools, traces, documents, and practice.
- RQ2: assumptions help explain how system boundaries are constructed and maintained across architecture, configuration, and deployment.
- RQ3: assumptions can become safety/security-relevant at interfaces between components, tools, roles, and practices.
- RQ4: assumptions help explain why evidence and assurance claims can weaken or expire as composition, configuration, and context change.

## Relations

- Supports [Assumption-bearing invariant](assumption-bearing-invariant.md).
- Supports [Rotifer as assumption tracing](rotifer-as-assumption-tracing.md).
- Connects to [Scenario](scenario.md), because scenarios may bound the situation in which assumptions are expected to hold.
- Connects to [Configuration](configuration.md), [Interface](interface.md), [Deployment context](deployment-context.md), and [System boundary](system-boundary.md).

## Evidence

The current evidence is conceptual and methodological. The methodology note supplies the sensitising-concept framing and provisional dimensions. The Rotifer notes show one constructive route for making some assumptions inspectable through scenarios, configurations, interfaces, traces, evidence, and repeated realisations.

## Source provenance

- [assumption.md](../../wiki/concepts/assumption.md)
- [note-on-analytical-approach.md](../../04_research_methodologies/note-on-analytical-approach.md)
- [positioning-note.md](../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)

## Open tensions

- The project needs to distinguish assumptions from requirements, constraints, dependencies, interface contracts, responsibilities, unknowns, omissions, design decisions, and factual claims.
- The proposed dimensions are prompts for analysis, not a validated typology.
- Further literature work is needed before assumption classification becomes a thesis contribution rather than an analytic aid.
