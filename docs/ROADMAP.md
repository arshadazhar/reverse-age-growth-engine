# Phased implementation roadmap

No phase authorizes deployment, live marketing or modification of reverseagecoach.com. Production actions require explicit business approval and verified credentials through secure configuration.

## Phase 1 — Frontend foundation (this delivery)

Delivered: responsive Next.js/TypeScript/Tailwind dashboard; eight supporting navigation previews; synthetic-data disclosures; architecture and setup documentation; basic component tests and build checks. Backend, auth, persistence and integrations remain unimplemented.

Acceptance: nine routes render, mobile navigation works, unknown routes return 404, all displayed metrics are visibly demo data, and lint/tests/build pass. See validation evidence.

## Phase 2 — Secure core and first useful workflow (proposed next)

1. Bootstrap FastAPI, PostgreSQL, SQLAlchemy and Alembic; define local service startup and CI. Add health/readiness endpoints and migration validation against a clean database.
2. Add OIDC authentication, tenant membership, role checks, audit events, secret management and transactional outbox. Test cross-tenant reads/writes, expired sessions and permission denial.
3. Implement manual keyword CSV import with validation, locale/language/source/date fields, duplicates and nullable provider metrics. Add transparent intent labels and editable clusters with versioned algorithm settings. Do not synthesize search volumes.
4. Implement content briefs and versioned drafts, scientific source records, claim-to-source mappings and reviewer decisions. Begin with manually supplied verified sources; AI drafting is an optional server-side adapter with cost limits.
5. Replace demo views only when endpoints are working. Keep explicit disconnected/empty/error states and a separate demo mode. Add browser tests for import → cluster → brief → review and permission boundaries.

Exit criteria: repeatable migrations; tenant isolation tests; auditable version-bound approvals; no fabricated metrics/citations; accessible keyboard workflow; API validation and error states; a complete documented local run. Still no publishing, ads or email delivery. Dependencies: choose identity/AI providers and approve data retention/roles before implementation needs those details. Secure credentials are requested only for the selected adapter.

## Phase 3 — Search, competitor intelligence and WordPress drafts

Select a licensed SEO data provider after comparing locale coverage and cost. Add source-attributed metrics and reproducible competitor snapshots; classify gaps with evidence and review. Introduce a read-only site audit with SSRF protection. Test WordPress/Rank Math compatibility against a separate staging instance and documented API capabilities; use draft-only exports before any production connection. Verify plugin metadata access and permissions rather than assuming all Rank Math settings are exposed via REST.

Exit: provider contract tests, provenance on each metric, staged draft round-trip and rollback instructions. Website production access remains a separate approval.

## Phase 4 — Social review and scheduling

Add English and Roman Urdu variants, calendar, editorial approval and timezone-aware queueing (`Asia/Dubai` default, UTC storage). Integrate one channel sandbox first, then other social providers subject to account/API approval. Test revocation, edited approval invalidation, expired tokens, duplicate reconciliation, daylight-saving transitions for international users and provider rate limits. Publishing requires approved version, destination and time.

## Phase 5 — Consent-first CRM and email

Build forms with explicit purpose/channel consent, minimal data capture, append-only consent history, explainable score rules, suppressions and export/erasure handling. Integrate an email provider sandbox and signed delivery/unsubscribe webhooks. Implement sequences with quiet hours, frequency limits and immediate pre-send consent checks. Validate no-contact-on-revocation and exactly-once event processing. Avoid collecting medical details for marketing scoring.

## Phase 6 — Advertising and measurement

Integrate read-only Meta, Google and TikTok reporting first. Normalize dates/currencies while preserving source definitions. Add consent-aware conversion events and documented attribution windows, deduplication and reporting lag. Automated ad creation follows only after separate authorization, account/budget caps, two-step review and sandbox tests. Revenue attribution must disclose uncertainty; no invented ROAS or causal lift.

## Phase 7 — Production hardening and controlled release

Threat model, dependency/security review, accessibility audit, load tests, backup restore rehearsal, retention jobs, monitoring alerts, budget/cost limits and operational runbooks. Pilot with a small approved team and sandbox destinations, then staged live integrations with explicit approval. Measure source freshness, review throughput, consent coverage, delivery errors and verified conversions. Never use demo metrics as business baselines.
