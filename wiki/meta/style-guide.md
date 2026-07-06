---
status: seed
maturity: draft
type: meta
author_review: needed
---

# Wiki Style Guide

## Purpose of the wiki

The wiki explains concepts used in the PhD. It defines terms, relates concepts, and points to source anchors. It is a private explanatory layer, separate from working notes and thesis prose.

The notes repo is for thinking. The thesis is for arguing. The wiki is for explaining concepts.

## Direct definition before contrast

Start with a positive definition. A reader should know what the concept means before being told what it is unlike.

Prefer:

```md
Integration is the work of making components, configurations, infrastructure, tools, and operating contexts function together as a robotic system.
```

Avoid opening with:

```md
Integration is not just assembly.
```

## Avoid default “not just X, but Y” phrasing

Use contrast only when it clarifies a real boundary, common confusion, or overclaim. Otherwise define the concept directly.

Before:

```md
Working understanding is not just a mental model; it is situated practice.
```

After:

```md
Working understanding is a situated, practical grasp of system behaviour, mediated by artefacts such as logs, traces, diagrams, tests, documentation, and conversations.
```

Before:

```md
SROS2 is not only a code-level concern, but also a configuration and deployment concern.
```

After:

```md
SROS2 depends on policy generation, certificate and key management, enclave assignment, launch choices, and deployment alignment.
```

## Limited use of negation

Negation is useful when it prevents a real misunderstanding:

```md
Assurance is distinct from safety and security. It concerns claims, evidence, justification, validity, and maintenance.
```

Keep these moments short and specific.

## Avoiding thesis-argument prose

Wiki pages should not sound like chapter claims. Avoid phrases such as “this proves,” “the root cause is,” or “the thesis shows” unless describing a specific authored claim elsewhere. Prefer “this page treats,” “in this project,” and “a recurring issue is.”

## Avoiding overclaiming

Use cautious scope. Prefer “may,” “can,” “often,” and “in this project” where the evidence is partial. Avoid universal claims about ROS 2, integrators, standards, or robotics as a field.

## Safety/security and assurance

Keep the categories distinct:

- safety/security: system properties, consequences, risks, controls, or concerns
- assurance: claims, evidence, justification, validity, scope, and maintenance

Safety and security can be discussed together in cyber-physical systems, but assurance is a different kind of concept.

## Integrator as a functional role

Use integrator for the function of making components, tools, configurations, infrastructure, and operating contexts work together. Do not assume integrator maps cleanly to a job title. Developers, deployment engineers, field engineers, operators, or researchers may act as integrators in context.

## Assumption and misalignment vocabulary

Assumption vocabulary is useful but provisional unless a page is explicitly historical. Do not make assumption misalignment the premise of the whole wiki. Link to [Assumption](../concepts/assumption.md) and use `[old-frame]` when older notes use stronger language than the current RQ framing.

## Page length and tone

Seed pages should usually stay within 300-700 words. The tone should be calm, precise, cautious, and readable. Avoid generic encyclopedia prose and avoid persuasive thesis prose.

## Source-anchor discipline

Every page should distinguish:

- source anchors: literature, standards, documentation, or source-anchor pages
- internal notes: working notes, drafts, plans, or generated fragments
- open source gaps: use `[source-needed]`
- author interpretation: mark with `[needs-author-check]` where the framing needs review

Do not fabricate bibliographic details. If a precise source location is missing, say so.
