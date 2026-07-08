---
status: working
source_type: literature-note
strand: ros-and-robotics-se
priority: high
---

# Canelas et al. — ROS Misconfigurations

## What this is

Current empirical anchor for ROS misconfiguration and integration fragility. The search appendix report says this paper derives a taxonomy of ROS misconfigurations from ROS Answers, with 12 high-level categories and 50 sub-categories.

## Why it matters

It is unusually close to the thesis problem because it frames ROS components as making assumptions about context that are often neither checked nor documented.

## Role in this PhD

Use as a bridge between robotics software-engineering evidence and the thesis interpretation of cross-layer assumptions. It supports RQ2 and RQ3.

## Relations

- `is_evidence_for` hidden assumptions in ROS integration.
- `supports` [ROS 2 design documents](../middleware-and-standards/ros2-design-documents.md)
- `supports` [SROS2 usable security tools](../middleware-and-standards/sros2-usable-security-tools.md)

## Source provenance

- [Defensible search appendix report](../../02_my_notes/analysis_fragments/commisioned-reports/definsible-search-appendix-for-a-cross-layer-narrative-review-in-robotics-assurance.md)
- [Progression literature survey report](../../02_my_notes/analysis_fragments/commisioned-reports/what-counts-as-a-suitable-literature-survey-for-your-progression-exam.md)

## Open tasks

- Add full bibliographic details.
- Read directly and extract categories most relevant to assumptions, configuration, deployment, and security.
