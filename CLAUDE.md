# TR Naja – notes pour Claude Code
- Tout le logiciel est dans `index.html` (HTML + CSS + JS vanilla, données dans localStorage `DB`). Pas de build. Les anciens fichiers `js_part*.js` n'existent plus : `index.html` est la source.
- Réponds en français, explications très simples (utilisateur non technique).
- Synchro PocketBase : collection `app_state`, champ texte `data` (toute la base en JSON). Fonctions `pb*`, `uiSetupServer`, `autoConfigServer`. Migration dans `pocketbase/pb_migrations`.
- Ticket (80 mm) : `buildReceiptHtml`, `fitReceiptPageHeight`, CSS `@page receipt-page`, `@page margin:0` pour retirer l'en-tête/pied du navigateur. Cacher avec `display:none` (pas `visibility`). Vérifier 1 seule page en Chromium/Playwright.
- Un contrôle syntaxe : extraire le `<script>` et le passer à `new Function`.
- Desktop : `desktop/` (Electron), le workflow copie `index.html` dans `desktop/app/`.
- Commits : terminer par `Co-Authored-By: Claude Sonnet 5.5 <noreply@anthropic.com>` et `Claude-Session: https://claude.ai/code/session_01AZBPRmm5Y7XfzgbPDiTZ61`.
