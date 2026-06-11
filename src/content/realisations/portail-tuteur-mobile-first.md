![](/images/realisations/vignette-teachers-app.png)

# Portail tuteur mobile-first

## Contexte du projet

Pedagome est un organisme de cours particuliers à domicile situé à Metz. Son activité repose sur la mise en relation entre des familles, des élèves et des tuteurs.

J’ai travaillé sur ce portail pendant mon alternance à l’ISCOD, principalement en 2025, dans la continuité des outils internes déjà utilisés par l’entreprise.

Avant le portail tuteur, une partie de cette relation reposait encore sur des échanges dispersés : mails, appels, formulaires distincts et relances manuelles.

L’enjeu était aussi de donner aux tuteurs un accès simple aux actions qui rythment leur relation avec Pedagome. Ils consultent souvent ces informations depuis leur téléphone, entre deux cours ou en déplacement.

## Réduire les échanges manuels

J’ai travaillé sur un portail qui devait déléguer certaines actions répétitives aux tuteurs, sans supprimer le rôle de suivi de l’équipe. L’application a été développée en React Native / Expo, avec une publication web possible via Expo Web.

Le sujet le plus important concernait la déclaration des cours. Avant, les tuteurs transmettaient leur décompte une seule fois par mois. Ce délai créait un risque d’oubli ou d’approximation : certains ne se souvenaient plus toujours du nombre exact de cours donnés. Ce décalage pouvait aussi retarder la réaction de l’équipe si un accompagnement s’arrêtait sans que les conseillers pédagogiques ne s’en rendent compte avant la fin du mois.

Le portail demandait au contraire de déclarer chaque cours le jour même. Le tuteur pouvait retrouver ses élèves, consulter les cours déjà renseignés et ajouter un nouveau créneau au fil de l’eau. Cette saisie immédiate installait une discipline dans la tenue de l’historique : le suivi ne dépendait plus d’une reconstruction mensuelle, mais d’une habitude simple répétée après chaque cours.

L’autre changement important concernait les propositions de nouveaux élèves. Avant, les conseillers pédagogiques contactaient individuellement des tuteurs. Avec le portail, une proposition pouvait être publiée dans l’application, puis les tuteurs intéressés se manifestaient directement. Le tuteur voyait les objectifs pédagogiques, la fréquence souhaitée, le mode de cours, la distance éventuelle, les disponibilités de l’élève et les consignes particulières, sans exposer toutes les données internes du dossier pour respecter la confidentialité des données personnelles.

## Fiabiliser les informations des tuteurs

Les disponibilités avaient un impact direct sur le matchmaking (l’attribution d’un élève à un tuteur). Une disponibilité obsolète pouvait conduire l’équipe à proposer un cours à un tuteur qui n’était plus disponible, ou à perdre du temps sur des relances évitables.

La saisie des disponibilités reposait sur deux niveaux : une semaine type pour le rythme habituel et des périodes d’absence pour les vacances ou les indisponibilités ponctuelles.

L’application incluait aussi des rappels lorsque certaines informations devenaient trop anciennes : disponibilités, scolarité ou informations personnelles. Ces rappels déplaçaient une partie des relances directement dans l’interface, le tuteur pouvant simplement corriger ou confirmer les données.

## Gérer les notifications et l’accès mobile

L’espace tuteur intégrait des notifications push. Les tokens Firebase Cloud Messaging étaient stockés côté backend afin de rattacher un appareil à un tuteur et de déclencher des notifications liées aux parcours utiles.

Le projet avait d’abord été pensé comme une application mobile avec React Native / Expo. Cette piste était cohérente avec les usages visés : consultation rapide, réponse à une proposition, déclaration d’un cours ou mise à jour d’une disponibilité depuis un téléphone.

La publication sur l’App Store et le Play Store aurait toutefois ajouté une charge importante : versions natives, compatibilité des dépendances, tests sur plusieurs environnements, mises à jour et support. Avec les moyens disponibles, la priorité devait rester sur les parcours les plus utilisés plutôt que sur la distribution native.

Le choix retenu a donc été de privilégier une diffusion web avec Expo Web et une logique PWA. Les tuteurs conservaient un accès mobile simple, tandis que l’entreprise évitait le coût complet d’une application native distribuée sur les stores.

## Les interactions qui ont compté

Les échanges avec le CEO portaient surtout sur le niveau d’investissement à consacrer au produit tuteur : jusqu’où aller dans l’application, quelles fonctionnalités avaient une valeur immédiate, et à quel moment la maintenance devenait trop lourde par rapport au bénéfice attendu.

L’équipe administrative et commerciale apportait les contraintes du terrain : quelles informations afficher, quelles actions rendre autonomes et quelles relances manuelles conserver.

Les retours des tuteurs passaient surtout par l’usage quotidien et par l’équipe. Ils ont aidé à ajuster le niveau d’autonomie attendu sans chercher à automatiser toute la relation.

J’ai encadré un stagiaire pendant dix semaines sur une partie de ce chantier. Il a travaillé sur la saisie des disponibilités. Mon rôle a été de lui présenter le contexte métier, de cadrer le périmètre, de l’aider à comprendre l’organisation du projet et de relire son travail pour l’intégrer proprement au reste de l’application. J’ai apprécié cette dimension de transmission : l’accompagner dans sa montée en compétence, puis voir son autonomie progresser au fil du projet. Cela m’a aussi fait progresser dans ma manière d’organiser une explication, de découper un sujet et de rendre explicites mes raisonnements.

## Résultats et perspectives

L’espace tuteur a été utilisé régulièrement par environ une centaine de tuteurs. Les deux apports les plus visibles ont été la saisie des heures au fil de l’eau et la possibilité pour les tuteurs intéressés de se manifester directement sur les propositions de cours.

Les informations des tuteurs ont aussi gagné en régularité grâce aux écrans de disponibilité et aux rappels de mise à jour. Le portail n’a pas supprimé le rôle de l’équipe, mais il a déplacé une partie des actions répétitives en supprimant beaucoup de frictions inutiles.

L’arbitrage en faveur d'une PWA a permis de conserver une logique mobile-first avec une charge de maintenance plus raisonnable qu’une application native distribuée sur les stores. Aujourd’hui, l’espace tuteur est encore utilisé et fait l’objet d’une maintenance évolutive en interne. Certains écrans peuvent encore être repris ou simplifiés, mais la base est assez solide pour prolonger progressivement les parcours les plus utiles.

## Ce que je retiens

Ce projet m’a montré qu’un produit mobile ne se résume pas à son support de diffusion. Une application native aurait pu sembler plus aboutie, mais elle aurait aussi imposé des contraintes de publication, de compatibilité et de maintenance plus lourdes.

Dans ce contexte, la meilleure décision était de garder une expérience mobile simple, tout en limitant les coûts de conception et de maintenance. C’est un arbitrage très concret entre ambition technique, usage réel et moyens disponibles.

## Compétences rattachées à cette réalisation

- [Développement web full-stack](http://../competences/developpement-web-full-stack.md)
- [Cadrage fonctionnel, compréhension métier et modélisation des données](http://../competences/analyse-et-description-des-besoins.md)
- [Communication](http://../competences/communication.md)
- [Qualité du code, lisibilité et architecture](http://../competences/qualite-code-architecture.md)

