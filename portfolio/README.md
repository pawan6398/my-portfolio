# 🎓 Personal Portfolio Website — React + Vite

A beginner-friendly personal portfolio website built with **React** and **Vite**.
Perfect for college students and freshers looking for internships or placements.

---

## 📁 Folder Structure

```
portfolio/
├── index.html               ← The main HTML file (entry point)
├── vite.config.js           ← Vite configuration (you don't need to touch this)
├── package.json             ← Lists all dependencies and scripts
└── src/
    ├── main.jsx             ← Connects React to index.html
    ├── App.jsx              ← Root component — holds all sections
    ├── index.css            ← ALL styles in one file
    └── components/
        ├── Navbar.jsx       ← Top navigation bar
        ├── Hero.jsx         ← Welcome / intro section
        ├── About.jsx        ← About me section
        ├── Skills.jsx       ← Skills with progress bars
        ├── Projects.jsx     ← Project showcase cards
        ├── Certificates.jsx ← Certifications list
        ├── Contact.jsx      ← Contact form
        └── Footer.jsx       ← Page footer
```

---

## 🚀 Setup Instructions (Step by Step)

### Step 1 — Make sure Node.js is installed
Open your terminal and type:
```bash
node -v
```
You should see something like `v18.x.x`. If not, download Node.js from https://nodejs.org

---

### Step 2 — Go into the project folder
```bash
cd portfolio
```

---

### Step 3 — Install dependencies
This downloads React, Vite, and other packages listed in `package.json`.
```bash
npm install
```
Wait for it to finish. You'll see a `node_modules/` folder appear.

---

### Step 4 — Start the development server
```bash
npm run dev
```
Vite will start a local server. You'll see output like:
```
  VITE v4.x.x  ready in 500ms

  ➜  Local:   http://localhost:5173/
```

---

### Step 5 — Open in browser
Go to: **http://localhost:5173**

Your portfolio is now running! 🎉  
Every time you save a file, the browser updates automatically.

---

### Step 6 — Build for production (when ready to deploy)
```bash
npm run build
```
This creates a `dist/` folder with optimized files you can upload to GitHub Pages, Netlify, or Vercel.

---

## ✏️ How to Customize It

### Change your name and info
- **Navbar.jsx** → Change `Aryan` to your name
- **Hero.jsx** → Change name, tagline, description, GitHub/LinkedIn links
- **About.jsx** → Change bio, university, location, etc.

### Change skills
- **Skills.jsx** → Edit the `skillCategories` array. Change skill names and levels (0–100)

### Change projects
- **Projects.jsx** → Edit the `projects` array. Add your own GitHub links and live URLs

### Change certificates
- **Certificates.jsx** → Edit the `certificates` array with your real certs

### Add your photo
In `About.jsx`, replace:
```jsx
<span className="about__photo-initials">AS</span>
```
With:
```jsx
<img src="/your-photo.jpg" alt="Aryan Sharma" />
```
Put your photo in the `public/` folder.

### Change colors
Open `src/index.css` and look for the `:root` block at the top.
Change `--color-accent: #d4611a;` to any color you like.

---

## 💡 React Concepts Used (Good for Interview Prep)

| Concept | Where it's used |
|---|---|
| `useState` | Navbar (menu open/close), Contact (form data, sent state) |
| `useEffect` | App.jsx (scroll listener) |
| `props` | Passing `scrolled` to Navbar, `project` to ProjectCard |
| Components | Each section is its own component (file) |
| Array `.map()` | Rendering lists of skills, projects, certificates |
| Event handlers | `onChange` for form inputs, `onClick` for buttons |
| Conditional rendering | Show success message OR form in Contact |
| Template literals | CSS class toggling like `navbar--scrolled` |

---

## 🌐 Deploying for Free

### Option 1: Netlify (easiest)
1. Run `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `dist/` folder

### Option 2: GitHub Pages
1. Push your code to GitHub
2. Install: `npm install gh-pages --save-dev`
3. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
4. Run: `npm run build && npm run deploy`

### Option 3: Vercel
1. Push code to GitHub
2. Go to https://vercel.com and import your repo
3. Click Deploy — done!

---

## 🙋 Common Questions

**Q: Why is the form not sending emails?**  
A: The form currently just shows a success message. To actually send emails, use a free service like [EmailJS](https://emailjs.com) — it's free and beginner-friendly.

**Q: How do I change the font?**  
A: Go to `index.html` and replace the Google Fonts link. Then update the font variables in `index.css`.

**Q: Where is the data stored?**  
A: All the content (projects, skills, etc.) is stored directly in the component files as JavaScript arrays. No database needed!

---

Made with ❤️ using React + Vite
