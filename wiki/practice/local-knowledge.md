---
status: seed
maturity: needs-source-anchor
type: concept
author_review: needed
---

# Local Knowledge

## Short definition

Local knowledge is situated knowledge about how a particular robotic system, team, deployment, toolchain, or operating environment actually works.

## Why it matters

Local knowledge can include undocumented configuration choices, known failure modes, launch order expectations, hardware quirks, simulator differences, deployment scripts, trusted networks, or informal responsibility arrangements.

It matters because local knowledge can make a system workable while remaining hard to transfer, audit, or preserve. When teams change, systems are redeployed, or assurance claims are revisited, local knowledge may become a fragile part of system understanding.

## In this PhD

Local knowledge helps explain how integrators maintain working understanding under partial observability. It is not treated as inferior to formal knowledge; it is a real part of robotics integration. The concern is how it interacts with safety/security and assurance maintenance.

## Related concepts

- [Integrator](integrator.md)
- [Working understanding](../concepts/working-understanding.md)
- [Deployment context](../concepts/deployment-context.md)
- [Continuous assurance](../assurance/continuous-assurance.md)
- [Configuration](../concepts/configuration.md)

## Sources and anchors

- [Core Concepts](../../02_my_notes/Interview%20Preperation/Core%20Concepts.md)
- [Threat Models and Mental Models](../../04_research_methodologies/Threat%20Models%20and%20Mental%20Models.md)
- [Hollnagel: Work-as-Imagined / Work-as-Done](../sources/hollnagel-work-as-imagined.md)
- [Star: Ethnography of Infrastructure](../sources/star-ethnography-of-infrastructure.md)
- [Hutchins: Cognition in the Wild](../sources/hutchins-cognition-in-the-wild.md)

> [source-needed]
> Add precise empirical or literature anchors for local knowledge, tacit knowledge, or situated practice.

## Open questions

- Which kinds of local knowledge should the empirical study actively look for?
