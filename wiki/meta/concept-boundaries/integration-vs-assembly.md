---
status: seed
maturity: draft
type: concept-boundary
author_review: needed
---

# Integration vs Assembly

## Distinction

Assembly puts parts together. Integration makes components, configurations, infrastructure, interfaces, deployment context, debugging practices, and operating conditions work together as a system.

## Why the distinction matters

The wiki uses integration to name system-making work. This includes technical composition and the practical work needed to make composed behaviour meaningful, observable, and maintainable.

## Common confusion

The terms blur when assembling components is enough to make a system work. In ROS 2-style robotics, additional work is often needed around configuration, launch, frames, QoS, deployment, testing, and local knowledge.

## Usage in this wiki

Use assembly for putting components together. Use integration for the broader work of making the assembled system function in context.

## Related pages

- [Integration](../../concepts/integration.md)
- [Interface](../../concepts/interface.md)
- [Configuration](../../concepts/configuration.md)
- [Deployment context](../../concepts/deployment-context.md)
- [Integrator](../../practice/integrator.md)
