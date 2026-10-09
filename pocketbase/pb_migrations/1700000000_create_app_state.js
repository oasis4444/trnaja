/// <reference path="../pb_data/types.d.ts" />
// Crée automatiquement la "boîte" app_state qui contient les données de TR Naja,
// avec les bons réglages (accès ouvert au logiciel, taille de données illimitée).
// Aucune manipulation à faire dans l'interface PocketBase.
migrate((app) => {
  try { app.findCollectionByNameOrId("app_state"); return; } catch (_) { /* n'existe pas encore */ }

  const collection = new Collection({
    type: "base",
    name: "app_state",
    listRule: "",
    viewRule: "",
    createRule: "",
    updateRule: "",
    deleteRule: null, // suppression réservée à l'administrateur
    fields: [
      { type: "text", name: "data", required: false, max: 50000000 },
    ],
  });
  app.save(collection);
}, (app) => {
  try { app.delete(app.findCollectionByNameOrId("app_state")); } catch (_) {}
});
