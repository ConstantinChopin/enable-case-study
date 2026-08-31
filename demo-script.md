# Live demo — script

Four journeys, driven in the running app. Roughly twenty minutes of the session.

Each one names the state to start from, the exact path, the edge case inside it, and what
will look wrong if you go off-script.

**Before you start:** open a second window with `demo-script.md` on it. Press `0` between
journeys to reset. The session flags live in `sessionStorage` under `enable-demo-state`.

---

## Time

| | | Minutes |
|---|---|---|
| Deck — context, what they bought, constraints | | 6 |
| **J1** | Dropping in — the day arrives | 4 |
| **J2** | A record — provenance, disagreement, scope, permission | 7 |
| **J3** | Ingestion — documents in, extraction confirmed | 4 |
| **J4** | Ask — an answer, and a refusal | 5 |
| Deck — iterations, what changed and why | | 12 |
| Questions | | 10 |

Live total is twenty. Expect interruptions inside it; J3 is the one to cut if you are behind.

---

## J1 · Dropping in — the day arrives

**Satisfies:** entry point · multi-surface · the product acting without being asked

**State:** press `0`, then `1`. Advisor, current build, `/briefing`.

1. Land on the briefing. Do not narrate the widgets — let them look for three seconds.
2. Say what this screen is for: the advisor opens this before their inbox.
3. **Commissions** widget → click **Villa Ortensia**. You are now on `/commissions/vo`.
4. Point at the timeline: projected, due, paid. Each with its source and its date.
5. Click **Draft a reminder**.
6. **Edit a line in the draft.** This is the beat — do not skip it.
7. Click **Send**. The title flips to `chased` and the chase log records it.

**The line to land:** the product wrote the email and then stopped. Nothing here sends itself.

**Edge case to point at, not click:** the *Sibling booking* block underneath — a second booking
on the same desk where the actual came in under the projection. Flagged rather than absorbed.

**Risks**
- The dock overlaps the bottom row on this page. Scroll before you point at anything low.
- The briefing header says *Good morning* next to *synced 12:04*. If someone catches it, own it.

---

## J2 · A record — provenance, disagreement, scope, permission

**Satisfies:** the core model · unhappy path · edge case · permission

This is the longest and most important one. Budget seven minutes and protect it.

**State:** press `0`, then `3`. Advisor, current build, `/records/maison-leandre`.

**a. Provenance**
1. Point at the three sections: canonical, agency overlay, personal. Say what each one is in one line.
2. **Click a field value** — Address, or Rooms — to open its provenance popover. Press `Escape`.
3. Point at **Pool hours · 96d unverified** and click **Verify against source**. It becomes
   *verified today · R. Devane*.

**b. The disagreement**
4. Scroll to **Commission** in the agency overlay. Three values: 12% partner portal, 10% booking
   platform, 14% keyed by hand.
5. Click **Resolve 3 sources**.
6. Walk the sheet: every value keeps its source, its date, and how many others agree. The label is
   words, not a score — *signed terms*, *superseded rate*, *uncorroborated*.
7. Point at **where this value goes** — the directory row, the quotes, the answers in chat.
8. **Select any of the three.** Take 14% — the manual entry — precisely because a ranking rule would never have chosen it.
9. Type a reason. Commit.

**c. Scope of what you write**
10. Click **Add note…**, type a line.
11. **Stop on the scope picker.** Three options, each with who it means:
    **Private** — only R. Devane · **Team** — Paris desk · **Agency-wide** — every advisor.
    This is the three layers as a choice the advisor makes, every time they write anything down.
12. Choose **Team**, save. The banner reads
    *Note saved — team · Paris desk · attributed and dated.*

*Verified end to end: composer opens, three scopes render, the save confirms with attribution.*

**d. Permission — end on this**
13. Switch to the colleague. Fastest route is the console:
    ```js
    const s=JSON.parse(sessionStorage.getItem('enable-demo-state'));
    s.role='colleague'; sessionStorage.setItem('enable-demo-state',JSON.stringify(s));
    location.href='/records/maison-leandre'
    ```
    Or sign out via the dock account and sign in as **J. Dubois**.
14. Same record. **The commission row is not there.** Not greyed, not padlocked — absent.
15. Also gone: R. Devane's private note, the agent terms block, the active promotion. The team note
    you just wrote survives, because you scoped it to the team.

**Also worth pointing at:** in the colleague's conversation list, the Maison Léandre thread shows
its title but not the question — a reader who cannot be told a commission is not shown a thread
asking for one.

**The line to land:** a locked row still tells you the number exists and invites you to go and ask.
For an agency whose most guarded asset is its terms, that was the difference between connecting
their drive and not connecting it.

**Risks**
- *Fixed 31 Aug.* The store now records the value and the reason. Pick 14%, type a reason, commit —
  the record reads **14% · resolved · Manual entry**, with your reason beneath it. The Ask surface
  has the same sheet and the same behaviour; it previously allowed only one of the three.
- The colleague can still see a contact row reading **L. Berger · Commission contact**. If they spot
  it, that is a real gap and the honest answer is that the rule holds for values and not yet for
  the people attached to them.
- The hero image pushes the commission row below the fold. Scroll before you talk.

---

## J3 · Ingestion — documents in, extraction confirmed

**Satisfies:** how the model gets fed · the thing the agency bought · nothing becomes truth unconfirmed

**State:** press `0`, then `8`. Agency lead, `/admin/review/sereno`.

1. Say what this is: a DMC sent a spreadsheet. This is what came out of it.
2. Point at one row — the value, **where in the document it came from** (row 41, column C), and a bar.
3. Point at **Rate**: held, not offered. A converted figure with no source currency is never
   committed. **There is no confirm button on that row.**
4. Point at **Description**: boilerplate marketing copy, detected and excluded from corroboration.
5. Click **Confirm record — stamped M. Keller, today**. Three fields flip to confirmed. Two stay held.

**The line to land:** the agency asked to check every field by hand. We built that literally first —
eighty-seven fields across two hundred and fourteen records. It worked and nobody would ever have
finished it. This is what we replaced it with.

**Optional, if there is room:** dock → **Notifications** → the duplicate candidate → *Review the
match* → the merge sheet, which requires a reason.

**Risks**
- The page is mostly empty below the fold at this record count. Do not scroll.
- The word *confidence* still appears beside the bars. If you are going to tell the confidence-number
  story in the deck afterwards, acknowledge it here rather than letting them catch it later.

---

## J4 · Ask — an answer, and a refusal

**Satisfies:** the second door · unhappy path · error handling

**State:** press `0`, then `4`. Advisor, `/ask`.

1. Open **Maison Léandre — Atelier rate**.
2. The same disagreement, in conversation. Same three values, same sources, same dates, and the
   same decision offered. Point at **Dismiss (stays in conflict)** — sometimes the answer is not
   knowable today, and the product lets you leave it that way.
3. Open **Third night free on suites**. This is the refusal.
4. Walk the three conditions: sources passed, freshness failed, corroboration failed.
5. Point at the three ways out: forward a document to the vault, ask the rep firm, flag for review.
6. Click **Forward a document to the vault** — the inbound address appears.

**The line to land:** a refusal that says *no results* is worse than a wrong answer, because the
advisor still has a client waiting and now has nothing. So it names which condition failed and
offers the three things that would fix it.

**Risks**
- *Fixed 31 Aug.* The trace is now built per answer and reads the live notice state. On the spa
  thread it reads **"Open notices — One active notice on this property"**, which agrees with the
  answer beside it. Point at it; it is now evidence rather than a liability.
- Submitting the composer does nothing. Do not type into it.

---

## If you want the spa moment

It is the sharpest single beat in the build and it belongs in the deck, not the live demo — the
`V` rewind is easy to fumble and the trace panel undermines it on screen.

If you do run it live: `/ask` → **Is the spa at Maison Léandre open?** → read the answer → press `V`
→ same question, now carrying the notice. Press `V` again to return.

---

## Reset and recovery

- `0` resets everything. `1`–`8` jump to a checkpoint.
- If a route looks stale, reload. The store rehydrates from `sessionStorage`.
- If the server dies mid-session, the stills in the deck cover every screen above. Say you will
  come back to it rather than trying to restart in front of them.
