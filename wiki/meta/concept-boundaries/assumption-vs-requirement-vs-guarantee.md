---
status: seed
maturity: draft
type: concept-boundary
author_review: needed
---

# Assumption vs Requirement vs Guarantee

## Distinction

An assumption is a condition that must hold but is not fully enforced by the thing relying on it. A requirement states what should be true. A guarantee is a property or behaviour provided under specified conditions.

## Why the distinction matters

Robotics integration often mixes these terms. A requirement may depend on assumptions. A guarantee may hold only under conditions. An assurance claim may need evidence that assumptions, requirements, and guarantees are aligned.

## Common confusion

Assumptions can be mistaken for guarantees when tools or abstractions make behaviour look stable. Requirements can be mistaken for guarantees when they are documented but not enforced.

## Usage in this wiki

Use assumption for unenforced or externally maintained conditions. Use requirement for specified expectations. Use guarantee for properties a component, tool, or system actually provides under stated conditions.

## Related pages

- [Assumption](../../concepts/assumption.md)
- [Assurance claim](../../assurance/assurance-claim.md)
- [Configuration](../../concepts/configuration.md)
- [SROS2](../../ros2/sros2.md)
