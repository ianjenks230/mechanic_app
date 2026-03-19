import { Mechanic } from '../types';

export const seedMechanics: Mechanic[] = [
  {
    id: 'alex-rivera',
    name: 'Alex Rivera',
    rating: 4.9,
    responseTimeMins: 18,
    jobsThisMonth: 24,
    specialties: ['Diagnostics', 'Brakes', 'Batteries'],
    categories: ['Car', 'ATV'],
    locationArea: 'Uptown',
    bio: 'Mobile tech focused on quick diagnostics and roadside repairs.',
    portfolio: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    certifications: ['ASE Master Tech', 'EPA 609'],
    reviews: [
      {
        id: 'rev-1',
        name: 'Chris M.',
        rating: 5,
        comment: 'Fixed my starter fast and explained everything.',
        date: '2026-03-03',
        photos: ['/placeholder.svg']
      },
      {
        id: 'rev-2',
        name: 'Jordan S.',
        rating: 4,
        comment: 'Great communication and showed up early.',
        date: '2026-02-19',
        photos: ['/placeholder.svg', '/placeholder.svg']
      }
    ]
  },
  {
    id: 'jamie-chen',
    name: 'Jamie Chen',
    rating: 4.8,
    responseTimeMins: 22,
    jobsThisMonth: 19,
    specialties: ['Outboard engines', 'Electrical', 'Bilge pumps'],
    categories: ['Boat'],
    locationArea: 'Harbor District',
    bio: 'Marine specialist for outboard and electrical systems.',
    portfolio: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    certifications: ['ABYC Electrical', 'Mercury Certified'],
    reviews: [
      {
        id: 'rev-3',
        name: 'Avery R.',
        rating: 5,
        comment: 'Got our boat running before the weekend trip.',
        date: '2026-03-10',
        photos: ['/placeholder.svg']
      },
      {
        id: 'rev-4',
        name: 'Taylor P.',
        rating: 4,
        comment: 'Clean work and clear pricing.',
        date: '2026-02-12',
        photos: ['/placeholder.svg']
      }
    ]
  },
  {
    id: 'morgan-lee',
    name: 'Morgan Lee',
    rating: 4.7,
    responseTimeMins: 28,
    jobsThisMonth: 21,
    specialties: ['Motorcycle tune-ups', 'Fuel systems', 'Chains'],
    categories: ['Motorcycle'],
    locationArea: 'Arts District',
    bio: 'Motorcycle and scooter service with a focus on drivetrains.',
    portfolio: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    certifications: ['MSF Certified', 'ASE G1'],
    reviews: [
      {
        id: 'rev-5',
        name: 'Sam D.',
        rating: 5,
        comment: 'My bike rides smooth again.',
        date: '2026-03-02',
        photos: ['/placeholder.svg']
      },
      {
        id: 'rev-6',
        name: 'Priya K.',
        rating: 4,
        comment: 'Quick chain adjustment and solid tips.',
        date: '2026-02-27',
        photos: ['/placeholder.svg']
      }
    ]
  },
  {
    id: 'taylor-brooks',
    name: 'Taylor Brooks',
    rating: 4.9,
    responseTimeMins: 15,
    jobsThisMonth: 30,
    specialties: ['Mower blades', 'Belts', 'Oil changes'],
    categories: ['Mower'],
    locationArea: 'North Ridge',
    bio: 'Lawn equipment specialist for fast seasonal tune-ups.',
    portfolio: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    certifications: ['Briggs and Stratton', 'Kohler Pro'],
    reviews: [
      {
        id: 'rev-7',
        name: 'Devin H.',
        rating: 5,
        comment: 'Got our mower back the same day.',
        date: '2026-03-14',
        photos: ['/placeholder.svg']
      },
      {
        id: 'rev-8',
        name: 'Lee W.',
        rating: 5,
        comment: 'Sharp blades and clean cut.',
        date: '2026-02-08',
        photos: ['/placeholder.svg']
      }
    ]
  },
  {
    id: 'riley-patel',
    name: 'Riley Patel',
    rating: 4.6,
    responseTimeMins: 35,
    jobsThisMonth: 16,
    specialties: ['ATV suspension', 'Winches', 'Diagnostics'],
    categories: ['ATV'],
    locationArea: 'Trailhead',
    bio: 'ATV and off-road specialist with field repairs.',
    portfolio: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    certifications: ['Polaris Service', 'ASE G1'],
    reviews: [
      {
        id: 'rev-9',
        name: 'Morgan S.',
        rating: 4,
        comment: 'Handled a suspension issue quickly.',
        date: '2026-03-08',
        photos: ['/placeholder.svg']
      },
      {
        id: 'rev-10',
        name: 'Jamie L.',
        rating: 5,
        comment: 'Great trailside service and friendly.',
        date: '2026-01-30',
        photos: ['/placeholder.svg']
      }
    ]
  },
  {
    id: 'jordan-kim',
    name: 'Jordan Kim',
    rating: 5.0,
    responseTimeMins: 12,
    jobsThisMonth: 27,
    specialties: ['Hybrid systems', 'AC recharge', 'Electrical'],
    categories: ['Car'],
    locationArea: 'Midtown',
    bio: 'Hybrid and EV friendly diagnostics and repair.',
    portfolio: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    certifications: ['ASE L3', 'EPA 609'],
    reviews: [
      {
        id: 'rev-11',
        name: 'Rae J.',
        rating: 5,
        comment: 'AC cold again in under an hour.',
        date: '2026-03-01',
        photos: ['/placeholder.svg']
      },
      {
        id: 'rev-12',
        name: 'Chris T.',
        rating: 5,
        comment: 'Very professional and clear estimate.',
        date: '2026-02-15',
        photos: ['/placeholder.svg', '/placeholder.svg']
      }
    ]
  }
];
