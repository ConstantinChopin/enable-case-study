# Enable — speaker notes

Thirty-four slides. Roughly **six minutes** front, **twenty** live in the prototype,
**twelve** back. The live section has its own script in `demo-script.md`.

Press `N` on localhost to see the per-slide note on screen. This document is the
longer version, in your words, for rehearsing.

Rules for yourself on the day:
- Do not read the slides. They are the evidence; you are the argument.
- Every number you say aloud, say where it came from.
- When you do not know, say you do not know. That is the product's own rule.

---

## FRONT — six minutes

### 1–4 · Prior work

Four full-bleed slides, no titling. Six seconds each — you name them aloud.

> "Replika, the AI companion. I led design engineering on memory and onboarding,
> forty-two million users." → "Parable, an intelligence layer for enterprise
> operations. Sole designer, Figma into code." → "Pendulum, multimodal search, zero
> to one, for R/GA, WPP and Kering." → "Lightnote, a creative toolkit that lived in
> the terminal and was given a canvas. Open source."

Then straight into Enable. Do not linger.

### 5 · Enable

Ten seconds. Name yourself, name the project, go.

> "Enable. I was the founding product designer. A single source of truth for luxury
> travel."

### 6 · The problem

Sixty seconds. **The point is that the industry is fragmented by vertical.**

> "This industry runs on a lot of tools, and they split two ways. Some of them make
> you productive — itinerary builders, booking systems, the things that get a trip
> out of the door. Others own exactly one vertical of your data: your clients, or
> your itineraries, or your drive, or your negotiated terms.
>
> Nobody was building the place where all of that meets. So the advisor is the
> integration layer. They assemble that picture by hand, on every single trip."

### 7 · The tools they already had

Point at two, not four. Let the gap between them do the work.

> "These are the real products. A GDS terminal that looks like 1985, next to a
> client trip app from last year. None of them holds the commission, the amenities
> and the client at the same time."

If asked: these are the vendors' own product shots, not the partner's instance.

### 8 · Where we built

**Do not walk the eleven stages.**

> "An advisor's sale runs across eleven stages. We built into the first five.
>
> Here is why. By stage five they have to produce that document on the right. That
> is the artefact that makes a recommendation official — the thing the client
> actually reads and books from. Everything in it was gathered by hand, across the
> six systems on the left.
>
> That front stretch is where the knowledge work concentrates, and it is the part
> nobody was building. It is also unpaid. Every hour before stage five is an hour
> nobody pays for."

### 9 · The design partner

Ten seconds. Do not read the names.

> "We worked with a travel agency in Boston. Weekly, for eight months. Every
> decision in the back half of this deck traces to something one of these people
> said in a room."

### 10 · What the agency bought

> "What they bought was a single source of truth — one model that ingests
> everything and then makes it available across several different surfaces.
>
> Six systems in. One model. And out to Ask, the product record, the briefing room,
> the itinerary and the traveller profile.
>
> On the right is one record out of the directory, running. Every field carries
> where it came from and when."

The record is live — you can scroll it. The other surfaces are what you open in
the demo.

### 11 · How we worked

This is the constraint that explains the whole method. Do not apologise for having
no Figma files — this is the reason.

> "Our constraint was time. We had to validate an MVP fast, we were shipping weekly
> and sometimes twice, and we had two calls a week with the design partner.
>
> We started in Figma. I was reviewing designs with the product manager, and we were
> simply not going fast enough for that cadence. So we moved to a code-first
> approach — the prototype became the specification, and it kept moving.
>
> The PM owned the roadmap and held the scope so the engineers had something
> workable. My job was to take what came out of those calls and shape it into
> journeys that made sense to use."

### 12 · What the calls produced

Read the first two aloud. Point at the third. Read the agency lead's line slowly —
**that is the brief you were given, and you followed it.**

> "Everything we heard early pointed the same way: they could not find what they
> already knew. There was nowhere to look. When there was, it was the open web, and
> it answered confidently about restaurants that closed years ago.
>
> And then the agency lead described the product back to us: better than AI, because
> it is all our own vetted data.
>
> So we built them somewhere to look."

### 13–14 · The first build

> "A conversational interface over the agency's own documents — Notion, Google
> Drive, exports out of their intranet — and results as cards.
>
> It demoed well. The conversation flowed, the shelf filled up.
>
> Then you read the cards. Hotel name. Location. Description. Ask it for a Japan
> itinerary and it comes back with cherry-blossom festivals cited to Reddit, when
> what was needed was the agency's own negotiated terms. The model was making too
> many errors to be used."

### 15 · Retrieval was never the problem

**The intellectual move of the project. Say the headline, then stop.**

> "Retrieval was never the problem.
>
> Their own material was not a trustworthy thing to search either. Ninety-three per
> cent of the amenities text across three thousand properties was template
> boilerplate. Commission was arriving under a traveller's name against properties
> that resolved to nothing. And none of it could be switched on until the agency
> knew who would see what.
>
> So the data model came before any screen, and chat became one door among several
> rather than the product."

### 16 · Permission in the data model

**This is the engineering argument, and it is what separates this from a RAG demo.**

> "Pointing a model at their files gave confident answers that were wrong often
> enough that an advisor would abandon the product inside a week. And when one was
> right, it was sometimes right about a commission the reader was not entitled to
> see.
>
> So permission became a property of the record rather than a filter on the output.
> Everything lands private by default. Every reverse lookup is gated by the record's
> own sharing rules, and commission sits behind its own entitlement on top of that.
> An answer cannot leak what the model will not join in the first place.
>
> And we wrote the target so it could fail: Time to Trusted Answer. An answer only
> counts if it arrives with its sources, its freshness, a confidence label or a plain
> 'I don't know' — and zero permission leakage.
>
> The sharing panel on the left is that model showing up on a screen."

### 17–18 · What changed

> **For the advisors** — "Client request to a personalised first proposal. Time
> saved on daily administrative work. And the ratio that makes those hours
> expensive: they build three to five proposals for every booking that lands, and
> the rest are unpaid."
>
> **For the business** — "This was a bootstrapped startup, so the outcomes it was
> judged on were different. Sign the design partner. Have an MVP the sales team
> could take to the agencies in the pipeline. And give the CEO something tangible
> enough to put in front of investors for letters of intent."

⚠ **Say the method for every number, or drop the number.** Which are logged, which
are advisor-reported, which are the agency's own figures. See the open questions
at the end of this file.

### 19 · Handoff

> "Rather than describe it, let me use it."

Switch windows. `demo-script.md` from here. Come back to slide 20.

---

## LIVE — twenty minutes

Four journeys, in `demo-script.md`:
**J1** the day arrives · **J2** a record, and who may see it · **J3** ingestion ·
**J4** an answer, and a refusal.

Protect J2. It is the longest and the most important.

---

## BACK — twelve minutes

### 20 · The map

> "Three design challenges. Every one of them we got wrong first. Each runs the same
> beats — the first attempt, what came back from the desk, and where we landed.
> After the three there is one more thing, which is a mistake of mine nobody caught."

### 21–24 · Challenge 1 — getting records right on the way in

> "First, how the work arrives. An advisor forwards a rate sheet into the vault, or
> an administrator connects a portal, and the extractor proposes records off the
> back of it. Each candidate keeps the file it came from. That row is held rather
> than proposed, because the source line was unreadable — the extractor declining to
> guess.
>
> The rule is that nothing reaches an answer, a card or a search until a named
> person confirms it. That was not negotiable. So the only question was what
> confirming one should cost.
>
> We let them check every field by hand, because that is what they asked for, and
> when your business is the terms being right that is not paranoia. Field eleven of
> eighty-seven. Record three of two hundred and fourteen.
>
> It worked, and nobody was ever going to finish it.
>
> So we kept the check and changed its shape. A fixed list of the questions a travel
> designer actually needs answered, rather than every field in the schema. Each one
> arrives as a card: the claim, the quoted line, the page. Two rows here are held
> rather than offered — a converted figure with no source currency, and boilerplate
> copy. And when a document is silent, that is recorded as silence. An absent answer
> is not a no."

### 25–27 · Challenge 2 — showing a conflict instead of hiding it

> "Three systems said three different things about one commission rate. So we built
> a ranking rule to settle it automatically.
>
> What came back was that there is no authority. Nobody in that building could tell
> me which system was right, because the answer depends on the contract, and the
> contract is the thing in dispute.
>
> So we show all three, and a person has to choose. Every value keeps its source, its
> date, and how many others agree with it. The choice is stored at the agency layer,
> with the reason, so the same conflict is never re-litigated."

### 28–29 · Challenge 3 — a workspace, not a website

> "We built the layout every comparable tool in this category uses — a left rail, and
> the conflict on its own page. It worked.
>
> But the rail cost about two hundred and thirty pixels of width permanently, on
> exactly the screens that need it most. And advisors did not move section to section
> like a website. They moved workspace to workspace, all day, in a loop — closer to
> how they use their phone than how they use a site. So navigation went to the
> bottom, and each room became its own thing rather than a section of a dashboard.
>
> Resolving a rate stopped being a page of its own. The decision only makes sense
> while you can still see the fields it sits among.
>
> The cost was about seventy pixels of height, permanently, and a pattern rare
> enough here that it only reads as considered if it behaves well."

### 30–32 · What I got wrong

**Do not soften this. It is the strongest thing in the deck.**

> "We had written down that the advisor decides. Then I shipped a screen that said
> the advisor decides and quietly decided for them.
>
> I fixed what the screen offered. I did not check what it committed.
>
> A principle in a document does not enforce itself. If it matters, it has to be in
> the model, or in a test, or it will be true on the day you write it and false a
> month later."

### 33 · Reflection

> "What I would challenge if I picked it up again."

### 34 · Questions

Stop talking. Ten minutes.

---

## Open before you present

1. **The metrics on 17 and 18.** Say the method for each figure or cut it. Any
   number you cannot source is worse than no number in front of these two.
2. **"There is no authority"** on slide 26 has no source in the evidence pack. Either
   place it or drop the quotation marks and own it as your line.
3. **The quotes on slide 12** are attributed by role because that is all the
   transcripts carry. If you know which advisor said which, name them.
4. **Both repos are public.** The deck and the app.
5. If you present from the deployed deck, the live record on slide 10 needs the app's
   Vercel deploy to be current. From localhost, both are running.
