
# Project Architecture

## 1. Overview

This project is created as part of RabTech Academy Task 02.

The goal is to establish a maintainable monorepo-style structure and document accessibility audit findings for the SWTCH Energy website.

## 2. Repository Structure

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

## 3. Project Boundaries

### Client

The client folder contains frontend code, UI components, styles, and browser-side functionality.

### Server

The server folder contains backend code, API routes, business logic, and server-side configuration.

### Docs

The docs folder contains architecture documentation, accessibility audit reports, and supporting screenshots.

### Test

The test folder contains automated tests and test-related configuration.

## 4. Local Setup

Prerequisites:
- Visual Studio Code
- Git
- A modern web browser

To get started:

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Review the README and architecture documentation.
4. Install dependencies after the client and server applications are configured.

Note: The current repository is a setup-ready skeleton. Application dependencies and run commands will be added when the first feature slice is implemented.

## 5. First Vertical Feature Slice

The first feature slice will be an accessible audit dashboard.

### Client

Display audit findings, issue descriptions, priorities, and evidence links.

### Server

Provide an API endpoint to return audit findings in a structured format.

### Testing

Verify that findings are displayed correctly and that interactive elements can be used with a keyboard.

### Documentation

Document the feature setup, API behavior, and accessibility considerations.

## 6. Accessibility Principles

- Use semantic HTML.
- Provide accessible names for interactive controls.
- Maintain a logical heading hierarchy.
- Support keyboard navigation.
- Provide meaningful alternative text for informative images.