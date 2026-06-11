# Compétence : Fiabilité et sens des responsabilités

## Ma définition

Je ne réduis pas la fiabilité au fait de produire quelque chose qui fonctionne le jour de la livraison. Dans un projet technique, être fiable, c’est aussi mesurer les conséquences concrètes d’un choix : qui va utiliser l’outil, qui va le maintenir, qui va devoir le modifier, et ce qu’il se passe si le système devient trop fragile ou trop dépendant d’une seule personne. Un développement peut être rapide ou techniquement propre, mais s’il bloque ensuite l’équipe ou crée une dépendance trop forte au développeur, il n’est pas totalement réussi.

Cette idée rejoint des référentiels de qualité logicielle comme l’[ISO/IEC 25010](https://iso25000.com/index.php/en/iso-25000-standards/iso-25010), qui ne limite pas la qualité d’un logiciel à son bon fonctionnement, mais prend aussi en compte des dimensions comme la maintenabilité, l’utilisabilité, la performance ou la fiabilité. Dans un contexte professionnel, cela rappelle qu’un bon outil doit être pensé pour durer, mais aussi pour rester adapté à l’organisation qui l’utilise.

## Mes éléments de preuve

### Anecdote : la refonte du site internet de Pedagome

Un exemple important pour moi est la refonte du site internet de Pedagome. Sur la première version du projet, en 2024, une graphiste avait réalisé des maquettes, puis nous avons cherché à les intégrer avec [Builder.io](http://Builder.io). J’avais un rôle assez large dans ce projet : choix de la solution technique, encadrement d’un alternant, développement direct, arbitrages avec la graphiste et la communication, validation finale, puis maintenance du site.

Le choix initial avait une logique : obtenir un site propre, rapide, performant sur les métriques techniques, et éviter un outil de drag and drop trop libre qui aurait pu devenir difficile à contrôler avec le temps.

En pratique, l’intégration des maquettes demandait beaucoup de précision : espacements, tailles, images, alignements, variations entre les pages. Le site était performant, mais chaque modification simple pouvait devenir une tâche de développement. Changer une image, ajouter une animation, ajuster une section ou corriger un élément visuel demandait souvent une intervention sur mesure.

Nous voulions former la graphiste et la chargée de communication pour leur donner plus d’autonomie. Builder.io était justement présenté comme un outil accessible à des profils non développeurs. Dans les faits, la continuité des évolutions restait trop difficile à leur déléguer : elles avaient besoin de travailler sur le contenu et le design sans dépendre constamment de moi ou d’un développeur. De plus, l’outil utilisé a fini par ne plus être correctement mis à jour, ce qui a rendu certaines modifications très compliquées, voire impossibles.

Les conséquences ont été concrètes : perte de temps pour modifier le site, dépendance trop forte à mon intervention, frustration côté graphisme et communication, ralentissement de certaines publications, difficulté à corriger les contenus, puis besoin de refaire le site autrement.

Ce projet m’a donc appris que la fiabilité ne se limite pas à la performance technique. Le site était techniquement intéressant, mais pas assez adapté à l’organisation. J’avais trop privilégié la maîtrise du code et la performance, en sous-estimant la maintenance et les usages des personnes non-développeuses.

La version suivante, réalisée avec Framer, a été mieux cadrée. Le compromis était plus adapté : un outil visuel pour l’équipe communication, suffisamment structuré pour garder un site propre, mais moins dépendant d’interventions de développement pour les modifications courantes.

## Mon autocritique

Cette expérience m’a fait progresser parce qu’elle m’a confronté à une erreur réelle de projection. Le raisonnement initial n’était pas absurde : Builder.io était présenté comme un outil capable de donner de l’autonomie à des profils non techniques. Mais j’ai sous-évalué la capacité réelle à déléguer la continuité des évolutions du site à des personnes dont ce n’était pas le métier.

Je ne pense pas que ce soit une erreur à blâmer de manière excessive, car la situation de l’entreprise évoluait aussi. Les besoins de Pedagome, de la communication et de la graphiste n’étaient pas forcément les mêmes au départ qu’au moment où le site a commencé à vivre. Mais cette expérience m’a appris qu’un choix fiable doit être évalué sur la durée : la mise en ligne, la maintenance, les modifications courantes et l’autonomie des personnes qui feront vivre l’outil.

## Mon évolution dans cette compétence

Aujourd’hui, je vois davantage la fiabilité comme une responsabilité globale. Avant de choisir une solution, je dois mieux identifier les utilisateurs réels, les contraintes de maintenance, les compétences disponibles dans l’équipe et les conséquences si l’outil devient difficile à faire évoluer.

Je veux progresser dans la comparaison des solutions avant de décider : clarifier les critères importants dès le début, échanger plus tôt avec les personnes qui utiliseront l’outil, et ne pas considérer la performance comme le seul indicateur de réussite. Pour les prochains projets, je veux mieux formaliser ces critères afin de trouver un compromis plus solide entre qualité technique, autonomie des équipes et capacité à maintenir l’outil dans le temps.

## Réalisations rattachées à cette compétence

- [Side projects](/realisations/side-projects)
- [Monorepo Dopple](/realisations/industrialiser-environnement-dev)
