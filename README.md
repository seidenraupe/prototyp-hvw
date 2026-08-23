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
| Start | `index.html` | Hero, Programm-Preview, Museen, Zitate, Mitgliedschaft, Mitmach-Möglichkeiten |
| Agenda | `agenda.html` | Eventfrog iFrame (live) |
| Museen | `museen.html` | Drei Museen des Vereins |
| Publikationen | `publikationen.html` | Neujahrsblatt, Reihen |
| Über uns | `ueber-uns.html` | Verein, Vorstand, Geldgeber |
| Stimmen | `zitate.html` | Zitate von historymatters.ch |
| Mitmachen | `mitmachen.html` | Mitgliedschaft, Anmeldeformular (Webling-iFrame), Ehrenamt |

## Technische Anbindungen (Prototyp)

- **Eventfrog:** Live-Embed auf `agenda.html` (Programm-Vorschau auf `index.html` per `data/home-events.json`, siehe unten)
- **Webling:** Das echte Anmeldeformular (`https://hvwinterthur.webling.ch/forms/memberform/d9e980cf304ee928a7e5`) ist per iFrame auf `mitmachen.html#anmeldeformular` eingebettet. Alle „Beitreten“-Buttons (Startseite und Mitmachen-Seite) verlinken auf diesen Anker. Der iFrame-Ansatz wurde gewählt, weil Webling selbst keine Weiterleitung nach dem Absenden konfigurieren lässt — so bleibt die Besucherin/der Besucher immer auf der HVW-Website.
  - Anmeldungen über das Formular werden in Webling automatisch der Gruppe **„Neue Mitglieder-Anmeldung (aus Website)“** zugeteilt (Konfiguration direkt im Webling-Formular-Editor, nicht im Code dieser Website). Ein:e Administrator:in prüft die Anmeldung und überträgt sie manuell in die Liste der aktiven Mitglieder (u. a. für die Rechnungsstellung des Mitgliederbeitrags). Da unser Embed lediglich das Formular unter der bestehenden URL anzeigt, übernimmt es diese Weiterleitungsregel automatisch — es sind keine Code-Änderungen nötig, wenn sich die Zielgruppe in Webling ändert. Die Website-Texte (`mitmachen.html`, `index.html`) weisen Besucher:innen entsprechend darauf hin, dass die Anmeldung erst nach manueller Prüfung aktiv wird.
- **Mitmach-Formulare:** Unterhalb der Mitgliedschafts-Karten auf `index.html` und unterhalb der Webling-Anmeldung auf `mitmachen.html` gibt es drei Ehrenamts-Boxen im gleichen Karten-Layout wie die Mitgliedschaften (Mörsburg-Führungen, Sammlung, Vorstand). Der Button **«bin interessiert»** öffnet darunter ein Formular; beim Absenden geht eine `mailto:`-Mail an `info@hvwinterthur.ch` mit Betreff aus der gewählten Box.
- **WordPress:** Geplante Umsetzung; dieser Prototyp dient als Design- und UX-Referenz

## Startseiten-Veranstaltungen (Eventfrog Public API)

Die 3 nächsten Veranstaltungen auf `index.html` werden **nicht** live per iFrame geladen, sondern aus `data/home-events.json` gerendert (siehe `js/main.js`). Diese Datei wird von `scripts/fetch-eventfrog-events.mjs` erzeugt, das die authentifizierte Eventfrog Public API für die Organisationen Museum Schaffen, Museum Lindengut und Schloss Mörsburg (`orgId` 4936116, 5116588, 5137433) abfragt und die 3 nächsten Termine schreibt. Eventbilder kommen aus dem API-Feld `emblemToShow`; fehlt das Bild dort, wird `og:image` der Eventfrog-Seite verwendet. Die Startseiten-Karten zeigen dieses Bild über Datum und Titel.

Aktualisierung erfolgt automatisch täglich über `.github/workflows/update-eventfrog-events.yml` (gleicher Ablauf wie in [prototype-hvw-website](https://github.com/seidenraupe/prototype-hvw-website)). Dafür muss im Repository unter **Settings → Secrets and variables → Actions** ein gültiges Secret `EVENTFROG_API_KEY` (Eventfrog Public API Key) hinterlegt sein. Manuell ausführen:

```bash
EVENTFROG_API_KEY=<key> node scripts/fetch-eventfrog-events.mjs
```

## Design

- Visueller Stil orientiert an museumschaffen.ch (Raster, Linien, Grossbuchstaben-Labels, Blau-Akzent)
- UX nach aktuellen Standards: sichtbare Desktop-Navigation, 18px Grundschrift, Mobile-First, klare CTAs
