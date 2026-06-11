# Compétence : Data, BI et pilotage par les indicateurs

## Ma définition

La data et la BI consistent à rendre des données assez fiables et lisibles pour piloter une activité. Il ne suffit pas de produire un graphique : il faut comprendre d’où vient la donnée, comment elle est calculée et ce qu’elle permet réellement de conclure.

Dans un projet logiciel, ce sujet commence souvent avant le tableau de bord. La manière de modéliser les objets métier conditionne ensuite ce que l’on pourra mesurer ou non.

Les outils ont changé, mais le besoin est ancien : suivre une activité, repérer les écarts et comprendre où partent les ressources. Un article du [Guardian](https://www.theguardian.com/science/2025/mar/15/stone-tablets-mesopotamia-iraq-red-tape-bureaucracy) sur des tablettes administratives découvertes à Girsu, en Mésopotamie, montre que des organisations suivaient déjà les échanges, les dépenses et les rendements des parcelles il y a plus de 4 000 ans. Aujourd’hui, les volumes et les outils sont différents, mais le problème reste proche : produire une information assez fiable pour être utilisée.

## Mes éléments de preuve

### Anecdote 1 : mettre en place un pipeline BI

J’ai mis en place un pipeline simple pour exploiter des données issues du SI interne : extraction depuis la base de données, orchestration avec Mage, puis visualisation dans Metabase.

Les tableaux concernaient surtout les ventes et la consommation des heures de cours. L’intérêt était de pouvoir les analyser selon plusieurs axes : persona, ville, matière, période ou type de besoin. Cela permettait de consulter certains chiffres sans interroger manuellement la base, et de repérer plus vite les écarts ou les tendances utiles au pilotage de l’activité.

Lien avec une réalisation liée au SI : [Monorepo Dopple](/realisations/industrialiser-environnement-dev)

### Anecdote 2 : anticiper les besoins de mesure dans les parcours métier

Certains besoins de pilotage doivent être anticipés dès la conception. Pour suivre un délai entre une demande entrante et le démarrage des cours, l’état actuel d’un dossier ne suffit pas. Il faut garder des dates intermédiaires : premier contact, proposition, attribution, démarrage, suspension ou arrêt. Des données bien structurées permettent ensuite de produire des indicateurs utiles sans requêtes SQL bricolées.

Lien avec une réalisation liée au suivi des cours : [Portail tuteur mobile-first](/realisations/portail-tuteur-mobile-first)

### Anecdote 3 : suivre les conversions marketing

J’ai travaillé sur le suivi des conversions avec Google Tag Manager, GA4 et Google Ads. Il fallait installer un tag, définir les bons événements, les bons moments de déclenchement et les données à faire remonter dans la datalayer via des événements custom.

Une conversion mal paramétrée fausse rapidement l’analyse d’une campagne ads. Le travail consistait donc autant à installer le tracking qu’à définir précisément ce qui devait être considéré comme une conversion exploitable.

Lien avec une réalisation liée au SI : [Monorepo Dopple](/realisations/industrialiser-environnement-dev)

## Mon autocritique

Mon niveau est surtout opérationnel. Je sais partir d’un besoin de pilotage, identifier les données disponibles et construire des indicateurs lisibles pour des usages métier.

Je ne me présente pas comme un spécialiste data complet. Je n’ai pas travaillé sur de très gros volumes ni sur des architectures avancées de type Spark ou Hadoop en production. Mon expérience porte plutôt sur des données d’activité, proches du métier.

Mon principal point de vigilance est de ne pas faire dire trop de choses aux données. Un indicateur dépend toujours d’une définition, d’une source et d’un contexte. Il peut y avoir des biais importants, tant dans le calcul que dans l’interprétation. C’est un point auquel ma formation initiale en [Mesures Physiques](/parcours/iut-mesure-pysiques) m’a rendu assez sensible : une mesure n’a de valeur que si l’on comprend comment elle est produite, ce qu’elle représente réellement, et ce qu’elle ne permet pas de conclure.

## Mon évolution dans cette compétence

À moyen terme, j’aimerais surtout collaborer avec un profil plus orienté data, pour mieux comprendre les contraintes techniques d’une équipe data en conditions réelles : organisation des traitements, vérification des résultats, mise à jour régulière des données, passage en production et maintenance. Cela m’aiderait à concevoir des applications qui s’intègrent mieux dans une chaîne de pilotage plus structurée.

## Réalisations rattachées à cette compétence

- [Monorepo Dopple](/realisations/industrialiser-environnement-dev)
- [Portail tuteur mobile-first](/realisations/portail-tuteur-mobile-first)
