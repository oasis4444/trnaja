/// <reference path="../pb_data/types.d.ts" />
// Sauvegarde automatique côté serveur : une copie complète (zip) toutes les 6 heures, 30 copies gardées (dans pb_data/backups).
migrate((app) => {
  const settings = app.settings();
  settings.backups.cron = "0 */6 * * *";
  settings.backups.cronMaxKeep = 30;
  app.save(settings);
}, (app) => {});
