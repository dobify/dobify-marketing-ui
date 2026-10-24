# dobify-marketing-ui

Scaffolded with Vuetify CLI.

## ❗️ Documentation

- Primary docs: https://vuetifyjs.com/
- Getting started guide: https://vuetifyjs.com/en/getting-started/installation/
- Community support: https://community.vuetifyjs.com/
- Issue tracker: https://issues.vuetifyjs.com/

## 🧱 Stack

- Framework: Vue 3 + Vite
- UI Library: Vuetify
- Language: TypeScript
- Package manager: npm

## 🧭 Start Here

- Main entry: `src/main.ts`
- Main app component: `src/App.vue`
- Main styles: `src/styles/`
- Plugin setup: `src/plugins/`

## 📁 Project Structure

- `src/main.ts` — application entry point
- `src/App.vue` — root component
- `src/components/` — reusable Vue components
- `src/plugins/` — plugin registration and setup
- `src/styles/` — global styles and theme settings
- `public/` — static public files

## ✨ Enabled Features

- ESLint
- Pinia
- Vue I18n
- Vuetify MCP
- Vue Router

## 💿 Install

Use your selected package manager (npm) to install dependencies:

```bash
npm install
```

## 🚀 Quick Start

```bash
npm install
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

### Pricing API configuration

- **Development:** the app requests `/api/prices`. Vite proxies this to
  `http://localhost/api/prices`. No environment file is required. For a custom
  development endpoint, copy `.env.example` to `.env.development.local` and edit
  `VITE_PRICES_URL`.
- **Production:** Vite automatically loads `.env.production`,
  which sets `VITE_PRICES_URL=https://dobify.mx/api/prices`.
- **GitHub Actions:** the build uses the same production URL by default. Set the
  repository **Actions variable** `VITE_PRICES_URL` to override it. It is a public
  URL, not a secret.

Vite embeds `VITE_*` values in the JavaScript bundle **at build time**. `.env.example`
is only a template, and copying an environment file to the deployed `dist` directory
does not reconfigure it. Rebuild and redeploy after changing the production URL.
An environment variable supplied to `npm run build` takes precedence over the file.

The prices endpoint must return the plan JSON without authentication for public
visitors. Never include an API token in a `VITE_*` variable. If the marketing site
is hosted on a different origin, the API must also allow that origin through CORS.

## 🧪 Available Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run build-only`
- `npm run type-check`
- `npm run lint`
- `npm run lint:fix`

## 🤖 Vuetify MCP Server

This project is configured with the Vuetify Model Context Protocol (MCP) server.
To install and configure the MCP server for your favorite IDE (Cursor, Trae, Windsurf, VS Code, Claude Desktop, etc.) run:

```bash
npx -y @vuetify/mcp-cli
```

This will open an interactive setup wizard to help you connect your AI assistant to the Vuetify ecosystem.

## 💪 Support Vuetify Development

This project uses Vuetify - an MIT licensed Open Source project. We are glad to welcome contributors and any support for ongoing development:

- Contribute to Vuetify and ecosystem projects: https://github.com/vuetifyjs
- Request enterprise support: https://support.vuetifyjs.com/
- Sponsor on GitHub: https://github.com/sponsors/vuetifyjs
- Support on Open Collective: https://opencollective.com/vuetify
