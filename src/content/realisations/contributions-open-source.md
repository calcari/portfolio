![](/images/realisations/vignette-open-source.png)

# Contributions open source

## Contexte du projet

J'ai contribué à plusieurs bibliothèques open source que j'utilise dans mes développements. Il ne s'agissait pas de corrections mineures, comme des typos ou des mises à jour de documentation, mais d'investigations sur des bugs dans des librairies matures ou en pleine croissance.

Il s'agit de bibliothèques connues de l’écosystème JavaScript :

- **MikroORM**, un ORM TypeScript (l'outil qui fait le lien entre le code et la base de données relationnelle), est maintenu principalement par Martin Adamek. C'est une brique centrale de la couche d'accès aux données de plusieurs projets, dont celui sur lequel je travaille.
- **TanStack DB**, une librairie de gestion de données côté client de Tanner Linsley. TanStack est une suite d'outils très répandue dans la communauté React (TanStack Query, anciennement React Query, et TanStack Table en sont les plus connus). TanStack DB fait partie des projets les plus récents, encore en bêta au moment de ma contribution.
- **styled-vanilla-extract**, une librairie de styling maintenue par Wout Mertens, l’un des mainteneurs principaux du framework Qwik (projet initié par Misko Hevery, le créateur d'Angular).

## Remonter à la source plutôt que contourner

Quand on construit un projet sur des librairies open source, on en dépend directement. Face à un comportement inattendu, la réaction naturelle est de trouver une alternative ou de contourner le problème dans son propre code. J'ai parfois choisi de remonter jusqu'à son origine dans la librairie elle-même : corriger à la source évite d'accumuler des contournements qui alourdissent le code et masquent le vrai problème, et de ne pas rester bloqué le temps qu'un mainteneur s'en saisisse.

Il faut être prudent avec ce type de corrections. Elles peuvent fonctionner sur un cas précis, mais casser un autre usage ou masquer une cause plus profonde. Avant de soumettre une contribution, il faut donc être capable de reproduire le bug, d'expliquer son origine et de justifier le périmètre du correctif.

## Les bugs que j'ai investigués

### MikroORM : une génération des scripts de migration erronée

Le scénario de découverte était simple. Après avoir généré des migrations puis les avoir exécutées, je régénérais une nouvelle migration sans avoir modifié la moindre entité. L'outil aurait dû ne détecter aucun changement. Au lieu de ça, il continuait à proposer des modifications en boucle, à chaque génération.

En investiguant, j'ai constaté que le mécanisme de diff (la comparaison entre l'état attendu à partir des entités et l'état réel de la base de données) contenait des erreurs spécifiques au driver MySQL. Ces erreurs n'avaient pas été détectées parce que les tests de la librairie portaient principalement sur les drivers PostgreSQL et MongoDB.

N'ayant pas encore une connaissance assez fine du fonctionnement interne d'un ORM (c'était avant ma formation à l'[ISCOD](/parcours/iscod)), je me suis limité à ouvrir des issues détaillées en y suggérant des pistes de correction. J'avais vérifié au préalable que mes propositions résolvaient bien le problème, mais je n'étais pas certain du bon endroit où appliquer la modification, ni de ses effets de bord possibles. Ces issues ont donné lieu à des corrections par le mainteneur.

### TanStack DB : des données figées avec React Suspense

“Suspense” est un mécanisme de React qui permet de gérer l'attente du chargement de données : un composant peut "suspendre" son rendu le temps que ses données arrivent, et React affiche un état de chargement en attendant. C'est pratique à plusieurs niveaux :

- L'UI est plus stable, il n'y a pas de nombreux loaders/spinners qui affichent des états de chargement en cascade. L'utilisateur voit un seul état de chargement, puis des données chargées et propres.
- La rédaction des composants est simplifiée car les développeurs ne travaillent qu'avec des données chargées. Il n'y a plus besoin de gérer de valeurs vides ou null pendant le chargement.

Le bug était flagrant dès l'utilisation de TanStack DB combiné à Suspense : les données s'affichaient, mais restaient ensuite figées. Concrètement, une nouvelle requête n'était pas déclenchée quand un paramètre changeait, par exemple quand l'identifiant du client dans l'URL passait d'une fiche à une autre. C'est un scénario difficile à reproduire dans un test automatisé, parce qu'il implique une vraie navigation : ce n'est pas le premier rendu qui pose problème, mais le passage de l'un à l'autre.

Rencontrer un bug sur une librairie encore en bêta n'a pas été une grande surprise. Comme il y a un risque réel à fonder un projet sur un outil instable, je m'étais d'abord donné pour objectif d'évaluer si c'était une option réaliste, en explorant l'intégration d'un cas simple mais complet. C'est justement pendant cette phase d'essai que j'ai repéré le bug.

Une fois le bug identifié et corrigé, j'ai mis en balance plusieurs critères avant de décider de conserver la librairie :

- la notoriété du mainteneur et de son équipe
- la présence d'un modèle économique qui finance une douzaine de contributeurs salariés, ce qui réduit le risque de dépendre d'un projet maintenu par une seule personne
- l’ancienneté et le nombre de contributions (déjà plus de 1180 releases pour environ un an d'existence)
- des conséquences limitées par le contexte d'utilisation (quelques utilisateurs internes), pour des gains importants en performances et en rapidité de développement
- une bonne adéquation avec les problèmes que j'avais à résoudre

J'ai finalement retenu cette intégration, même en bêta, pour les fiches client de [Dopple](/realisations/industrialiser-environnement-dev), l’ERP interne de Pedagome.

TanStack DB n'est ni une base de données, ni un ORM : c'est un moteur de collections normalisées côté client. Une fois les données chargées depuis le backend via des requêtes fetch classiques (par exemple la liste des cours d'un élève), chaque élément est stocké en cache par la librairie et associé à un identifiant. Sa valeur ajoutée centrale est dans la mise à jour des données : si on édite un seul cours, il n'est pas nécessaire de recharger toute la liste. Il suffit de mettre à jour l'entrée correspondante dans le cache. C'est particulièrement utile sur les fiches client, qui dépendent de nombreuses collections organisées en graphe (famille, élève, besoins, matières, cours, crédits, tuteurs, bilans, propositions…). Recharger tout le graphe après chaque modification serait trop coûteux. On pourrait faire ces mises à jour ciblées de l'état local sans cette librairie, mais en imposant un cadre, elle évite de produire du code fragile et difficile à maintenir.

### styled-vanilla-extract : un HMR cassé par une régression

Le HMR (Hot Module Replacement) est le mécanisme qui permet, en développement, de voir une modification de code se refléter dans le navigateur sans recharger toute la page ni redémarrer le serveur. Sur styled-vanilla-extract, il ne fonctionnait plus pour les styles : à chaque modification, il fallait redémarrer le serveur de dev pour voir le changement, ce qui rendait l'expérience développeur (DX) très mauvaise et fastidieuse. Le problème avait été signalé près d'un an plus tôt et était resté sans solution.

En remontant l'historique du dépôt, j'ai trouvé l'origine : un commit antérieur, fait pour autre chose, avait retiré au passage le hook handleHotUpdate, responsable d'invalider les fichiers CSS générés quand un fichier de style changeait. Sans cette invalidation, le serveur continuait de servir l'ancienne version. La régression venait d'un effet de bord : une modification anodine en apparence, dans une zone qui semblait sans rapport, avait silencieusement cassé le rechargement des styles.

Plutôt que de simplement réintroduire le hook (qui avait sans doute été retiré pour une bonne raison), j'ai proposé un correctif plus ciblé : réintégrer uniquement l'invalidation des fichiers CSS dans le hook transform, là où les fichiers de style étaient déjà invalidés. Le mainteneur a fusionné la pull request.

## Les échanges avec les mainteneurs

Les échanges se sont faits directement avec les mainteneurs : Martin Adamek pour MikroORM, Tanner Linsley et son équipe pour TanStack DB, Wout Mertens pour styled-vanilla-extract. Tout se déroule de façon asynchrone et en anglais, sur les issues et les pull requests GitHub. Le code est relu publiquement et la communication doit être précise : une issue mal formulée ou un correctif mal justifié n'avance pas.

## Résultats et perspectives

Les contributions sont toujours visibles publiquement :

- MikroORM : [issue #2407](https://github.com/mikro-orm/mikro-orm/issues/2407) (et deux autres issues liées), qui ont abouti à des corrections par le mainteneur
- TanStack DB : [pull request #1427](https://github.com/TanStack/db/pull/1427)
- styled-vanilla-extract : [pull request #26](https://github.com/wmertens/styled-vanilla-extract/pull/26)

Le cas MikroORM m'a appris à assumer mes limites : ouvrir une issue argumentée avec une piste, sans surévaluer ma capacité à corriger seul un système dont je ne maîtrisais pas tous les rouages.

## Depuis

Je continue à surveiller les projets que j'utilise, et l'investigation d'un bug reproductible est devenue un réflexe. Le choix d'une dépendance ne se limite pas à ses fonctionnalités : je regarde aussi qui la maintient et comment le projet est financé.

L’intégration de @tanstack/db s’est déroulée correctement. Il n’y a pas eu d’autres bugs ensuite.

## Mon regard critique

Dans ces trois cas, la difficulté n'était pas seulement d'identifier le bug, mais de le démontrer proprement, d'en expliquer l'origine et de proposer une correction qui ne casse rien d'autre. Les bugs échappaient aux tests parce qu'ils couvraient les cas principaux, mais pas certains usages réels et moins fréquents : un driver moins testé, une vraie navigation entre deux fiches. Je réinvestis ce constat dans ma propre façon d'écrire des tests.

## Compétences rattachées à cette réalisation

- [Qualité du code et architecture](/competences/qualite-code-architecture)
- [Autonomie](/competences/autonomie-et-autoformation-structuree)
- [Communication](/competences/communication)
