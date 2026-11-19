---
name: product-development-lifecycle
description: Turn a product idea or repeatedly changing requirement into an evidence-based, reviewable path through clarification, high-fidelity prototyping, technical planning, implementation, acceptance, release, and retrospective. Use when the outcome or acceptance criteria are unclear, when multiple revisions show alignment drift, or when a team needs reusable product-to-development standards. Skip narrow implementation tasks that already have stable requirements unless the user requests lifecycle review.
---

# Product Development Lifecycle

Move the work to the next reviewable artifact while preserving the user's actual objective. Do not force a project to restart from phase one when reliable artifacts already exist.

## Start

1. Inspect the current product evidence, code, decisions, unresolved questions, and prior acceptance records before asking the user to repeat information.
2. Identify the current lifecycle phase and the next decision that must be proven.
3. Separate facts, external evidence, decisions, hypotheses, counterexamples, and blockers. Never present a prototype, source file, or historical pass as proof of current production behavior.
4. Ask a concise alignment question only when the objective cannot be translated into observable acceptance criteria, material interpretations conflict, or the same dimension has already required multiple corrections. Otherwise state reversible assumptions and continue.

Read [lifecycle-standard.md](references/lifecycle-standard.md) whenever planning or auditing the full product-to-release path.

## Clarify without creating interview fatigue

For material ambiguity, test five things: the exact meaning, hidden premise, supporting evidence, plausible contrary explanation, and consequences if the conclusion is true or false. Ask only the smallest question that changes the next artifact.

Read [clarification-and-evidence.md](references/clarification-and-evidence.md) for ambiguity triggers, evidence labels, and the alignment checkpoint used after repeated revisions.

## Prototype before implementation

For a new product, new user flow, or material visual interaction change, create or review a high-fidelity prototype before committing to the technical plan. The prototype must make the core logic, hierarchy, navigation, primary states, realistic content, responsive behavior, and interaction outcomes observable. Label simulated data and unavailable backend behavior.

Treat approval as a scoped contract: record what was approved, what remains open, and what evidence supported the decision. If feasibility later changes the experience, return the affected decision for review instead of silently changing it.

Read [prototype-and-delivery-gates.md](references/prototype-and-delivery-gates.md) for the prototype contract, technical plan, implementation slices, verification, and release gates.

## Help the user express a request

When the user wants a prompt, brief, PRD, or better way to communicate intent, use [request-expression-guide.md](references/request-expression-guide.md). Build the request from outcome, user, current evidence, scope, decisions, constraints, deliverables, acceptance, uncertainty handling, and authority. Do not promise to infer unexpressed preferences; use prototypes and acceptance evidence to close the gap.

Use [templates.md](references/templates.md) for product briefs, ambiguity audits, prototype sign-off, delivery plans, acceptance, retrospectives, and project overlays. Adapt templates to the work; do not require irrelevant sections.

## Reuse and improve the knowledge base

The files in `references/` are the public standard and single source used by both people and this skill. Projects may record local differences, but must not silently rewrite the public standard.

When a project yields a reusable lesson:

1. Capture the observed problem and evidence.
2. State the proposed general rule and its applicability boundary.
3. Search for a counterexample and explain the impact if the rule is accepted or rejected.
4. Propose a versioned knowledge change.
5. Update the public standard only after user approval; then record which projects should review the new version.

Read [governance-and-sync.md](references/governance-and-sync.md) for versioning, project pinning, update proposals, and synchronization. Project-specific retrospectives remain in each project's own documentation unless separately approved for public release.

## Completion

Report phase-specific completion. Distinguish prototype approval, code readiness, automated checks, simulator/browser checks, real-device checks, backend/environment checks, release, and outcome validation. A green check in one layer never proves another.

