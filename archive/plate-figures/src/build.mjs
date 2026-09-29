/**
 * The deck's figures, drawn as plates (2026-09-28).
 *
 * Constantin asked for the diagrams in the manner of Lightfield's "How it works": each
 * idea a stack of thin isometric plates, read top to bottom, with a dotted grid on
 * every plate, hairline strokes, and small objects standing on them. The drawings
 * carry no words. What each plate is lives in the key beside it, in the deck's own
 * type, so a figure never renders in a fallback font and never repeats the slide.
 *
 *   node assets/figures/src/build.mjs
 *
 * writes fig-02, fig-03, fig-04, fig-06 and fig-07 into assets/figures/, and prints
 * each plate's vertical centre as a share of the figure's height: the key's rows in
 * index.html sit on those lines (`--y`).
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..");
const COS = Math.cos(Math.PI / 6);
const n1 = (x) => Math.round(x * 10) / 10;
const pts = (a) => a.map(([x, y]) => `${n1(x)},${n1(y)}`).join(" ");

const STYLE = `
  * { vector-effect: non-scaling-stroke; }
  .e    { fill: none; stroke: rgba(23,23,26,.42); stroke-width: 1; stroke-linejoin: round; stroke-linecap: round; }
  .k    { fill: none; stroke: rgba(23,23,26,.78); stroke-width: 1; stroke-linejoin: round; stroke-linecap: round; }
  .f    { fill: none; stroke: rgba(23,23,26,.22); stroke-width: 1; stroke-linejoin: round; stroke-linecap: round; }
  .dash { stroke-dasharray: 3 4; }
  .top  { fill: #ffffff; }
  .side { fill: #f2f2f0; }
  .dots { fill: none; stroke: rgba(23,23,26,.24); stroke-width: 1.3; stroke-dasharray: 0 5.5; stroke-linecap: round; }
  .amb  { fill: none; stroke: rgba(23,23,26,.075); stroke-width: 1; }
  .ink  { fill: #17171a; }
  .no   { fill: none; stroke: #8c2f2a; stroke-width: 1.2; stroke-linecap: round; }
  .nodash { stroke-dasharray: 3 3.5; }
`;

/* ── a figure: ambient grid behind, drawing in front ─────────────────────────── */
class Fig {
  constructor(W, H) { this.W = W; this.H = H; this.back = []; this.front = []; this.plates = []; }
  add(s) { this.front.push(s); }
  svg(title, desc) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${n1(this.W)} ${n1(this.H)}" width="${n1(this.W)}" height="${n1(this.H)}" role="img" aria-labelledby="t d">
<title id="t">${title}</title>
<desc id="d">${desc}</desc>
<style>${STYLE}</style>
<defs>
  <radialGradient id="fade" cx="50%" cy="50%" r="60%">
    <stop offset="45%" stop-color="#fff" stop-opacity="1"/>
    <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
  </radialGradient>
  <mask id="m"><rect width="100%" height="100%" fill="url(#fade)"/></mask>
</defs>
<g mask="url(#m)">${this.back.join("")}</g>
${this.front.join("\n")}
</svg>
`;
  }
  /** Each plate's top-face centre, as a share of the height: where its key row sits. */
  bands() { return this.plates.map((p) => `${n1(((p.oy + p.L / 2) / this.H) * 100)}%`); }
}

/* ── a plate: a thin isometric slab, (u, v) across its top from the back corner ── */
class Plate {
  constructor(fig, ox, oy, L, { t = 7, cells = 10 } = {}) {
    Object.assign(this, { fig, ox, oy, L, t, cells });
    fig.plates.push(this);
  }
  P(u, v, z = 0) { return [this.ox + (u - v) * COS, this.oy + (u + v) * 0.5 - z]; }

  /* The grid the plate sits in, running off its edges and fading out. */
  ambient() {
    const { L, cells } = this, g = L / cells, E = L * 0.55;
    const s = [];
    for (let k = -4; k <= cells + 4; k++) {
      const a = k * g;
      s.push(`<line class="amb" x1="${n1(this.P(a, -E)[0])}" y1="${n1(this.P(a, -E)[1])}" x2="${n1(this.P(a, L + E)[0])}" y2="${n1(this.P(a, L + E)[1])}"/>`);
      s.push(`<line class="amb" x1="${n1(this.P(-E, a)[0])}" y1="${n1(this.P(-E, a)[1])}" x2="${n1(this.P(L + E, a)[0])}" y2="${n1(this.P(L + E, a)[1])}"/>`);
    }
    this.fig.back.push(s.join(""));
    return this;
  }

  draw() {
    const { L, t, cells } = this, g = L / cells;
    const A = this.P(0, 0), B = this.P(L, 0), C = this.P(L, L), D = this.P(0, L);
    const dn = ([x, y]) => [x, y + t];
    const s = [];
    s.push(`<polygon class="side e" points="${pts([B, C, dn(C), dn(B)])}"/>`);
    s.push(`<polygon class="side e" points="${pts([D, C, dn(C), dn(D)])}"/>`);
    s.push(`<polygon class="top e" points="${pts([A, B, C, D])}"/>`);
    for (let k = 1; k < cells; k++) {
      const a = k * g;
      s.push(`<line class="dots" x1="${n1(this.P(a, 0)[0])}" y1="${n1(this.P(a, 0)[1])}" x2="${n1(this.P(a, L)[0])}" y2="${n1(this.P(a, L)[1])}"/>`);
      s.push(`<line class="dots" x1="${n1(this.P(0, a)[0])}" y1="${n1(this.P(0, a)[1])}" x2="${n1(this.P(L, a)[0])}" y2="${n1(this.P(L, a)[1])}"/>`);
    }
    const i = 11;
    for (const [u, v] of [[i, i], [L - i, i], [L - i, L - i], [i, L - i]]) {
      const [x, y] = this.P(u, v);
      s.push(`<ellipse class="e top" cx="${n1(x)}" cy="${n1(y)}" rx="3.2" ry="1.8"/>`);
    }
    this.fig.add(s.join(""));
    return this;
  }

  /* A box standing on the plate: w along u, d along v, from height z0, h tall. */
  box(u, v, w, d, h, { z0 = 0, cls = "e", lines = 0 } = {}) {
    const z1 = z0 + h;
    const T = [this.P(u, v, z1), this.P(u + w, v, z1), this.P(u + w, v + d, z1), this.P(u, v + d, z1)];
    const R = [this.P(u + w, v, z1), this.P(u + w, v + d, z1), this.P(u + w, v + d, z0), this.P(u + w, v, z0)];
    const Lf = [this.P(u, v + d, z1), this.P(u + w, v + d, z1), this.P(u + w, v + d, z0), this.P(u, v + d, z0)];
    const s = [
      `<polygon class="side ${cls}" points="${pts(R)}"/>`,
      `<polygon class="side ${cls}" points="${pts(Lf)}"/>`,
      `<polygon class="top ${cls}" points="${pts(T)}"/>`,
    ];
    /* Courses on a tall box: a silo reads as many records, not one block. */
    for (let k = 1; k <= lines; k++) {
      const z = z0 + (h * k) / (lines + 1);
      s.push(`<polyline class="f" points="${pts([this.P(u, v + d, z), this.P(u + w, v + d, z), this.P(u + w, v, z)])}"/>`);
    }
    this.fig.add(s.join(""));
    return this;
  }

  /* A few records, stacked with air between them. */
  stack(u, v, w, d, n, { h = 3.2, gap = 3, cls = "e" } = {}) {
    for (let k = 0; k < n; k++) this.box(u, v, w, d, h, { z0: k * (h + gap), cls });
    return this;
  }

  /* A chip: a low square with a square set into its top. */
  chip(u, v, s, { cls = "e", mark = false } = {}) {
    this.box(u, v, s, s, 5, { cls });
    const i = s * 0.3;
    const q = [this.P(u + i, v + i, 5), this.P(u + s - i, v + i, 5), this.P(u + s - i, v + s - i, 5), this.P(u + i, v + s - i, 5)];
    this.fig.add(`<polygon class="${cls === "k" ? "e" : "f"} top" points="${pts(q)}"/>`);
    if (mark) this.dot(u + s / 2, v + s / 2, 5, 2.6);
    return this;
  }

  dot(u, v, z = 0, r = 2.5) {
    const [x, y] = this.P(u, v, z);
    this.fig.add(`<circle class="ink" cx="${n1(x)}" cy="${n1(y)}" r="${r}"/>`);
    return this;
  }

  /* A line across the plate through local points; `curve` bends it as a cubic. */
  line(a, b, { cls = "e", z = 0, dash = false } = {}) {
    const [x1, y1] = this.P(a[0], a[1], z), [x2, y2] = this.P(b[0], b[1], z);
    this.fig.add(`<line class="${cls}${dash ? " dash" : ""}" x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}"/>`);
    return this;
  }
  curve(a, c1, c2, b, { cls = "e", z = 0, dash = false, arrow = false } = {}) {
    const [p0, p1, p2, p3] = [a, c1, c2, b].map((q) => this.P(q[0], q[1], z));
    this.fig.add(`<path class="${cls}${dash ? " dash" : ""}" d="M${n1(p0[0])},${n1(p0[1])} C${n1(p1[0])},${n1(p1[1])} ${n1(p2[0])},${n1(p2[1])} ${n1(p3[0])},${n1(p3[1])}"/>`);
    if (arrow) this.head(p2, p3, cls);
    return this;
  }
  arrow(a, b, opts = {}) {
    this.line(a, b, opts);
    this.head(this.P(a[0], a[1], opts.z ?? 0), this.P(b[0], b[1], opts.z ?? 0), opts.cls ?? "e");
    return this;
  }
  head(from, to, cls = "e") {
    const ang = Math.atan2(to[1] - from[1], to[0] - from[0]), s = 6;
    const l = [to[0] - s * Math.cos(ang - 0.45), to[1] - s * Math.sin(ang - 0.45)];
    const r = [to[0] - s * Math.cos(ang + 0.45), to[1] - s * Math.sin(ang + 0.45)];
    this.fig.add(`<polyline class="${cls}" points="${pts([l, to, r])}"/>`);
    return this;
  }

  /* An outline on the plate where something is not. */
  footprint(u, v, w, d, cls = "e") {
    const q = [this.P(u, v), this.P(u + w, v), this.P(u + w, v + d), this.P(u, v + d)];
    this.fig.add(`<polygon class="${cls} dash" points="${pts(q)}"/>`);
    return this;
  }
}

/** Plates of one size, centred, stacked `pitch` apart, drawn bottom first. */
function stackOf(n, { L = 240, pitch = 175, margin = 34, extra = [] } = {}) {
  const W = 2 * L * COS + margin * 2;
  const gaps = Array.from({ length: n }, (_, i) => (i === 0 ? 0 : pitch + (extra[i] ?? 0)));
  const tops = gaps.reduce((acc, g, i) => (acc.push((acc[i - 1] ?? margin) + g), acc), []);
  const H = tops[n - 1] + L + 7 + margin;
  const fig = new Fig(W, H);
  const plates = tops.map((oy) => new Plate(fig, W / 2, oy, L));
  plates.forEach((p) => p.ambient());
  fig.plates = plates;
  return { fig, plates };
}
function write(name, fig, title, desc) {
  writeFileSync(join(OUT, name), fig.svg(title, desc));
  console.log(name.padEnd(24), fig.bands().join("  "), `  ${Math.round(fig.W)}×${Math.round(fig.H)}`);
}

/* ═══ Fig. 06 — the landscape: tools that do the work, tools that hold one slice,
   and the open ground where it would all meet. ═══════════════════════════════ */
{
  const { fig, plates: [work, slice, ground] } = stackOf(3, { L: 240, pitch: 180 });

  ground.draw();
  ground.footprint(78, 78, 84, 84, "k");
  ground.line([120, 106], [120, 134], { cls: "f" }).line([106, 120], [134, 120], { cls: "f" });

  slice.draw();
  for (const [u, v, h] of [[110, 58, 34], [60, 118, 30], [176, 84, 26], [128, 150, 42], [196, 166, 22]]) {
    slice.footprint(u - 8, v - 8, 42, 42, "f");
    slice.box(u, v, 26, 26, h, { lines: Math.round(h / 8) });
  }

  work.draw();
  const steps = [[30, 104], [84, 126], [138, 148], [192, 170]];
  steps.forEach(([u, v], i) => {
    work.chip(u, v, 26);
    if (i < steps.length - 1) work.arrow([u + 30, v + 13 + 4], [steps[i + 1][0] - 5, steps[i + 1][1] + 13 - 1]);
  });
  work.dot(21, 116);

  write("fig-06-landscape.svg", fig,
    "The landscape",
    "Three plates. The top one carries four tools in a row, a trip handed from one to the next. The middle one carries five separate towers of records, each on its own footprint, nothing joining them. The bottom one is empty: a dashed outline where the tools would meet.");
}

/* ═══ Fig. 04 — eleven stages, one wedge: the five we built into, the six after,
   and the six systems read and written at every stage. ════════════════════════ */
{
  const { fig, plates: [wedge, after, systems] } = stackOf(3, { L: 220, pitch: 150 });

  systems.draw();
  for (const [u, v] of [[88, 96], [140, 108], [192, 120], [60, 146], [112, 158], [164, 170]]) {
    systems.stack(u - 14, v - 14, 28, 20, 3);
  }

  after.draw();
  const later = [[24, 92], [44, 136], [78, 170], [122, 186], [166, 178], [196, 146]];
  later.forEach(([u, v], i) => {
    after.chip(u, v, 18, { cls: "f" });
    if (i < later.length - 1) after.line([u + 9, v + 9], [later[i + 1][0] + 9, later[i + 1][1] + 9], { cls: "f", dash: true });
  });

  wedge.draw();
  const five = [[24, 60], [40, 120], [82, 166], [140, 180], [186, 150]];
  five.forEach(([u, v], i) => {
    if (i < five.length - 1) wedge.line([u + 11, v + 11], [five[i + 1][0] + 11, five[i + 1][1] + 11]);
  });
  five.forEach(([u, v], i) => wedge.chip(u, v, 22, { cls: "k", mark: i === five.length - 1 }));
  wedge.arrow([five[4][0] + 26, five[4][1] + 2], [five[4][0] + 30, five[4][1] - 24]);

  write("fig-04-wedge.svg", fig,
    "Eleven stages, one wedge",
    "Three plates. The top one holds five stages in sequence, drawn firmly, the fifth marked: the wedge we built into. The middle one holds the six stages after the sale, drawn faintly. The bottom one holds six stacks of records: the systems read and written at every stage.");
}

/* ═══ Fig. 03 — six systems in, one model, every surface out. ══════════════════ */
{
  const { fig, plates: [sources, model, surfaces] } = stackOf(3, { L: 240, pitch: 175 });

  surfaces.draw();
  const O = [26, 150];
  const outs = Array.from({ length: 6 }, (_, i) => [96 + i * 22, 22 + i * 30]);
  outs.forEach(([u, v]) => surfaces.curve(O, [O[0] + 50, O[1]], [u - 40, v + 10], [u, v + 10]));
  outs.forEach(([u, v]) => surfaces.line([u + 20, v + 10], [240, v + 10]));
  outs.forEach(([u, v]) => surfaces.chip(u, v, 20));
  surfaces.dot(O[0], O[1]);

  model.draw();
  const V = 128;
  model.line([14, V], [226, V]);
  for (const [u, v, above] of [[92, 38, 1], [168, 50, 1], [48, 170, 0], [118, 178, 0], [186, 170, 0]]) {
    const cu = u + 17;
    if (above) model.curve([cu, v + 24], [cu, v + 60], [cu + 16, V - 30], [cu + 16, V]);
    else model.curve([cu, v], [cu, v - 30], [cu - 16, V + 30], [cu - 16, V]);
  }
  for (const [u, v] of [[92, 38], [168, 50], [48, 170], [118, 178], [186, 170]]) model.stack(u, v, 34, 24, 3);

  sources.draw();
  /* Six unlike things, apart: nothing on this plate agrees with anything else. */
  sources.stack(40, 58, 32, 24, 3);
  sources.chip(128, 28, 28);
  sources.box(184, 88, 38, 22, 9);
  sources.chip(40, 160, 24);
  sources.stack(112, 126, 28, 28, 2);
  sources.box(160, 184, 22, 22, 22, { lines: 2 });

  write("fig-03-feed.svg", fig,
    "What feeds the model, and what the model feeds",
    "Three plates. The top one carries six unlike objects, unconnected: the systems the agency already had. The middle one carries five stacks of records joined to one line: one model, one record per thing. The bottom one fans six lines out from a single point to six chips and off the plate: every surface reading from it.");
}

/* ═══ Fig. 07 — the workshop: the log, the prototype with the system inside it,
   and production. ══════════════════════════════════════════════════════════════ */
{
  const { fig, plates: [log, proto, prod] } = stackOf(3, { L: 240, pitch: 180 });

  prod.draw();
  for (const [u, v] of [[78, 78], [140, 78], [78, 140], [140, 140]]) prod.stack(u, v, 26, 26, 2, { cls: "k" });

  proto.draw();
  proto.box(84, 84, 72, 72, 6);
  const core = new Plate(fig, proto.P(84, 84, 6)[0], proto.P(84, 84, 6)[1], 72, { t: 0, cells: 6 });
  fig.plates.pop();
  core.draw();
  /* Four journeys around the core, each arc bowed away from it: the loop. */
  const cen = [120, 120];
  const ring = [[46, 120], [120, 194], [194, 120], [120, 46]];
  ring.forEach((a, i) => {
    const b = ring[(i + 1) % ring.length];
    const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    const c = [mid[0] + (mid[0] - cen[0]) * 0.7, mid[1] + (mid[1] - cen[1]) * 0.7];
    proto.curve(a, c, c, b);
  });
  ring.forEach(([u, v]) => proto.chip(u - 10, v - 10, 20));

  log.draw();
  log.line([30, 150], [214, 150], { cls: "f" });
  [[34, 128], [72, 128], [110, 128], [148, 128], [186, 128]].forEach(([u, v], i) => {
    log.stack(u, v, 22, 16, 2 + (i % 2));
    log.dot(u + 11, 150);
  });

  write("fig-07-workshop.svg", fig,
    "The workshop",
    "Three plates. The top one carries a row of small stacks on a timeline: decisions, dated, in order. The middle one carries a raised square at its centre, the design system, with four journeys looping around it. The bottom one carries four firm stacks in a grid: what graduated to production.");
}

/* ═══ Fig. 02 — three layers, one record: the same field on each layer, one
   read-out beneath, and an overwrite of a lower layer refused. ═══════════════════ */
{
  const { fig, plates: [personal, agency, canonical, readout] } = stackOf(4, { L: 220, pitch: 150, extra: [0, 0, 0, 30] });
  const F = [88, 102, 44, 30];                 // the field: u, v, w, d
  const cu = F[0] + F[2] / 2, cv = F[1] + F[3] / 2;
  /* The field through the layers: a thread from one plate's value up to the next. */
  const thread = (lower, rise, z0 = 6) =>
    fig.add(`<line class="e dash" x1="${n1(lower.P(cu, cv, z0)[0])}" y1="${n1(lower.P(cu, cv, z0)[1])}" x2="${n1(lower.P(cu, cv, rise)[0])}" y2="${n1(lower.P(cu, cv, rise)[1])}"/>`);

  readout.draw();
  readout.stack(F[0], F[1], F[2], F[3], 3, { cls: "k" });
  thread(readout, 180, 18);

  canonical.draw();
  canonical.box(F[0], F[1], F[2], F[3], 6);
  thread(canonical, 150);

  agency.draw();
  agency.box(F[0], F[1], F[2], F[3], 6);
  thread(agency, 150);

  /* The refused overwrite: from a personal note straight down, stopped at the agency
     layer. The one colour in the deck's figures, because it is the one refusal. */
  const G = [150, 40];
  const [gx, gy] = personal.P(G[0] + 14, G[1] + 10, 0);
  const stopY = agency.P(G[0] + 14, G[1] + 10, 0)[1] - 12;
  fig.add(`<line class="no nodash" x1="${n1(gx)}" y1="${n1(gy)}" x2="${n1(gx)}" y2="${n1(stopY - 7)}"/>`);
  fig.add(`<circle class="no" cx="${n1(gx)}" cy="${n1(stopY)}" r="6"/><line class="no" x1="${n1(gx - 4.2)}" y1="${n1(stopY + 4.2)}" x2="${n1(gx + 4.2)}" y2="${n1(stopY - 4.2)}"/>`);

  personal.draw();
  personal.box(F[0], F[1], F[2], F[3], 6);
  personal.box(G[0], G[1], 28, 20, 6);

  write("fig-02-layers.svg", fig,
    "Three layers, one record",
    "Four plates. The same field sits at the same place on the personal, agency and canonical plates, joined by a thread; on the fourth plate the three become one stack, each value attributed. A line from a personal note down towards the agency layer ends in a refusal mark.");
}
