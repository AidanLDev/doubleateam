## Contributing to Aidan Lowson's Blog

Thanks for your interest in contributing! This file explains how to get the project running locally, how to propose changes, and what we expect from contributions.

### Getting started (local)

1. Fork the repository and clone your fork:

```bash
git clone https://github.com/<your-username>/doubleateam.git
cd doubleateam
npm install
npm run dev
```

2. Open `http://localhost:3000` and verify the site runs.

### Branching and workflow

- Create branches from `main` with descriptive names, for example: `chore/docs/add-contrib-files`, `fix/header-link`, or `feat/new-post-archive`.
- Keep changes focused and small — one purpose per PR.
- When ready, open a pull request against `main` with a clear title and description.

### PR checklist

- [ ] The code builds: `npm run build` (or `npm run dev` for testing).
- [ ] Lint and format: follow the project's ESLint/Prettier rules. Run your local format/lint commands before opening a PR.
- [ ] Update documentation or content if the change affects behaviour or structure.
- [ ] Include testing instructions in the PR description.

### Code style

- This project uses Prettier and ESLint configurations. Please run formatters and linters before committing.
- Use clear, small commits and conventional commit messages where possible (e.g., `fix(...)`, `feat(...)`, `chore(...)`).

### How to submit changes

1. Push your branch to your fork.
2. Open a pull request against `AidanLDev/doubleateam:main`.
3. Add a short description of what changed and how to test.

We aim to review PRs promptly — if you need faster feedback, mention maintainers or open an issue first to discuss larger changes.

---

If you have questions about contributing, contact `dev@aidanlowson.com`.
