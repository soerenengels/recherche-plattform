# re:form

— Eine Rechercheplattform für (investigative) Journalist:innen

Die Rechercheplattform **re:form** basiert auf dem Ansatz der _story-based inquireries_ von Mark Lee Hunter und Luuk Sengers.

Anzahl der mit diesem Nebenprojekt verbrachte Nächte: 4

## To Do

- Thema: Funktion für das Hinzufügen eines neuen Artikels
- Chronik: Verbesserung des Bindings von Event-Komponente & State
- Thema: Tabellenzellen mehr Funktionen entsprechend Kontext geben(z.B. bei URL)
- Quellen: Tabelle stylen
- Quellen: Tabelle responsive machen
- File: neuen Block einfügen bei Enter-Event
- File: im Aside (abgeklopfte) Quellen anzeigen
- Hypothese: mehrseitige Tutorial-Komponente erstellen
- Transkriptions-API einbinden
- state stabil lokal oder in Datenbank speichern (https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store)
- Authentifizierung hinzufügen
- Kollaboratives bearbeiten ermöglichen
- Kontakte: Social Media richtig anzeigen
- File: Toggle-Button Funktion geben
- File: Zum Markdown-Editor machen
- File: Make Blocks draggable (Cursor: https://developer.mozilla.org/de/docs/Web/CSS/cursor)
- Menü: Aktiven Link bei kleinen Bildschirmen in Viewport scrollen
- a11y
- i18n

### Done

- Thema: Tabelle als Komponente
- File: aside bei kleinen Bildschirmen anpassen
- Quellen: Anpassung der Schrift im Kontext-Bereich
- responsive Anpassung der EventsCard-Komponente
- Verbesserung der responsive-Anpassung der Navigation-Komponente
- responsive Anpassung der LayoutTwoThirds-Komponente
- Chronik: Vier Bereiche aufspannen
- Chronik: Ereignisse in ihren zugeordneten Bereichen anzeigen
- Chronik: Ereignisse klappbar machen
- Chronik: Datenstruktur für Ereignisse anlegen (id, type, title, description, date, actors) -> Dokumentiert in README.md
- Chronik: Buttons Basis-Funktion zuweisen
- Quellen: Alle Ereignisse in Tabelle anzeigen
- Components: Button: Primary, Secondary, Tertiary anlegen + +Icon
- Hypothese: Konkrete Anleitung zum Schreiben einer Hypothese verfassen
- Hypothese: Freitextfeld für das Verfassen einer Hypothese einfügen
- Chronik: Buttons richtige Funktion zuweisen
- File: im Aside Outline anzeigen
- File: im Aside Ereignisse anzeigen
- File: im Aside Hypothese anzeigen

## Chronik

Hier werden Ereignisse angelegt.

## Tags

- prop: tagsArray
- takes an Array with tag-objects

Tag-Objekt-Attribute:
value: String
backgroundColor: String -> Farbwert wird an style-Attribut gebunden

### Datenstruktur: event

id: Number, beginnt mit 0, aufsteigend
type: String, Optionen: [prob, cons, reas, solu]
title: String
content: String
date: Datum
actors: Array, Liste von Akteur:innen

## Assets

Icon inspiriert an: https://icon-library.com/icon/search-icon-free-29.html

### Acessability

Zu berücksichtigen: 

- Authoring Tool Acessability Guidelines https://www.w3.org/WAI/standards-guidelines/atag/
- Web Content Acessability Guidelines https://www.w3.org/WAI/standards-guidelines/wcag/
- https://html5accessibility.com/stuff/2020/11/24/know-your-standards/

### Potentielle Ressourcen

#### Kalendar

- https://github.com/SoorajSNBlaze333/tooltip-sequence

#### UI

- - https://spotify.design/article/5-things-i-wish-id-known-before-starting-a-design-system-at-spotify

#### Tabelle: UX

- https://www.uxbooth.com/articles/designing-user-friendly-data-tables/

#### Tabelle: Select

- https://github.com/sagalbot/vue-select

#### Tabelle: Responsiveness

- https://adrianroselli.com/2020/11/under-engineered-responsive-tables.html

#### Formular-Gestaltung, File-Upload

- https://austingil.com/build-html-forms-right-styling/

#### Markdown-Editor

- https://github.com/markdown-it/markdown-it
- https://github.com/commonmark/commonmark.js

#### Onboarding: Tooltip-Sequenz

- https://github.com/SoorajSNBlaze333/tooltip-sequence

#### Testing

- https://www.smashingmagazine.com/2020/11/vue-applications-vue-testing-library/

#### API

- https://www.w3.org/TR/2020/NOTE-design-principles-20201110/

## Kickstart

```bash
npm install
npm run serve
```

## Entwicklung

### Installation

```bash
npm install
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```

### Lints and fixes files

```bash
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
