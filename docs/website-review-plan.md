# Website review — plan

Working plan for the board's review of the new site. Edit freely; this is the
shared source of truth for what's agreed, what's outstanding and what's blocked.

**Source:** `DMRA_Website_Review.docx`, reviewed 2026-08-31 by Vicki Markuse,
with reply threads from Lucas Eckman. 14 comments, all captured below.

**Status key:** `DONE` shipped on a branch · `TODO` agreed, not built ·
`DECIDE` needs a call before building · `BLOCKED` waiting on something external

Work so far is on branch `content/home-page-dedup`, not yet merged to `main`,
so none of it is live on the board's URL.

---

## Corrections to live figures

| Item             | Value                                                                                                 | Status |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------ |
| Annual dues      | $300                                                                                                  | `DONE` |
| Guest fee        | $15 per visit, max 8 visits per season                                                                | `DONE` |
| Membership scope | Household membership — everyone living in a member's home, including renters and out-of-town visitors | `DONE` |

All live in `src/consts.ts` (`ANNUAL_DUES`, `GUEST_FEE`,
`GUEST_VISITS_PER_SEASON`), so one edit updates every page that shows them.

---

## Home page

| #   | Request                                                           | Status    | Notes                                                                                                                                                                  |
| --- | ----------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Compress so no scrolling needed                                   | `DONE`    | Not shortened. Addressed instead by removing genuinely duplicated content — see _Duplication_ below. Vicki accepted the point about differing scrolling habits.        |
| 2   | Capitalize Pickleball in the heading                              | `DONE`    | Reworded to "Play tennis and pickleball in Eastham" so neither sport starts the sentence. Keeps sentence case, removes the asymmetry.                                  |
| 3   | Use 1 photo each for Home, Tennis A, Pickleball A                 | `BLOCKED` | Attachments not present in the .docx — no `word/media/` in the archive.                                                                                                |
| 4   | REMOVE "Our courts" section                                       | `DONE`    | **Keeping it.** The only home section with no counterpart elsewhere: it compares the two locations side by side, which neither detail page does.                       |
| 5   | REMOVE hero links "Become a member" / "See the courts"            | `DONE`    | **Keeping both.** "Become a member" is the page's primary action. "See the courts" is the only non-nav route to the photos; revisit if the Photos page goes (#28).     |
| 6   | REMOVE footer "Membership inquiries" link                         | `DONE`    |                                                                                                                                                                        |
| 7   | New "About the association" copy                                  | `DONE`    | Board's wording verbatim, and it now appears only here.                                                                                                                |
| 8   | Officer contact reduced, moved to bottom, retitled                | `DONE`    | Roster is on the home page only, at the bottom, compact, under the board's heading. Names and roles only.                                                              |
| 9   | Officer contact details exposed publicly                          | `DONE`    | Resolved per _Officer contact_ below: one shared association address, no personal emails or phone numbers. Address is a **placeholder** until the real mailbox exists. |
| 10  | ADD "DMRA PO Box 521, Eastham MA 02642" to left footer, all pages | `DONE`    | In `MAILING_ADDRESS` in `src/consts.ts`; renders on all five pages.                                                                                                    |

---

## Membership page

| #   | Request                                                                                | Status    | Notes                                                                                                                                                                                                                                                                                                   |
| --- | -------------------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | Annual dues box → $300                                                                 | `DONE`    |                                                                                                                                                                                                                                                                                                         |
| 12  | Guest fee → $15.00 per visit, max 8 visits per season                                  | `DONE`    |                                                                                                                                                                                                                                                                                                         |
| 13  | "Household membership" wording                                                         | `DONE`    |                                                                                                                                                                                                                                                                                                         |
| 14  | First bullet → "any DMRA household member, including renters and out-of-town visitors" | `DONE`    | Board's wording, set in sentence case to match the rest of the site.                                                                                                                                                                                                                                    |
| 15  | ADD Venmo link "Pay guest fee here" with guest/member name fields                      | `DECIDE`  | A Venmo link **cannot** carry structured fields — the note is one free-text box the payer can overwrite. New handle: `@DMRA_Tennis_Pickleball_2026`. Masking the link as "click here to venmo" is fine, that's just link text. Fraud exposure and Venmo's business-account rules still need a decision. |
| 16  | ADD "Apply for membership here"                                                        | `BLOCKED` | Proposal: a Google Form that submits an application without payment; an officer follows up with payment details. Vicki: "No real interest in setting up on-line payment portals."                                                                                                                       |
| 17  | Membership application, digital version                                                | `BLOCKED` | Application copy was attached to the review but isn't in the file.                                                                                                                                                                                                                                      |
| 18  | REMOVE "About the association" paragraph                                               | `DONE`    |                                                                                                                                                                                                                                                                                                         |
| 19  | REMOVE officer contact block from this page                                            | `DONE`    | Officer block removed. Replaced with a single line pointing at the shared address, so the page still has a call to action until #16 lands.                                                                                                                                                              |
| 20  | ADD "Book a court here" link to Skedda                                                 | `BLOCKED` | Need the Skedda URL.                                                                                                                                                                                                                                                                                    |

---

## Tennis page

| #   | Request                                                                         | Status                          |
| --- | ------------------------------------------------------------------------------- | ------------------------------- |
| 21  | First bullet → "Hard-surfaced outdoor courts"                                   | `DONE`                          |
| 22  | Toilet bullet → "Locked portable toilet"                                        | `DONE`                          |
| 23  | ADD bullet "Parking for 8 cars"                                                 | `DONE`                          |
| 24  | REMOVE "The courts are open to association members and their guests. Join us →" | `DONE`                          |
| 25  | Replace 5 photos with 3 (Tennis A, B, C)                                        | `BLOCKED` — attachments missing |

## Pickleball page

| #   | Request                                                                         | Status                          |
| --- | ------------------------------------------------------------------------------- | ------------------------------- |
| 26  | REMOVE "The courts are open to association members and their guests. Join us →" | `DONE`                          |
| 27  | Replace all 5 photos with 3 (Pickleball A, B, C)                                | `BLOCKED` — attachments missing |

## Photos page

| #   | Request                                 | Status   | Notes                                                                                                                                                                                             |
| --- | --------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28  | Remove the page entirely as duplicative | `DECIDE` | Removing it drops a nav item and leaves the hero's "See the courts" link homeless (#5). If each sport keeps only three photos, the case for a combined gallery weakens — so settle #25/#27 first. |

---

## Officer contact (#8, #9, #19)

The two requests pull in different directions, so they need resolving together.

**#8 + #19 are about placement**, and they agree with each other: the roster
appears once, on the home page, at the bottom, smaller, under "For further
information, contact one of the officers" — and comes off the Membership page
as repetitive. That matches the one-home rule below. The current branch has it
backwards (reduced on Home, full roster on Membership) and should be flipped.

**#9 is about exposure**, and it's the one that needs a board decision. Vicki:
"Does make me a tad uncomfortable having contact info out there. A contact form
Forwarded would be a good choice."

What's actually at stake: three personal Gmail addresses and three personal
mobile numbers, on an indexed public page. They are already published on the
current GoDaddy site, so the new site exposes nothing new — but a rebuild is a
fair moment to reconsider.

**Built** — officers appear once, on the home page, at the bottom, compact,
under the board's heading "For further information, contact one of the
officers". Names and roles only. The Membership page's officer block is gone,
replaced by a single line pointing at the shared address so the page keeps a
call to action until the apply link (#16) lands.

**Contact details.** One shared association address is published instead of
three personal ones. Personal phone numbers are off the site entirely — they
belong in the member handbook, which members already receive. The public page
answers "how do I reach the association"; the handbook answers "how do I reach
Robert."

The address currently on the site is a **placeholder**:
`dmra.eastham@example.com`. `example.com` is reserved for documentation, so
nothing sent to it can reach a real inbox by mistake. Swapping in the real
mailbox is one line — `CONTACT_EMAIL` in `src/consts.ts`.

**Why not a contact form.** This is a static site with no backend, so a form
needs a third-party service — another account, another dependency, its own spam
problem, possibly a cost — and it protects no better than a shared mailbox,
which is a plain `mailto:` with nothing to maintain. If a form is wanted later,
the Google Form already planned for applications (#16) can carry a
general-enquiry option at no extra cost.

Email obfuscation tricks are not worth doing — modern scrapers run JavaScript,
and the usual hacks break for screen readers.

The heading is "For further information, contact **the** officers", not the
board's "one of the officers". Once there is a single address, inviting someone
to pick one officer and then giving them one mailbox reads as a contradiction.
The page now names the officers, gives one address, and says it reaches all of
them.

**Still needed from the board:** create the shared mailbox, configure it to
forward to or be shared by all three officers — the page states that it does —
and decide who monitors it.

**Note on git history.** The repository is public, and the officers' personal
emails and phone numbers were committed in earlier versions of `consts.ts`.
Removing them from the current code stops future exposure but does not erase
them from history. They are also still published on the live GoDaddy site, so
nothing new is exposed either way. Purging history is possible (rewrite and
force-push) but disruptive; worth doing only if the board wants those details
off the public record entirely, and it should happen before the site gets wider
circulation.

---

## Hosting

Currently GoDaddy; this year's fees are paid, and the board prefers to stay.

Agreed we keep the domain. Open question is what "keep it on GoDaddy" means:

- **Keep the domain, host on GitHub Pages** — point GoDaddy DNS at Pages.
  Deploys stay automatic and free, and the `BASE_PATH` prefix disappears once
  the site is at a domain root.
- **Keep GoDaddy hosting too** — upload the built site there instead. Workable,
  but deploys stop being automatic.

Recommend the first. `DECIDE`

---

## Duplication — where this landed

Agreed: redundant _paths_ (a link in the nav and again in the body, a summary on
the home page linking to detail) help people who scan differently, and are not a
defect. Also agreed: the same paragraph printed twice, word for word, is a
defect — it drifts as pages are edited, and readers notice.

The rule applied: **each piece of content has exactly one home, and the home
page may summarize it in different words.** Under that rule "About the
association" lives only on the home page, the officer roster lives on exactly
one page, and `/membership/` links went from four to three — nav (wayfinding),
hero button (primary action), one contextual link where dues are stated.

Vicki's "perhaps we can agree to 2 links vs 3" is about counting. The better
test is whether each link does a different job at a different scroll depth.

---

## Deferred — future projects

- **Message board.** Raised at the annual meeting. Agreed to revisit after the
  static site ships. Vicki: "Getting it up & running is the priority. We'll put
  it in Future Projects."
- **Online payment.** Beyond a Venmo link. Vicki: no interest in a payment
  portal.

---

## Waiting on

1. **Photo attachments** — Tennis A/B/C, Pickleball A/B/C, one home page photo.
   Blocks four items.
2. **Membership application copy** — blocks the digital application.
3. **Skedda URL** — blocks the "Book a court" link.
4. **Real shared mailbox address** — the site shows a placeholder, and the copy
   states the address reaches all three officers, so it must be configured to do
   so.
5. **Venmo decision** — whether it goes on the site at all, and under which kind
   of Venmo account.
