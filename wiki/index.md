---
status: seed
maturity: draft
type: index
author_review: needed
---

# Wiki Index

> [wiki-note]
> This page is a neutral explanatory synthesis, not a thesis claim.

This wiki explains the conceptual terrain of the PhD without turning it into a thesis argument. It is organised around concepts used to discuss ROS 2-style robotics integration, system behaviour, safety/security concerns, assurance claims, and integrator practice.

## Start here

1. [ROS 2-style robotics](ros2/ros2-style-robotics.md)
2. [Integration](concepts/integration.md)
3. [System boundary](concepts/system-boundary.md)
4. [Working understanding](concepts/working-understanding.md)
5. [Assurance claim](assurance/assurance-claim.md)
6. [Research question pathways](meta/rq-pathways.md)

## Core concepts

- [Integration cluster README](integration/README.md)
- [Integration](concepts/integration.md)
- [System behaviour](concepts/system-behaviour.md)
- [System boundary](concepts/system-boundary.md)
- [Assumption](concepts/assumption.md)
- [Interface](concepts/interface.md)
- [Configuration](concepts/configuration.md)
- [Deployment context](concepts/deployment-context.md)
- [Modularity](concepts/modularity.md)
- [Partial observability](concepts/partial-observability.md)
- [Working understanding](concepts/working-understanding.md)

## ROS 2 concepts

- [ROS 2-style robotics](ros2/ros2-style-robotics.md)
- [ROS graph](ros2/ros-graph.md)
- [DDS](ros2/dds.md)
- [QoS](ros2/qos.md)
- [SROS2](ros2/sros2.md)

## Assurance, safety, and security

- [Assurance claim](assurance/assurance-claim.md)
- [Safety/security relation](assurance/safety-security-relation.md)
- [Continuous assurance](assurance/continuous-assurance.md)

## Practice

- [Integrator](practice/integrator.md)
- [Debugging](practice/debugging.md)
- [Local knowledge](practice/local-knowledge.md)

## Meta

- [Wiki README](README.md)
- [Sources cluster README](sources/README.md)
- [Concept map](meta/concept-map.md)
- [RQ pathways](meta/rq-pathways.md)
- [Style guide](meta/style-guide.md)
- [Page template](meta/page-template.md)
- [Author review checklist](meta/author-review-checklist.md)
- [Changelog](meta/changelog.md)

## Concept boundaries

- [Integration vs assembly](meta/concept-boundaries/integration-vs-assembly.md)
- [Safety vs security vs assurance](meta/concept-boundaries/safety-vs-security-vs-assurance.md)
- [System boundary vs interface](meta/concept-boundaries/system-boundary-vs-interface.md)
- [Configuration vs deployment context](meta/concept-boundaries/configuration-vs-deployment-context.md)
- [Working understanding vs mental model](meta/concept-boundaries/working-understanding-vs-mental-model.md)
- [Assumption vs requirement vs guarantee](meta/concept-boundaries/assumption-vs-requirement-vs-guarantee.md)

## Source anchors

- [ROS 2 design docs](sources/ros2-design-docs.md)
- [DDS specification](sources/dds-specification.md)
- [SROS2](sources/sros2.md)
- [NIST SP 800-160](sources/nist-sp-800-160.md)
- [IEC 62443](sources/iec-62443.md)
- [ISO 10218](sources/iso-10218.md)
- [MOSA](sources/mosa.md)
- [Leveson: Engineering a Safer World](sources/leveson-engineering-a-safer-world.md)
- [Hollnagel: Work-as-Imagined / Work-as-Done](sources/hollnagel-work-as-imagined.md)
- [Star: Ethnography of Infrastructure](sources/star-ethnography-of-infrastructure.md)
- [Hutchins: Cognition in the Wild](sources/hutchins-cognition-in-the-wild.md)

## Maintenance notes

- Use plain markdown links.
- Prefer integrator over developer unless the source note is specifically about software development.
- Treat assumption/misalignment vocabulary as explanatory vocabulary, not the premise of every page.
- Keep assurance pages focused on claims, evidence, validity, and maintenance.
