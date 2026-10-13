<script setup>
import { locationFacts } from '../data/site.js'
</script>

<template>
  <section class="section location" id="location">
    <div class="container location-grid">
      <div class="location-content" v-reveal>
        <p class="eyebrow">Wo du uns findest</p>
        <h2>Aktuell im Testbetrieb im Schwarzen Schaf.</h2>
        <p>
          Unser erster Automat steht im Nachtclub <strong>„Schwarzen Schaf"</strong> in Luzern —
          der perfekte Ort, um spät nachts einen warmen Snack zu bekommen. Diese Location dient als
          Testphase: Wir sammeln Feedback, optimieren den Betrieb und legen die Basis für weitere
          Standorte.
        </p>
        <div class="location-card">
          <div v-for="fact in locationFacts" :key="fact.label" class="location-card-row">
            <span class="location-label">{{ fact.label }}</span>
            <span>{{ fact.value }}</span>
          </div>
        </div>
      </div>
      <div class="location-visual" v-reveal>
        <div class="location-blob"></div>
        <div class="location-badge">
          <span class="pulse-dot"></span>
          Live im Betrieb
        </div>
      </div>
    </div>
  </section>
</template>
