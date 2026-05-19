# CLAUDE.md — Broere AI Solutions

> Dit document is het uitgangspunt voor Claude Code bij het bouwen van de website van Broere AI Solutions. Het bevat alles: merkstrategie, design principles, technische keuzes, content en uitgewerkte secties. Lees dit eerst voordat je code schrijft of beslissingen neemt.

---

## 1. Project context

**Bedrijfsnaam:** Broere AI Solutions
**Domein:** broere.ai
**Eigenaar:** Een tech-freak die MKB-bedrijven helpt met AI, automatiseringen en maatwerk software.
**Doelgroep:** MKB algemeen, 10-50 medewerkers. Bedrijven die groot genoeg zijn om budget te hebben voor maatwerk, maar te klein voor een eigen IT-afdeling.

### Waarom dit bedrijf bestaat (verhaal van de oprichter)

> "Ik ben een echte tech-freak en kick echt op nieuwe technologieën. Ik zie dat veel bedrijven nog erg strugglen met het inzien van hoe je al deze technologieën kan toepassen om de meest coole toepassingen te bouwen die hun business naar het volgende niveau tillen. Ik heb dit allemaal uitgezocht en wil mijn kennis en expertise gebruiken om bedrijven hiermee te helpen."

### Positionering

Mini SaaS-tools en maatwerk software als **quick wins voor MKB**. Geen vage consultancy, geen mega-projecten van 6 maanden, maar scherpe tools die snel resultaat opleveren. De positionering is technisch (per technologie ingedeeld) en breed (verschillende soorten projecten), maar wel gefocust op MKB.

**Wat we wel doen:**
- Automatiseringen (n8n, Make, custom scripts)
- Integraties tussen systemen (APIs, data sync)
- Maatwerk software (mini SaaS-tools, dashboards, web apps in Next.js + Supabase)
- AI ingebouwd in tools en processen

**Wat we niet doen:**
- Generieke AI chatbots
- Klassieke consultancy zonder concreet resultaat
- Grote enterprise trajecten

---

## 2. Brand identity

### Tone of voice

Drie kernwoorden, in deze volgorde van belangrijkheid:

1. **Innovatief.** Voorop met nieuwe tech, altijd praktisch toepasbaar.
2. **No-nonsense.** Concreet en eerlijk, geen jargon waar het niet hoeft. Geen marketing-blabla.
3. **Toegankelijk.** Voor iedere ondernemer, niet alleen techbedrijven.

**Schrijfstijl:**
- Tutoyeren (je/jij, niet u)
- Korte zinnen, actieve vorm
- Vermijd buzzwords als "synergie", "disruptie", "next-level" (tenzij ironisch)
- Wel: "werkt", "scheelt tijd", "concreet", "gewoon"
- Eerlijk over wat iets is, niet overdrijven

### Kleurenpalet

Drie kleuren, met vaste verhouding **60% Canvas · 30% Volt · 10% Onyx**:

| Naam | Hex | Gebruik | Verhouding |
|---|---|---|---|
| **Canvas** | `#F3F3F3` | Achtergrond, basis | 60% |
| **Volt** | `#B9FF66` | Accenten, highlights, badges, knoppen, dots | 30% |
| **Onyx** | `#191A23` | Tekst, primaire knoppen, contrast vlakken | 10% |

**Aanvullende kleuren:**
- Wit `#FFFFFF` voor cards op Canvas-achtergrond
- Lichtgrijs `#E5E5E5` voor borders
- Tekstgrijs `#191A23` met opacity 0.65 voor body text
- Tekstgrijs `#888888` voor metadata

**Regels:**
- Lime (Volt) is altijd een **accent**, nooit een dominant vlak voor lange teksten
- Onyx is **niet** de hoofdachtergrond (anders wordt het te tech-startup-y, te zwaar)
- Cards wisselen af in ritme: **wit, lime, donker, wit** zodat sequenties van cards visueel ritme krijgen

### Logo

Het hoofdlogo is een wordmark met een lime dot:

```
broere · ai
```

**Specificaties:**
- Beide woorden in dezelfde dikke 700-weight (Inter Bold)
- Letter-spacing: -1.5px (strak getrokken)
- Lowercase, **niet** met hoofdletters
- Lime dot tussen "broere" en "ai" — 8 tot 10px diameter, perfect cirkelvormig
- Dot is vertically centered op de baseline, niet erboven

**Varianten:**
- Op licht: zwarte tekst, lime dot
- Op donker: witte tekst, lime dot
- Favicon: alleen de "b" + lime dot in een afgerond vierkant

**Volledige naam:** Broere AI Solutions (gebruiken in formele context, meta tags, footer). Korte versie "broere · ai" voor in de navigatie.

### Typografie

| Doel | Font | Gewicht | Voorbeeld |
|---|---|---|---|
| Headings (H1-H3) | **Inter** | 700 | Hero titels, sectie koppen |
| Body tekst | **Inter** | 400 | Paragrafen, lijsten |
| Subkop / nadruk | **Inter** | 600 | Card titels, knoppen |
| Code / accent | **JetBrains Mono** | 500 | Metadata, labels, terminal snippets |

**Type scale (mobile-first):**
- H1: 48px → desktop 88px, letter-spacing -3px tot -4px, line-height 0.95
- H2: 32px → desktop 48px, letter-spacing -1.5px, line-height 1.1
- H3: 22px → desktop 28px, letter-spacing -0.8px
- Body: 15-17px, line-height 1.55-1.65
- Small / mono: 10-12px, letter-spacing 1.5-2px voor uppercase labels

**Fonts laden:**
- Inter via Google Fonts (variable font, weights 400-700)
- JetBrains Mono via Google Fonts (weights 400, 500, 700)
- Of self-hosten voor performance (aanbevolen)

### Signatuur-elementen (de visuele DNA)

Deze elementen komen overal terug en maken het merk herkenbaar:

1. **De lime dot.** Een lime cirkel als accent. Komt terug in het logo, voor lopende status-indicatoren, in pulserende cirkels bij "beschikbaar voor projecten" badges.

2. **De highlighter.** Lime achtergrond achter losse woorden in headings. Padding 0-8px, border-radius 5px. Gebruik max 1-2 highlighter-woorden per heading.

3. **De lime cirkel met pijl.** Op primaire knoppen: kleine lime cirkel rechts naast de tekst, met een pijl erin. 18-20px diameter.

4. **Monospace labels.** Kleine uppercase labels in JetBrains Mono, letter-spacing 2px, opacity 0.5-0.6. Voor metadata, sectie-categorieën, status-indicatoren.

5. **Card-ritme.** In grids van 4 cards: wit, lime, donker, wit. Voorkomt visuele saaiheid.

6. **Status-puntje met glow.** Een lime puntje met box-shadow eromheen die pulseert. Voor "beschikbaar" en "live" indicatoren.

### Component varianten (component library)

Onderstaande varianten staan in het Figma-bronbestand en zijn de canonieke vormen. Wijk hier niet van af, ook niet "voor de variatie".

**Logo (Component 1):**
- Light variant: zwarte wordmark `broere · ai` op Canvas/wit, lime dot
- Dark variant: witte wordmark `broere · ai` op Onyx, lime dot
- Dot blijft in beide varianten Volt (`#B9FF66`), nooit een andere kleur

**Plus / minus icon:**
- Cirkelvormige knop, diameter 44-48px
- Achtergrond: wit (`#FFFFFF`) op Canvas, met dunne lichtgrijze border (`#E5E5E5`)
- Icoon: Onyx, dikke stroke (~2.5px), perfect gecentreerd
- Gebruik: FAQ-accordions, expand/collapse, hoeveelheidkiezers
- Hover: subtiele scale `1.05` of lichte schaduw, niet van kleur wisselen

**Link / icon-link varianten:**
Een link bestaat uit een cirkelvormig icoon (diameter ~36-40px) met daarin een pijl naar rechtsboven, gevolgd door een label. Er zijn negen varianten, gegroepeerd op cirkelkleur:

| # | Cirkel | Pijl | Label-context | Gebruik |
|---|---|---|---|---|
| 1 | Wit | Volt | Op Canvas/wit | Subtiele lime accent op lichte secties |
| 2 | Wit | Onyx | Op Canvas/wit | Default link op lichte achtergrond |
| 3 | Onyx | Volt | Op Canvas of wit | Sterk contrast, primaire CTA-link op licht |
| 4 | Onyx | Wit | Op Canvas of wit | Alternatief sterk contrast zonder lime |
| 5 | Volt | Onyx | Op Canvas of wit | Lime callout, opvallend |
| 6 | Volt | Wit | Op Canvas of wit | Lime callout met witte pijl, zachter |
| 7 | Geen cirkel | Volt | Op Onyx (donkere sectie) | Lime tekst-link op donker |
| 8 | Geen cirkel | Wit | Op Onyx (donkere sectie) | Standaard tekst-link op donker |
| 9 | Geen cirkel | Onyx | Op Canvas/wit | Standaard tekst-link op licht |

Regels:
- Pijl wijst altijd naar rechtsboven (45° diagonaal), niet horizontaal
- Spacing tussen cirkel en label: 12-16px
- Label in Inter 500 (semi-bold), label-tekstkleur volgt de sectie (Onyx op licht, wit op donker)
- Hover: cirkel licht ophogen (`translateY(-2px)`) of pijl 2-3px naar rechtsboven schuiven

**Buttons (3 varianten):**

| Variant | Achtergrond | Tekst | Border | Wanneer gebruiken |
|---|---|---|---|---|
| Primary (donker) | Onyx `#191A23` | Wit | Geen | Belangrijkste actie, max 1 per sectie |
| Secondary (outline) | Transparant | Onyx | 1.5px Onyx of `#E5E5E5` | Bijkomende actie naast primary |
| Accent (lime) | Volt `#B9FF66` | Onyx | Geen | Krachtige CTA, vooral op donkere secties of als final call-to-action |

Specs alle buttons:
- Border-radius: 8-10px (zachter dan helemaal rond, niet vierkant)
- Padding: ~14px vertical, 24-28px horizontal
- Font: Inter 600, label-tekst 15-16px
- Hover: schaduw-toename `0 6px 16px rgba(0,0,0,0.12)` en `translateY(-1px)`
- Optioneel: lime cirkel-pijl rechts naast tekst (zie signatuur-element 3) — vooral op Primary

**Highlighter / heading-blokken (3 varianten):**
Voor het hero-effect en grote section-labels gebruiken we gestapelde "label-blokken" met platte achtergrond. Drie kleurvarianten:

| Variant | Achtergrond | Tekst | Gebruik |
|---|---|---|---|
| Volt-highlight | `#B9FF66` | Onyx | Hero-keyword (bv. cyclende AI/Automations/Apps), accent in sectie-koppen |
| Wit | `#FFFFFF` | Onyx | Stille variant, op Canvas-achtergrond voor subtiel ritme |
| Onyx | `#191A23` | Wit | Donkere variant, voor contrast op lichte secties of binnen donkere blokken |

Specs:
- Padding: 0-8px horizontaal, lichte verticale padding (~4-6px) zodat tekst niet aan de rand kleeft
- Border-radius: 5-6px (subtiel afgerond, niet pill-shape)
- Letters blijven Inter 700 met dezelfde tight letter-spacing als de heading waarin ze staan
- Bij gestapelde labels (3 op elkaar): geen extra gap, blokken raken elkaar of overlappen 1-2px voor de "sticker"-look

---

## 3. Design principles

### Visuele balans

- **60-30-10 regel voor kleur** (Canvas, Volt, Onyx)
- **60-30-10 regel voor beeld**: 60% rust en witruimte, 30% UI/screenshots/abstract content, 10% beelden die opvallen (3D, kleur, foto)
- **Veel witruimte.** Niet bang zijn voor lege ruimte. Premium voelt nooit krap.
- **Lime is schaars.** Hoe minder je het gebruikt, hoe meer impact het heeft. Niet overal lime.

### Beeldstrategie

**Wel doen:**
- Echte product screenshots van eigen projecten in browser-frames met subtiele schaduw
- Abstracte UI-elementen (mini grafieken, terminals, status panels)
- Eigen foto's (werkplek, handen op laptop, whiteboard met schetsen)
- Hand-drawn iconen, spaarzaam (alleen voor kleine plekken)
- Optioneel: 3D objecten (via Spline) of geometrische patronen

**Niet doen:**
- Stockfoto's van lachende mensen met headsets
- Generieke AI-art (gloeiende blauwe breinen, neurale netwerken)
- Cliché tech-iconen (tandwielen, cloud-symbolen)
- Meerdere illustratie-stijlen door elkaar
- Te veel verschillende beelden bij elkaar

### Layout principles

- **Vertical rhythm.** Consistente spacing tussen secties: 80-120px desktop, 60-80px mobile
- **Container max-width:** 1200px voor content, 1400px voor full-bleed elementen
- **Grid:** 12-koloms grid voor desktop, single column voor mobile
- **Border-radius standaard:** 10-14px voor cards, 6-10px voor knoppen, 5-6px voor kleine elementen zoals badges
- **Schaduwen:** subtiel, niet dramatisch. `box-shadow: 0 8px 24px rgba(0,0,0,0.08)` is een goeie standaard

### Animatie & interactie

- **Smooth maar niet aandachttrekkend.** Animaties zijn er om hardware te tonen, niet om te schreeuwen.
- **Easing:** gebruik `cubic-bezier(0.4, 0, 0.2, 1)` als default
- **Duration:** 200-400ms voor micro-interacties, 600-1200ms voor scroll-onthullingen
- **Hover states:** subtiele schaduw-toename, lichte upward movement (translateY -2px)
- **Reduced motion:** respecteer `prefers-reduced-motion` voor toegankelijkheid

---

## 4. Pagina-architectuur (homepage)

De homepage is opgebouwd uit 6 secties:

### Sectie 1: Hero

**Wat:** Visuele opener met animerende A-woorden.

**Layout:**
- Drie regels gestapeld:
  ```
  Broere
  [AI]      ← lime highlighter, woord wisselt
  Solutions
  ```
- Het lime blokje cycelt door **5 woorden**: AI → Automations → Apps → APIs → Analytics
- Timing: 2.4 seconden per woord (5 woorden = 12 seconden cyclus)
- Animatie: woord schuift omhoog uit beeld, nieuw woord schuift omhoog in beeld (vertical slide)
- Lime blokje heeft `min-width: 280px` zodat het niet hopt bij kortere woorden

**Boven de titel:**
- Klein monospace label met pulserende lime dot: "● BESCHIKBAAR VOOR NIEUWE PROJECTEN"

**Onder de titel:**
- Subtekst: "Mini SaaS-tools, automatiseringen en maatwerk software die je business concreet vooruit helpen. Geen hype, gewoon quick wins die werken."
- Twee knoppen:
  1. **Primary:** "Plan een gesprek" met lime cirkel-pijl
  2. **Secondary:** "Bekijk projecten" als outline button

**Scroll-gedrag:**
- Bij scrollen voorbij hero verschijnt het normale logo "broere · ai" in de top navigatie
- De hero zelf transformeert **niet**, hij scrollt gewoon weg (geen dramatische collapse)
- Sticky navigatie krijgt subtiele border-bottom bij scroll

### Sectie 2: Wat ik doe (diensten)

**Wat:** Vier dienst-categorieën in een 2x2 grid.

**Header:**
- Section label (lime badge): "Wat ik doe"
- Section title: "Technologie die je business naar het volgende niveau tilt."
- Section sub: "Vier kerngebieden waar ik MKB-bedrijven mee help."

**Cards (in deze volgorde, met dit kleurritme):**

| Volgorde | Titel | Kleur card | Beschrijving |
|---|---|---|---|
| 1 | Automations | Wit | Workflow automatisering die repetitief werk uit handen neemt. Met n8n, Make of custom scripts. |
| 2 | Integrations | Lime | Systemen aan elkaar koppelen zodat data automatisch stroomt. APIs, webhooks, data sync. |
| 3 | Custom Software | Onyx (donker) | Mini SaaS-tools en dashboards op maat. Gebouwd met Next.js, Supabase en moderne tooling. |
| 4 | AI Solutions | Wit | AI ingebouwd in je tools en processen. Niet als losse bolt-on, maar echt geïntegreerd. |

**Per card:**
- Badge bovenaan met categorie-naam (in tegengestelde kleur van de card)
- Korte beschrijving (1-2 zinnen)
- Optioneel: klein hand-drawn icoon
- Onderaan: "Lees meer →" met circulaire pijl

### Sectie 3: Projecten

**Wat:** Showcase van eigen mini SaaS-projecten. Klikbare kaarten.

**Header:**
- Section label: "Projecten"
- Title: "Tools die ik heb gebouwd."
- Sub: "Mini SaaS-tools die concreet werk uit handen nemen. Klik voor de full case."

**De drie projecten:**

1. **Planningstool**
   - Wat: Plant team-taken en evenementen overzichtelijk
   - Stack: Next.js + Supabase
   - Voor wie: Teams die overzicht missen in hun planning
   - Visueel: screenshot van de UI in een browser-frame

2. **Evenementen tekentool**
   - Wat: Visuele tekentool voor het uitwerken van event-layouts
   - Stack: Next.js + Supabase + Canvas API
   - Voor wie: Event-organisatoren die snel layouts willen schetsen
   - Visueel: screenshot van de canvas UI

3. **Feedback tool**
   - Wat: Centraliseert feedback van klanten en teams
   - Stack: Next.js + Supabase
   - Voor wie: Bedrijven die feedback verspreid hebben over kanalen
   - Visueel: screenshot van de feedback inbox

**Card design:**
- Browser-frame met titelbalk (drie macOS-dots, URL bar)
- Echte screenshot van de tool (vervang mocks zsm met echte beelden)
- Onder de screenshot:
  - Project titel
  - Tech stack als monospace tags
  - Korte omschrijving (1 zin)
  - "Case bekijken →" link

### Sectie 4: Mijn aanpak

**Wat:** Het proces van idee naar werkende tool. Toont dat je gestructureerd werkt.

**Layout:** Horizontale tijdlijn met 4 stappen, elk met een nummer en korte beschrijving.

1. **Verkennen** — We bespreken je probleem en kijken waar de quick win zit.
2. **Schetsen** — Ik maak een concept-uitwerking met scope, planning en prijs.
3. **Bouwen** — Iteratief ontwikkelen in korte sprints, met regelmatig demo's.
4. **Live** — De tool gaat live, met documentatie en optionele doorontwikkeling.

**Optionele visuals:**
- Per stap een mini-screenshot of UI-snippet
- Een terminal-stijl element met een "deploy" sequence

### Sectie 5: Over mij

**Wat:** Het persoonlijke verhaal. Maakt het merk menselijk.

**Layout:** Twee koloms, links foto, rechts tekst.

**Tekst:**
- Korte intro: "Hi, ik ben [naam]."
- Het verhaal: tech-freak, ziet de kloof tussen wat kan en wat MKB doet, wil dat dichten
- Wat onderscheidt: ik bouw zelf, geen tussenlaag, je werkt direct met de maker
- Klein lijstje met expertise: Next.js, Supabase, n8n, AI integraties, etc.

**Foto:**
- Echte foto, geen stock
- Bij voorkeur: werkplek-setting, natuurlijk licht
- Of detail-shot: handen op laptop, whiteboard met schetsen

### Sectie 6: Contact

**Wat:** Conversie-moment. Plan een gesprek.

**Layout:** Donkere sectie (Onyx achtergrond) voor visueel contrast met de rest van de site.

**Inhoud:**
- Title: "Klaar voor een quick win?"
- Sub: "Plan een vrijblijvend kennismakingsgesprek. We bespreken je probleem en kijken wat er mogelijk is."
- Twee opties:
  1. Cal.com / Calendly embed of link
  2. Mail-link: hi@broere.ai
- Optioneel: socials (LinkedIn, GitHub)

### Footer

**Inhoud:**
- Logo + tagline
- Sectie-links (Diensten, Projecten, Over, Contact)
- Contact: email, LinkedIn
- KvK + BTW nummer
- Copyright

---

## 5. Technische stack

### Framework

**Astro** is de keuze. Waarom:

- Genereert statische HTML, super snel
- Top voor SEO (Core Web Vitals scores ~100/100 standaard)
- Built-in support voor Markdown blogs
- Past in een Vercel/Cloudflare Pages workflow (gratis hosting)
- Toekomstbestendig, code blijft van jou

**Aanvullende dependencies:**
- Tailwind CSS voor styling (config met merk-kleuren als design tokens)
- Astro Content Collections voor blog en cases
- View Transitions voor smooth page transitions

### Project structuur (suggestie)

```
broere-ai/
├── public/
│   ├── fonts/                 # Self-hosted Inter & JetBrains Mono
│   ├── images/
│   │   ├── projects/         # Project screenshots
│   │   └── personal/         # Eigen foto's
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── ServicesGrid.astro
│   │   ├── ProjectCard.astro
│   │   ├── Approach.astro
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Navigation.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── Badge.astro
│   │       └── BrowserFrame.astro
│   ├── content/
│   │   ├── projects/         # Markdown files per project
│   │   ├── blog/             # Markdown files per blogpost
│   │   └── config.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projecten/
│   │   │   └── [slug].astro
│   │   ├── blog/
│   │   │   └── [slug].astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── CLAUDE.md                  # Dit bestand
```

### Design tokens (Tailwind config)

```js
theme: {
  extend: {
    colors: {
      canvas: '#F3F3F3',
      volt: '#B9FF66',
      'volt-dark': '#A5E55C',
      onyx: '#191A23',
      'onyx-soft': '#0F1018',
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'monospace'],
    },
    letterSpacing: {
      tightest: '-0.04em',
      tighter: '-0.03em',
      tight: '-0.02em',
    },
  },
}
```

### Performance eisen

- **Lighthouse score:** 95+ op alle metrics (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals:** alle groen
- **Page weight:** homepage < 500KB inclusief fonts en eerste screenshot
- **Time to Interactive:** < 1.5s op 4G
- **Geen JavaScript voor de hero animatie** waar mogelijk, gebruik CSS animations

### SEO

- **Meta tags** per pagina: title, description, og:image, twitter:card
- **Structured data (JSON-LD):** Organization schema, Person schema voor over-pagina
- **Sitemap.xml** auto-genereren via Astro
- **Robots.txt** standaard openbaar
- **Open Graph images** per pagina (bij voorkeur dynamisch gegenereerd)
- **Canonical URLs**
- **Alt-text op alle images**, beschrijvend
- **Heading hiërarchie correct** (één H1 per pagina, logische opbouw)
- **Schoon URL-pad**: `/projecten/planningstool`, niet `/project?id=1`

### Deployment

- **Hosting:** Cloudflare Pages (gratis) of Vercel (gratis tier)
- **Domain:** broere.ai (registreren bij Cloudflare Registrar, ~€70-100/jaar)
- **DNS:** Cloudflare
- **Analytics:** Plausible of Cloudflare Web Analytics (privacy-first, geen cookies)
- **Forms:** Cloudflare Workers of een service als Formspree

---

## 6. Content guidelines

### Schrijfstijl voor de site

**Headers:**
- Kort en krachtig
- Maximaal 6-8 woorden
- Geen vraagteken-koppen ("Wat doet jij?"), gewoon stellig
- Gebruik de highlighter spaarzaam, max 1 woord per heading

**Body tekst:**
- Korte zinnen (10-20 woorden)
- Actieve vorm ("ik bouw" niet "er worden gebouwd")
- Direct aanspreken ("jouw bedrijf", "voor jou")
- Concreet ("scheelt 4 uur per week" beter dan "verhoogt productiviteit")
- Eerlijk over wat iets is en kost

**Voorbeelden goed/slecht:**

| Niet doen | Wel doen |
|---|---|
| Wij ontzorgen u met onze geavanceerde AI-oplossingen | Ik bouw AI-tools die je werk uit handen nemen |
| Synergie tussen mens en machine | Tools die je werk slimmer maken |
| Onze experts staan voor u klaar | Je werkt direct met mij |
| Disruptieve technologie | Slimme technologie die werkt |
| Best-in-class solutions | Tools die het werk doen |

### Blog-strategie (later)

Wanneer de basis-site live staat, blog-content toevoegen voor SEO. Mogelijke onderwerpen:

- Case studies: hoe heb je een specifiek probleem opgelost
- Tech tutorials: "Zo bouw je X met Next.js en Supabase"
- Branche-inzichten: "Waar MKB nu echt AI voor kan gebruiken"
- Tools-reviews: vergelijkingen, ervaringen, kritisch

**Frequentie:** maandelijks 1-2 posts is realistisch. Liever consistent dan veel.

---

## 7. Beslissingen die al genomen zijn

Lijst van belangrijke keuzes die in dit project vastliggen, zodat ze niet opnieuw bediscussieerd worden:

- ✅ Lichte stijl (Canvas-basis), niet donker
- ✅ Highlighter-effect als signatuur (lime achter losse woorden)
- ✅ Logo: "broere · ai" wordmark met lime dot
- ✅ Hero met animerende A-woorden — huidige set: AI / Apps / Automations / APIs / Agents (de oorspronkelijke "Analytics" is vervangen door "Agents")
- ✅ Scroll-gedrag: hero blijft staan, logo verschijnt in nav (geen dramatische collapse)
- ✅ Diensten per technologie (niet per uitkomst)
- ✅ 4 diensten: Automations, Integrations, Custom Software, AI Solutions
- ✅ Geen AI chatbots aanbieden
- ✅ Doelgroep: MKB 10-50 medewerkers
- ✅ Astro als framework
- ✅ Hosting op Cloudflare Pages of Vercel
- ✅ Domein: broere.ai
- ✅ Inter + JetBrains Mono als fonts
- ✅ Echte product screenshots als primaire visual asset
- ✅ Eigen foto in over-sectie (geen stock)
- ✅ Hero-badge tekst: "Jouw partner in:" (was: "Beschikbaar voor nieuwe projecten"). Styling: Inter medium 15px, sentence case, geen mono/uppercase. Pulserende lime dot blijft als signatuur.
- ✅ Hero-layout: split-layout — tekst-kolom links (aligned met het 1200px-grid), dashboard-screenshot rechts. Op `xl`+ schermen bleed de afbeelding via negatieve right-margin (`calc(540px - 50vw)`) voorbij de viewport-rand voor extra impact. Hero-image: `/images/hero-dashboard.png` (clean browser-frame screenshot, niet de studio-foto).
- ✅ Partners-sectie ("Onze partners:") direct onder de hero, op `bg-white` voor visuele scheiding. Compact (`pt-6 lg:pt-8`, `pb-10 lg:pb-14`). Label in Inter medium sentence case (geen mono/uppercase — wijkt af van het signatuur-element omdat het hier rustiger moet). Logo-treatment: `mix-blend-mode: multiply` + `grayscale(100%) brightness(0.35) contrast(1.4)` voor monochroom effect. 4 partners: MoveBuddy, Captain, Bambelo, fietsenrekhuren.com (laatste als tekst-wordmark in Inter, omdat de JPG met groene achtergrond niet werkt met het zwart-wit treatment).
- ✅ Projecten-sectie design: light mode, custom achtergrond met basistint `#ECECEC` + subtiele Volt radial-gradient glows in tegengestelde hoeken + transparant grid-patroon (64×64px lijnen op 5% Onyx-opacity). 3 cards in een grid (`grid-cols-3` op `lg`, stack op kleinere schermen).
- ✅ Project-card design: aspect-[4/5] portret, vol-bleed achtergrond-foto + donker overlay-verloop voor leesbaarheid, tekst-overlay (jaar + categorie boven, grote witte titel + lime cirkel-pijl onder). Hover: lift 4px + image-zoom 4%.
- ✅ Project-data ondersteunt optionele `image` property; default fallback: `/images/0fee03df-bb3f-4e63-af21-cedff5427e99.png` (laptop studio shot). Project "Evenementen tekentool" heeft eigen image (`/images/tekentool.png`).

---

## 8. Wat er nog open staat

Lijst van zaken die nog uitgewerkt moeten worden:

- ⏳ Definitieve eigen foto's maken
- ⏳ Product screenshots voor "Crew planning & uren tool" en "Feedback platform" (tekentool heeft `/images/tekentool.png`; de andere twee gebruiken nu nog de default laptop studio shot)
- ⏳ Volledige content schrijven per dienst-pagina
- ⏳ Diensten-sectie (Automations / Integrations / Custom Software / AI Solutions) nog niet geïmplementeerd
- ⏳ Aanpak-sectie (4-staps tijdlijn: Verkennen → Schetsen → Bouwen → Live) nog niet geïmplementeerd
- ⏳ Over-mij sectie nog niet geïmplementeerd
- ⏳ Contact-sectie (Onyx-donker) nog niet geïmplementeerd
- ⏳ Project-detailpagina's `/projecten/[slug]` aanmaken (anders zijn de card-links nu broken)
- ⏳ Case studies uitwerken voor de drie projecten
- ⏳ Contact-flow bepalen (Cal.com vs Calendly vs eigen form)
- ⏳ Eventuele 3D-elementen via Spline.design (later, optioneel)
- ⏳ Blog-strategie en eerste posts
- ⏳ KvK-registratie + BTW-nummer voor footer
- ⏳ LinkedIn en GitHub profielen koppelen
- ⏳ Privacy statement + cookie melding (zo minimaal mogelijk)

---

## 9. Voor Claude Code: hoe te werken

Als je code schrijft voor dit project:

1. **Lees eerst dit hele bestand.** Maak geen aannames over wat het merk is of hoe het oogt.

2. **Volg de design tokens.** Gebruik Tailwind classes die mappen naar de gedefinieerde kleuren. Niet `bg-green-400`, wel `bg-volt`.

3. **Componenten zijn klein en herbruikbaar.** Liever een Button-component met varianten dan overal opnieuw button-styling.

4. **Mobile first.** Schrijf eerst voor mobile, dan responsief naar desktop.

5. **Toegankelijkheid is non-negotiable.** Semantische HTML, focus states, aria-labels waar nodig, voldoende contrast.

6. **Performance is een feature.** Geen onnodige libraries, geen client-side JavaScript waar SSG het ook kan, optimaliseer images.

7. **Bij twijfel: vraag.** Liever even checken dan een aanname maken die de stijl breekt.

8. **Update dit document.** Als je beslissingen neemt die hier nog niet staan, voeg ze toe aan sectie 7 of 8.