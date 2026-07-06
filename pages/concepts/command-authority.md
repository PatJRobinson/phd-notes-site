---
compiled: true
node_type: concept
status: active
target: rq3
sources:
  - 02_my_notes/papers/Making Command Authority Assumptions Explicit in ROS 2 Robotics Experiments/plan_06-06-26.md
  - 02_my_notes/dds_ros2_starter_pack.md
---

# Command Authority

## What it is

The invariant that only declared and authorised roles may influence robot motion through the motion command interface.

## Why it matters

If an undeclared publisher can command motion, the safety/security boundary assumed by a run or deployment is false.

## In this PhD

Command authority is a worked case for linking ROS graph surfaces, DDS/SROS2 policy, deployment, roles, and physical consequence.

## In RQ3

It is a candidate flagship example of safety/security emerging at interfaces.

## Relations

- `is_example_of` [Assumption-bearing invariant](assumption-bearing-invariant.md)
- `depends_on` [Configuration](configuration.md)
- `depends_on` [SROS2 and policy semantics](sros2-policy-semantics.md)
- `supports` [Safety/security emerges at integration interfaces](../arguments/safety-security-emerges-at-integration-interfaces.md)

## Source provenance

- [plan_06-06-26.md](../../02_my_notes/papers/Making%20Command%20Authority%20Assumptions%20Explicit%20in%20ROS%202%20Robotics%20Experiments/plan_06-06-26.md)
- [dds_ros2_starter_pack.md](../../02_my_notes/dds_ros2_starter_pack.md)

## Open tensions

The current notes make command authority compelling, but the thesis needs to decide whether it is the main RQ3 case or one case among several.

