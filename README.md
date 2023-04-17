# Bootstrap_Test

Pour essayer Bootstrap et Node.js via une imitation du
[site de Paris](https://www.paris.fr/).

Ce travail est réalisé au sein d’un dépôt Git.

Sa version finale sera rendue légèrement après échéance si tolérée.

Sont inclus dans ce document les dépendances du projet, la recompilation du
style CSS ainsi que des commentaires sur le travail fourni.

## Dépendances

On suppose les outils NVM, NodeJS et NPM installés.

* SASS
* BOOTSTRAP

## Composition

```
Bootstrap_Test/
|
|_index.html     <- Page de la racine (HTML)
|
|_style.scss     <- Page principale de style (SCSS)
|
|_style.css      <- Page principale de style (CSS)
|
|_style.css.map  <- Carte de la page principale de style (CSS)
|
|_reset.css      <- Page de réinitialisation de style (CSS)
|
|_svg/           <- Images vectorielles (SVG)
|
|_png/           <- Images matricielles (PNG ou JPG) (Supprimées)
|
|_run.sh         <- Déploiment intermédiaire du serveur via le shell
|
|_app.js         <- Déploiment direct du serveur HTTP via Node.js
|
|_LICENCE        <- Licence GNU GPLv3+ (Texte brut)
|
|_README.md      <- LISEZ-MOI (Markdown)
```

## Installation

Depuis Debian 11 GNU/Linux ou dérivées le paquet ZIP
`Frédéric_Y_Henry_HTTP-SCSS.zip` peut être décompressé dans un répertoire via
`unzip Frédéric_Y_Henry_HTTP-SCSS.zip`.

SASS est une application installée globalement via `npm --global i sass`.

Vient une installation locale de Bootstrap via `npm i bootstrap` puis
l’exécution de `run.sh` qui se compose de deux commandes :
* `sass index.scss index.css` pour générer le style principal ;
* `node app.js` pour déployer le serveur HTTP.

Un navigateur Web ouvre alors la page à l’adresse
`http://localhost:3000/index.html`.

## Notes

Bootstrap en local était préféré pour avoir une page Web hors ligne mais le
manque de temps a rendu une connexion obligatoire pour accéder aux images
matricielles du site de Paris.

Si souhaitée l’installation de SASS et Bootstrap peut être remplacée par :
* L’élément `<link>` du fichier `index.css` commenté ;
* L’élément `<link>` de Bootstrap en ligne décommenté ;
* L’élément `<script>` de Bootstrap en ligne `index.css` décommenté.

Ça peut épargner de la place.

