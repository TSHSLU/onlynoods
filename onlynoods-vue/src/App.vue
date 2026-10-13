<script setup>
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import StorySection from './components/StorySection.vue'
import HowSection from './components/HowSection.vue'
import MenuSection from './components/MenuSection.vue'
import LocationSection from './components/LocationSection.vue'
import CtaSection from './components/CtaSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import { marqueeItems } from './data/site.js'
</script>

<template>
  <div class="noise-overlay"></div>
  <AppHeader />

  <main id="top">
    <HeroSection />

    <div class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <template v-for="copy in [0, 1]" :key="copy">
          <template v-for="item in marqueeItems" :key="`${copy}-${item}`">
            <span>{{ item }}</span><span>·</span>
          </template>
        </template>
      </div>
    </div>

    <StorySection />
    <HowSection />
    <MenuSection />
    <LocationSection />
    <CtaSection />
  </main>

  <SiteFooter />
</template>
