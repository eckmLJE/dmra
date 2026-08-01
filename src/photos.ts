import type { ImageMetadata } from 'astro';

import pickleball1 from './assets/photos/pickleball1.jpg';
import pickleball2 from './assets/photos/pickleball2.jpg';
import pickleball3 from './assets/photos/pickleball3.jpg';
import pickleball5 from './assets/photos/pickleball5.jpg';
import pickleballCourts from './assets/photos/pickleballcourtsimg_1121.jpg';
import tennis1 from './assets/photos/tennis1.jpg';
import tennis2 from './assets/photos/tennis2.jpg';
import tennis3 from './assets/photos/tennis3.jpg';
import tennis4 from './assets/photos/tennis4.jpg';
import tennis5 from './assets/photos/tennis5.jpg';

export type Sport = 'tennis' | 'pickleball';

export interface Photo {
  readonly src: ImageMetadata;
  readonly alt: string;
  readonly sport: Sport;
}

export const PHOTOS: readonly Photo[] = [
  {
    src: pickleball1,
    alt: 'Two blue and green pickleball courts with permanent nets, enclosed by a chain-link fence and surrounded by trees.',
    sport: 'pickleball',
  },
  {
    src: pickleball2,
    alt: 'A doubles game in progress on one of the Ireland Way pickleball courts, with players waiting on the adjacent court.',
    sport: 'pickleball',
  },
  {
    src: pickleball3,
    alt: 'Four players at the net during a doubles rally on the pickleball courts.',
    sport: 'pickleball',
  },
  {
    src: pickleball5,
    alt: 'Players on two of the Ireland Way pickleball courts on a summer afternoon.',
    sport: 'pickleball',
  },
  {
    src: pickleballCourts,
    alt: 'An empty pickleball court at Ireland Way, backed by pine trees.',
    sport: 'pickleball',
  },
  {
    src: tennis1,
    alt: 'A player returning a shot during a doubles match on the green hard courts at Widgeon Drive.',
    sport: 'tennis',
  },
  {
    src: tennis2,
    alt: 'A player waiting to receive serve on the Widgeon Drive tennis courts, with a doubles game on the far court.',
    sport: 'tennis',
  },
  {
    src: tennis3,
    alt: 'Doubles partners at the net during a point on the tennis courts.',
    sport: 'tennis',
  },
  {
    src: tennis4,
    alt: 'A player stretching wide for a forehand near the net.',
    sport: 'tennis',
  },
  {
    src: tennis5,
    alt: 'Players at the net on both tennis courts at Widgeon Drive.',
    sport: 'tennis',
  },
];

export const photosFor = (sport: Sport): readonly Photo[] =>
  PHOTOS.filter((photo) => photo.sport === sport);
