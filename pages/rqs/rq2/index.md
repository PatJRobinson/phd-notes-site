# RQ2 Compilation

## Current wording or inferred wording

Best current wording: How do architectural modularity, configurability, and deployment context shape what counts as the system boundary in ROS 2-style robotics systems?

Sources: [wiki/meta/rq-pathways.md](../../../wiki/meta/rq-pathways.md), [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md).

## What this question is really asking

RQ2 asks how boundaries are made, interpreted, shifted, and revised when robotic systems are assembled from packages, nodes, middleware, providers, containers, networks, simulators, hardware, tools, scenarios, and operating contexts.

## Why it matters

Safety, security, and assurance all require some answer to "what system are we talking about?" In modular ROS 2-style systems, that answer may differ between code, ROS graph, deployment, responsibility, runtime, and evidence.

## How it relates to the thesis

RQ2 provides the boundary and architecture layer. RQ1 explains how integrators understand systems; RQ2 asks what counts as the system; RQ3 asks how safety/security crosses the interfaces produced by those boundaries; RQ4 asks how claims survive when boundaries and contexts change.

## Main concepts

- [System boundary](../../concepts/system-boundary.md)
- [Modularity](../../concepts/modularity.md)
- [Deployment context](../../concepts/deployment-context.md)
- [Configuration](../../concepts/configuration.md)
- [Scenario](../../concepts/scenario.md)
- [Assumption](../../concepts/assumption.md)
- [Interface](../../concepts/interface.md)
- [ROS 2-style robotics](../../concepts/ros2-style-robotics.md)

## Main arguments

- [System boundaries are operationally constructed](../../arguments/system-boundaries-are-operationally-constructed.md)
- [Modularity shifts work to integration](../../arguments/modularity-shifts-work-to-integration.md)
- [Deployment context changes system meaning](../../arguments/deployment-context-changes-system-meaning.md)

## Evidence base

- Wiki concept layer.
- Fragmentation and architectural instability notes.
- DDS/ROS2 architecture notes.
- Rotifer provider/realisations/deployment traces.
- Case-study and article programme, especially scenario definition, IEC 62443 boundaries versus ROS graph boundaries, and AV prototype versus warehouse AMR deployment.

## Open tensions

See [open-tensions.md](open-tensions.md). The main tension is how strong the thesis should make "boundary instability": not "boundaries do not exist", but "boundaries are purpose-relative and operationally maintained." A second live tension is whether readers can clearly distinguish RQ2 boundary construction from RQ4 assurance-over-change.

## Reading route

Use [reading-route.md](reading-route.md).

## Source provenance

Detailed provenance is in [source-provenance.md](source-provenance.md).
