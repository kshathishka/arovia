# 🔄 Development Workflow – Arovia

This document describes the development workflow followed in the Arovia project.

---

## 🌱 Branching Strategy

We follow a simplified Git Flow model:

- `main` → Production-ready stable branch
- `feature/*` → New feature development
- `fix/*` → Bug fixes
- `refactor/*` → Code improvements
- `docs/*` → Documentation updates

---

## 🔁 Development Process

1. Create a new branch from `main`
2. Implement changes
3. Run tests locally
4. Push branch
5. Open Pull Request
6. CI workflow runs automatically
7. Code review
8. Merge into `main`

---

## 🧪 Testing Policy

- Backend tested using `pytest`
- Frontend build must succeed
- No breaking API changes without version update

---

## 🏥 Medical Safety Validation

Any update affecting:
- Urgency scoring
- Emergency detection
- Triage logic

Must:
- Include new test cases
- Be clinically validated
- Avoid unsafe recommendations

---

## 🚀 Continuous Integration

On every:
- Push to main
- Pull Request to main

GitHub Actions automatically:
- Installs dependencies
- Runs backend tests
- Builds frontend

---

## 📦 Release Strategy

- Major version → Breaking changes
- Minor version → Feature additions
- Patch version → Bug fixes

The project follows Semantic Versioning.
