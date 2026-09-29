# Enable — speaker notes

Forty-six slides. Roughly **eight minutes** front, **twenty** live in the prototype,
**fourteen** back. The live section has its own script in `demo-script.md`.

Press `N` on localhost to see the per-slide note on screen. This is the longer
version, in your words, for rehearsing.

Rules for yourself on the day:
- Do not read the slides. They are the evidence; you are the argument.
- Every number you say aloud, say where it came from.
- When you do not know, say you do not know. That is the product's own rule.
- **Every decision in three moves:** the problem it answers, why this and not the
  alternative, and what would change your mind. Never just what you did.
- **The tool is never the subject of a decision.** You decided; the code carried it
  out. "We brought the design system into Claude Code" is a sentence about a tool;
  say why the system had to run in the prototype instead.
- When a challenge lands, defend or propose. Never "that's not something I'm happy
  with." If you agree, say what you would change and why, as a proposal.

---

## FRONT — eight minutes

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

### 6 · Part 1 — The problem (section page)

Read the title and the sentence under it, then move on. The same on every section
page: 6, 11, 19, 27, 30 and 43.

### 7 · The problem

Sixty seconds.

> "This industry runs on a lot of tools, and they split two ways. Some make you
> productive — itinerary builders, booking systems, the things that get a trip out
> of the door. Others own exactly one vertical of your data: your clients, or your
> itineraries, or your drive, or your negotiated terms.
>
> Nobody was building the place where all of that meets. So the advisor is the
> integration layer. They assemble that picture by hand, on every trip."

### 8 · The tools they already had

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

### 9 · Where we built

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
> was building, and none of it is billable."

**Hold on to "three at once".** Every surface slide later answers one part of it, and
you should say which.

### 10 · The design partner

> "A travel agency in Boston. Weekly, for eight months. Every decision in the back
> half of this deck traces to something one of these people said in a room."

Point at the right-hand group: two of them are not employees. Their client lists are
their own asset. That is why the traveller, later, is private by default.

### 12 · What the agency bought

> "One model that ingests everything and makes it available across several surfaces.
> Six systems in, one model, and out to the record, Ask, the briefing, the itinerary,
> the traveller and the vault.
>
> On the right is one record out of the directory, running. Every field carries where
> it came from and when."

The record is live — you can scroll it.

### 13–18 · The surfaces

One slide each, so your arrow keys walk them. Fifteen seconds apiece. Each heading
is the decision; say the problem it answers first, then point.

> **Ask** — "The third quote on the calls slide is the reason for this screen: it’s
> just information from the Internet. So Ask answers only from what the agency holds,
> every claim names its record and how old it is, and a question it cannot answer
> gets ‘I don’t know’, never a guess from the open web."
>
> **The directory** — "Back to the three at once. Commission and amenities only exist
> under a partner programme, so a property shows one tray per programme. Closed, they
> compare: the rate and what guests get. Open, one shows its terms. The version before
> showed one flat commission beside a row of programme names, a number nobody could
> book against. Columns side by side came next, and they stop working at three."
>
> **The briefing** — "The agency lead asked for this one by name. The version before
> was correct and impersonal: equal cards in a grid. This one is written to one
> advisor, opens on her day in sentences, walks what she owes in that order, and
> offers one first move. A grid cannot be ordered by anyone’s day."
>
> **The itinerary** — "The work in progress. Each line brings its programme’s terms
> from the same link the record shows, is checked against what this traveller likes,
> and a property the agency has closed cannot be added at all. The three things held
> in one head are on the line."
>
> **The traveller** — "Who the work is for. Every preference with a source and a
> date; what the product infers is labelled and never applied until a person confirms
> it. And private to the advisor who holds the client, because for the independents
> on slide ten the client list is the business."
>
> **The knowledge vault** — "And this is the way in. Everything the model knows came
> through here or through a connection, with where it came from, when, and who may
> read it, in a word, never a colour alone. An answer is only as trustworthy, and as
> private, as what it was built from."

### 20 · How we worked, and who decided

The constraint that explains the method, and the answer to "how much did the AI do".
Do not apologise for having no Figma files.

> "Our constraint was time. Two calls a week with the design partner, and shipping
> weekly, sometimes twice.
>
> We started in Figma. By the time a design was reviewed and agreed, it was answering
> last week’s call. So the prototype became the specification, and there was always
> something an advisor could use on Thursday.
>
> Every design decision was mine to make and to write down: the problem it serves,
> the evidence, the alternative I turned down, and what would change my mind. Claude
> Code built what that log said. It never wrote the log.
>
> And each rule that has to hold on every screen has a check, because a rule nobody
> checks drifts, and somebody else finds the drift before you do. You will see that
> again at the end."

Offer the decision log or the Notion roadmap. Do not force it; only open it if they
say yes.

### 21 · What the calls produced

Read the first two aloud. Point at the third. Read the agency lead's line slowly.

> "Everything early pointed the same way: they could not find what they already knew.
> There was nowhere to look, and when there was, it was the open web answering
> confidently about restaurants that closed years ago.
>
> Then the agency lead described the product back to us: better than AI, because it
> is all our own vetted data.
>
> So we built them somewhere to look."

### 22–25 · The first build

> "A conversational interface over their own material — Notion, Google Drive, exports
> out of the intranet — with results as cards beside a generated answer.
>
> It demoed well. Then you read the cards. Hotel name. Location. Description. Ask for
> a Japan itinerary and it returns cherry-blossom festivals cited to Reddit, when what
> was needed was the agency's negotiated terms. It was wrong too often to use."

### 26 · Retrieval was never the problem

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

### 28–29 · What changed

> **For the advisors** — time from client request to a personalised first proposal,
> time saved on daily administration, and the ratio underneath both: three to five
> proposals built for every booking that lands, the rest unpaid.
>
> **For the business** — "Bootstrapped, so the outcomes were different. Sign the
> design partner. Have an MVP the sales team could take to the agencies already in
> the pipeline. And give the CEO something tangible enough to put in front of
> investors for letters of intent."

⚠ **Say the method for every number, or drop the number.** See the open list below.

## LIVE — twenty minutes

No handoff slide: after slide 29, switch windows. `demo-script.md` from here. Come back to slide 30, the
section page for the design challenges.

**J1** the day arrives · **J2** a record, and who may see it · **J3** ingestion ·
**J4** an answer, and a refusal.

Protect J2. The conflict resolution lives here now — it is no longer a slide, so
this is the only place it gets told. It now sits inside the Atelier tray of the
Programmes chapter: open the record, scroll to Programmes, and the dispute is on the
tray's own row.

---

## BACK — fourteen minutes

### 31 · The map

> "Four design challenges we worked through. Each one runs the same beats: what we
> tried first, what came back, and where we landed. The fourth is the one a reviewer
> handed us."

### 32–35 · Challenge 1 — a person in the loop on the way in

> "The material arrives unstructured, from a dozen sources in a dozen formats, and
> somebody has to agree how it maps onto a record.
>
> An advisor forwards a rate sheet into the vault, or an administrator connects a
> portal. The extractor proposes records off the back of it — three records waiting
> to be confirmed. Each candidate keeps the file it came from. One has nothing read
> from it at all, because the source line was unreadable: the extractor declining to
> guess.
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

### 36–37 · Challenge 2 — a workspace, not a dashboard

This is where "unclear navigation" gets answered, before anyone raises it.

> "We built the layout every comparable tool uses: a left rail, and the conflict on
> its own page. It worked.
>
> But the rail cost about two hundred and thirty pixels of width permanently, on the
> screens that need it most. And advisors did not move section to section like a
> website — they moved room to room, all day, in a loop, closer to how they use a
> phone than a site. Our users live in an iOS environment, and each room needed to
> feel like its own small app rather than a section of a dashboard.
>
> So navigation went to the bottom, and the decision moved onto the record.
>
> A dock only works if you always know where you are. So a room has one name — the
> same word in the dock, the crumb and the page title — and every list opens the same
> way: select a row to preview it beside the list, open it to go in, and Back puts
> you where you were.
>
> The cost was about seventy pixels of height, and a pattern rare in this category.
> What would change it: if advisors lose their place between rooms, every room in the
> dock gets its label before anything else moves."

### 38–40 · Challenge 3 — changing a record at the right level

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
> And the whole agency waits for the agency owner to release it. An advisor can
> propose the agency's position. They cannot set it.
>
> A reason is required, and the button says what will happen before it happens —
> Save change, or Send for release.
>
> And then the same question about the other verb. Who a change is for, and who a
> record is for, are the same question — one about writing, one about reading.
> Private by default. The full profile lets a colleague edit every field but never
> share it on or delete it. Name and contact only is for an introduction. And spend
> sits behind the commission entitlement whatever you choose, because who you trust
> with a client is a different question from who you trust with the numbers."

### 41–42 · Challenge 4 — details that hold on every screen

**Own it, then answer it. Do not apologise, and do not linger on 41.**

> "A reviewer found three inconsistencies on one screen. A legend whose colours
> disagreed with the states it named. Two counts on the same page written two
> different ways. A selected row that did not look selected until you had already
> acted on it. Each was in front of us, and none was caught, because nothing was
> checking.
>
> So a detail that has to hold everywhere became a rule, and the rule got a check.
>
> Colour means severity and nothing else: ochre is a decision waiting, claret is a
> blocker, every other state is a word. A legend cannot disagree with a colour that
> only ever means one thing.
>
> One name for one thing: the dock, the crumb and the title say the same word, and a
> count is written the same way wherever it appears.
>
> Selected is lifted, not tinted: the chosen row rises off the page, so it reads as
> chosen before you act on it.
>
> And each rule has a check that runs before anyone looks: three hundred and twelve
> assertions, across twenty-four screens and both roles, green before every capture
> in this deck. The rule is mine. The check is how it stays true."

Point at the screen as you say each one: the lifted row; the ochre on the commissions
still waiting for a decision against the word "chased" on Aurelia; the same name in
the crumb and the title.

### 44 · What I would do next

Two minutes, then stop. Point at the document first — they saw it on slide nine as the
thing an advisor assembles by hand across six systems.

> "We built everything up to stage five and never built what stage five produces.
>
> A templated presentation, so this stops being assembled by hand every trip.
>
> The client’s own copy of it — one place their trip lives, instead of a PDF in a thread.
>
> And their advisor writing notes into it while they are travelling, rather than
> emailing them."

That last one closes the loop with the advisor on slide 21 whose rate changes were
arriving by email.

### 45 · To close

Do not re-explain these. They saw them before the demo.

> "Eight months. Two calls a week, shipping every week.
>
> Half the time to assemble an itinerary. About two hours a day back per advisor.
> Fifteen per cent more commission on the same trips.
>
> The design partner signed. The MVP was sellable to the next agency. And the company
> went out to investors on the back of it."

Ending here rather than on the gap matters: the thing we never built is a gap in
something that worked.

### 46 · Questions

Stop talking. Ten minutes.

---

## Questions you will be asked, and the answer

Drafted from the decision log (`enable-analogue/docs/rebuild/decisions.md`). **Rewrite
each answer in your own words before you rehearse it** — the point is that the
reasoning is yours. Rehearse the follow-up too, not only the first answer: the panel
expects you to go a level deeper unprompted.

Every answer has the same three moves: the problem, why this and not the alternative,
and what would change your mind.

**"Could you have shipped something smaller first?"**
Answer it before they have to push: "Yes. A forwarding address for
partner emails, sending back the commission opportunities in them. I would ship it
first today, as the vault's first door. We didn't then because a list can't know
whether the property suits the traveller or whether the agency books the programme,
and with one team it was one or the other." Never "we could have done both".

**"How much of this did the AI decide?"**
"None of the decisions. Each one is in the log with the problem it serves, the
evidence, the alternative I turned down and what would change my mind. Claude Code
built what the log said and runs the checks that keep it true." Then one example you
made yourself, with its reason: commission was one flat rate on the record; you
reorganised it by programme because a rate only exists under one, and moved from
columns to trays when a property in several programmes stopped being readable.
Offer to open the log.

**"The navigation is unusual. Why not a sidebar?"**
Width (230 pixels, on the record, which needs it most), the room-to-room loop, and an
iOS habit. The alternative is the rail: you built it first, and it worked. Legibility
comes from one name per room and one way to open anything. What would change it:
advisors losing their place between rooms, and then the dock gets a label on every
room first.

**"Isn't the briefing just a dashboard?"**
"A dashboard is equal cards, and it can't be ordered by anyone's day. This is written
to one advisor, opens on her day in sentences with the figures inline, walks what she
owes in that order, and offers one first move." The test it passes: someone who has
never seen it names the advisor and her first task in one sentence. The alternative
was the first version, five cards: correct, and impersonal.

**"Why trays? Why not a comparison table of programmes?"**
"A table compares rows of the same shape, and programme terms aren't: one has an
incentive, one a negotiated perk, one a disputed rate. The closed trays are the
comparison — programme, rate, what guests get — and one opens to its terms." Columns
side by side came first and stop working at three programmes. What would change it:
if advisors open every tray every time, add a view comparing the two they choose.

**"Why not let the extractor confirm the fields it is sure about?"**
"Because nothing reaches an answer until a named person agrees to it, and the name is
the audit. Confidence tells the reviewer where to look, and confirming the sure ones
is one act. A commission with no programme named is held however clearly it was read,
because a rate without a programme cannot be checked." What would change it: a class
of field that reads cleanly and is never corrected across a season of reviews could
confirm in a batch, still with the reviewer's name on it.

**"There's an inconsistency on this screen." (found live)**
Do not concede and stop. Name it, name the rule it breaks, say whether a check covers
it, and say the fix: "That's a count written two ways. The rule is one form per count;
the lexicon check should have caught it, and I'll add the case." Then move on.

**"What would you do differently?"**
The forwarding address first. And stage five, the proposal (slide 44).

---

## Open before you present

1. **The metrics on 28 and 29.** Say the method for each figure or cut it. Any number
   you cannot source is worse than no number in front of these two.
2. **The quotes on slide 21** are attributed by role because that is all the
   transcripts carry. If you know which advisor said which, name them.
3. **The smaller-version answer.** Confirm that forwarding was the smaller version
   discussed, and when. The answer's shape holds either way; the facts must be yours.
4. **The demo script predates the two-role build.** It still names a "colleague" role
   and J. Dubois. Re-walk all four journeys against the current prototype before the
   day.
5. **Both repos are public.** The deck and the app.
6. If you present from the deployed deck, the live record on slide 12 needs the app's
   Vercel deploy to be current. From localhost, both are running.
