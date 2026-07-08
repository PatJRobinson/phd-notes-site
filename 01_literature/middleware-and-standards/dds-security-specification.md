---
status: working
source_type: standard-specification
strand: middleware-and-standards
---

# DDS Security Specification

## What this is

Object Management Group specification for DDS security architecture, including security plugins, governance, permissions, and security-policy semantics.

## Why it matters

The reports position DDS Security as the authoritative middleware-security layer behind SROS2 and ROS 2 security enforcement.

## Role in this PhD

Use for RQ3 when explaining how security policy enforcement depends on system-level meaning that may not be fully represented by the policy layer alone.

## Relations

- `supports` [SROS2 usable security tools](sros2-usable-security-tools.md)
- `depends_on` [DDS specification](dds-specification.md)
- `is_evidence_for` security assumptions crossing middleware, configuration, and deployment.

## Source provenance

- [Defensible search appendix report](../../02_my_notes/analysis_fragments/commisioned-reports/definsible-search-appendix-for-a-cross-layer-narrative-review-in-robotics-assurance.md)

## Open tasks

- Add exact OMG specification version and relevant sections for governance/permissions.
