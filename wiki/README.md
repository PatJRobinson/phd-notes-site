---
status: seed
maturity: draft
type: meta
author_review: needed
---

# PhD Concept Wiki

This wiki is a separate explanatory layer inside the PhD notes repository. It is for defining concepts, showing relationships between them, and pointing back to source notes, literature notes, draft fragments, and internal anchors.

It is not a thesis draft, literature review, public blog, or replacement for the working notes. The working notes remain the place for thinking, uncertainty, planning, and historical development. The thesis is the place where arguments are made and defended.

The wiki explains concepts; the thesis argues with them.

## How this relates to the repo

- The notes repo is for thinking.
- The thesis is for arguing.
- The wiki is for explaining concepts.

Wiki pages may link to working notes, but they should not rewrite those notes or collapse them into a single current position. Older terms such as assumption misalignment may be explained here, but should be marked as historical or provisional where the current research-question framing is broader.

## Page template

Use [page-template.md](meta/page-template.md) for new pages:

- short definition
- why it matters
- use in this PhD
- related concepts
- sources and anchors
- open questions

Use [style-guide.md](meta/style-guide.md) for tone, source-anchor discipline, and wording conventions.

## Uncertainty markers

Use these markers exactly when needed:

```md
> [wiki-note]
> This page is a neutral explanatory synthesis, not a thesis claim.
```

```md
> [needs-author-check]
> This definition or framing should be checked by the author.
```

```md
> [old-frame]
> This concept appears in earlier notes using stronger assumption/misalignment language. Treat that language as historical or provisional unless linked to the current RQ framing.
```

```md
> [source-needed]
> Add a specific source anchor here.
```

## Adding pages

Add a page when a concept is used across multiple notes or when a reader would benefit from a stable explanation. Keep pages concise and link generously. Prefer functional definitions over job titles or disciplinary labels. Keep safety/security concerns distinct from assurance claims.

When adding a page, update [index.md](index.md), [concept-map.md](meta/concept-map.md), and [changelog.md](meta/changelog.md).
