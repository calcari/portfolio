# Compétence : Industrialisation de l'environnement de développement

## Ma définition

Il y a une différence entre un projet qui fonctionne et un projet qui peut fonctionner durablement : avec plusieurs intervenants, sur plusieurs machines, déployé régulièrement, sans que chaque modification devienne une source d’incertitude.

C'est une erreur critique de faire reposer la qualité du code et des déploiement sur la seule rigueur des développeurs. Une fois le projet correctement stucturé, leur énergie peut être redirigée vers des taches qui apportent vraiement de la valeur. 

En industrialiser l'environnement de développement, les zones d’incertitude sont réduites : mêmes dépendances pour tout le monde, scripts de vérification fiables, builds reproductibles, déploiements contrôlés et tests capables de bloquer les erreurs les plus coûteuses avant la production. C’est une manière de protéger le projet contre les écarts invisibles qui finissent par faire perdre du temps. 

Ce sujet est aussi devenu un enjeu de sécurité. Les attaques récentes contre la chaîne de livraison logicielle montrent qu’un projet peut être compromis avant même que le code applicatif soit exécuté : dépendances, secrets, scripts de publication, artefacts, workflows CI/CD. En mai 2026, la campagne Mini Shai-Hulud a par exemple touché de nombreux packages `npm` et `PyPI`, notamment dans les écosystèmes TanStack, Mistral AI, UiPath, OpenSearch et Guardrails AI. Source : [SC Media, 12 mai 2026](https://www.scworld.com/news/mini-shai-hulud-attack-compromises-hundreds-of-npm-pypi-packages).

Un pipeline `CI/CD` fait donc partie de la chaîne de confiance du projet. Les choix faits autour des dépendances, des secrets, des caches, des tests et des droits d’exécution ont un impact direct sur la fiabilité de ce qui est livré.

## Mes éléments de preuve

### Transition vers un monorepo

Pendant [mon mastère à l’ISCOD](/parcours/iscod), j’ai restructuré l’environnement de `Dopple`, le SI interne de Pedagome, autour d’un monorepo `pnpm / Nx`. Le projet regroupait plusieurs applications et services qui avaient commencé à évoluer séparément : dépendances différentes, code utilitaire dupliqué, contrats entre frontend et backend moins faciles à suivre, déploiements à coordonner dans plusieurs dépôts.

Le travail n’a pas seulement consisté à déplacer du code. Il fallait rendre l’environnement plus cohérent : centraliser certaines versions de dépendances, structurer des packages partagés, cibler les projets réellement affectés par une modification, conserver un cache exploitable entre plusieurs pipelines et exécuter des tests `Playwright` sur les flux critiques avant la production. Ce chantier est détaillé dans la réalisation [Monorepo Dopple](/realisations/industrialiser-environnement-dev).

Le résultat est un environnement plus lisible et plus vérifiable. Les builds les plus lourds sont passés d’environ une heure à des cycles plutôt situés autour de dix à vingt minutes selon les changements. Les correctifs peuvent être livrés plus vite, tout en gardant des contrôles sur les parcours publics comme les inscriptions ou les candidatures.

### Fiabiliser les déploiements

J’ai aussi travaillé sur la sécurité de l’environnement de développement et de déploiement. Les secrets nécessaires aux pipelines ne sont pas écrits dans le code ni dans les fichiers de configuration versionnés. Ils sont configurés dans `GitLab` sous forme de variables `CI/CD` privées, afin de limiter leur exposition et de les gérer séparément du dépôt.

J’ai également veillé à rendre l’installation des dépendances plus prévisible. En déploiement, l’utilisation de `--frozen-lockfile` permet de s’assurer que les versions installées correspondent exactement au lockfile versionné. Même une version corrective plus récente ne sera pas installée automatiquement si elle n’a pas été explicitement intégrée au projet.

À la suite des attaques récentes sur l’écosystème `npm`, j’ai aussi appliqué une mesure complémentaire avec `pnpm` : `minimumReleaseAge`. Le principe est de ne pas installer immédiatement des versions de packages trop récentes, afin de réduire le risque d’intégrer une version compromise publiée quelques minutes ou quelques heures plus tôt. Ce n’est pas une protection absolue, mais cela ajoute une barrière utile dans la chaîne de livraison.

## Mon autocritique

C’est une compétence que j’ai développée plus tard que d’autres. Dans mes premières années en développement, je me concentrais surtout sur le fait de produire quelque chose qui fonctionne, pas sur la façon dont l’environnement était structuré. Le mastère et les besoins réels de Pedagome m’ont obligé à rattraper ce retard.

Mon principal point de vigilance est de ne pas surindustrialiser. Un pipeline, un cache ou une stratégie de déploiement peut faire gagner beaucoup de temps une fois stabilisé, mais sa mise en place prend souvent plus de temps que prévu. Il faut donc dimensionner l’outillage au projet, à l’équipe et au niveau de risque réel.

Dans mon cas, certains compromis restent assumés. Par exemple, les tests s’exécutent directement sur l’environnement de staging, sans environnement de test supplémentaire dans le pipeline. Pour une organisation plus grande ou un produit plus critique, ce choix serait discutable. Dans ce contexte, il reste proportionné : les flux importants sont testés, les mises en production sont planifiées avec prudence et la complexité reste maîtrisée.

## Mon évolution dans cette compétence

À moyen terme, les sujets qui m’intéressent le plus sont ceux que l’on rencontre dans des environnements plus structurés : observabilité, orchestration de containers, supervision et procédures de reprise. L’idée n’est pas de devenir spécialiste infrastructure au sens strict, mais de mieux comprendre les contraintes et les critères de qualité des profils DevOps avec lesquels je peux être amené à travailler.

Avec l’arrivée des agents IA dans le développement, ce sujet devient encore plus important. Un agent peut proposer une correction, exécuter des tests ou ouvrir une pull request, mais seulement si le projet possède déjà un environnement fiable : scripts clairs, typage, tests automatisés, conventions et pipeline `CI/CD`. Autrement les conséquences seront lourdes. L’industrialisation sert donc aussi à rendre les contributions plus sûres, qu’elles viennent d’un développeur, d’un stagiaire ou d’un outil automatisé.

## Réalisations rattachées à cette compétence

- [Monorepo Dopple](/realisations/industrialiser-environnement-dev)
