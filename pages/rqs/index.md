# Research Questions

## RQ1

[RQ1 - Working understandings](rq1/index.md): How do integrators construct and maintain working understandings of behaviour in distributed robotics systems?

## RQ2

[RQ2 - System boundaries](rq2/index.md): How do architectural modularity, configurability, and deployment context shape what counts as the system boundary in ROS 2-style robotics systems?

## RQ3

[RQ3 - Safety/security across interfaces](rq3/index.md): How do safety and security concerns emerge and get managed across the interfaces between components, tools, frameworks, and engineering practices in robotic system integration?

## RQ4

[RQ4 - Assurance over change](rq4/index.md): How do changes in system composition, configuration, and operational context affect the validity and maintenance of assurance claims for modular robotics systems?

## Relations between RQs

- RQ1 `supports` RQ2/RQ3/RQ4 by explaining how integrators construct system understanding.
- RQ2 `supports` RQ3 by explaining boundaries and interfaces.
- RQ3 `extends` RQ1/RQ2 into safety/security concerns.
- RQ4 `depends_on` RQ1/RQ2/RQ3 when concerns become assurance claims that must survive change.

## Boundary notes

- RQ2 and RQ4 need clearer reader-facing separation. The current distinction is that RQ2 asks how modular robotic systems are composed, bounded, and integrated, while RQ4 asks what modularity, change, drift, and asynchronous evolution do to assurance claims.
- RQ3 and RQ4 also remain adjacent. RQ3 concerns safety/security across integration interfaces; RQ4 concerns claim validity and maintenance over change.

## Open RQ wording decisions

- Whether "ROS 2-style robotics" should appear in every RQ.
- Whether "working understanding" should fully replace "mental models".
- Whether RQ4 should stay a distinct RQ or become a synthesis chapter.
- Whether the RQ2/RQ4 distinction should be made visible in wording, scope statements, chapter introductions, or all three.

## Reading route across all RQs

1. [Current Model](../current-model.md)
2. [RQ1](rq1/index.md)
3. [RQ2](rq2/index.md)
4. [RQ3](rq3/index.md)
5. [RQ4](rq4/index.md)
6. [Unresolved Decisions](../meta/unresolved-decisions.md)
