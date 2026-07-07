# RQ3 - Current Interpretation

## Best current wording

How do safety and security concerns emerge and get managed across the interfaces between components, tools, frameworks, and engineering practices in robotic system integration?

## Plain-language version

When people build ROS 2-style robotic systems out of many parts, where do safety and security issues actually show up, who deals with them, and what makes them visible or invisible?

## What this question is trying to find out

It is trying to identify the interface-level mechanisms through which safety/security concerns are produced, transformed, managed, or lost. These interfaces include ROS topics, DDS entities, QoS settings, SROS2 policies, launch/configuration files, simulator bridges, deployment targets, operational procedures, and responsibility handoffs.

## What would count as an answer

An answer would include:

- a vocabulary for safety/security-relevant interfaces;
- examples of concerns emerging across those interfaces;
- evidence about how integrators notice, classify, manage, or bypass the concerns;
- an account of how configuration, visibility, responsibility, and operational pressure shape management;
- bounded technical demonstrations, such as Rotifer traces, showing how declared assumptions are supported, violated, or undecidable.

## What this question is not asking

It asks how safety/security concerns arise across integration interfaces. It does not assume that security always causes safety failures, or evaluate ROS 2, DDS, or SROS2 in general. It also leaves the broader question of maintaining assurance claims across system change to RQ4, though RQ3 supplies material that RQ4 may use.

## Relation to other RQs

- RQ1 `supports` RQ3 by explaining how integrators construct working understanding.
- RQ2 `supports` RQ3 by explaining how system boundaries and interfaces are made.
- RQ3 `extends` RQ1/RQ2 into safety/security concerns.
- RQ4 `depends_on` RQ3 evidence where safety/security claims become assurance claims.

## Current confidence

High confidence on the RQ3 identification. The explicit numbering in [wiki/meta/rq-pathways.md](../../../wiki/meta/rq-pathways.md) matches the third question in [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md). A near candidate would have been the older "system boundaries and assurance" question in [research-questions-and-contributions-and-risks-05_06_26.md](../../../03_research_questions/research-questions-and-contributions-and-risks-05_06_26.md), but that now aligns more closely with RQ4.

## Source provenance

- [wiki/meta/rq-pathways.md](../../../wiki/meta/rq-pathways.md) - explicit RQ3 numbering.
- [research-questions-redraft-16-06-26.md](../../../03_research_questions/research-questions-redraft-16-06-26.md) - current broad RQ set.
- [01 - Current Thesis Shape.md](../../../01%20-%20Current%20Thesis%20Shape.md) - current navigation layer.
- [safety-security-relation.md](../../../wiki/assurance/safety-security-relation.md) - safety/security distinction and relation.
