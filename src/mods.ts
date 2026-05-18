import { format } from 'date-fns'

export type WellnessService = {
  name: string
  description: string
  image: string
  downloadUrl: string
  id: string
  homepage?: string
  readme: string
  preferences?: string
  isColorTheme: boolean
  author: string
  version: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

const SERVICES: WellnessService[] = [
  {
    name: 'Facial',
    description: 'A focused facial treatment to refresh the skin and ease facial tension.',
    image: '/treatments/treatment-facial.png',
    downloadUrl: '/download',
    id: 'facial',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['facial', 'skin-care', 'relaxation'],
    createdAt: new Date('2025-01-05'),
    updatedAt: new Date('2025-01-05'),
  },
  {
    name: 'Body Scrub',
    description: 'Full-body exfoliation for smoother skin, renewed circulation, and a clean reset.',
    image: '/treatments/treatment-body-scrub.png',
    downloadUrl: '/download',
    id: 'body-scrub',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['body-care', 'exfoliation', 'renewal'],
    createdAt: new Date('2025-01-08'),
    updatedAt: new Date('2025-01-08'),
  },
  {
    name: 'Aromatherapy',
    description: 'A restorative session using calming aroma blends alongside gentle bodywork.',
    image: '/treatments/treatment-aromatherapy.png',
    downloadUrl: '/download',
    id: 'aromatherapy',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['aromatherapy', 'relaxation', 'stress-relief'],
    createdAt: new Date('2025-01-10'),
    updatedAt: new Date('2025-01-10'),
  },
  {
    name: 'Swedish',
    description: 'A calming full-body sequence designed to promote circulation and calm.',
    image: '/treatments/treatment-swedish.png',
    downloadUrl: '/download',
    id: 'swedish',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['wellness', 'relaxation', 'recovery'],
    createdAt: new Date('2025-01-12'),
    updatedAt: new Date('2025-01-12'),
  },
  {
    name: 'Stone Massage',
    description: 'Warm stones and steady pressure help soften guarded muscles and deepen rest.',
    image: '/treatments/treatment-stone-massage.png',
    downloadUrl: '/download',
    id: 'stone-massage',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['heated-stones', 'relaxation', 'bodywork'],
    createdAt: new Date('2025-01-14'),
    updatedAt: new Date('2025-01-14'),
  },
  {
    name: 'Trigger Point',
    description: 'Targeted relief for headaches, sciatica, and referral pain patterns.',
    image: '/treatments/treatment-trigger-point.png',
    downloadUrl: '/download',
    id: 'trigger-point',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['pain-relief', 'therapeutic', 'trigger-point'],
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-15'),
  },
  {
    name: 'Thai',
    description: 'Assisted stretching and rhythmic compression to restore mobility.',
    image: '/treatments/treatment-thai.png',
    downloadUrl: '/download',
    id: 'thai',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['mobility', 'stretching', 'movement'],
    createdAt: new Date('2025-01-16'),
    updatedAt: new Date('2025-01-16'),
  },
  {
    name: 'Deep Tissue',
    description: 'A focused 60-minute session for tension, stiff shoulders, and daily stress.',
    image: '/treatments/treatment-deep-tissue.png',
    downloadUrl: '/download',
    id: 'deep-tissue',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['hands-on', 'recovery', 'therapeutic'],
    createdAt: new Date('2025-01-18'),
    updatedAt: new Date('2025-01-18'),
  },
  {
    name: 'Hydro Therapy',
    description:
      'Water-based heat and recovery work for circulation, mobility, and post-treatment ease.',
    image: '/treatments/treatment-hydro-therapy.png',
    downloadUrl: '/download',
    id: 'hydro-therapy',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['hydrotherapy', 'recovery', 'circulation'],
    createdAt: new Date('2025-01-20'),
    updatedAt: new Date('2025-01-20'),
  },
]

export async function getAllMods(): Promise<WellnessService[]> {
  return SERVICES
}

export function getAuthorLink(author: string): string {
  return `/download?service=${encodeURIComponent(author || 'Meditation Fields')}`
}

export function getLocalizedDate(date: Date): string {
  return format(date, 'PP')
}
