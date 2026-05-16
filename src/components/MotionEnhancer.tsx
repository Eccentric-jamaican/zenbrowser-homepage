import { animate } from 'framer-motion'
import { useEffect } from 'react'

const SECTION_SELECTOR = '[data-motion-section]'
const ITEM_SELECTOR = '[data-motion-item]'

const easeOut = [0.22, 1, 0.36, 1] as const

export default function MotionEnhancer() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(SECTION_SELECTOR))

    if (!sections.length) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      for (const section of sections) {
        section.style.opacity = '1'
        section.style.transform = 'none'
        section.style.filter = 'none'
      }
      return
    }

    for (const section of sections) {
      section.style.opacity = '0.001'
      section.style.transform = 'translateY(18px) scale(0.992)'
      section.style.filter = 'blur(6px)'
      section.style.transformOrigin = '50% 60%'

      for (const item of section.querySelectorAll<HTMLElement>(ITEM_SELECTOR)) {
        item.style.opacity = '0.001'
        item.style.transform = 'translateY(10px)'
      }
    }

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          const section = entry.target as HTMLElement
          observer.unobserve(section)

          animate(
            section,
            {
              opacity: 1,
              transform: 'translateY(0px) scale(1)',
              filter: 'blur(0px)',
            },
            {
              duration: 0.7,
              ease: easeOut,
            }
          )

          const items = Array.from(section.querySelectorAll<HTMLElement>(ITEM_SELECTOR))
          items.forEach((item, index) => {
            animate(
              item,
              {
                opacity: 1,
                transform: 'translateY(0px)',
              },
              {
                delay: 0.08 + index * 0.055,
                duration: 0.45,
                ease: easeOut,
              }
            )
          })
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.18 }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return null
}
