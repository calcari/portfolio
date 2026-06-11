# Compétence : Qualité du code, lisibilité et architecture

## Ma définition

Écrire du code qui fonctionne est une condition nécessaire mais pas suffisante. Sur le long terme, il doit aussi rester compréhensible par quelqu'un d'autre, par soi-même six mois plus tard, ou dans le contexte d'une correction urgente. Cela passe par des noms clairs, des conventions stables, du typage, et une organisation de projet que l’on peut modifier sans tout redécouvrir à chaque fois.

Des principes comme SOLID, DRY ou KISS donnent des repères utiles, surtout lorsque plusieurs personnes interviennent sur la même base de code. Ils aident à clarifier les responsabilités, à éviter les duplications de logique métier et à garder des solutions assez simples pour rester compréhensibles.

Mais ça ne consiste pas à appliquer machinalement des règles comme "une fonction doit être courte" ou "il faut tout découper". Un découpage trop agressif peut aussi rendre le code difficile à suivre, en obligeant le lecteur à naviguer entre de nombreux fichiers ou en le noyant sous des abstractions pas toujours nécessaires. Cindy Sridharan critique justement cette idée dans [Small Functions considered Harmful](https://copyconstruct.medium.com/small-functions-considered-harmful-91035d316c29) : la difficulté consiste à structurer suffisamment pour rendre le code testable, maintenable et faiblement couplé, sans masquer le flux principal.

## Mes éléments de preuve

### Anecdote : Ce que j'ai appris à mes dépens

Pendant [ma période autodidacte](/parcours/pedagome-autodidacte), avant mon entrée en formation, j'ai développé les premières versions d'un SI interne pour une entreprise de cours particuliers, en JavaScript pur, avec peu de structure et des fonctions trop longues qui faisaient trop de choses. Tout fonctionnait en surface, mais le moindre changement pouvait casser quelque chose d'autre.

Avant d’ajouter une fonctionnalité, je devais souvent reprendre le fil d’une logique trop concentrée dans quelques fonctions longues.

Avec le temps, j’ai compris pourquoi il fallait structurer plus tôt, typer davantage et automatiser certaines conventions.

Lien vers l’expérience : [Pedagome, temps plein, développeur autodidacte](/parcours/pedagome-autodidacte)

### Anecdote : TypeScript et les champs null

Dans le SI de gestion de cours particuliers de Pedagome, de nombreux champs sont null par nature : un tuteur nouvellement créé n'a pas encore de coordonnées bancaires, un élève peut ne pas avoir de numéro de téléphone renseigné. Ce sont des états valides, pas des anomalies.

Il est facile d'oublier de vérifier si une variable est nulle avant de lire ses propriétés. En JavaScript sans typage strict, cela se termine systématiquement par des `Cannot access property x of null` en production, parfois sur des chemins rarement empruntés.

Avec `strictNullChecks` activé en TypeScript, le compilateur signale les sections susceptibles de causer des erreurs. Le lint signale l'usage de `any` pour éviter de court-circuiter les vérifications du type-checker.

Lien vers la réalisation : [Monorepo Dopple](/realisations/industrialiser-environnement-dev)

## Mon autocritique

J’ai surtout travaillé sur des projets dont je pouvais garder une vision assez complète. C’est formateur, car les conséquences d’un mauvais découpage deviennent vite visibles. En revanche, je connais moins les contraintes d’une architecture maintenue par plusieurs équipes, avec des frontières de modules plus strictes et des conventions partagées à grande échelle.

Je retiens surtout qu’une règle de qualité fonctionne mieux lorsqu’elle est portée par le code ou par les outils. Le typage, les signatures de fonctions, les interfaces, les tests ou les linters évitent de dépendre uniquement de la vigilance humaine. Bien conçus, ils orientent naturellement vers le bon usage.

## Mon évolution dans cette compétence

Je veux progresser en me confrontant à des bases de code plus grandes et plus collectives que celles que j’ai principalement connues. Cela peut passer par la lecture de projets open source bien structurés, des revues de code plus exigeantes, ou des contextes où plusieurs équipes interviennent sur le même système.

## Réalisations rattachées à cette compétence

- [API Tiers de prestations](/realisations/api-tiers-de-prestations)
- [Monorepo Dopple](/realisations/industrialiser-environnement-dev)
