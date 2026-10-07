# Teenage Pregnancy sa Pilipinas
## Gender and Society Project - React Version

A school project website about teenage pregnancy in the Philippines, built with React, Vite, and React Router. The site promotes comprehensive sexuality education as the main response to teenage pregnancy.

## Features

- **8 Pages**: Home, The Numbers, Why It Happens, Know the Law, Learn & Play, Get Help, About Us, References
- **3 Interactive Games**: Myth or Fact quiz, Tanong Box Q&A, and a branching story (Ano'ng Gagawin Mo?)
- **Notebook Design**: School notebook aesthetic with spiral binding, ruled lines, sticky notes, paper clips, and hand-drawn elements
- **Responsive Design**: Works on mobile (360px+), tablet (768px+), and desktop (1280px+)
- **Accessibility**: WCAG AA compliant, keyboard navigable, semantic HTML, skip links
- **References System**: Every statistic and claim is cited with superscript links to the References page

## Tech Stack

- **Framework**: React 19 with Vite
- **Routing**: React Router DOM with HashRouter (for GitHub Pages compatibility)
- **Styling**: Plain CSS with CSS variables (no frameworks or UI kits)
- **Fonts**: Google Fonts (Caveat, Fraunces, IBM Plex Sans)
- **Build Tool**: Vite

## Installation

```bash
npm install
```

## Running the App

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production build will be in the `/dist` folder.

## Editing Content

All content is stored in `/src/data/` files, not hard-coded in JSX. Group members can edit these files without touching code:

- **`/src/data/references.js`**: All reference citations (APA 7th edition)
- **`/src/data/mythFacts.js`**: Myth or Fact game questions and answers
- **`/src/data/tanongQuestions.js`**: Tanong Box Q&A items
- **`/src/data/story.js`**: Branching story nodes and choices
- **`/src/data/members.js`**: Team member information and course details
- **`/src/data/hotlines.js`**: Agency and crisis-support contact details; unverified fields are marked on the Help page and listed in `TODO-VERIFY.md`

### Editing Team Information

Edit `/src/data/members.js` to update:
- Team member names, roles, and reflections
- Course information (section, school, school year, instructor)

### Editing Photos

The site currently uses the photos already present in `/src/assets/photos/` and only keeps meaningful, verified images. When adding new photos:
- Keep only images that are already in the project or that you have verified permission to use
- Do not use stock or sourced photos without a clear license or proper credit
- Keep file sizes reasonable and avoid adding unused images
- Update `PHOTO-CREDITS.md` and `TODO-VERIFY.md` with source and credit status

## Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `/dist` folder to GitHub Pages (either via gh-pages branch or GitHub Actions)

3. The Vite config is already set with `base: './'` for HashRouter compatibility

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `/dist` folder to Netlify

3. No special configuration needed

## References System

The site uses a custom `<Cite />` component that:
- Renders superscript numbers in order of first appearance
- Links to the matching entry on the References page
- Shows a warning in development if a citation ID is missing or invalid

Usage in JSX:
```jsx
import Cite from '../components/Cite';

<p>Some statistic<Cite id={1} /> with a citation.</p>
```

## Project Structure

```
/
├── src/
│   ├── components/     # Reusable components
│   │   ├── Cite.jsx
│   │   ├── Footer.jsx
│   │   └── SideTabs.jsx
│   ├── data/           # All content (editable without code)
│   │   ├── members.js
│   │   ├── mythFacts.js
│   │   ├── references.js
│   │   ├── story.js
│   │   └── tanongQuestions.js
│   ├── games/          # Interactive game components
│   │   ├── AnongGagawinMo.jsx
│   │   ├── MythOrFact.jsx
│   │   └── TanongBox.jsx
│   ├── pages/          # Page components
│   │   ├── AboutUs.jsx
│   │   ├── GetHelp.jsx
│   │   ├── Home.jsx
│   │   ├── KnowTheLaw.jsx
│   │   ├── LearnAndPlay.jsx
│   │   ├── References.jsx
│   │   ├── TheNumbers.jsx
│   │   └── WhyItHappens.jsx
│   ├── assets/         # Static assets (photos)
│   ├── App.jsx          # Main app with routing
│   ├── index.css       # Global styles
│   └── main.jsx        # Entry point
├── legacy/             # Original HTML/CSS version (preserved)
├── index.html          # HTML template
├── package.json
├── vite.config.js      # Vite configuration
└── README.md
```

## Design Notes

### Color Palette
- Graphite: #2B2B2E
- Ballpoint Blue: #1F4FD8
- Teacher's Red: #D93025
- Highlighter Yellow: #FFE45C
- Highlighter Pink: #FF8FB8
- Paper Cream: #FFF8E7

### Typography
- **Handwritten**: Caveat (for notes and labels only)
- **Headings**: Fraunces
- **Body**: IBM Plex Sans (with Atkinson Hyperlegible fallback)

### Accessibility Features
- Skip link for keyboard users
- Visible focus states
- ARIA labels and roles
- Semantic HTML structure
- Reduced motion support
- Keyboard navigation for all interactive elements
- Color never used as the only indicator (icons/text added)

## Content Verification

All statistics, laws, and hotline numbers are verified from official sources:
- Philippine Statistics Authority (PSA)
- Official Gazette of the Philippines
- Lawphil
- Department of Health (DOH)
- Commission on Population and Development (POPCOM)
- Department of Education (DepEd)
- UNFPA Philippines, UNICEF, WHO

See `TODO-VERIFY.md` for items that need current verification.

## License

This is a school project. Content is for educational purposes only. Not medical or legal advice.

## Credits

Created for Gender and Society class. Original HTML/CSS version preserved in `/legacy` folder.
