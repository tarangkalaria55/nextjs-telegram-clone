# Telegram Clone

A modern **Telegram clone** built with:

- [Next.js 15](https://nextjs.org/) (with Turbopack)
- [React 19](https://react.dev/)
- [Clerk](https://clerk.com/) for authentication
- [Convex](https://convex.dev/) as backend
- [TailwindCSS 4](https://tailwindcss.com/) for styling
- [Biome](https://biomejs.dev/) for linting & formatting
- [Lefthook](https://github.com/evilmartians/lefthook) for Git hooks

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (works with [fnm](https://github.com/Schniz/fnm), [nvm](https://github.com/nvm-sh/nvm), or system install)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
npm run start
```

## 🧹 Code Quality & Formatting

This repo enforces strict formatting and linting using Biome
.

- **On Save in VSCode** → Biome formats your files (.vscode/settings.json included).
- **On Commit** → Lefthook runs:
  - biome check --write on staged files (auto-fix).
- **On Push** → Lefthook runs:
  - biome check to ensure no errors are left.

Manual commands:

```bash
npm run lint       # check for issues
npm run lint:fix   # check & auto-fix
npm run format     # format only
```

## ⚙️ Editor & Git Settings

- .editorconfig → consistent spaces, LF endings, UTF-8 charset
- .gitattributes → normalizes line endings and marks binary files
- .vscode/settings.json → configures Biome as default formatter
- .vscode/extensions.json → recommends Biome extension

### Recommended VSCode Extensions

- Biome ✅ (default formatter)
- ESLint (optional)
- Prettier (optional)

## 🔒 Git Hooks

We use Lefthook for cross-platform Git hooks.

- Pre-commit → formats staged files with Biome
- Pre-push → checks code with Biome

If hooks are not working, run manually:

```bash
npx lefthook install
```
