# Enable — case study

The presentation for the Enable case study, and the script for the live section.

- **`index.html`** — the deck. 40 slides, 16:9, keyboard driven.
  `←` `→` or space to move · `F` fullscreen · `N` presenter notes (localhost only).
  After slide 25 the live section runs from `demo-script.md`; the deck resumes at slide 26.
- **`demo-script.md`** — the four journeys driven live in the prototype, with the state
  to start from, the exact path, and the line to land on each.
- **`assets/screens/`** — captures from the prototype at 1440×900 at 2×. Re-shoot them all
  from the prototype with `node evals/deck-screens.mjs <this folder>/assets/screens`.
- **`assets/plates/`** — the historical artefacts: the first build, the 87-field review form,
  the earlier left-rail conflict page.
- **`assets/figures/`** — the isometric figures.
- **`archive/`** — two superseded formats, kept for reference. Not deployed.

The prototype the screens come from is a separate repository, `enable-analogue`.

Presenter notes are a rehearsal tool. They name gaps and staging decisions, so they render
on localhost and are inert anywhere this is published.
