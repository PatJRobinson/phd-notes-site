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

Core concepts: [Integration](concepts/integration.md), [System behaviour](concepts/system-behaviour.md), [System boundary](concepts/system-boundary.md), [Interface](concepts/interface.md), [Deployment context](concepts/deployment-context.md), [Configuration](concepts/configuration.md), [Working understanding](concepts/working-understanding.md), [Assurance claim](concepts/assurance-claim.md).

Safety/security concepts: [Safety/security relation](concepts/safety-security-relation.md), [Command authority](concepts/command-authority.md), [SROS2 policy semantics](concepts/sros2-policy-semantics.md), [Integrator responsibility boundary](concepts/integrator-responsibility-boundary.md).

Rotifer concepts: [Rotifer as assumption tracing](concepts/rotifer-as-assumption-tracing.md), [Assumption-bearing invariant](concepts/assumption-bearing-invariant.md), [Visibility and observability](concepts/visibility-and-observability.md).

## Active arguments

- [Working understanding is artefact-mediated](arguments/working-understanding-is-artefact-mediated.md)
- [System boundaries are operationally constructed](arguments/system-boundaries-are-operationally-constructed.md)
- [Safety/security emerges at integration interfaces](arguments/safety-security-emerges-at-integration-interfaces.md)
- [Assurance claims are scope-and-context dependent](arguments/assurance-claims-are-scope-and-context-dependent.md)
- [Executable assumption tracing turns failures into evidence](arguments/executable-assumption-tracing-turns-failures-into-evidence.md)

## Active empirical/material sites

- Interview and methodology design around integrators, visibility, responsibility, deployment/change, debugging, and local knowledge.
- Rotifer command-authority case study and Nav2 evidence ladder.
- DDS/ROS2/SROS2 architecture notes.
- Wiki concept layer and RQ pathways.
- Historical fragmentation, layer-misalignment, and architectural instability notes as precursors.

## Active outputs

- Compiled RQ layer under [rqs/](rqs/index.md).
- Rotifer paper workflow under [workflows/rotifer-paper](workflows/rotifer-paper/index.md).
- Safety/security workflow under [workflows/safety-security](workflows/safety-security/index.md).
- Interviews/methodology workflow under [workflows/interviews-and-methodology](workflows/interviews-and-methodology/index.md).
- Progression-report workflow under [workflows/progression-report](workflows/progression-report/index.md).

## Workflow map

- [Thesis core](workflows/thesis-core/index.md): project-wide coherence.
- [Rotifer paper](workflows/rotifer-paper/index.md): executable assumption tracing and paper claim.
- [Safety/security](workflows/safety-security/index.md): RQ3 and nonclaim boundaries.
- [Interviews and methodology](workflows/interviews-and-methodology/index.md): empirical route.
- [Progression report](workflows/progression-report/index.md): institutional output.
- [Recoverable fragments](workflows/recoverable-fragments/index.md): historical material with reuse potential.

## Known drifts or unstable areas

- Earlier assumption/misalignment language remains useful but can overdetermine the broader RQ framing.
- RQ3 and RQ4 remain adjacent; safety/security concerns can become assurance claims, but they are not the same thing.
- Rotifer can be misread as a portability, benchmarking, security, or assurance tool unless its assumption-tracing boundary is explicit.
- ROSness/prevalence notes need source audit before heavy use.
- SROS2 should not be over-centred without deeper literature/source compilation.

## Safety/security position

Safety/security is central to RQ3 and motivationally important to the thesis, but the current project should claim only bounded things: safety/security concerns can emerge at interfaces; command authority is a worked safety/security-relevant assumption; configuration, deployment, visibility, and responsibility shape management. See [Safety/security workflow](workflows/safety-security/index.md).

## Rotifer position

Rotifer is best compiled as executable assumption tracing and socio-technical legibility infrastructure. It makes experiment claims, assumptions, realisations, deployments, probes, and evidence inspectable. It is not a finished safety/security assurance method. See [Rotifer paper workflow](workflows/rotifer-paper/index.md).

## Notes on confidence

Confidence is high on RQ wording and RQ3/RQ4 separation because the wiki pathway and June RQ redraft align. Confidence is medium on Rotifer's final paper shape because command authority and Nav2 evidence ladder both have strong claims. Confidence is lower on ROSness/prevalence and some broader safety/security literature positioning because those notes require source audit.

