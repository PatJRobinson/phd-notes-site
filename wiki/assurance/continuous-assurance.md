---
status: seed
maturity: draft
type: concept
author_review: needed
---

# Continuous Assurance

## Short definition

Continuous assurance is the ongoing maintenance of assurance claims as a system, its configuration, evidence, and operating context change.

## Why it matters

Robotic systems may be reconfigured, redeployed, updated, retuned, containerised, moved between simulators and hardware, or integrated with new components. These changes can affect whether previous claims remain valid.

Continuous assurance matters because modular systems need ways to notice when evidence, assumptions, system boundaries, or deployment conditions have changed enough that a claim should be revisited.

## In this PhD

The concept is used cautiously. It names a problem space around validity and maintenance of claims, rather than a fully specified method. It connects Rotifer-style evidence tracing, deployment context, assumptions, and integrator practice.

## Related concepts

- [Assurance claim](assurance-claim.md)
- [Deployment context](../concepts/deployment-context.md)
- [Configuration](../concepts/configuration.md)
- [Local knowledge](../practice/local-knowledge.md)
- [Partial observability](../concepts/partial-observability.md)

## Sources and anchors

- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Rotifer positioning note](../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)
- [Fragmentation and Architectural Instability](../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [NIST SP 800-160](../sources/nist-sp-800-160.md)
- [MOSA](../sources/mosa.md)
- [Leveson: Engineering a Safer World](../sources/leveson-engineering-a-safer-world.md)

## Open questions

- Should this page later distinguish continuous, runtime, incremental, and lifecycle assurance?
