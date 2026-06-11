# Développement web full-stack

## Ma définition

Le développement full-stack, c'est la capacité à prendre en charge une feature de bout en bout : depuis l'interface utilisateur jusqu'à la base de données, en passant par la logique serveur, les appels d'API et la modélisation des données. Ce n'est pas seulement une question de langage ou de framework, c'est surtout une façon de raisonner sur un besoin sans avoir à passer la main à chaque couche.

Dans le contexte d'un SI métier comme [Dopple](http://../realisations/✅industrialiser-un-environnement-de-developpement-web-full-stack.md), un ERP interne pour une entreprise de cours particuliers, les besoins traversent souvent plusieurs couches : facturation, gestion de cours, suivi administratif, notifications. Savoir intervenir sur l'ensemble de la pile permet de livrer des features complètes, de comprendre l'impact d'un changement côté base sur le comportement côté client, et de ne pas créer de goulots d'étranglement.

Une feature full-stack commence souvent par la modélisation des données. Traduire un besoin métier en schéma de base de données, anticiper les relations, choisir les bons types, prévoir les cas particuliers : ce sont des étapes qui conditionnent la solidité de tout ce qui suit. J'utilise principalement MikroORM et j'ai aussi travaillé avec Hibernate dans le cadre de ma formation à l’ISCOD.

Mon profil est orienté TypeScript : React et Angular côté client, Node côté serveur. TypeScript est mon langage de prédilection, mais pas le seul.

Il y a une certaine ironie dans l'évolution récente de cet écosystème. Les SPA découplées de leur API backend ont longtemps été présentées comme l'architecture de référence, puis le SSR, les Server Components et les meta-frameworks fullstack ont remis le serveur au centre du jeu. Kent C. Dodds parle par exemple de ["full-stack components"](https://www.epicweb.dev/full-stack-components) pour décrire cette tendance à rapprocher le code d'interface et le code serveur dans le même fichier. Ce que ces outils proposent aujourd'hui rejoint, sous une autre forme, des idées déjà présentes dans des frameworks comme Laravel ou Ruby on Rails.

## Mes éléments de preuve

### Anecdote : L'espace en ligne pour les tuteurs

La coordination entre l'équipe commerciale et les tuteurs reposait encore sur des mails et des Google Forms. Quand un élève était disponible, le commercial contactait les tuteurs un par un pour savoir qui était intéressé. Les tuteurs déclaraient ensuite leurs heures sur un formulaire en ligne, sans aucun lien avec le reste du SI.

J'ai conçu et développé un espace en ligne simple pour les professeurs particuliers. Ils pouvaient consulter les coordonnées de leurs élèves, déclarer leurs cours et recevoir des notifications push lorsqu'une nouvelle offre pouvait les concerner. Quand un profil correspond, les tuteurs reçoivent une notification, consultent le détail et répondent directement depuis leur espace.

Le flux a été inversé : au lieu de contacter les tuteurs un par un, l'équipe pouvait publier une proposition et laisser les tuteurs intéressés répondre depuis leur espace.

J'ai travaillé sur le frontend (interface tuteur, pages de profil élève, consultation des cours), sur le backend (API de déclaration de cours, intégration des notifications push), sur la base de données (modèle pour les offres, les réponses, les cours déclarés et leur état), et sur le cycle de vie des notifications (offre ouverte, acceptée, expirée).

## Mon autocritique

Je me sens à l'aise sur l'ensemble de la pile, aussi bien sur les interfaces que sur les API, la modélisation des données ou la logique serveur. Ma limite actuelle concerne surtout les problèmes de performance et de montée en charge à grande échelle. Les leviers sont connus : plusieurs instances backend, politiques de cache, sharding. Les avoir identifiés ne remplace pas l'expérience de les avoir mis en œuvre sur un système réellement sous pression.

## Mon évolution dans cette compétence

Je veux rester à jour sur les évolutions de l'écosystème web, qui bouge vite et dont il faut suivre les tendances sans se disperser. L'axe sur lequel je veux progresser de façon plus structurée, c'est celui des architectures distribuées et des microservices. Ces approches permettent de mieux absorber la charge, mais elles amènent des défis d'un autre ordre : la cohérence des données entre services, les flux d'événements asynchrones, la gestion des pannes partielles. Je connais encore surtout ces sujets par la lecture. L'étape suivante serait de les pratiquer dans un contexte où la charge, l'équipe ou le découpage du système les rendent réellement nécessaires.

## Réalisations rattachées à cette compétence

- [Portail tuteur mobile-first](http://../realisations/✅Portailtuteurmobile-first.md)
- [Side projects](http://../realisations/✅side-projects.md)

