import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      siteTitle: 'CRC André Laurendeau 2026',
      common: {
        logoAlt: 'Logo',
      },
      nav: {
        home: 'Accueil',
        videos: 'Vidéos et Références',
        path: 'Cheminement',
        rules: 'Règlements',
        languageToggle: 'FR/EN',
      },
      footer: {
        nextPage: 'Page suivante',
      },
      home: {
        title: 'Le village André-Laurendeau',
        description:
          "Ce village resistant toujours contre l'empire Saint-Marcelin. Cette année, nous somme prêts à défaire l'envahisseur à la compétition des druides, <strong>CRC Robotique MODUEL MMXXVI</strong>. Nous venons préparer avec un robot innovant et époustouflant, mais aussi le plus important, une équipe soudée et motivée pour gagner cette compétition. Commposer de notre savant fou <strong>Guillaume dit Cétautomatix</strong> (<ins>Charger de la conception du robot</ins>), puis <strong>Félix dit Asterix</strong> (<ins>Chef de progamation</ins>), avec <strong>Sara dite Fabala</strong> (<ins>Designeuse du Kiosque et charger de vidéo</ins>) et enfin <strong>Martin dit Panoramix</strong> (<ins>Penseur et stratège</ins>). Le village est habiter de bien d'autre Gaulois prêt à en découdre avec l'empire (<strong>liste des habitants ci-dessous</strong>). Alors préparez-vous La CRC, car cette année, le village André-Laurendeau va tout déchirer!!!",
        gauloisTitle: 'Gaulois',
        memberAlt: 'Membre {{name}}',
        members: {
          iulianRole: 'Responsable et développeur du site internet',
          guillaumeRole: 'Responsable construction du robot, du tutoriel et kiosque',
          saraRole: 'Responsable vidéo, kiosque et actrice pour Assurencetourix',
          marcAntoineRole: 'Aide et support à la programmation du robot',
          felixRole: 'Main responsable de la progamation robot',
          martinRole: 'Penseur et strataige dans tout les domaines',
          victorRole: 'Développeur web et développeur robot',
          clemenceRole: 'Actrice pour le rôle de Asterix et aide pour le plan de partenariat',
          dohaRole: 'Développeuse du robot et competitrice de codaton',
          louisRole: 'Aide à construction du robot',
          gaelleRole: 'Costumeuses et maquilleuse de la vidéo',
          andreiRole: 'Homme à tout faire',
          kevinRole: 'Acteur pour le rôle de Roi De La Montagne',
          julietteRole: 'Support emotionelle de Sara',
          augustinRole: 'Homme à tout faire',
          lucasRole: 'Homme à tout faire',
          ivanRole: 'Développeur du robot',
        },
      },
      game: {
        studentFilm: 'Film étudiant',
        tutorial: 'Tutoriel',
        references: 'Références',
        videoTitle: 'Vidéo',
        googleSheetTitle: 'Feuille Google',
        pdfTitle: 'Document PDF',
      },
      rules: {
        title: 'En quoi consiste la CRC',
        description:
          "La CRC est une compétition de robotique mais pas que, elle demande aussi aux écoles de réussir des défis de programmation, de construire un kiosque, de réaliser un site web, un tutoriel et une vidéo. Chaque équipe choisit un thème qu'elle représentera dans son kiosque, son site web et sa vidéo. Ils ont une durée d'environ 4 mois pour se préparer. Cette compétition a lieu chaque année au mois de février. Elle se déroule sur quatre journées, lors du premier jour, les équipes installent leur kiosque et préparent leur robot. Les deuxième et troisième jours sont consacrés aux matchs de robotique, tandis que le quatrième journer est dédié aux finales et à la remise des prix. Le défi de robotique consiste a accomplir des missions à son robot sur une table de jeu en respectant les règles établies par la CRC pour l'année en cours.",
        rulesTitle: 'Règles du jeu',
        rulesDescription:
          "Cette année, le jeu c'est Moduel. Le but est de placer, en équipe, des piceces de différentes formes sur station. Plus, il y a des piece placées, plus l'équipe marque de points. On distinct également les pèces par la couleur de l'équipe. De plus, on peut placer des pièces, qui sont de couleur rouge, a réparer sur une station. Cela rapporte quelques points supplémentaires. Finallement, il y a une place d'empliment sur l'arene de jeu, qui rapporte beaucoup de points si une pièce y est placée. Un bonuse s'applique aussie pour l'équipe qui a placé le plus de pièces sur l'arène et l'équipe qui fait la plus haute tour. Pour plus de détails, consultez le document officiel de la <link>CRC</link>.",
        rickLink: "C'est Rick vas voir",
      },
      path: {
        imageAlt: 'pousse',
        modal: {
          close: 'Fermer',
        },
        aria: {
          openLine: 'Ouvrir {{title}}',
        },
        lines: {
          robot: {
            title: 'Robot',
            details:
              "<h1>Le Robot</h1><p>Le robot est l'élément central du projet. Construit par l'équipe, il est conçu pour accomplir des tâches spécifiques lors des compétitions. Le robot intègre diverses technologies et mécanismes pour assurer son efficacité et sa performance.</p><img src=\"src/assets/Robot.png\" alt=\"Image exemple\" style=\"max-width: 100%; height: auto;\" />",
          },
          kiosque: {
            title: 'Kiosque',
            details:
              "<h1>Le Kiosque</h1><p>Le kiosque est une structure physique qui abrite le robot et les composants lors des réparations et des compétitions. Il est conçu pour être à la fois fonctionnel et attrayant, offrant un espace sécurisé pour le robot tout en permettant aux techniciens de le réparer pour l'action.</p><img src=\"src/assets/Kiosk.jpg\" alt=\"Image exemple\" style=\"max-width: 100%; height: auto;\" />",
          },
          video: {
            title: 'Vidéo',
            details:
              "<h1>La Vidéo</h1><p>La création de contenu vidéo est une partie essentielle du projet. L'équipe produit une vidéo pour faire une histoire dans le thème qu'ils se sont donner et un tutorielle utillitaire.</p><a href=\"#\">Voir la vidéo</a>\n<a href=\"https://www.youtube.com/watch?v=xieBHn726UM&t=156s\">Voire le tutorielle</a>",
          },
          website: {
            title: 'Site web',
            details:
              "<h1>Le site web</h1><p>Le site web commance avec les directives du kickoff. Il est développé par l'équipe en utilisant des technologies web modernes pour présenter les informations sur le projet, les vidéos, et d'autres contenus pertinents.</p>",
          },
          kickoff: {
            title: 'Kickoff',
            details:
              "<h1>Le Kickoff</h1><p>Le kickoff est le point de départ officiel du projet. C'est lors de cet événement que l'équipe reçoit les directives, les objectifs et les ressources nécessaires pour commencer à travailler sur le projet</p>",
          },
          roles: {
            title: 'Distibution des rôles',
            details:
              "<h1>Les rôles et responsabilités</h1><p>Après le kickoff, chaque membre de l'équipe reçoit son rôle spécifique pour le projet. Cela inclut les responsabilités liées à la construction du robot, à la création de contenu vidéo, au développement du site web, et plus encore.</p> <img src=\"src/assets/DistributionDesRoles.jpg\" alt=\"Image exemple\" style=\"max-width: 100%; height: auto;\" />",
          },
          meeting1: {
            title: 'Rencontre 1',
            details:
              "<h1>Débutes</h1><p>Le premier événement. On commence ici. On présente et recrute des personnes. Faite par les responsable pour trouver plus de personnes</p> <img src=\"src/assets/R1.jpg\" alt=\"Image exemple\" style=\"max-width: 100%; height: auto;\" />",
          },
        },
      },
    },
  },
  en: {
    translation: {
      siteTitle: 'CRC André Laurendeau 2026',
      common: {
        logoAlt: 'Logo',
      },
      nav: {
        home: 'Home',
        videos: 'Videos and References',
        path: 'Path',
        rules: 'Rules',
        languageToggle: 'EN/FR',
      },
      footer: {
        nextPage: 'Next page',
      },
      home: {
        title: 'The André-Laurendeau village',
        description:
          "This village still resists the Saint-Marcelin empire. This year, we are ready to defeat the invader in the druids' competition, <strong>CRC Robotics MODUEL MMXXVI</strong>. We are coming prepared with an innovative and astonishing robot, but most importantly, a united and motivated team to win this competition. Made up of our mad scientist <strong>Guillaume a.k.a. Cétautomatix</strong> (<ins>In charge of robot design</ins>), then <strong>Félix a.k.a. Asterix</strong> (<ins>Programming lead</ins>), with <strong>Sara a.k.a. Fabala</strong> (<ins>Booth designer and video lead</ins>) and finally <strong>Martin a.k.a. Panoramix</strong> (<ins>Thinker and strategist</ins>). The village is home to many other Gauls ready to take on the empire (<strong>list of inhabitants below</strong>). So get ready CRC, because this year the André-Laurendeau village is going to rock!!!",
        gauloisTitle: 'Gauls',
        memberAlt: 'Member {{name}}',
        members: {
          iulianRole: 'Lead and website developer',
          guillaumeRole: 'Robot construction, tutorial and booth lead',
          saraRole: 'Video lead, booth, and actress for Assurencetourix',
          marcAntoineRole: 'Help and support for robot programming',
          felixRole: 'Main robot programming lead',
          martinRole: 'Thinker and strategist in all areas',
          victorRole: 'Web developer and robot developer',
          clemenceRole: 'Actress for the role of Asterix and help with the partnership plan',
          dohaRole: 'Robot developer and codaton competitor',
          louisRole: 'Robot construction support',
          gaelleRole: 'Costume designer and video makeup artist',
          andreiRole: 'All-round helper',
          kevinRole: 'Actor for the role of King of the Mountain',
          julietteRole: 'Emotional support for Sara',
          augustinRole: 'All-round helper',
          lucasRole: 'All-round helper',
          ivanRole: 'Robot developer',
        },
      },
      game: {
        studentFilm: 'Student film',
        tutorial: 'Tutorial',
        references: 'References',
        videoTitle: 'Video',
        googleSheetTitle: 'Google Sheet',
        pdfTitle: 'PDF Document',
      },
      rules: {
        title: 'What the CRC is about',
        description:
          "The CRC is a robotics competition, but not only that. It also asks schools to complete programming challenges, build a booth, create a website, a tutorial, and a video. Each team chooses a theme that it will represent in its booth, website, and video. They have about 4 months to prepare. This competition takes place every year in February. It runs for four days: on the first day, teams set up their booth and prepare their robot. The second and third days are dedicated to robotics matches, while the fourth day is for finals and awards. The robotics challenge consists of having a robot accomplish missions on a game table while respecting the rules established by the CRC for the current year.",
        rulesTitle: 'Game rules',
        rulesDescription:
          "This year, the game is Moduel. The goal is to place, as a team, pieces of different shapes on a station. The more pieces placed, the more points the team scores. Pieces are also distinguished by team color. In addition, red pieces can be placed for repair on a station, which gives extra points. Finally, there is a placement spot on the arena that gives a lot of points if a piece is placed there. A bonus applies to the team that placed the most pieces on the arena and the team that builds the tallest tower. For more details, consult the official <link>CRC</link> document.",
        rickLink: 'It’s Rick, go watch',
      },
      path: {
        imageAlt: 'seedling',
        modal: {
          close: 'Close',
        },
        aria: {
          openLine: 'Open {{title}}',
        },
        lines: {
          robot: {
            title: 'Robot',
            details:
              "<h1>The Robot</h1><p>The robot is the central element of the project. Built by the team, it is designed to perform specific tasks during competitions. The robot integrates various technologies and mechanisms to ensure its efficiency and performance.</p><img src=\"src/assets/Robot.png\" alt=\"Example image\" style=\"max-width: 100%; height: auto;\" />",
          },
          kiosque: {
            title: 'Booth',
            details:
              "<h1>The Booth</h1><p>The booth is a physical structure that houses the robot and its components during repairs and competitions. It is designed to be both functional and attractive, offering a safe space for the robot while allowing technicians to repair it for action.</p><img src=\"src/assets/Kiosk.jpg\" alt=\"Example image\" style=\"max-width: 100%; height: auto;\" />",
          },
          video: {
            title: 'Video',
            details:
              "<h1>The Video</h1><p>Creating video content is an essential part of the project. The team produces a story video in the theme they were given and a useful tutorial.</p><a href=\"#\">See the video</a>\n<a href=\"https://www.youtube.com/watch?v=xieBHn726UM&t=156s\">See the tutorial</a>",
          },
          website: {
            title: 'Website',
            details:
              "<h1>The Website</h1><p>The website begins with the kickoff directives. It is developed by the team using modern web technologies to present information about the project, videos, and other relevant content.</p>",
          },
          kickoff: {
            title: 'Kickoff',
            details:
              "<h1>The Kickoff</h1><p>The kickoff is the official starting point of the project. It is during this event that the team receives the directives, objectives, and resources needed to start working on the project.</p>",
          },
          roles: {
            title: 'Role distribution',
            details:
              "<h1>Roles and responsibilities</h1><p>After the kickoff, each team member receives their specific role for the project. This includes responsibilities related to robot construction, video content creation, website development, and more.</p> <img src=\"src/assets/DistributionDesRoles.jpg\" alt=\"Example image\" style=\"max-width: 100%; height: auto;\" />",
          },
          meeting1: {
            title: 'Meeting 1',
            details:
              "<h1>Beginnings</h1><p>The first event. We start here. We present and recruit people. Led by the leaders to find more people.</p> <img src=\"src/assets/R1.jpg\" alt=\"Example image\" style=\"max-width: 100%; height: auto;\" />",
          },
        },
      },
    },
  },
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: 'fr',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
