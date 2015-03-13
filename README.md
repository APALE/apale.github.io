# apale.github.io

Site Internet de l'association APALE

## Modification du contenu

Une fois un fichier modifié, il convient de tester le rendu du site en lançant la commande `make serve`. Si le rendu est
satisfaisant, il est alors possible de commiter le fichier, à savoir l'envoyer sur le serveur.

Pour ce faire, ajoutez d'abord le fichier modifié :

```
git add mon_fichier.html
```

Il devrait alors apparaître en vert lors de l'exécution de la commande `git status`. Si tel est le cas, et qu'aucun autre
fichier n'est requis, il est temps d'enregistrer vos modifications à l'aide de la commande :

```
git commit -m "Message décrivant la modification"
```

Enfin, pour mettre en production ces changements, envoyez les sur le serveur en prenant soin de récupérer les derniers
éventuels changements :

```
# Récupération des changements
git pull --rebase origin master

# Envoi des modifications
git push origin master
```

Les modifications seront alors visibles sous quelques minutes, le temps de reconstruction du site par GitHub.

## Lancement du site

Pour lancer le site en local, une fois [Docker](https://docs.docker.com/) installé, récupérez toutes les dépendences :

``` sh
make setup
```

Puis exécutez pour lancer le serveur en local :

``` sh
make serve
```

Vous pourrez alors accéder au site en utilisant l'URL [http://127.0.0.1:4000/](http://127.0.0.1:4000/).
