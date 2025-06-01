README.md (Full Setup Version)
markdown
Copy
Edit
# 🏗️ My Microfrontend Monorepo

This repository implements a **React microfrontend architecture** using:

- ⚛ **React 18**
- ⚡ **Vite**
- 🏗 **Module Federation** (via `@originjs/vite-plugin-federation`)
- 📦 **pnpm workspaces** (monorepo management)

✅ Main apps:
- **Shell** → the main host/entry app
- **WidgetMetrics** → a remote widget microfrontend

---

## 📂 Project Structure

my-microfrontend-monorepo/
├── package.json → Root monorepo config with workspaces
├── pnpm-workspace.yaml → pnpm workspace setup
├── packages/
│ ├── shell/ → Main host app
│ │ ├── package.json
│ │ ├── vite.config.ts
│ │ └── src/
│ └── widgetMetrics/ → Remote widget microfrontend
│ ├── package.json
│ ├── vite.config.ts
│ └── src/

yaml
Copy
Edit

---

## 🛠 Prerequisites

✅ **Node.js** → v18+ recommended  
✅ **pnpm** → install globally if you don’t have it:

```bash
npm install -g pnpm
✅ Git → clone the repository:

bash
Copy
Edit
git clone https://github.com/urikhaimov/my-microfrontend-monorepo.git
cd my-microfrontend-monorepo
🚀 Setup Instructions
1️⃣ Install dependencies
At the monorepo root, run:

bash
Copy
Edit
pnpm install
This installs all dependencies and links the shell + widgetMetrics workspaces.

2️⃣ Build + preview the remote
The shell needs the built remote for federation to work.

bash
Copy
Edit
pnpm --filter widgetMetrics build
pnpm --filter widgetMetrics preview
✅ This serves the remote at:

bash
Copy
Edit
http://localhost:4174/assets/remoteEntry.js
3️⃣ Run the shell app
In a second terminal:

bash
Copy
Edit
pnpm --filter shell dev
✅ Visit:

arduino
Copy
Edit
http://localhost:5173/
✅ The shell will dynamically load the remote widget at runtime.

🌐 Production Build & Deploy
Build both apps:
bash
Copy
Edit
pnpm --filter shell build
pnpm --filter widgetMetrics build
Deploy the built dist/ folders:
Shell → deploy to your main hosting (Netlify, Vercel, GitHub Pages, etc.)

Remote → deploy widgetMetrics/dist and ensure remoteEntry.js is publicly reachable

Update the shell’s vite.config.ts:
ts
Copy
Edit
remotes: {
  widgetMetrics: 'https://your-remote-domain.com/assets/remoteEntry.js'
}
✅ Ensure the shell points to the deployed remote.

⚙️ Tech Stack
React 18

Vite

Module Federation (@originjs/vite-plugin-federation)

pnpm monorepo

📦 Scripts
Command	Description
pnpm install	Install all dependencies
pnpm --filter widgetMetrics build	Build the remote widget app
pnpm --filter widgetMetrics preview	Preview the built remote
pnpm --filter shell dev	Run the shell app in dev mode
pnpm --filter shell build	Build the shell app
pnpm --filter shell preview	Preview the built shell

🤝 Contributing
Feel free to fork this repo, open issues, or submit pull requests!
If you have ideas for improvements, I’d love to hear them.

📄 License
MIT © 2025 Uri Khaimov

💬 Contact
If you have any questions or need support, feel free to reach out via GitHub or open an issue.

yaml
Copy
Edit

---

### ✅ What’s included:
✅ Prerequisites  
✅ Full setup instructions  
✅ Build + deploy instructions  
✅ Clear script table  
✅ Contribution and license section

If you want, Uri,  
I can also:
✅ Write a GitHub Actions workflow for auto-deploy  
✅ Add a `.env.example` file for environment configs  
✅ Provide a `CONTRIBUTING.md` template

Want me to prep any of those for you? 🚀😄 Just say **“yes, prep deploy setup”**!





