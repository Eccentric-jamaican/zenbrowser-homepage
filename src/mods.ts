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
    name: 'Deep Tissue Reset',
    description: 'A focused 60-minute session for tension, stiff shoulders, and daily stress.',
    image:
      'https://images.unsplash.com/photo-1592906209472-bb3bc9ea1e9c?auto=format&fit=crop&w=1200&q=80',
    downloadUrl: '/download',
    id: 'deep-tissue-reset',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['hands-on', 'recovery', 'therapeutic'],
    createdAt: new Date('2025-01-15'),
    updatedAt: new Date('2025-01-20'),
  },
  {
    name: 'Swedish Renewal',
    description: 'A calming full-body sequence designed to promote circulation and calm.',
    image:
      'https://images.unsplash.com/photo-1519823551275-1fffd55f7f8d?auto=format&fit=crop&w=1200&q=80',
    downloadUrl: '/download',
    id: 'swedish-renewal',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['wellness', 'relaxation', 'recovery'],
    createdAt: new Date('2025-02-01'),
    updatedAt: new Date('2025-02-01'),
  },
  {
    name: 'Mindful Stretch Session',
    description: 'A gentle guided stretch and hands-on release for back and hip mobility.',
    image:
      'https://images.unsplash.com/photo-1545205597-3d9b6f5f7eb1?auto=format&fit=crop&w=1200&q=80',
    downloadUrl: '/download',
    id: 'mindful-stretch-session',
    readme: '',
    isColorTheme: false,
    author: 'Meditation Fields',
    version: '1.0',
    tags: ['mobility', 'mobility', 'movement'],
    createdAt: new Date('2025-02-18'),
    updatedAt: new Date('2025-02-25'),
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
