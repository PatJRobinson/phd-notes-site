# Current Model

## Current thesis centre

The project currently centres on ROS 2-style robotics integration as the site where system behaviour, system boundaries, safety/security concerns, and assurance conditions are constructed and maintained across architecture, tooling, deployment, evidence, and practitioner work. Sources: [research-questions-redraft-16-06-26.md](../03_research_questions/research-questions-redraft-16-06-26.md), [01 - Current Thesis Shape.md](../01%20-%20Current%20Thesis%20Shape.md).

## Current research questions

- RQ1: How do integrators construct and maintain working understandings of behaviour in distributed robotics systems?
- RQ2: How do architectural modularity, configurability, and deployment context shape what counts as the system boundary in ROS 2-style robotics systems?
- RQ3: How do safety and security concerns emerge and get managed across the interfaces between components, tools, frameworks, and engineering practices in robotic system integration?
- RQ4: How do changes in system composition, configuration, and operational context affect the validity and maintenance of assurance claims for modular robotics systems?

See [Research Questions](rqs/index.md).

## Active concepts

Core concepts: [Integration](concepts/integration.md), [System behaviour](concepts/system-behaviour.md), [System boundary](concepts/system-boundary.md), [Interface](concepts/interface.md), [Deployment context](concepts/deployment-context.md), [Configuration](concepts/configuration.md), [Working understanding](concepts/working-understanding.md), [Assumption](concepts/assumption.md), [Scenario](concepts/scenario.md), [Assurance claim](concepts/assurance-claim.md).

Safety/security concepts: [Safety/security relation](concepts/safety-security-relation.md), [Command authority](concepts/command-authority.md), [SROS2 policy semantics](concepts/sros2-policy-semantics.md), [Integrator responsibility boundary](concepts/integrator-responsibility-boundary.md).

Rotifer concepts: [Rotifer as assumption tracing](concepts/rotifer-as-assumption-tracing.md), [Assumption-bearing invariant](concepts/assumption-bearing-invariant.md), [Visibility and observability](concepts/visibility-and-observability.md).

## Active arguments

- [Working understanding is artefact-mediated](arguments/working-understanding-is-artefact-mediated.md)
- [System boundaries are operationally constructed](arguments/system-boundaries-are-operationally-constructed.md)
- [Safety/security emerges at integration interfaces](arguments/safety-security-emerges-at-integration-interfaces.md)
- [Assurance claims are scope-and-context dependent](arguments/assurance-claims-are-scope-and-context-dependent.md)
- [Executable assumption tracing turns failures into evidence](arguments/executable-assumption-tracing-turns-failures-into-evidence.md)

## Active empirical/material sites

- Interview and methodology design around integrators, visibility, responsibility, deployment/change, debugging, assumptions, scenario-like constructs, and local knowledge.
- Rotifer command-authority case study and Nav2 evidence ladder.
- Case-study and article programme for grounding abstract claims in concrete ROS 2 projects, deployments, standards, and explanatory articles.
- DDS/ROS2/SROS2 architecture notes.
- Wiki concept layer and RQ pathways.
- Historical fragmentation, layer-misalignment, and architectural instability notes as precursors.

## Active outputs

- Organised research-question notes under [rqs/](rqs/index.md).
- Rotifer paper strand under [workflows/rotifer-paper](workflows/rotifer-paper/index.md).
- Safety/security strand under [workflows/safety-security](workflows/safety-security/index.md).
- Interviews/methodology strand under [workflows/interviews-and-methodology](workflows/interviews-and-methodology/index.md).
- Case-studies and articles strand under [workflows/case-studies](workflows/case-studies/index.md).
- Progression-report strand under [workflows/progression-report](workflows/progression-report/index.md).

## Work area map

- [Thesis core](workflows/thesis-core/index.md): project-wide coherence.
- [Rotifer paper](workflows/rotifer-paper/index.md): executable assumption tracing and paper claim.
- [Safety/security](workflows/safety-security/index.md): RQ3 and nonclaim boundaries.
- [Interviews and methodology](workflows/interviews-and-methodology/index.md): empirical route.
- [Case studies and articles](workflows/case-studies/index.md): concrete cases, contrast cases, and public explanatory outputs.
- [Progression report](workflows/progression-report/index.md): institutional output.
- [Recoverable fragments](workflows/recoverable-fragments/index.md): historical material with reuse potential.

## Known drifts or unstable areas

- Earlier assumption/misalignment language remains useful but can overdetermine the broader RQ framing.
- RQ2 and RQ4 may read too close together from the wording alone. The working distinction is that RQ2 asks how modular systems are composed, bounded, and integrated; RQ4 asks what modularity, change, and drift do to assurance claims.
- RQ3 and RQ4 remain adjacent; safety/security concerns can become assurance claims, but they are not the same thing. RQ4 is retained for now, with an explicit need to show what change-over-time adds.
- Rotifer can be misread as a portability, benchmarking, security, or assurance tool unless its assumption-tracing boundary is explicit.
- Rotifer now has a candidate developer-facing design-research direction, but that direction is not yet a settled design PhD contribution.
- ROSness/prevalence is now promoted as valid for the ROS 2-style robotics thread, but its older security-invariant provenance should remain visible and its examples need public/source audit before heavy use.
- SROS2 should be treated as an important mediating technology and official ROS 2 security mechanism, but not as the thesis centre.

## Safety/security position

Safety/security is motivating and consequential, especially through RQ3, but it is not currently the structural centre of the core thesis argument. It gives meaning to the robotics/human-factors/security apparatus and the funding context, while the central line of argument remains integration, assumptions, knowledge, practice, and assurance. See the [Safety/security strand](workflows/safety-security/index.md).

## Rotifer position

Rotifer is best understood as executable assumption tracing: a way to make experiment claims, assumptions, realisations, deployments, probes, and evidence easier to inspect. For the current Rotifer/Nav2 paper, the Nav2 evidence ladder is the main vehicle; command authority is a secondary safety/security-relevant example and possible follow-on paper. Rotifer is not being presented as a finished safety/security assurance method. See the [Rotifer paper strand](workflows/rotifer-paper/index.md).

## Notes on confidence

Confidence is high on the existence of the four current RQs because the wiki pathway and June RQ redraft align. Confidence is lower on how visible the RQ2/RQ4 and RQ3/RQ4 boundaries are to a reader, because recent feedback identifies those separations as needing clearer prose. Confidence is now higher on the Rotifer paper centre: Nav2 ladder/methodology first, command authority second. Confidence is medium on ROSness/prevalence as a source: it is valid and promotable, but still needs careful public grounding.
