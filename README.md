# re:form

— Eine Rechercheplattform für (investigative) Journalist:innen

Die Rechercheplattform **re:form** basiert auf dem Ansatz der _story-based inquireries_ von Mark Lee Hunter und Luuk Sengers.

Anzahl der mit diesem Nebenprojekt verbrachte Nächte: 3

## To Do

- Hypothese: Konkrete Anleitung zum Schreiben einer Hypothese verfassen
- Hypothese: Freitextfeld für das Verfassen einer Hypothese einfügen
- Chronik: Buttons richtige Funktion zuweisen
- Quellen: Tabelle stylen
- Quellen: Tabelle responsive machen
- File: Toggle-Button einbauen zum umschalten zwischen Markdown und visueller Ansicht
- File: Zum Markdown-Editor machen
- File: im Aside Outline anzeigen
- File: im Aside Ereignisse anzeigen
- File: im Aside Hypothese anzeigen
- File: im Aside (abgeklopfte) Quellen anzeigen
- Thema: Tabelle als Komponente
- Thema: Funktion für das Hinzufügen eines neuen Artikels
- Transkriptions-API einbinden
- state stabil lokal oder in Datenbank speichern
- Authentifizierung hinzufügen
- Kollaboratives bearbeiten ermöglichen
- Kontakte: Social Media richtig anzeigen
- Menü: Aktiven Link bei kleinen Bildschirmen in Viewport scrollen

### Done

- Chronik: Vier Bereiche aufspannen
- Chronik: Ereignisse in ihren zugeordneten Bereichen anzeigen
- Chronik: Ereignisse klappbar machen
- Chronik: Datenstruktur für Ereignisse anlegen (id, type, title, description, date, actors) -> Dokumentiert in README.md
- Chronik: Buttons Basis-Funktion zuweisen
- Quellen: Alle Ereignisse in Tabelle anzeigen
- Components: Button: Primary, Secondary, Tertiary anlegen + +Icon

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
