# Devoir : HTML CSS SASS

## Instructions

### Reproduire la mise en page de la page d'accueil du site web https://www.paris.fr/

Attention à la sémantique des balises html utilisées - 8pts
Mettre à minima en page en css via sass :

1. le bandeau (logo + navigation) - 2pts
2. Les accès rapides - 2pts
3. les 2 liens de la colonne de gauche suivants : carte d'identité / Passeport - Travailler à Paris - 2pts
4. les 3 premières actualités - 2pts
5. la colonne de droite (agenda) - 4pts
6. Le footer - 4pts

Si vous faites tout parfaitement, vous aurez 24/20. A vous de choisir ce que vous préférez mettre en page.
Si vous n'utilisez pas sass, j'enlève 2pts à votre note. Vous pouvez utiliser bootstrap mais ce n'est pas obligatoire.

### Configuration SASS

1. Installation via npm

Nécessite d'avoir installé :

    git bash : https://gitforwindows.org/
    node : https://sass-lang.com/install

// dans la console de git bash ou de VSC (si ça fonctionne pour vous)
npm install -g sass
sass --version//pour vérifier que sass est bien installé

2. Compilation via sass

sass --watch index.scss index.css

Minified
sass --watch index.scss index.css --style compressed

3. Compilation via Visual Studio Code

Installer l'extension Live sass compiler

Afin de placer le résultat des fichiers compilés dans le répertoire css de vos projets, voici le code à ajouter dans le fichier settings de VSC :

"liveSassCompile.settings.formats": [
{
"format": "expanded",
"extensionName": ".css",
"savePath": "/css/"
}
]
