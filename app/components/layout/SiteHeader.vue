<script setup lang="ts">
import { navItems } from '~/data/navigation'
import type { NavItem } from '~/data/navigation'

const isOpen = ref(false)
const activeMenu = ref<string | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const isHidden = ref(false)
const hasScrolled = ref(false)
const isDarkSurface = ref(true)
const needsHeaderBackground = ref(false)
const isMenuActivationPaused = ref(false)

const hasChildren = (item: NavItem) => Boolean(item.children?.length)
const showChevron = (item: NavItem) => item.hasDropdown || hasChildren(item)
const activeMenuItem = computed(() => navItems.find(item => item.label === activeMenu.value && hasChildren(item)))
const isMegaMenuOpen = computed(() => Boolean(activeMenuItem.value))
const isGlassHeader = computed(() => hasScrolled.value && !isHidden.value && needsHeaderBackground.value)
const shouldUseLightHeader = computed(() => isMegaMenuOpen.value || isGlassHeader.value || !isDarkSurface.value)
const logoVariant = computed(() => shouldUseLightHeader.value ? 'default' : 'white')
const navTextClass = computed(() => shouldUseLightHeader.value ? 'text-ink' : 'text-white/95')
const navIconClass = computed(() => shouldUseLightHeader.value ? 'text-ink/75' : 'text-white/85')
const mobileButtonClass = computed(() => {
  if (isGlassHeader.value) {
    return 'border-black/15 bg-white/96 text-ink'
  }

  return shouldUseLightHeader.value ? 'border-black/20 text-ink' : 'border-white/25 text-white'
})

let lastScrollY = 0
let ticking = false
let menuActivationTimer: ReturnType<typeof setTimeout> | undefined

const menuActivationDelay = 1500

const getVisibleChildren = (item: NavItem) => {
  const limit = item.dropdownLimit ?? item.children?.length ?? 0

  return item.children?.slice(0, limit) ?? []
}

const setActiveMenu = (item: NavItem) => {
  if (isMenuActivationPaused.value) {
    activeMenu.value = null

    return
  }

  activeMenu.value = showChevron(item) ? item.label : null
}

const clearActiveMenu = () => {
  activeMenu.value = null
}

const pauseMenuActivation = () => {
  isMenuActivationPaused.value = true
  clearActiveMenu()

  if (menuActivationTimer) {
    clearTimeout(menuActivationTimer)
  }

  menuActivationTimer = setTimeout(() => {
    isMenuActivationPaused.value = false
  }, menuActivationDelay)
}

const handleHeaderFocusOut = (event: FocusEvent) => {
  const currentTarget = event.currentTarget as HTMLElement | null
  const relatedTarget = event.relatedTarget as Node | null

  if (currentTarget && relatedTarget && currentTarget.contains(relatedTarget)) {
    return
  }

  clearActiveMenu()
}

const getColorParts = (color: string) => {
  const match = color.match(/rgba?\(([^)]+)\)/)

  if (!match) {
    return null
  }

  const rawColorParts = match[1]

  if (!rawColorParts) {
    return null
  }

  const values = rawColorParts.split(',').map(value => Number.parseFloat(value.trim()))
  const r = values[0]
  const g = values[1]
  const b = values[2]
  const a = values[3] ?? 1

  if (r === undefined || g === undefined || b === undefined || ![r, g, b, a].every(Number.isFinite)) {
    return null
  }

  return { r, g, b, a }
}

const getLuminance = (r: number, g: number, b: number) => {
  const toLinear = (value: number) => {
    const channel = value / 255

    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
  }

  return (0.2126 * toLinear(r)) + (0.7152 * toLinear(g)) + (0.0722 * toLinear(b))
}

const isWhiteColor = (r: number, g: number, b: number) => r > 245 && g > 245 && b > 245

const hasStaticUtility = (classList: string[], utility: string) => classList.some(classItem => (
  !classItem.includes(':') && (classItem === utility || classItem.startsWith(`${utility}/`))
))

const getSurfaceState = (element: Element | null) => {
  let current = element

  while (current && current !== document.body) {
    if (current instanceof HTMLElement) {
      const headerTheme = current.dataset.headerTheme

      if (headerTheme === 'dark') {
        return { isDark: true, needsBackground: true }
      }

      if (headerTheme === 'light') {
        return { isDark: false, needsBackground: false }
      }

      const className = current.className.toString()
      const classList = className.split(/\s+/)

      if (current.matches('img, video, canvas')) {
        return { isDark: true, needsBackground: true }
      }

      if (hasStaticUtility(classList, 'bg-white')) {
        return { isDark: false, needsBackground: false }
      }

      if (hasStaticUtility(classList, 'text-white') || hasStaticUtility(classList, 'bg-black') || hasStaticUtility(classList, 'bg-ink') || hasStaticUtility(classList, 'bg-charcoal')) {
        return { isDark: true, needsBackground: true }
      }

      if (classList.some(classItem => !classItem.includes(':') && classItem.startsWith('bg-brand-'))) {
        return { isDark: false, needsBackground: true }
      }

      const colorParts = getColorParts(getComputedStyle(current).backgroundColor)

      if (colorParts && colorParts.a > 0.2) {
        return {
          isDark: getLuminance(colorParts.r, colorParts.g, colorParts.b) < 0.5,
          needsBackground: !isWhiteColor(colorParts.r, colorParts.g, colorParts.b)
        }
      }
    }

    current = current.parentElement
  }

  return { isDark: window.scrollY < 80, needsBackground: false }
}

const updateSurfaceTheme = () => {
  const header = headerRef.value

  if (!header) {
    return
  }

  const y = Math.min(header.offsetHeight / 2, 64)
  const points = [
    Math.min(110, window.innerWidth - 24),
    window.innerWidth / 2,
    Math.max(window.innerWidth - 110, 24)
  ]

  const surfaceStates = points.map((x) => {
    const surface = document.elementsFromPoint(x, y)
      .find(element => !header.contains(element))

    return getSurfaceState(surface ?? null)
  })
  const darkVotes = surfaceStates.filter(surface => surface.isDark).length
  const backgroundVotes = surfaceStates.filter(surface => surface.needsBackground).length

  isDarkSurface.value = darkVotes >= 2
  needsHeaderBackground.value = backgroundVotes >= 2
}

const updateHeaderOnScroll = () => {
  const currentScrollY = Math.max(window.scrollY, 0)
  const delta = currentScrollY - lastScrollY

  hasScrolled.value = currentScrollY > 80
  updateSurfaceTheme()

  if (isOpen.value || activeMenu.value) {
    isHidden.value = false
  } else if (currentScrollY < 80 || delta < -8) {
    isHidden.value = false
  } else if (currentScrollY > 120 && delta > 8) {
    isHidden.value = true
  }

  lastScrollY = currentScrollY
  ticking = false
}

const requestHeaderUpdate = () => {
  if (ticking) {
    return
  }

  ticking = true
  window.requestAnimationFrame(updateHeaderOnScroll)
}

watch([isOpen, activeMenu], () => {
  isHidden.value = false
  nextTick(updateSurfaceTheme)
})

onMounted(() => {
  lastScrollY = Math.max(window.scrollY, 0)
  hasScrolled.value = lastScrollY > 80
  updateSurfaceTheme()
  window.addEventListener('scroll', requestHeaderUpdate, { passive: true })
  window.addEventListener('resize', updateSurfaceTheme, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', requestHeaderUpdate)
  window.removeEventListener('resize', updateSurfaceTheme)

  if (menuActivationTimer) {
    clearTimeout(menuActivationTimer)
  }
})
</script>

<template>
  <header
    ref="headerRef"
    class="fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(.16,1,.3,1)]"
    :class="[
      isHidden ? '-translate-y-full' : 'translate-y-0',
      isMegaMenuOpen ? 'border-black/10 bg-white/96 shadow-2xl shadow-black/10 backdrop-blur-xl backdrop-saturate-150' : isGlassHeader ? 'border-black/10 bg-white/96 shadow-2xl shadow-black/10 backdrop-blur-xl backdrop-saturate-150' : 'border-transparent bg-transparent shadow-none'
    ]"
    @focusout="handleHeaderFocusOut"
    @keydown.esc="clearActiveMenu"
    @mouseleave="clearActiveMenu"
  >
    <div class="mx-auto flex h-22.5 max-w-360 items-center justify-between px-5 sm:px-8 lg:px-25">
      <NuxtLink
        to="/"
        class="text-white"
        aria-label="Kembar Futa Group"
      >
        <BrandLogo
          :variant="logoVariant"
          class="h-12 w-auto lg:h-14"
        />
      </NuxtLink>

      <nav
        class="hidden items-center gap-4 xl:flex"
        aria-label="Navigasi utama"
      >
        <div
          v-for="item in navItems"
          :key="item.label"
          class="relative"
          @focusin="setActiveMenu(item)"
          @mouseenter="setActiveMenu(item)"
        >
          <NuxtLink
            :to="item.to"
            class="group flex items-center gap-1 px-4 py-2 text-base font-medium leading-[1.4] transition-colors duration-300"
            :class="navTextClass"
            :aria-haspopup="hasChildren(item) ? 'menu' : undefined"
            :aria-expanded="hasChildren(item) ? activeMenu === item.label : undefined"
            @click="pauseMenuActivation"
          >
            <span
              class="transition-colors duration-200 group-hover:text-brand-green"
              :class="activeMenu === item.label ? 'text-brand-green' : ''"
            >
              {{ item.label }}
            </span>
            <UIcon
              v-if="showChevron(item)"
              name="i-lucide-chevron-down"
              class="size-5 transition-colors duration-300"
              :class="navIconClass"
            />
          </NuxtLink>
        </div>
      </nav>

      <button
        type="button"
        class="inline-flex size-11 items-center justify-center border transition-colors duration-300 xl:hidden"
        :class="mobileButtonClass"
        :aria-expanded="isOpen"
        aria-label="Buka navigasi"
        @click="isOpen = !isOpen"
      >
        <UIcon
          :name="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
          class="size-5"
        />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-250 ease-out"
      enter-from-class="-translate-y-2 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-2 opacity-0"
    >
      <NavigationMegaMenu
        v-if="activeMenuItem"
        :item="activeMenuItem"
        role="menu"
        @click.capture="pauseMenuActivation"
      />
    </Transition>

    <div
      v-if="isOpen"
      class="border-t border-white/10 bg-black/90 px-5 py-4 text-white xl:hidden"
    >
      <template
        v-for="item in navItems"
        :key="item.label"
      >
        <NuxtLink
          :to="item.to"
          class="flex items-center justify-between border-b border-white/10 py-3 text-sm"
          @click="isOpen = false"
        >
          {{ item.label }}
          <UIcon
            v-if="showChevron(item)"
            name="i-lucide-chevron-down"
            class="size-4"
          />
        </NuxtLink>

        <div
          v-if="hasChildren(item)"
          class="-mt-1 border-b border-white/10 pb-3 pl-4"
        >
          <NuxtLink
            v-for="child in getVisibleChildren(item)"
            :key="child.label"
            :to="child.to"
            class="block py-2 text-sm text-white/65"
            @click="isOpen = false"
          >
            {{ child.label }}
          </NuxtLink>
        </div>
      </template>
    </div>
  </header>
</template>
