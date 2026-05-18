# [ASE][] Meetup Slides

Slides and supporting documents for the [Augmented Software Engineer][ASE] meetup, authored in Emacs org-mode and published with reveal.js via `org-re-reveal`.

## Prerequisites

- Emacs with org-mode and `org-re-reveal`
- Node.js with Puppeteer installed globally (`npm install -g puppeteer`)
- `pdflatex` for document PDF generation

## Usage

Run `make publish` to build slide HTML, slide PDFs, speaker-note PDFs, document PDFs, and copied external PDFs into `public/`.

### Make targets

| Target | Description |
|---|---|
| `publish` | Build all slide and document outputs into `public/` |
| `clean` | Remove generated files from `public/` |
| `clean-full` | Remove generated HTML/PDF/TeX artifacts outside `public/` and `pdfs/` |

[ASE]: https://www.meetup.com/the-augmented-software-engineer
