# Compilation Report

## Target

Extended compile pass, refreshed on 2026-07-07 after decision-resolution contributions:

- `targets`: rq1, rq2, rq4, rotifer-paper, safety-security
- `modes`: refresh_compile, audit_staleness, compile_workflows
- `apply_changes`: true
- `source_policy`: preserve
- `compiled_dir`: compiled-notes

RQ3 was preserved as the existing safety/security-across-interfaces compilation and used as a cross-link target rather than overwritten.

## Source notes inspected

Reused the prior RQ3 source set and additionally inspected source files for RQ1/RQ2/RQ4, workflows, Rotifer paper, safety/security, methodology, progression, and staleness. Important inspected sources include:

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
- Safety/security is motivating and consequential, not structurally central to the thesis spine.
- SROS2 is an important mediating technology and official ROS 2 security mechanism, not the thesis centre.
- Mental models and working understanding can be used interchangeably at this stage; working understanding remains the safer operational term.
- ROSness is promoted as valid for the ROS 2-style robotics thread, with older security-invariant provenance preserved.

## Files created

Created RQ1/RQ2/RQ4 folders, workflow folders, global indexes, staleness audit files, and additional concept/argument/evidence node files.

## Files updated

Updated/replaced:

- `compiled-notes/current-model.md`
- `compiled-notes/meta/unresolved-decisions.md`
- `compiled-notes/meta/compilation-report.md`

## Important uncertainties

- Whether RQ4 is empirical, methodological, or primarily synthesis.
- How strong to make secure-by-design and SROS2 language.
- Which recoverable fragments deserve promotion.
- How much command-authority and SROS2 material belongs in the current Rotifer/Nav2 paper discussion.

## Recommended next compilation flags

- `target: sros2-dds-security`
- `target: mosa-modularity`
- `target: interviews`
- `target: thesis-outline`
- `mode: source_audit`
- `mode: compile_literature`
- `mode: paper_outline`
