export const SITE_TITLE = 'DMRA';

export const SITE_DESCRIPTION =
  'Your local tennis and pickleball association: leagues, lessons, courts and events.';

export interface NavLink {
  readonly href: string;
  readonly label: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
];
