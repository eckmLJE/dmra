export const SITE_TITLE = 'Eastham Tennis & Pickleball';

/** The formal name of the legal entity behind the site. */
export const ORG_NAME = 'Duck Meadow Recreation Association';

export const SITE_DESCRIPTION =
  'Outdoor tennis and pickleball courts in Eastham, Massachusetts, on Cape Cod. Run by the Duck Meadow Recreation Association. Now accepting new members.';

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
      'Several self-organising groups use the courts, as well as many individuals',
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
      'Well sheltered hard-surface outdoor courts',
      'Sheltered from the wind',
      'Relatively slow playing surface',
      'Locked portable toilet, accessible with a court key',
      'Several self-organising groups use the courts, as well as many individuals',
      'Groups include Intermediate Women, Advanced Intermediate Women and Advanced Intermediate Men',
    ],
  },
];

export interface Officer {
  readonly name: string;
  readonly role: string;
  readonly email: string;
  readonly phone: string;
}

export const OFFICERS: readonly Officer[] = [
  {
    name: 'Robert Zitelli',
    role: 'President',
    email: 'robert.zitelli@gmail.com',
    phone: '(201) 390-8537',
  },
  {
    name: 'Vicki Markuse',
    role: 'Secretary',
    email: 'vim0070@gmail.com',
    phone: '(781) 367-7521',
  },
  {
    name: 'Ellen Sicinski',
    role: 'Treasurer',
    email: 'ellen.sicinski@gmail.com',
    phone: '(203) 470-3785',
  },
];

export const ANNUAL_DUES = '$290';
export const GUEST_FEE = '$10';
