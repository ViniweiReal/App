# Hex Smiley Editor

Eine kleine UI-App: Du klickst auf einen Smiley im Bild und änderst nur dessen Farbe per Hex-Code.

## Starten

```bash
python3 -m http.server 4173
```

Danach im Browser öffnen: `http://localhost:4173`.

## Nutzung

1. Smiley anklicken.
2. Hex-Code eingeben (z. B. `#ff0000`).
3. Auf **Farbe anwenden** klicken.

Nur der ausgewählte Smiley wird eingefärbt, die anderen behalten ihre Farbe.

## Wenn GitHub „This branch has conflicts“ zeigt

Das ist ein Git-Problem, nicht ein Browser-Problem. Löse es lokal so:

```bash
git fetch origin
git checkout <dein-branch>
git rebase origin/<ziel-branch>
# Konflikte in README.md, app.js, index.html, styles.css auflösen
git add README.md app.js index.html styles.css
git rebase --continue
git push --force-with-lease
```

Danach sollte der Merge-Button wieder funktionieren.
