// -> file structure of a Next.js project

// my-next-app/
// │
// ├── app/                      # App Router (main entry for routes)
// │   ├── layout.js             # Root layout (shared across pages)
// │   ├── page.js               # Home page (default route "/")
// │   ├── about/
// │   │   └── page.js           # About page ("/about")
// │   └── dashboard/
// │       ├── page.js           # Dashboard route ("/dashboard")
// │       └── layout.js         # Dashboard layout (applies to its children)
// │
// ├── public/                   # Static files (images, icons, fonts)
// │   └── favicon.ico
// │
// ├── styles/                   # Global and module CSS
// │   ├── globals.css
// │   └── home.module.css
// │
// ├── components/               # Reusable React components
// │   └── Navbar.js
// │
// ├── pages/                    # (Optional) Still supports old Pages Router
// │   └── api/                  # API Routes (serverless functions)
// │       └── hello.js
// │
// ├── next.config.js            # Next.js configuration
// ├── package.json              # Dependencies and scripts
// └── node_modules/             # Installed packages