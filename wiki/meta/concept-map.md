---
status: seed
maturity: draft
type: meta
author_review: needed
---

# Concept Map

> [wiki-note]
> This page is a neutral explanatory synthesis, not a thesis claim.

## Core integration cluster

- [Integration](../concepts/integration.md) connects [interface](../concepts/interface.md), [configuration](../concepts/configuration.md), [deployment context](../concepts/deployment-context.md), [system boundary](../concepts/system-boundary.md), and [integrator](../practice/integrator.md).
- [System behaviour](../concepts/system-behaviour.md) connects [ROS graph](../ros2/ros-graph.md), [DDS](../ros2/dds.md), [QoS](../ros2/qos.md), [partial observability](../concepts/partial-observability.md), and [working understanding](../concepts/working-understanding.md).
- [Assumption](../concepts/assumption.md) connects [interface](../concepts/interface.md), [configuration](../concepts/configuration.md), [assurance claim](../assurance/assurance-claim.md), and [continuous assurance](../assurance/continuous-assurance.md).
- Boundary pages: [integration vs assembly](concept-boundaries/integration-vs-assembly.md), [system boundary vs interface](concept-boundaries/system-boundary-vs-interface.md), [configuration vs deployment context](concept-boundaries/configuration-vs-deployment-context.md), and [assumption vs requirement vs guarantee](concept-boundaries/assumption-vs-requirement-vs-guarantee.md).

## ROS 2 technical cluster

- [ROS 2-style robotics](../ros2/ros2-style-robotics.md) connects [ROS graph](../ros2/ros-graph.md), [DDS](../ros2/dds.md), [SROS2](../ros2/sros2.md), [modularity](../concepts/modularity.md), and [deployment context](../concepts/deployment-context.md).
- [ROS graph](../ros2/ros-graph.md) connects [interface](../concepts/interface.md), [system boundary](../concepts/system-boundary.md), [DDS](../ros2/dds.md), and [QoS](../ros2/qos.md).
- [SROS2](../ros2/sros2.md) connects [DDS](../ros2/dds.md), [configuration](../concepts/configuration.md), [safety/security relation](../assurance/safety-security-relation.md), and [assurance claim](../assurance/assurance-claim.md).

## Assurance cluster

- [Assurance claim](../assurance/assurance-claim.md) connects [system boundary](../concepts/system-boundary.md), [assumption](../concepts/assumption.md), [continuous assurance](../assurance/continuous-assurance.md), and [safety/security relation](../assurance/safety-security-relation.md).
- [Continuous assurance](../assurance/continuous-assurance.md) connects [deployment context](../concepts/deployment-context.md), [configuration](../concepts/configuration.md), [local knowledge](../practice/local-knowledge.md), and [partial observability](../concepts/partial-observability.md).
- Boundary page: [safety vs security vs assurance](concept-boundaries/safety-vs-security-vs-assurance.md).

## Practice cluster

- [Integrator](../practice/integrator.md) connects [working understanding](../concepts/working-understanding.md), [debugging](../practice/debugging.md), [local knowledge](../practice/local-knowledge.md), [configuration](../concepts/configuration.md), and [deployment context](../concepts/deployment-context.md).
- [Debugging](../practice/debugging.md) connects [partial observability](../concepts/partial-observability.md), [system behaviour](../concepts/system-behaviour.md), and [local knowledge](../practice/local-knowledge.md).
- Boundary page: [working understanding vs mental model](concept-boundaries/working-understanding-vs-mental-model.md).

## RQ-first navigation

- [Research question pathways](rq-pathways.md) groups these pages by the four current research questions.

## Source anchors

- Technical anchors: [ROS 2 design docs](../sources/ros2-design-docs.md), [DDS specification](../sources/dds-specification.md), and [SROS2](../sources/sros2.md).
- Standards and assurance anchors: [NIST SP 800-160](../sources/nist-sp-800-160.md), [IEC 62443](../sources/iec-62443.md), [ISO 10218](../sources/iso-10218.md), and [MOSA](../sources/mosa.md).
- Practice and systems anchors: [Leveson](../sources/leveson-engineering-a-safer-world.md), [Hollnagel](../sources/hollnagel-work-as-imagined.md), [Star](../sources/star-ethnography-of-infrastructure.md), and [Hutchins](../sources/hutchins-cognition-in-the-wild.md).
