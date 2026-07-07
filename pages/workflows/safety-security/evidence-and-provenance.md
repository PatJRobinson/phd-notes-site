# Safety/Security Evidence and Provenance

## Purpose

Separate current safety/security evidence from public grounding, internal provenance, and missing work.

## Current evidence

- Conceptual: safety/security relation, interface, command authority, SROS2 policy semantics, assurance claim.
- Case-study: command authority as a bounded security-relevant assumption.
- Methodological: interview design around responsibility, access, visibility, debugging pressure, and cross-boundary coordination.
- Literature/standards: NIST SP 800-160, IEC 62443, ISO 10218, Leveson, ROS 2 design documents, DDS, DDS Security, SROS2, Canelas ROS misconfiguration.

## Evidence status

Green:

- safety/security as a consequential integration/interface concern;
- command authority as a bounded example;
- standards and middleware as relevant public grounding categories.

Amber:

- the relation between Rotifer and formal security enforcement;
- SROS2 usability and developer workflow claims;
- ROS 2 threat-model use before source audit.

Red:

- broad claims that Rotifer secures ROS 2;
- claims about actual practitioner safety/security management before interviews exist;
- claims that one command-authority example covers the whole safety/security problem space.

## Missing evidence

- Practitioner findings.
- A second safety/security worked example.
- Directly extracted bibliographic details and section-level notes for several literature anchors.
- Implemented SROS2/DDS Security policy experiment.

## Source provenance

## Public sources

- [NIST SP 800-160](../../../01_literature/middleware-and-standards/nist-sp-800-160.md)
- [IEC 62443-3-2](../../../01_literature/middleware-and-standards/iec-62443-3-2.md)
- [ISO 10218](../../../01_literature/middleware-and-standards/iso-10218.md)
- [Leveson STAMP](../../../01_literature/safety-resilience-theory/leveson-engineering-safer-world-stamp.md)
- [ROS 2 design documents](../../../01_literature/middleware-and-standards/ros2-design-documents.md)
- [DDS specification](../../../01_literature/middleware-and-standards/dds-specification.md)
- [DDS Security specification](../../../01_literature/middleware-and-standards/dds-security-specification.md)
- [SROS2 usable security tools](../../../01_literature/middleware-and-standards/sros2-usable-security-tools.md)
- [Canelas ROS misconfigurations](../../../01_literature/ros-and-robotics-se/canelas-ros-misconfigurations.md)

## Internal provenance

<!-- AUTONOTES:PRIVATE-SOURCES:START -->
- [safety-security-relation.md](../../../wiki/assurance/safety-security-relation.md)
- [command_authority_design.md](../../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/command_authority_design.md)
- [Core Concepts.md](../../../02_my_notes/Interview%20Preperation/Core%20Concepts.md)
- [dds_ros2_starter_pack.md](../../../02_my_notes/dds_ros2_starter_pack.md)
<!-- AUTONOTES:PRIVATE-SOURCES:END -->
