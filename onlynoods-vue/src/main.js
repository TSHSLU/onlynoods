import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'

// v-reveal: fades an element in once it scrolls into view.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15 },
)

const app = createApp(App)

app.directive('reveal', {
  mounted(el) {
    el.setAttribute('data-reveal', '')
    revealObserver.observe(el)
  },
  unmounted(el) {
    revealObserver.unobserve(el)
  },
})

app.mount('#app')
