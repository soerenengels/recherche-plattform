# re:form

— A platform for investigative research by journalists [en]  
— Eine Rechercheplattform für (investigative) Journalist:innen [de]

**re:form** is based on the approach of _story-based inquireries_ by Mark Lee Hunter and Luuk Sengers. [en]  
Die Rechercheplattform **re:form** basiert auf dem Ansatz der _story-based inquireries_ von Mark Lee Hunter und Luuk Sengers. [de]

Amount of nights spent with this side-project: 6 [en]  
Anzahl der mit diesem Nebenprojekt verbrachte Nächte: 7 [de]

Possible through the use of Vue.js. Thanks. [en]  
Möglich durch Vue.js. Danke. [de]

uses: vue-i18n@next, vuedraggable.next

## To Do

### Tables

- Thema: Funktion für das Hinzufügen eines neuen Artikels
- Thema: Tabellenzellen mehr Funktionen entsprechend Kontext geben(z.B. bei URL)
- Quellen: Tabelle stylen
- Quellen: Tabelle responsive machen
- Kontakte: Social Media richtig anzeigen

### Stability & Collaboration

- state stabil lokal oder in Datenbank speichern (https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store)
- [Native-File-API](https://web.dev/file-system-access/) benutzen, um in regelmäßigen Abständen state als lokale Datei zu speichern
- SaveStatus: functionality + adjustments on smaller screens

### File-Editor

- File/BlockEditor: Textarea-Höhe anpassen
- improve design of handles

### Navigation UX

- decouple navigation from router-view, so that after a click the navigation stays stable

### Accessibility & Internationalization

- A11y needs to be reviewed and improved
- Translation needs to be completed and improved

### in future

- improve File-View to be a fully functional (block/markdown) editor
- enable collaborative work through saving/loading the state as local file in/from the cloud
- maybe integrate a transkription-api
- Marketing-Page

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
- https://benmyers.dev/blog/aria-labels-and-descriptions/

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

#### Offline
https://ionicframework.com/blog/best-practices-for-building-offline-apps/
https://www.smashingmagazine.com/2020/12/progressive-web-apps/

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
