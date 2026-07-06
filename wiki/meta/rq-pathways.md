---
status: seed
maturity: draft
type: navigation
author_review: needed
---

# Research Question Pathways

> [wiki-note]
> This page organises wiki concepts by research question. It is a navigation aid, not a thesis outline.

## RQ1 — Working understandings

How do integrators construct and maintain working understandings of system behaviour in distributed robotics systems?

Start with:

- [Integrator](../practice/integrator.md)
- [Working understanding](../concepts/working-understanding.md)
- [Partial observability](../concepts/partial-observability.md)

Supporting concepts:

- [Debugging](../practice/debugging.md)
- [Local knowledge](../practice/local-knowledge.md)
- [System behaviour](../concepts/system-behaviour.md)

Technical anchors:

- [ROS graph](../ros2/ros-graph.md)
- [QoS](../ros2/qos.md)

Practice/assurance anchors:

- [Hutchins: Cognition in the Wild](../sources/hutchins-cognition-in-the-wild.md)
- [Hollnagel: Work-as-Imagined / Work-as-Done](../sources/hollnagel-work-as-imagined.md)

This RQ does not require direct access to internal mental models. It treats understanding as situated, artefact-mediated, and visible through practice.

## RQ2 — System boundaries

How do architectural modularity, configurability, and deployment context shape what counts as the system boundary in ROS 2 style robotics systems?

Start with:

- [System boundary](../concepts/system-boundary.md)
- [Modularity](../concepts/modularity.md)
- [Deployment context](../concepts/deployment-context.md)

Supporting concepts:

- [Configuration](../concepts/configuration.md)
- [Interface](../concepts/interface.md)
- [ROS 2-style robotics](../ros2/ros2-style-robotics.md)

Technical anchors:

- [ROS graph](../ros2/ros-graph.md)
- [DDS](../ros2/dds.md)
- [ROS 2 design docs](../sources/ros2-design-docs.md)
- [DDS specification](../sources/dds-specification.md)

Practice/assurance anchors:

- [MOSA](../sources/mosa.md)
- [Star: Ethnography of Infrastructure](../sources/star-ethnography-of-infrastructure.md)

This RQ is not trying to prove that boundaries are always unstable. It asks how boundaries are made, interpreted, and revised in modular ROS 2-style systems.

## RQ3 — Safety/security across interfaces

How do safety and security concerns emerge and get managed across the interfaces between components, tools, frameworks, and engineering practices in robotic system integration?

Start with:

- [Safety/security relation](../assurance/safety-security-relation.md)
- [Interface](../concepts/interface.md)
- [Integration](../concepts/integration.md)

Supporting concepts:

- [Configuration](../concepts/configuration.md)
- [Assumption](../concepts/assumption.md)
- [SROS2](../ros2/sros2.md)

Technical anchors:

- [DDS](../ros2/dds.md)
- [QoS](../ros2/qos.md)
- [SROS2 source anchor](../sources/sros2.md)
- [IEC 62443](../sources/iec-62443.md)
- [ISO 10218](../sources/iso-10218.md)

Practice/assurance anchors:

- [Integrator](../practice/integrator.md)
- [Debugging](../practice/debugging.md)

This RQ does not assume that security concerns are always the cause of safety problems. It asks how the concerns meet, blur, or separate across integration work.

## RQ4 — Assurance over change

How do changes in system composition, configuration, and operational context affect the validity and maintenance of assurance claims for modular robotics systems?

Start with:

- [Assurance claim](../assurance/assurance-claim.md)
- [Continuous assurance](../assurance/continuous-assurance.md)
- [Deployment context](../concepts/deployment-context.md)

Supporting concepts:

- [Configuration](../concepts/configuration.md)
- [System boundary](../concepts/system-boundary.md)
- [Local knowledge](../practice/local-knowledge.md)
- [Assumption](../concepts/assumption.md)

Technical anchors:

- [NIST SP 800-160](../sources/nist-sp-800-160.md)
- [MOSA](../sources/mosa.md)
- [Leveson: Engineering a Safer World](../sources/leveson-engineering-a-safer-world.md)

Practice/assurance anchors:

- [Partial observability](../concepts/partial-observability.md)
- [Working understanding](../concepts/working-understanding.md)

This RQ is not a claim that continuous assurance has already been solved. It treats claim maintenance as a problem created by changing systems, evidence, and contexts.
