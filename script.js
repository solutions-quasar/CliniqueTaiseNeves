/* script.js - Central Source of Truth */

const CONFIG = {
    business: {
        name: "Clinique Taíse Neves",
        address: "205 Montmagny St, Québec City, Quebec G1N 4V3",
        phone: "(418) 261-7237",
        phoneRaw: "+14182617237",
        email: "cliniquetaiseneves@gmail.com",
        instagram: "https://www.instagram.com/cliniquetaiseneves/?hl=en",
        facebook: "https://www.facebook.com/taise.neves.872190",
        googleMapsDir: "https://www.google.com/maps/dir/?api=1&destination=205%20Montmagny%20St%2C%20Qu%C3%A9bec%20City%2C%20QC%20G1N%204V3",
        googleReviews: "https://www.google.com/search?q=Clinique+Ta%C3%ADse+Neves+Reviews#lrd=0x4cb897e39e3d0e81:0xd884c0bc852440ca,1,,,,",
        hours: [
            { day: "Lundi - Jeudi", time: "13:00 - 19:00" },
            { day: "Vendredi", time: "09:00 - 19:00" },
            { day: "Samedi", time: "09:00 - 15:00" },
            { day: "Dimanche", time: "Fermé" }
        ]
    },
    translations: {
        fr: {
            nav: [
                { label: "Accueil", anchor: "#hero" },
                { label: "Services", anchor: "#services" },
                { label: "Avis", anchor: "#reviews" },
                { label: "Pourquoi Nous", anchor: "#why-choose-us" },
                { label: "À Propos", anchor: "#bio" },
                { label: "Contact", anchor: "#contact" }
            ],
            more: "Plus",
            tagline: "Massothérapie et soins esthétiques brésiliens à Québec.",
            description: "Massothérapie brésilienne, consultations médicales avec urologue et traitements esthétiques avec infirmières (Sculptra, Radiesse, Acide Hyaluronique, Botox). Une clinique axée sur des résultats concrets et le confort.",
            cta: "Réserver sur WhatsApp",
            partners: {
                title: "Nos Partenaires",
                items: [
                    { name: "Simony Teixeira", role: "Infirmière clinicienne injectrice", img: "partner_simony.png" },
                    { name: "Maria Carolina", role: "Infirmière LPN - Spécialisée en médecine esthétique", img: "partner_maria.png" },
                    { name: "Dr. Nathalie Gagnon - Urologue", role: "Consultation médicale", img: "partner_nathalie.png" }
                ]
            },
            bio: {
                title: "Propriétaire & Thérapeute certifiée",
                description: "Passionnée par le bien-être et l’esthétique, Taíse Neves combine expertise technique et approche humaine afin d’offrir des soins personnalisés de haute qualité, adaptés aux besoins spécifiques de chaque client.\n\nDiplômée en physiothérapie au Brésil à l’Université Catholique de Salvador (Bahia), elle a commencé sa carrière dans le domaine de la massothérapie alors qu’elle était encore étudiante. Très tôt, elle s’est spécialisée dans l’accompagnement post-opératoire de chirurgies plastiques, tant esthétiques que reconstructrices, notamment dans le suivi de patientes ayant subi une reconstruction mammaire après un cancer du sein.\n\nForte de plusieurs années d’expérience en soins post-opératoires, Taíse cumule également plus de 12 ans d’expérience en esthétique de haute technologie. Depuis 2014, elle détient une spécialisation en physiothérapie dermatofonctionnelle, ce qui lui permet d’intégrer des techniques avancées et des technologies innovantes dans ses traitements.\n\nElle a également complété une formation en esthétique médicale en 2022 (École Installée à Montréal), consolidant ainsi son expertise et élargissant son champ de compétences.\n\nGrâce à son parcours riche et multidisciplinaire, Taíse s’engage à accompagner chaque client dans l’atteinte de ses objectifs de santé, de bien-être et de confiance en soi, en proposant des soins sécuritaires, efficaces et personnalisés.",
                readMore: "Voir plus...",
                readLess: "Voir moins",
                stats: [
                    { label: "Années d'Expérience", value: "18+" },
                    { label: "Clients Heureux", value: "5k+" },
                    { label: "Certifications", value: "12" }
                ],
                quote: "Mon engagement est de révéler votre beauté naturelle par des soins attentionnés et une expertise de pointe.",
                expertiseLabel: "L'expertise derrière votre bien-être",
                meetLabel: "Rencontrez Taíse Neves"
            },
            services: {
                title: "Nos Services",
                details: "Détails",
                specialized: "Soin spécialisé pour votre bien-être et beauté.",
                items: [
                    { title: "Massothérapie", tech: "Expérience depuis 2007", desc: "Massages thérapeutiques et drainage lymphatique brésilien (Renata França, Godoy).", fullDesc: "Massages thérapeutiques, myofasciaux et relaxants (spécialiste du massage suédois). Massage relaxant selon la méthode Renata França®. Formation en drainage lymphatique (7 formations), incluant les méthodes Renata França®, Godoy®, Leduc et Vodder. Massage du visage Miracle Touch® (drainage et remodelage). Détente musculaire et réduction du stress pour un bien-être complet.", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { title: "Soins Pré & Post-Opératoires", tech: "Suivi Spécialisé & Technologies", desc: "Préparation et récupération optimale avec technologies avancées pour éviter les complications.", fullDesc: "Les soins préopératoires (débutant avant l'intervention) sont essentiels pour prévenir les complications et préparer le corps à une meilleure cicatrisation.\n\nLes soins postopératoires ne se limitent pas au drainage lymphatique, car chaque patient se rétablit à son propre rythme et peut présenter différentes complications. Le traitement peut donc inclure diverses techniques et technologies, telles que le laser ou la LED pour accélérer la guérison, ainsi que les ultrasons, la radiofréquence, l'endermologie, les microcourants, le kinésiotape, entre autres, selon les besoins de chaque cas.\n\nChirurgies telles que - abdominoplastie, liposuccion, réduction mammaire, implant de silicone, mastectomie, lifting du visage, chirurgie faciale, orthognathie... et autres.\n\nCes soins améliorent la circulation sanguine, réduisent la rétention d'eau et préparent le corps à une meilleure cicatrisation. En cas de liposuccion, ils permettent de fragmenter les amas graisseux et de faciliter la cicatrisation, réduisant ainsi le risque de fibrose.\n\nImportance des soins postopératoires :\n\nIls améliorent la douleur, modulent l'inflammation, réduisent et contrôlent l'œdème, atténuent les ecchymoses, diminuent le risque de fibrose et de nécrose.", img: "service_post_op.jpg" },
                    { title: "Kinesiotape", tech: "Bandage Élastique", desc: "Kinesiotape pour réduire l'œdème et soutenir les muscles sans immobilisation.", fullDesc: "Kinesiotape (bandage élastique fonctionnel) – est une bande adhésive élastique, d'élasticité semblable à celle de la peau, appliquée sur le corps à des fins thérapeutiques.\n\nElle peut être utilisée en prévention et en traitement des lésions articulaires et musculaires, et peut également être appliquée en postopératoire pour atténuer l'œdème et la douleur, réduire les hématomes et améliorer l'état général de la peau.\n\nImportance du Kinesiotape\n\nRéduction de l'œdème (gonflement)\n\nL'un des principaux avantages est le léger soulèvement de la peau par la bande.\n\nCela améliore la circulation lymphatique, facilitant ainsi le drainage des fluides accumulés.\n\nAide à la cicatrisation – postopératoire est largement utilisé en soins postopératoires (ex. liposuccion, abdominoplastie).\nLe Kinesiotape postopératoire : Améliore la circulation locale, Réduit la pression sur les tissus lésés, Contribue à une guérison plus harmonieuse\nPeut aider à prévenir : la fibrose, les adhérences cicatricielles\n\nGestion de la douleur\n\nStimule les récepteurs sensoriels cutanés, Réduit la perception de la douleur (effet neuromodulateur)\nPour un meilleur confort pendant la convalescence.\n\nSoutien musculaire et fonctionnel\n\nSans immobiliser, il offre un soutien léger aux muscles\nAméliore la proprioception\nÉgalement utilisé en réadaptation sportive et orthopédique\n\nPrévention des complications postopératoires\n\nRéduit le risque de fibrose, améliore la circulation sanguine et aide à réduire l'inflammation.\n\nAvantages esthétiques\n\nAméliore l'apparence de la peau, contribue à l'uniformité des cicatrices et à de meilleurs résultats esthétiques finaux.", img: "service_kinesio_new.jpg", icon: "recovery" },
                    { title: "Nettoyage de la peau", tech: "Méthode Brésilienne Profonde", desc: "Nettoyage en profondeur avec extraction manuelle complète des points noirs.", fullDesc: "Le nettoyage du visage en profondeur (méthode brésilienne) est un protocole esthétique reconnu pour son approche complète et minutieuse, axée sur l'extraction manuelle des points noirs, contrairement aux méthodes plus superficielles pratiquées dans d'autres pays.\n\nLe nettoyage du visage est nécessaire pour éliminer les cellules mortes et les points noirs, renouveler la peau et améliorer l'absorption des produits. Ainsi, avant d'entreprendre des traitements de haute technologie tels que les lasers, la lumière pulsée intense (IPL), la radiofréquence, les ultrasons microfocalisés ou même les injections cosmétiques, le nettoyage du visage est essentiel pour un résultat plus durable et plus satisfaisant, et permet également de restaurer l'éclat naturel de la peau.\n\nQuelles sont les caractéristiques de la méthode brésilienne ?\n\nExtraction manuelle complète des points noirs\n\nRespect d'une routine en plusieurs étapes\n\nAssociation à des technologies (vapeur, haute fréquence, photobiomodulation etc.)\n\nSéance finale axée sur l'apaisement et la régénération de la peau.\n\nLe nettoyage du visage en profondeur selon la méthode brésilienne est considéré comme l'un des protocoles esthétiques les plus complets parce que :\n\nil favorise un véritable nettoyage des pores\nil combine des techniques manuelles et technologiques\nil améliore la santé et l'apparence de la peau\n\nÉtapes du nettoyage du visage en profondeur : Nettoyage, exfoliation, application d'un émollient (ouverture des pores), extraction (élimination des points noirs ouverts et fermés), antisepsie (application de lotions antiseptiques), Prévention des infections, application à haute fréquence (resserre les pores et possède une action bactéricide), masque apaisant et application d'une protection solaire.", img: "service_skin_cleansing.jpg" },
                    { title: "Rajeunissement & Clarté", tech: "Lumière Pulsée (Sharplight)", desc: "Rosacée, télangiectasies, acné, folliculite, imperfections et rajeunissement.", fullDesc: "L’IPL (Lumière Pulsée Intense) est une technologie esthétique non invasive utilisée pour améliorer la qualité de la peau et traiter diverses problématiques cutanées.\n\nContrairement au laser, l’IPL diffuse une lumière à large spectre qui cible spécifiquement :\n• La mélanine (taches pigmentaires)\n• L’hémoglobine (rougeurs, vaisseaux visibles)\n• Les glandes sébacées (acné)\n\nL’IPL est une solution polyvalente qui permet de :\n\n• Améliorer l’éclat et la texture de la peau\n• Unifier le teint et réduire les imperfections\n• Traiter les signes du vieillissement (photorajeunissement)\n\nIPL pour la rosacée et télangiectasies :\nC'est un traitement de choix pour la rosacée et les rougeurs diffuses. Il cible les petits vaisseaux sanguins visibles pour les atténuer progressivement. Idéal pour les zones sensibles sujettes aux rougeurs et à la couperose.\n\nIPL pour l’acné et folliculite :\nSolution efficace qui réduit les bactéries responsables de l’acné, diminue l’inflammation et régule la production de sébum. Aide également à resserrer les pores.\n\nIPL pour les taches pigmentaires :\nTrès efficace pour traiter les taches solaires, les lentigos ou les hyperpigmentations superficielle. La lumière cible la mélanine pour uniformiser le teint.\n\nLe traitement avec IPL est rapide, peu invasif et nécessite peu ou pas de temps de récupération. Plusieurs séances sont généralement recommandées pour des résultats optimaux. Une protection solaire rigoureuse est essentielle pour maintenir les résultats.", img: "service_sharplight.jpg" },
                    { title: "Détatouage et Élimination du microblading", tech: "Laser Q-switched", desc: "Détatouage et Élimination du microblading efficace et sécuritaire.", fullDesc: "Détatouage et Élimination du microblading.\n\nLe traitement de détatouage est une procédure esthétique qui permet d’atténuer ou de retirer progressivement un tatouage grâce à l’utilisation de technologies avancées, notamment le laser.\n\nDans notre clinique, nous utilisons le laser Q-Switched de la marque SharpLight, reconnu pour sa précision et son efficacité. Ce type de laser émet des impulsions très rapides qui ciblent spécifiquement les pigments de l’encre sans endommager les tissus environnants. Les pigments sont fragmentés en microparticules, puis éliminés naturellement par l’organisme via le système lymphatique.\n\nLe traitement se fait en plusieurs séances espacées de quelques semaines. Le nombre de séances varie selon plusieurs facteurs : la profondeur du tatouage, les couleurs utilisées, l’ancienneté, ainsi que le type de peau. Il est important de comprendre que le processus est progressif et que le traitement complet peut s’étendre sur plusieurs mois, voire plusieurs années, afin d’obtenir un résultat optimal et sécuritaire.\n\nPendant la séance, une sensation de picotement ou de chaleur peut être ressentie, semblable à de petits coups d’élastique sur la peau. Des mesures sont mises en place pour assurer le confort du client.\n\nAvant le traitement :\nIl est recommandé d’éviter l’exposition au soleil ou aux UV (incluant les cabines de bronzage) au moins deux semaines avant la séance. La peau ne doit pas être irritée, blessée ou bronzée. Il est également conseillé de ne pas appliquer de produits irritants sur la zone à traiter.\n\nAprès le traitement :\nUne rougeur, un léger gonflement ou la formation de petites croûtes peuvent apparaître, ce qui est tout à fait normal. Il est essentiel de garder la zone propre et hydratée, d’éviter de gratter ou retirer les croûtes, et de protéger la peau du soleil avec un écran solaire. Les bains chauds, piscines, saunas et activités sportives intenses doivent être évités pendant quelques jours afin de favoriser une bonne cicatrisation.\n\nLe respect des soins avant et après chaque séance est primordial pour optimiser les résultats et réduire les risques de complications.\n\nLe détatouage est un processus qui demande patience et régularité, mais réalisé avec une technologie performante et par un professionnel qualifié, il permet d’obtenir des résultats visibles, sécuritaires et durables.", img: "service_tattoo_removal.jpg" },
                    { title: "Coup d'Éclat Instantané", tech: "Laser Q-switched (Peeling Hollywood)", desc: "Réduisez l'excès de sébum, resserrez les pores et unifiez le teint.", fullDesc: "Peeling Hollywood (Carbon Peel)\n\nLe Carbon Peel est un traitement esthétique non invasif, améliore instantanément la texture de la peau, resserre les pores et apporte un effet lumineux, lisse et uniforme. C’est pour cette raison qu’il est très populaire avant des événements importants — d’où son surnom “Hollywood Peel”.\n\nCe soin combine l’application d’un masque de carbone actif avec l’utilisation d’un laser pour nettoyer, exfolier et revitaliser la peau en profondeur.\n\nLe traitement est rapide, généralement entre 20 et 30 minutes, et ne nécessite aucun temps de récupération. Une légère sensation de chaleur ou de picotement peut être ressentie pendant la séance, mais elle reste très bien tolerée.\n\nLe traitement débute par l’application d’une fine couche de carbone liquide sur la peau. Ce carbone pénètre dans les pores et agit comme un aimant pour les impuretés, l’excès de sébum et les cellules mortes. Ensuite, le passage du laser permet de chauffer et vaporiser les particules de carbone, entraînant avec elles les impuretés et stimulant en même temps la production de collagène.\n\nCe soin est particulièrement recommandé pour :\n\n• Les peaux grasses ou à tendance acnéique\n• Les pores dilatés\n• Le teint terne ou irrégulier\n• Les points noirs et imperfections\n• Les premières rides et signes de l’âge\n• Le mélasma (en tant que soin d'entretien et d'amélioration globale)\n\nLe Carbon Peel agit de plusieurs façons :\n\n• Il exfolie la peau en douceur\n• Il élimine les cellules pigmentées en surface\n• Il aide à réguler la production de sébum\n• Il stimule le renouvellement cellulaire et la production de collagène\n\nGrâce à l’action du laser (souvent Q-Switched), les amas de mélanine peuvent être progressivement fragmentés, ce qui contribue à éclaircir les taches pigmentaires et uniformiser le teint. \n\nNote sur le mélasma : Le Carbon Peel n’est pas un traitement curatif définitif. Pour le mélasma, les meilleurs résultats sont généralement obtenus avec une approche combinée et personnalisée. Le mélasma peut récidiver, surtout en cas d’exposition solaire ou de facteurs hormonaux.\n\nAvant le traitement :\nIl est conseillé d’éviter l’exposition au soleil, les produits irritants (comme les acides ou rétinoïdes) et de venir avec une peau propre, sans maquillage.\n\nAprès le traitement :\nLa peau peut être légèrement rosée pendant quelques heures. Il est recommandé d’hydrater la peau, d’éviter le soleil et d’appliquer une protection solaire. Le maquillage peut généralement être repris dès le lendemain.\n\nPour des résultats optimaux, plusieurs séances peuvent être recommandées selon les besoins de la peau.", img: "service_hollywood_peel.jpg" },
                    { title: "Épilation Permanente", tech: "Sharplight & LightSheer", desc: "Technologies Sharplight et LightSheer pour une peau douce durablement.", fullDesc: "L’épilation au laser est une méthode moderne, efficace et durable pour réduire la pilosité. Elle repose sur la destruction progressive du follicule pileux par la chaleur tout en respectant la peau environnante.\n\nDifférentes technologies sont utilisées selon votre type de peau :\n\n• Laser Diode (LightSheer®) : Polyvalent, convient à une grande variété de types de peau et poils.\n• Laser Alexandrite (Sharplight®) : Très efficace sur les peaux claires avec poils foncés.\n• Laser Nd:YAG (Sharplight®) : Spécialement adapté aux peaux plus foncées ou bronzées pour une sécurité totale.\n\nDéroulement du traitement :\nChaque séance est rapide et peut durer de quelques minutes à une heure. Plusieurs séances (moyenne 6 à 8) sont nécessaires pour un résultat optimal.\n\nAvant le traitement :\n• Informer le professionnel de toute médication ou vitamines récentes.\n• S’assurer de ne pas être enceinte.\n• Éviter l'exposition solaire (2 semaines avant).\n• Ne pas épiler à la cire ou à la pince (rasage recommandé).\n• Peau propre sans maquillage ni crème.\n\nAprès le traitement :\n• Hydrater la peau et éviter la chaleur (bain chaud, sport intense).\n• Éviter le soleil et appliquer une protection solaire.\n\nAu fil des séances, les poils deviennent plus fins, plus clairs et repoussent plus lentement, tout en améliorant la qualité de votre peau.", img: "service_hair_removal.jpg" },
                    { title: "Raffermissement & Remodelage", tech: "Radiofréquence (Sharplight & Exilis)", desc: "Traitement de la cellulite et remodelage corporel pour le relâchement cutané.", fullDesc: "Remodelage corporel : radiofréquence pour cellulite, relâchement et graisse localisée\n\nLe remodelage corporel par radiofréquence est une solution non invasive, efficace et sécuritaire pour améliorer l’apparence de la peau, réduire la cellulite, raffermir les tissus et traiter la graisse localisée.\n\nDans notre clinique, nous utilisons des technologies avancées telles que Omnimax S4 de la marque SharpLight ainsi que Exilis de BTL Aesthetics, reconnues pour leur performance et leurs résultats visibles.\n\nComment ça fonctionne ?\nLa radiofréquence diffuse une chaleur contrôlée dans les couches profondes de la peau, ce qui permet de :\n• Stimuler la production de collagène et d’élastine\n• Raffermir et tonifier la peau\n• Améliorer l’aspect de la cellulite\n• Favoriser la réduction des amas graisseux\n\nCette action thermique améliore également la circulation sanguine et le drainage, contribuant à une peau plus lisse et plus uniforme.\n\nIndications :\nCe traitement est idéal pour :\n• La cellulite (aspect peau d’orange)\n• Le relâchement cutané (flaccidité)\n• La graisse localisée (ventre, cuisses, bras, flancs)\n• L’amélioration globale de la texture et de la fermeté de la peau\n\nDéroulement du traitement :\nLa séance est confortable et procure une sensation de chaleur agréable. Elle dure généralement entre 20 et 60 minutes selon la zone traitée. Plusieurs séances sont recommandées pour des résultats optimaux, avec une amélioration progressive de la fermeté et de la silhouette.\n\nAprès le traitement :\n• Aucun temps de récupération (retour immédiat aux activités)\n• Légère rougeur possible, temporaire\n• Hydratation recommandée\n• Maintenir une bonne hygiène de vie pour optimiser les résultats\n\nRésultats :\nLes résultats apparaissent progressivement au fil des séances :\n• Peau plus ferme et tonifiée\n• Diminution visible de la cellulite\n• Silhouette plus harmonieuse\n• Amélioration de la qualité de la peau\n\nLe remodelage par radiofréquence est une excellente alternative non chirurgicale pour sculpter le corps en douceur, tout en offrant des résultats naturels.", img: "service_rf_new.jpg" },
                    { title: "Sculpture par le Froid", tech: "Cryolipolyse (Bfreeze)", desc: "Élimination des amas graisseux localisés par le froid.", fullDesc: "La cryolipolyse est une technologie non invasive qui permet de réduire la graisse localisée grâce au froid, sans chirurgie ni temps de récupération.\n\nDans notre clinique, nous utilisons la technologie B‑Freeze, conçue pour cibler efficacement les amas graisseux résistants à l’alimentation et à l’exercice.\n\nComment ça fonctionne ?\nLe traitement repose sur un principe simple : les cellules graisseuses (adipocytes) sont sensibles au froid. L'exposition à un refroidissement contrôlé entraîne leur cristallisation, puis leur élimination progressive par l’organisme via le système lymphatique.\n\nIndications :\nLa cryolipolyse est idéale pour traiter :\n• Le ventre\n• Les poignées d’amour\n• Les cuisses et le dos\n• Les bras et le double menton\n\nDéroulement du traitement :\nLa séance dure entre 30 et 60 minutes par zone. L'applicateur crée un effet d’aspiration avec une sensation de froid intense au début, qui diminue rapidement. Le traitement est confortable.\n\nAprès le traitement :\n• Rougeurs, sensibilité ou engourdissement temporaires possibles.\n• Reprise immédiate des activités quotidiennes.\n• Hydratation recommandée.\n• Drainage lymphatique conseillé pour optimiser les résultats.\n\nRésultats :\nRéduction visible des amas graisseux et silhouette plus harmonieuse entre 3 et 12 semaines après le traitement.", img: "service_cryolipolysis.jpg" },
                    { title: "Peau Lissée & Régénérée", tech: "Microneedling", desc: "Stimulation du collagène, réduction des rides, cicatrices et imperfections.", fullDesc: "Le microneedling est un traitement non invasif qui stimule naturellement la régénération de la peau. Il peut être réalisé seul ou combiné à la radiofréquence (RF) pour des résultats plus profonds.\n\nMicroaiguillage (Microneedling) :\nIl consiste à créer des micro-perforations contrôlées pour activer le mécanisme naturel de réparation de la peau et stimuler la production de collagène.\n• Indications : Rides, ridules, cicatrices d’acné, pores dilatés.\n\nMicroaiguillage avec Radiofréquence :\nLe RF Microneedling combine les micro-perforations avec une diffusion de chaleur profonde. Cette double action permet une stimulation intense du collagène et un raffermissement marqué.\n• Indications : Relâchement cutané, rides marquées, cicatrices profondes, vergetures.\n\nDéroulement du traitement :\nUne crème anesthésiante peut être appliquée. La séance dure 30 à 60 minutes. Des rougeurs et une légère sensibilité sont possibles pendant 24 à 72 heures.\n\nAprès le traitement :\n• Hydratation essentielle.\n• Éviter le soleil et appliquer une protection solaire.\n• Éviter le maquillage et produits irritants pendant quelques jours.\n\nRésultats :\nLa peau devient plus lisse, plus ferme et plus lumineuse. Les résultats apparaissent progressivement sur plusieurs semaines.", img: "service_microneedling.jpg" },
                    { title: "Lifting Facial Naturel", tech: "Miracle Face (Renata Franca)", desc: "Massage du visage effet lifting immédiat et drainage lymphatique.", fullDesc: "Le Miracle Face est une technique de massage facial exclusive issue de la méthode Renata França®. Il combine des manœuvres de drainage lymphatique et de remodelage pour offrir un effet lifting immédiat.\n\nCe soin permet de :\n• Réduire les poches et les cernes\n• Souligner les contours du visage\n• Stimuler la circulation sanguine\n• Désintoxiquer les tissus pour un teint plus éclatant\n\nIdéal avant un événement ou pour maintenir la tonicité du visage, le Miracle Face offre un résultat visible dès la première séance.", img: "service_miracle_face.jpg", icon: "aesthetic" },
                    {
                        title: "Consultation médicale - Urologue", tech: "Dr. Nathalie Gagnon", desc: "Consultation spécialisée en urologie pour votre santé et bien-être.", fullDesc: `Je suis urologue. J'ai fait mon cours de médecine puis ma spécialité à l'université de Montréal pour graduer en 1993. J'ai travaillé comme urologue générale au Centre hospitalier du Grand Portage à Rivière-du-Loup pendant presque 32 ans. J'ai pris ma retraite de la pratique hospitalière en juillet 2025. 

Mme Neves m'a approché pour que j'offre un service de consultation occasionnelle à sa clinique puisqu'elle notait des besoins chez plusieurs de ses clientes prises avec des problèmes d'incontinence et de plaintes urinaires diverses. Ces problèmes étant classés "non urgents" dans le système public cela entraine des délais importants avant de pouvoir rencontrer un (e) spécialiste en plus de nécessiter une demande d'un omnipraticien pour y avoir accès. On vous offre donc ici de court-circuiter un peu le système pour avoir réponse à vos questions et inquiétudes.`, img: "partner_nathalie.png", icon: "medical"
                    },
                    { title: "Soins Médico-Esthétiques Spécialisés", tech: "Simony Teixeira", desc: "Infirmière spécialisée en injection esthétique, mission de révéler votre beauté. Avec consultation médicale.", fullDesc: "Infirmière spécialisée en soins médico-esthétiques et injections, elle met son expertise au service de votre beauté naturelle. En collaboration avec une équipe médicale, elle propose des protocoles personnalisés pour un résultat harmonieux et sécuritaire.", img: "partner_simony.png", icon: "nurse" },
                    { title: "Soins Médico-Esthétiques Spécialisés", tech: "Maria Carolina", desc: "Infirmière spécialisée en injection esthétique, mission de révéler votre beauté. Avec consultation médicale.", fullDesc: "Infirmière spécialisée en soins médico-esthétiques et injections, elle met son expertise au service de votre beauté naturelle. En collaboration avec une équipe médicale, elle propose des protocoles personnalisés pour un résultat harmonieux et sécuritaire.", img: "partner_maria.png", icon: "nurse" }
                ]
            },
            gallery: {
                title: "Galerie",
                subtitle: "Un aperçu de notre expertise et de notre environnement."
            },
            technologies: {
                title: "Nos Technologies",
                desc: "Nous utilisons des équipements médicaux-esthétiques de classe mondiale pour garantir des résultats sûrs et efficaces.",
                items: [
                    { title: "BTL Exilis Ultra 360", desc: "La seule technologie combinant radiofréquence et ultrasons pour le raffermissement de la peau et le remodelage corporel.", img: "taise_machines.jpg" },
                    { title: "Lumenis LightSheer Desire", desc: "La référence absolue en épilation laser. Rapide, efficace et confortable pour tous les types de peau.", img: "machine_lightsheer.jpg" },
                    { title: "BTL CELLUtone", desc: "Thérapie par ondes acoustiques pour traiter la cellulite et améliorer la texture de la peau.", img: "CELLUtone.jpg" }
                ]
            },
            reviews: {
                title: "Ce que disent nos clients",
                more: "Voir plus d'avis"
            },
            why: {
                title: "Pourquoi Choisir Notre Clinique",
                items: [
                    "Atmosphère chaleureuse et moderne",
                    "Expertise certifiée et continue",
                    "Soins professionnels et attentifs",
                    "Processus et recommandations clairs",
                    "Technologie de pointe"
                ]
            },
            contact: {
                title: "WhatsApp",
                subtitle: "Réservez votre séance ou posez vos questions directement via WhatsApp.",
                whatsappCTA: "Réserver sur WhatsApp",
                name: "Nom complet",
                info: "Téléphone ou Email",
                type: "Type de traitement",
                time: "Moment préféré",
                message: "Message (facultatif)",
                send: "Envoyer la demande",
                times: ["Matin", "Après-midi", "Soirée"],
                addressLabel: "Adresse",
                phoneLabel: "Téléphone",
                hoursLabel: "Horaires",
                directions: "Obtenir l'itinéraire",
                days: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"],
                closed: "Fermé",
                success: "Merci ! Votre demande a été envoyée.",
                error: "Oups ! Une erreur est survenue.",
                loading: "Envoi..."
            }
        },
        en: {
            nav: [
                { label: "Home", anchor: "#hero" },
                { label: "Services", anchor: "#services" },
                { label: "Reviews", anchor: "#reviews" },
                { label: "Why Us", anchor: "#why-choose-us" },
                { label: "About", anchor: "#bio" },
                { label: "Contact", anchor: "#contact" }
            ],
            more: "More",
            tagline: "Brazilian massage therapy & aesthetic treatments in Quebec City.",
            description: "Brazilian massage therapy, medical consultations with a urologist, and aesthetic treatments with nurses (Sculptra, Radiesse, Hyaluronic Acid, Botox). A clinic focused on real results and comfort.",
            cta: "Book on WhatsApp",
            partners: {
                title: "Our Partners",
                items: [
                    { name: "Simony Teixeira", role: "Clinical Nurse Injector", img: "partner_simony.png" },
                    { name: "Maria Carolina", role: "LPN Nurse - Medical Aesthetics Specialist", img: "partner_maria.png" },
                    { name: "Dr. Nathalie Gagnon - Urologist", role: "Medical Consultation", img: "partner_nathalie.png" }
                ]
            },
            bio: {
                title: "Owner & Certified Therapist",
                description: "Passionate about well-being and aesthetics, Taíse Neves combines technical expertise and a human approach to offer high-quality personalized care, adapted to the specific needs of each client.\n\nA graduate in physiotherapy in Brazil from the Catholic University of Salvador (Bahia), she began her career in the field of massage therapy while she was still a student. Very early on, she specialized in postoperative support for plastic surgeries, both aesthetic and reconstructive, notably in the follow-up of patients who underwent breast reconstruction after breast cancer.\n\nWith several years of experience in postoperative care, Taíse also has more than 12 years of experience in high-tech aesthetics. Since 2014, she has held a specialization in dermatofunctional physiotherapy, which allows her to integrate advanced techniques and innovative technologies into her treatments.\n\nShe also completed training in medical aesthetics in 2022 (school based in Montreal), consolidating her expertise and expanding her field of skills.\n\nThanks to her rich and multidisciplinary background, Taíse is committed to supporting each client in achieving their health, well-being, and self-confidence goals, by offering safe, effective, and personalized care.",
                readMore: "Read more...",
                readLess: "Read less",
                stats: [
                    { label: "Years of Experience", value: "18+" },
                    { label: "Happy Clients", value: "5k+" },
                    { label: "Certifications", value: "12" }
                ],
                quote: "My commitment is to reveal your natural beauty through attentive care and cutting-edge expertise.",
                expertiseLabel: "The expertise behind your well-being",
                meetLabel: "Meet Taíse Neves"
            },
            services: {
                title: "Our Services",
                details: "Details",
                specialized: "Specialized care for your well-being and beauty.",
                items: [
                    { title: "Massage Therapy", tech: "Experience since 2007", desc: "Therapeutic massages and Brazilian lymphatic drainage (Renata França, Godoy).", fullDesc: "Therapeutic, myofascial, and relaxing massages (Swedish massage specialist). Relaxing massage following the Renata França® method. Certified in lymphatic drainage (7 certifications), including Renata França®, Godoy®, Leduc, and Vodder methods. Miracle Touch® facial massage (drainage and contouring). Complete relaxation and stress reduction.", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { title: "Pre & Post-Op Care", tech: "Specialized Follow-up & Technologies", desc: "Optimal preparation and recovery with advanced technologies to avoid complications.", fullDesc: "Preoperative care (starting before the surgery) is essential to prevent complications and prepare the body for better healing.\n\nPostoperative care is not limited to lymphatic drainage, as each patient recovers at their own pace and may present different complications. Treatment can therefore include various techniques and technologies, such as laser or LED to accelerate healing, as well as ultrasound, radiofrequency, endermology, microcurrents, kinesiotape, among others, depending on the needs of each case.\n\nSurgeries such as - abdominoplasty, liposuction, breast reduction, silicone implants, mastectomy, face lift, facial surgery, orthognathic surgery... and others.\n\nThese treatments improve blood circulation, reduce water retention, and prepare the body for better healing. In the case of liposuction, they help fragment fat deposits and facilitate healing, thus reducing the risk of fibrosis.\n\nImportance of postoperative care:\n\nThey improve pain, modulate inflammation, reduce and control edema, attenuate bruising, and decrease the risk of fibrosis and necrosis.", img: "service_post_op.jpg" },
                    { title: "Kinesiotape", tech: "Elastic Taping", desc: "Kinesiotape to reduce edema and support muscles without immobilization.", fullDesc: "Kinesiotape (functional elastic bandage) – is an elastic adhesive tape, with elasticity similar to that of the skin, applied to the body for therapeutic purposes.\n\nIt can be used for prevention and treatment of joint and muscle injuries, and can also be applied postoperatively to reduce edema and pain, decrease hematomas, and improve the overall condition of the skin.\n\nImportance of Kinesiotape\n\nReduction of edema (swelling)\n\nOne of the main benefits is the slight lifting of the skin by the tape.\n\nThis improves lymphatic circulation, facilitating the drainage of accumulated fluids.\n\nHealing Aid – postoperative Kinesiotape is widely used in post-op care (e.g., liposuction, abdominoplasty).\nPostoperative Kinesiotape: Improves local circulation, Reduces pressure on injured tissues, Contributes to a more harmonious healing\nCan help prevent: fibrosis, scar adhesions\n\nPain Management\n\nStimulates cutaneous sensory receptors, Reduces pain perception (neuromodulatory effect)\nFor better comfort during recovery.\n\nMuscular and Functional Support\n\nWithout immobilizing, it offers light support to the muscles\nImproves proprioception\nAlso used in sports and orthopedic rehabilitation\n\nPrevention of Postoperative Complications\n\nReduces the risk of fibrosis, improves blood circulation, and helps reduce inflammation.\n\nAesthetic Benefits\n\nImproves skin appearance, contributes to scar uniformity and better final aesthetic results.", img: "service_kinesio_new.jpg", icon: "recovery" },
                    { title: "Skin Cleansing", tech: "Deep Brazilian Method", desc: "Deep cleansing with complete manual extraction of blackheads.", fullDesc: "Deep facial cleansing (Brazilian method) is an aesthetic protocol renowned for its complete and meticulous approach, focused on the manual extraction of blackheads, unlike more superficial methods practiced in other countries.\n\nFacial cleansing is necessary to remove dead cells and blackheads, renew the skin, and improve product absorption. Thus, before undertaking high-tech treatments such as lasers, intense pulsed light (IPL), radiofrequency, micro-focused ultrasound, or even cosmetic injections, facial cleansing is essential for a more lasting and satisfying result, and also helps restore the skin's natural radiance.\n\nWhat are the characteristics of the Brazilian method?\n\nComplete manual extraction of blackheads\n\nAdherence to a multi-step routine\n\nAssociation with technologies (steam, high frequency, photobiomodulation, etc.)\n\nFinal session focused on soothing and skin regeneration.\n\nDeep facial cleansing using the Brazilian method is considered one of the most complete aesthetic protocols because:\n\n• It promotes true pore cleaning\n• It combines manual and technological techniques\n• It improves skin health and appearance\n\nSteps of deep facial cleansing: Cleansing, exfoliation, application of an emollient (opening pores), extraction (removal of open and closed blackheads), antisepsis (application of antiseptic lotions), Prevention of infections, high-frequency application (tightens pores and has a bactericidal action), soothing mask, and application of sun protection.", img: "service_skin_cleansing.jpg" },
                    { title: "Rejuvenation & Clarity", tech: "IPL (Sharplight)", desc: "Rosacea, telangiectasias, acne, folliculitis, imperfections, and rejuvenation.", fullDesc: "IPL (Intense Pulsed Light) is a non-invasive aesthetic technology used to improve skin quality and treat various skin issues.\n\nUnlike laser, IPL diffuses a broad-spectrum light that specifically targets:\n• Melanin (pigment spots)\n• Hemoglobin (redness, visible vessels)\n• Sebaceous glands (acne)\n\nIPL is a versatile solution that allows you to:\n\n• Improve skin radiance and texture\n• Even out skin tone and reduce imperfections\n• Treat signs of aging (photorejuvenation)\n\nIPL for Rosacea and Telangiectasias:\nA treatment of choice for rosacea and diffuse redness. It targets small visible blood vessels to gradually fade them. Ideal for sensitive areas prone to redness and couperose.\n\nIPL for Acne and Folliculitis:\nEffective solution that reduces acne-causing bacteria, decreases inflammation, and regulates sebum production. Also helps tighten pores.\n\nIPL for Pigment Spots:\nHighly effective for treating sun spots, lentigos, or superficial hyperpigmentation. The light targets melanin to even out the skin tone.\n\nIPL treatment is quick, minimally invasive, and requires little to no downtime. Several sessions are generally recommended for optimal results. Rigorous sun protection is essential to maintain results.", img: "service_sharplight.jpg" },
                    { title: "Tattoo & Microblading Removal", tech: "Q-switched Laser", desc: "Effective and safe removal of tattoos and microblading.", fullDesc: "Tattoo and Microblading Removal.\n\nTattoo removal is an aesthetic procedure that progressively fades or removes a tattoo using advanced technologies, specifically laser.\n\nIn our clinic, we use the SharpLight Q-Switched laser, recognized for its precision and effectiveness. This type of laser emits very rapid pulses that specifically target ink pigments without damaging surrounding tissues. The pigments are fragmented into microparticles and then naturally eliminated by the body via the lymphatic system.\n\nThe treatment is performed over several sessions spaced a few weeks apart. The number of sessions varies according to several factors: the depth of the tattoo, the colors used, its age, and skin type. It is important to understand that the process is gradual and that complete treatment can span several months, or even years, to achieve an optimal and safe result.\n\nDuring the session, a tingling or heat sensation may be felt, similar to small rubber band snaps on the skin. Measures are in place to ensure client comfort.\n\nBefore treatment:\nIt is recommended to avoid sun exposure or UV (including tanning beds) at least two weeks before the session. The skin must not be irritated, injured, or tanned. It is also advised not to apply irritating products to the area to be treated.\n\nAfter treatment:\nRedness, slight swelling, or the formation of small scabs may appear, which is completely normal. It is essential to keep the area clean and hydrated, avoid scratching or removing scabs, and protect the skin from the sun with sunscreen. Hot baths, swimming pools, saunas, and intense sporting activities should be avoided for a few days to promote proper healing.\n\nCompliance with pre- and post-treatment care for each session is essential to optimize results and reduce the risk of complications.\n\nTattoo removal is a process that requires patience and regularity, but when performed with high-performance technology and by a qualified professional, it achieves visible, safe, and lasting results.", img: "service_tattoo_removal.jpg" },
                    { title: "Instant Glow", tech: "Q-switched Laser (Hollywood Peel)", desc: "Reduce excess sebum, tighten pores, and unify skin tone.", fullDesc: "Hollywood Peel (Carbon Peel)\n\nThe Carbon Peel is a non-invasive aesthetic treatment that instantly improves skin texture, tightens pores, and provides a luminous, smooth, and uniform effect. This is why it is very popular before important events — hence its nickname \"Hollywood Peel.\"\n\nThis treatment combines the application of an active carbon mask with the use of a laser to deep clean, exfoliate, and revitalize the skin.\n\nThe treatment is quick, generally between 20 and 30 minutes, and requires no downtime. A slight sensation of heat or tingling may be felt during the session, but it is very well tolerated.\n\nThe treatment begins with the application of a thin layer of liquid carbon to the skin. This carbon penetrates the pores and acts as a magnet for impurities, excess sebum, and dead cells. Then, the laser pass heats and vaporizes the carbon particles, taking impurities with them and simultaneously stimulating collagen production.\n\nThis treatment is particularly recommended for:\n\n• Oily or acne-prone skin\n• Enlarged pores\n• Dull or irregular complexion\n• Blackheads and imperfections\n• Fine lines and signs of aging\n• Melasma (as a maintenance and global improvement treatment)\n\nThe Carbon Peel works in several ways:\n\n• It gently exfoliates the skin\n• It eliminates pigmented cells on the surface\n• It helps regulate sebum production\n• It stimulates cellular renewal and collagen production\n\nThanks to the action of the laser (often Q-Switched), melanin clusters can be progressively fragmented, contributing to lightening pigment spots and evening out the skin tone.\n\nNote on Melasma: Carbon Peel is not a definitive curative treatment. For melasma, the best results are generally obtained with a combined and personalized approach. Melasma can recur, especially with sun exposure or hormonal factors.\n\nBefore treatment:\nIt is advised to avoid sun exposure, irritating products (such as acids or retinoids), and to come with clean skin, without makeup.\n\nAfter treatment:\nThe skin may be slightly pink for a few hours. It is recommended to hydrate the skin, avoid the sun, and apply sunscreen. Makeup can generally be resumed the next day.\n\nFor optimal results, several sessions may be recommended according to the skin's needs.", img: "service_hollywood_peel.jpg" },
                    { title: "Permanent Hair Removal", tech: "Sharplight & LightSheer", desc: "Sharplight and LightSheer technologies for lastingly smooth skin.", fullDesc: "Laser hair removal is a modern, effective, and lasting method for reducing hair growth. It works by progressively destroying the hair follicle with heat while respecting the surrounding skin.\n\nDifferent technologies are used depending on your skin type:\n\n• Diode Laser (LightSheer®): Versatile, suitable for a wide variety of skin and hair types.\n• Alexandrite Laser (Sharplight®): Highly effective on light skin with dark hair.\n• Nd:YAG Laser (Sharplight®): Specially adapted for darker or tanned skin for total safety.\n\nTreatment Process:\nEach session is quick and can last from a few minutes to an hour. Several sessions (average 6 to 8) are necessary for optimal results.\n\nBefore Treatment:\n• Inform the professional of any recent medication or vitamins.\n• Ensure you are not pregnant.\n• Avoid sun exposure (2 weeks before).\n• Do not wax or pluck (shaving recommended).\n• Clean skin without makeup or cream.\n\nAfter Treatment:\n• Hydrate the skin and avoid heat (hot baths, intense sport).\n• Avoid the sun and apply sunscreen.\n\nOver the sessions, hair becomes finer, lighter, and grows back more slowly, while improving the overall quality of your skin.", img: "service_hair_removal.jpg" },
                    { title: "Firming & Body Contouring", tech: "Radiofrequency (Sharplight & Exilis)", desc: "Cellulite treatment and body contouring for skin tightening.", fullDesc: "Body Contouring: Radiofrequency for cellulite, sagging, and localized fat\n\nRadiofrequency body contouring is a non-invasive, effective, and safe solution to improve skin appearance, reduce cellulite, firm tissues, and treat localized fat.\n\nIn our clinic, we use advanced technologies such as Omnimax S4 by SharpLight and Exilis by BTL Aesthetics, recognized for their performance and visible results.\n\nHow does it work?\nRadiofrequency delivers controlled heat into the deep layers of the skin, allowing for:\n• Stimulating collagen and elastin production\n• Firming and toning the skin\n• Improving the appearance of cellulite\n• Promoting the reduction of fat deposits\n\nThis thermal action also improves blood circulation and drainage, contributing to smoother and more uniform skin.\n\nIndications:\nThis treatment is ideal for:\n• Cellulite (orange peel appearance)\n• Skin sagging (laxity)\n• Localized fat (abdomen, thighs, arms, flanks)\n• Overall improvement of skin texture and firmness\n\nTreatment Process:\nThe session is comfortable and provides a pleasant warm sensation. It generally lasts between 20 and 60 minutes depending on the area treated. Several sessions are recommended for optimal results, with progressive improvement in firmness and silhouette.\n\nAfter Treatment:\n• No downtime (immediate return to activities)\n• Slight temporary redness possible\n• Hydration recommended\n• Maintain a healthy lifestyle to optimize results\n\nResults:\nResults appear gradually over the sessions:\n• Firmer and toned skin\n• Visible reduction in cellulite\n• More harmonious silhouette\n• Improved skin quality\n\nRadiofrequency contouring is an excellent non-surgical alternative to gently sculpt the body while offering natural results.", img: "service_rf_new.jpg" },
                    { title: "Cold Body Sculpting", tech: "Cryolipolysis (Bfreeze)", desc: "Elimination of localized fat deposits by cold.", fullDesc: "Cryolipolysis is a non-invasive technology that reduces localized fat using cold, without surgery or downtime.\n\nIn our clinic, we use B-Freeze technology, designed to effectively target fat deposits resistant to diet and exercise.\n\nHow does it work?\nThe treatment is based on a simple principle: fat cells (adipocytes) are sensitive to cold. Exposure to controlled cooling causes them to crystallize, and they are then gradually eliminated by the body via the lymphatic system.\n\nIndications:\nCryolipolysis is ideal for treating:\n• Abdomen\n• Love handles\n• Thighs and back\n• Arms and double chin\n\nTreatment Process:\nThe session lasts between 30 and 60 minutes per area. The applicator creates a suction effect with an intense cold sensation at first, which quickly subsides. The treatment is comfortable.\n\nAfter Treatment:\n• Possible temporary redness, sensitivity, or numbness.\n• Immediate return to daily activities.\n• Hydration recommended.\n• Lymphatic drainage advised to optimize results.\n\nResults:\nVisible reduction of fat deposits and a more harmonious silhouette between 3 and 12 weeks after treatment.", img: "service_cryolipolysis.jpg" },
                    { title: "Skin Regeneration", tech: "Microneedling", desc: "Collagen stimulation, reduction of wrinkles, scars, and imperfections.", fullDesc: "Microneedling is a non-invasive treatment that naturally stimulates skin regeneration. It can be performed alone or combined with radiofrequency (RF) for deeper results.\n\nMicroneedling (Standard):\nIt involves creating controlled micro-perforations to activate the skin's natural repair mechanism and stimulate collagen production.\n• Indications: Fine lines, wrinkles, acne scars, enlarged pores.\n\nMicroneedling with Radiofrequency:\nRF Microneedling combines micro-perforations with deep heat delivery. This dual action provides intense collagen stimulation and significant firming.\n• Indications: Skin sagging, deep wrinkles, deep scars, stretch marks.\n\nTreatment Process:\nA numbing cream can be applied. The session lasts 30 to 60 minutes. Redness and slight sensitivity are possible for 24 to 72 hours.\n\nAfter Treatment:\n• Essential hydration.\n• Avoid sun and apply sunscreen.\n• Avoid makeup and irritating products for a few days.\n\nResults:\nSkin becomes smoother, firmer, and more luminous. Results appear gradually over several weeks.", img: "service_microneedling.jpg" },
                    { title: "Natural Face Lifting", tech: "Miracle Face (Renata Franca)", desc: "Immediate lifting effect facial massage and lymphatic drainage.", fullDesc: "Miracle Face is an exclusive facial massage technique from the Renata França® method. It combines lymphatic drainage and contouring maneuvers to provide an immediate lifting effect.\n\nThis treatment helps to:\n• Reduce puffiness and dark circles\n• Enhance facial contours\n• Stimulate blood circulation\n• Detoxify tissues for a more radiant complexion\n\nIdeal before an event or to maintain facial tone, Miracle Face offers visible results from the first session.", img: "service_miracle_face.jpg", icon: "aesthetic" },
                    {
                        title: "Medical Consultation - Urologist", tech: "Dr. Nathalie Gagnon", desc: "Specialized urological consultation for your health and well-being.", fullDesc: `I am a urologist. I completed my medical studies and specialization at the University of Montreal, graduating in 1993. I worked as a general urologist at the Centre hospitalier du Grand Portage in Rivière-du-Loup for nearly 32 years. I retired from hospital practice in July 2025.

Ms. Neves approached me to offer occasional consultation services at her clinic because she noted needs among several of her clients dealing with incontinence and various urinary complaints. Since these problems are classified as "non-urgent" in the public system, it leads to significant delays before being able to meet a specialist, in addition to requiring a referral from a general practitioner. We offer you a way to bypass the system to get answers to your questions and concerns.`, img: "partner_nathalie.png", icon: "medical"
                    },
                    { title: "Specialized Medical-Aesthetic Care", tech: "Simony Teixeira", desc: "Nurse specialized in aesthetic injections, mission to reveal your beauty. With medical consultation.", fullDesc: "Nurse specialized in medical-aesthetic care and injections, she uses her expertise to reveal your natural beauty. In collaboration with a medical team, she offers personalized protocols for harmonious and safe results.", img: "partner_simony.png", icon: "nurse" },
                    { title: "Specialized Medical-Aesthetic Care", tech: "Maria Carolina", desc: "Nurse specialized in aesthetic injections, mission to reveal your beauty. With medical consultation.", fullDesc: "Nurse specialized in medical-aesthetic care and injections, she uses her expertise to reveal your natural beauty. In collaboration with a medical team, she offers personalized protocols for harmonious and safe results.", img: "partner_maria.png", icon: "nurse" }
                ]
            },
            gallery: {
                title: "Gallery",
                subtitle: "A glimpse of our expertise and environment."
            },
            technologies: {
                title: "Our Technologies",
                desc: "We use world-class medical-aesthetic equipment to ensure safe and effective results.",
                items: [
                    { title: "BTL Exilis Ultra 360", desc: "The only technology combining radiofrequency and ultrasound for skin tightening and body contouring.", img: "taise_machines.jpg" },
                    { title: "Lumenis LightSheer Desire", desc: "The gold standard in laser hair removal. Fast, effective, and comfortable for all skin types.", img: "machine_lightsheer.jpg" },
                    { title: "BTL CELLUtone", desc: "Acoustic wave therapy to treat cellulite and improve skin texture.", img: "CELLUtone.jpg" }
                ]
            },
            reviews: {
                title: "What our clients say",
                more: "See more reviews"
            },
            why: {
                title: "Why Choose Our Clinic",
                items: [
                    "Warm and modern atmosphere",
                    "Certified and continuous expertise",
                    "Professional and attentive care",
                    "Clear process and recommendations",
                    "Cutting-edge technology"
                ]
            },
            contact: {
                title: "WhatsApp",
                subtitle: "Book your session or ask your questions directly via WhatsApp.",
                whatsappCTA: "Book on WhatsApp",
                name: "Full Name",
                info: "Phone or Email",
                type: "Treatment Type",
                time: "Preferred Time",
                message: "Message (optional)",
                send: "Send Request",
                times: ["Morning", "Afternoon", "Evening"],
                addressLabel: "Address",
                phoneLabel: "Phone",
                hoursLabel: "Hours",
                directions: "Get Directions",
                days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                closed: "Closed",
                success: "Thank you! Your request has been sent.",
                error: "Oops! An error occurred.",
                loading: "Sending..."
            }
        },
        pt: {
            nav: [
                { label: "Início", anchor: "#hero" },
                { label: "Serviços", anchor: "#services" },
                { label: "Avaliações", anchor: "#reviews" },
                { label: "Por que nos escolher", anchor: "#why-choose-us" },
                { label: "Sobre", anchor: "#bio" },
                { label: "Contato", anchor: "#contact" }
            ],
            more: "Mais",
            tagline: "Massoterapia e tratamentos estéticos brasileiros na cidade de Quebec.",
            description: "Massoterapia brasileira, consultas médicas com urologista e tratamentos estéticos com enfermeiras (Sculptra, Radiesse, Ácido Hialurônico, Botox). Uma clínica focada em resultados reais e conforto.",
            cta: "Reservar no WhatsApp",
            partners: {
                title: "Nossos Parceiros",
                items: [
                    { name: "Simony Teixeira", role: "Enfermeira esteta injetora", img: "partner_simony.png" },
                    { name: "Maria Carolina", role: "Enfermeira LPN - Especializada em medicina estética", img: "partner_maria.png" },
                    { name: "Dr. Nathalie Gagnon - Urologista", role: "Consulta médica", img: "partner_nathalie.png" }
                ]
            },
            bio: {
                title: "Proprietária e Terapeuta Certificada",
                readMore: "Veja mais...",
                readLess: "Veja menos",
                description: "Apaixonada pelo bem-estar e pela estética, Taíse Neves combina expertise técnica e abordagem humana para oferecer cuidados personalizados de alta qualidade, adaptados às necessidades específicas de cada cliente.\n\nGraduada em fisioterapia no Brasil pela Universidade Católica de Salvador (Bahia), iniciou sua carreira na área de massoterapia ainda quando estudante. Muito cedo, especializou-se no acompanhamento pós-operatório de cirurgias plásticas, tanto estéticas quanto reconstrutivas, nomeadamente no acompanhamento de pacientes submetidas a reconstrução mamária após câncer de mama.\n\nCom vários anos de experiência em cuidados pós-operatórios, Taíse acumula também mais de 12 anos de experiência em estética de alta tecnologia. Desde 2014, possui especialização em fisioterapia dermatofuncional, o que lhe permite integrar técnicas avançadas e tecnologias inovadoras nos seus tratamentos.\n\nConcluiu também uma formação em estética médica em 2022 (Escola Instalada em Montreal), consolidando a sua expertise e alargando o seu campo de competências.\n\nGraças ao seu percurso rico e multidisciplinar, Taíse empenha-se em acompanhar cada cliente na consecução dos seus objetivos de saúde, bem-estar e autoconfiança, propondo cuidados seguros, eficazes e personalizados.",
                stats: [
                    { label: "Anos de Experiência", value: "18+" },
                    { label: "Clientes Felizes", value: "5k+" },
                    { label: "Certificações", value: "12" }
                ],
                quote: "Meu compromisso é revelar sua beleza natural através de cuidados atenciosos e expertise de ponta.",
                expertiseLabel: "A expertise por trás do seu bem-estar",
                meetLabel: "Conheça Taíse Neves"
            },
            services: {
                title: "Nossos Serviços",
                details: "Detalhes",
                specialized: "Cuidado especializado para seu bem-estar e beleza.",
                items: [
                    { title: "Massoterapia", tech: "Experiência desde 2007", desc: "Massagens terapêuticas e drenagem linfática brasileira (Renata França, Godoy).", fullDesc: "Massagens terapêuticas, miofasciais e relaxantes (especialista em massagem sueca). Massagem relaxante pelo método Renata França®. Formação em drenagem linfática (7 formações), incluindo Renata França®, Godoy®, Leduc e Vodder. Massagem facial Miracle Touch® (drenagem e remodelagem). Relaxamento muscular e bem-estar completo.", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { title: "Cuidados Pré e Pós-Operatórios", tech: "Acompanhamento Especializado", desc: "Preparação e recuperação ideal com tecnologias avançadas para evitar complicações.", fullDesc: "Os cuidados pré-operatórios (iniciando antes da intervenção) são essenciais para prevenir complicações e preparar o corpo para uma melhor cicatrização.\n\nOs cuidados pós-operatórios não se limitam à drenagem linfática, pois cada paciente se recupera em seu próprio ritmo e pode apresentar diferentes complicações. O tratamento pode, portanto, incluir diversas técnicas e tecnologias, como laser ou LED para acelerar a cicatrização, além de ultrassom, radiofrequência, endermologie, microcorrentes, kinesiotape, entre outros, dependendo das necessidades de cada caso.\n\nCirurgias como - abdominoplastia, lipoaspiração, redução de mama, implante de silicone, mastectomia, lifting facial, cirurgia facial, cirurgia ortognática... e outras.\n\nEsses cuidados melhoram a circulação sanguínea, reduzem a retenção de líquidos e preparam o corpo para uma melhor cicatrização. No caso da lipoaspiração, ajudam a fragmentar os depósitos de gordura e facilitam a cicatrização, reduzindo assim o risco de fibrose.\n\nImportância dos cuidados pós-operatórios:\n\nMelhoram a dor, modulam a inflamação, reduzem e controlam o edema, atenuam os hematomas, diminuem o risco de fibrose e necrose.", img: "service_post_op.jpg" },
                    { title: "Kinesiotape", tech: "Bandagem Elástica", desc: "Kinesiotape para reduzir o edema e apoiar os músculos sem imobilização.", fullDesc: "Kinesiotape (bandagem elástica funcional) – é uma fita adesiva elástica, com elasticidade semelhante à da pele, aplicada ao corpo para fins terapêuticos.\n\nPode ser utilizada na prevenção e no tratamento de lesões articulares e musculares, podendo também ser aplicada no pós-operatório para atenuar o edema e a dor, reduzir hematomas e melhorar o estado geral da pele.\n\nImportância do Kinesiotape\n\nRedução do edema (inchaço)\n\nUm dos principais benefícios é o leve levantamento da pele pela fita.\n\nIsso melhora a circulação linfática, facilitando a drenagem de fluidos acumulados.\n\nAuxílio na Cicatrização – pós-operatório é amplamente utilizado em cuidados pós-operatórios (ex: lipoaspiração, abdominoplastia).\nO Kinesiotape pós-operatório: Melhora a circulação local, Reduz a pressão nos tecidos lesionados, Contribui para uma cicatrização mais harmoniosa\nPode ajudar a prevenir: fibrose, aderências cicatriciais\n\nGestão da Dor\n\nEstimula os receptores sensoriais cutâneos, Reduz a percepção da dor (efeito neuromodulador)\nPara um melhor conforto durante a recuperação.\n\nSuporte Muscular e Funcional\n\nSem imobilizar, oferece suporte leve aos músculos\nMelhora a propriocepção\nTambém utilizado em reabilitação esportiva e ortopédica\n\nPrevenção de Complicações Pós-Operatórias\n\nReduz o risco de fibrose, melhora a circulação sanguínea e ajuda a reduzir a inflamação.\n\nBenefícios Estéticos\n\nMelhora a aparência da pele, contribui para a uniformidade das cicatrizes e para melhores resultados estéticos finais.", img: "service_kinesio_new.jpg", icon: "recovery" },
                    { title: "Limpeza de Pele", tech: "Método Brasileiro Profundo", desc: "Limpeza profunda com extração manual completa de cravos.", fullDesc: "A limpeza de pele profunda (método brasileiro) é um protocolo estético reconhecido pela sua abordagem completa e minuciosa, focada na extração manual de cravos, ao contrário dos métodos mais superficiais praticados em outros países.\n\nA limpeza de pele é necessária para eliminar células mortas e cravos, renovar a pele e melhorar a absorção de produtos. Assim, antes de realizar tratamentos de alta tecnologia como lasers, luz intensa pulsada (IPL), radiofrequência, ultrassom microfocado ou mesmo injeções cosméticas, a limpeza facial é essencial para um resultado mais duradouro e satisfatório, além de restaurar o brilho natural da pele.\n\nQuais são as características do método brasileiro?\n\nExtração manual completa de cravos\n\nRespeito por uma rotina de várias etapas\n\nAssociação a tecnologias (vapor, alta frequência, fotobiomodulação, etc.)\n\nEtapa final focada no acalmar e na regeneração da pele.\n\nA limpeza facial profunda segundo o método brasileiro é considerada um dos protocolos estéticos mais completos porque:\n\n• Favorece uma verdadeira limpeza dos poros\n• Combina técnicas manuais e tecnológicas\n• Melhora a saúde e a aparência da pele\n\nEtapas da limpeza de pele profunda: Limpeza, esfoliação, aplicação de emoliente (abertura dos poros), extração (eliminação de cravos abertos e fechados), antissepsia (aplicação de loções antissépticas), prevenção de infecções, aplicação de alta frequência (fecha os poros e possui ação bactericida), máscara calmante e aplicação de proteção solar.", img: "service_skin_cleansing.jpg" },
                    { title: "Rejuvenescimento & Claridade", tech: "Luz Pulsada (Sharplight)", desc: "Rosácea, telangiectasias, acne, foliculite, imperfeições e rejuvenescimento.", fullDesc: "O IPL (Luz Pulsada Intensa) é uma tecnologia estética não invasiva utilizada para melhorar a qualidade da pele e tratar diversas problemáticas cutâneas.\n\nAo contrário do laser, o IPL difunde uma luz de largo espetro que visa especificamente:\n• A melanina (manchas pigmentares)\n• A hemoglobina (vermelhidão, vasos visíveis)\n• As glândulas sebáceas (acne)\n\nO IPL é uma solução versátil que permite:\n\n• Melhorar o brilho e a textura da pele\n• Uniformizar a tez e reduzir imperfeições\n• Tratar os sinais de envelhecimento (fotorrejuvenescimento)\n\nIPL para Rosácea e Telangiectasias:\nUm tratamento de eleição para rosácea e vermelhidão difusa. Visa pequenos vasos sanguíneos visíveis para os atenuar progressivamente. Ideal para zonas sensíveis sujeitas a vermelhidão e couperose.\n\nIPL para Acne e Foliculite:\nSolução eficaz que reduz as bactérias responsáveis pela acne, diminui a inflamação e regula a produção de sebo. Ajuda também a fechar os poros.\n\nIPL para Manchas Pigmentares:\nMuito eficaz para tratar manchas solares, lentigos ou hiperpigmentações superficiais. A luz visa a melanina para uniformizar a tez.\n\nO tratamento com IPL é rápido, pouco invasivo e requer pouco ou nenhum tempo de recuperação. São geralmente recomendadas várias sessões para resultados ideais. Uma proteção solar rigorosa é essencial para manter os resultados.", img: "service_sharplight.jpg" },
                    { title: "Remoção de Tatuagem e Microblading", tech: "Laser Q-switched", desc: "Remoção eficaz e segura de tatuagens e microblading.", fullDesc: "Remoção de Tatuagem e Microblading.\n\nO tratamento de remoção de tatuagem é um procedimento estético que permite atenuar ou remover progressivamente uma tatuagem através da utilização de tecnologias avancadas, nomeadamente o laser.\n\nNa nossa clínica, utilizamos o laser Q-Switched da marca SharpLight, reconhecido pela sua precisão e eficácia. Este tipo de laser emite impulsos muito rápidos que visam especificamente os pigmentos da tinta sem danificar os tecidos circundantes. Os pigmentos são fragmentados em micropartículas e, em seguida, eliminados naturalmente pelo organismo através do sistema linfático.\n\nO tratamento é realizado em várias sessões com intervalos de algumas semanas. O número de sessões varia de acordo com vários fatores: a profundidade da tatuagem, as cores utilizadas, a antiguidade, bem como o tipo de pele. É importante compreender que o processo é progressivo e que o tratamento completo pode prolongar-se por vários meses, ou mesmo anos, a fim de obter um resultado ideal e seguro.\n\nDurante a sessão, pode sentir-se uma sensação de formigueiro ou de calor, semelhante a pequenos golpes de elástico na pele. Estão implementadas medidas para garantir o conforto do cliente.\n\nAntes do tratamento:\nRecomenda-se evitar a exposição solar ou aos UV (incluindo camas de bronzeamento) pelo menos duas semanas antes da sessão. A pele não deve estar irritada, ferida ou bronzeada. Recomenda-se também não aplicar produtos irritantes na zona a tratar.\n\nApós o tratamento:\nPodem surgir vermelhidão, um ligeiro inchaço ou a formação de pequenas crostas, o que é perfeitamente normal. É essencial manter a zona limpa e hidratada, evitar coçar ou retirar as crostas e proteger a pele do sol com protetor solar. Banhos quentes, piscinas, saunas e atividades desportivas intensas devem ser evitados durante alguns dias para promover uma boa cicatrização.\n\nO respeito pelos cuidados antes e depois de cada sessão é primordial para otimizar os resultados e reduzir os riscos de complicações.\n\nA remoção de tatuagem é um processo que exige paciência e regularidade, mas realizado com tecnologia de alto desempenho e por um profissional qualificado, permite obter resultados visíveis, seguros e duradouros.", img: "service_tattoo_removal.jpg" },
                    { title: "Brilho Instantâneo", tech: "Laser Q-switched (Peeling Hollywood)", desc: "Reduza o excesso de sebo, feche os poros e unifique o tom da pele.", fullDesc: "Peeling Hollywood (Carbon Peel)\n\nO Carbon Peel é um tratamento estético não invasivo que melhora instantaneamente a textura da pele, fecha os poros e proporciona um efeito luminoso, suave e uniforme. É por esta razão que é muito popular antes de eventos importantes — daí a sua alcunha \"Hollywood Peel\".\n\nEste cuidado combina a aplicação de uma máscara de carvão ativo com a utilização de um laser para limpar, esfoliar e revitalizar a pele em profundidade.\n\nO tratamento é rápido, geralmente entre 20 e 30 minutos, e não requer tempo de recuperação. Pode sentir-se uma ligeira sensação de calor ou de formigueiro durante a sessão, mas é muito bem tolerada.\n\nO tratamento começa com a aplicação de uma fina camada de carvão líquido na pele. Este carvão penetra nos poros e atua como um íman para as impurezas, o excesso de sebo e as células mortas. Em seguida, a passagem do laser permite aquecer e vaporizar as partículas de carvão, arrastando consigo as impurezas e estimulando simultaneamente a produção de colagénio.\n\nEste cuidado é particularmente recomendado para:\n\n• Peles oleosas ou com tendência acneica\n• Poros dilatados\n• Tez baça ou irregular\n• Pontos negros e imperfeições\n• Primeiras rugas e sinais de envelhecimento\n\nO Carbon Peel atua de várias formas:\n\n• Esfolia a pele suavemente\n• Elimina as células pigmentadas à superfície\n• Ajuda a regular a produção de sebo\n• Estimula a renovação celular e a produção de colagénio\n\nGraças à ação do laser (frequentemente Q-Switched), os aglomerados de melanina podem ser progressivamente fragmentados, o que contribui para clarear as manchas pigmentares e uniformizar a tez.\n\nNota sobre Melasma: O Carbon Peel não é um tratamento curativo definitivo. Para o melasma, os melhores resultados são geralmente obtidos com uma abordagem combinada e personalizada. O melasma pode reaparecer, especialmente em caso de exposição solar ou de fatores hormonais.\n\nAntes do tratamento:\nRecomenda-se evitar a exposição solar, produtos irritantes (como ácidos ou retinoides) e vir com a pele limpa, sem maquilhagem.\n\nApos o tratamento:\nA pele pode ficar ligeiramente rosada durante algumas horas. Recomenda-se hidratar a pele, evitar o sol e aplicar protetor solar. A maquilhagem pode geralmente ser retomada logo no dia seguinte.\n\nPara resultados ideais, podem ser recomendadas várias sessões, dependendo das necessidades da pele.", img: "service_hollywood_peel.jpg" },
                    { title: "Depilação Permanente", tech: "Sharplight & LightSheer", desc: "Tecnologias Sharplight e LightSheer para pele macia duradoura.", fullDesc: "A depilação a laser é um método moderno, eficaz e duradouro para reduzir a pilosidade. Repousa na destruição progressiva do folículo piloso pelo calor respeitando a pele circundante.\n\nSão utilizadas diferentes tecnologias dependendo do seu tipo de pele:\n\n• Laser de Díodo (LightSheer®): Versátil, adequado para uma grande variedade de tipos de pele e pelos.\n• Laser Alexandrite (Sharplight®): Muito eficaz em peles claras com pelos escuros.\n• Laser Nd:YAG (Sharplight®): Especialmente adaptado para peles mais escuras ou bronzeadas para total segurança.\n\nDesenvolvimento do Tratamento:\nCada sessão é rápida e pode durar de alguns minutos a uma hora. São necessárias várias sessões (média 6 a 8) para um resultado ideal.\n\nAntes do Tratamento:\n• Informe o profissional sobre qualquer medicação ou vitaminas recentes.\n• Certifique-se de que não está grávida.\n• Evite a exposição solar (2 semanas antes).\n• Não faça depilação com cera ou pinça (lâmina recomendada).\n• Pele limpa sem maquilhagem ou cremes.\n\nApós o Tratamento:\n• Hidrate a pele e evite o calor (banhos quentes, desporto intenso).\n• Evite o sol e aplique protetor solar.\n\nAo longo das sessões, os pelos tornam-se mais finos, mais claros e crescem mais lentamente, melhorando simultaneamente a qualidade da sua pele.", img: "service_hair_removal.jpg" },
                    { title: "Firmeza & Remodelagem", tech: "Radiofrequência (Sharplight & Exilis)", desc: "Tratamento de celulite e contorno corporal para flacidez cutânea.", fullDesc: "Remodelação corporal: radiofrequência para celulite, flacidez e gordura localizada\n\nA remodelação corporal por radiofrequência é uma solução não invasiva, eficaz e segura para melhorar a aparência da pele, reduzir a celulite, refirmar os tecidos e tratar a gordura localizada.\n\nNa nossa clínica, utilizamos tecnologias avançadas como Omnimax S4 da marca SharpLight e Exilis da BTL Aesthetics, reconhecidas pelo seu desempenho e resultados visíveis.\n\nComo funciona?\nA radiofrequência difunde um calor controlado nas camadas profundas da pele, permitindo:\n• Estimular a produção de colagénio e elastina\n• Refirmar e tonificar a pele\n• Melhorar o aspeto da celulite\n• Favorecer a redução de gordura localizada\n\nEsta ação térmica melhora também a circulação sanguínea e a drenagem, contribuindo para uma pele mais lisa e uniforme.\n\nIndicações :\nEste tratamento é ideal para :\n• Celulite (aspeto casca de laranja)\n• Flacidez cutânea (flacidez)\n• Gordura localizada (abdómen, coxas, braços, flancos)\n• Melhoria global da textura e firmeza da pele\n\nDesenvolvimento do Tratamento :\nA sessão é confortável e proporciona uma sensação de calor agradável. Dura geralmente entre 20 a 60 minutos, dependendo da zona tratada. São recomendadas várias sessões para resultados ideais, com uma melhoria progressiva da firmeza e da silhueta.\n\nApós o Tratamento:\n• Sem tempo de recuperação (regresso imediato às atividades)\n• Possível vermelhidão ligeira e temporária\n• Hidratação recomendada\n• Manter um estilo de vida saudável para otimizar os resultados\n\nResultados :\nOs resultados aparecem progressivamente ao longo das sessões :\n• Pele mais firme e tonificada\n• Diminuição visível da celulite\n• Silhueta mais harmoniosa\n• Melhoria da qualidade da pele\n\nA remodelação por radiofrequência é uma excelente alternativa não cirúrgica para esculpir o corpo suavemente, oferecendo resultados naturais.", img: "service_rf_new.jpg" },
                    { title: "Escultura pelo Frio", tech: "Criolipólise (Bfreeze)", desc: "Eliminação de gordura localizada através do frio.", fullDesc: "A criolipólise é uma tecnologia não invasiva que permite reduzir a gordura localizada através do frio, sem cirurgia nem tempo de recuperação.\n\nNa nossa clínica, utilizamos a tecnologia B-Freeze, concebida para visar eficazmente os depósitos de gordura resistentes à alimentação e ao exercício.\n\nComo funciona?\nO tratamento baseia-se num princípio simples: as células adiposas (adipócitos) são sensíveis ao frio. A exposição a um arrefecimento controlado provoca a sua cristalização, sendo depois eliminadas progressivamente pelo organismo através do sistema linfático.\n\nIndicações :\nA criolipólise é ideal para tratar :\n• Abdómen\n• Pneuzinhos (love handles)\n• Coxas e costas\n• Braços e queixo duplo\n\nDesenvolvimento do Tratamento :\nA sessão dura entre 30 a 60 minutos por zona. O aplicador cria um efeito de sucção com uma sensação de frio intenso no início, que diminui rapidamente. O tratamento é confortável.\n\nApós o Tratamento:\n• Possível vermelhidão, sensibilidade ou adormecimento temporários.\n• Regresso imediato às atividades diárias.\n• Hidratação recomendada.\n• Drenagem linfática aconselhada para otimizar os resultados.\n\nResultados :\nRedução visível dos depósitos de gordura e silhueta mais harmoniosa entre 3 a 12 semanas após o tratamento.", img: "service_cryolipolysis.jpg" },
                    { title: "Regeneração da Pele", tech: "Microagulhamento", desc: "Estimulação de colágeno, redução de rugas, cicatrizes e imperfeições.", fullDesc: "O microagulhamento é um tratamento não invasivo que estimula naturalmente a regeneração da pele. Pode ser realizado isoladamente ou combinado com radiofrequência (RF) para resultados mais profundos.\n\nMicroagulhamento (Microneedling) :\nConsiste na criação de microperfurações controladas para ativar o mecanismo natural de reparação da pele e estimular a produção de colagénio.\n• Indicações : Rugas, linhas de expressão, cicatrizes de acne, poros dilatados.\n\nMicroagulhamento com Radiofrequência :\nO RF Microneedling combina as microperfurações com a difusão de calor profunda. Esta dupla ação permite uma estimulação intensa do colagénio e um refirmamento marcado.\n• Indicações : Flacidez cutânea, rugas marcadas, cicatrizes profundas, estrias.\n\nDesenvolvimento do Tratamento :\nPode ser aplicado um creme anestésico. A sessão dura 30 a 60 minutos. É possível ocorrer vermelhidão e sensibilidade ligeira durante 24 a 72 horas.\n\nApós o Tratamento:\n• Hidratação essencial.\n• Evitar o sol e aplicar protetor solar.\n• Evitar maquilhagem e produtos irritantes por alguns dias.\n\nResultados :\nA pele torna-se mais lisa, firme e luminosa. Os resultados aparecem progressivamente ao longo de várias semanas.", img: "service_microneedling.jpg" },
                    { title: "Lifting Facial Natural", tech: "Miracle Face (Renata Franca)", desc: "Massagem facial com efeito lifting imediato e drenagem linfática.", fullDesc: "O Miracle Face é uma técnica de massagem facial exclusiva do método Renata França®. Combina manobras de drenagem linfática e modeladora para proporcionar um efeito de lifting imediato.\n\nEste cuidado permite:\n• Reduzir o inchaço e as olheiras\n• Acentuar os contornos do rosto\n• Estimular a circulação sanguínea\n• Desintoxicar os tecidos para uma tez mais radiante\n\nIdeal antes de um evento ou para manter a tonicidade do rosto, o Miracle Face oferece um resultado visível desde a primeira sessão.", img: "service_miracle_face.jpg", icon: "aesthetic" },
                    {
                        title: "Consulta Médica - Urologista", tech: "Dra. Nathalie Gagnon", desc: "Consulta especializada em urologia para sua saúde e bem-estar.", fullDesc: `Sou urologista. Fiz meu curso de medicina e minha especialização na Universidade de Montreal, graduando-me em 1993. Trabalhei como urologista geral no Centre hospitalier du Grand Portage em Rivière-du-Loup por quase 32 anos. Aposentei-me da prática hospitalar em julho de 2025.

A Sra. Neves me abordou para oferecer um serviço de consulta ocasional em sua clínica, pois notou necessidades em várias de suas clientes com problemas de incontinência e queixas urinárias diversas. Sendo esses problemas classificados como "não urgentes" no sistema público, isso gera atrasos significativos antes de conseguir consultar um especialista, além de exigir um encaminhamento de um clínico geral. Oferecemos aqui uma oportunidade de agilizar o processo para obter respostas às suas perguntas e preocupações.`, img: "partner_nathalie.png", icon: "medical"
                    },
                    { title: "Cuidados Médico-Estéticos Especializados", tech: "Simony Teixeira", desc: "Enfermeira especializada em injetáveis, missão de revelar sua beleza. Com consulta médica.", fullDesc: "Enfermeira especializada em injeção estética, nossa missão é revelar sua beleza e bem-estar. Inclui consulta médica. Atendimento personalizado com Simony Teixeira.", img: "partner_simony.png", icon: "nurse" },
                    { title: "Cuidados Médico-Estéticos Especializados", tech: "Maria Carolina", desc: "Enfermeira especializada em injetáveis, missão de revelar sua beleza. Com consulta médica.", fullDesc: "Enfermeira especializada em injeção estética, nossa missão é revelar sua beleza e bem-estar. Inclui consulta médica. Atendimento personalizado com Maria Carolina.", img: "partner_maria.png", icon: "nurse" }
                ]
            },
            gallery: {
                title: "Galeria",
                subtitle: "Um vislumbre de nossa expertise e ambiente."
            },
            technologies: {
                title: "Nossas Tecnologias",
                desc: "Utilizamos equipamentos médico-estéticos de classe mundial para garantir resultados seguros e eficazes.",
                items: [
                    { title: "BTL Exilis Ultra 360", desc: "A única tecnologia combinando radiofrequência e ultrassom para firmeza da pele e contorno corporal.", img: "taise_machines.jpg" },
                    { title: "Lumenis LightSheer Desire", desc: "O padrão ouro em depilação a laser. Rápido, eficaz e confortável para todos os tipos de pele.", img: "machine_lightsheer.jpg" },
                    { title: "BTL CELLUtone", desc: "Terapia por ondas acústicas para tratar celulite e melhorar a textura da pele.", img: "CELLUtone.jpg" }
                ]
            },
            reviews: {
                title: "O que dizem nossos clientes",
                more: "Ver mais avaliações"
            },
            why: {
                title: "Por que Escolher Nossa Clínica",
                items: [
                    "Atmosfera acolhedora e moderna",
                    "Expertise certificada e contínua",
                    "Atendimento profissional e atencioso",
                    "Processos e recomendações claros",
                    "Tecnologia de ponta"
                ]
            },
            contact: {
                title: "WhatsApp",
                subtitle: "Reserve sua sessão ou tire suas dúvidas diretamente pelo WhatsApp.",
                whatsappCTA: "Reservar no WhatsApp",
                name: "Nome Completo",
                info: "Telefone ou E-mail",
                type: "Tipo de Tratamento",
                time: "Horário Preferido",
                message: "Mensagem (opcional)",
                send: "Enviar Solicitação",
                times: ["Manhã", "Tarde", "Noite"],
                addressLabel: "Endereço",
                phoneLabel: "Telefone",
                hoursLabel: "Horários",
                directions: "Como Chegar",
                days: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
                closed: "Fechado",
                success: "Obrigado! Sua solicitação foi enviada.",
                error: "Ops! Ocorreu um erro.",
                loading: "Enviando..."
            }
        }
    },
    images: {
        hero: "hero_new.jpg",
        services: [
            "service_drainage.png",
            "service_postop.png",
            "service_aesthetic.png",
            "service_laser_new.jpg",
            "service_tech.png",
            "service_rf_new.jpg",
            "service_tech.png",
            "service_aesthetic.png",
            "service_postop.png",
            "service_massage_new.jpg"
        ],
        logo: "logo_clinique.png",
        footerLogo: "logo_footer.png",
        bio: "taise_bio_new_v2.jpg",
        footerSignature: "logo_clinique.png",
        reviewsBanner: "reviews_full.jpg",
        machines: ["taise_machines.jpg", "machine_lightsheer.jpg", "CELLUtone.jpg"],
        gallery: [
            "gallery_01.jpg",
            "gallery_02.jpg",
            "gallery_03.jpg",
            "gallery_04.jpg",
            "gallery_05.jpg"
        ]
    },
    reviews: [
        {
            text: {
                fr: "Service exceptionnel du début à la fin… Chaque visite est un vrai plaisir.",
                en: "Exceptional service from start to finish… Every visit is a true pleasure.",
                pt: "Serviço excepcional do início ao fim… Cada visita é um verdadeiro prazer."
            },
            author: "Siandra Cavalcanti",
            source: "Google"
        },
        {
            text: {
                fr: "Des mains magiques pour les massages relaxants et le drainage lymphatique… propose aussi des soins high-tech.",
                en: "Magical hands for relaxing massages and lymphatic drainage… also offers high-tech treatments.",
                pt: "Mãos mágicas para massagens relaxantes e drenagem linfática… também oferece tratamentos de alta tecnologia."
            },
            author: "Amanda Morais",
            source: "Google"
        },
        {
            text: {
                fr: "Clinique moderne et chaleureuse… technologie de pointe… le traitement de l'acné a donné des résultats incroyables.",
                en: "Warm modern clinic… state-of-the-art technology… acne facial treatment yielded incredible results.",
                pt: "Clínica moderna e acolhedora… tecnologia de ponta… o tratamento facial para acne deu resultados incríveis."
            },
            author: "Ruana Natalia",
            source: "Google"
        }
    ],
    form: {
        endpoint: "https://us-central1-clinique-tn.cloudfunctions.net/sendEmail"
    }
};

let currentLang = 'fr';

/* --- SVGs --- */
const ICONS = {
    massage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V7a5 5 0 0 1 10 0v4"/><path d="M12 18v-2"/><path d="M5 11h14l-2 10H7L5 11z"/></svg>`,
    drainage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>`,
    recovery: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/><path d="m9 12 2 2 4-4"/></svg>`,
    aesthetic: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 0-10 10c0 5.523 4.477 10 10 10s10-4.477 10-10A10 10 0 0 0 12 2z"/><path d="M12 6v12"/><path d="M8 10h8"/></svg>`,
    acne: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/><circle cx="7" cy="7" r="1"/><circle cx="17" cy="17" r="1"/><circle cx="17" cy="7" r="1"/><circle cx="7" cy="17" r="1"/></svg>`,
    tech: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="m15 13-3 3-3-3"/></svg>`,
    chevronDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
    menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
    call: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    message: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
    atmosphere: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`,
    trained: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>`,
    care: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,
    process: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    tech_star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
    calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
    home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`
};

/* --- Core Logic --- */

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenuListeners(); // Trigger listeners once
    renderUI();
    initScrollEffects();
    initServiceModal();
});

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    renderUI();
}

function renderUI() {
    // Clear root
    document.getElementById('content-root').innerHTML = '';

    renderTopBar();
    renderHero();
    renderServices();
    renderTechnologies();
    renderReviews();
    renderGallery();
    renderWhyChooseUs();
    renderBio();
    // Partners are now integrated into services at the end
    renderContactForm();
    renderContactInfo();
    renderFooter();

    // Re-init mobile menu content
    updateMobileMenuContent();
}

function renderTopBar() {
    const header = document.getElementById('top-bar');
    const t = CONFIG.translations[currentLang];

    // Define items for main nav and items for dropdown
    const mainItemsBefore = t.nav.slice(0, 2); // Accueil, Services
    const dropdownItems = t.nav.slice(2, 5);   // Avis, Pourquoi Nous, À Propos
    const mainItemsAfter = t.nav.slice(5);      // Partenaires, Contact

    header.innerHTML = `
        <div class="container top-bar-inner">
            <a href="#hero" class="logo">
                <img src="${CONFIG.images.logo}" alt="${CONFIG.business.name}">
            </a>
            <nav class="desktop-nav">
                ${mainItemsBefore.map((n, idx) => `
                    <a href="${n.anchor}" class="${idx === 0 ? 'home-nav-link' : ''}">
                        ${idx === 0 ? ICONS.home : n.label}
                    </a>
                `).join('')}
                ${mainItemsAfter.map(n => `<a href="${n.anchor}">${n.label}</a>`).join('')}
                <div class="nav-dropdown">
                    <button class="nav-btn-dropdown">
                        ${t.more} ${ICONS.chevronDown}
                    </button>
                    <div class="nav-dropdown-menu">
                        ${dropdownItems.map(n => `<a href="${n.anchor}">${n.label}</a>`).join('')}
                    </div>
                </div>
            </nav>
            <div class="contact-links">
                <a href="tel:${CONFIG.business.phoneRaw}" class="phone-link">
                    ${ICONS.call} <span>${CONFIG.business.phone}</span>
                </a>
                <div class="lang-dropdown">
                    <button class="lang-btn-current">
                        ${currentLang.toUpperCase()} ${ICONS.chevronDown}
                    </button>
                    <div class="lang-dropdown-menu">
                        <button onclick="setLanguage('fr')">Français</button>
                        <button onclick="setLanguage('en')">English</button>
                        <button onclick="setLanguage('pt')">Português</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Lang dropdown toggle logic
    const langDropdown = header.querySelector('.lang-dropdown');
    const langBtn = header.querySelector('.lang-btn-current');
    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
    }
}

// Global click to close dropdowns
document.addEventListener('click', () => {
    const langDropdown = document.querySelector('.lang-dropdown');
    if (langDropdown) langDropdown.classList.remove('active');
});


function renderHero() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const hero = document.createElement('section');
    hero.id = 'hero';
    hero.className = 'hero';
    hero.innerHTML = `
        <div class="hero-wrapper">
            <div class="hero-content container">
                <div class="hero-text">
                    <h1>${t.tagline}</h1>
                    <p class="subheadline">${t.description}</p>
                    <div class="hero-actions">
                        <a href="https://wa.me/14182617237" target="_blank" class="btn btn-primary">
                            <span class="btn-icon">${ICONS.whatsapp}</span>
                            ${t.cta}
                        </a>
                    </div>
                </div>
            </div>
            <div class="hero-image-container">
                <img src="${CONFIG.images.hero}" alt="${CONFIG.business.name}" class="hero-img">
                <div class="hero-overlay-mobile"></div>
            </div>
        </div>
    `;
    root.appendChild(hero);
}

function renderGallery() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const section = document.createElement('section');
    section.id = 'gallery';
    section.className = 'gallery section-padding';

    section.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>${t.gallery.title}</h2>
                <div class="divider"></div>
                <p class="subheadline" style="margin: 0 auto 3rem auto;">${t.gallery.subtitle}</p>
            </div>
            <div class="gallery-grid">
                ${CONFIG.images.gallery.map((img, idx) => `
                    <div class="gallery-item" data-index="${idx}">
                        <img src="${img}" alt="Clinic Gallery ${idx + 1}" loading="lazy">
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    root.appendChild(section);
}

function renderServices() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const section = document.createElement('section');
    section.id = 'services';
    section.className = 'services section-padding';
    section.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>${t.services.title}</h2>
                <div class="divider"></div>
            </div>
            <div class="services-grid">
                ${t.services.items.map((s, idx) => {
        const icons = ["massage", "drainage", "recovery", "aesthetic", "acne", "tech"];
        const iconName = s.icon || icons[idx % icons.length];
        const imagePath = s.img || CONFIG.images.services[idx % CONFIG.images.services.length];
        return `
                        <div class="service-card" 
                             onclick="openServiceModal(${idx})"
                             style="cursor: pointer;">
                            <div class="service-card-image">
                                <img src="${imagePath}" alt="${s.title}">
                            </div>
                            <div class="service-card-content">
                                <h3>${s.title}</h3>
                                <p>${s.desc}</p>
                                <div class="service-tech-label">${s.tech}</div>
                                <div class="read-more-btn" style="margin-top: 15px; color: var(--clr-accent); font-weight: 600; font-size: 0.9rem;">
                                    ${currentLang === 'fr' ? 'Détails' : (currentLang === 'pt' ? 'Detalhes' : 'Details')} &rarr;
                                </div>
                            </div>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;
    root.appendChild(section);
}

function openServiceModal(index) {
    const t = CONFIG.translations[currentLang];
    const s = t.services.items[index];
    if (!s) return;

    // Determine image path (same logic as renderServices)
    const imagePath = s.img || CONFIG.images.services[index % CONFIG.images.services.length];

    const modal = document.getElementById('service-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTech = document.getElementById('modal-tech');
    const modalImage = document.getElementById('modal-image');
    const modalDesc = document.getElementById('modal-description');
    const modalContactBtn = document.getElementById('modal-contact-btn');

    modalTitle.textContent = s.title;
    modalTech.textContent = s.tech;
    modalImage.src = imagePath;
    modalDesc.innerHTML = (s.fullDesc || s.desc).replace(/\n/g, '<br>');
    modalDesc.scrollTop = 0;

    // Update contact button text based on language
    modalContactBtn.textContent = currentLang === 'fr' ? 'WhatsApp' : (currentLang === 'pt' ? 'WhatsApp' : 'WhatsApp');
    modalContactBtn.onclick = () => {
        closeServiceModal();
        const message = encodeURIComponent(currentLang === 'fr' ? `Bonjour, je suis intéressé par le service : ${s.title}` : (currentLang === 'pt' ? `Olá, estou interessado no serviço: ${s.title}` : `Hello, I am interested in the service: ${s.title}`));
        window.open(`https://wa.me/14182617237?text=${message}`, '_blank');
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    const modal = document.getElementById('service-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function initServiceModal() {
    const modal = document.getElementById('service-modal');
    const closeBtn = document.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.onclick = closeServiceModal;
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            closeServiceModal();
        }
    };

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeServiceModal();
        }
    });
}


function renderTechnologies() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const section = document.createElement('section');
    section.id = 'technologies';
    section.className = 'technologies section-padding';

    section.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>${t.technologies.title}</h2>
                <div class="divider"></div>
                <p class="subheadline" style="margin: 0 auto 3rem auto;">${t.technologies.desc}</p>
            </div>
            <div class="tech-grid">
                ${t.technologies.items.map((item, idx) => `
                    <div class="tech-card">
                        <div class="tech-image">
                            <img src="${item.img}" alt="${item.title}" loading="lazy">
                        </div>
                        <div class="tech-content">
                            <h3>${item.title}</h3>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    root.appendChild(section);
}

function renderReviews() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const section = document.createElement('section');
    section.id = 'reviews';
    section.className = 'reviews'; // Removed global section-padding

    section.innerHTML = `
        <div class="container" style="padding-top: 5rem; padding-bottom: 3rem;">
            <div class="section-header">
                <h2>${t.reviews.title}</h2>
                <div class="divider"></div>
            </div>
        </div>

        <div class="container">
            <div class="reviews-banner">
                <img src="${CONFIG.images.reviewsBanner}" alt="Happy Clients" loading="lazy">
            </div>
        </div>

        <div class="container" style="padding-top: 3rem; padding-bottom: 5rem;">
            <div class="reviews-grid">
                ${CONFIG.reviews.map(r => `
                    <div class="review-card">
                        <div class="review-stars">★★★★★</div>
                        <p class="review-text">"${r.text[currentLang]}"</p>
                        <p class="review-author">— ${r.author}</p>
                        <span class="review-source">${r.source}</span>
                    </div>
                `).join('')}
            </div>
            <div class="reviews-footer">
                <a href="${CONFIG.business.googleReviews}" target="_blank" class="text-link">${t.reviews.more}</a>
            </div>
        </div>
    `;
    root.appendChild(section);
}

function renderWhyChooseUs() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const icons = ["atmosphere", "trained", "care", "process", "tech_star"];
    const section = document.createElement('section');
    section.id = 'why-choose-us';
    section.className = 'why-choose-us section-padding';
    section.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>${t.why.title}</h2>
                <div class="divider"></div>
            </div>
            <div class="why-grid">
                ${t.why.items.map((text, idx) => `
                    <div class="why-card">
                        <div class="why-icon">${ICONS[icons[idx]] || ''}</div>
                        <p>${text}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    root.appendChild(section);
}

function renderBio() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const section = document.createElement('section');
    section.id = 'bio';
    section.className = 'bio section-padding';

    const paragraphs = t.bio.description.split('\n\n');
    const firstPara = paragraphs[0];
    const remainingParas = paragraphs.slice(1);

    section.innerHTML = `
        <div class="container">
            <div class="bio-header-section">
                <span class="bio-label">${t.nav.find(n => n.anchor === '#bio').label}</span>
                <h2 class="bio-main-title">${t.bio.meetLabel}</h2>
            </div>
            
            <div class="bio-premium-grid">
                <!-- Main Profile Card -->
                <div class="bio-profile-premium">
                    <div class="profile-image-frame">
                        <img src="${CONFIG.images.bio}" alt="${CONFIG.business.name.split(' ').slice(1).join(' ')}">
                        <div class="image-gradient-overlay"></div>
                    </div>
                    <div class="profile-details">
                        <h3 class="profile-name-large">${CONFIG.business.name.split(' ').slice(1).join(' ')}</h3>
                        <p class="profile-role">${t.bio.title}</p>
                        <div class="profile-divider"></div>
                        <div class="bio-text-wrapper">
                            <p class="profile-bio-text">${firstPara}</p>
                            <div id="bio-extra" class="bio-extra-content" style="display: none;">
                                ${remainingParas.map(p => `<p class="profile-bio-text">${p}</p>`).join('')}
                            </div>
                            <button id="bio-toggle-btn" class="bio-toggle-btn">${t.bio.readMore}</button>
                        </div>
                    </div>
                </div>
                
                <!-- Stats Cards Grid -->
                <div class="bio-stats-grid">
                    ${t.bio.stats.map((stat, idx) => `
                        <div class="stat-card stat-card-${idx + 1}">
                            <div class="stat-icon-wrapper">
                                <svg class="stat-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    ${idx === 0 ? '<path d="M12 2v20M2 12h20"/>' : idx === 1 ? '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' : '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'}
                                </svg>
                            </div>
                            <div class="stat-content">
                                <div class="stat-number">${stat.value}</div>
                                <div class="stat-label">${stat.label}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                
                <!-- Quote Card -->
                <div class="bio-quote-premium">
                    <div class="quote-decoration">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                        </svg>
                    </div>
                    <blockquote class="quote-text-premium">
                        ${t.bio.quote}
                    </blockquote>
                    <div class="quote-author-premium">
                        <div class="author-line"></div>
                        <span>${CONFIG.business.name.split(' ').slice(1).join(' ')}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    root.appendChild(section);

    // Toggle logic
    const toggleBtn = section.querySelector('#bio-toggle-btn');
    const extraContent = section.querySelector('#bio-extra');
    if (toggleBtn && extraContent) {
        toggleBtn.addEventListener('click', () => {
            const isHidden = extraContent.style.display === 'none';
            extraContent.style.display = isHidden ? 'block' : 'none';
            toggleBtn.textContent = isHidden ? t.bio.readLess : t.bio.readMore;
            
            // Re-scroll into view if closing to avoid losing context? 
            // Actually, keep it simple for now.
        });
    }
}

function renderPartners() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const section = document.createElement('section');
    section.id = 'partners';
    section.className = 'partners section-padding';
    section.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>${t.partners.title}</h2>
                <div class="divider"></div>
            </div>
            <div class="partners-grid">
                ${t.partners.items.map(p => `
                    <div class="partner-card">
                        <div class="partner-image">
                            <img src="${p.img}" alt="${p.name}">
                        </div>
                        <div class="partner-content">
                            <h3>${p.name}</h3>
                            <p class="partner-role">${p.role}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    root.appendChild(section);
}

function renderContactForm() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const section = document.createElement('section');
    section.id = 'contact';
    section.className = 'contact-form section-padding';

    section.innerHTML = `
        <div class="container">
            <div class="whatsapp-cta-card">
                <div class="whatsapp-cta-content">
                    <div class="whatsapp-icon-large">
                        ${ICONS.whatsapp}
                    </div>
                    <h2>${t.contact.title}</h2>
                    <p>${t.contact.subtitle}</p>
                    <a href="https://wa.me/14182617237" target="_blank" class="btn btn-whatsapp-large">
                        ${ICONS.whatsapp} ${t.contact.whatsappCTA}
                    </a>
                </div>
            </div>
        </div>
    `;
    root.appendChild(section);
}

function renderContactInfo() {
    const root = document.getElementById('content-root');
    const t = CONFIG.translations[currentLang];
    const section = document.createElement('section');
    section.id = 'contact-info';
    section.className = 'contact-info-section section-padding';

    const hoursHtml = t.contact.days.map((day, idx) => {
        let hours = "";
        if (idx < 4) hours = CONFIG.business.hours[0].time;      // Mon-Thu
        else if (idx === 4) hours = CONFIG.business.hours[1].time; // Fri
        else if (idx === 5) hours = CONFIG.business.hours[2].time; // Sat
        else hours = CONFIG.business.hours[3].time;               // Sun
        return `<tr><td>${day}</td><td>${hours}</td></tr>`;
    }).join('');

    section.innerHTML = `
        <div class="container info-grid">
            <div class="info-card">
                <h3>${t.nav.find(n => n.anchor === '#contact').label}</h3>
                <div class="info-item">
                    <strong>${t.contact.addressLabel}:</strong>
                    <p>${CONFIG.business.address}</p>
                </div>
                <div class="info-item">
                    <strong>${t.contact.phoneLabel}:</strong>
                    <p><a href="tel:${CONFIG.business.phoneRaw}">${CONFIG.business.phone}</a></p>
                </div>
                <div class="info-item">
                    <strong>${t.contact.hoursLabel}:</strong>
                    <table class="hours-table">
                        ${hoursHtml}
                    </table>
                </div>
                <div class="info-actions">
                    <a href="${CONFIG.business.googleMapsDir}" target="_blank" class="btn btn-outline">${t.contact.directions}</a>
                    <a href="${CONFIG.business.instagram}" target="_blank" class="btn btn-instagram btn-icon">
                        ${ICONS.instagram} Instagram
                    </a>
                    <a href="${CONFIG.business.facebook}" target="_blank" class="btn btn-facebook btn-icon">
                        ${ICONS.facebook} Facebook
                    </a>
                    <a href="https://wa.me/${CONFIG.business.phoneRaw.replace('+', '')}" target="_blank" class="btn btn-whatsapp btn-icon">
                        ${ICONS.whatsapp} WhatsApp
                    </a>
                </div>
            </div>
            <div class="map-container">
                <iframe 
                    title="${CONFIG.business.name} Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.767426466398!2d-71.26425972322394!3d46.80899997114674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb897bab2249767%3A0x6b1cc8c8c5c78a0b!2s205%20Rue%20Montmagny%2C%20Qu%C3%A9bec%2C%20QC%20G1N%204V3!5e0!3m2!1sfr!2sca!4v1705943821014!5m2!1sfr!2sca" 
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
                </iframe>
            </div>
        </div>
    `;
    root.appendChild(section);
}

function renderFooter() {
    const footer = document.getElementById('main-footer');
    const t = CONFIG.translations[currentLang];
    footer.innerHTML = `
        <div class="container footer-inner">
            <div class="footer-col brand-col">
                <img src="${CONFIG.images.footerLogo}" alt="${CONFIG.business.name}" class="footer-logo">
                <p class="footer-tagline">${t.tagline}</p>
                <div class="social-links">
                    <a href="${CONFIG.business.instagram}" target="_blank" class="social-icon" aria-label="Instagram">
                        ${ICONS.instagram}
                    </a>
                    <a href="${CONFIG.business.facebook}" target="_blank" class="social-icon" aria-label="Facebook">
                        ${ICONS.facebook}
                    </a>
                    <a href="https://wa.me/${CONFIG.business.phoneRaw.replace('+', '')}" target="_blank" class="social-icon" aria-label="WhatsApp">
                        ${ICONS.whatsapp}
                    </a>
                </div>
            </div>
            
            <div class="footer-col links-col">
                <h4>Navigation</h4>
                <ul class="footer-nav-list">
                    ${t.nav.map(n => `<li><a href="${n.anchor}">${n.label}</a></li>`).join('')}
                </ul>
            </div>

            <div class="footer-col contact-col-premium">
                <h4>Contact</h4>
                <div class="contact-item">
                    <span class="contact-icon">${ICONS.call}</span>
                    <a href="tel:${CONFIG.business.phoneRaw}">${CONFIG.business.phone}</a>
                </div>
                <div class="contact-item">
                    <span class="contact-icon">${ICONS.mail}</span>
                    <a href="mailto:${CONFIG.business.email}">${CONFIG.business.email}</a>
                </div>
                <div class="contact-item">
                     <span class="contact-icon">${ICONS.mapPin}</span>
                    <a href="${CONFIG.business.googleMapsDir}" target="_blank">
                        ${CONFIG.business.address}
                    </a>
                </div>
                 <div class="contact-item hours-item">
                    <span class="contact-icon">${ICONS.clock}</span>
                    <div class="hours-list">
                        ${CONFIG.business.hours.map(h => `<div><span>${h.day}:</span> ${h.time}</div>`).join('')}
                    </div>
                </div>
            </div>
        </div>
        
        <div class="footer-bottom">
            <div class="container">
                <p>&copy; ${new Date().getFullYear()} ${CONFIG.business.name}. ${currentLang === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
            </div>
        </div>
    `;
}



/* --- Interactive Logic --- */

function setupMobileMenuListeners() {
    const trigger = document.getElementById('menu-trigger');
    const menu = document.getElementById('mobile-menu');
    // const navLinks = document.getElementById('mobile-nav-links'); // Not used here directly

    const toggleMenu = () => {
        const isActive = menu.classList.contains('active');

        if (isActive) {
            // Close
            menu.classList.remove('active');
            menu.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
            document.body.classList.remove('menu-open');
        } else {
            // Open
            menu.classList.add('active');
            menu.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
            document.body.classList.add('menu-open');
        }
    };

    if (trigger) {
        trigger.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent immediate bubbling to body click
            toggleMenu();
        });
    }

    // Close on backdrop click (clicking outside content)
    menu.addEventListener('click', (e) => {
        if (e.target === menu) {
            toggleMenu();
        }
    });

    // We attach link listeners in updateMobileMenuContent because links are re-rendered
    // Expose toggleMenu globally or attach it there? 
    // Ideally, we keep it contained. We can attach a custom event or just reuse the logic.
    // For simplicity, we'll re-implement the close-only logic for links.
}

function updateMobileMenuContent() {
    const navLinks = document.getElementById('mobile-nav-links');
    const footer = document.getElementById('mobile-menu-footer');
    const menu = document.getElementById('mobile-menu');

    const t = CONFIG.translations[currentLang];

    // Populate links
    navLinks.innerHTML = t.nav.map(n => {
        if (n.anchor === '#contact') {
            return `<a href="https://wa.me/${CONFIG.business.phoneRaw.replace('+', '')}" target="_blank" class="btn btn-whatsapp mobile-nav-whatsapp">
                        ${ICONS.whatsapp} ${t.cta}
                    </a>`;
        }
        return `<a href="${n.anchor}" class="mobile-nav-item">${n.label}</a>`;
    }).join('');

    // Populate footer
    footer.innerHTML = `
        <div class="mobile-lang-toggle">
            <button class="${currentLang === 'fr' ? 'active' : ''}" onclick="setLanguage('fr')">FR</button>
            <button class="${currentLang === 'en' ? 'active' : ''}" onclick="setLanguage('en')">EN</button>
            <button class="${currentLang === 'pt' ? 'active' : ''}" onclick="setLanguage('pt')">PT</button>
        </div>
        <h3>${CONFIG.business.name}</h3>
        <p>${CONFIG.business.phone}</p>
        <p>${CONFIG.business.address}</p>
    `;

    // Re-attach close on link click (since links were regenerated)
    const closeMenu = () => {
        menu.classList.remove('active');
        menu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

function initScrollEffects() {
    const header = document.getElementById('top-bar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}



// Inject JSON-LD
const script = document.createElement('script');
script.type = 'application/ld+json';
script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "name": CONFIG.business.name,
    "image": CONFIG.images.hero,
    "@id": "",
    "url": "https://cliniquetaiseneves.com/",
    "telephone": CONFIG.business.phoneRaw,
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "205 Rue Montmagny",
        "addressLocality": "Québec City",
        "addressRegion": "QC",
        "postalCode": "G1N 4V3",
        "addressCountry": "CA"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 46.8089999,
        "longitude": -71.2642597
    },
    "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"], "opens": "13:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Friday", "opens": "09:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "09:00", "closes": "15:00" }
    ],
    "sameAs": [
        CONFIG.business.instagram,
        CONFIG.business.facebook
    ]
});
document.head.appendChild(script);
