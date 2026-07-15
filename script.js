/* script.js - Central Source of Truth */

const CONFIG = {
    business: {
        name: "Clinique Taïse Neves",
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
            description: "Massothérapie brésilienne. Une clinique axée sur des résultats concrets et le confort.",
            cta: "Réserver sur WhatsApp",
            partners: {
                title: "Nos Partenaires",
                items: []
            },
            bio: {
                title: "Propriétaire & Thérapeute certifiée",
                description: "Passionnée par le bien-être et l’esthétique, Taïse Neves combine expertise technique et approche humaine afin d’offrir des soins personnalisés de haute qualité, adaptés aux besoins spécifiques de chaque client.\n\nDiplômée en physiothérapie au Brésil à l’Université Catholique de Salvador (Bahia), elle a commencé sa carrière dans le domaine de la massothérapie alors qu’elle était encore étudiante. Très tôt, elle s’est spécialisée dans l’accompagnement post-opératoire de chirurgies plastiques, tant esthétiques que reconstructrices, notamment dans le suivi de patientes ayant subi une reconstruction mammaire après un cancer du sein.\n\nForte de plusieurs années d’expérience en soins post-opératoires, Taïse cumule également plus de 12 ans d’expérience en esthétique de haute technologie. Depuis 2014, elle détient une spécialisation en physiothérapie dermatofonctionnelle, ce qui lui permet d’intégrer des techniques avancées et des technologies innovantes dans ses traitements.\n\nElle a également complété une formation en esthétique médicale en 2022 (École Installée à Montréal), consolidant ainsi son expertise et élargissant son champ de compétences.\n\nGrâce à son parcours riche et multidisciplinaire, Taïse s’engage à accompagner chaque client dans l’atteinte de ses objectifs de santé, de bien-être et de confiance en soi, en proposant des soins sécuritaires, efficaces et personnalisés.",
                readMore: "Voir plus...",
                readLess: "Voir moins",
                stats: [
                    { label: "Années d'Expérience", value: "18+" },
                    { label: "Clients Heureux", value: "5k+" },
                    { label: "Certifications", value: "46+" }
                ],
                quote: "J’aime prendre soin des gens, mais j’ai une affection toute particulière pour l’âme féminine. Je souhaite que les femmes prennent soin d’elles par amour-propre et non parce qu’elles détestent leur corps ou se sentent prisonnières des standards de beauté.<br><br>Je veux qu’elles se sentent fortes et confiantes, sans ressentir le besoin de changer pour plaire aux autres. Prendre soin de soi par amour de soi, et non par sacrifice.",
                expertiseLabel: "L'expertise derrière votre bien-être",
                meetLabel: "Rencontrez Taïse Neves"
            },
            services: {
                title: "Nos Services",
                details: "Détails",
                specialized: "Soin spécialisé pour votre bien-être et beauté.",
                introMassotherapy: "La massothérapie/thérapie manuelle combine différentes techniques aux objectifs spécifiques, tels que la relaxation musculaire, l'amélioration de la circulation, la réduction de la douleur, la récupération fonctionnelle et le bien-être émotionnel. Plusieurs études démontrent que le massage agit sur les systèmes nerveux, musculaire, circulatoire et lymphatique, favorisant des effets physiologiques et psychologiques positifs. Certaines techniques de massage peuvent être pratiquées à tout âge. Tout dépend des besoins de chaque personne.",
                items: [
                    { category: 'massotherapy', title: "Massage suédois", tech: "Technique classique", desc: "Mouvements fluides et rythmés pour la relaxation et la circulation.", fullDesc: "Le massage suédois est l'une des techniques classiques les plus répandues au monde. Il se caractérise par des mouvements fluides et rythmés.\n\nLes bienfaits de ce massage sont les suivants :\n• Réduction du cortisol (hormone du stress)\n• Sensation de relaxation accrue\n• Amélioration de la circulation sanguine\n• Réduction des tensions musculaires\n• Amélioration de la qualité du sommeil\n• Réduction de l'anxiété et de la fatigue\n• Amélioration des performances sportives", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { category: 'massotherapy', title: "Massage relaxant – Méthode Renata França®", tech: "Rythme accéléré", desc: "Mouvements fermes et rapides pour une légèreté corporelle intense.", fullDesc: "La méthode Renata França utilise des mouvements plus fermes, plus rapides et plus rythmés que les massages relaxants traditionnels.\n\nAvantages constatés :\n• Sensation intense de légèreté corporelle\n• Réduction de la rétention d'eau\n• Relaxation musculaire\n• Amélioration de la circulation\n• Bien-être immédiat\n• Réduction des œdèmes", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { category: 'massotherapy', title: "Drainage lymphatique", tech: "Techniques variées", desc: "Réduction des œdèmes et de la rétention d'eau (Renata França, Godoy, Leduc, Vodder).", fullDesc: "Le drainage lymphatique est une technique manuelle visant à stimuler le système lymphatique. Ses principaux avantages sont la réduction des œdèmes et de la rétention d'eau, l'amélioration de la circulation et une relaxation profonde. Il favorise également le rétablissement postopératoire et soulage les tensions.\n\nNous offrons différentes techniques de drainage lymphatique, chacune ayant un objectif spécifique, comme :\n\nRenata França® - Caractérisée par : des mouvements rapides, une pression ferme, un rythme accéléré et un pompage spécifique.\nAvantages : Réduction rapide des œdèmes ; Sensation de légèreté ; Amélioration de la silhouette ; Stimulation circulatoire ; Aide au rétablissement postopératoire (sur indication médicale).\n\nGodoy® : La méthode développée par José Maria Pereira de Godoy repose sur des bases scientifiques solides et est largement étudiée dans le traitement du lymphœdème.\nAvantages prouvés : Réduction du lymphœdème ; Réduction de la fibrose ; Amélioration de la circulation lymphatique ; Aide dans les cas vasculaires et post-opératoires.\n\nLeduc : Cette méthode combine des manœuvres de drainage lymphatique (absorption, réabsorption et évacuation).\nAvantages : Réduction des œdèmes ; Stimulation immunitaire indirecte ; Récupération post-traumatique ; Relaxation corporelle.\n\nVodder : Caractérisé par des mouvements doux, une légère pression, un rythme lent et continu.\nAvantages scientifiques : Réduction des œdèmes ; Amélioration de la circulation lymphatique ; Détente profonde ; Aide en cas d'inflammation légère.", img: "service_post_op.jpg", icon: "drainage" },
                    { category: 'massotherapy', title: "Méthode Miracle Face – Renata França®", tech: "Soin facial", desc: "Technique faciale combinant drainage lymphatique et modelage.", fullDesc: "Miracle Face est une technique faciale qui combine drainage lymphatique et modelage.\n\nAvantages :\n• Réduction de l'enflure du visage\n• Amélioration du contour du visage\n• Stimulation de la circulation\n• Apparence plus reposée\n• Relaxation des muscles du visage", img: "service_miracle_face.jpg", icon: "aesthetic" },
                    { category: 'massotherapy', title: "Massage myofascial", tech: "Pression profonde", desc: "Agit sur le fascia pour soulager la douleur et restaurer la mobilité.", fullDesc: "Le massage myofascial (ou relâchement myofascial) est une technique thérapeutique par pression profonde qui agit sur le fascia, le tissu qui entoure les muscles et les articulations. L'objectif est de soulager la douleur, de dénouer les tensions (points de déclenchement) et de restaurer la mobilité. Ce massage est particulièrement prisé par les athlètes et les personnes souffrant de douleurs chroniques.\n\nAvantages :\n• Réduction des douleurs myofasciales\n• Amélioration de la flexibilité\n• Amélioration fonctionnelle\n• Aide au rétablissement du sport\n• Réduction des points de déclenchement", img: "service_massage_myofascial.jpg", icon: "recovery" },
                    { category: 'massotherapy', title: "Massage thérapeutique", tech: "Traitement de la douleur", desc: "Traite la douleur, les dysfonctionnements musculaires et le stress.", fullDesc: "Le massage thérapeutique regroupe des techniques visant à traiter la douleur et les dysfonctionnements musculaires, les tensions musculaires, les douleurs lombaires et cervicales, le stress et à favoriser la récupération physique.\n\nAvantages scientifiquement reconnus :\n• Réduction des douleurs chroniques\n• Amélioration de la circulation sanguine\n• Relaxation musculaire\n• Réduction de l'anxiété\n• Amélioration fonctionnelle et posturale", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { title: "Soins Pré & Post-Opératoires", tech: "Suivi Spécialisé & Technologies", desc: "Préparation et récupération optimale avec technologies avancées pour éviter les complications.", fullDesc: "Les soins préopératoires (débutant avant l'intervention) sont essentiels pour prévenir les complications et préparer le corps à une meilleure cicatrisation.\n\nLes soins postopératoires ne se limitent pas au drainage lymphatique, car chaque patient se rétablit à son propre rythme et peut présenter différentes complications. Le traitement peut donc inclure diverses techniques et technologies, telles que le laser ou la LED pour accélérer la guérison, ainsi que les ultrasons, la radiofréquence, l'endermologie, les microcourants, le kinésiotape, entre autres, selon les besoins de chaque cas.\n\nChirurgies telles que - abdominoplastie, liposuccion, réduction mammaire, implant de silicone, mastectomie, lifting du visage, chirurgie faciale, orthognathie... et autres.\n\nCes soins améliorent la circulation sanguine, réduisent la rétention d'eau et préparent le corps à une meilleure cicatrisation. En cas de liposuccion, ils permettent de fragmenter les amas graisseux et de faciliter la cicatrisation, réduisant ainsi le risque de fibrose.\n\nImportance des soins postopératoires :\n\nIls améliorent la douleur, modulent l'inflammation, réduisent et contrôlent l'œdème, atténuent les ecchymoses, diminuent le risque de fibrose et de nécrose.", img: "service_post_op.jpg" },                    { category: 'aesthetic', title: "Endermologie LPG®", tech: "Stimulation mécanique non invasive", desc: "Technologie de stimulation cellulaire pour la minceur, la cellulite, la fermeté et l'anti-âge.", fullDesc: "L’Endermologie LPG® est une technologie de stimulation mécanique non invasive qui utilise des rouleaux motorisés et une aspiration contrôlée pour mobiliser les tissus de la peau. Cette technique vise à réactiver naturellement l’activité cellulaire afin d’améliorer l’apparence de la peau, de favoriser le drainage des fluides et de contribuer au bien-être global.\n\nL’Endermologie est utilisée dans les domaines de l’esthétique et du bien-être pour :\n• Améliorer l’aspect de la cellulite.\n• Favoriser la fermeté et l’élasticité de la peau.\n• Stimuler la circulation sanguine et lymphatique.\n• Réduire les sensations de jambes lourdes.\n• Favoriser la relaxation musculaire.\n\nLe CELLU M6 ALLIANCE® est une technologie de stimulation cellulaire fondée sur la mécanobiologie. Son action vise à réactiver naturellement l'activité des fibroblastes, des adipocytes et de la microcirculation afin d'améliorer la qualité de la peau, la silhouette et le bien-être.\n\nBénéfices corps\n\nMinceur et silhouette\n• Déstockage des graisses localisées et résistantes.\n• Activation de la lipolyse naturelle.\n• Affinement de la silhouette.\n• Réduction du tour de taille et des volumes localisés.\n• Remodelage des contours du corps.\n\nCellulite\n• Réduction de l'aspect peau d'orange.\n• Lissage de la cellulite adipeuse, aqueuse et fibreuse.\n• Assouplissement des cloisons fibreuses de l'hypoderme.\n• Amélioration de la texture et de la qualité de la peau.\n\nFermeté et qualité de peau\n• Raffermissement des tissus.\n• Amélioration de la tonicité cutanée.\n• Augmentation de la production naturelle de collagène.\n• Augmentation de la production d'élastine.\n• Augmentation de la production d'acide hyaluronique.\n• Amélioration de l'élasticité de la peau.\n\nCirculation et drainage\n• Stimulation de la circulation sanguine.\n• Stimulation de la circulation lymphatique.\n• Relance des échanges circulatoires.\n• Drainage des liquides et des toxines.\n• Diminution de la rétention d'eau.\n• Soulagement de la sensation de jambes lourdes.\n• Oxygénation des tissus.\n\nBien-être\n• Sensation de légèreté.\n• Relaxation des tissus.\n• Réduction des tensions.\n• Amélioration do conforto corporal.\n\nBénéfices visage (Endermolift®)\n\nAnti-âge\n• Réduction des rides et ridules.\n• Effet repulpant naturel.\n• Redensification de la peau.\n• Effet liftant naturel.\n• Préservation des expressions du visage.\n• Amélioration de la fermeté cutanée.\n\nQualité de peau\n• Production naturelle de collagène, d'élastine et d'acide hyaluronique.\n• Hydratation améliorée.\n• Peau plus souple et plus résistante.\n• Grain de peau plus uniforme.\n• Peau plus douce et plus lumineuse.\n\nÉclat du teint\n• Relance de la microcirculation.\n• Oxygénation des tissus.\n• Teint plus éclatant et plus uniforme.\n• Réduction de l'aspect fatigué du visage.\n\nContours du visage\n• Raffermissement de l'ovale du visage.\n• Réduction de l'apparence du double menton.\n• Décongestion du contour des yeux.\n• Atténuation des poches et des cernes.", img: "service_endermologie.png" },
                    { category: 'aesthetic', title: "Dermopigmentation réparatrice - 3D réaliste", tech: "Tatouage médical 3D", desc: "Tatouage médical pour recréer l'aréole et le mamelon ou atténuer les cicatrices.", fullDesc: "La dermopigmentation réparatrice de l'aréole mammaire est une technique de tatouage médical qui permet de recréer de façon réaliste l'aréole et le mamelon ou d'atténuer l'apparence des cicatrices après une mastectomie, une reconstruction mammaire, une augmentation ou une réduction mammaire.\n\nRéalisée uniquement après une cicatrisation complète des tissus, cette intervention constitue l'étape finale du parcours de reconstruction. Au-delà de son résultat esthétique, elle contribue à redonner au sein un aspect naturel et harmonieux.\n\nPour de nombreuses patientes, cette dernière étape représente bien plus qu'un simple geste technique. Elle favorise la réappropriation de leur corps, aide à tourner la page après une épreuve physique et émotionnelle, et participe au regain de confiance en soi. Retrouver une image corporelle plus fidèle à soi-même permet souvent de se sentir à nouveau féminine, complète et à l'aise avec son reflet.\n\nLe principe de la technique 3D\n\nLa dermopigmentation 3D repose sur la superposition de plusieurs couches de pigments aux nuances soigneusement sélectionnées. Grâce à un travail précis de colorimétrie, d'ombres et de lumière, il est possible de créer une illusion de relief particulièrement réaliste, reproduisant l'apparence naturelle de l'aréole et du mamelon.\n\nLes pigments utilisés sont stériles, hypoallergéniques et spécialement formulés pour les peaux fragilisées. Chaque traitement est entièrement personnalisé afin de s'adapter à la carnation, à la morphologie et aux attentes de chaque patiente, dans le respect des normes d'hygiène et de sécurité les plus strictes.\n\nLe résultat recherché est discret, naturel et harmonieux, afin d'aider chaque femme à retrouver confiance en son image et à vivre cette ultime étape de sa reconstruction avec sérénité.", img: "service_dermopigmentation.jpg" },
                    { category: 'aesthetic', title: "Traitement des symptômes et contrôle du lipœdème", tech: "Approche multidisciplinaire", desc: "Notre traitement a pour objectif de soulager la douleur et l’inconfort causés par le lipœdème.", fullDesc: "Notre traitement a pour objectif de soulager la douleur et l’inconfort causés par le lipœdème.\n\nLe lipœdème est une maladie chronique et inflammatoire caractérisée par une accumulation anormale de tissu adipeux dans certaines régions du corps, notamment les hanches, les cuisses, les genoux, les jambes et les bras. Toutefois, des études récentes, dont une publiée sur PubMed, confirment également la présence du lipœdème au niveau de l’abdomen. Bien que cette affection soit principalement connue pour toucher les membres, l’atteinte abdominale est bien réelle et sa fréquence augmente avec la gravité de la maladie, selon des schémas de progression ascendante ou descendante.\n\nLa graisse abdominale associée au lipœdème présente les mêmes caractéristiques que celle des extrémités : elle est inflammatoire, symétrique et généralement résistante aux régimes alimentaires ainsi qu’à l’exercice physique.\n\nLes symptômes apparaissent généralement à la puberté, après le début de l’exposition hormonale. Toutefois, le lipœdème peut se manifester ou s’aggraver à tout moment de la vie, notamment pendant ou après une grossesse, ou encore à la ménopause.\n\nL’obésité aggrave considérablement le lipœdème. Il est cependant important de souligner que des personnes non obèses peuvent également être atteintes. Cette situation est souvent observée chez des femmes minces présentant un visage et une taille fins, mais des hanches, des cuisses et des jambes disproportionnellement volumineuses.\n\nLe lipœdème touche environ 10 à 11 % de la population féminine mondiale. Au Canada, on estime qu’environ 2,2 millions de femmes sont atteintes de cette maladie. Malgré sa forte prévalence, le lipœdème demeure largement sous-diagnostiqué et est fréquemment confondu avec l’obésité, la cellulite ou le lymphœdème primaire.\n\nLe principal symptôme du lipœdème est l’accumulation disproportionnée de graisse au niveau des jambes. Cette graisse est résistante aux régimes alimentaires, même les plus restrictifs, ainsi qu’à l’activité physique et à la musculation.\n\nLes manifestations suivantes sont également fréquentes :\n• Hypersensibilité au toucher (douleur au simple contact)\n• Présence de nodules graisseux sous la peau\n• Problèmes au niveau des genoux et des hanches\n• Accumulation de graisse au niveau des bras\n• Relâchement cutané\n• Douleur chronique\n• Sensation de lourdeur et gonflement des jambes\n\nLe lipœdème fragilise également les vaisseaux sanguins, ce qui favorise l’extravasation du sang et l’apparition d’ecchymoses (bleus) à la suite de chocs mineurs, voire en l’absence de tout traumatisme apparent. C'est pourquoi il est si important d'être suivi par un médecin phlébologue. Grâce à son expertise des maladies veineuses et lymphatiques, il est en mesure d'évaluer l'évolution du lipœdème, de poser un diagnostic précis, d'orienter la prise en charge et de coordonner le traitement avec les autres professionnels de la santé impliqués.\n\nComment traiter ces symptômes ?\nLe lipœdème est une maladie chronique pour laquelle il n’existe actuellement aucun traitement curatif. Il est toutefois possible de soulager les symptômes et de ralentir la progression de la maladie. Plus le diagnostic est posé tôt et une prise en charge est instaurée rapidement, plus les chances de limiter son évolution sont importantes.\n\nIl est essentiel que la patiente comprenne que le contrôle et le traitement du lipœdème nécessitent une approche multidisciplinaire. Une équipe qualifiée est indispensable pour assurer une prise en charge globale. Cette équipe peut comprendre notamment des médecins, une ou un nutritionniste, un kinésiologue ou éducateur physique, un physiothérapeute, un massothérapeute et un psychologue.\n\nLe traitement du lipœdème peut être clinique (conservateur), chirurgical, ou combiner les deux approches selon les besoins de la patiente. Il est important de souligner que ces traitements sont complémentaires et que l’un n’exclut pas l’autre.\n\nLe traitement clinique vise avant tout à identifier les causes du processus inflammatoire, qu’elles soient d’origine hormonale ou nutritionnelle, afin de mettre en place des stratégies permettant de réduire l’inflammation.\n\nCette prise en charge peut inclure la prescription de suppléments nutritionnels, de médicaments, ainsi que la physiothérapie décongestive complexe et la thérapie décongestive complexe manuelle.\n\nD’autres approches reconnues pour moduler l’inflammation peuvent également être utilisées, notamment :\n• La photobiomodulation (laser de faible intensité et lumière DEL)\n• L’endermologie\n• Le drainage lymphatique\n• La thérapie manuelle\n• Les exercices physiques adaptés\n• L’ozonothérapie\n\nEn complément de ces traitements, le port de bas de compression médicale est essentiel et constitue une composante importante de la prise en charge du lipœdème.\n\nLe traitement chirurgical de référence du lipœdème est la liposuccion. Contrairement à la liposuccion esthétique, il s'agit d'une intervention à visée fonctionnelle qui permet de retirer le tissu adipeux pathologique, de soulager la douleur, de diminuer la sensation de lourdeur et d'améliorer la mobilité de la patiente.\n\nLe traitement conservateur doit être poursuivi après l'intervention afin de limiter le risque de réapparition de l'accumulation de tissu adipeux et d'assurer le maintien des résultats à long terme. Tout cela doit être aligné sur le chirurgien responsable de votre traitement.", img: "service_lipoedeme.jpg" },
                    { category: 'aesthetic', title: "Lymphœdème post-mastectomie", tech: "Traitement spécialisé", desc: "Prise en charge du lymphœdème par drainage, compression et soins spécialisés.", fullDesc: "Le lymphœdème post-mastectomie est une accumulation chronique de lymphe dans le bras et la région thoracique. Il survient à la suite de l'ablation des ganglions lymphatiques axillaires ou de la radiothérapie, entraînant une interruption du système naturel de drainage lymphatique. Chez les patientes atteintes d'un cancer du sein, son incidence varie considérablement et il peut apparaître peu après l'intervention chirurgicale ou plusieurs années plus tard.\n\nPrincipales causes et facteurs de risque\n• Ablation chirurgicale des ganglions lymphatiques de l'aisselle (curage ganglionnaire axillaire).\n• Radiothérapie, pouvant provoquer une fibrose et des lésions des vaisseaux lymphatiques.\n• Infections ou traumatismes du membre atteint.\n• Obésité et manque de mobilité.\n\nSymptômes fréquents\n• Gonflement persistant du bras, de la main ou du sein.\n• Sensation de lourdeur et de tension cutanée.\n• Raideur ou limitation des mouvements articulares.\n\nOptions de traitement\n• Drainage lymphatique manuel ou mécanique (endermologie LPG) : technique de massage spécifique qui favorise le redirectionnement de la lymphe accumulée vers des zones où le drainage lymphatique est fonctionnel.\n• Compression : utilisation de bandages compressifs et de manchons élastiques pour réduire et contrôler l'œdème.\n• Exercices myolymphocinétiques : mouvements thérapeutiques favorisant le pompage et la circulation de la lymphe.\n• Suivi par un physiothérapeute spécialisé : élément essentiel de la prise en charge du lymphœdème.\n• Traitement chirurgical : lorsque le traitement conservateur ne suffit pas, les progrès de la chirurgie oncologique permettent aujourd'hui de proposer différentes approches chirurgicales adaptées.", img: "service_lymphoedeme.jpg" },

                    { title: "Kinesiotape", tech: "Bandage Élastique", desc: "Kinesiotape pour réduire l'œdème et soutenir les muscles sans immobilisation.", fullDesc: "Kinesiotape (bandage élastique fonctionnel) – est une bande adhésive élastique, d'élasticité semblable à celle de la peau, appliquée sur le corps à des fins thérapeutiques.\n\nElle peut être utilisée en prévention et en traitement des lésions articulaires et musculaires, et peut également être appliquée en postopératoire pour atténuer l'œdème et la douleur, réduire les hématomes et améliorer l'état général de la peau.\n\nImportance du Kinesiotape\n\nRéduction de l'œdème (gonflement)\n\nL'un des principaux avantages est le léger soulèvement de la peau par la bande.\n\nCela améliore la circulation lymphatique, facilitant ainsi le drainage des fluides accumulés.\n\nAide à la cicatrisation – postopératoire est largement utilisé en soins postopératoires (ex. liposuccion, abdominoplastie).\nLe Kinesiotape postopératoire : Améliore la circulation locale, Réduit la pression sur les tissus lésés, Contribue à une guérison plus harmonieuse\nPeut aider à prévenir : la fibrose, les adhérences cicatricielles\n\nGestion de la douleur\n\nStimule les récepteurs sensoriels cutanés, Réduit la perception de la douleur (effet neuromodulateur)\nPour un meilleur confort pendant la convalescence.\n\nSoutien musculaire et fonctionnel\n\nSans immobiliser, il offre un soutien léger aux muscles\nAméliore la proprioception\nÉgalement utilisé en réadaptation sportive et orthopédique\n\nPrévention des complications postopératoires\n\nRéduit le risque de fibrose, améliore la circulation sanguine et aide à réduire l'inflammation.\n\nAvantages esthétiques\n\nAméliore l'apparence de la peau, contribue à l'uniformité des cicatrices et à de meilleurs résultats esthétiques finaux.", img: "service_kinesio_new.jpg", icon: "recovery" },
                    { title: "Nettoyage de la peau", tech: "Méthode Brésilienne Profonde", desc: "Nettoyage en profondeur avec extraction manuelle complète des points noirs.", fullDesc: "Le nettoyage du visage en profondeur (méthode brésilienne) est un protocole esthétique reconnu pour son approche complète et minutieuse, axée sur l'extraction manuelle des points noirs, contrairement aux méthodes plus superficielles pratiquées dans d'autres pays.\n\nLe nettoyage du visage est nécessaire pour éliminer les cellules mortes et les points noirs, renouveler la peau et améliorer l'absorption des produits. Ainsi, avant d'entreprendre des traitements de haute technologie tels que les lasers, la lumière pulsée intense (IPL), la radiofréquence, les ultrasons microfocalisés ou même les injections cosmétiques, le nettoyage du visage est essentiel pour un résultat plus durable et plus satisfaisant, et permet également de restaurer l'éclat naturel de la peau.\n\nQuelles sont les caractéristiques de la méthode brésilienne ?\n\nExtraction manuelle complète des points noirs\n\nRespect d'une routine en plusieurs étapes\n\nAssociation à des technologies (vapeur, haute fréquence, photobiomodulation etc.)\n\nSéance finale axée sur l'apaisement et la régénération de la peau.\n\nLe nettoyage du visage en profondeur selon la méthode brésilienne est considéré comme l'un des protocoles esthétiques les plus complets parce que :\n\nil favorise un véritable nettoyage des pores\nil combine des techniques manuelles et technologiques\nil améliore la santé et l'apparence de la peau\n\nÉtapes du nettoyage du visage en profondeur : Nettoyage, exfoliation, application d'un émollient (ouverture des pores), extraction (élimination des points noirs ouverts et fermés), antisepsie (application de lotions antiseptiques), Prévention des infections, application à haute fréquence (resserre les pores et possède une action bactéricide), masque apaisant et application d'une protection solaire.", img: "service_skin_cleansing.jpg" },
                    { title: "Rajeunissement & Clarté", tech: "Lumière Pulsée (Sharplight)", desc: "Rosacée, télangiectasies, acné, folliculite, imperfections et rajeunissement.", fullDesc: "L’IPL (Lumière Pulsée Intense) est une technologie esthétique non invasive utilisée pour améliorer la qualité de la peau et traiter diverses problématiques cutanées.\n\nContrairement au laser, l’IPL diffuse une lumière à large spectre qui cible spécifiquement :\n• La mélanine (taches pigmentaires)\n• L’hémoglobine (rougeurs, vaisseaux visibles)\n• Les glandes sébacées (acné)\n\nL’IPL est une solution polyvalente qui permet de :\n\n• Améliorer l’éclat et la texture de la peau\n• Unifier le teint et réduire les imperfections\n• Traiter les signes du vieillissement (photorajeunissement)\n\nIPL pour la rosacée et télangiectasies :\nC'est un traitement de choix pour la rosacée et les rougeurs diffuses. Il cible les petits vaisseaux sanguins visibles pour les atténuer progressivement. Idéal pour les zones sensibles sujettes aux rougeurs et à la couperose.\n\nIPL pour l’acné et folliculite :\nSolution efficace qui réduit les bactéries responsables de l’acné, diminue l’inflammation et régule la production de sébum. Aide également à resserrer les pores.\n\nIPL pour les taches pigmentaires :\nTrès efficace pour traiter les taches solaires, les lentigos ou les hyperpigmentations superficielle. La lumière cible la mélanine pour uniformiser le teint.\n\nLe traitement avec IPL est rapide, peu invasif et nécessite peu ou pas de temps de récupération. Plusieurs séances sont généralement recommandées pour des résultats optimaux. Une protection solaire rigoureuse est essentielle pour maintenir les résultats.", img: "service_sharplight.jpg" },
                    { title: "Détatouage et Élimination du microblading", tech: "Laser Q-switched", desc: "Détatouage et Élimination du microblading efficace et sécuritaire.", fullDesc: "Détatouage et Élimination du microblading.\n\nLe traitement de détatouage est une procédure esthétique qui permet d’atténuer ou de retirer progressivement un tatouage grâce à l’utilisation de technologies avancées, notamment le laser.\n\nDans notre clinique, nous utilisons le laser Q-Switched de la marque SharpLight, reconnu pour sa précision et son efficacité. Ce type de laser émet des impulsions très rapides qui ciblent spécifiquement les pigments de l’encre sans endommager les tissus environnants. Les pigments sont fragmentés en microparticules, puis éliminés naturellement par l’organisme via le système lymphatique.\n\nLe traitement se fait en plusieurs séances espacées de quelques semaines. Le nombre de séances varie selon plusieurs facteurs : la profondeur du tatouage, les couleurs utilisées, l’ancienneté, ainsi que le type de peau. Il est important de comprendre que le processus est progressif et que le traitement complet peut s’étendre sur plusieurs mois, voire plusieurs années, afin d’obtenir un résultat optimal et sécuritaire.\n\nPendant la séance, une sensation de picotement ou de chaleur peut être ressentie, semblable à de petits coups d’élastique sur la peau. Des mesures sont mises en place pour assurer le confort du client.\n\nAvant le traitement :\nIl est recommandé d’éviter l’exposition au soleil ou aux UV (incluant les cabines de bronzage) au moins deux semaines avant la séance. La peau ne doit pas être irritée, blessée ou bronzée. Il est également conseillé de ne pas appliquer de produits irritants sur la zone à traiter.\n\nAprès le traitement :\nUne rougeur, un léger gonflement ou la formation de petites croûtes peuvent apparaître, ce qui est tout à fait normal. Il est essentiel de garder la zone propre et hydratée, d’éviter de gratter ou retirer les croûtes, et de protéger la peau du soleil avec un écran solaire. Les bains chauds, piscines, saunas et activités sportives intenses doivent être évités pendant quelques jours afin de favoriser une bonne cicatrisation.\n\nLe respect des soins avant et après chaque séance est primordial pour optimiser les résultats et réduire les risques de complications.\n\nLe détatouage est un processus qui demande patience et régularité, mais réalisé avec une technologie performante et par un professionnel qualifié, il permet d’obtenir des résultats visibles, sécuritaires et durables.", img: "service_tattoo_removal.jpg" },
                    { title: "Coup d'Éclat Instantané", tech: "Laser Q-switched (Peeling Hollywood)", desc: "Réduisez l'excès de sébum, resserrez les pores et unifiez le teint.", fullDesc: "Peeling Hollywood (Carbon Peel)\n\nLe Carbon Peel est un traitement esthétique non invasif, améliore instantanément la texture de la peau, resserre les pores et apporte un effet lumineux, lisse et uniforme. C’est pour cette raison qu’il est très populaire avant des événements importants — d’où son surnom “Hollywood Peel”.\n\nCe soin combine l’application d’un masque de carbone actif avec l’utilisation d’un laser pour nettoyer, exfolier et revitaliser la peau en profondeur.\n\nLe traitement est rapide, généralement entre 20 et 30 minutes, et ne nécessite aucun temps de récupération. Une légère sensation de chaleur ou de picotement peut être ressentie pendant la séance, mais elle reste très bien tolerée.\n\nLe traitement débute par l’application d’une fine couche de carbone liquide sur la peau. Ce carbone pénètre dans les pores et agit comme un aimant pour les impuretés, l’excès de sébum et les cellules mortes. Ensuite, le passage du laser permet de chauffer et vaporiser les particules de carbone, entraînant avec elles les impuretés et stimulant en même temps la production de collagène.\n\nCe soin est particulièrement recommandé pour :\n\n• Les peaux grasses ou à tendance acnéique\n• Les pores dilatés\n• Le teint terne ou irrégulier\n• Les points noirs et imperfections\n• Les premières rides et signes de l’âge\n• Le mélasma (en tant que soin d'entretien et d'amélioration globale)\n\nLe Carbon Peel agit de plusieurs façons :\n\n• Il exfolie la peau en douceur\n• Il élimine les cellules pigmentées en surface\n• Il aide à réguler la production de sébum\n• Il stimule le renouvellement cellulaire et la production de collagène\n\nGrâce à l’action du laser (souvent Q-Switched), les amas de mélanine peuvent être progressivement fragmentés, ce qui contribue à éclaircir les taches pigmentaires et uniformiser le teint. \n\nNote sur le mélasma : Le Carbon Peel n’est pas un traitement curatif définitif. Pour le mélasma, les meilleurs résultats sont généralement obtenus avec une approche combinée et personnalisée. Le mélasma peut récidiver, surtout en cas d’exposition solaire ou de facteurs hormonaux.\n\nAvant le traitement :\nIl est conseillé d’éviter l’exposition au soleil, les produits irritants (comme les acides ou rétinoïdes) et de venir avec une peau propre, sans maquillage.\n\nAprès le traitement :\nLa peau peut être légèrement rosée pendant quelques heures. Il est recommandé d’hydrater la peau, d’éviter le soleil et d’appliquer une protection solaire. Le maquillage peut généralement être repris dès le lendemain.\n\nPour des résultats optimaux, plusieurs séances peuvent être recommandées selon les besoins de la peau.", img: "service_hollywood_peel.jpg" },
                    { title: "Épilation Permanente", tech: "Sharplight & LightSheer", desc: "Technologies Sharplight et LightSheer pour une peau douce durablement.", fullDesc: "L’épilation au laser est une méthode moderne, efficace et durable pour réduire la pilosité. Elle repose sur la destruction progressive du follicule pileux par la chaleur tout en respectant la peau environnante.\n\nDifférentes technologies sont utilisées selon votre type de peau :\n\n• Laser Diode (LightSheer®) : Polyvalent, convient à une grande variété de types de peau et poils.\n• Laser Alexandrite (Sharplight®) : Très efficace sur les peaux claires avec poils foncés.\n• Laser Nd:YAG (Sharplight®) : Spécialement adapté aux peaux plus foncées ou bronzées pour une sécurité totale.\n\nDéroulement du traitement :\nChaque séance est rapide et peut durer de quelques minutes à une heure. Plusieurs séances (moyenne 6 à 8) sont nécessaires pour un résultat optimal.\n\nAvant le traitement :\n• Informer le professionnel de toute médication ou vitamines récentes.\n• S’assurer de ne pas être enceinte.\n• Éviter l'exposition solaire (2 semaines avant).\n• Ne pas épiler à la cire ou à la pince (rasage recommandé).\n• Peau propre sans maquillage ni crème.\n\nAprès le traitement :\n• Hydrater la peau et éviter la chaleur (bain chaud, sport intense).\n• Éviter le soleil et appliquer une protection solaire.\n\nAu fil des séances, les poils deviennent plus fins, plus clairs et repoussent plus lentement, tout en améliorant la qualité de votre peau.", img: "service_hair_removal.jpg" },
                    { title: "Raffermissement & Remodelage", tech: "Radiofréquence (Sharplight & Exilis)", desc: "Traitement de la cellulite et remodelage corporel pour le relâchement cutané.", fullDesc: "Remodelage corporel : radiofréquence pour cellulite, relâchement et graisse localisée\n\nLe remodelage corporel par radiofréquence est une solution non invasive, efficace et sécuritaire pour améliorer l’apparence de la peau, réduire la cellulite, raffermir les tissus et traiter la graisse localisée.\n\nDans notre clinique, nous utilisons des technologies avancées telles que Omnimax S4 de la marque SharpLight ainsi que Exilis de BTL Aesthetics, reconnues pour leur performance et leurs résultats visibles.\n\nComment ça fonctionne ?\nLa radiofréquence diffuse une chaleur contrôlée dans les couches profondes de la peau, ce qui permet de :\n• Stimuler la production de collagène et d’élastine\n• Raffermir et tonifier la peau\n• Améliorer l’aspect de la cellulite\n• Favoriser la réduction des amas graisseux\n\nCette action thermique améliore également la circulation sanguine et le drainage, contribuant à une peau plus lisse et plus uniforme.\n\nIndications :\nCe traitement est idéal pour :\n• La cellulite (aspect peau d’orange)\n• Le relâchement cutané (flaccidité)\n• La graisse localisée (ventre, cuisses, bras, flancs)\n• L’amélioration globale de la texture et de la fermeté de la peau\n\nDéroulement du traitement :\nLa séance est confortable et procure une sensation de chaleur agréable. Elle dure généralement entre 20 et 60 minutes selon la zone traitée. Plusieurs séances sont recommandées pour des résultats optimaux, avec une amélioration progressive de la fermeté et de la silhouette.\n\nAprès le traitement :\n• Aucun temps de récupération (retour immédiat aux activités)\n• Légère rougeur possible, temporaire\n• Hydratation recommandée\n• Maintenir une bonne hygiène de vie pour optimiser les résultats\n\nRésultats :\nLes résultats apparaissent progressivement au fil des séances :\n• Peau plus ferme et tonifiée\n• Diminution visible de la cellulite\n• Silhouette plus harmonieuse\n• Amélioration de la qualité de la peau\n\nLe remodelage par radiofréquence est une excellente alternative non chirurgicale pour sculpter le corps en douceur, tout en offrant des résultats naturels.", img: "service_rf_new.jpg" },
                    { title: "Sculpture par le Froid", tech: "Cryolipolyse (Bfreeze)", desc: "Élimination des amas graisseux localisés par le froid.", fullDesc: "La cryolipolyse est une technologie non invasive qui permet de réduire la graisse localisée grâce au froid, sans chirurgie ni temps de récupération.\n\nDans notre clinique, nous utilisons la technologie B‑Freeze, conçue pour cibler efficacement les amas graisseux résistants à l’alimentation et à l’exercice.\n\nComment ça fonctionne ?\nLe traitement repose sur un principe simple : les cellules graisseuses (adipocytes) sont sensibles au froid. L'exposition à un refroidissement contrôlé entraîne leur cristallisation, puis leur élimination progressive par l’organisme via le système lymphatique.\n\nIndications :\nLa cryolipolyse est idéale pour traiter :\n• Le ventre\n• Les poignées d’amour\n• Les cuisses et le dos\n• Les bras et le double menton\n\nDéroulement du traitement :\nLa séance dure entre 30 et 60 minutes par zone. L'applicateur crée un effet d’aspiration avec une sensation de froid intense au début, qui diminue rapidement. Le traitement est confortable.\n\nAprès le traitement :\n• Rougeurs, sensibilité ou engourdissement temporaires possibles.\n• Reprise immédiate des activités quotidiennes.\n• Hydratation recommandée.\n• Drainage lymphatique conseillé pour optimiser les résultats.\n\nRésultats :\nRéduction visible des amas graisseux et silhouette plus harmonieuse entre 3 et 12 semaines après le traitement.", img: "service_cryolipolysis.jpg" },
                    { category: 'aesthetic', title: "Peau Lissée & Régénérée", tech: "Microneedling", desc: "Stimulation du collagène, réduction des rides, cicatrices et imperfections.", fullDesc: "Le microneedling est un traitement non invasif qui stimule naturellement la régénération de la peau. Il peut être réalisé seul ou combiné à la radiofréquence (RF) pour des résultats plus profonds.\n\nMicroaiguillage (Microneedling) :\nIl consiste à créer des micro-perforations contrôlées pour activer le mécanisme naturel de réparation de la peau et stimuler la production de collagène.\n• Indications : Rides, ridules, cicatrices d’acné, pores dilatés.\n\nMicroaiguillage avec Radiofréquence :\nLe RF Microneedling combine les micro-perforations avec une diffusion de chaleur profonde. Cette double action permet une stimulation intense du collagène et un raffermissement marqué.\n• Indications : Relâchement cutané, rides marquées, cicatrices profondes, vergetures.\n\nDéroulement du traitement :\nUne crème anesthésiante peut être appliquée. La séance dure 30 à 60 minutes. Des rougeurs et une légère sensibilité sont possibles pendant 24 à 72 heures.\n\nAprès le traitement :\n• Hydratation essentielle.\n• Éviter le soleil et appliquer une protection solaire.\n• Éviter le maquillage et produits irritants pendant quelques jours.\n\nRésultats :\nLa peau devient plus lisse, plus ferme et plus lumineuse. Les résultats apparaissent progressivement sur plusieurs semaines.", img: "service_microneedling.jpg" }
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
                    { title: "BTL Cellutone", desc: "Thérapie par ondes acoustiques pour traiter la cellulite et améliorer la texture de la peau.", img: "CELLUtone.jpg" }
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
            description: "Brazilian massage therapy. A clinic focused on real results and comfort.",
            cta: "Book on WhatsApp",
            partners: {
                title: "Our Partners",
                items: []
            },
            bio: {
                title: "Owner & Certified Therapist",
                description: "Passionate about well-being and aesthetics, Taïse Neves combines technical expertise and a human approach to offer high-quality personalized care, adapted to the specific needs of each client.\n\nA graduate in physiotherapy in Brazil from the Catholic University of Salvador (Bahia), she began her career in the field of massage therapy while she was still a student. Very early on, she specialized in postoperative support for plastic surgeries, both aesthetic and reconstructive, notably in the follow-up of patients who underwent breast reconstruction after breast cancer.\n\nWith several years of experience in postoperative care, Taïse also has more than 12 years of experience in high-tech aesthetics. Since 2014, she has held a specialization in dermatofunctional physiotherapy, which allows her to integrate advanced techniques and innovative technologies into her treatments.\n\nShe also completed training in medical aesthetics in 2022 (school based in Montreal), consolidating her expertise and expanding her field of skills.\n\nThanks to her rich and multidisciplinary background, Taïse is committed to supporting each client in achieving their health, well-being, and self-confidence goals, by offering safe, effective, and personalized care.",
                readMore: "Read more...",
                readLess: "Read less",
                stats: [
                    { label: "Years of Experience", value: "18+" },
                    { label: "Happy Clients", value: "5k+" },
                    { label: "Certifications", value: "46+" }
                ],
                quote: "I love taking care of people, but I have a special affection for the feminine soul. I want women to take care of themselves out of self-love and not because they hate their bodies or feel trapped by beauty standards.<br><br>I want them to feel strong and confident, without feeling the need to change to please others. Taking care of oneself out of self-love, and not out of sacrifice.",
                expertiseLabel: "The expertise behind your well-being",
                meetLabel: "Meet Taïse Neves"
            },
            services: {
                title: "Our Services",
                details: "Details",
                specialized: "Specialized care for your well-being and beauty.",
                introMassotherapy: "Massotherapy/manual therapy combines different techniques with specific goals, such as muscle relaxation, improved circulation, pain reduction, functional recovery, and emotional well-being. Several studies show that massage acts on the nervous, muscular, circulatory, and lymphatic systems, promoting positive physiological and psychological effects. Certain massage techniques can be practiced at any age. It all depends on each person's needs.",
                items: [
                    { category: 'massotherapy', title: "Swedish Massage", tech: "Classic Technique", desc: "Fluid and rhythmic movements for relaxation and circulation.", fullDesc: "Swedish massage is one of the most widespread classic techniques in the world. It is characterized by fluid and rhythmic movements.\n\nThe benefits of this massage are:\n• Reduction of cortisol (stress hormone)\n• Increased sensation of relaxation\n• Improved blood circulation\n• Reduction of muscle tension\n• Improved sleep quality\n• Reduction of anxiety and fatigue\n• Improved sports performance", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { category: 'massotherapy', title: "Relaxing Massage – Renata França® Method", tech: "Accelerated Rhythm", desc: "Firm and fast movements for an intense bodily lightness.", fullDesc: "The Renata França method uses firmer, faster, and more rhythmic movements than traditional relaxing massages.\n\nObserved benefits:\n• Intense sensation of bodily lightness\n• Reduction of water retention\n• Muscle relaxation\n• Improved circulation\n• Immediate well-being\n• Reduction of edema", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { category: 'massotherapy', title: "Lymphatic Drainage", tech: "Varied Techniques", desc: "Reduction of edema and water retention (Renata França, Godoy, Leduc, Vodder).", fullDesc: "Lymphatic drainage is a manual technique aimed at stimulating the lymphatic system. Its main benefits are the reduction of edema and water retention, improved circulation, and deep relaxation. It also promotes postoperative recovery and relieves tension.\n\nWe offer different lymphatic drainage techniques, each with a specific goal, such as:\n\nRenata França® - Characterized by: fast movements, firm pressure, an accelerated rhythm, and specific pumping.\nBenefits: Rapid reduction of edema; Sensation of lightness; Improved silhouette; Circulatory stimulation; Aid in postoperative recovery (upon medical indication).\n\nGodoy®: The method developed by José Maria Pereira de Godoy is based on solid scientific foundations and is widely studied in the treatment of lymphedema.\nProven benefits: Reduction of lymphedema; Reduction of fibrosis; Improved lymphatic circulation; Aid in vascular and postoperative cases.\n\nLeduc: This method combines lymphatic drainage maneuvers (absorption, reabsorption, and evacuation).\nBenefits: Reduction of edema; Indirect immune stimulation; Post-traumatic recovery; Bodily relaxation.\n\nVodder: Characterized by gentle movements, light pressure, a slow and continuous rhythm.\nScientific benefits: Reduction of edema; Improved lymphatic circulation; Deep relaxation; Aid in cases of mild inflammation.", img: "service_post_op.jpg", icon: "drainage" },
                    { category: 'massotherapy', title: "Miracle Face Method – Renata França®", tech: "Facial Care", desc: "Facial technique combining lymphatic drainage and contouring.", fullDesc: "Miracle Face is a facial technique that combines lymphatic drainage and contouring.\n\nBenefits:\n• Reduction of facial swelling\n• Improved facial contour\n• Circulation stimulation\n• More rested appearance\n• Relaxation of facial muscles", img: "service_miracle_face.jpg", icon: "aesthetic" },
                    { category: 'massotherapy', title: "Myofascial Massage", tech: "Deep Pressure", desc: "Acts on the fascia to relieve pain and restore mobility.", fullDesc: "Myofascial massage (or myofascial release) is a therapeutic deep pressure technique that acts on the fascia, the tissue surrounding muscles and joints. The goal is to relieve pain, untie tension (trigger points), and restore mobility. This massage is particularly popular with athletes and people suffering from chronic pain.\n\nBenefits:\n• Reduction of myofascial pain\n• Improved flexibility\n• Functional improvement\n• Aid in sports recovery\n• Reduction of trigger points", img: "service_massage_myofascial.jpg", icon: "recovery" },
                    { category: 'massotherapy', title: "Therapeutic Massage", tech: "Pain Treatment", desc: "Treats pain, muscle dysfunction, and stress.", fullDesc: "Therapeutic massage brings together techniques aimed at treating pain and muscle dysfunctions, muscle tension, lower back and neck pain, stress, and promoting physical recovery.\n\nScientifically recognized benefits:\n• Reduction of chronic pain\n• Improved blood circulation\n• Muscle relaxation\n• Reduction of anxiety\n• Functional and postural improvement", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { title: "Pre & Post-Op Care", tech: "Specialized Follow-up & Technologies", desc: "Optimal preparation and recovery with advanced technologies to avoid complications.", fullDesc: "Preoperative care (starting before the surgery) is essential to prevent complications and prepare the body for better healing.\n\nPostoperative care is not limited to lymphatic drainage, as each patient recovers at their own pace and may present different complications. Treatment can therefore include various techniques and technologies, such as laser or LED to accelerate healing, as well as ultrasound, radiofrequency, endermology, microcurrents, kinesiotape, among others, depending on the needs of each case.\n\nSurgeries such as - abdominoplasty, liposuction, breast reduction, silicone implants, mastectomy, face lift, facial surgery, orthognathic surgery... and others.\n\nThese treatments improve blood circulation, reduce water retention, and prepare the body for better healing. In the case of liposuction, they help fragment fat deposits and facilitate healing, thus reducing the risk of fibrosis.\n\nImportance of postoperative care:\n\nThey improve pain, modulate inflammation, reduce and control edema, attenuate bruising, and decrease the risk of fibrosis and necrosis.", img: "service_post_op.jpg" },                    { category: 'aesthetic', title: "Endermologie LPG®", tech: "Non-invasive mechanical stimulation", desc: "Cellular stimulation technology for slimming, cellulite, firmness, and anti-aging.", fullDesc: "LPG® Endermologie is a non-invasive mechanical stimulation technology that uses motorized rollers and controlled suction to mobilize skin tissues. This technique aims to naturally reactivate cellular activity to improve the skin's appearance, promote fluid drainage, and contribute to overall well-being.\n\nEndermologie is used in the aesthetics and well-being fields to:\n• Improve the appearance of cellulite.\n• Promote skin firmness and elasticity.\n• Stimulate blood and lymphatic circulation.\n• Reduce the sensation of heavy legs.\n• Promote muscle relaxation.\n\nThe CELLU M6 ALLIANCE® is a cellular stimulation technology based on mechanobiology. Its action aims to naturally reactivate the activity of fibroblasts, adipocytes, and microcirculation to improve skin quality, silhouette, and well-being.\n\nBody Benefits\n\nSlimming and silhouette\n• Destocking of localized and resistant fat.\n• Activation of natural lipolysis.\n• Silhouette refinement.\n• Reduction of waist circumference and localized volumes.\n• Reshaping of body contours.\n\nCellulite\n• Reduction of the orange peel effect.\n• Smoothing of adipose, aqueous, and fibrous cellulite.\n• Softening of the fibrous septa in the hypodermis.\n• Improvement of skin texture and quality.\n\nFirmness and skin quality\n• Tissue firming.\n• Improvement of skin tone.\n• Increase in natural collagen production.\n• Increase in elastin production.\n• Increase in hyaluronic acid production.\n• Improvement of skin elasticity.\n\nCirculation and drainage\n• Stimulation of blood circulation.\n• Stimulation of lymphatic circulation.\n• Reactivation of circulatory exchanges.\n• Drainage of fluids and toxins.\n• Decrease in water retention.\n• Relief from the sensation of heavy legs.\n• Tissue oxygenation.\n\nWell-being\n• Sensation of lightness.\n• Tissue relaxation.\n• Reduction of tension.\n• Improvement of bodily comfort.\n\nFace Benefits (Endermolift®)\n\nAnti-aging\n• Reduction of fine lines and wrinkles.\n• Natural plumping effect.\n• Skin redensification.\n• Natural lifting effect.\n• Preservation of facial expressions.\n• Improvement of skin firmness.\n\nSkin quality\n• Natural production of collagen, elastin, and hyaluronic acid.\n• Improved hydration.\n• More supple and resistant skin.\n• More even skin texture.\n• Softer and more luminous skin.\n\nRadiance\n• Reactivation of microcirculation.\n• Tissue oxygenation.\n• More radiant and even complexion.\n• Reduction of tired facial appearance.\n\nFacial contours\n• Firming of the facial oval.\n• Reduction of the appearance of a double chin.\n• Decongestion of the eye contour.\n• Reduction of puffiness and dark circles.", img: "service_endermologie.png" },
                    { category: 'aesthetic', title: "Reconstructive Dermopigmentation - Realistic 3D", tech: "3D Medical Tattooing", desc: "Medical tattooing to recreate the areola and nipple or reduce scars.", fullDesc: "Reconstructive dermopigmentation of the mammary areola is a medical tattooing technique that allows for the realistic recreation of the areola and nipple or the reduction of the appearance of scars after a mastectomy, breast reconstruction, breast augmentation, or reduction.\n\nPerformed only after complete tissue healing, this intervention constitutes the final stage of the reconstruction journey. Beyond its aesthetic result, it helps restore a natural and harmonious appearance to the breast.\n\nFor many patients, this final step represents much more than a simple technical procedure. It promotes the reappropriation of their bodies, helps turn the page after a physical and emotional ordeal, and contributes to regaining self-confidence. Regaining a body image that is truer to oneself often allows one to feel feminine again, whole, and comfortable with one's reflection.\n\nThe principle of the 3D technique\n\n3D dermopigmentation is based on the superposition of several layers of pigments with carefully selected shades. Thanks to precise work on colorimetry, light, and shadow, it is possible to create a particularly realistic illusion of relief, reproducing the natural appearance of the areola and nipple.\n\nThe pigments used are sterile, hypoallergenic, and specially formulated for fragile skin. Each treatment is completely personalized in order to adapt to the skin tone, morphology, and expectations of each patient, in compliance with the strictest hygiene and safety standards.\n\nThe desired result is discreet, natural, and harmonious, in order to help each woman regain confidence in her image and live this final stage of her reconstruction with serenity.", img: "service_dermopigmentation.jpg" },
                    { category: 'aesthetic', title: "Treatment of Symptoms and Control of Lipedema", tech: "Multidisciplinary Approach", desc: "Our treatment aims to relieve the pain and discomfort caused by lipedema.", fullDesc: "Our treatment aims to relieve the pain and discomfort caused by lipedema.\n\nLipedema is a chronic and inflammatory disease characterized by an abnormal accumulation of adipose tissue in certain regions of the body, particularly the hips, thighs, knees, legs, and arms. However, recent studies, including one published on PubMed, also confirm the presence of lipedema in the abdomen. Although this condition is primarily known to affect the limbs, abdominal involvement is very real, and its frequency increases with the severity of the disease, according to ascending or descending progression patterns.\n\nAbdominal fat associated with lipedema has the same characteristics as that of the extremities: it is inflammatory, symmetrical, and generally resistant to diets as well as physical exercise.\n\nSymptoms generally appear at puberty, after the onset of hormonal exposure. However, lipedema can manifest or worsen at any time in life, notably during or after pregnancy, or at menopause.\n\nObesity significantly aggravates lipedema. It is however important to emphasize that non-obese people can also be affected. This situation is often observed in thin women with a slim face and waist, but disproportionately large hips, thighs, and legs.\n\nLipedema affects approximately 10 to 11% of the global female population. In Canada, it is estimated that about 2.2 million women suffer from this disease. Despite its high prevalence, lipedema remains largely underdiagnosed and is frequently confused with obesity, cellulite, or primary lymphedema.\n\nThe main symptom of lipedema is the disproportionate accumulation of fat in the legs. This fat is resistant to diets, even the most restrictive ones, as well as to physical activity and weight training.\n\nThe following manifestations are also frequent:\n• Hypersensitivity to touch (pain upon simple contact)\n• Presence of fatty nodules under the skin\n• Problems in the knees and hips\n• Accumulation of fat in the arms\n• Skin laxity\n• Chronic pain\n• Sensation of heaviness and swelling in the legs\n\nLipedema also weakens blood vessels, which promotes the extravasation of blood and the appearance of ecchymoses (bruises) following minor shocks, or even in the absence of any apparent trauma. This is why it is so important to be followed by a phlebologist. Thanks to their expertise in venous and lymphatic diseases, they are able to evaluate the evolution of lipedema, make a precise diagnosis, guide the management, and coordinate the treatment with other healthcare professionals involved.\n\nHow to treat these symptoms?\nLipedema is a chronic disease for which there is currently no cure. It is however possible to relieve symptoms and slow the progression of the disease. The earlier the diagnosis is made and management is initiated quickly, the greater the chances of limiting its evolution.\n\nIt is essential that the patient understands that the control and treatment of lipedema require a multidisciplinary approach. A qualified team is indispensable to ensure comprehensive care. This team may include notably doctors, a nutritionist, a kinesiologist or physical educator, a physiotherapist, a massage therapist, and a psychologist.\n\nThe treatment of lipedema can be clinical (conservative), surgical, or combine the two approaches depending on the patient's needs. It is important to emphasize that these treatments are complementary and that one does not exclude the other.\n\nThe clinical treatment primarily aims to identify the causes of the inflammatory process, whether hormonal or nutritional in origin, in order to implement strategies to reduce inflammation.\n\nThis management may include the prescription of nutritional supplements, medications, as well as complex decongestive physiotherapy and manual complex decongestive therapy.\n\nOther recognized approaches to modulate inflammation can also be used, notably:\n• Photobiomodulation (low-intensity laser and LED light)\n• Endermologie\n• Lymphatic drainage\n• Manual therapy\n• Adapted physical exercises\n• Ozonotherapy\n\nIn addition to these treatments, wearing medical compression stockings is essential and constitutes an important component of the management of lipedema.\n\nThe reference surgical treatment for lipedema is liposuction. Unlike aesthetic liposuction, this is a functional intervention that removes pathological adipose tissue, relieves pain, decreases the sensation of heaviness, and improves the patient's mobility.\n\nConservative treatment must be continued after the intervention in order to limit the risk of reappearance of adipose tissue accumulation and to ensure the maintenance of long-term results. All this must be aligned with the surgeon responsible for your treatment.", img: "service_lipoedeme.jpg" },
                    { category: 'aesthetic', title: "Post-mastectomy lymphedema", tech: "Specialized treatment", desc: "Management of lymphedema through drainage, compression, and specialized care.", fullDesc: "Post-mastectomy lymphedema is a chronic accumulation of lymph in the arm and thoracic region. It occurs following the removal of axillary lymph nodes or radiation therapy, leading to an interruption of the natural lymphatic drainage system. In breast cancer patients, its incidence varies considerably and can appear shortly after surgery or several years later.\n\nMain causes and risk factors\n• Surgical removal of lymph nodes in the armpit (axillary lymph node dissection).\n• Radiation therapy, which can cause fibrosis and damage to lymphatic vessels.\n• Infections or trauma to the affected limb.\n• Obesity and lack of mobility.\n\nFrequent symptoms\n• Persistent swelling of the arm, hand, or breast.\n• Sensation of heaviness and skin tightness.\n• Stiffness or limitation of joint movements.\n\nTreatment options\n• Manual or mechanical lymphatic drainage (LPG endermologie): specific massage technique that promotes the redirection of accumulated lymph towards areas where lymphatic drainage is functional.\n• Compression: use of compressive bandages and elastic sleeves to reduce and control the edema.\n• Myolymphokinetic exercises: therapeutic movements promoting the pumping and circulation of lymph.\n• Follow-up by a specialized physiotherapist: an essential element in the management of lymphedema.\n• Surgical treatment: when conservative treatment is not enough, advances in oncological surgery now make it possible to offer various adapted surgical approaches.", img: "service_lymphoedeme.jpg" },

                    { title: "Kinesiotape", tech: "Elastic Taping", desc: "Kinesiotape to reduce edema and support muscles without immobilization.", fullDesc: "Kinesiotape (functional elastic bandage) – is an elastic adhesive tape, with elasticity similar to that of the skin, applied to the body for therapeutic purposes.\n\nIt can be used for prevention and treatment of joint and muscle injuries, and can also be applied postoperatively to reduce edema and pain, decrease hematomas, and improve the overall condition of the skin.\n\nImportance of Kinesiotape\n\nReduction of edema (swelling)\n\nOne of the main benefits is the slight lifting of the skin by the tape.\n\nThis improves lymphatic circulation, facilitating the drainage of accumulated fluids.\n\nHealing Aid – postoperative Kinesiotape is widely used in post-op care (e.g., liposuction, abdominoplasty).\nPostoperative Kinesiotape: Improves local circulation, Reduces pressure on injured tissues, Contributes to a more harmonious healing\nCan help prevent: fibrosis, scar adhesions\n\nPain Management\n\nStimulates cutaneous sensory receptors, Reduces pain perception (neuromodulatory effect)\nFor better comfort during recovery.\n\nMuscular and Functional Support\n\nWithout immobilizing, it offers light support to the muscles\nImproves proprioception\nAlso used in sports and orthopedic rehabilitation\n\nPrevention of Postoperative Complications\n\nReduces the risk of fibrosis, improves blood circulation, and helps reduce inflammation.\n\nAesthetic Benefits\n\nImproves skin appearance, contributes to scar uniformity and better final aesthetic results.", img: "service_kinesio_new.jpg", icon: "recovery" },
                    { title: "Skin Cleansing", tech: "Deep Brazilian Method", desc: "Deep cleansing with complete manual extraction of blackheads.", fullDesc: "Deep facial cleansing (Brazilian method) is an aesthetic protocol renowned for its complete and meticulous approach, focused on the manual extraction of blackheads, unlike more superficial methods practiced in other countries.\n\nFacial cleansing is necessary to remove dead cells and blackheads, renew the skin, and improve product absorption. Thus, before undertaking high-tech treatments such as lasers, intense pulsed light (IPL), radiofrequency, micro-focused ultrasound, or even cosmetic injections, facial cleansing is essential for a more lasting and satisfying result, and also helps restore the skin's natural radiance.\n\nWhat are the characteristics of the Brazilian method?\n\nComplete manual extraction of blackheads\n\nAdherence to a multi-step routine\n\nAssociation with technologies (steam, high frequency, photobiomodulation, etc.)\n\nFinal session focused on soothing and skin regeneration.\n\nDeep facial cleansing using the Brazilian method is considered one of the most complete aesthetic protocols because:\n\n• It promotes true pore cleaning\n• It combines manual and technological techniques\n• It improves skin health and appearance\n\nSteps of deep facial cleansing: Cleansing, exfoliation, application of an emollient (opening pores), extraction (removal of open and closed blackheads), antisepsis (application of antiseptic lotions), Prevention of infections, high-frequency application (tightens pores and has a bactericidal action), soothing mask, and application of sun protection.", img: "service_skin_cleansing.jpg" },
                    { title: "Rejuvenation & Clarity", tech: "IPL (Sharplight)", desc: "Rosacea, telangiectasias, acne, folliculitis, imperfections, and rejuvenation.", fullDesc: "IPL (Intense Pulsed Light) is a non-invasive aesthetic technology used to improve skin quality and treat various skin issues.\n\nUnlike laser, IPL diffuses a broad-spectrum light that specifically targets:\n• Melanin (pigment spots)\n• Hemoglobin (redness, visible vessels)\n• Sebaceous glands (acne)\n\nIPL is a versatile solution that allows you to:\n\n• Improve skin radiance and texture\n• Even out skin tone and reduce imperfections\n• Treat signs of aging (photorejuvenation)\n\nIPL for Rosacea and Telangiectasias:\nA treatment of choice for rosacea and diffuse redness. It targets small visible blood vessels to gradually fade them. Ideal for sensitive areas prone to redness and couperose.\n\nIPL for Acne and Folliculitis:\nEffective solution that reduces acne-causing bacteria, decreases inflammation, and regulates sebum production. Also helps tighten pores.\n\nIPL for Pigment Spots:\nHighly effective for treating sun spots, lentigos, or superficial hyperpigmentation. The light targets melanin to even out the skin tone.\n\nIPL treatment is quick, minimally invasive, and requires little to no downtime. Several sessions are generally recommended for optimal results. Rigorous sun protection is essential to maintain results.", img: "service_sharplight.jpg" },
                    { title: "Tattoo & Microblading Removal", tech: "Q-switched Laser", desc: "Effective and safe removal of tattoos and microblading.", fullDesc: "Tattoo and Microblading Removal.\n\nTattoo removal is an aesthetic procedure that progressively fades or removes a tattoo using advanced technologies, specifically laser.\n\nIn our clinic, we use the SharpLight Q-Switched laser, recognized for its precision and effectiveness. This type of laser emits very rapid pulses that specifically target ink pigments without damaging surrounding tissues. The pigments are fragmented into microparticles and then naturally eliminated by the body via the lymphatic system.\n\nThe treatment is performed over several sessions spaced a few weeks apart. The number of sessions varies according to several factors: the depth of the tattoo, the colors used, its age, and skin type. It is important to understand that the process is gradual and that complete treatment can span several months, or even years, to achieve an optimal and safe result.\n\nDuring the session, a tingling or heat sensation may be felt, similar to small rubber band snaps on the skin. Measures are in place to ensure client comfort.\n\nBefore treatment:\nIt is recommended to avoid sun exposure or UV (including tanning beds) at least two weeks before the session. The skin must not be irritated, injured, or tanned. It is also advised not to apply irritating products to the area to be treated.\n\nAfter treatment:\nRedness, slight swelling, or the formation of small scabs may appear, which is completely normal. It is essential to keep the area clean and hydrated, avoid scratching or removing scabs, and protect the skin from the sun with sunscreen. Hot baths, swimming pools, saunas, and intense sporting activities should be avoided for a few days to promote proper healing.\n\nCompliance with pre- and post-treatment care for each session is essential to optimize results and reduce the risk of complications.\n\nTattoo removal is a process that requires patience and regularity, but when performed with high-performance technology and by a qualified professional, it achieves visible, safe, and lasting results.", img: "service_tattoo_removal.jpg" },
                    { title: "Instant Glow", tech: "Q-switched Laser (Hollywood Peel)", desc: "Reduce excess sebum, tighten pores, and unify skin tone.", fullDesc: "Hollywood Peel (Carbon Peel)\n\nThe Carbon Peel is a non-invasive aesthetic treatment that instantly improves skin texture, tightens pores, and provides a luminous, smooth, and uniform effect. This is why it is very popular before important events — hence its nickname \"Hollywood Peel.\"\n\nThis treatment combines the application of an active carbon mask with the use of a laser to deep clean, exfoliate, and revitalize the skin.\n\nThe treatment is quick, generally between 20 and 30 minutes, and requires no downtime. A slight sensation of heat or tingling may be felt during the session, but it is very well tolerated.\n\nThe treatment begins with the application of a thin layer of liquid carbon to the skin. This carbon penetrates the pores and acts as a magnet for impurities, excess sebum, and dead cells. Then, the laser pass heats and vaporizes the carbon particles, taking impurities with them and simultaneously stimulating collagen production.\n\nThis treatment is particularly recommended for:\n\n• Oily or acne-prone skin\n• Enlarged pores\n• Dull or irregular complexion\n• Blackheads and imperfections\n• Fine lines and signs of aging\n• Melasma (as a maintenance and global improvement treatment)\n\nThe Carbon Peel works in several ways:\n\n• It gently exfoliates the skin\n• It eliminates pigmented cells on the surface\n• It helps regulate sebum production\n• It stimulates cellular renewal and collagen production\n\nThanks to the action of the laser (often Q-Switched), melanin clusters can be progressively fragmented, contributing to lightening pigment spots and evening out the skin tone.\n\nNote on Melasma: Carbon Peel is not a definitive curative treatment. For melasma, the best results are generally obtained with a combined and personalized approach. Melasma can recur, especially with sun exposure or hormonal factors.\n\nBefore treatment:\nIt is advised to avoid sun exposure, irritating products (such as acids or retinoids), and to come with clean skin, without makeup.\n\nAfter treatment:\nThe skin may be slightly pink for a few hours. It is recommended to hydrate the skin, avoid the sun, and apply sunscreen. Makeup can generally be resumed the next day.\n\nFor optimal results, several sessions may be recommended according to the skin's needs.", img: "service_hollywood_peel.jpg" },
                    { title: "Permanent Hair Removal", tech: "Sharplight & LightSheer", desc: "Sharplight and LightSheer technologies for lastingly smooth skin.", fullDesc: "Laser hair removal is a modern, effective, and lasting method for reducing hair growth. It works by progressively destroying the hair follicle with heat while respecting the surrounding skin.\n\nDifferent technologies are used depending on your skin type:\n\n• Diode Laser (LightSheer®): Versatile, suitable for a wide variety of skin and hair types.\n• Alexandrite Laser (Sharplight®): Highly effective on light skin with dark hair.\n• Nd:YAG Laser (Sharplight®): Specially adapted for darker or tanned skin for total safety.\n\nTreatment Process:\nEach session is quick and can last from a few minutes to an hour. Several sessions (average 6 to 8) are necessary for optimal results.\n\nBefore Treatment:\n• Inform the professional of any recent medication or vitamins.\n• Ensure you are not pregnant.\n• Avoid sun exposure (2 weeks before).\n• Do not wax or pluck (shaving recommended).\n• Clean skin without makeup or cream.\n\nAfter Treatment:\n• Hydrate the skin and avoid heat (hot baths, intense sport).\n• Avoid the sun and apply sunscreen.\n\nOver the sessions, hair becomes finer, lighter, and grows back more slowly, while improving the overall quality of your skin.", img: "service_hair_removal.jpg" },
                    { title: "Firming & Body Contouring", tech: "Radiofrequency (Sharplight & Exilis)", desc: "Cellulite treatment and body contouring for skin tightening.", fullDesc: "Body Contouring: Radiofrequency for cellulite, sagging, and localized fat\n\nRadiofrequency body contouring is a non-invasive, effective, and safe solution to improve skin appearance, reduce cellulite, firm tissues, and treat localized fat.\n\nIn our clinic, we use advanced technologies such as Omnimax S4 by SharpLight and Exilis by BTL Aesthetics, recognized for their performance and visible results.\n\nHow does it work?\nRadiofrequency delivers controlled heat into the deep layers of the skin, allowing for:\n• Stimulating collagen and elastin production\n• Firming and toning the skin\n• Improving the appearance of cellulite\n• Promoting the reduction of fat deposits\n\nThis thermal action also improves blood circulation and drainage, contributing to smoother and more uniform skin.\n\nIndications:\nThis treatment is ideal for:\n• Cellulite (orange peel appearance)\n• Skin sagging (laxity)\n• Localized fat (abdomen, thighs, arms, flanks)\n• Overall improvement of skin texture and firmness\n\nTreatment Process:\nThe session is comfortable and provides a pleasant warm sensation. It generally lasts between 20 and 60 minutes depending on the area treated. Several sessions are recommended for optimal results, with progressive improvement in firmness and silhouette.\n\nAfter Treatment:\n• No downtime (immediate return to activities)\n• Slight temporary redness possible\n• Hydration recommended\n• Maintain a healthy lifestyle to optimize results\n\nResults:\nResults appear gradually over the sessions:\n• Firmer and toned skin\n• Visible reduction in cellulite\n• More harmonious silhouette\n• Improved skin quality\n\nRadiofrequency contouring is an excellent non-surgical alternative to gently sculpt the body while offering natural results.", img: "service_rf_new.jpg" },
                    { title: "Cold Body Sculpting", tech: "Cryolipolysis (Bfreeze)", desc: "Elimination of localized fat deposits by cold.", fullDesc: "Cryolipolysis is a non-invasive technology that reduces localized fat using cold, without surgery or downtime.\n\nIn our clinic, we use B-Freeze technology, designed to effectively target fat deposits resistant to diet and exercise.\n\nHow does it work?\nThe treatment is based on a simple principle: fat cells (adipocytes) are sensitive to cold. Exposure to controlled cooling causes them to crystallize, and they are then gradually eliminated by the body via the lymphatic system.\n\nIndications:\nCryolipolysis is ideal for treating:\n• Abdomen\n• Love handles\n• Thighs and back\n• Arms and double chin\n\nTreatment Process:\nThe session lasts between 30 and 60 minutes per area. The applicator creates a suction effect with an intense cold sensation at first, which quickly subsides. The treatment is comfortable.\n\nAfter Treatment:\n• Possible temporary redness, sensitivity, or numbness.\n• Immediate return to daily activities.\n• Hydration recommended.\n• Lymphatic drainage advised to optimize results.\n\nResults:\nVisible reduction of fat deposits and a more harmonious silhouette between 3 and 12 weeks after treatment.", img: "service_cryolipolysis.jpg" },
                    { category: 'aesthetic', title: "Skin Regeneration", tech: "Microneedling", desc: "Collagen stimulation, reduction of wrinkles, scars, and imperfections.", fullDesc: "Microneedling is a non-invasive treatment that naturally stimulates skin regeneration. It can be performed alone or combined with radiofrequency (RF) for deeper results.\n\nMicroneedling (Standard):\nIt involves creating controlled micro-perforations to activate the skin's natural repair mechanism and stimulate collagen production.\n• Indications: Fine lines, wrinkles, acne scars, enlarged pores.\n\nMicroneedling with Radiofrequency:\nRF Microneedling combines micro-perforations with deep heat delivery. This dual action provides intense collagen stimulation and significant firming.\n• Indications: Skin sagging, deep wrinkles, deep scars, stretch marks.\n\nTreatment Process:\nA numbing cream can be applied. The session lasts 30 to 60 minutes. Redness and slight sensitivity are possible for 24 to 72 hours.\n\nAfter Treatment:\n• Essential hydration.\n• Avoid sun and apply sunscreen.\n• Avoid makeup and irritating products for a few days.\n\nResults:\nSkin becomes smoother, firmer, and more luminous. Results appear gradually over several weeks.", img: "service_microneedling.jpg" }
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
                    { title: "BTL Cellutone", desc: "Acoustic wave therapy to treat cellulite and improve skin texture.", img: "CELLUtone.jpg" }
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
            description: "Massoterapia brasileira. Uma clínica focada em resultados reais e conforto.",
            cta: "Reservar no WhatsApp",
            partners: {
                title: "Nossos Parceiros",
                items: []
            },
            bio: {
                title: "Proprietária e Terapeuta Certificada",
                readMore: "Veja mais...",
                readLess: "Veja menos",
                description: "Apaixonada pelo bem-estar e pela estética, Taïse Neves combina expertise técnica e abordagem humana para oferecer cuidados personalizados de alta qualidade, adaptados às necessidades específicas de cada cliente.\n\nGraduada em fisioterapia no Brasil pela Universidade Católica de Salvador (Bahia), iniciou sua carreira na área de massoterapia ainda quando estudante. Muito cedo, especializou-se no acompanhamento pós-operatório de cirurgias plásticas, tanto estéticas quanto reconstrutivas, nomeadamente no acompanhamento de pacientes submetidas a reconstrução mamária após câncer de mama.\n\nCom vários anos de experiência em cuidados pós-operatórios, Taïse acumula também mais de 12 anos de experiência em estética de alta tecnologia. Desde 2014, possui especialização em fisioterapia dermatofuncional, o que lhe permite integrar técnicas avançadas e tecnologias inovadoras nos seus tratamentos.\n\nConcluiu também uma formação em estética médica em 2022 (Escola Instalada em Montreal), consolidando a sua expertise e alargando o seu campo de competências.\n\nGraças ao seu percurso rico e multidisciplinar, Taïse empenha-se em acompanhar cada cliente na consecução dos seus objetivos de saúde, bem-estar e autoconfiança, propondo cuidados seguros, eficazes e personalizados.",
                stats: [
                    { label: "Anos de Experiência", value: "18+" },
                    { label: "Clientes Felizes", value: "5k+" },
                    { label: "Certificações", value: "46+" }
                ],
                quote: "Eu adoro cuidar das pessoas, mas tenho um carinho muito especial pela alma feminina. Desejo que as mulheres cuidem de si mesmas por amor-próprio e não porque odeiam seus corpos ou se sentem prisioneiras dos padrões de beleza.<br><br>Quero que se sintam fortes e confiantes, sem sentir a necessidade de mudar para agradar aos outros. Cuidar de si mesma por amor a si mesma, e não por sacrifício.",
                expertiseLabel: "A expertise por trás do seu bem-estar",
                meetLabel: "Conheça Taïse Neves"
            },
            services: {
                title: "Nossos Serviços",
                details: "Detalhes",
                specialized: "Cuidado especializado para seu bem-estar e beleza.",
                introMassotherapy: "A massoterapia/terapia manual combina diferentes técnicas com objetivos específicos, tais como o relaxamento muscular, a melhoria da circulação, a redução da dor, a recuperação funcional e o bem-estar emocional. Vários estudos demonstram que a massagem atua nos sistemas nervoso, muscular, circulatório e linfático, promovendo efeitos fisiológicos e psicológicos positivos. Certas técnicas de massagem podem ser praticadas em qualquer idade. Tudo depende das necessidades de cada pessoa.",
                items: [
                    { category: 'massotherapy', title: "Massagem Sueca", tech: "Técnica Clássica", desc: "Movimentos fluidos e ritmados para relaxamento e circulação.", fullDesc: "A massagem sueca é uma das técnicas clássicas mais difundidas no mundo. Caracteriza-se por movimentos fluidos e ritmados.\n\nOs benefícios desta massagem são:\n• Redução do cortisol (hormônio do estresse)\n• Sensação de relaxamento aumentada\n• Melhoria da circulação sanguínea\n• Redução da tensão muscular\n• Melhoria da qualidade do sono\n• Redução da ansiedade e da fadiga\n• Melhoria do desempenho esportivo", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { category: 'massotherapy', title: "Massagem Relaxante – Método Renata França®", tech: "Ritmo Acelerado", desc: "Movimentos firmes e rápidos para uma leveza corporal intensa.", fullDesc: "O método Renata França utiliza movimentos mais firmes, mais rápidos e mais ritmados do que as massagens relaxantes tradicionais.\n\nBenefícios observados:\n• Sensação intensa de leveza corporal\n• Redução da retenção de líquidos\n• Relaxamento muscular\n• Melhoria da circulação\n• Bem-estar imediato\n• Redução de edemas", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { category: 'massotherapy', title: "Drenagem Linfática", tech: "Técnicas Variadas", desc: "Redução de edemas e da retenção de líquidos (Renata França, Godoy, Leduc, Vodder).", fullDesc: "A drenagem linfática é uma técnica manual que visa estimular o sistema linfático. Os seus principais benefícios são a redução de edemas e da retenção de líquidos, a melhoria da circulação e um relaxamento profundo. Também promove a recuperação pós-operatória e alivia tensões.\n\nOferecemos diferentes técnicas de drenagem linfática, cada uma com um objetivo específico, tais como:\n\nRenata França® - Caracterizada por: movimentos rápidos, pressão firme, um ritmo acelerado e um bombeamento específico.\nBenefícios: Redução rápida de edemas; Sensação de leveza; Melhoria da silhueta; Estimulação circulatória; Auxílio na recuperação pós-operatória (sob indicação médica).\n\nGodoy®: O método desenvolvido por José Maria Pereira de Godoy baseia-se em sólidos fundamentos científicos e é amplamente estudado no tratamento do linfedema.\nBenefícios comprovados: Redução do linfedema; Redução da fibrose; Melhoria da circulação linfática; Auxílio em casos vasculares e pós-operatórios.\n\nLeduc: Este método combina manobras de drenagem linfática (absorção, reabsorção e evacuação).\nBenefícios: Redução de edemas; Estimulação imunitária indireta; Recuperação pós-traumática; Relaxamento corporal.\n\nVodder: Caracterizado por movimentos suaves, pressão leve, um ritmo lento e contínuo.\nBenefícios científicos: Redução de edemas; Melhoria da circulação linfática; Relaxamento profundo; Auxílio em casos de inflamação ligeira.", img: "service_post_op.jpg", icon: "drainage" },
                    { category: 'massotherapy', title: "Método Miracle Face – Renata França®", tech: "Cuidado Facial", desc: "Técnica facial que combina drenagem linfática e modeladora.", fullDesc: "Miracle Face é uma técnica facial que combina drenagem linfática e modeladora.\n\nBenefícios:\n• Redução do inchaço facial\n• Melhoria do contorno facial\n• Estimulação da circulação\n• Aparência mais descansada\n• Relaxamento dos músculos faciais", img: "service_miracle_face.jpg", icon: "aesthetic" },
                    { category: 'massotherapy', title: "Massagem Miofascial", tech: "Pressão Profunda", desc: "Atua na fáscia para aliviar a dor e restaurar a mobilidade.", fullDesc: "A massagem miofascial (ou liberação miofascial) é uma técnica terapêutica de pressão profunda que atua na fáscia, o tecido que envolve os músculos e as articulações. O objetivo é aliviar a dor, desfazer tensões (pontos-gatilho) e restaurar a mobilidade. Esta massagem é particularmente apreciada por atletas e pessoas que sofrem de dores crônicas.\n\nBenefícios:\n• Redução das dores miofasciais\n• Melhoria da flexibilidade\n• Melhoria funcional\n• Auxílio na recuperação esportiva\n• Redução dos pontos-gatilho", img: "service_massage_myofascial.jpg", icon: "recovery" },
                    { category: 'massotherapy', title: "Massagem Terapêutica", tech: "Tratamento da Dor", desc: "Trata a dor, as disfunções musculares e o estresse.", fullDesc: "A massagem terapêutica agrupa técnicas destinadas a tratar a dor e as disfunções musculares, as tensões musculares, as dores lombares e cervicais, o estresse, e a promover a recuperação física.\n\nBenefícios cientificamente reconhecidos:\n• Redução de dores crônicas\n• Melhoria da circulação sanguínea\n• Relaxamento muscular\n• Redução da ansiedade\n• Melhoria funcional e postural", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { title: "Cuidados Pré e Pós-Operatórios", tech: "Acompanhamento Especializado", desc: "Preparação e recuperação ideal com tecnologias avançadas para evitar complicações.", fullDesc: "Os cuidados pré-operatórios (iniciando antes da intervenção) são essenciais para prevenir complicações e preparar o corpo para uma melhor cicatrização.\n\nOs cuidados pós-operatórios não se limitam à drenagem linfática, pois cada paciente se recupera em seu próprio ritmo e pode apresentar diferentes complicações. O tratamento pode, portanto, incluir diversas técnicas e tecnologias, como laser ou LED para acelerar a cicatrização, além de ultrassom, radiofrequência, endermologie, microcorrentes, kinesiotape, entre outros, dependendo das necessidades de cada caso.\n\nCirurgias como - abdominoplastia, lipoaspiração, redução de mama, implante de silicone, mastectomia, lifting facial, cirurgia facial, cirurgia ortognática... e outras.\n\nEsses cuidados melhoram a circulação sanguínea, reduzem a retenção de líquidos e preparam o corpo para uma melhor cicatrização. No caso da lipoaspiração, ajudam a fragmentar os depósitos de gordura e facilitam a cicatrização, reduzindo assim o risco de fibrose.\n\nImportância dos cuidados pós-operatórios:\n\nMelhoram a dor, modulam a inflamação, reduzem e controlam o edema, atenuam os hematomas, diminuem o risco de fibrose e necrose.", img: "service_post_op.jpg" },                    { category: 'aesthetic', title: "Endermologia LPG®", tech: "Estimulação mecânica não invasiva", desc: "Tecnologia de estimulação celular para emagrecimento, celulite, firmeza e anti-envelhecimento.", fullDesc: "A Endermologia LPG® é uma tecnologia de estimulação mecânica não invasiva que utiliza rolos motorizados e sucção controlada para mobilizar os tecidos da pele. Esta técnica visa reativar naturalmente a atividade celular a fim de melhorar a aparência da pele, promover a drenagem de fluidos e contribuir para o bem-estar geral.\n\nA Endermologia é utilizada nas áreas de estética e bem-estar para:\n• Melhorar o aspeto da celulite.\n• Promover a firmeza e elasticidade da pele.\n• Estimular a circulação sanguínea e linfática.\n• Reduzir a sensação de pernas pesadas.\n• Promover o relaxamento muscular.\n\nO CELLU M6 ALLIANCE® é uma tecnologia de estimulação celular baseada na mecanobiologia. A sua ação visa reativar naturalmente a atividade dos fibroblastos, adipócitos e microcirculação para melhorar a qualidade da pele, a silhueta e o bem-estar.\n\nBenefícios para o corpo\n\nEmagrecimento e silhueta\n• Eliminação de gorduras localizadas e resistentes.\n• Ativação da lipólise natural.\n• Afinamento da silhueta.\n• Redução do perímetro da cintura e volumes localizados.\n• Remodelação dos contornos do corpo.\n\nCelulite\n• Redução do aspeto casca de laranja.\n• Alisamento da celulite adiposa, aquosa e fibrosa.\n• Flexibilização dos septos fibrosos da hipoderme.\n• Melhoria da textura e qualidade da pele.\n\nFirmeza e qualidade da pele\n• Reafirmação dos tecidos.\n• Melhoria da tonicidade cutânea.\n• Aumento da produção natural de colagénio.\n• Aumento da produção de elastina.\n• Aumento da produção de ácido hialurónico.\n• Melhoria da elasticidade da pele.\n\nCirculação e drenagem\n• Estimulação da circulação sanguínea.\n• Estimulação da circulação linfática.\n• Reativação das trocas circulatórias.\n• Drenagem de líquidos e toxinas.\n• Diminuição da retenção de líquidos.\n• Alívio da sensação de pernas pesadas.\n• Oxigenação dos tecidos.\n\nBem-estar\n• Sensação de leveza.\n• Relaxamento dos tecidos.\n• Redução das tensões.\n• Melhoria do conforto corporal.\n\nBenefícios para o rosto (Endermolift®)\n\nAnti-envelhecimento\n• Redução de linhas finas e rugas.\n• Efeito preenchedor natural.\n• Redensificação da pele.\n• Efeito lifting natural.\n• Preservação das expressões faciais.\n• Melhoria da firmeza cutânea.\n\nQualidade da pele\n• Produção natural de colagénio, elastina e ácido hialurónico.\n• Hidratação melhorada.\n• Pele mais flexível e resistente.\n• Textura de pele mais uniforme.\n• Pele mais macia e luminosa.\n\nBrilho da tez\n• Reativação da microcirculação.\n• Oxigenação dos tecidos.\n• Tez mais radiante e uniforme.\n• Redução do aspeto cansado do rosto.\n\nContornos do rosto\n• Reafirmação do oval do rosto.\n• Redução da aparência do queixo duplo.\n• Descongestionamento do contorno dos olhos.\n• Atenuação de papos e olheiras.", img: "service_endermologie.png" },
                    { category: 'aesthetic', title: "Dermopigmentação Reparadora - 3D Realista", tech: "Tatuagem Médica 3D", desc: "Tatuagem médica para recriar a aréola e o mamilo ou atenuar cicatrizes.", fullDesc: "A dermopigmentação reparadora da aréola mamária é uma técnica de tatuagem médica que permite recriar de forma realista a aréola e o mamilo ou atenuar a aparência de cicatrizes após uma mastectomia, reconstrução mamária, aumento ou redução mamária.\n\nRealizada apenas após a cicatrização completa dos tecidos, esta intervenção constitui a etapa final da jornada de reconstrução. Para além do seu resultado estético, contribui para devolver à mama um aspeto natural e harmonioso.\n\nPara muitas pacientes, esta última etapa representa muito mais do que um simples procedimento técnico. Favorece a reapropriação do seu corpo, ajuda a virar a página após uma provação física e emocional, e participa na recuperação da autoconfiança. Recuperar uma imagem corporal mais fiel a si mesma permite muitas vezes sentir-se novamente feminina, completa e confortável com o seu reflexo.\n\nO princípio da técnica 3D\n\nA dermopigmentação 3D baseia-se na sobreposição de várias camadas de pigmentos com tons cuidadosamente selecionados. Graças a um trabalho preciso de colorimetria, sombras e luz, é possível criar uma ilusão de relevo particularmente realista, reproduzindo a aparência natural da aréola e do mamilo.\n\nOs pigmentos utilizados são estéreis, hipoalergénicos e especialmente formulados para peles fragilizadas. Cada tratamento é totalmente personalizado de forma a adaptar-se ao tom de pele, à morfologia e às expectativas de cada paciente, respeitando as mais rigorosas normas de higiene e segurança.\n\nO resultado pretendido é discreto, natural e harmonioso, de forma a ajudar cada mulher a recuperar a confiança na sua imagem e a viver esta última etapa da sua reconstrução com serenidade.", img: "service_dermopigmentation.jpg" },
                    { category: 'aesthetic', title: "Tratamento de Sintomas e Controle do Lipedema", tech: "Abordagem Multidisciplinar", desc: "Nosso tratamento visa aliviar a dor e o desconforto causados pelo lipedema.", fullDesc: "Nosso tratamento visa aliviar a dor e o desconforto causados pelo lipedema.\n\nO lipedema é uma doença crônica e inflamatória caracterizada por um acúmulo anormal de tecido adiposo em certas regiões do corpo, especialmente quadris, coxas, joelhos, pernas e braços. No entanto, estudos recentes, incluindo um publicado no PubMed, também confirmam a presença de lipedema no abdômen. Embora esta condição seja principalmente conhecida por afetar os membros, o envolvimento abdominal é muito real e a sua frequência aumenta com a gravidade da doença, de acordo com padrões de progressão ascendente ou descendente.\n\nA gordura abdominal associada ao lipedema apresenta as mesmas características que a das extremidades: é inflamatória, simétrica e geralmente resistente a dietas, bem como ao exercício físico.\n\nOs sintomas geralmente aparecem na puberdade, após o início da exposição hormonal. No entanto, o lipedema pode manifestar-se ou agravar-se em qualquer altura da vida, nomeadamente durante ou após a gravidez, ou na menopausa.\n\nA obesidade agrava consideravelmente o lipedema. No entanto, é importante sublinhar que pessoas não obesas também podem ser afetadas. Esta situação é frequentemente observada em mulheres magras com um rosto e cintura finos, mas quadris, coxas e pernas desproporcionalmente volumosos.\n\nO lipedema afeta aproximadamente 10 a 11% da população feminina mundial. No Canadá, estima-se que cerca de 2,2 milhões de mulheres sofram desta doença. Apesar da sua elevada prevalência, o lipedema continua a ser amplamente subdiagnosticado e é frequentemente confundido com obesidade, celulite ou linfedema primário.\n\nO principal sintoma do lipedema é o acúmulo desproporcional de gordura nas pernas. Esta gordura é resistente a dietas, mesmo às mais restritivas, bem como à atividade física e musculação.\n\nAs seguintes manifestações também são frequentes:\n• Hipersensibilidade ao toque (dor ao simples contato)\n• Presença de nódulos de gordura sob a pele\n• Problemas nos joelhos e quadris\n• Acúmulo de gordura nos braços\n• Flacidez cutânea\n• Dor crônica\n• Sensação de peso e inchaço nas pernas\n\nO lipedema também fragiliza os vasos sanguíneos, o que favorece o extravasamento de sangue e o aparecimento de equimoses (nódoas negras) após choques menores, ou mesmo na ausência de qualquer trauma aparente. É por isso que é tão importante ser acompanhada por um médico flebologista. Graças à sua experiência em doenças venosas e linfáticas, este profissional é capaz de avaliar a evolução do lipedema, fazer um diagnóstico preciso, orientar o tratamento e coordenar o cuidado com os outros profissionais de saúde envolvidos.\n\nComo tratar estes sintomas?\nO lipedema é uma doença crônica para a qual não existe atualmente nenhuma cura. No entanto, é possível aliviar os sintomas e retardar a progressão da doença. Quanto mais cedo o diagnóstico for feito e o tratamento iniciado rapidamente, maiores as chances de limitar a sua evolução.\n\nÉ essencial que a paciente compreenda que o controle e o tratamento do lipedema requerem uma abordagem multidisciplinar. Uma equipe qualificada é indispensável para garantir um cuidado global. Esta equipe pode incluir médicos, nutricionista, cinesiologista ou educador físico, fisioterapeuta, massagista e psicólogo.\n\nO tratamento do lipedema pode ser clínico (conservador), cirúrgico, ou combinar as duas abordagens, dependendo das necessidades da paciente. É importante enfatizar que esses tratamentos são complementares e que um não exclui o outro.\n\nO tratamento clínico visa principalmente identificar as causas do processo inflamatório, sejam de origem hormonal ou nutricional, a fim de implementar estratégias para reduzir a inflamação.\n\nEste cuidado pode incluir a prescrição de suplementos nutricionais, medicamentos, bem como fisioterapia descongestiva complexa e terapia descongestiva complexa manual.\n\nOutras abordagens reconhecidas para modular a inflamação também podem ser usadas, nomeadamente:\n• Fotobiomodulação (laser de baixa intensidade e luz LED)\n• Endermologia\n• Drenagem linfática\n• Terapia manual\n• Exercícios físicos adaptados\n• Ozonoterapia\n\nAlém destes tratamentos, o uso de meias de compressão médica é essencial e constitui uma componente importante no tratamento do lipedema.\n\nO tratamento cirúrgico de referência para o lipedema é a lipoaspiração. Ao contrário da lipoaspiração estética, esta é uma intervenção funcional que permite remover o tecido adiposo patológico, aliviar a dor, diminuir a sensação de peso e melhorar a mobilidade da paciente.\n\nO tratamento conservador deve ser continuado após a intervenção a fim de limitar o risco de reaparecimento do acúmulo de tecido adiposo e para garantir a manutenção dos resultados a longo prazo. Tudo isso deve estar alinhado com o cirurgião responsável pelo seu tratamento.", img: "service_lipoedeme.jpg" },
                    { category: 'aesthetic', title: "Linfedema pós-mastectomia", tech: "Tratamento especializado", desc: "Tratamento do linfedema por meio de drenagem, compressão e cuidados especializados.", fullDesc: "O linfedema pós-mastectomia é uma acumulação crônica de linfa no braço e na região torácica. Ocorre após a remoção dos gânglios linfáticos axilares ou radioterapia, levando a uma interrupção do sistema natural de drenagem linfática. Em pacientes com câncer de mama, a sua incidência varia consideravelmente e pode aparecer pouco tempo após a cirurgia ou vários anos depois.\n\nPrincipais causas e fatores de risco\n• Remoção cirúrgica dos gânglios linfáticos da axila (esvaziamento ganglionar axilar).\n• Radioterapia, que pode causar fibrose e lesões nos vasos linfáticos.\n• Infeções ou traumas no membro afetado.\n• Obesidade e falta de mobilidade.\n\nSintomas frequentes\n• Inchaço persistente do braço, da mão ou da mama.\n• Sensação de peso e tensão cutânea.\n• Rigidez ou limitação dos movimentos articulares.\n\nOpções de tratamento\n• Drenagem linfática manual ou mecânica (endermologia LPG): técnica de massagem específica que favorece o redirecionamento da linfa acumulada para áreas onde a drenagem linfática é funcional.\n• Compressão: uso de ligaduras compressivas e mangas elásticas para reduzir e controlar o edema.\n• Exercícios miolinfocinéticos: movimentos terapêuticos que promovem o bombeamento e a circulação da linfa.\n• Acompanhamento por um fisioterapeuta especializado: elemento essencial na gestão do linfedema.\n• Tratamento cirúrgico: quando o tratamento conservador não é suficiente, os progressos na cirurgia oncológica permitem hoje propor diferentes abordagens cirúrgicas adaptadas.", img: "service_lymphoedeme.jpg" },

                    { title: "Kinesiotape", tech: "Bandagem Elástica", desc: "Kinesiotape para reduzir o edema e apoiar os músculos sem imobilização.", fullDesc: "Kinesiotape (bandagem elástica funcional) – é uma fita adesiva elástica, com elasticidade semelhante à da pele, aplicada ao corpo para fins terapêuticos.\n\nPode ser utilizada na prevenção e no tratamento de lesões articulares e musculares, podendo também ser aplicada no pós-operatório para atenuar o edema e a dor, reduzir hematomas e melhorar o estado geral da pele.\n\nImportância do Kinesiotape\n\nRedução do edema (inchaço)\n\nUm dos principais benefícios é o leve levantamento da pele pela fita.\n\nIsso melhora a circulação linfática, facilitando a drenagem de fluidos acumulados.\n\nAuxílio na Cicatrização – pós-operatório é amplamente utilizado em cuidados pós-operatórios (ex: lipoaspiração, abdominoplastia).\nO Kinesiotape pós-operatório: Melhora a circulação local, Reduz a pressão nos tecidos lesionados, Contribui para uma cicatrização mais harmoniosa\nPode ajudar a prevenir: fibrose, aderências cicatriciais\n\nGestão da Dor\n\nEstimula os receptores sensoriais cutâneos, Reduz a percepção da dor (efeito neuromodulador)\nPara um melhor conforto durante a recuperação.\n\nSuporte Muscular e Funcional\n\nSem imobilizar, oferece suporte leve aos músculos\nMelhora a propriocepção\nTambém utilizado em reabilitação esportiva e ortopédica\n\nPrevenção de Complicações Pós-Operatórias\n\nReduz o risco de fibrose, melhora a circulação sanguínea e ajuda a reduzir a inflamação.\n\nBenefícios Estéticos\n\nMelhora a aparência da pele, contribui para a uniformidade das cicatrizes e para melhores resultados estéticos finais.", img: "service_kinesio_new.jpg", icon: "recovery" },
                    { title: "Limpeza de Pele", tech: "Método Brasileiro Profundo", desc: "Limpeza profunda com extração manual completa de cravos.", fullDesc: "A limpeza de pele profunda (método brasileiro) é um protocolo estético reconhecido pela sua abordagem completa e minuciosa, focada na extração manual de cravos, ao contrário dos métodos mais superficiais praticados em outros países.\n\nA limpeza de pele é necessária para eliminar células mortas e cravos, renovar a pele e melhorar a absorção de produtos. Assim, antes de realizar tratamentos de alta tecnologia como lasers, luz intensa pulsada (IPL), radiofrequência, ultrassom microfocado ou mesmo injeções cosméticas, a limpeza facial é essencial para um resultado mais duradouro e satisfatório, além de restaurar o brilho natural da pele.\n\nQuais são as características do método brasileiro?\n\nExtração manual completa de cravos\n\nRespeito por uma rotina de várias etapas\n\nAssociação a tecnologias (vapor, alta frequência, fotobiomodulação, etc.)\n\nEtapa final focada no acalmar e na regeneração da pele.\n\nA limpeza facial profunda segundo o método brasileiro é considerada um dos protocolos estéticos mais completos porque:\n\n• Favorece uma verdadeira limpeza dos poros\n• Combina técnicas manuais e tecnológicas\n• Melhora a saúde e a aparência da pele\n\nEtapas da limpeza de pele profunda: Limpeza, esfoliação, aplicação de emoliente (abertura dos poros), extração (eliminação de cravos abertos e fechados), antissepsia (aplicação de loções antissépticas), prevenção de infecções, aplicação de alta frequência (fecha os poros e possui ação bactericida), máscara calmante e aplicação de proteção solar.", img: "service_skin_cleansing.jpg" },
                    { title: "Rejuvenescimento & Claridade", tech: "Luz Pulsada (Sharplight)", desc: "Rosácea, telangiectasias, acne, foliculite, imperfeições e rejuvenescimento.", fullDesc: "O IPL (Luz Pulsada Intensa) é uma tecnologia estética não invasiva utilizada para melhorar a qualidade da pele e tratar diversas problemáticas cutâneas.\n\nAo contrário do laser, o IPL difunde uma luz de largo espetro que visa especificamente:\n• A melanina (manchas pigmentares)\n• A hemoglobina (vermelhidão, vasos visíveis)\n• As glândulas sebáceas (acne)\n\nO IPL é uma solução versátil que permite:\n\n• Melhorar o brilho e a textura da pele\n• Uniformizar a tez e reduzir imperfeições\n• Tratar os sinais de envelhecimento (fotorrejuvenescimento)\n\nIPL para Rosácea e Telangiectasias:\nUm tratamento de eleição para rosácea e vermelhidão difusa. Visa pequenos vasos sanguíneos visíveis para os atenuar progressivamente. Ideal para zonas sensíveis sujeitas a vermelhidão e couperose.\n\nIPL para Acne e Foliculite:\nSolução eficaz que reduz as bactérias responsáveis pela acne, diminui a inflamação e regula a produção de sebo. Ajuda também a fechar os poros.\n\nIPL para Manchas Pigmentares:\nMuito eficaz para tratar manchas solares, lentigos ou hiperpigmentações superficiais. A luz visa a melanina para uniformizar a tez.\n\nO tratamento com IPL é rápido, pouco invasivo e requer pouco ou nenhum tempo de recuperação. São geralmente recomendadas várias sessões para resultados ideais. Uma proteção solar rigorosa é essencial para manter os resultados.", img: "service_sharplight.jpg" },
                    { title: "Remoção de Tatuagem e Microblading", tech: "Laser Q-switched", desc: "Remoção eficaz e segura de tatuagens e microblading.", fullDesc: "Remoção de Tatuagem e Microblading.\n\nO tratamento de remoção de tatuagem é um procedimento estético que permite atenuar ou remover progressivamente uma tatuagem através da utilização de tecnologias avancadas, nomeadamente o laser.\n\nNa nossa clínica, utilizamos o laser Q-Switched da marca SharpLight, reconhecido pela sua precisão e eficácia. Este tipo de laser emite impulsos muito rápidos que visam especificamente os pigmentos da tinta sem danificar os tecidos circundantes. Os pigmentos são fragmentados em micropartículas e, em seguida, eliminados naturalmente pelo organismo através do sistema linfático.\n\nO tratamento é realizado em várias sessões com intervalos de algumas semanas. O número de sessões varia de acordo com vários fatores: a profundidade da tatuagem, as cores utilizadas, a antiguidade, bem como o tipo de pele. É importante compreender que o processo é progressivo e que o tratamento completo pode prolongar-se por vários meses, ou mesmo anos, a fim de obter um resultado ideal e seguro.\n\nDurante a sessão, pode sentir-se uma sensação de formigueiro ou de calor, semelhante a pequenos golpes de elástico na pele. Estão implementadas medidas para garantir o conforto do cliente.\n\nAntes do tratamento:\nRecomenda-se evitar a exposição solar ou aos UV (incluindo camas de bronzeamento) pelo menos duas semanas antes da sessão. A pele não deve estar irritada, ferida ou bronzeada. Recomenda-se também não aplicar produtos irritantes na zona a tratar.\n\nApós o tratamento:\nPodem surgir vermelhidão, um ligeiro inchaço ou a formação de pequenas crostas, o que é perfeitamente normal. É essencial manter a zona limpa e hidratada, evitar coçar ou retirar as crostas e proteger a pele do sol com protetor solar. Banhos quentes, piscinas, saunas e atividades desportivas intensas devem ser evitados durante alguns dias para promover uma boa cicatrização.\n\nO respeito pelos cuidados antes e depois de cada sessão é primordial para otimizar os resultados e reduzir os riscos de complicações.\n\nA remoção de tatuagem é um processo que exige paciência e regularidade, mas realizado com tecnologia de alto desempenho e por um profissional qualificado, permite obter resultados visíveis, seguros e duradouros.", img: "service_tattoo_removal.jpg" },
                    { title: "Brilho Instantâneo", tech: "Laser Q-switched (Peeling Hollywood)", desc: "Reduza o excesso de sebo, feche os poros e unifique o tom da pele.", fullDesc: "Peeling Hollywood (Carbon Peel)\n\nO Carbon Peel é um tratamento estético não invasivo que melhora instantaneamente a textura da pele, fecha os poros e proporciona um efeito luminoso, suave e uniforme. É por esta razão que é muito popular antes de eventos importantes — daí a sua alcunha \"Hollywood Peel\".\n\nEste cuidado combina a aplicação de uma máscara de carvão ativo com a utilização de um laser para limpar, esfoliar e revitalizar a pele em profundidade.\n\nO tratamento é rápido, geralmente entre 20 e 30 minutos, e não requer tempo de recuperação. Pode sentir-se uma ligeira sensação de calor ou de formigueiro durante a sessão, mas é muito bem tolerada.\n\nO tratamento começa com a aplicação de uma fina camada de carvão líquido na pele. Este carvão penetra nos poros e atua como um íman para as impurezas, o excesso de sebo e as células mortas. Em seguida, a passagem do laser permite aquecer e vaporizar as partículas de carvão, arrastando consigo as impurezas e estimulando simultaneamente a produção de colagénio.\n\nEste cuidado é particularmente recomendado para:\n\n• Peles oleosas ou com tendência acneica\n• Poros dilatados\n• Tez baça ou irregular\n• Pontos negros e imperfeições\n• Primeiras rugas e sinais de envelhecimento\n\nO Carbon Peel atua de várias formas:\n\n• Esfolia a pele suavemente\n• Elimina as células pigmentadas à superfície\n• Ajuda a regular a produção de sebo\n• Estimula a renovação celular e a produção de colagénio\n\nGraças à ação do laser (frequentemente Q-Switched), os aglomerados de melanina podem ser progressivamente fragmentados, o que contribui para clarear as manchas pigmentares e uniformizar a tez.\n\nNota sobre Melasma: O Carbon Peel não é um tratamento curativo definitivo. Para o melasma, os melhores resultados são geralmente obtidos com uma abordagem combinada e personalizada. O melasma pode reaparecer, especialmente em caso de exposição solar ou de fatores hormonais.\n\nAntes do tratamento:\nRecomenda-se evitar a exposição solar, produtos irritantes (como ácidos ou retinoides) e vir com a pele limpa, sem maquilhagem.\n\nApos o tratamento:\nA pele pode ficar ligeiramente rosada durante algumas horas. Recomenda-se hidratar a pele, evitar o sol e aplicar protetor solar. A maquilhagem pode geralmente ser retomada logo no dia seguinte.\n\nPara resultados ideais, podem ser recomendadas várias sessões, dependendo das necessidades da pele.", img: "service_hollywood_peel.jpg" },
                    { title: "Depilação Permanente", tech: "Sharplight & LightSheer", desc: "Tecnologias Sharplight e LightSheer para pele macia duradoura.", fullDesc: "A depilação a laser é um método moderno, eficaz e duradouro para reduzir a pilosidade. Repousa na destruição progressiva do folículo piloso pelo calor respeitando a pele circundante.\n\nSão utilizadas diferentes tecnologias dependendo do seu tipo de pele:\n\n• Laser de Díodo (LightSheer®): Versátil, adequado para uma grande variedade de tipos de pele e pelos.\n• Laser Alexandrite (Sharplight®): Muito eficaz em peles claras com pelos escuros.\n• Laser Nd:YAG (Sharplight®): Especialmente adaptado para peles mais escuras ou bronzeadas para total segurança.\n\nDesenvolvimento do Tratamento:\nCada sessão é rápida e pode durar de alguns minutos a uma hora. São necessárias várias sessões (média 6 a 8) para um resultado ideal.\n\nAntes do Tratamento:\n• Informe o profissional sobre qualquer medicação ou vitaminas recentes.\n• Certifique-se de que não está grávida.\n• Evite a exposição solar (2 semanas antes).\n• Não faça depilação com cera ou pinça (lâmina recomendada).\n• Pele limpa sem maquilhagem ou cremes.\n\nApós o Tratamento:\n• Hidrate a pele e evite o calor (banhos quentes, desporto intenso).\n• Evite o sol e aplique protetor solar.\n\nAo longo das sessões, os pelos tornam-se mais finos, mais claros e crescem mais lentamente, melhorando simultaneamente a qualidade da sua pele.", img: "service_hair_removal.jpg" },
                    { title: "Firmeza & Remodelagem", tech: "Radiofrequência (Sharplight & Exilis)", desc: "Tratamento de celulite e contorno corporal para flacidez cutânea.", fullDesc: "Remodelação corporal: radiofrequência para celulite, flacidez e gordura localizada\n\nA remodelação corporal por radiofrequência é uma solução não invasiva, eficaz e segura para melhorar a aparência da pele, reduzir a celulite, refirmar os tecidos e tratar a gordura localizada.\n\nNa nossa clínica, utilizamos tecnologias avançadas como Omnimax S4 da marca SharpLight e Exilis da BTL Aesthetics, reconhecidas pelo seu desempenho e resultados visíveis.\n\nComo funciona?\nA radiofrequência difunde um calor controlado nas camadas profundas da pele, permitindo:\n• Estimular a produção de colagénio e elastina\n• Refirmar e tonificar a pele\n• Melhorar o aspeto da celulite\n• Favorecer a redução de gordura localizada\n\nEsta ação térmica melhora também a circulação sanguínea e a drenagem, contribuindo para uma pele mais lisa e uniforme.\n\nIndicações :\nEste tratamento é ideal para :\n• Celulite (aspeto casca de laranja)\n• Flacidez cutânea (flacidez)\n• Gordura localizada (abdómen, coxas, braços, flancos)\n• Melhoria global da textura e firmeza da pele\n\nDesenvolvimento do Tratamento :\nA sessão é confortável e proporciona uma sensação de calor agradável. Dura geralmente entre 20 a 60 minutos, dependendo da zona tratada. São recomendadas várias sessões para resultados ideais, com uma melhoria progressiva da firmeza e da silhueta.\n\nApós o Tratamento:\n• Sem tempo de recuperação (regresso imediato às atividades)\n• Possível vermelhidão ligeira e temporária\n• Hidratação recomendada\n• Manter um estilo de vida saudável para otimizar os resultados\n\nResultados :\nOs resultados aparecem progressivamente ao longo das sessões :\n• Pele mais firme e tonificada\n• Diminuição visível da celulite\n• Silhueta mais harmoniosa\n• Melhoria da qualidade da pele\n\nA remodelação por radiofrequência é uma excelente alternativa não cirúrgica para esculpir o corpo suavemente, oferecendo resultados naturais.", img: "service_rf_new.jpg" },
                    { title: "Escultura pelo Frio", tech: "Criolipólise (Bfreeze)", desc: "Eliminação de gordura localizada através do frio.", fullDesc: "A criolipólise é uma tecnologia não invasiva que permite reduzir a gordura localizada através do frio, sem cirurgia nem tempo de recuperação.\n\nNa nossa clínica, utilizamos a tecnologia B-Freeze, concebida para visar eficazmente os depósitos de gordura resistentes à alimentação e ao exercício.\n\nComo funciona?\nO tratamento baseia-se num princípio simples: as células adiposas (adipócitos) são sensíveis ao frio. A exposição a um arrefecimento controlado provoca a sua cristalização, sendo depois eliminadas progressivamente pelo organismo através do sistema linfático.\n\nIndicações :\nA criolipólise é ideal para tratar :\n• Abdómen\n• Pneuzinhos (love handles)\n• Coxas e costas\n• Braços e queixo duplo\n\nDesenvolvimento do Tratamento :\nA sessão dura entre 30 a 60 minutos por zona. O aplicador cria um efeito de sucção com uma sensação de frio intenso no início, que diminui rapidamente. O tratamento é confortável.\n\nApós o Tratamento:\n• Possível vermelhidão, sensibilidade ou adormecimento temporários.\n• Regresso imediato às atividades diárias.\n• Hidratação recomendada.\n• Drenagem linfática aconselhada para otimizar os resultados.\n\nResultados :\nRedução visível dos depósitos de gordura e silhueta mais harmoniosa entre 3 a 12 semanas após o tratamento.", img: "service_cryolipolysis.jpg" },
                    { category: 'aesthetic', title: "Regeneração da Pele", tech: "Microagulhamento", desc: "Estimulação de colágeno, redução de rugas, cicatrizes e imperfeições.", fullDesc: "O microagulhamento é um tratamento não invasivo que estimula naturalmente a regeneração da pele. Pode ser realizado isoladamente ou combinado com radiofrequência (RF) para resultados mais profundos.\n\nMicroagulhamento (Microneedling) :\nConsiste na criação de microperfurações controladas para ativar o mecanismo natural de reparação da pele e estimular a produção de colagénio.\n• Indicações : Rugas, linhas de expressão, cicatrizes de acne, poros dilatados.\n\nMicroagulhamento com Radiofrequência :\nO RF Microneedling combina as microperfurações com a difusão de calor profunda. Esta dupla ação permite uma estimulação intensa do colagénio e um refirmamento marcado.\n• Indicações : Flacidez cutânea, rugas marcadas, cicatrizes profundas, estrias.\n\nDesenvolvimento do Tratamento :\nPode ser aplicado um creme anestésico. A sessão dura 30 a 60 minutos. É possível ocorrer vermelhidão e sensibilidade ligeira durante 24 a 72 horas.\n\nApós o Tratamento:\n• Hidratação essencial.\n• Evitar o sol e aplicar protetor solar.\n• Evitar maquilhagem e produtos irritantes por alguns dias.\n\nResultados :\nA pele torna-se mais lisa, firme e luminosa. Os resultados aparecem progressivamente ao longo de várias semanas.", img: "service_microneedling.jpg" }
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
                    { title: "BTL Cellutone", desc: "Terapia por ondas acústicas para tratar celulite e melhorar a textura da pele.", img: "CELLUtone.jpg" }
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
    
    const massotherapyItems = t.services.items.filter(s => s.category === 'massotherapy');
    const aestheticItems = t.services.items.filter(s => s.category !== 'massotherapy');

    const renderCard = (s, idx) => {
        const imagePath = s.img || CONFIG.images.services[idx % CONFIG.images.services.length];
        const origIdx = t.services.items.indexOf(s);
        return `
            <div class="service-card" 
                 onclick="openServiceModal(${origIdx})"
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
    };

    let massotherapySection = '';
    if (massotherapyItems.length > 0) {
        massotherapySection = `
            <div class="service-category-header" style="margin-bottom: 2rem;">
                <h3 style="font-size: 2rem; color: var(--clr-primary); margin-bottom: 1rem;">
                    ${currentLang === 'fr' ? 'Massothérapie & Thérapie Manuelle' : (currentLang === 'pt' ? 'Massoterapia & Terapia Manual' : 'Massage & Manual Therapy')}
                </h3>
                ${t.services.introMassotherapy ? `<p style="font-size: 1.1rem; line-height: 1.6; color: var(--clr-text-light); max-width: 800px;">${t.services.introMassotherapy}</p>` : ''}
            </div>
            <div class="services-grid" style="margin-bottom: 4rem;">
                ${massotherapyItems.map((s, idx) => renderCard(s, idx)).join('')}
            </div>
        `;
    }

    let aestheticSection = '';
    if (aestheticItems.length > 0) {
        aestheticSection = `
            <div class="service-category-header" style="margin-bottom: 2rem;">
                <h3 style="font-size: 2rem; color: var(--clr-primary); margin-bottom: 1rem;">
                    ${currentLang === 'fr' ? 'Soins Esthétiques & Technologies' : (currentLang === 'pt' ? 'Cuidados Estéticos & Tecnologias' : 'Aesthetics & Technologies')}
                </h3>
            </div>
            <div class="services-grid">
                ${aestheticItems.map((s, idx) => renderCard(s, idx)).join('')}
            </div>
        `;
    }

    section.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2>${t.services.title}</h2>
                <div class="divider"></div>
            </div>
            ${massotherapySection}
            ${aestheticSection}
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
