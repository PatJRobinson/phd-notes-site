---
status: working
source_type: literature-note
strand: review-methods
---

# Search Sources and Log Template

## What this is

Operational note for documenting the literature search behind the structured integrative / systematized interpretive narrative review.

## Source classes

The search appendix report recommends using different source types for different strands:

- Scopus and Web of Science for multidisciplinary scholarly discovery and citation chasing.
- IEEE Xplore and ACM Digital Library for computing, robotics software engineering, middleware, and conference literature.
- SpringerLink and ScienceDirect mainly for retrieval and publisher-platform access.
- Google Scholar for broad recall and citation chasing, not as the sole source of record.
- arXiv selectively for recent preprints, clearly tagged as preprint-only where no peer-reviewed version is available.
- Official repositories for ROS 2 design/docs, OMG DDS/DDS Security, NIST, IEC, and ISO.
- GitHub, Zenodo, and CRANE only as bounded grey literature where practice-facing traces matter.

## Log fields

Use this table format when searches are actually run:

| Date | Source | Collection | Query | Filters | Hits | Screened | Full text | Included | Strand | Notes |
|---|---|---|---|---|---:|---:|---:|---:|---|---|

## Why it matters

This lets the review be transparent and inspectable without pretending to be a full systematic review.

## Relations

- `supports` [Systematized interpretive narrative review](systematized-interpretive-narrative-review.md)
- `supports` [SANRA](sanra-narrative-review-quality.md)
- `is_part_of_workflow` progression literature review.

## Source provenance

- [Defensible search appendix report](../../02_my_notes/analysis_fragments/commisioned-reports/definsible-search-appendix-for-a-cross-layer-narrative-review-in-robotics-assurance.md)

## Open tasks

- Populate the table with actual search counts.
- Record whether each included source entered by database query, backward snowballing, forward citation chasing, official repository browsing, or expert/seed-paper follow-up.
