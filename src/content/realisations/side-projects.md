![](/images/realisations/vignette-side-projects.png)

# Side projects

## Contexte du projet

Parmi mes projets personnels, deux dépassent le simple exercice technique : un **gestionnaire de compositions d’équipes d’échecs** et un **outil de planification de vacances en groupe**. Ils n’ont pas le même niveau de maturité. Le gestionnaire de vacances est utilisé chaque année par un groupe d’une dizaine d’amis, tandis que le projet d’échecs est déjà bien avancé, mais pas encore finalisé.

Dans les deux cas, je ne voulais pas seulement valider une idée technique. Le gestionnaire de vacances devait servir à un usage pratique réel, et Chess Manager devait pouvoir être utilisé par des clubs. Cette contrainte impose de traiter des sujets souvent absents d’un prototype : parcours secondaires, erreurs compréhensibles, installation, retours utilisateurs, notifications, tests ou support.

## Planifier des vacances en groupe

Le gestionnaire de vacances répond à deux problèmes concrets. Le premier est de trouver des dates communes pour un groupe. Chaque membre peut renseigner des plages de dates avec trois niveaux de disponibilité. Une vue synthétique permet ensuite de comparer les disponibilités et de prendre une décision sans refaire les calculs dans une conversation de groupe.

Le deuxième problème concerne le choix de la destination et du logement. Chaque utilisateur peut publier des liens vers des sites externes, ajouter des commentaires dans un fil de discussion, puis voter pour la meilleure option. L’outil centralise donc les propositions et évite que les informations se dispersent.

J’ai développé ce projet avec React et TypeScript, avec une communication en temps réel via WebSockets. Pour le stockage, j’ai utilisé Airtable comme pseudo-backend. Ce choix n’est pas adapté à tous les projets, mais il était cohérent ici : le besoin était limité, les données peu sensibles, et il fallait livrer rapidement un outil utilisable. J’ai ainsi expérimenté des outils low-code que l’on retrouve souvent en entreprise, tout en constatant leurs limites dès que le modèle de données ou les règles métier se complexifient.

## Construire Chess Manager

Chess Manager vise un niveau de finition plus élevé. Il aide des clubs à composer leurs équipes pour les championnats, en tenant compte des règles de la Fédération française des échecs. Le périmètre comprend les comptes, les joueurs, les équipes, les classements, les contraintes de composition et les règles propres aux compétitions.

J’ai travaillé le besoin avec un président de club, afin de transformer les règles métier en comportements exploitables par l’application. Le projet intègre déjà plusieurs briques importantes : création de comptes, saisie des équipes et récupération du classement ELO des joueurs auprès de la FFE. Le classement conditionne une partie des décisions de composition.

Le projet n’est pas encore finalisé, mais il me sert à travailler une chaîne plus proche d’un produit complet. La liste des sujets à traiter dépasse largement le trio frontend / backend / base de données :

- expérience utilisateur soignée
- notifications
- paiement et gestion d’abonnements, avec verrouillage de certaines fonctionnalités premium via des solutions standard comme Stripe
- authentification OAuth2, notamment avec des fournisseurs comme Google ou Meta
- installation en PWA
- mises à jour
- tests
- monitoring
- support
- tutoriels interactifs

Dès qu’un outil vise à être utilisé par des tiers, ces sujets deviennent aussi importants que les fonctionnalités visibles.

## Les interactions qui ont compté

Sur Chess Manager, l’échange avec le président du club a été déterminant. Je pouvais comprendre la logique générale du besoin, mais pas inventer les contraintes exactes d’un championnat d’échecs. Ces échanges ont permis de valider les règles à prendre en compte et d’éviter une application techniquement correcte mais déconnectée du terrain.

Pour le gestionnaire de vacances, les interactions ont été moins formalisées, mais l’usage réel a joué le même rôle. J’ai notamment débogué avec un ami un problème lié à son téléphone trop ancien pour exécuter certaines fonctionnalités JavaScript, ce qui m’a amené à vérifier plus systématiquement le support navigateur avec des outils comme [caniuse.com](http://caniuse.com).

## Résultats et perspectives

Le gestionnaire de vacances est toujours utilisé chaque année. Il remplit son rôle principal : réduire les échanges dispersés et rendre les décisions de groupe plus lisibles.

Chess Manager est encore en développement, mais il a déjà dépassé le stade de la maquette. La suite consiste à stabiliser les parcours, finaliser les règles métier et préparer un usage bêta par des clubs volontaires.

## Ce que je retiens

Un projet personnel peut vite donner l’impression d’être terminé dès que le parcours principal fonctionne. En pratique, c’est souvent à ce moment que commencent les sujets qui rendent l’usage vraiment confortable : cas limites, erreurs, installation, retours utilisateurs ou maintenance.

L’excès inverse existe aussi. Viser un niveau d’exigence trop élevé peut transformer un projet personnel en chantier interminable, d’où l’importance de trouver des utilisateurs prêts à tester un outil partiellement fini et avoir une approche itérative.

## Compétences rattachées à cette réalisation

- [Développement web full-stack](/competences/developpement-web-full-stack)
- [Cadrage fonctionnel, compréhension métier et modélisation des données](/competences/analyse-et-description-des-besoins)
- [Autonomie et autoformation structurée](/competences/autonomie-et-autoformation-structuree)
- [Qualité du code, lisibilité et architecture](/competences/qualite-code-architecture)
