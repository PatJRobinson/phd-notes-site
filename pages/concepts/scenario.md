---
compiled: true
node_type: concept
status: active
targets:
  - rq2
  - rq3
  - rq4
sources:
  - 04_research_methodologies/note-on-analytical-approach.md
  - 02_my_notes/case-studies/index.md
  - 05_prototype_ideas/robotics-testbench-framework/project-ideology.md
publication_profile: dual
---

# Scenario

## What it is

Scenario is a provisional comparative term for a bounded system situation that can be explained, executed, tested, compared, or assured. The project should not assume that every standard or engineering artefact uses the word scenario, or that similarly named constructs are equivalent.

Related constructs may include use cases, operational scenarios, mission scenarios, configurations, deployment contexts, system states, test cases, reference architectures, operating environments, assurance contexts, experiment definitions, and concrete realisations.

## Why it matters

Scenario-like constructs may show how different artefacts make a system situation analysable. They can define what is inside the frame, what remains variable, what kind of evidence is expected, and who is responsible for interpreting or maintaining the bounded situation.

This matters because the thesis compares standards, tools, experiments, documentation, and practice. A scenario may be one bridge between abstract assurance language and concrete ROS 2-style integration work.

## In this PhD

Scenario should be used as a research question for comparison, not as a fixed category. The current question is:

> How do different standards and engineering artefacts use scenarios, or comparable constructs, to bound a particular system configuration or situation so that it can be explained, executed, tested, compared, or assured?

Candidate comparison dimensions include what the construct bounds, which elements are fixed or variable, whether it is executable or descriptive, what semantics it carries, which assumptions it makes visible, who maintains it, and how it changes over time.

## In relevant RQs

- RQ2: scenarios can expose how boundaries are drawn around a system, deployment, provider, or configuration.
- RQ3: scenarios can reveal where safety/security concerns cross interfaces, roles, tools, and operational contexts.
- RQ4: scenarios can help specify the scope under which evidence and assurance claims remain valid.

## Relations

- Connects to [Assumption](assumption.md), [Deployment context](deployment-context.md), [Configuration](configuration.md), [System boundary](system-boundary.md), and [Assurance claim](assurance-claim.md).
- Supports the [Case studies](../workflows/case-studies/index.md) area of work.
- Provides a possible bridge between standards analysis and [Rotifer as assumption tracing](rotifer-as-assumption-tracing.md).

## Evidence

The current evidence is methodological and programmatic. The analytical approach note identifies scenario as a candidate comparative object. The case-study programme records a possible public explainer around the question "How do you define a scenario?" Rotifer source notes provide vocabulary around experiments, providers, realisations, contracts, traces, and embodied configurations.

## Source provenance

- [note-on-analytical-approach.md](../../04_research_methodologies/note-on-analytical-approach.md)
- [case-studies/index.md](../../02_my_notes/case-studies/index.md)
- [project-ideology.md](../../05_prototype_ideas/robotics-testbench-framework/project-ideology.md)

## Open tensions

- Scenario may remain too broad unless the standards and engineering artefacts are compared closely.
- The term may need to split into several more precise terms after source analysis.
- Rotifer schema or implementation changes should not be inferred from this concept page until comparative work identifies which distinctions matter.
