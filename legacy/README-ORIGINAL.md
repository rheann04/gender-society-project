# Teenage Pregnancy sa Pilipinas

A gender-responsive digital platform for a "Gender and Society" class project, focusing on teenage pregnancy in the Philippines and the role of comprehensive sexuality education (CSE).

## Project Overview

This website addresses teenage pregnancy as a central issue, promoting gender awareness, equality, inclusion, empowerment, and social responsibility. It provides verified statistics, explains causes and effects, outlines relevant laws and policies, offers interactive learning features, and lists resources for help.

**Tone:** Honest, warm, non-judgmental, never shaming. Includes teen mothers AND teen fathers. Safe for a school audience (no explicit content, no graphic images, medical info stays factual and age-appropriate).

## How to Run

### Local Development

1. **Clone or download this project folder**
2. **Open `index.html` in your browser**
   - Simply double-click `index.html` to open it in your default web browser
   - No build step, no server required
   - All files are plain HTML, CSS, and vanilla JavaScript

### Using a Local Server (Optional)

If you prefer using a local server (for example, to avoid CORS issues with some browsers):

```bash
# Using Python 3
python -m http.server

# Using Python 2
python -m SimpleHTTPServer

# Using Node.js (with http-server installed)
npx http-server
```

Then open `http://localhost:8000` (or the port shown) in your browser.

## How to Deploy

### GitHub Pages

1. **Create a GitHub repository** and upload all files
2. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "main" branch as source
   - Save
3. **Your site will be live at:** `https://yourusername.github.io/repository-name`

### Netlify

1. **Go to [Netlify Drop](https://app.netlify.com/drop)**
2. **Drag and drop the project folder** onto the page
3. **Your site will be live instantly** with a random URL (you can customize it)

## Project Structure

```
project-folder/
├── index.html              # Landing page
├── the-numbers.html        # Statistics and charts
├── why-it-happens.html     # Causes and effects
├── know-the-law.html       # Interactive law explorer
├── learn-and-play.html     # Interactive features (Myth/Fact, Tanong Box, story)
├── get-help.html           # Hotlines and resources
├── about-us.html           # Team information
├── references.html         # APA citations
├── styles.css              # Shared CSS file
├── assets/
│   └── photos/             # Photo folder (currently contains placeholders)
├── README.md               # This file
├── TODO-VERIFY.md          # Items that need verification
└── PHOTO-CREDITS.md        # Photo credits and guidelines
```

## How to Edit Group Details

To customize this project for your group:

### 1. Edit `about-us.html`

Open `about-us.html` and look for the sections marked with `[EDIT:]`:

```html
<!-- Course Information (EDITABLE) -->
<section class="yellow-pad torn-edge">
  <h2 class="handwritten-red">Course Information</h2>
  <p><strong>Course:</strong> Gender and Society</p>
  <p><strong>Section:</strong> [EDIT: Enter your section]</p>
  <p><strong>School:</strong> [EDIT: Enter your school name]</p>
  <p><strong>School Year:</strong> [EDIT: Enter school year]</p>
  <p><strong>Instructor:</strong> [EDIT: Enter instructor name]</p>
</section>
```

Replace the `[EDIT:]` placeholders with your actual information.

### 2. Edit Team Members

In the same file, find the team member cards:

```html
<div class="paper-clip-card">
  <h3>[EDIT: Member Name]</h3>
  <p class="handwritten">Role: [EDIT: e.g., Researcher, Writer, Designer]</p>
  <p style="margin-top: var(--space-md);">
    <em>"[EDIT: Short reflection...]"</em>
  </p>
</div>
```

Add or remove member cards as needed for your group size.

### 3. Edit Contact Information

At the bottom of `about-us.html`, edit the contact section:

```html
<p>
  <strong>Email:</strong> [EDIT: Enter group email if available]<br>
  <strong>School:</strong> [EDIT: Enter school contact if applicable]
</p>
```

## How the References System Works

### Citation Numbers

Throughout the website, you'll see superscript citation numbers like `<sup>[1]</sup>`, `<sup>[2]</sup>`, etc. These correspond to the numbered references in `references.html`.

### Adding New References

1. **Add the source to `references.html`** in the numbered list
2. **Use the corresponding number** in your content: `<sup>[20]</sup>` for the 20th reference
3. **Update the reference list** to maintain proper numbering

### APA 7th Edition Format

All references follow APA 7th edition format. When adding new sources:

- Government publications: Include agency name, year, title, and URL
- Laws: Include Republic Act number, full title, and official source
- Websites: Include author (if available), year, title, and URL with access date if needed

### Example

In your content:
```html
<p>Teenage pregnancy declined from 8.6% in 2017 to 5.4% in 2022<sup>[1]</sup>.</p>
```

In `references.html`:
```html
<li id="ref-1">
  Philippine Statistics Authority. (2023, January 20). <em>Teenage pregnancy declined from 8.6 percent in 2017 to 5.4 percent in 2022</em>. https://psa.gov.ph/content/teenage-pregnancy-declined-86-percent-2017-54-percent-2022
</li>
```

## Design System

### Notebook / School Paper Aesthetic

The website uses a school notebook design with:
- Cream notebook paper background with blue ruled lines and red margin
- Spiral binding holes on the left edge
- Graph paper and yellow pad alternatives for variety
- Handwritten-style fonts for notes (Caveat/Gaegu)
- Pencil graphite text color (#2B2B2E)
- Ballpoint blue for annotations (#1F4FD8)
- Teacher's red pen for emphasis (#D93025)
- Highlighter yellow (#FFE45C) and pink (#FF8FB8)

### Typography

- **Headings:** Fraunces or Bitter (Google Fonts)
- **Body text:** IBM Plex Sans or Atkinson Hyperlegible (Google Fonts)
- **Handwritten notes:** Caveat or Gaegu (Google Fonts)

### Color Palette

```css
--graphite: #2B2B2E          /* Main text */
--ballpoint-blue: #1F4FD8    /* Annotations */
--teacher-red: #D93025       /* Emphasis/corrections */
--highlighter-yellow: #FFE45C /* Highlights */
--highlighter-pink: #FF8FB8  /* Alternative highlights */
--paper-cream: #FFF8E7       /* Notebook paper */
--paper-white: #FFFFFF       /* White paper */
--graph-paper: #F0F5F5       /* Graph paper */
```

## Accessibility Features

- Semantic HTML structure
- Skip link for keyboard navigation
- Visible focus states
- WCAG AA contrast ratios
- Alt text for images
- Keyboard-operable interactive elements
- Respects `prefers-reduced-motion` preference
- ARIA labels and roles for interactive components

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design
- Tested at 360px, 768px, and 1280px breakpoints

## Performance

- No external frameworks or libraries
- Inline SVG instead of heavy images
- System font fallbacks
- Minimal JavaScript
- Fast loading times

## Content Guidelines

### What We Did

- Verified all statistics from credible sources (PSA, DOH, POPCOM, etc.)
- Used only real laws from Official Gazette and Lawphil
- Verified hotline numbers from official agency websites
- Included at least 8 verified statistics
- Included at least 5 laws/policies
- Included at least 6 other referenced claims
- Marked unverified items with `[TO VERIFY]`

### What to Avoid

- Do not invent or guess statistics, laws, or hotlines
- Do not add explicit content or graphic images
- Do not use shaming language
- Do not blame only girls — include teen fathers
- Do not use AI-generated or templated design elements

## Photo Guidelines

### Photo Usage

- Maximum of 8 photos across the entire site
- Photos styled to fit notebook theme (taped, paper-clipped, rotated)
- Currently: All photos are placeholders (marked with "REPLACE WITH OUR PHOTO")
- Replace placeholders with actual photos before final submission

### Photo Requirements

- No faces of identifiable minors
- No stock photos of crying, ashamed, or "dramatic" pregnant teens
- Prefer non-identifying subjects: school hallways, notebooks, hands, health center signs, desks, bags, jeepney windows, barangay halls
- Every photo needs: meaningful alt text, visible caption, lazy loading
- File size under 150 KB (compress before adding)
- Explicit width/height to avoid layout shift
- Use free-license sources (Unsplash, Pexels, Wikimedia Commons) or own photos

### Photo Styling

Photos use the `.notebook-photo` class with optional modifiers:
- `.taped` - Tape effect at top
- `.clipped` - Paper clip effect at top left
- `.photocopy` - Grayscale, high-contrast filter
- `.high-contrast` - Increased contrast filter
- `.placeholder` - Blurred with "REPLACE WITH OUR PHOTO" overlay

Example:
```html
<div class="notebook-photo taped placeholder">
  <img src="assets/photos/PLACEHOLDER-school-hallway.jpg" alt="Description" width="400" height="300" loading="lazy">
  <div class="photo-caption">Caption text</div>
</div>
```

### Photo Credits

All photo sources, photographers, and license information are documented in `PHOTO-CREDITS.md`. Update this file when adding or replacing photos.

## License

This is a school project. Please use responsibly and cite sources appropriately.

## Support

For questions about this project or issues with the code, please consult your instructor or teaching assistant.

---

**Created for:** Gender and Society class
**Topic:** Teenage Pregnancy in the Philippines
**Focus:** Comprehensive Sexuality Education as part of the solution
