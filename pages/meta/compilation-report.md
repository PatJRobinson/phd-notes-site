# Compilation Report

## Target

Extended compile pass:

- `targets`: rq1, rq2, rq4, rotifer-paper, safety-security
- `modes`: bootstrap_compile, audit_staleness, compile_workflows
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
- RQ4 is assurance-over-change.
- Rotifer paper should be framed as executable assumption tracing, with command authority as the strongest safety/security worked case.
- Safety/security is central to RQ3 but should be bounded by explicit nonclaims.
- Older assumption/misalignment and ROSness material is recoverable but needs careful handling.

## Files created

Created RQ1/RQ2/RQ4 folders, workflow folders, global indexes, staleness audit files, and additional concept/argument/evidence node files.

## Files updated

Updated/replaced:

- `compiled-notes/current-model.md`
- `compiled-notes/meta/unresolved-decisions.md`
- `compiled-notes/meta/compilation-report.md`

## Important uncertainties

- Rotifer paper centre: command authority, Nav2 ladder, or both.
- Whether RQ4 is empirical, methodological, or primarily synthesis.
- How strong to make secure-by-design and SROS2 language.
- Which recoverable fragments deserve promotion.

## Recommended next compilation flags

- `target: sros2-dds-security`
- `target: mosa-modularity`
- `target: interviews`
- `target: thesis-outline`
- `mode: source_audit`
- `mode: compile_literature`
- `mode: paper_outline`

