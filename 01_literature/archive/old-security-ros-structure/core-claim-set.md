## **I. Systems are distributed, modular, and assumption-heavy**

### C1

**Modern robotic systems are composed of distributed, modular components integrated via middleware (e.g. ROS2 + DDS).**

- Strong empirical support (architecture, teardown, ROS2 docs)

---

### C2

**These systems rely on implicit assumptions embedded in middleware, tooling, and component integration.**

- Strong synthesis across both analyses
- Explicitly identified as a key insight in your audit

---

### C3

**Security and correctness depend not just on components, but on how these assumptions align with real deployment contexts.**

- This is your **“assumption mismatch” claim**
- Strong, recurring, and defensible

---

## **II. Integration—not components—is the primary site of failure**

### C4

**System vulnerabilities and failures frequently arise at the level of integration (interfaces, configuration, coordination), rather than isolated components.**

- Strong across:
    - ROS2 vulnerabilities (V1/V2, misconfig)
    - construction accidents (coordination failures)

---

### C5

**Complex configuration (e.g. SROS2 PKI, permissions, QoS) leads to partial or incorrect deployment of security mechanisms.**

- Directly supported

---

### C6

**This produces systems that appear secure but are not (“illusory security”).**

- Strong synthesis, grounded in partial deployment evidence
- One of your best original claims

---

## **III. Traditional assurance models do not scale cleanly**

### C7

**Formal verification and deterministic assurance rely on bounded models and known state spaces.**

- Strong technical grounding

---

### C8

**Open-world environments and heterogeneous systems break these assumptions, making exhaustive verification infeasible.**

- Strong (state space + environment arguments)

---

### C9

**As a result, assurance shifts toward probabilistic, partial, and continuous methods (e.g. monitoring, statistical techniques).**

- Strong, recurring across chunks

---

## **IV. System boundaries are operationally unstable**

### C10

**In practice, the boundaries of a robotic system are not fixed, but depend on configuration, environment, and integration context.**

- Strong synthesis (appears repeatedly, well-supported indirectly)

---

### C11

**Modularity (e.g. MOSA) enables continuous change, making systems temporally unstable and difficult to certify as static entities.**

- Strong, grounded in MOSA + lifecycle discussion

---

---

## **V. Human role shifts under these conditions**

### C12

**Humans increasingly operate in supervisory and interpretive roles rather than direct control.**

- Strong HCI + automation grounding

---

### C13

**Humans are often held responsible for system behaviour despite limited visibility and control.**

- Strong (MHC, liability literature)

---

### C14

**Human understanding of system behaviour is increasingly mediated by system-generated representations (e.g. monitoring systems, digital twins).**

- Strong synthesis from Chunk 5 + 8

---

---

## **VI. Responsibility and governance break at integration level**

### C15

**Responsibility becomes distributed across components, organisations, and interfaces, making attribution (“tracing”) difficult.**

- Strong, repeated, well-supported

---

### C16

**Existing standards and regulatory frameworks are fragmented across domains and do not map cleanly onto robotic systems.**

- Strong empirical support

---

### C17

**Safety and security requirements can conflict in integrated systems (e.g. availability vs isolation).**

- Strong, grounded (standards + CPS literature)

---

---

## **VII. Cyber-physical consequence changes the stakes**

### C18

**In robotic systems, cyber vulnerabilities can propagate into physical-world effects (“embodiment”).**

- Strong (embodiment integrity concept)

---

### C19

**Failures often arise from mismatches between system behaviour, human expectations, and operational context—not just component faults.**

- Strong (construction + integration + HCI synthesis)

extra notes:

**gap between theory and practice**

Vilches et. al., in "The cybersecurity of Humanoid Robots via the Unitree G1"Report, in "1. 4 The limits of Systematisation in Emerging fields", there is a claim Rat it is difficult to "systematize knowledge that barely exists", noting the lack of empirical attach data and resulting "increasing gap" between theory and practice.

My research goes a step further in highlighting that the structure of the system itself makes clean abstraction unreliable (paper 1) and that architectural instability of robotics confounds systemetisation (as with MOSA, for example).


