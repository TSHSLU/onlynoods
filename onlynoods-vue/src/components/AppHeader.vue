<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { brand, navItems } from '../data/site.js'

const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 40
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="site-header" :class="{ scrolled }">
    <div class="container header-inner">
      <a href="#top" class="brand" @click="closeMenu">
        <img :src="brand.logo" alt="Only Noods Logo" class="brand-logo" />
        <span class="brand-name">{{ brand.name }}</span>
      </a>

      <nav class="nav-links" :class="{ open: menuOpen }">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="closeMenu">
          {{ item.label }}
        </a>
      </nav>

      <a href="#location" class="btn btn-primary btn-small">Jetzt finden</a>

      <button
        class="nav-toggle"
        :class="{ active: menuOpen }"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="Menü öffnen"
        @click="menuOpen = !menuOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>
