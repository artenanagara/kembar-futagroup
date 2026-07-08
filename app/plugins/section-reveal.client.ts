import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return
  }

  gsap.registerPlugin(ScrollTrigger)

  const toNumber = (value: string | undefined, fallback: number) => {
    const parsedValue = Number(value)

    return Number.isFinite(parsedValue) ? parsedValue : fallback
  }

  const getRevealFromVars = (item: HTMLElement) => {
    const distance = toNumber(item.dataset.revealDistance, 90)
    const from = item.dataset.revealFrom ?? 'up'

    if (from === 'left') {
      return { x: -distance, y: 0, scale: 1 }
    }

    if (from === 'right') {
      return { x: distance, y: 0, scale: 1 }
    }

    if (from === 'down') {
      return { x: 0, y: -distance, scale: 1 }
    }

    if (from === 'scale') {
      return { x: 0, y: distance * 0.45, scale: 0.92 }
    }

    return { x: 0, y: distance, scale: 1 }
  }

  const setupReveals = () => {
    const curtainRevealed = useCurtainRevealed()
    const sections = gsap.utils.toArray<HTMLElement>('[data-section-reveal]')

    sections.forEach((section) => {
      if (section.dataset.revealReady === 'true') {
        return
      }

      section.dataset.revealReady = 'true'

      const items = gsap.utils.toArray<HTMLElement>('[data-reveal-item]', section)

      if (!items.length) {
        return
      }

      items.forEach((item) => {
        if (item.dataset.revealFrom === 'mask') {
          gsap.set(item, { yPercent: 100 })

          return
        }

        gsap.set(item, {
          autoAlpha: 0,
          filter: 'blur(18px)',
          ...getRevealFromVars(item)
        })
      })

      const playReveal = () => {
        const timeline = gsap.timeline()

        items.forEach((item, index) => {
          const delay = toNumber(item.dataset.revealDelay, 0)
          const stagger = toNumber(section.dataset.revealStagger, 0.14)

          if (item.dataset.revealFrom === 'mask') {
            timeline.to(item, {
              yPercent: 0,
              duration: toNumber(item.dataset.revealDuration, 0.85),
              ease: item.dataset.revealEase ?? 'power4.out'
            }, (index * stagger) + delay)

            return
          }

          timeline.to(item, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            filter: 'blur(0px)',
            duration: toNumber(item.dataset.revealDuration, 1.15),
            ease: item.dataset.revealEase ?? 'power3.out'
          }, (index * stagger) + delay)
        })
      }

      // Sections already in view when the page mounts (heroes) shouldn't wait on
      // ScrollTrigger, which snaps "already past" triggers straight to their end
      // state. Play them directly once the page-transition curtain has lifted.
      const rect = section.getBoundingClientRect()
      const isImmediatelyVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isImmediatelyVisible) {
        if (curtainRevealed.value) {
          playReveal()
        } else {
          const stopWatch = watch(curtainRevealed, (revealed) => {
            if (revealed) {
              stopWatch()
              playReveal()
            }
          })
        }

        return
      }

      ScrollTrigger.create({
        trigger: section,
        start: section.dataset.revealStart ?? 'top 65%',
        once: true,
        onEnter: playReveal
      })
    })
  }

  const setupParallax = () => {
    const parallaxItems = gsap.utils.toArray<HTMLElement>('[data-scroll-parallax]')

    parallaxItems.forEach((item) => {
      if (item.dataset.parallaxReady === 'true') {
        return
      }

      item.dataset.parallaxReady = 'true'

      gsap.to(item, {
        y: toNumber(item.dataset.scrollParallax, 80),
        ease: 'none',
        scrollTrigger: {
          trigger: item.closest<HTMLElement>('[data-scroll-parallax-container]') ?? item,
          start: item.dataset.scrollStart ?? 'top top',
          end: item.dataset.scrollEnd ?? 'bottom top',
          scrub: toNumber(item.dataset.scrollScrub, 0.8)
        }
      })
    })
  }

  const setupScrubReveals = () => {
    const scrubItems = gsap.utils.toArray<HTMLElement>('[data-scroll-scrub-reveal]')

    scrubItems.forEach((item) => {
      if (item.dataset.scrubRevealReady === 'true') {
        return
      }

      item.dataset.scrubRevealReady = 'true'

      gsap.fromTo(item, {
        autoAlpha: toNumber(item.dataset.scrollFromOpacity, 0.35),
        y: toNumber(item.dataset.scrollFromY, 48),
        filter: 'blur(10px)'
      }, {
        autoAlpha: 1,
        y: 0,
        filter: 'blur(0px)',
        ease: 'none',
        scrollTrigger: {
          trigger: item,
          start: item.dataset.scrollStart ?? 'top 84%',
          end: item.dataset.scrollEnd ?? 'center 54%',
          scrub: toNumber(item.dataset.scrollScrub, 0.7)
        }
      })
    })
  }

  const setupClipReveals = () => {
    const clippedItems = gsap.utils.toArray<HTMLElement>('[data-scroll-clip]')

    clippedItems.forEach((item) => {
      if (item.dataset.clipRevealReady === 'true') {
        return
      }

      item.dataset.clipRevealReady = 'true'

      gsap.fromTo(item, {
        clipPath: 'inset(0 0 100% 0)'
      }, {
        clipPath: 'inset(0 0 0% 0)',
        duration: toNumber(item.dataset.clipDuration, 1.15),
        ease: item.dataset.clipEase ?? 'power3.out',
        scrollTrigger: {
          trigger: item,
          start: item.dataset.clipStart ?? 'top 76%',
          once: true
        }
      })
    })
  }

  const setupScrollAnimations = () => {
    setupReveals()
    setupParallax()
    setupScrubReveals()
    setupClipReveals()
  }

  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(setupScrollAnimations)
  })

  requestAnimationFrame(setupScrollAnimations)
})
