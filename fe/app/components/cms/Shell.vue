<script setup lang="ts">
const props = withDefaults(defineProps<{
  title: string
  description: string
  badgeLabel: string
  badgeIcon?: string
}>(), {
  badgeIcon: 'i-lucide-layout-dashboard'
})

const route = useRoute()

const navItems = [
  { label: 'Dashboard', to: '/cms', icon: 'i-lucide-layout-dashboard' },
  { label: 'Artikel', to: '/cms/artikel', icon: 'i-lucide-newspaper' },
  { label: 'Buat Artikel', to: '/cms/artikel/buat', icon: 'i-lucide-file-plus-2' },
  { label: 'SEO', to: '/cms/seo', icon: 'i-lucide-search-check' },
  { label: 'Media', to: '/cms/media', icon: 'i-lucide-images' }
]

const isActive = (to: string) => route.path === to
</script>

<template>
  <div class="min-h-screen bg-[#f4f7f3] text-ink">
    <div class="grid min-h-screen lg:grid-cols-[280px_minmax(0,1fr)]">
      <aside class="border-b border-black/10 bg-white px-5 py-5 lg:sticky lg:top-0 lg:max-h-svh lg:overflow-y-auto lg:border-b-0 lg:border-r lg:px-6 lg:py-6">
        <div class="flex items-center justify-between gap-4 lg:block">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-3"
            aria-label="Kembali ke beranda Kembar Futagroup"
          >
            <BrandLogo class="h-12 w-auto" />
          </NuxtLink>

          <span class="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f4f7f3] px-3 py-1.5 text-xs font-semibold text-black/70">
            <span class="size-2 rounded-full bg-brand-green" />
            FE Only
          </span>
        </div>

        <nav class="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-5 lg:mt-9 lg:grid-cols-1">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green lg:justify-start"
            :class="isActive(item.to) ? 'bg-ink text-white' : 'text-black/64 hover:bg-black hover:text-white'"
          >
            <UIcon
              :name="item.icon"
              class="size-4 shrink-0"
            />
            <span>{{ item.label }}</span>
          </NuxtLink>
        </nav>

        <div class="mt-6 hidden rounded-lg border border-black/10 bg-[#f8faf6] p-4 lg:block">
          <p class="text-xs font-semibold uppercase tracking-wide text-black/45">
            Editorial Sprint
          </p>
          <p class="mt-3 text-sm font-semibold leading-snug text-ink">
            Kalender Juli 2026
          </p>
          <div class="mt-4 h-2 rounded-full bg-black/10">
            <div class="h-2 w-[64%] rounded-full bg-brand-green" />
          </div>
          <div class="mt-4 flex items-center justify-between text-xs font-semibold text-black/55">
            <span>14 artikel</span>
            <span>64%</span>
          </div>
        </div>
      </aside>

      <main class="min-w-0">
        <header class="border-b border-black/10 bg-white">
          <div class="mx-auto max-w-350 px-5 py-6 sm:px-8 lg:px-10">
            <div class="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <div class="flex flex-wrap items-center gap-2">
                  <span class="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-green">
                    <UIcon
                      :name="props.badgeIcon"
                      class="size-4"
                    />
                    {{ props.badgeLabel }}
                  </span>
                  <span class="inline-flex items-center rounded-full bg-brand-orange/12 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-orange">
                    Tanpa Login
                  </span>
                </div>

                <h1 class="mt-5 max-w-4xl text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
                  {{ props.title }}
                </h1>
                <p class="mt-4 max-w-3xl text-base leading-7 text-black/64">
                  {{ props.description }}
                </p>
              </div>

              <div class="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap xl:justify-end">
                <slot name="actions" />
              </div>
            </div>
          </div>
        </header>

        <div class="mx-auto grid max-w-350 gap-6 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>
