---
status: seed
maturity: draft
type: concept-boundary
author_review: needed
---

# Configuration vs Deployment Context

## Distinction

Configuration concerns selected settings, parameters, policies, launch files, QoS choices, permissions, mappings, and runtime options. Deployment context concerns the environment in which those choices operate: hardware, network, site, infrastructure, organisational setting, runtime conditions, and simulator or real-world setup.

## Why the distinction matters

A configuration can be correct in one deployment context and inappropriate in another. Assurance claims need to know both what was configured and where that configuration was expected to hold.

## Common confusion

The terms blur because configuration files often encode assumptions about deployment context. A launch file may assume a frame tree, network condition, package path, simulator, or hardware setup.

## Usage in this wiki

Use configuration for selected settings and artefacts. Use deployment context for the operating environment that gives those choices meaning.

## Related pages

- [Configuration](../../concepts/configuration.md)
- [Deployment context](../../concepts/deployment-context.md)
- [QoS](../../ros2/qos.md)
- [SROS2](../../ros2/sros2.md)
- [Continuous assurance](../../assurance/continuous-assurance.md)
