# HVW Website — Klickbarer HTML-Prototyp

Erster Prototyp für die neue Website des Historischen Vereins Winterthur.

## Starten

Datei `index.html` im Browser öffnen, oder lokalen Server starten:

```bash
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Dann: http://localhost:8080

## Seiten

| Seite | Datei | Inhalt |
|-------|-------|--------|
| Start | `index.html` | Hero, Programm-Preview, Museen, Zitate, Mitgliedschaft |
| Agenda | `agenda.html` | Eventfrog iFrame (live) |
| Museen | `museen.html` | Drei Museen des Vereins |
| Publikationen | `publikationen.html` | Neujahrsblatt, Reihen |
| Über uns | `ueber-uns.html` | Verein, Vorstand, Geldgeber |
| Stimmen | `zitate.html` | Zitate von historymatters.ch |
| Mitmachen | `mitmachen.html` | Mitgliedschaft, Anmeldeformular (Webling-iFrame) |

## Technische Anbindungen (Prototyp)

- **Eventfrog:** Live-Embed auf `agenda.html` (Programm-Vorschau auf `index.html` per `data/home-events.json`, siehe unten)
- **Webling:** Das echte Anmeldeformular (`https://hvwinterthur.webling.ch/forms/memberform/d9e980cf304ee928a7e5`) ist per iFrame auf `mitmachen.html#anmeldeformular` eingebettet. Alle „Beitreten“-Buttons (Startseite und Mitmachen-Seite) verlinken auf diesen Anker. Der iFrame-Ansatz wurde gewählt, weil Webling selbst keine Weiterleitung nach dem Absenden konfigurieren lässt — so bleibt die Besucherin/der Besucher immer auf der HVW-Website.
- **WordPress:** Geplante Umsetzung; dieser Prototyp dient als Design- und UX-Referenz

## Startseiten-Veranstaltungen (Eventfrog Public API)

Die 3 nächsten Veranstaltungen auf `index.html` werden **nicht** live per iFrame geladen, sondern aus `data/home-events.json` gerendert (siehe `js/main.js`). Diese Datei wird von `scripts/fetch-eventfrog-events.mjs` erzeugt, das die authentifizierte Eventfrog Public API abfragt (`perPage=3` als harte Begrenzung).

Aktualisierung erfolgt automatisch täglich über `.github/workflows/update-eventfrog-events.yml`. Dafür muss im Repository unter **Settings → Secrets and variables → Actions** ein Secret `EVENTFROG_API_KEY` hinterlegt sein. Manuell ausführen:

```bash
EVENTFROG_API_KEY=<key> node scripts/fetch-eventfrog-events.mjs
```

## Design

- Visueller Stil orientiert an museumschaffen.ch (Raster, Linien, Grossbuchstaben-Labels, Blau-Akzent)
- UX nach aktuellen Standards: sichtbare Desktop-Navigation, 18px Grundschrift, Mobile-First, klare CTAs
