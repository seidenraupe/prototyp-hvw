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
| Mitmachen | `mitmachen.html` | Mitgliedschaft → Webling |

## Technische Anbindungen (Prototyp)

- **Eventfrog:** Live-Embed auf `agenda.html` mit orgId 4936116 & 5116588
- **Webling:** Links zeigen auf `hvwinterthur.webling.ch` (Platzhalter — korrekten Endpunkt bei Umsetzung eintragen)
- **WordPress:** Geplante Umsetzung; dieser Prototyp dient als Design- und UX-Referenz

## Design

- Visueller Stil orientiert an museumschaffen.ch (Raster, Linien, Grossbuchstaben-Labels, Blau-Akzent)
- UX nach aktuellen Standards: sichtbare Desktop-Navigation, 18px Grundschrift, Mobile-First, klare CTAs
