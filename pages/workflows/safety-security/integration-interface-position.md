# Safety/Security at Integration Interfaces

## Purpose

This page develops the current safety/security position for the thesis. It explains why safety/security is motivating and consequential, while integration, assumptions, practice, and assurance remain the thesis spine.

## Current position

Safety and security are distinct concerns that can become entangled in cyber-physical robotic systems. The thesis should not collapse them into one concept. It should also not treat them as cleanly separable where software, communication, configuration, identity, authority, and physical behaviour interact.

The current claim is that safety/security concerns often become actionable at integration interfaces: command topics, identity and permissions boundaries, lifecycle states, configuration, deployment context, responsibility handoffs, and observability surfaces.

## Why this matters

This position prevents two overclaims:

- that the whole thesis is a security evaluation of ROS 2;
- that safety/security is merely a motivating afterthought.

Instead, safety/security gives consequence to the thesis. It explains why hidden assumptions, working understanding, deployment context, and evidence validity matter in robotic systems.

## Source-grounded account

The safety/security relation note now links the strand to public anchors in systems security engineering, industrial security risk assessment, robot systems integration, systems safety, DDS Security, and SROS2. This makes the public grounding stronger than the earlier internal-only safety/security framing.

The command-authority case provides a concrete example: the authority to influence robot motion is a security-relevant interface condition with possible safety consequences. The case remains bounded. It shows assumption representation and evidence classification, not full security enforcement.

The interview design adds the practice side: responsibility, access, debugging pressure, visibility, and cross-boundary coordination are candidate places where safety/security concerns are managed or displaced.

## Relation to the RQs

- RQ3 is the main home for safety/security.
- RQ2 supplies boundaries and deployment context.
- RQ1 supplies working understanding and visibility.
- RQ4 supplies claim/evidence maintenance and assurance validity.

## What is currently evidence

The strand has conceptual evidence, public literature grounding, and bounded case-study evidence. It does not yet have practitioner findings or a broad security experiment suite.

## What remains unresolved

The thesis still needs a decision about how heavily to foreground safety/security in each output. A good current rule is: safety/security should be explicit in RQ3 and consequential across the thesis, but not allowed to absorb every research question.

## Source provenance

## Public sources

- [NIST SP 800-160](/01_literature/middleware-and-standards/nist-sp-800-160)
- [IEC 62443-3-2](/01_literature/middleware-and-standards/iec-62443-3-2)
- [ISO 10218](/01_literature/middleware-and-standards/iso-10218)
- [Leveson STAMP](/01_literature/safety-resilience-theory/leveson-engineering-safer-world-stamp)
- [DDS Security specification](/01_literature/middleware-and-standards/dds-security-specification)
- [SROS2 usable security tools](/01_literature/middleware-and-standards/sros2-usable-security-tools)

## Internal provenance

<!-- AUTONOTES:PRIVATE-SOURCES:START -->
- [safety-security-relation.md](../../../wiki/assurance/safety-security-relation.md)
- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
- [Core Concepts.md](../../../02_my_notes/Interview%20Preperation/Core%20Concepts.md)
<!-- AUTONOTES:PRIVATE-SOURCES:END -->
