# Fabriquer le .exe de TR Naja — SANS RIEN INSTALLER sur votre PC

Tout se passe dans votre navigateur (Chrome, Safari...) et sur les serveurs gratuits de GitHub — votre ordinateur ne fait que télécharger le résultat final à la fin. Comptez environ 10 minutes, dont 3-5 minutes d'attente pendant la fabrication automatique.

## Étape 1 — Créer un compte GitHub (gratuit)
1. Allez sur **https://github.com** dans votre navigateur.
2. Cliquez sur **"Sign up"** (S'inscrire) et suivez les instructions (e-mail + mot de passe).
3. Confirmez votre e-mail si demandé.

## Étape 2 — Créer un nouveau "dépôt" (repository)
1. Une fois connecté, cliquez sur le bouton **"+"** en haut à droite → **"New repository"**.
2. Donnez-lui un nom, par exemple `trnaja-gestion`.
3. Laissez-le en **"Private"** (privé, pour que personne d'autre ne le voie) ou "Public", peu importe.
4. Cliquez **"Create repository"**.

## Étape 3 — Envoyer les fichiers du projet
1. Sur la page de votre nouveau dépôt (encore vide), cliquez sur **"uploading an existing file"** (ou "Add file" → "Upload files").
2. Sur votre ordinateur, **décompressez** le fichier `TR_Naja_Projet_EXE.zip` que je vous ai fourni (clic droit → "Extraire tout" sous Windows).
3. Ouvrez le dossier `trnaja_exe` obtenu. Vous devez voir à l'intérieur : `main.js`, `package.json`, le dossier `app`, le dossier `build`, et le dossier `.github` (il est bien visible sous Windows, ne vous inquiétez pas du point devant le nom).
4. **Sélectionnez tout le contenu** de ce dossier (Ctrl+A à l'intérieur du dossier `trnaja_exe`, PAS le dossier `trnaja_exe` lui-même), puis **glissez-déposez** cette sélection dans la zone de la page GitHub ("Drag files here").
5. Attendez que tous les fichiers apparaissent dans la liste (une trentaine de secondes selon votre connexion).
6. Tout en bas de la page, cliquez sur le bouton vert **"Commit changes"**.

## Étape 4 — Lancer la fabrication automatique
1. En haut de la page de votre dépôt, cliquez sur l'onglet **"Actions"**.
2. Vous devriez voir une fabrication déjà en cours (déclenchée automatiquement par votre envoi de fichiers), nommée **"Build TR Naja EXE (Windows)"**, avec un rond orange/jaune qui tourne.
   - Si vous ne voyez rien, cliquez sur "Build TR Naja EXE (Windows)" dans la liste à gauche, puis sur le bouton **"Run workflow"** → **"Run workflow"** (vert).
3. Cliquez sur cette fabrication en cours pour voir son avancement en direct.
4. **Patientez 3 à 5 minutes.** Le rond devient une **coche verte ✅** quand c'est terminé.

## Étape 5 — Télécharger votre .exe
1. Sur la page de la fabrication terminée (coche verte), **descendez tout en bas**.
2. Dans la section **"Artifacts"**, cliquez sur **"TR-Naja-EXE-Windows"** → le téléchargement démarre (un fichier .zip).
3. Décompressez ce .zip téléchargé : vous y trouverez vos fichiers .exe :
   - **`TR Naja - Gestion Setup 1.0.0.exe`** → installateur classique (double-clic, Suivant, Suivant, Installer).
   - **`TR Naja - Gestion 1.0.0.exe`** (portable) → se lance directement, pratique sur une clé USB.

C'est terminé ! Le logiciel obtenu fonctionne ensuite **entièrement hors connexion**, comme la version actuelle — internet n'aura servi qu'à la fabrication.

## Remarques importantes
- **Windows peut afficher un avertissement** ("Windows a protégé votre ordinateur") au premier lancement du .exe, car il n'est pas signé numériquement (une signature coûte plusieurs centaines d'euros par an à un éditeur). Cliquez sur **"Informations complémentaires"** puis **"Exécuter quand même"**.
- Vos données restent stockées sur l'ordinateur qui fait tourner le .exe, comme avec la version HTML — elles ne sont pas reprises automatiquement si vous utilisiez déjà l'ancienne version. Faites Paramètres → Sauvegarde (export) sur l'ancienne version, puis réimportez dans la nouvelle si besoin.
- Si je vous donne une nouvelle version du logiciel plus tard, remplacez simplement le fichier `app/index.html` dans votre dépôt GitHub (bouton "Add file" → "Upload files" à nouveau, il proposera de remplacer l'ancien), puis refaites l'étape 4.

## Si quelque chose ne fonctionne pas
- **La fabrication échoue (croix rouge ❌)** : cliquez dessus pour voir le message d'erreur, et montrez-le-moi — je pourrai corriger le projet.
- **Pas d'onglet "Actions" visible** : vérifiez que vous êtes bien sur VOTRE dépôt (l'URL doit contenir votre nom d'utilisateur), pas sur une autre page.
