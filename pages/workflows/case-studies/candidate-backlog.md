---
compiled: true
node_type: workflow
status: active
targets:
  - rq2
  - rq3
  - rq4
sources:
  - 02_my_notes/case-studies/index.md
publication_profile: dual
---

# Case-Study Candidate Backlog

## Current candidates

### Nav2 evidence ladder as a ROS 2 integration case

Nav2 is a recognisable ROS 2 navigation stack, and the existing Rotifer/Nav2 material already surfaces layered assumptions around behaviour, configuration, evidence, and realisation. This candidate is strongest for RQ2 and RQ4, with RQ3 relevance where command authority or safety/security interfaces are involved.

Evidence gap: public-facing source grounding for Nav2 and clearer separation between Rotifer experiment evidence and broader claims about Nav2 practice.

### AV prototype versus warehouse AMR fleet

The existing contrast case compares prototype and operational deployment environments, including production meaning, responsibility, stabilised assumptions, and security relevance. This candidate is strongest for RQ2, RQ3, and RQ4.

Evidence gap: stronger public evidence for warehouse AMR deployments and clearer provenance for claims about operational responsibility and fleet management.

### How do you define a scenario?

This candidate could become a concept-explainer article and standards comparison. It would connect scenario-like constructs across standards, Rotifer experiments, realisations, assurance context, and public explanation. This candidate is strongest for RQ2 and RQ4.

Evidence gap: close reading of standards or engineering artefacts that use scenarios, use cases, operating contexts, test cases, or comparable constructs.

### SROS2 policy and command authority

SROS2 and DDS Security provide a concrete surface where permissions, identities, enclaves, policies, authority, and deployment context may not align cleanly with system-level meaning. This candidate is strongest for RQ3 and RQ4.

Evidence gap: direct source audit of SROS2 usability and policy semantics, plus implemented experimental evidence if this becomes a Rotifer case.

### IEC 62443 boundaries versus ROS graph boundaries

IEC 62443 uses system-under-consideration, zones, conduits, and risk assessment, while ROS graph visibility can invite a different interpretation of system boundary. This candidate is strongest for RQ2, with RQ3 and RQ4 implications.

Evidence gap: exact IEC clauses and a concrete robotics example showing where these boundary models align or diverge.

## Selection criteria

Use a candidate case when it can do at least one of the following:

- Ground an abstract thesis argument in a recognisable system or artefact.
- Expose assumptions, interfaces, responsibilities, or boundaries.
- Compare alternative architectures or engineering approaches.
- Show how deployment, change, or drift affects evidence and assurance.
- Make the research accessible to readers outside the immediate project.

## Source provenance

- [case-studies/index.md](../../../02_my_notes/case-studies/index.md)
