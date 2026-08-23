# Bimal Rijal — Portfolio

A single-page React + Vite portfolio.

## Folder structure

```
Bimal-Rijal-Portfolio/
├── public/                 # static files served as-is
├── src/
│   ├── assets/
│   │   └── images/         # svgs used by components
│   ├── components/         # every component, flat (no nested folders)
│   │   ├── Navbar.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Skills.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── Experience.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── ProjectCard.jsx / .css
│   │   ├── SkillCard.jsx / .css
│   │   ├── SectionTitle.jsx / .css
│   │   └── SocialLinks.jsx / .css
│   ├── data/                # all editable content lives here
│   │   ├── profile.js       # name, tagline, about text, contact/social links
│   │   ├── nav.js            # navbar links
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── experience.js
│   │   └── contact.js        # contact form service options
│   ├── hooks/
│   │   ├── useReveal.js       # scroll-reveal animation
│   │   └── useScrollSpy.js    # active navbar link tracking
│   ├── utils/
│   │   └── helpers.js         # scrollToSection, buildWhatsAppLink
│   ├── styles/
│   │   ├── variables.css      # theme tokens (colors, fonts, spacing)
│   │   └── globals.css        # resets + shared utility classes
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

To update your info (name, projects, skills, experience, contact details),
edit the files in `src/data/` — you never need to touch the component files.

## CSS class names

Class names were simplified from the original BEM-style names
(`hero-section__cards`, `project-card__image-wrap`, `contact-form__field`)
to short, flat names scoped by component (`hero-cards`, `project-image`,
`form-field`). Shared utility classes stay simple: `.btn`, `.btn-primary`,
`.btn-outline`, `.glass-card`, `.container`, `.section`, `.eyebrow`,
`.reveal`, `.reveal-stagger`, `.is-visible`, `.is-active`, `.is-open`.

## Run locally

```bash
npm install
npm run dev
```
