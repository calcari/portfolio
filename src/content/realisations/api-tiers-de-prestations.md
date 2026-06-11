![](/images/realisations/vignette-api-urssaf.png)

# API Tiers de prestations.

## Contexte du projet

Pedagome est un organisme de cours particuliers à domicile situé à Metz. Son activité repose sur la mise en relation entre familles, élèves et tuteurs, avec un suivi commercial, administratif et financier. Pour centraliser ces opérations, l’entreprise utilise Dopple, un ERP métier développé en interne.

En 2023, une évolution importante a concerné l’intégration de l’**avance immédiate de crédit d’impôt** (AICI). Ce dispositif permet aux clients éligibles de ne payer que leur reste à charge au moment du règlement. Dans le fonctionnement classique, une famille devait avancer 100 % du prix des cours, puis attendre le remboursement du crédit d’impôt l’année fiscale suivante. Avec l’avance immédiate, le mécanisme se rapproche d’un tiers payant : la famille ne règle directement que la moitié du montant des cours. L’entreprise se charge ensuite de récupérer l’autre moitié du montant auprès des services de l’état.

Pour Pedagome, cette évolution était devenue stratégique. Elle réduisait le prix ressenti par les clients et les concurrents avaient déjà commencé à proposer ce fonctionnement. L’intégration touchait donc au SI interne, aux données clients, aux factures et aux échanges avec l’URSSAF.

## Modéliser le parcours AICI dans Dopple

L’intégration de l’avance immédiate concernait plusieurs aspects du SI. Côté base de données, j’ai ajouté les informations nécessaires au suivi AICI sur les familles, notamment l’identifiant retourné par l’URSSAF, les dates de tentative et de confirmation, ainsi que les erreurs éventuelles. J’ai aussi travaillé sur une entité dédiée aux demandes de paiement AICI, reliée aux familles, aux factures et aux transactions bancaires.

Chaque évolution passait par des migrations ORM. Le travail sur les branches de features se faisait avec des bases de données de développement séparées, afin de tester les changements de schéma sans mélanger plusieurs états de base, ce qui aurait pu bloquer le développement sur les autres branches.

Côté backend, les traitements étaient séparés par responsabilité : un client d’API pour dialoguer avec l’URSSAF, des services métier pour l’activation, la synchronisation et le rapprochement, puis des controllers exposés au reste de l’application. Les routes étaient documentées avec OpenAPI, ce qui permettait ensuite de générer des clients typés pour les interfaces internes.

Une activation client, une demande de paiement ou une synchronisation de statut suivent des règles différentes. Les séparer évitait de concentrer toute la logique dans les écrans ou dans quelques fonctions isolées.

## Homologation URSSAF et API Tiers de prestations

L’entreprise ne pouvait pas utiliser directement le service en production. Elle devait d’abord être autorisée à accéder à l’**API Tiers de prestations**. J’ai assuré une partie du suivi des échanges avec les services de l’État et préparé les éléments techniques demandés pour l’homologation.

J’ai étudié la documentation disponible sur [data.gouv.fr](http://data.gouv.fr), puis j’ai utilisé la spécification OpenAPI fournie pour générer automatiquement un client d’API Node.js. Ce client servait de base aux appels vers l’URSSAF : activation d’un client, transmission de demandes de paiement, consultation de statuts et récupération des informations nécessaires au suivi.

L’administration demandait aussi un cahier de test. J’ai donc construit un document décrivant les scénarios exécutés sur l’environnement de test : identification d’un client, gestion des erreurs, transmission d’une demande de paiement et vérification des réponses retournées par l’API. Ce document prouvait que notre infrastructure savait dialoguer correctement avec le service avant l’ouverture en production.

L’URSSAF demandait également de prouver l’existence d’un support pédagogique destiné aux familles. J’ai donc collaboré avec la graphiste de l’entreprise pour produire une plaquette expliquant le fonctionnement de l’avance immédiate, les acteurs impliqués et les étapes à suivre côté client. Une fois ces éléments validés, l’administration nous a transmis par email les clés d’authentification.

## Suivre une inscription sans webhook

Le parcours d’activation reposait sur un échange en plusieurs temps. Dopple transmettait les coordonnées d’un client à l’URSSAF. Le service tentait ensuite d’identifier la personne auprès des services fiscaux. Lorsque l’identification réussissait, le client recevait un mail de l’URSSAF l’invitant à finaliser son inscription. L’API renvoyait alors un identifiant client, stocké dans la fiche famille.

Une difficulté est apparue dans le suivi de cette inscription. L’API proposait bien un endpoint pour initier la création du compte, mais ne fournissait pas de webhook ni d’endpoint simple pour suivre l’avancement de la demande. Or, l’équipe devait savoir si une famille avait réellement terminé son inscription avant de basculer les paiements vers l’avance immédiate.

En étudiant la documentation et en testant le comportement de l’environnement de staging, j’ai identifié une méthode de déduction à partir des réponses de l’API. Certains appels réalisés avec des données volontairement incomplètes ou partiellement erronées retournaient des codes différents selon l’état réel du lien entre le particulier et le prestataire. Ces codes permettaient de distinguer une inscription non finalisée d’un compte utilisable.

J’ai ensuite ajouté un job planifié avec Agenda.js pour vérifier régulièrement les familles en attente. Tant que l’inscription n’était pas confirmée ou abandonnée, le système relançait la vérification et mettait à jour le statut dans Dopple. Ce mécanisme évitait de dépendre uniquement d’un contrôle manuel par l’équipe.

## Synchroniser les paiements et les statuts

Une fois le client activé, le suivi continuait avec les demandes de paiement, leurs statuts et leur rapprochement avec les opérations bancaires. Une demande pouvait être intégrée, validée, refusée, prélevée, payée, annulée ou faire l’objet d’un rejet. Ces états devaient rester visibles dans le SI, car ils conditionnaient le suivi administratif et financier.

J’ai donc relié les demandes AICI aux factures, aux familles et aux transactions bancaires concernées. Les services de synchronisation interrogeaient l’API pour récupérer les statuts à jour, tandis que les traitements de rapprochement permettaient d’associer les virements reçus aux demandes correspondantes. L’équipe pouvait suivre le cycle de vie d’un paiement dans l’ERP, sans reconstituer l’information à partir de plusieurs outils.

Les traitements asynchrones ont pris une place importante dans ce flux. Vérifier une activation, synchroniser un statut, rapprocher une transaction ou signaler une anomalie ne devait pas dépendre d’un clic de l’utilisateur. Ces tâches devaient pouvoir tourner en arrière-plan, de manière traçable.

## Les interactions qui ont compté

Les échanges avec l’administration et l’URSSAF ont été centraux pour l’homologation. Il fallait répondre à leurs demandes, transmettre les éléments attendus et attendre leur validation avant de pouvoir accéder à l’environnement de production.

Le CEO a insisté sur l’urgence de ce chantier. Le dispositif avait un intérêt commercial fort, mais il impliquait aussi un niveau de rigueur supérieur à celui d’une fonctionnalité interne classique.

L’équipe administrative et commerciale était impliquée dans la conception des écrans et des statuts à rendre visibles. Elle devait pouvoir comprendre où en était une famille, pourquoi une activation échouait, si une demande de paiement était acceptée ou si un rejet nécessitait une intervention.

## Résultats et perspectives

Le passage au reste à charge immédiat a réduit la barrière financière à l’inscription. Ce changement s’est ressenti dans les volumes de vente et a permis à Pedagome de rester aligné avec les pratiques du marché. À partir du moment où des concurrents proposaient déjà l’avance immédiate, ne pas l’avoir devenait un frein commercial difficile à justifier.

Sur le plan technique, le service a enrichi Dopple avec un flux complet : activation d’un client, stockage de l’identifiant URSSAF, création de demandes de paiement, synchronisation de statuts, rapprochement bancaire et suivi des erreurs.

Pour la suite, Pedagome devra surtout rester attentif aux éventuelles évolutions de l’API URSSAF : changement de spécification, modification des statuts retournés ou adaptation du parcours d’homologation.

## Ce que je retiens

Ce chantier m’a donné une première expérience concrète d’intégration avec une spécification produite dans un cadre public. Contrairement à une API SaaS classique, l’accès à la production dépendait autant de la conformité du dossier que de la qualité du code.

L’absence de webhook ou d’endpoint de suivi clair a aussi montré qu’une API officielle ne couvre pas toujours exactement les besoins opérationnels d’une entreprise. J’ai dû tester le comportement réel du service sur l’environnement de staging et trouver une solution compatible avec le cadre imposé.

## Compétences rattachées à cette réalisation

- [Développement web full-stack](http://../competences/developpement-web-full-stack.md)
- [Cadrage fonctionnel, compréhension métier et modélisation des données](http://../competences/analyse-et-description-des-besoins.md)
- [Comptabilité et paie](http://../competences/comptabilite-paie.md)
- [Qualité du code, lisibilité et architecture](http://../competences/qualite-code-architecture.md)

