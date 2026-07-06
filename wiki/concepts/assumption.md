---
status: seed
maturity: old-frame-risk
type: concept
author_review: needed
---

# Assumption

## Short definition

An assumption is a condition that must hold for a component, abstraction, tool, practice, or assurance claim to work as intended, but which is not fully enforced by that thing itself.

## Why it matters

Robotics integration often relies on conditions that are distributed across layers: frame conventions, QoS compatibility, trusted network placement, timing expectations, deployment identity, lifecycle state, or local operating procedures. Some are documented, some are encoded in tools, and some are carried as local knowledge.

Assumptions matter for safety/security because a violated condition may change the meaning of a system property. They matter for assurance because the validity of a claim depends on whether its supporting conditions still hold.

## In this PhD

Assumption vocabulary is useful, but it should not dominate the current research-question framing. Earlier notes use stronger assumption/misalignment language; the current framing keeps assumptions as one way to analyse integration, system boundaries, and assurance maintenance.

> [old-frame]
> This concept appears in earlier notes using stronger assumption/misalignment language. Treat that language as historical or provisional unless linked to the current RQ framing.

## Related concepts

- [Configuration](configuration.md)
- [Interface](interface.md)
- [Assurance claim](../assurance/assurance-claim.md)
- [Continuous assurance](../assurance/continuous-assurance.md)
- [Assumption vs requirement vs guarantee](../meta/concept-boundaries/assumption-vs-requirement-vs-guarantee.md)

## Sources and anchors

- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Robotics security as layer misalignment](../../02_my_notes/analysis_fragments/robotics-security-as-layer-misalignment.md)
- [Rotifer positioning note](../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)
- [DDS specification](../sources/dds-specification.md)

## Open questions

- Which assumptions are empirically observed and which are analytic constructs?
