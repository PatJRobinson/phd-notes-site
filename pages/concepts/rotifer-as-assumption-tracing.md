---
compiled: true
node_type: concept
status: active
target: rq3
sources:
  - 05_prototype_ideas/robotics-testbench-framework/positioning-note.md
  - 05_prototype_ideas/robotics-testbench-framework/project-ideology.md
  - 02_my_notes/analysis_fragments/rotifer-forest-for-the-trees.md
---

# Rotifer as Assumption Tracing

## What it is

Rotifer is a prototype workbench for stating, tracing, testing, and interpreting assumptions around robotics experiment claims.

## Why it matters

It makes integration conditions inspectable instead of leaving them as tacit porting, debugging, or setup knowledge.

## In this PhD

Rotifer is executable evidence and a research instrument.

## In RQ3

It can produce bounded evidence about safety/security-relevant interface assumptions such as command authority, topic/frame semantics, timing, and visibility.

## Relations

- `supports` [Executable assumption tracing turns failures into evidence](../arguments/executable-assumption-tracing-turns-failures-into-evidence.md)
- `is_evidence_for` [Assumption-bearing invariant](assumption-bearing-invariant.md)
- `is_counterpressure_to` over-polished claims of portability

## Source provenance

- [positioning-note.md](../../05_prototype_ideas/robotics-testbench-framework/positioning-note.md)
- [project-ideology.md](../../05_prototype_ideas/robotics-testbench-framework/project-ideology.md)
- [rotifer-forest-for-the-trees.md](../../02_my_notes/analysis_fragments/rotifer-forest-for-the-trees.md)

## Open tensions

Rotifer should not be overclaimed as proving safety/security. It currently helps classify assumption boundaries.
