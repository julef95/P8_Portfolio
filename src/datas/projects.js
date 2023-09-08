export const projects = [
    {
        title: "Création d'une application web de location immobilière avec React - Kasa",
        mainImage: 
        {   src: require('../assets/Portfolio/Kasa/Kasa_main_image.png'),
            alt: "Accueil Kasa"},
        description: [
            "Initialisation du projet avec Create Reac App.",
            "Création d'un routeur avec React Router pour naviguer entre les pages.",
            "Création de différentes composants React (bannière, collapse, carroussel) avec gestion des états.",
            "Site responsive sur ordinateur et mobile."
        ],
        difficulties : [
            "Pas de difficulté particulière rencontrée."
        ],
        tags: ["React", "JavaScript", "CSS"],
        link : "https://github.com/julef95/P6_Kasa",
        photos: [
        {   src: require('../assets/Portfolio/Kasa/Kasa_home.png'),
            alt: "Accueil Kasa"},
        {   src: require('../assets/Portfolio/Kasa/Kasa_housing.png'),
            alt: "Annonce logement Kasa"},
        {   src: require('../assets/Portfolio/Kasa/Kasa_about.png'),
            alt: "A propos Kasa"}
        ]
    },
    {
        title: "Création d'une page web dynamique pour le site d'une architecte d'intérieur avec JavaScript - Sophie Bluel",
        mainImage: 
        {   src: require('../assets/Portfolio/Sophie_bluel/Sophie_bluel_main_image.png'),
            alt: "Accueil Sophie Bluel"},
        description: [
            "Utilisation de Swagger et Postman pour découvrir la documentation de l'API et tester les routes.",
            "Récupération des projets de la cliente via l'API en utilisant fetch et affichage dans la galerie avec JavaScript.",
            "Création d'une page de connexion administrateur avec un formulaire d'authentification qui vérifie les identifiants et le token JWD.",
            "Création d'une modale dynamique pour permettre à la cliente connectée d'ajouter et de supprimer des travaux en envoyant des requêtes à l'API.",
            "Gestion des éléments du DOM"
        ],
        difficulties : [
            "Pas de difficulté particulière rencontrée."
        ],
        tags: ["Javascript", "HTML", "CSS"],
        link : "https://github.com/julef95/P3_Sophie_Bluel",
        photos: [
        {   src: require('../assets/Portfolio/Sophie_bluel/Sophie_bluel_home.png'),
            alt: "Accueil Sophie Bluel"},
        {   src: require('../assets/Portfolio/Sophie_bluel/Sophie_bluel_login.png'),
            alt: "Connexion Sophie Bluel"},
        {   src: require('../assets/Portfolio/Sophie_bluel/Sophie_bluel_modal_1.png'),
            alt: "Modale photo Sophie Bluel"},
        {   src: require('../assets/Portfolio/Sophie_bluel/Sophie_bluel_modal_2.png'),
            alt: "Modale ajout Kasa"}
        ]
    },
    {
        title: "Développement du backend d'un site de notation de livres - Mon vieux grimoire",
        mainImage: 
        {   src: require('../assets/Portfolio/Mon_vieux_grimoire/Mon_vieux_grimoire_home.png'),
            alt: "Accueil Mon vieux grimoire"},
        description: [
            "Création d'un serveur Express simple.",
            "Création d'une API RESTful en utilisant Moongoose pour connecter le serveur à la base de données MongoDB et faciliter les opérations de la base et l'implémentation des routes CRUD.",
            "Mise en place d'un système d'authentification : stockage des informations utilisateur dans la base, cryptage du mot de passe, création et envoi de tokens JWT au frontend pour authentifier les requêtes, ajout d'un middleware d'authentification pour sécuriser les routes.",
            "Gestion des fichiers utilisateur sur l'application grâce à multer et sharp pour optimiser les images envoyées.",
            "Implémentation d'un système de notation des livres.",
            'Sécurité : stockage des données sensibles dans un fichier .env, vérification des formats des identifiants grâce à express-validator et ajout d\'un rate limiting avec express-rate-limit.'
        ],
        difficulties : [
            "Difficulté pour actualiser les notes en direct lors de l'ajout. Résolue en me documentant plus amplement sur les méthodes Mongoose dont celle findByIdAndUpdate."
        ],
        tags: ["Javascript", "NodeJS", "ExpressJS", "Mongoose"],
        link : "https://github.com/julef95/P7_Mon_Vieux_Grimoire",
        photos: [
        {   src: require('../assets/Portfolio/Mon_vieux_grimoire/Mon_vieux_grimoire_home.png'),
            alt: "Accueil Mon vieux grimoire"},
        {   src: require('../assets/Portfolio/Mon_vieux_grimoire/Mon_vieux_grimoire_book.png'),
            alt: "Livre Mon vieux grimoire"},
        {   src: require('../assets/Portfolio/Mon_vieux_grimoire/Mon_vieux_grimoire_login.png'),
            alt: "Connexion Mon vieux grimoire"},
        {   src: require('../assets/Portfolio/Mon_vieux_grimoire/Mon_vieux_grimoire_create.png'),
            alt: "Ajout livre Mon vieux grimoire"}
        ]
    }
]