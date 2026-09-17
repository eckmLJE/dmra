# Website review — plan

Working plan for the board's review of the new site. Edit freely; this is the
shared source of truth for what's agreed, what's outstanding and what's blocked.

**Source:** `DMRA_Website_Review.docx`, reviewed 2026-08-31 by Vicki Markuse,
with reply threads from Lucas Eckman. 14 comments, all captured below.

**Status key:** `DONE` shipped on a branch · `TODO` agreed, not built ·
`DECIDE` needs a call before building · `BLOCKED` waiting on something external

Work so far is on branch `content/home-page-dedup` (`909eadb`), not yet merged
to `main`, so none of it is live on the board's URL.

---

## Corrections to live figures

These are factual errors on the branch right now. Highest priority.

| Item             | Currently                                        | Should be                                                                                                 | Status |
| ---------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | ------ |
| Annual dues      | $300                                             | $300                                                                                                      | `DONE` |
| Guest fee        | $10                                              | **$15.00 per visit, max 8 visits per season**                                                             | `TODO` |
| Membership scope | "everyone living at or visiting a member's home" | "**Household membership** — everyone living in member's home, including renters and out-of-town visitors" | `TODO` |

Both live in `src/consts.ts` (`ANNUAL_DUES`, `GUEST_FEE`), so one edit updates
every page that shows them.

---

## Home page

| #   | Request                                                                                                   | Status    | Notes                                                                                                                                                                                                         |
| --- | --------------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Compress so no scrolling needed                                                                           | `DECIDE`  | Discussed at length; Vicki accepted the point about "diversity of scrolling practices" but wants less overt duplication. Resolved in spirit by the dedup work below rather than by shortening the page.       |
| 2   | Capitalize Pickleball in the heading                                                                      | `DONE`    | Reworded to "Play tennis and pickleball in Eastham" so neither sport starts the sentence. Keeps sentence case, removes the asymmetry.                                                                         |
| 3   | Use 1 photo each for Home, Tennis A, Pickleball A                                                         | `BLOCKED` | Attachments not present in the .docx — no `word/media/` in the archive. Need the image files.                                                                                                                 |
| 4   | REMOVE "Our courts" section                                                                               | `DECIDE`  | Recommend keeping. It's the only home section with no counterpart elsewhere — the detail pages show court features and photos, not a comparison. See _Duplication_ below.                                     |
| 5   | REMOVE hero links "Become a member" / "See the courts"                                                    | `DECIDE`  | Recommend keeping "Become a member" as the primary action. "See the courts" could go if the Photos page does (#15).                                                                                           |
| 6   | REMOVE footer "Membership inquiries" link                                                                 | `DONE`    | Footer link retired.                                                                                                                                                                                          |
| 7   | New "About the association" copy                                                                          | `DONE`    | Board's wording used verbatim, and it now appears only here.                                                                                                                                                  |
| 8   | Officer contact reduced, moved to bottom, retitled "For further information, contact one of the officers" | `TODO`    | **Built backwards** — the current branch reduces officers on the home page and keeps the full roster on Membership. The review wants the opposite. Needs flipping, subject to #9.                             |
| 9   | Officer contact details exposed publicly                                                                  | `DECIDE`  | Vicki: "Does make me a tad uncomfortable having contact info out there. A contact form Forwarded would be a good choice." A form changes #8 substantially — settle this before rebuilding the officer blocks. |
| 10  | ADD "DMRA PO Box 521, Eastham MA 02642" to left footer, all pages                                         | `TODO`    |                                                                                                                                                                                                               |

---

## Membership page

| #   | Request                                                                                             | Status    | Notes                                                                                                                                                                                                                                                                                                                           |
| --- | --------------------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | Annual dues box → $300                                                                              | `DONE`    |                                                                                                                                                                                                                                                                                                                                 |
| 12  | Guest fee → $15.00 per visit, max 8 visits per season                                               | `TODO`    | See corrections table.                                                                                                                                                                                                                                                                                                          |
| 13  | "Household membership" wording                                                                      | `TODO`    |                                                                                                                                                                                                                                                                                                                                 |
| 14  | First bullet → free use "for any DMRA household member, including renters and out-of-town visitors" | `TODO`    |                                                                                                                                                                                                                                                                                                                                 |
| 15  | ADD Venmo link "Pay guest fee here" with fields for guest name and member name                      | `DECIDE`  | A Venmo link **cannot** carry structured fields — the note is one free-text box the payer can overwrite. New handle: `@DMRA_Tennis_Pickleball_2026`. Vicki asked whether the link can be masked as "click here to venmo" — yes, that's just link text. Fraud exposure and Venmo's business-account rules still need a decision. |
| 16  | ADD "Apply for membership here" under "We are accepting new members"                                | `BLOCKED` | Proposal: link to a Google Form that submits an application without payment; an officer follows up with payment details. Vicki: "No real interest in setting up on-line payment portals." Needs the form built.                                                                                                                 |
| 17  | Membership application, digital version                                                             | `BLOCKED` | The application copy was attached to the review but isn't in the file.                                                                                                                                                                                                                                                          |
| 18  | REMOVE "About the association" paragraph                                                            | `DONE`    |                                                                                                                                                                                                                                                                                                                                 |
| 19  | REMOVE officer contact block from this page                                                         | `TODO`    | Paired with #8 — the roster moves to the home page, not the other way round.                                                                                                                                                                                                                                                    |
| 20  | ADD "Book a court here" link to Skedda                                                              | `BLOCKED` | Need the Skedda URL. (This answers the earlier open question about the reservation system.)                                                                                                                                                                                                                                     |

---

## Tennis page

| #   | Request                                                                         | Status                          |
| --- | ------------------------------------------------------------------------------- | ------------------------------- |
| 21  | First bullet → "Hard-surfaced outdoor courts"                                   | `TODO`                          |
| 22  | Toilet bullet → "Locked portable toilet"                                        | `TODO`                          |
| 23  | ADD bullet "Parking for 8 cars"                                                 | `TODO`                          |
| 24  | REMOVE "The courts are open to association members and their guests. Join us →" | `TODO`                          |
| 25  | Replace 5 photos with 3 (Tennis A, B, C)                                        | `BLOCKED` — attachments missing |

## Pickleball page

| #   | Request                                                                         | Status                          |
| --- | ------------------------------------------------------------------------------- | ------------------------------- |
| 26  | REMOVE "The courts are open to association members and their guests. Join us →" | `TODO`                          |
| 27  | Replace all 5 photos with 3 (Pickleball A, B, C)                                | `BLOCKED` — attachments missing |

## Photos page

| #   | Request                                 | Status   | Notes                                                                                                                                                                                                                |
| --- | --------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28  | Remove the page entirely as duplicative | `DECIDE` | Removing it also drops a nav item and makes the hero's "See the courts" link homeless (#5). If the per-sport photo sets shrink to three each, the case for a combined gallery gets weaker — so decide #25/#27 first. |

---

## Hosting

Currently GoDaddy; this year's fees are paid, and the board prefers to stay.

Agreed we keep the domain. The open question is what "keep it on GoDaddy" means:

- **Keep the domain, host on GitHub Pages** — point GoDaddy DNS at Pages. The
  current deploy workflow keeps working, deploys stay automatic and free, and
  the `BASE_PATH` prefix disappears since the site moves to a domain root.
- **Keep GoDaddy hosting too** — the built site would be uploaded to GoDaddy
  instead. Workable, but deploys stop being automatic.

Recommend the first. `DECIDE`

---

## Duplication — where this landed

Worth recording, since it drove most of the review.

Agreed: redundant _paths_ (a link in the nav and again in the body, a summary
on the home page linking to detail) help people who scan differently, and are
not a defect. Also agreed: the same paragraph printed twice, word for word, is
a defect — it drifts as pages are edited, and readers notice.

So the rule applied was **each piece of content has exactly one home, and the
home page may summarize it in different words.** Under that rule:

- "About the association" lives only on the home page.
- The officer roster lives on exactly one page (which one is #8/#9).
- `/membership/` links went from four to three, each with a distinct job:
  nav (wayfinding), hero button (primary action), one contextual link where
  dues are stated.

Vicki's "perhaps we can agree to 2 links vs 3" is about counting. The better
test is whether each link does a different job at a different scroll depth.

---

## Deferred — future projects

- **Message board.** Raised at the annual meeting; someone posts "looking for
  players 4pm Tuesdays." Agreed to revisit after the static site ships. Vicki:
  "Getting it up & running is the priority. We'll put it in Future Projects."
- **Online payment.** Beyond the Venmo link. Vicki: no interest in a payment
  portal.

---

## Waiting on

1. **Photo attachments** — Tennis A/B/C, Pickleball A/B/C, one home page photo.
   Blocks four items.
2. **Membership application copy** — blocks the digital application.
3. **Skedda URL** — blocks the "Book a court" link.
4. **Decision on officer contact vs contact form** — blocks the officer blocks
   on both pages.
5. **Venmo decision** — whether it goes on the site at all, and under which
   kind of Venmo account.
