// All page content lives here, so text can change without touching components.

export const brand = {
  name: 'Only Noods',
  logo: '/assets/logo.jpg',
  email: 'hello@onlynoods.ch',
  city: 'Luzern',
}

export const navItems = [
  { label: 'Story', href: '#story' },
  { label: "So funktioniert's", href: '#how' },
  { label: 'Menü', href: '#menu' },
  { label: 'Standort', href: '#location' },
]

export const marqueeItems = [
  'Heiss in Minuten',
  '24/7 verfügbar',
  'Made in Lucerne',
  'Ab CHF 4.95',
]

export const steps = [
  {
    title: 'Auswählen',
    text: 'Am Automaten deine Lieblings-Ramen wählen und bezahlen — kontaktlos, in Sekunden.',
  },
  {
    title: 'Zubereiten',
    text: 'Der Automat kocht deine Nudeln frisch und heiss zu — vollautomatisch, kein Wasserkocher nötig.',
  },
  {
    title: 'Geniessen',
    text: 'Nach wenigen Minuten: eine dampfende Schüssel Ramen, bereit zum Essen. Egal zu welcher Uhrzeit.',
  },
]

// Placeholder menu: only the CHF 4.95 starting price comes from the article.
export const menu = [
  {
    name: 'Classic Shoyu',
    price: 'CHF 4.95',
    text: 'Die japanische Basis — sojabasierte Brühe, fein gewürzt, mit weichen Weizennudeln.',
    featured: true,
  },
  {
    name: 'Spicy Kimchi',
    price: 'CHF 5.95',
    text: 'Südkoreanisch inspiriert — feurig, fermentiert, mit ordentlich Punch.',
  },
  {
    name: 'Miso Umami',
    price: 'CHF 5.95',
    text: 'Sanft, herzhaft, rund — mit gerösteter Miso-Note.',
  },
]

export const locationFacts = [
  { label: 'Standort', value: 'Schwarzen Schaf, Luzern' },
  { label: 'Verfügbarkeit', value: '24/7' },
  { label: 'Als Nächstes', value: 'Schulen & öffentliche Standorte' },
]
