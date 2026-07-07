# RQ3 Compilation

## Current wording or inferred wording

Best current wording: How do safety and security concerns emerge and get managed across the interfaces between components, tools, frameworks, and engineering practices in robotic system integration?

This is the explicit RQ3 wording in [wiki/meta/rq-pathways.md](../../../wiki/meta/rq-pathways.md) and closely matches the third question in [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md).

## What this question is really asking

RQ3 asks how safety/security becomes a cross-layer integration problem rather than a property located cleanly inside a component, a standard, a middleware feature, or an individual practitioner role. It asks where these concerns appear, disappear, get traded off, become visible, or become unmanageable as work moves through interfaces.

## Why it matters

Robotic systems can move physical things, depend on distributed communication, and cross organisational and infrastructural boundaries. If the interface meanings, authority boundaries, configuration assumptions, or responsibility handoffs are weak, then safety/security reasoning may rest on conditions nobody has actually enforced or evidenced. Sources: [safety-security-relation.md](../../../wiki/assurance/safety-security-relation.md), [Core Concepts.md](../../../02_my_notes/Interview%20Preperation/Core%20Concepts.md), [Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md](../../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md).

## How it relates to the thesis

RQ3 is the thesis bridge between integration theory and safety/security stakes. RQ1 asks how integrators understand behaviour. RQ2 asks how boundaries are made. RQ3 asks how safety/security concerns emerge at the interfaces made visible by RQ1 and RQ2. RQ4 then asks how claims about those concerns are maintained over change.

## Main concepts

- [Safety/security relation](../../concepts/safety-security-relation.md)
- [Interface](../../concepts/interface.md)
- [Integration](../../concepts/integration.md)
- [Configuration](../../concepts/configuration.md)
- [Assumption-bearing invariant](../../concepts/assumption-bearing-invariant.md)
- [Command authority](../../concepts/command-authority.md)
- [Integrator responsibility boundary](../../concepts/integrator-responsibility-boundary.md)
- [Visibility and observability](../../concepts/visibility-and-observability.md)
- [SROS2 and policy semantics](../../concepts/sros2-policy-semantics.md)
- [Rotifer as assumption tracing](../../concepts/rotifer-as-assumption-tracing.md)

## Main arguments

- [Safety/security emerges at integration interfaces](../../arguments/safety-security-emerges-at-integration-interfaces.md)
- [Abstractions displace system-level responsibility](../../arguments/abstractions-displace-system-level-responsibility.md)
- [Executable assumption tracing turns failures into evidence](../../arguments/executable-assumption-tracing-turns-failures-into-evidence.md)

## Evidence base

- [Nav2 evidence ladder](../../evidence/nav2-evidence-ladder.md)
- [Rotifer positioning and project ideology](../../evidence/rotifer-positioning-and-project-ideology.md)
- [Interview concept map](../../evidence/interview-concept-map.md)
- [DDS/ROS2 architectural substrate](../../evidence/dds-ros2-architectural-substrate.md)

## Open tensions

See [open-tensions.md](open-tensions.md). The most important tension is whether RQ3 should stay focused on safety/security management across interfaces or absorb the stronger assurance-over-change problem currently treated as RQ4.

## Reading route

Start with [research-question.md](research-question.md), then [concept-map.md](concept-map.md), then [argument-map.md](argument-map.md), then [evidence-map.md](evidence-map.md). For source reading, use [reading-route.md](reading-route.md).

## Source provenance

Detailed provenance is in [source-provenance.md](source-provenance.md).
