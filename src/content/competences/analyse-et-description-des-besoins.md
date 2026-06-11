# Compétence : Analyse et description des besoins

Le cadrage fonctionnel transforme une demande encore floue en base de travail exploitable : distinguer le problème réel de la première solution imaginée, faire apparaître les règles implicites, identifier les cas particuliers, puis vérifier que la réponse envisagée reste proportionnée.

Les demandes arrivent rarement sous une forme directement développable. Elles mélangent souvent un besoin réel, une intuition de solution et des contraintes qui ne sont pas encore formulées. Dans une petite structure, le développeur reçoit souvent ces informations de façon brute. Dans une organisation plus grande, ce travail peut être porté par des profils spécialisés.

Cette compétence me paraît d’autant plus actuelle avec la place croissante de l’IA dans le développement logiciel. Le code devient plus facile à produire : génération de premières versions, refactoring, tests ou documentation. Mais cela ne supprime pas le travail de cadrage. Dans un article consacré à l’évolution du métier d’ingénieur avec l’IA, Lijen observe au contraire que la difficulté se déplace vers la compréhension du problème, la définition des limites, la structure de la solution et la validation du comportement attendu. Produire plus vite n’a pas beaucoup de valeur si le besoin est mal compris au départ.

## Mes éléments de preuve

### Anecdote 1 : faire apparaître la complexité cachée d’un système de parrainage

Sur un système de parrainage, le besoin peut sembler simple au départ : ajouter un champ dans un formulaire ou stocker un code parrain. En réalité, il faut prévoir le suivi interne, l’information donnée au parrain, la gestion des doublons, le rattachement d’une prime à un paiement réel, la durée de conservation des coordonnées, ou encore les cas où la personne transmise existe déjà dans la base.

La faisabilité technique ne suffit pas. Je passe souvent par des schémas ou des maquettes simples, afin que les parties prenantes puissent se projeter avant le développement. Cette clarification permet ensuite de découper la fonctionnalité en étapes plus réalistes.

### Anecdote 2 : modéliser le suivi des familles sans trahir le fonctionnement réel

Chez Pedagome, le suivi des parcours devait rester fidèle au terrain. Une modélisation trop rapide aurait consisté à assimiler un client à un élève, puis à rattacher simplement un tuteur à cette fiche. Une famille peut avoir plusieurs enfants, un élève peut avoir plusieurs besoins dans le temps, un tuteur peut changer, et certaines décisions doivent rester compréhensibles plusieurs mois plus tard.

Avant de choisir les tables et les relations, il fallait comprendre ce que l’équipe suivait réellement : des familles, des membres, des besoins pédagogiques, des attributions, des changements, des suspensions ou des reprises. La modélisation des données devenait alors plus cohérente, avec moins d’exceptions à bricoler ensuite dans l’interface ou dans le code.

### Anecdote 3 : ne pas ajouter une donnée uniquement parce qu’elle est demandée

Les demandes d’ajout de champs dans une fiche posent souvent ce type de problème. Ajouter des informations comme “a eu le brevet” ou “a eu le bac” peut sembler rapide. La difficulté n’est pourtant pas l’ajout technique, mais la cohérence du système. Si cette information peut déjà être déduite de la scolarité, la stocker séparément crée deux sources de vérité.

La bonne réponse consiste parfois à ne pas développer la demande telle quelle. Il faut vérifier si l’information doit vraiment être saisie, ou si elle peut rester dérivée d’une donnée déjà fiable. Ce type d’arbitrage évite de créer de la maintenance inutile et des incohérences discrètes.

## Mon autocritique

Le cadrage dépend beaucoup de la vision d’ensemble que l’on a du sujet. Mon parcours m’a aidé sur ce point : la formation en [mesures physiques](../experiences/2.%20iut-mesure-pysiques.md) m’a habitué à observer un système avant d’intervenir, et l’expérience [entrepreneuriale chez Pedagome](../experiences/3.%20escola-gestation.md) m’a donné une lecture plus transversale du fonctionnement d’une activité.

Mon point de vigilance concerne la manière de solliciter les parties prenantes. Tout le monde n’a pas le temps, le vocabulaire ou le recul nécessaire pour formaliser un besoin complet. Si je pose trop de questions ouvertes, je peux obtenir des réponses incomplètes, ou créer de la fatigue autour du sujet. Je dois donc davantage préparer les échanges en amont : revenir avec deux ou trois options viables, expliciter les conséquences de chacune, puis faire trancher les vrais arbitrages.

Une demande mal formulée doit être retravaillée jusqu’à devenir exploitable, sans demander aux utilisateurs de faire eux-mêmes tout le travail de cadrage.

## Mon évolution dans cette compétence

Je veux surtout progresser dans l’animation des ateliers de cadrage : mieux préparer les sujets, poser un cadre clair, faire émerger les vrais arbitrages et éviter que la discussion parte dans trop de directions. Cela passe par des moyens simples : arriver avec un ordre du jour, quelques schémas ou maquettes, des options déjà formulées, puis garder une trace courte des décisions prises. Il faut pouvoir retrouver pourquoi une option a été retenue, quels cas ont été volontairement laissés de côté, et quelles règles métier ont été validées.

## Réalisations rattachées à cette compétence

- [API Tiers de prestations](../realisations/✅ API Tiers de prestations.md)
- [Portail tuteur mobile-first](../realisations/✅ Portail tuteur mobile-first.md)

