<script setup lang="ts">
import { navItems } from '~/data/navigation'
import type { NavItem } from '~/data/navigation'

const isOpen = ref(false)
const activeMenu = ref<string | null>(null)

const hasChildren = (item: NavItem) => Boolean(item.children?.length)
const showChevron = (item: NavItem) => item.hasDropdown || hasChildren(item)
const activeMenuItem = computed(() => navItems.find(item => item.label === activeMenu.value && hasChildren(item)))
const getVisibleChildren = (item: NavItem) => {
  const limit = item.dropdownLimit ?? item.children?.length ?? 0

  return item.children?.slice(0, limit) ?? []
}

const setActiveMenu = (item: NavItem) => {
  activeMenu.value = showChevron(item) ? item.label : null
}

const clearActiveMenu = () => {
  activeMenu.value = null
}

const handleHeaderFocusOut = (event: FocusEvent) => {
  const currentTarget = event.currentTarget as HTMLElement | null
  const relatedTarget = event.relatedTarget as Node | null

  if (currentTarget && relatedTarget && currentTarget.contains(relatedTarget)) {
    return
  }

  clearActiveMenu()
}
</script>

<template>
  <header
    class="absolute inset-x-0 top-0 z-30"
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
        <AppLogo class="h-6 w-auto lg:h-8" />
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
            class="group flex items-center gap-1 px-4 py-2 text-base font-medium leading-[1.4] text-white/95"
            :aria-haspopup="hasChildren(item) ? 'menu' : undefined"
            :aria-expanded="hasChildren(item) ? activeMenu === item.label : undefined"
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
              class="size-5 text-white/85"
            />
          </NuxtLink>
        </div>
      </nav>

      <button
        type="button"
        class="inline-flex size-11 items-center justify-center border border-white/25 text-white xl:hidden"
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
      <LayoutMegaMenu
        v-if="activeMenuItem"
        :item="activeMenuItem"
        role="menu"
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
