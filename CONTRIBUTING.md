# 🤝 Contributing to Arovia

Thank you for your interest in contributing to **Arovia – AI Health Desk Agent** 🚑

We welcome improvements in AI logic, backend performance, frontend experience, documentation, and testing.

---

## 📌 Getting Started

1. Fork the repository
2. Clone your fork:

   ```bash
   git clone https://github.com/your-username/GROUP-AV.git
   ```

3. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes
5. Commit and push
6. Open a Pull Request

---

## 🌱 Branch Naming Convention

Please follow these naming standards:

- `feature/...` → New features
- `fix/...` → Bug fixes
- `refactor/...` → Code restructuring
- `docs/...` → Documentation updates
- `test/...` → Testing improvements

Example:

```bash
feature/improve-urgency-scoring
```

---

## 🧠 Areas You Can Contribute To

- 🩺 AI triage logic improvements
- 🚨 Emergency detection refinement
- 📍 Facility matching optimization
- 🗣️ Voice processing enhancements
- 🎨 Frontend UI/UX improvements
- 🧪 Testing and validation
- 📖 Documentation updates

---

## 🧪 Code Standards

### Backend (Python / FastAPI)

- Follow PEP8
- Use type hints
- Write clear docstrings
- Keep modules modular and maintain separation of concerns
- Add tests for new logic

### Frontend (React / TypeScript)

- Use strict TypeScript types
- Follow ESLint configuration
- Keep components small and reusable
- Avoid hardcoding medical logic in UI

---

## 🏥 Medical Safety Guidelines

Since Arovia deals with medical triage:

- Do NOT introduce unsafe medical advice
- Always include disclaimers in medical outputs
- Validate urgency scoring changes carefully
- Add test cases for any change in triage logic
- Avoid storing sensitive health data

---

## 🔄 Pull Request Process

Before submitting a PR, ensure:

- [ ] Code builds successfully
- [ ] No sensitive data is committed
- [ ] Documentation is updated if needed
- [ ] Tests are added (if applicable)
- [ ] No unnecessary files included
- [ ] No breaking API changes (unless major version)

---

## 🧪 Testing

Run backend tests before pushing:

```bash
pytest
```

For frontend:

```bash
npm run build
npm run lint
```

---

## 📝 Commit Message Guidelines

Use clear and descriptive commit messages.

Examples:

```
feat: improve emergency red flag detection
fix: resolve facility distance calculation bug
docs: update API documentation
refactor: modularize triage agent
```

---

## 💬 Questions?

If you have questions:

- Open an Issue
- Tag maintainers in discussions
- Provide clear reproduction steps for bugs

---

Thank you for contributing to Arovia and helping improve accessible healthcare technology 💙
