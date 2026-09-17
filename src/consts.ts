export const SITE_TITLE = 'Eastham Tennis & Pickleball';

/** The formal name of the legal entity behind the site. */
export const ORG_NAME = 'Duck Meadow Recreation Association';

export const SITE_DESCRIPTION =
  'Outdoor tennis and pickleball courts in Eastham, Massachusetts, on Cape Cod. Run by the Duck Meadow Recreation Association. Now accepting new members.';

/**
 * Prefixes a root-relative path with the site's base path.
 *
 * When the site is served from a subdirectory rather than a domain root — as
 * GitHub Pages does for a project site — a bare `href="/photos/"` would 404.
 * Write paths as if the site were at the root and pass them through this helper
 * when rendering. `BASE_URL` comes from `base` in astro.config.ts, which reads
 * the deployment environment, so nothing here hard-codes a host or directory.
 */
export const url = (path: string): string =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;

export interface NavLink {
  readonly href: string;
  readonly label: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/tennis/', label: 'Tennis' },
  { href: '/pickleball/', label: 'Pickleball' },
  { href: '/photos/', label: 'Photos' },
  { href: '/membership/', label: 'Membership' },
];

export interface Facility {
  readonly name: string;
  readonly href: string;
  readonly sport: string;
  readonly courts: string;
  readonly address: string;
  readonly features: readonly string[];
}

/** Maps a street address to a Google Maps search URL. */
export const mapsUrl = (address: string): string =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const FACILITIES: readonly Facility[] = [
  {
    name: 'Pickleball courts on Ireland Way',
    href: '/pickleball/',
    sport: 'Pickleball',
    courts: '3 courts',
    address: '345 Ireland Way, Eastham, MA 02642',
    features: [
      'Three recently renovated courts with permanent posts and nets',
      'Dedicated pickleball courts',
      'Several self-organizing groups use the courts, as well as many individuals',
      'Court reservations can be made online up to six days in advance',
      'Parking for 10 cars — we encourage car pooling',
      'Bike rack, with access from the Rail Trail',
    ],
  },
  {
    name: 'Tennis courts on Widgeon Drive',
    href: '/tennis/',
    sport: 'Tennis',
    courts: '2 courts',
    address: '130 Widgeon Drive, Eastham, MA 02642',
    features: [
      'Hard-surfaced outdoor courts',
      'Sheltered from the wind',
      'Relatively slow playing surface',
      'Locked portable toilet',
      'Parking for 8 cars',
      'Several self-organizing groups use the courts, as well as many individuals',
      'Groups include Intermediate Women, Advanced Intermediate Women and Advanced Intermediate Men',
    ],
  },
];

export interface Officer {
  readonly name: string;
  readonly role: string;
}

/**
 * Officers are listed by name and role only. Enquiries go to the shared
 * association address below rather than to anyone's personal email, and
 * personal phone numbers live in the member handbook instead of on the public
 * site. See docs/website-review-plan.md.
 */
export const OFFICERS: readonly Officer[] = [
  { name: 'Robert Zitelli', role: 'President' },
  { name: 'Vicki Markuse', role: 'Secretary' },
  { name: 'Ellen Sicinski', role: 'Treasurer' },
];

/**
 * PLACEHOLDER — replace with the real shared association mailbox once it
 * exists. example.com is reserved for documentation, so nothing sent here can
 * reach a real inbox by accident.
 */
export const CONTACT_EMAIL = 'dmra.eastham@example.com';

export const ANNUAL_DUES = '$300';
export const GUEST_FEE = '$15';

/** Maximum guest visits one membership may host in a season. */
export const GUEST_VISITS_PER_SEASON = 8;

/** Postal address, shown in the footer of every page. One line per element. */
export const MAILING_ADDRESS: readonly string[] = [
  'DMRA',
  'PO Box 521',
  'Eastham, MA 02642',
];
