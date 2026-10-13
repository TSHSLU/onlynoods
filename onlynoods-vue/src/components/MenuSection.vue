<script setup>
import { menu } from '../data/site.js'
</script>

<template>
  <section class="section menu" id="menu">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">Menü</p>
        <h2>Ramen, wie du sie magst.</h2>
        <p class="section-sub">
          Herzhaft, würzig, wärmend — unsere Instant-Ramen sind so vielseitig wie die Kultur, aus
          der sie stammen.
        </p>
      </div>
      <div class="menu-grid" v-reveal>
        <div
          v-for="item in menu"
          :key="item.name"
          class="menu-card"
          :class="{ featured: item.featured }"
        >
          <div class="menu-card-top">
            <h3>{{ item.name }}</h3>
            <span class="price">{{ item.price }}</span>
          </div>
          <p>{{ item.text }}</p>
        </div>
      </div>
      <p class="menu-note" v-reveal>
        Das Angebot wird laufend basierend auf Feedback am Standort erweitert.
      </p>
    </div>
  </section>
</template>
