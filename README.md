
# RabTech Academy — Task 02

## Accessibility Baseline & Repository Architecture Audit

This repository documents an accessibility audit of the SWTCH Energy website and establishes a monorepo-style project structure.

## Project Overview

The project includes Lighthouse audit findings, manual keyboard testing observations, accessibility recommendations, and architecture documentation.

## Repository Structure

```text
RabTech-Task-02/
├── client/
├── server/
├── docs/
│   ├── evidence/
│   ├── accessibility-audit.md
│   └── architecture.md
├── test/
└── README.md
```

## Audit Details

- Website: https://swtchenergy.com/
- Tool: Google PageSpeed Insights (Lighthouse)
- Accessibility score: 82/100
- Audit mode: Mobile

See [Accessibility Audit Report](docs/accessibility-audit.md) for findings and remediation recommendations.

## Documentation

- [Accessibility Audit](docs/accessibility-audit.md)
- [Architecture](docs/architecture.md)
- Evidence screenshots: `docs/evidence/`

## Local Setup

1. Clone or download this repository.
2. Open the repository folder in Visual Studio Code.
3. Review the documentation.

The client and server are currently setup-ready skeleton folders. Application dependencies and run commands will be added during implementation of the first vertical feature slice.

## Planned First Feature

An accessible audit dashboard that displays accessibility findings, remediation priorities, and supporting evidence.

## Author

Prepared as part of the RabTech Academy internship assignment.