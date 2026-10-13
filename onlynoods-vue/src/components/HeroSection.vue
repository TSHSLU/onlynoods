<script setup>
import { brand } from '../data/site.js'
</script>

<template>
  <section class="hero">
    <div class="hero-blob blob-1"></div>
    <div class="hero-blob blob-2"></div>
    <div class="container hero-inner">
      <div class="hero-text" v-reveal>
        <p class="eyebrow">Lucerne · Schweiz</p>
        <h1>Instant Ramen,<br /><span class="italic">auf Knopfdruck.</span></h1>
        <p class="hero-sub">
          Heisse Nudeln, frisch zubereitet in Minuten — rund um die Uhr, ganz ohne Küche.
          {{ brand.name }} bringt die Ramen-Kultur Japans und Südkoreas direkt zu dir, per Automat.
        </p>
        <div class="hero-cta">
          <a href="#location" class="btn btn-primary">Standort finden</a>
          <a href="#story" class="btn btn-ghost">Unsere Story</a>
        </div>
        <p class="hero-price">Ab <strong>CHF 4.95</strong> · fertig in wenigen Minuten</p>
      </div>
      <div class="hero-visual" v-reveal>
        <div class="hero-logo-wrap">
          <img :src="brand.logo" alt="Only Noods Maskottchen" class="hero-logo" />
        </div>
      </div>
    </div>
    <div class="scroll-cue"><span></span>Scroll</div>
  </section>
</template>
