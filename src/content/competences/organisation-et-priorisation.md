# Compétence : Organisation et priorisation

## Ma définition

Je ne réduis pas l’organisation au fait de tenir une liste de tâches ou de cocher des cases. Dans un projet technique, elle sert surtout à transformer des besoins dispersés en plan de travail réaliste : distinguer ce qui structure l’activité, ce qui améliore l’expérience, ce qui peut attendre, et ce qui risque de consommer beaucoup de temps pour un bénéfice limité.

La priorisation ne peut donc pas se limiter à des catégories comme basse, moyenne ou haute. Dans un article sur la [priorisation des tâches de développement sous pression](https://medium.com/@devrmichael/how-to-prioritize-tasks-as-a-developer-especially-under-pressure-af2534b07e04), Michael Siddiqi insiste sur la différence entre ce qui est utile, ce qui est urgent, et ce qui peut attendre sans bloquer le cœur du produit. C’est exactement ce que je cherche à clarifier dans un contexte métier : valeur réelle, coût de développement, dépendances, et risque de dispersion.

## Mes éléments de preuve

### Anecdote : la priorisation des évolutions de Dopple chez Pedagome

Chez Pedagome, ce travail s’est surtout joué autour de Dopple, le SI interne utilisé pour suivre les cours, les familles, les tuteurs et une partie des contraintes administratives. Comme l’outil évoluait en continu, mon rôle ne se limitait pas au développement : il fallait aussi organiser les demandes, arbitrer et maintenir une trajectoire cohérente.

Comme Dopple est utilisé au quotidien par l’équipe commerciale et administrative, les demandes d’évolution arrivent régulièrement : automatisations, confort d’utilisation, suivi commercial, expérience client ou parcours tuteur. Traiter ces idées au fil de l’eau ferait vite perdre la direction du projet, parce que chacune semble utile prise isolément.

Pour éviter cela, nous avons mis en place un canal Slack dédié aux suggestions Dopple. J’ai aussi développé un système permettant d’enregistrer automatiquement ces suggestions dans un fichier à part, afin de ne pas les perdre et de pouvoir les reprendre plus calmement. Ensuite, l’enjeu était de classer les idées et de les prioriser.

J’ai progressivement utilisé des catégories plus parlantes que les priorités classiques. Nous avons distingué les sujets “pilier”, “standard”, “cosmétique” et “gouffre”.

Un sujet pilier correspond à une fonctionnalité structurante, sans laquelle l’outil ou l’organisation ne peut pas vraiment progresser. L’espace client entre dans cette catégorie, car il touche directement à l’expérience client et à la structuration future de l’outil.

Un sujet standard correspond à une fonctionnalité attendue pour que l’outil soit sérieux et complet, sans être forcément le chantier le plus stratégique. Permettre aux tuteurs de laisser des commentaires après chaque cours entre dans cette catégorie.

Un sujet cosmétique peut améliorer le confort, mais ne doit pas prendre le dessus sur les priorités plus importantes. Pour la demande d’avis client, j’ai préféré ajouter un bouton dans Dopple plutôt que développer une automatisation complète.

Enfin, certains sujets peuvent devenir des gouffres : des idées séduisantes au départ, mais très coûteuses à développer. Laisser les clients choisir eux-mêmes leur nombre d’heures avant la validation du contrat aurait fortement complexifié le parcours pour un bénéfice incertain.

Lors d’une réunion avec le président de Pedagome, nous avons repris les demandes liées à Dopple pour clarifier la feuille de route. L’espace client est resté le chantier prioritaire, tandis que certaines demandes ont été simplifiées ou repoussées.

Cette méthode a rendu la feuille de route plus lisible. Les demandes n’étaient plus seulement traitées selon leur visibilité immédiate, mais selon leur rôle dans l’évolution de Dopple.

## Mon autocritique

Je dois surtout veiller à ne pas laisser les petites demandes prendre trop de place. Elles sont visibles, rapides à traiter et donnent l’impression que l’outil progresse. À l’inverse, les chantiers structurants demandent plus de temps avant de produire des résultats visibles. Ces sujets doivent rester protégés, même lorsqu’ils avancent plus lentement.

## Mon évolution dans cette compétence

Je veux surtout mieux outiller cette priorisation, mieux la formaliser : garder un backlog plus lisible, revoir les demandes à intervalles réguliers, et expliciter pour chaque sujet la décision prise : développer, simplifier, reporter ou traiter par une procédure interne.

## Réalisations rattachées à cette compétence

- [Monorepo Dopple](../realisations/✅ industrialiser-un-environnement-de-developpement-web-full-stack.md)
- [Portail tuteur mobile-first](../realisations/✅ Portail tuteur mobile-first.md)
