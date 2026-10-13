<script setup>
import { steps } from '../data/site.js'
</script>

<template>
  <section class="section how" id="how">
    <div class="container">
      <div class="section-head" v-reveal>
        <p class="eyebrow">So einfach geht's</p>
        <h2>Vom Automaten auf den Tisch — in drei Schritten.</h2>
      </div>
      <div class="steps" v-reveal>
        <div v-for="(step, index) in steps" :key="step.title" class="step">
          <div class="step-num">{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
