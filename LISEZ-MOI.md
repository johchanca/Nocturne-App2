# Nocturne

Carnet de lecture personnel. Une fois installée, l'appli s'ouvre en plein écran depuis l'écran d'accueil, fonctionne hors ligne et garde tes données sur le téléphone.

## Mettre l'appli en ligne (gratuit, avec GitHub Pages)

1. Décompresse ce dossier sur ton ordi.
2. Crée un compte gratuit sur github.com, puis un nouveau dépôt public (par exemple « nocturne »).
3. Dans le dépôt, choisis « uploading an existing file » et glisse-y tout le contenu du dossier : `index.html`, `manifest.webmanifest`, `sw.js` et le dossier `icons`. Valide avec « Commit changes ».
4. Va dans Settings, puis Pages. Sous « Build and deployment », choisis « Deploy from a branch », la branche `main` et le dossier `/ (root)`, puis Save.
5. Après une à deux minutes, GitHub affiche l'adresse de ton appli, du genre `https://ton-nom.github.io/nocturne/`.

## Installer sur le Pixel

1. Ouvre l'adresse dans Chrome.
2. Menu à trois points, puis « Installer l'application » (ou « Ajouter à l'écran d'accueil »).
3. L'icône Nocturne apparaît parmi tes applis.

## Reprendre tes livres de la version Claude

Dans l'ancienne version : Réglages, puis « Exporter (JSON) ». Dans Nocturne installée : Réglages, puis « Importer un JSON ».

## Tes données

- Elles sont enregistrées sur le téléphone seulement. Il n'y a pas de synchronisation avec un autre appareil.
- Si tu effaces les données de l'appli ou de Chrome, elles disparaissent. Pense à utiliser « Exporter (JSON) » de temps en temps pour garder une copie.
- Les polices sont chargées depuis Google Fonts à la première ouverture, puis gardées en cache.

## Mettre à jour l'appli

Remplace les fichiers dans le dépôt, puis change `nocturne-v1` en `nocturne-v2` au début de `sw.js` pour que les téléphones récupèrent la nouvelle version.
