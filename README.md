# Telegram Clone

A modern **Telegram clone** built with:

- [Next.js 15](https://nextjs.org/) (with Turbopack)
- [React 19](https://react.dev/)
- [Clerk](https://clerk.com/) for authentication
- [Convex](https://convex.dev/) as backend
- [TailwindCSS 4](https://tailwindcss.com/) for styling
- [Biome](https://biomejs.dev/) for linting & formatting

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
