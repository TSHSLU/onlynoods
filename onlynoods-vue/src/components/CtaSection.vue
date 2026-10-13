<script setup>
import { brand } from '../data/site.js'
</script>

<template>
  <section class="section cta">
    <div class="container cta-inner" v-reveal>
      <h2>Bereit für heisse Ramen — jederzeit?</h2>
      <p>Folge uns, um zu erfahren, wann der nächste Automat in deiner Nähe steht.</p>
      <a :href="`mailto:${brand.email}`" class="btn btn-primary">Kontakt aufnehmen</a>
    </div>
  </section>
</template>
