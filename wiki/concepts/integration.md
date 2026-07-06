---
status: seed
maturity: draft
type: concept
author_review: needed
---

# Integration

## Short definition

Integration is the work of making components, configurations, infrastructure, tools, documentation, and operating contexts function together as a robotic system.

## Why it matters

In ROS 2-style robotics, a robot’s behaviour may depend on middleware settings, launch files, topic conventions, QoS choices, simulator bridges, deployment topology, local workarounds, and what integrators know about the system. Source code captures only part of that picture.

This matters for safety/security because consequences can emerge at interfaces between components and layers. It matters for assurance because claims about system properties depend on whether the relevant integration conditions are valid and maintained.

## In this PhD

This project treats integration as a central site where system behaviour, boundaries, and safety/security concerns are constructed and made visible. The term does not imply that integration failures explain everything. It names the practical and analytical setting where modular robotic systems are made to work.

## Related concepts

- [Interface](interface.md)
- [Configuration](configuration.md)
- [Deployment context](deployment-context.md)
- [System boundary](system-boundary.md)
- [Integrator](../practice/integrator.md)
- [Integration vs assembly](../meta/concept-boundaries/integration-vs-assembly.md)

## Sources and anchors

- [Current RQ redraft](../../03_research_questions/research-questions-redraft-16-06-26.md)
- [Fragmentation and Architectural Instability](../../02_my_notes/positioning_statements/Fragmentation_and_Architectural_Instability_as_Challenges_for_Assurance.md)
- [Rotifer positioning note](../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)
- [MOSA](../sources/mosa.md)
- [Star: Ethnography of Infrastructure](../sources/star-ethnography-of-infrastructure.md)

## Open questions

- How much of the thesis should focus on integration as practice versus integration as architecture?
