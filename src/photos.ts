import type { ImageMetadata } from 'astro';

import pickleballA from './assets/photos/pickleball-a.jpeg';
import pickleballB from './assets/photos/pickleball-b.jpeg';
import pickleballC from './assets/photos/pickleball-c.jpeg';
import tennisA from './assets/photos/tennis-a.webp';
import tennisB from './assets/photos/tennis-b.webp';
import tennisC from './assets/photos/tennis-c.webp';

export type Sport = 'tennis' | 'pickleball';

export interface Photo {
  readonly src: ImageMetadata;
  readonly alt: string;
  readonly sport: Sport;
  /** The board's label for this photo in the website review. */
  readonly label: 'A' | 'B' | 'C';
}

/**
 * The six photographs supplied by the board. The first of each sport is its
 * lead image, shown on the home page; all three appear on the court page.
 */
export const PHOTOS: readonly Photo[] = [
  {
    src: pickleballA,
    alt: 'An empty pickleball court on Ireland Way with the net up, shaded picnic tables beyond and pine trees behind.',
    sport: 'pickleball',
    label: 'A',
  },
  {
    src: pickleballB,
    alt: 'Players on the Ireland Way pickleball courts under a clear sky, with further courts and picnic tables beyond.',
    sport: 'pickleball',
    label: 'B',
  },
  {
    src: pickleballC,
    alt: 'A game in progress on one of the Ireland Way pickleball courts, seen past the court-side fence.',
    sport: 'pickleball',
    label: 'C',
  },
  {
    src: tennisA,
    alt: 'A player following through on a shot at the Widgeon Drive tennis courts, with others playing on the far court.',
    sport: 'tennis',
    label: 'A',
  },
  {
    src: tennisB,
    alt: 'A player stretching to volley at the net during a doubles match on the Widgeon Drive courts.',
    sport: 'tennis',
    label: 'B',
  },
  {
    src: tennisC,
    alt: 'A doubles match on the Widgeon Drive tennis courts, with play continuing on the courts beyond.',
    sport: 'tennis',
    label: 'C',
  },
];

export const photosFor = (sport: Sport): readonly Photo[] =>
  PHOTOS.filter((photo) => photo.sport === sport);

/** The lead ("A") photo for a sport, used on the home page court cards. */
export const leadPhoto = (sport: Sport): Photo => photo(sport, 'A');

/** One specific photo, by the board's sport and label. */
export const photo = (sport: Sport, label: Photo['label']): Photo => {
  const found = PHOTOS.find((p) => p.sport === sport && p.label === label);
  if (found === undefined) throw new Error(`No ${sport} photo ${label}`);
  return found;
};
