---
title: "Evenementen tekentool"
year: 2026
category: "Web applicatie"
order: 2
excerpt: "Tekentool voor het tekenen en genereren van plattegronden van fietsenstallingen, voor de meest optimale terreinbezetting"
coverImage: "/images/tekentool.png"
coverAlt: "Screenshot van de evenementen tekentool"
stack:
  - "React"
  - "Typescript"
  - "Vite"
  - "Google Maps API"
client: "Maatwerk opdracht"
role: "Concept, design en development"
problem: >
  Event-organisatoren moeten nogsteeds handmatig hun plattegronden schetsen, zodat het personeel weet hoe zij moeten opbouwen. Dit tekenwerk vraagt veel tijd, en tekent niet altijd de meest optimale stalling.
solution: >
  Als oplossing heb ik hiervoor een custom AI-enhanced tekentool ontworpen waarmee plattegronden schetsen een fluitje van een cent wordt. Het enige wat jij hoeft te doen, is een gebied te selecteren, ingangen te definiëren en de tool doet al het tekenwerk. Dit wordt gedaan aan  de hand van wiskundige berekeningen, om het terrein zo optimaal mogelijk te benutten!
  
metrics:
  - label: "Setup-tijd per event"
    value: "5 min"
  - label: "Terreinbenutting"
    value: "+10%"

gallery: []
---
## Het idee
Het idee begon heel simpel. Wat nou als ik een plattegrond in ChatGPT kon uploaden en hij automatisch een stalling tekent. Zou moeten kunnen toch? Al snel bleek het dat hier meer bij komt kijken dan enkel een tekening. Hoe zit het met de lengte van de rekken? hoe weet je hoeveel 1cm op de plattegrond in het echt is? Hoe weet de tool waar hij niet mag bouwen? Wat als de rekken op een andere gradenhoek moeten liggen? Al snel kwam de conclusie dat dit niet zomaar iets was dat in ChatGPT of Gemini gebouwd kan worden. 

Wat nou als je gewoon google maps kan gebruiken om in te bouwen? Met deze vraag ontstond het idee, en ben ik van slag gegaan met het maken van een schil hier omheen. 
- Een Google Maps canvas om je plattegrond in uit te zoeken en afmetingen uit te kunnen halen
- Een tekenprogramma als laag erboven waarin je je eigen tools hebt om een stalling mee te bouwen

## Machine mode
Bij het ontwikkelen hiervan konden we niet het core-idee vergeten waarin je een fietsenstalling kan genereren. Door het opslaan van de plattegrond ratio, de lengte van de fietsenrekken, de grote van het terrein en de ingangspaden, kunnen we hier wiskundige modellen op los laten die de meest optimale stalling berekenen. Dit noemen we in de app "Machine Mode"




## En dat in 5 stappen

- **Kies een plattegrond** via google maps of door een kaart te uploaden.
- **Zet je terrein af** vermeid water, heuvels en hekken.
- **Teken ingangspaden** hier mogen geen fietsenrekken komen te staan.
- **Kies de rekafstand** zodat er genoeg ruimte is voor fietsen.
- **Genereer fietsenstalling** de meest optimale fietsenstalling wordt nu automatisch berekend.

## Wat het oplevert

Waar je eerst een half uur zat te ploeteren, meten, tekenen in de hoop dat het te begrijpen viel voor de medewerkers, kan je nu direct door een plattegrond te uploaden een fietsenstalling laten genereren. Simpel en overzichtelijk, ben je er blij mee, dan kan je de plattegrond exporteren en meegeven aan je opbouwploeg.