# Broere AI Solutions — Illustraties

Twaalf SVG-illustraties in totaal: vier diensten in drie achtergrond-varianten.

## Bestandsoverzicht

```
illustrations/
├── automations/
│   ├── automations-light.svg     (voor witte cards)
│   ├── automations-lime.svg      (voor lime cards)
│   └── automations-dark.svg      (voor donkere cards)
├── integrations/
│   ├── integrations-light.svg
│   ├── integrations-lime.svg
│   └── integrations-dark.svg
├── custom-software/
│   ├── custom-software-light.svg
│   ├── custom-software-lime.svg
│   └── custom-software-dark.svg
└── ai-solutions/
    ├── ai-solutions-light.svg
    ├── ai-solutions-lime.svg
    └── ai-solutions-dark.svg
```

## Welke variant gebruiken?

Volg de card-kleur, niet de dienst-naam:

| Card achtergrond | Variant |
|---|---|
| Wit (`#FFFFFF`) | `*-light.svg` |
| Lime (`#B9FF66`) | `*-lime.svg` |
| Donker (`#191A23`) | `*-dark.svg` |

In het standaard card-ritme van de homepage (wit → lime → donker → wit) zou je dus gebruiken:

1. Automations card (wit) → `automations-light.svg`
2. Integrations card (lime) → `integrations-lime.svg`
3. Custom Software card (donker) → `custom-software-dark.svg`
4. AI Solutions card (wit) → `ai-solutions-light.svg`

## Gebruik in Astro

Plaats de map in `public/illustrations/` en gebruik ze als image:

```astro
<img
  src="/illustrations/automations/automations-light.svg"
  alt="Workflow automatisering"
  width="110"
  height="110"
/>
```

Of importeer ze direct als inline SVG voor maximale controle (animaties, hover effects):

```astro
---
import AutomationsLight from '../assets/illustrations/automations/automations-light.svg?raw';
---

<div class="illustration" set:html={AutomationsLight} />
```

## Specs

- **Formaat:** SVG, vector, schaalbaar zonder kwaliteitsverlies
- **ViewBox:** 200×200 (vierkant)
- **File-size:** ~2-4 KB per stuk
- **Kleuren:** Volt `#B9FF66`, Onyx `#191A23`, Canvas `#F3F3F3`, Wit `#FFFFFF`
- **Stroke-width:** 2.5px (consistent door alle illustraties)
- **Accessibility:** elke SVG heeft `role="img"` en `aria-label`

## Aanpassen

De SVG-bestanden zijn pure code, je kunt ze openen in een editor en kleuren makkelijk vervangen. Find & replace op:

- `#B9FF66` voor de lime kleur
- `#191A23` voor de donkere kleur
- `#F3F3F3` voor de licht-grijze achtergrond-kleur
- `#FFFFFF` voor wit
