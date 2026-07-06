---
status: seed
maturity: draft
type: concept
author_review: needed
---

# Assurance Claim

## Short definition

An assurance claim is a justified statement that a system has, maintains, or satisfies some property under specified conditions.

## Why it matters

Assurance is not the same thing as safety or security. Safety/security are properties, concerns, consequences, or risks. Assurance is about the claim, evidence, reasoning, scope, validity, and maintenance of confidence in those properties.

In modular robotics, assurance claims are sensitive to system boundaries, configuration, deployment context, evidence quality, and change over time. A claim that is valid in one configuration or test environment may not automatically transfer to another.

## In this PhD

Assurance claims are used to discuss how integrators and organisations justify system properties in ROS 2-style robotics. The current RQ framing asks how changes in composition, configuration, and operational context affect the validity and maintenance of such claims.

## Related concepts

- [Safety/security relation](safety-security-relation.md)
- [Continuous assurance](continuous-assurance.md)
- [System boundary](../concepts/system-boundary.md)
- [Assumption](../concepts/assumption.md)
- [Deployment context](../concepts/deployment-context.md)
- [Safety vs security vs assurance](../meta/concept-boundaries/safety-vs-security-vs-assurance.md)

## Sources and anchors

- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Fragmentation and Architectural Instability](../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [Rotifer positioning note](../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)
- [NIST SP 800-160](../sources/nist-sp-800-160.md)
- [Leveson: Engineering a Safer World](../sources/leveson-engineering-a-safer-world.md)

## Open questions

- Which assurance vocabulary should be aligned with standards literature in a later pass?
