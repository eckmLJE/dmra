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

| Item                  | Value                                                                                                 | Status |
| --------------------- | ----------------------------------------------------------------------------------------------------- | ------ |
| Annual dues           | $300                                                                                                  | `DONE` |
| Guest fee             | $15 per visit, max 8 visits per season                                                                | `DONE` |
| Membership scope      | Household membership — everyone living in a member's home, including renters and out-of-town visitors | `DONE` |
| Supporting membership | $175, for members who do not use the courts. Found on the 2027 application, never on the site.        | `DONE` |

All live in `src/consts.ts` (`ANNUAL_DUES`, `GUEST_FEE`,
`GUEST_VISITS_PER_SEASON`), so one edit updates every page that shows them.

---

## Home page

| #   | Request                                                           | Status | Notes                                                                                                                                                                  |
| --- | ----------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Compress so no scrolling needed                                   | `DONE` | Not shortened. Addressed instead by removing genuinely duplicated content — see _Duplication_ below. Vicki accepted the point about differing scrolling habits.        |
| 2   | Capitalize Pickleball in the heading                              | `DONE` | Reworded to "Play tennis and pickleball in Eastham" so neither sport starts the sentence. Keeps sentence case, removes the asymmetry.                                  |
| 3   | Use 1 photo each for Home, Tennis A, Pickleball A                 | `DONE` | Lead ("A") photo of each sport on the home page court cards. The hero uses Tennis B so no photo appears twice on the page.                                             |
| 4   | REMOVE "Our courts" section                                       | `DONE` | **Keeping it.** The only home section with no counterpart elsewhere: it compares the two locations side by side, which neither detail page does.                       |
| 5   | REMOVE hero links "Become a member" / "See the courts"            | `DONE` | "Become a member" kept as the primary action. "See the courts" removed — its only job was routing to the gallery, which is gone (#28).                                 |
| 6   | REMOVE footer "Membership inquiries" link                         | `DONE` |                                                                                                                                                                        |
| 7   | New "About the association" copy                                  | `DONE` | Board's wording verbatim, and it now appears only here.                                                                                                                |
| 8   | Officer contact reduced, moved to bottom, retitled                | `DONE` | Roster is on the home page only, at the bottom, compact, under the board's heading. Names and roles only.                                                              |
| 9   | Officer contact details exposed publicly                          | `DONE` | Resolved per _Officer contact_ below: one shared association address, no personal emails or phone numbers. Address is a **placeholder** until the real mailbox exists. |
| 10  | ADD "DMRA PO Box 521, Eastham MA 02642" to left footer, all pages | `DONE` | In `MAILING_ADDRESS` in `src/consts.ts`; renders on all five pages.                                                                                                    |

---

## Membership page

| #   | Request                                                                                | Status | Notes                                                                                                                                                                                          |
| --- | -------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 11  | Annual dues box → $300                                                                 | `DONE` |                                                                                                                                                                                                |
| 12  | Guest fee → $15.00 per visit, max 8 visits per season                                  | `DONE` |                                                                                                                                                                                                |
| 13  | "Household membership" wording                                                         | `DONE` |                                                                                                                                                                                                |
| 14  | First bullet → "any DMRA household member, including renters and out-of-town visitors" | `DONE` | Board's wording, set in sentence case to match the rest of the site.                                                                                                                           |
| 15  | ADD Venmo link "Pay guest fee here" with guest/member name fields                      | `DONE` | Resolved by the application flow below: the handle is never published. An officer sends it in reply to an application, so it reaches only people who asked.                                    |
| 16  | ADD "Apply for membership here"                                                        | `TODO` | Button, three-step explanation and copy are all built. Points at a placeholder until the Google Form exists.                                                                                   |
| 17  | Membership application, digital version                                                | `TODO` | Agreed approach: a Google Form, owned by the association's own Google account. Fields can be lifted straight from the 2027 application.                                                        |
| 18  | REMOVE "About the association" paragraph                                               | `DONE` |                                                                                                                                                                                                |
| 19  | REMOVE officer contact block from this page                                            | `DONE` | Officer block removed. Replaced with a single line pointing at the shared address, so the page still has a call to action until #16 lands.                                                     |
| 20  | ADD "Book a court here" link to Skedda                                                 | `DONE` | Skedda has become All Booked. Linked from the Membership page and as a button in the site header. The old dmra.skedda.com address still redirects, so links members already hold keep working. |

---

## Tennis page

| #   | Request                                                                         | Status |
| --- | ------------------------------------------------------------------------------- | ------ |
| 21  | First bullet → "Hard-surfaced outdoor courts"                                   | `DONE` |
| 22  | Toilet bullet → "Locked portable toilet"                                        | `DONE` |
| 23  | ADD bullet "Parking for 8 cars"                                                 | `DONE` |
| 24  | REMOVE "The courts are open to association members and their guests. Join us →" | `DONE` |
| 25  | Replace 5 photos with 3 (Tennis A, B, C)                                        | `DONE` |

## Pickleball page

| #   | Request                                                                         | Status |
| --- | ------------------------------------------------------------------------------- | ------ |
| 26  | REMOVE "The courts are open to association members and their guests. Join us →" | `DONE` |
| 27  | Replace all 5 photos with 3 (Pickleball A, B, C)                                | `DONE` |

## Photos page

| #   | Request                                 | Status | Notes                                                                                                                                                                                                |
| --- | --------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28  | Remove the page entirely as duplicative | `DONE` | Page deleted and dropped from the nav. With six photos, all shown on the home and court pages, the gallery was wholly duplicative — the board was right once the court pages were cut to three each. |

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
The page names the officers and gives one address, and says nothing about how
mail is routed — so the board can set the mailbox up however suits them without
the page becoming untrue.

**Still needed from the board:** create the shared mailbox and decide who
monitors it.

**Note on git history.** The repository is public, and the officers' personal
emails and phone numbers were committed in earlier versions of `consts.ts`.
Removing them from the current code stops future exposure but does not erase
them from history. They are also still published on the live GoDaddy site, so
nothing new is exposed either way. Purging history is possible (rewrite and
force-push) but disruptive; worth doing only if the board wants those details
off the public record entirely, and it should happen before the site gets wider
circulation.

---

## Site quality

Not from the board's review — found while auditing, fixed in the same pass.

| Item                                                 | Status  | Notes                                                                                                                                                                                                                                       |
| ---------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Stale meta descriptions                              | `DONE`  | Membership still described the old "everyone living at or visiting a member's home" wording in the description search engines and link previews show; Tennis still said "well-sheltered outdoor hard courts". Both now match the page copy. |
| No 404 page                                          | `DONE`  | `src/pages/404.astro`. Without it, a mistyped URL got GitHub Pages' generic page with no nav and no route back. Its links respect `BASE_PATH`.                                                                                              |
| `scroll-behavior: smooth` ignored motion preferences | `DONE`  | Now inside `@media (prefers-reduced-motion: no-preference)`.                                                                                                                                                                                |
| Contrast, heading order, alt text, unique titles     | `DONE`  | Audited, no problems. All text passes WCAG AA; no skipped heading levels; every image has alt text; all six page titles differ.                                                                                                             |
| `ProseLayout.astro` unused                           | Keeping | No page imports it since `about.md` was removed, but the README documents it as the zero-code way to add a prose page. Twenty lines of on-ramp, not dead weight.                                                                            |
| No `og:image`                                        | `TODO`  | Link previews in group chats and social posts render as bare text cards. Needs an absolute URL, so it waits on the domain decision.                                                                                                         |
| No sitemap or robots.txt                             | `TODO`  | `@astrojs/sitemap` is a one-line integration. Marginal for six pages; worth adding when the real domain goes live.                                                                                                                          |

---

## Applications and payment

Agreed flow, which keeps payment details off the public site entirely:

1. The applicant fills in a Google Form, linked from the Membership page.
2. An officer reviews it and emails back with the ways to pay.
3. The applicant pays by Venmo or mails a check.

A human sits between the application and any payment information, so the Venmo
handle and the check address are never published. That removes the
impersonation risk that made publishing the handle a concern, and it means a
stranger cannot extract payment details by submitting a form.

The site says plainly that no payment is asked for at the point of applying, so
nobody assumes something is broken when they are not charged.

**Still to settle with the board:**

- **Who owns the Google account.** The form will hold members' home addresses
  and phone numbers. In a personal account, that data and control of the form
  leave with the officer when they rotate off the board. It should sit in an
  association-owned account.
- **Renewals.** The paper application covers new members and renewals together.
  Making every renewing member wait for an officer's reply is a lot of manual
  round-trips in a short window. Worth deciding whether renewals skip the review.
- **Who monitors it**, and what response time the confirmation screen should
  promise.
- **Turn on email notification for new responses.** This contradicts the usual
  advice to avoid per-response emails, and here it is right: the flow depends on
  a prompt human reply, and a spreadsheet nobody opens for three weeks breaks it.

**Two conflicts the 2027 application raises**, neither resolved:

- It gives a mailing address of Ellen Sicinski, 315 Locust Road, where the
  footer says DMRA, PO Box 521. Unclear which is for what.
- It names an officer's personal Gmail. Publishing the document as-is would put
  that back on the public site, undoing the contact-details work.

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

1. **The Google Form itself** — the Apply button points at a placeholder until it exists.
2. **Which mailing address** the officer's reply should give for checks.
3. **Real shared mailbox address** — the site shows a placeholder.
4. **Venmo decision** — whether it goes on the site at all, and under which kind
   of Venmo account.

## Photos — a note for next time

The six board photos are committed at full resolution in `src/assets/photos/`.
Send image files through the repository rather than attaching them to a chat:
uploads are resized to roughly 2000px on the long edge, which cost the
pickleball originals about 75% of their pixels before they ever reached the
build.

`pickleball-c.jpeg` is stored landscape with an EXIF rotation flag, so it looks
portrait in Finder and sideways to anything that ignores EXIF. Astro's image
pipeline applies the rotation, verified in the build output — but it is worth
knowing if the photo ever gets processed by something else.
