# Serveur PocketBase (facultatif)

Sert à partager les données entre plusieurs appareils. Le logiciel marche aussi seul (hors ligne).

## Sans installation sur le PC du client
Utiliser un PocketBase hébergé en https (ex. PocketHost). Puis dans le logiciel :
Paramètres → Synchronisation → « Première installation du serveur » (une seule fois),
puis « Lien de configuration automatique » : le client ouvre ce lien et c'est prêt.

## Sur un PC local
1. Télécharger PocketBase (Windows) sur pocketbase.io, mettre `pocketbase.exe` dans ce dossier.
2. Double-cliquer `Lancer_PocketBase.bat`. Le dossier `pb_migrations` crée la collection `app_state` tout seul.
