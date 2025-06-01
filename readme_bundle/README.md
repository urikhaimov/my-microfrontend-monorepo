
# 🏗️ My Microfrontend Monorepo

This repository implements a **React microfrontend architecture** using:

- ⚛ **React 18**
- ⚡ **Vite**
- 🏗 **Module Federation** (`@originjs/vite-plugin-federation`)
- 📦 **pnpm workspaces**

✅ It consists of:
- **Shell app** → the main host  
- **WidgetMetrics app** → a remote widget microfrontend

---

## 📂 Project Structure

```
.
├── package.json
├── pnpm-workspace.yaml
├── README.md
└── packages
    ├── shell
    │   ├── index.html
    │   ├── package.json
    │   ├── src
    │   │   ├── App.tsx
    │   │   ├── main.tsx
    │   │   └── components
    │   │       └── ...
    │   └── vite.config.ts
    └── widgetMetrics
        ├── index.html
        ├── package.json
        ├── src
        │   ├── WidgetApp.tsx
        │   └── main.tsx
        └── vite.config.ts
```

---

## 🛠 Setup

### 1️⃣ Prerequisites

- **Node.js v18+**
- **pnpm** (install globally if needed):

```bash
npm install -g pnpm
```

- **Clone this repo**:

```bash
git clone https://github.com/urikhaimov/my-microfrontend-monorepo.git
cd my-microfrontend-monorepo
```

---

### 2️⃣ Install dependencies

```bash
pnpm install
```

✅ This will install and link all workspaces.

---

### 3️⃣ Build + preview the remote

```bash
pnpm --filter widgetMetrics build
pnpm --filter widgetMetrics preview
```

✅ This serves the remote at:
```
http://localhost:4174/assets/remoteEntry.js
```

---

### 4️⃣ Run the shell app (dev mode)

In another terminal:
```bash
pnpm --filter shell dev
```

✅ Visit:
```
http://localhost:5173/
```

✅ The shell will dynamically load the remote widget.

---

## 📦 Scripts

| Command                                    | Description                            |
|-------------------------------------------|----------------------------------------|
| `pnpm install`                            | Install all dependencies               |
| `pnpm --filter widgetMetrics build`       | Build the remote widget app            |
| `pnpm --filter widgetMetrics preview`     | Preview the built remote               |
| `pnpm --filter shell dev`                 | Run the shell app in dev mode          |
| `pnpm --filter shell build`               | Build the shell app                    |
| `pnpm --filter shell preview`             | Preview the built shell                |

---

## 🌐 Deployment

### Build both apps:
```bash
pnpm --filter shell build
pnpm --filter widgetMetrics build
```

✅ Deploy the built `dist/` folders to your hosting (Netlify, Vercel, GitHub Pages, etc.).

### Update `shell/vite.config.ts`:
```ts
remotes: {
  widgetMetrics: 'https://your-remote-domain.com/assets/remoteEntry.js'
}
```

✅ Ensure the shell points to the deployed remote.

---

## ⚙️ Tech Stack

- React 18
- Vite
- Module Federation
- pnpm workspaces
- TypeScript

---

## 🤝 Contributing

Feel free to fork, open issues, or submit pull requests!  
If you have ideas for improvements, I’d love to hear them.

---

## 📄 License

MIT © 2025 [Uri Khaimov](https://github.com/urikhaimov)
