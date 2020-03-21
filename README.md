# YggTorrent Ratio Tracker

![Preview](https://i.imgur.com/xvGKGGQ.png)
YggTorrent Ratio Tracker vous permet de récupérer périodiquement votre ratio et d'afficher son évolution avec des graphiques.

# Installation
Tout d'abord, téléchargez le projet et installez les dépendances à l'aide des commandes suivantes :

    git clone https://github.com/lucasdcrk/yggtorrent-ratio-tracker
    cd yggtorrent-ratio-tracker
    chmod +x update-ratio.js
    cp config.example.js config.js
    npm install
Pour que la récupération des données se fasse automatiquement, ajoutez le script dans votre fichier crontab afin qu'il soit exécuté périodiquement (conseillé : toutes les 6 heures).

Exemple (à adapter selon l'endroit où vous avez téléchargé le script) : 

    0 */6 * * * cd /var/www/yggtorrent-ratio-tracker && node update-ratio.js

## Configuration

La configuration se fait dans le fichier config.js (qui n'existe pas par défaut).

    const config = {
	    profileUrl: 'https://www2.yggtorrent.se/profile/LIEN-PROFIL',
	    outputFile: 'values.json'
    }

Remplacez le contenu de **profileUrl** par le lien direct vers votre *profil public* YggTorrent.
**outputFile** permet de changer le nom et / ou l'emplacement du fichier de sorties (contenant toutes les valeurs) sauf cas spécifique, laissez tel quel.

### Obtenir mon lien de profil
Pour trouver le lien de votre profil publique, rendez vous dans la section mon compte du site et cliquez sur l'îcone d'oeil en dessous de votre photo de profil.
![enter image description here](https://i.imgur.com/H9DzJRt.png)


