<script setup>
import { brand, navItems } from '../data/site.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-inner">
      <a href="#top" class="brand">
        <img :src="brand.logo" alt="Only Noods Logo" class="brand-logo" />
        <span class="brand-name">{{ brand.name }}</span>
      </a>
      <p class="footer-tagline">Instant Ramen auf Knopfdruck. Made in Lucerne.</p>
      <div class="footer-links">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
        <a :href="`mailto:${brand.email}`">Kontakt</a>
      </div>
      <p class="footer-copy">© {{ year }} {{ brand.name }}. Alle Rechte vorbehalten.</p>
    </div>
  </footer>
</template>
