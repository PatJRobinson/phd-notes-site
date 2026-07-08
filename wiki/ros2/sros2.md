---
status: seed
maturity: draft
type: concept
author_review: needed
---

# SROS2

## Short definition

SROS2 is the ROS 2 security tooling and workflow around DDS Security concepts such as governance, permissions, identities, and enclaves.

## Why it matters

SROS2 matters because ROS 2 security depends on policy generation, certificate and key management, enclave assignment, launch/deployment choices, and whether integrators can understand and maintain the security configuration.

It should not be confused with assurance. SROS2 may provide mechanisms relevant to security, while assurance concerns the evidence and justification that those mechanisms are correctly configured, valid for the system boundary, and maintained over time.

## In this PhD

SROS2 is treated as an example of how safety/security concerns meet configuration, middleware, and practice. It links technical enforcement to integrator work and assurance questions.

## Related concepts

- [DDS](dds.md)
- [Configuration](../concepts/configuration.md)
- [Safety/security relation](../assurance/safety-security-relation.md)
- [Assurance claim](../assurance/assurance-claim.md)
- [Integrator](../practice/integrator.md)

## Sources and anchors

- [SROS2 usable security tools](/01_literature/middleware-and-standards/sros2-usable-security-tools)
- [DDS + ROS 2 starter pack](../../02_my_notes/dds_ros2_starter_pack.md)
- [Core Concepts](../../02_my_notes/Interview%20Preperation/Core%20Concepts.md)
- [SROS2 source anchor](../sources/sros2.md)
- [DDS specification](../sources/dds-specification.md)

## Open questions

- How much of SROS2’s usability burden is evidenced in the current notes versus needing further study?
