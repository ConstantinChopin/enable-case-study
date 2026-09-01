# Enable — speaker notes

Thirty-six slides. Roughly **seven minutes** front, **twenty** live in the prototype,
**twelve** back. The live section has its own script in `demo-script.md`.

Press `N` on localhost to see the per-slide note on screen. This is the longer
version, in your words, for rehearsing.

Rules for yourself on the day:
- Do not read the slides. They are the evidence; you are the argument.
- Every number you say aloud, say where it came from.
- When you do not know, say you do not know. That is the product's own rule.

---

## FRONT — seven minutes

### 1–4 · Prior work

Six seconds each. You name them aloud; nothing on the slides does.

> "Replika, the AI companion. I led design engineering on memory and onboarding,
> forty-two million users." → "Parable, an intelligence layer for enterprise
> operations. Sole designer, Figma into code." → "Pendulum, multimodal search, zero
> to one, for R/GA, WPP and Kering." → "Lightnote, a creative toolkit that lived in
> the terminal and was given a canvas. Open source."

### 5 · Enable

> "Enable. I was the founding product designer. A single source of truth for luxury
> travel."

### 6 · The problem

Sixty seconds.

> "This industry runs on a lot of tools, and they split two ways. Some make you
> productive — itinerary builders, booking systems, the things that get a trip out
> of the door. Others own exactly one vertical of your data: your clients, or your
> itineraries, or your drive, or your negotiated terms.
>
> Nobody was building the place where all of that meets. So the advisor is the
> integration layer. They assemble that picture by hand, on every trip."

### 7 · The tools they already had

**The top row is one property in three places.** Do not narrate all six.

> "Four Seasons Red Sea at Shura Island. The intranet post announces it opens in 2027.
> The note right beside it — same property, same week — has the only thing actually
> worth knowing — ask for an overwater room, the garden rooms are a long walk from
> anything, and don’t sell it as a spa trip. The partner email, third, carries the offer.
>
> Then read the last line of that note out loud: ‘launch rate looked like it might be
> twenty per cent but I need to confirm with the rep, the email is somewhere in my
> inbox.’
>
> Nothing joins these three. The advisor is the join."

Bottom row is the rest of the stack — a GDS that looks like 1985 next to a client trip
app from last year. Point, do not narrate.

If asked: the note is a reconstruction of the kind an advisor keeps; the other five are
real. Contact details are redacted throughout.

### 8 · Where we built

Do not walk the eleven stages. **This is where you say why the wedge, and why now.**

> "An advisor’s sale runs across eleven stages. We built into the first five.
>
> By stage five they have to produce that document on the right — the artefact that
> makes a recommendation official, the thing the client reads and books from. And
> everything in it was gathered by hand, across the six systems on the left.
>
> Roughly seventy-two hours to assemble one proposal that way. Three to five revisions
> before it is fit to send. And the part that really does not survive being done by
> hand: a property is only the right answer if the portal it came from pays well, the
> amenities suit this particular traveller, and it matches what they have already said
> they like. An advisor holds all three in their head, per option, per trip.
>
> That front stretch is where the knowledge work concentrates, it is where nobody else
> was building, and none of it is billable.
>
> We went there because we wanted to go to market fast and there was a real opening —
> nobody was trying to be the single source of truth, everyone else owned a vertical.
> And we were AI-native from the first commit, where the competition were older tools
> that would need years to catch up to where we could start."

### 9 · The design partner

> "A travel agency in Boston. Weekly, for eight months. Every decision in the back
> half of this deck traces to something one of these people said in a room."

### 10 · What the agency bought

> "One model that ingests everything and makes it available across several surfaces.
> Six systems in, one model, and out to the record, Ask, the briefing, the itinerary,
> the traveller and the vault.
>
> On the right is one record out of the directory, running. Every field carries where
> it came from and when."

The record is live — you can scroll it.

### 11–15 · The surfaces

One slide each, so your arrow keys walk them. Ten to fifteen seconds apiece. The
numbers match the diagram you were just on. The record is not among them — you
have just had it live on the previous slide.

> **Ask** — "The door people expect. It answers out of the model rather than the web,
> and every line is cited to a record it can name."
>
> **The briefing** — "The morning screen. What changed overnight, what expires soon,
> what is waiting on somebody. The agency lead asked for this one by name."
>
> **The itinerary** — "The work in progress. Nothing is re-keyed — a rate here is the
> same value the record holds, not a copy."
>
> **The traveller** — "Who the work is for. Every preference with a source and a date,
> and what the product suggests kept separate from what a person confirmed."
>
> **The knowledge vault** — "And this is the way in. Everything the model knows
> arrived through here or through a connection."

### 16 · How we worked

The constraint that explains the method. Do not apologise for having no Figma files.

> "Our constraint was time. We had to validate an MVP fast, we were shipping weekly
> and sometimes twice, and we had two calls a week with the design partner.
>
> We started in Figma. I was reviewing designs with the product manager and we were
> not going fast enough for that cadence. So we moved to a code-first approach — the
> prototype became the specification, and it kept moving.
>
> The PM owned the roadmap and held the scope so the engineers had something
> workable. My job was to take what came out of those calls and shape it into
> journeys that made sense to use."

### 17 · What the calls produced

Read the first two aloud. Point at the third. Read the agency lead's line slowly.

> "Everything early pointed the same way: they could not find what they already knew.
> There was nowhere to look, and when there was, it was the open web answering
> confidently about restaurants that closed years ago.
>
> Then the agency lead described the product back to us: better than AI, because it
> is all our own vetted data.
>
> So we built them somewhere to look."

### 18–19 · The first build

> "A conversational interface over their own material — Notion, Google Drive, exports
> out of the intranet — with results as cards beside a generated answer.
>
> It demoed well. Then you read the cards. Hotel name. Location. Description. Ask for
> a Japan itinerary and it returns cherry-blossom festivals cited to Reddit, when what
> was needed was the agency's negotiated terms. It was wrong too often to use."

### 20 · Retrieval was never the problem

**The intellectual move of the whole project. Say the headline, then stop.**

> "Retrieval was never the problem. It was three kinds of data pretending to be one.
>
> Pointing a model at their files gave confident answers that were wrong often enough
> to lose an advisor inside a week. And when one was right, it was sometimes right
> about a commission the reader was not entitled to see.
>
> Then we looked at what was actually in there. Canonical industry data — what a
> property is, published once, shared by every agency, and not theirs to edit. Agency
> data — the negotiated terms, the commercially sensitive layer. And personal data, an
> advisor’s own notes. Three kinds, in the same folders, and nothing saying which was
> which.
>
> So permission became a property of the record rather than a filter on the output.
> Everything lands private by default. Every reverse lookup is gated by the record’s
> own sharing rules, and commission sits behind its own entitlement on top of that. An
> answer cannot leak what the model will not join in the first place.
>
> And we wrote the target so it could fail: Time to Trusted Answer. An answer only
> counts with its sources, its freshness, a confidence label or a plain ‘I don’t know’
> — and zero permission leakage."

Walk the figure bottom to top — canonical, agency, personal, and the combined read-out
on the right. Land on the refused overwrite: a change is stored **above** a layer, never
over it, and that is what makes the whole thing auditable.

### 21–22 · What changed

> **For the advisors** — time from client request to a personalised first proposal,
> time saved on daily administration, and the ratio underneath both: three to five
> proposals built for every booking that lands, the rest unpaid.
>
> **For the business** — "Bootstrapped, so the outcomes were different. Sign the
> design partner. Have an MVP the sales team could take to the agencies already in
> the pipeline. And give the CEO something tangible enough to put in front of
> investors for letters of intent."

⚠ **Say the method for every number, or drop the number.** See the open list below.

### 23 · Handoff

> "Rather than describe it, let me use it."

Switch windows. `demo-script.md` from here. Come back to slide 24.

---

## LIVE — twenty minutes

**J1** the day arrives · **J2** a record, and who may see it · **J3** ingestion ·
**J4** an answer, and a refusal.

Protect J2. The conflict resolution lives here now — it is no longer a slide, so
this is the only place it gets told.

---

## BACK — twelve minutes

### 24 · The map

> "Three design challenges we worked through. Each one runs the same beats: what we
> tried first, what came back from the desk, and where we landed. After the three
> there is one more thing, which is a mistake of mine nobody caught."

### 25–28 · Challenge 1 — a person in the loop on the way in

> "The material arrives unstructured, from a dozen sources in a dozen formats, and
> somebody has to agree how it maps onto a record.
>
> An advisor forwards a rate sheet into the vault, or an administrator connects a
> portal. The extractor proposes records off the back of it, and the vault tells you
> so — three records waiting to be confirmed — which is the way through to the queue.
> Each candidate keeps the file it came from. One is held rather than proposed,
> because the source line was unreadable: the extractor declining to guess.
>
> The rule was not negotiable — nothing reaches an answer, a card or a search until a
> named person confirms it. So the only question was what confirming one should cost.
>
> First we gave them the whole mapping. Every field, by hand. Field eleven of
> eighty-seven, record three of two hundred and fourteen. They had asked for it, and
> when your business is the terms being right, that is not paranoia.
>
> It worked, and nobody was ever going to finish it.
>
> So we changed what confirming means. Every field arrives already filled, with the
> line it came from and where in the document that line sits. Each carries how
> confident the extraction is, so you know which rows to actually look at. Eighteen
> fields on this one record, three of them held rather than proposed — and the empty
> one is recorded as silence rather than guessed at. You validate rather than type. And confirming stamps the record with your name and the
> date — every value on this record traces to somebody who agreed to it."

### 29–30 · Challenge 2 — a workspace, not a dashboard

> "We built the layout every comparable tool uses: a left rail, and the conflict on
> its own page. It worked.
>
> But the rail cost about two hundred and thirty pixels of width permanently, on the
> screens that need it most. And advisors did not move section to section like a
> website — they moved workspace to workspace, all day, in a loop, closer to how they
> use a phone than a site. Our users live in an iOS environment, and each room needed
> to feel like its own small app rather than a section of a dashboard.
>
> So navigation went to the bottom, and the decision moved onto the record. Resolving
> a rate stopped being a page of its own — it only makes sense while you can still see
> the fields it sits among.
>
> The cost was about seventy pixels of height, permanently, and a pattern rare enough
> here that it only reads as considered if it behaves well."

### 31–33 · Challenge 3 — changing a record at the right level

> "An advisor corrects a rate. That might be a note to themselves, or something their
> desk needs, or the agency changing its official position — and whoever reads it next
> has to know which. The first version gave them a text box and stored whatever they
> typed. It never asked who the change was for.
>
> Left screen: you are on the record in edit mode, and every field has grown its own
> Edit button. Right screen: the sheet. The scope question comes first, before the
> value, because it is the one an advisor gets wrong. Just me, my team, or the whole agency — each with the people it
> means written underneath it.
>
> Scope decides the layer, so a private correction never becomes the agency's position
> by accident, and the canonical value underneath stays readable.
>
> And agency-wide goes to a lead for review. An advisor can propose the agency's
> position. They cannot set it.
>
> A reason is required, and the line above the button says what will happen before it
> happens — live immediately, or waiting on review.
>
> And then the same question about the other verb. Who a change is for, and who a
> record is for, are the same question — one about writing, one about reading.
> Private by default. Collaborator Full can edit and run the profiling but never
> re-share. Basic is a name and a contact. And spend sits behind the commission
> entitlement at every tier, because who you trust with a client is a different
> question from who you trust with the numbers."

### 36 · Reflection

> "What I would challenge if I picked it up again."

### 37 · Questions

Stop talking. Ten minutes.

---

## Open before you present

1. **The metrics on 21 and 22.** Say the method for each figure or cut it. Any number
   you cannot source is worse than no number in front of these two.
2. **The quotes on slide 17** are attributed by role because that is all the
   transcripts carry. If you know which advisor said which, name them.
3. **Both repos are public.** The deck and the app.
4. If you present from the deployed deck, the live record on slide 10 needs the app's
   Vercel deploy to be current. From localhost, both are running.
