---
status: working
source_type: official-documentation
strand: middleware-and-standards
---

# ROS 2 Design Documents

## What this is

Official ROS 2 design and documentation material. The reports identify these documents as the authoritative source for ROS on DDS, the ROS 2 middleware interface, node-to-participant mapping, QoS, discovery, and DDS security integration.

## Why it matters

This is the encoded technical layer of the thesis: where assumptions are built into infrastructure, interfaces, naming, discovery, QoS, security, and deployment expectations.

## Role in this PhD

Use primarily for RQ2 and RQ3, especially system boundary, interface, deployment, and security-policy interpretation.

## Relations

- `depends_on` [DDS specification](dds-specification.md)
- `depends_on` [DDS Security specification](dds-security-specification.md)
- `supports` [Canelas ROS misconfigurations](../ros-and-robotics-se/canelas-ros-misconfigurations.md)

## Source provenance

- [Defensible search appendix report](../../02_my_notes/analysis_fragments/commisioned-reports/definsible-search-appendix-for-a-cross-layer-narrative-review-in-robotics-assurance.md)
- [Progression literature survey report](../../02_my_notes/analysis_fragments/commisioned-reports/what-counts-as-a-suitable-literature-survey-for-your-progression-exam.md)

## Open tasks

- Version-control the ROS distribution or documentation version used.
- Add specific pages for ROS on DDS, middleware interface, QoS, DDS-Security integration, threat model, and ROS_DOMAIN_ID if they become heavily cited.
