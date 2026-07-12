# Compilation Report

## 2026-07-12 Inbox Integration Site Refresh

### Target

Refresh the organised research notes after processing the July 2026 inbox notes, with emphasis on case studies, scenario and assumption concepts, RQ boundary feedback, ROS 2 communication-model contrasts, and Rotifer design-research positioning.

### Files created

- `compiled-notes/concepts/assumption.md`
- `compiled-notes/concepts/scenario.md`
- `compiled-notes/workflows/case-studies/index.md`
- `compiled-notes/workflows/case-studies/candidate-backlog.md`
- `compiled-notes/workflows/case-studies/article-workflow.md`
- `compiled-notes/workflows/case-studies/open-tensions.md`

### Files updated

- `compiled-notes/README.md`
- `compiled-notes/current-model.md`
- `compiled-notes/concepts/index.md`
- `compiled-notes/concepts/ros2-style-robotics.md`
- `compiled-notes/concepts/sros2-policy-semantics.md`
- `compiled-notes/rqs/index.md`
- `compiled-notes/rqs/rq2/index.md`
- `compiled-notes/rqs/rq2/research-question.md`
- `compiled-notes/rqs/rq2/open-tensions.md`
- `compiled-notes/rqs/rq3/open-tensions.md`
- `compiled-notes/rqs/rq4/index.md`
- `compiled-notes/rqs/rq4/research-question.md`
- `compiled-notes/rqs/rq4/open-tensions.md`
- `compiled-notes/workflows/index.md`
- `compiled-notes/workflows/thesis-core/index.md`
- `compiled-notes/workflows/rotifer-paper/index.md`
- `compiled-notes/workflows/rotifer-paper/assumption-tracing-method.md`
- `compiled-notes/workflows/rotifer-paper/concept-map.md`
- `compiled-notes/workflows/rotifer-paper/positioning.md`
- `compiled-notes/workflows/rotifer-paper/open-tensions.md`
- `compiled-notes/workflows/rotifer-paper/source-provenance.md`
- `compiled-notes/workflows/interviews-and-methodology/index.md`
- `compiled-notes/workflows/interviews-and-methodology/methodological-positioning.md`
- `compiled-notes/workflows/interviews-and-methodology/analysis-plan.md`
- `compiled-notes/workflows/interviews-and-methodology/open-tensions.md`
- `compiled-notes/workflows/safety-security/ros2-security-configuration-surface.md`
- `compiled-notes/evidence/index.md`
- `compiled-notes/evidence/interview-and-methodology-evidence.md`
- `compiled-notes/evidence/rotifer-positioning-and-project-ideology.md`
- `compiled-notes/evidence/dds-ros2-architectural-substrate.md`
- `compiled-notes/meta/current-use-index.md`
- `compiled-notes/meta/source-provenance-index.md`
- `compiled-notes/meta/unresolved-decisions.md`
- `compiled-notes/meta/compilation-report.md`

### Main inferences

- Case studies should become a visible area of work because they can ground abstract claims about ROS 2-style integration, deployment, standards, assurance, scenarios, and assumptions.
- Scenario is useful as a candidate comparative object, but it is not yet a settled concept. It needs standards and artefact analysis before it carries strong claims.
- Assumption should be used as a sensitising concept and provisional set of dimensions, not as a universal explanation or validated typology.
- Recent feedback lowers confidence in the reader-facing visibility of the RQ2/RQ4 and RQ3/RQ4 boundaries. No immediate RQ restructuring is warranted, but scope prose must be improved.
- Rotifer has a plausible developer-facing design-research route, but this is a candidate contribution rather than an evaluated result.
- gRPC and Kafka are useful communication-model contrasts for ROS 2-style robotics, but they need their own source notes before becoming evidence-heavy claims.

### Verification

- `find compiled-notes -type f | sort` completed.
- `git diff --check` completed with no whitespace errors.
- Local markdown links in `compiled-notes/` resolve.
- Reader-facing provenance phrase search returned no matches for the configured phrases.
- U+2014 search returned no matches in `compiled-notes/`. Remaining matches are in preserved `wiki/` source headings and source-anchor titles.
- No `package.json`, Docusaurus config, sidebar file, or `.openai/hosting.json` was found, so there was no site build command to run.

### Remaining weaknesses

- No participant findings are compiled yet.
- Case studies are a programme and backlog, not completed evidence.
- Scenario and assumption dimensions need literature and standards grounding.
- Rotifer design-research framing needs a stronger literature base and later evaluation route.
- The RQ2/RQ4 distinction still needs to be tested in chapter-level prose.

## 2026-07-07 Detailed Workflow Page Pass

### Target

Workflow compile pass focused on detailed subject pages where the source notes are rich enough to support them, with the new `01_literature` evidence anchors reflected in compiled pages.

### Files created

- `compiled-notes/workflows/interviews-and-methodology/methodological-positioning.md`
- `compiled-notes/workflows/interviews-and-methodology/interview-design.md`
- `compiled-notes/workflows/interviews-and-methodology/analysis-plan.md`
- `compiled-notes/workflows/interviews-and-methodology/evidence-and-provenance.md`
- `compiled-notes/workflows/interviews-and-methodology/open-tensions.md`
- `compiled-notes/workflows/rotifer-paper/assumption-tracing-method.md`
- `compiled-notes/workflows/rotifer-paper/nav2-evidence-ladder-subject.md`
- `compiled-notes/workflows/rotifer-paper/security-relevance-and-nonclaims.md`
- `compiled-notes/workflows/rotifer-paper/evidence-and-provenance.md`
- `compiled-notes/workflows/safety-security/integration-interface-position.md`
- `compiled-notes/workflows/safety-security/ros2-security-configuration-surface.md`
- `compiled-notes/workflows/safety-security/evidence-and-provenance.md`

### Files updated

- `compiled-notes/workflows/index.md`
- `compiled-notes/workflows/interviews-and-methodology/index.md`
- `compiled-notes/workflows/rotifer-paper/index.md`
- `compiled-notes/workflows/safety-security/index.md`
- `compiled-notes/evidence/index.md`
- `compiled-notes/evidence/dds-ros2-architectural-substrate.md`

### Main inferences

- Interviews/methodology is the richest candidate for detailed pages. The current method is best compiled as contextualist, abductive, reflexive thematic analysis supported by a structured assumption-elicitation protocol.
- Rotifer is strong enough for detailed pages around the assumption-tracing method and the Nav2 evidence ladder. Command authority remains security-relevant but secondary for the current paper centre.
- Safety/security is strong enough for detailed pages around integration interfaces and the ROS 2/DDS/SROS2 configuration surface, but not for broad claims that Rotifer secures ROS 2.
- The new `01_literature` notes now provide public grounding categories for methodology/practice, middleware/security, standards, systems safety, and ROS misconfiguration. Several still need exact bibliographic details and section-level extraction.

### Verification

Checked local markdown links in the affected workflow/evidence pages with URL-decoded paths. Links resolved.

### Remaining weaknesses

- No participant findings are compiled yet.
- The new literature evidence items are useful anchors but many remain working notes rather than citation-complete sources.
- Future security-suite ideas are design scaffold unless implemented and evidenced.

## Target

Extended organising pass, refreshed on 2026-07-07 after decision-resolution contributions and the new audience/language policy:

- `targets`: rq1, rq2, rq4, rotifer-paper, safety-security
- `modes`: refresh_compile, audit_staleness, compile_workflows, outsider_language_pass
- `apply_changes`: true
- `source_policy`: preserve
- `compiled_dir`: compiled-notes

RQ3 was preserved as the existing safety/security-across-interfaces interpretation and used as a cross-link target rather than overwritten.

## Source notes inspected

Reused the prior RQ3 source set and additionally inspected source files for RQ1/RQ2/RQ4, work areas, Rotifer paper, safety/security, methodology, progression, and staleness. Important inspected sources include:

- `compiled-notes/rqs/rq3/index.md`
- `compiled-notes/rqs/rq3/research-question.md`
- `01 - Current Thesis Shape.md`
- `03_research_questions/research-questions-redraft-16-06-26.md`
- `wiki/meta/rq-pathways.md`
- `wiki/concepts/working-understanding.md`
- `wiki/concepts/partial-observability.md`
- `wiki/concepts/system-boundary.md`
- `wiki/concepts/modularity.md`
- `wiki/concepts/deployment-context.md`
- `wiki/assurance/assurance-claim.md`
- `wiki/assurance/continuous-assurance.md`
- `wiki/practice/local-knowledge.md`
- `04_research_methodologies/note-on-analytical-approach.md`
- `02_my_notes/Interview Preperation/Candidate Questions and Themes.md`
- `02_my_notes/Interview Preperation/Coding Scheme.md`
- `02_my_notes/thesis_stuff/candidate-structure.md`
- `06_outputs/forms/cp1-draft.md`
- `02_my_notes/papers/Making Command Authority Assumptions Explicit in ROS 2 Robotics Experiments/command_authority_design.md`
- `05_prototype_ideas/robotics-testbench-framework/results/command_authority/case_study.md`
- `05_prototype_ideas/robotics-testbench-framework/rotifer-devlog-15-05-26.md`
- `05_prototype_ideas/robotics-testbench-framework/rotifer-devlog-16-05-26.md`
- `05_prototype_ideas/robotics-testbench-framework/rotifer-devlog-20-05-26.md`

## Main inferences

- RQ1 is working understanding in practice.
- RQ2 is system boundaries under modularity/configuration/deployment context.
- RQ3 remains safety/security across interfaces.
- RQ4 is assurance-over-change and is retained for now, but must justify what change-over-time adds beyond RQ3.
- Rotifer/Nav2 paper should be framed around evidence and assumption-tracing methodology, with the Nav2 ladder as the primary vehicle.
- Command authority is security-relevant, but secondary for the current Rotifer/Nav2 paper and likely follow-on material.
- Safety/security is motivating and consequential, while the core thesis argument remains centred on integration, assumptions, knowledge, practice, and assurance.
- SROS2 is an important mediating technology and official ROS 2 security mechanism, not the thesis centre.
- Mental models and working understanding can be used interchangeably at this stage; working understanding remains the safer operational term.
- ROSness is promoted as valid for the ROS 2-style robotics thread, with older security-invariant provenance preserved.

## Files created

Created RQ1/RQ2/RQ4 folders, work-area folders, global indexes, staleness audit files, and additional concept, argument, and evidence files.

## Files updated

Updated/replaced:

- `compiled-notes/current-model.md`
- `compiled-notes/meta/unresolved-decisions.md`
- `compiled-notes/meta/compilation-report.md`

## Important uncertainties

- Whether RQ4 is empirical, methodological, or primarily synthesis.
- How strong to make secure-by-design and SROS2 language.
- Which older fragments deserve promotion into active thesis material.
- How much command-authority and SROS2 material belongs in the current Rotifer/Nav2 paper discussion.

## Recommended next compilation flags

- `target: sros2-dds-security`
- `target: mosa-modularity`
- `target: interviews`
- `target: thesis-outline`
- `mode: source_audit`
- `mode: compile_literature`
- `mode: paper_outline`
- `mode: outsider_language_pass`
