/* script.js - Central Source of Truth */

const CONFIG = {
    business: {
        name: "Clinique Taíse Neves",
        address: "205 Montmagny St, Québec City, Quebec G1N 4V3",
        phone: "(418) 261-7237",
        phoneRaw: "+14182617237",
        email: "",
        email: "cliniquetaiseneves@gmail.com",
        instagram: "https://www.instagram.com/cliniquetaiseneves/?hl=en",
        googleMapsDir: "https://www.google.com/maps/dir/?api=1&destination=205%20Montmagny%20St%2C%20Qu%C3%A9bec%20City%2C%20QC%20G1N%204V3",
        hours: [
            { day: "Lundi - Vendredi", time: "9:00 - 19:00" },
            { day: "Samedi - Dimanche", time: "Fermé" }
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
                { label: "Partenaires", anchor: "#partners" },
                { label: "Contact", anchor: "#contact" }
            ],
            more: "Plus",
            tagline: "Massothérapie et soins esthétiques à Québec.",
            description: "Une clinique chaleureuse et moderne axée sur des résultats concrets, le confort et les soins professionnels.",
            cta: "Prendre rendez-vous",
            partners: {
                title: "Nos Partenaires",
                items: [
                    { name: "Simony Teixeira", role: "Infirmière clinicienne injectrice", img: "partner_simony.png" },
                    { name: "Maria Carolina", role: "Infirmière LPN - Spécialisée en médecine esthétique", img: "partner_maria.png" }
                ]
            },
            bio: {
                title: "Propriétaire & Thérapeute certifiée",
                description: "Passionnée par le bien-être et l'esthétique, Taíse Neves combine expertise technique et approche humaine pour offrir des soins personnalisés de haute qualité. Avec des années d'expérience en massothérapie et drainage lymphatique, elle s'engage à aider chaque client à atteindre ses objectifs de santé et de confiance en soi.",
                stats: [
                    { label: "Années d'Expérience", value: "10+" },
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
                    { title: "Nettoyage en profondeur", desc: "Soin complet pour une peau purifiée et éclatante." },
                    { title: "Lumière Pulsée (Sharplight)", desc: "Rosacée, télangiectasies, acné, folliculite, imperfections et rajeunissement." },
                    { title: "Laser Q-switched", desc: "Dé-tatouage efficace et sécuritaire." },
                    { title: "Peeling Hollywood", desc: "Laser Q-switched (Sharplight) : Peeling au carbone pour un éclat instantané." },
                    { title: "Épilation Laser", desc: "Technologies Sharplight et LightSheer pour une peau douce durablement." },
                    { title: "Traitement par radiofréquence (Sharplight et Exilis de BTL)", desc: "Traitement de la cellulite et remodelage corporel (réduction de la graisse localisée), pour le relâchement cutané du corps. Remodelage du visage et réduction du volume du menton", img: "service_rf_new.jpg" },
                    { title: "Cryolipolyse (Bfreeze)", desc: "Élimination des amas graisseux localisés par le froid." },
                    { title: "Microneedling", desc: "Stimulation du collagène, réduction des rides, cicatrices et imperfections." },
                    { title: "Soins Pré/Post-Opératoires", desc: "Suivi spécialisé pour chirurgie plastique, bariatrique et post-partum.", icon: "recovery" },
                    { title: "Massothérapie ", desc: "Massage thérapeutique, myofascial, et drainage lymphatique (Renata Franca, Goddoy, Leduc).", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { title: "Massage Relaxant", desc: "Détente musculaire et réduction du stress pour un bien-être complet.", img: "service_massage_relaxant.jpg", icon: "massage" },
                    { title: "Miracle Face (Renata Franca)", desc: "Massage du visage effet lifting immédiat et drainage lymphatique.", img: "service_miracle_face.jpg", icon: "aesthetic" },
                    { title: "Kinesiotape", desc: "Soulagement de la douleur, amélioration de la circulation et soutien musculaire.", img: "service_kinesio_new.jpg", icon: "recovery" }
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
                    { title: "BTL X-Wave", desc: "Thérapie par ondes acoustiques pour traiter la cellulite et améliorer la texture de la peau.", img: "machine_btl.jpg" }
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
                title: "Contactez-nous",
                subtitle: "Contactez-nous pour confirmer les prochaines étapes.",
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
                { label: "Partners", anchor: "#partners" },
                { label: "Contact", anchor: "#contact" }
            ],
            more: "More",
            tagline: "Massage therapy & aesthetic treatments in Quebec City.",
            description: "A warm, modern clinic focused on real results, comfort, and professional care.",
            cta: "Book an Appointment",
            partners: {
                title: "Our Partners",
                items: [
                    { name: "Simony Teixeira", role: "Clinical Nurse Injector", img: "partner_simony.png" },
                    { name: "Maria Carolina", role: "LPN Nurse - Medical Aesthetics Specialist", img: "partner_maria.png" }
                ]
            },
            bio: {
                title: "Owner & Certified Therapist",
                description: "Passionate about well-being and aesthetics, Taíse Neves combines technical expertise and a human approach to offer high-quality personalized care. With years of experience in massage therapy and lymphatic drainage, she is committed to helping each client achieve their health and self-confidence goals.",
                stats: [
                    { label: "Years of Experience", value: "10+" },
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
                    { title: "Deep Skin Cleansing", desc: "Complete care for purified and radiant skin." },
                    { title: "IPL (Sharplight)", desc: "Rosacea, telangiectasias, acne, folliculitis, imperfections, and rejuvenation." },
                    { title: "Q-switched Laser", desc: "Effective and safe tattoo removal." },
                    { title: "Hollywood Peel", desc: "Q-switched Laser (Sharplight): Carbon peel for instant glow." },
                    { title: "Laser Hair Removal", desc: "Sharplight and LightSheer technologies for lastingly smooth skin." },
                    { title: "Radiofrequency", desc: "Body and facial contouring, cellulite, and skin tightening (Sharplight and Exilis).", img: "service_rf_new.jpg" },
                    { title: "Cryolipolysis (Bfreeze)", desc: "Elimination of localized fat deposits by cold." },
                    { title: "Microneedling", desc: "Collagen stimulation, reduction of wrinkles, scars, and imperfections." },
                    { title: "Pre/Post-Op Care", desc: "Specialized follow-up for plastic, bariatric, and facial surgery.", icon: "recovery" },
                    { title: "Massage & Drainage", desc: "Therapeutic, myofascial, and lymphatic drainage (Renata Franca, Goddoy, Leduc).", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { title: "Relaxing Massage", desc: "Muscle relaxation and stress reduction for complete well-being.", img: "service_massage_relaxant.jpg", icon: "massage" },
                    { title: "Miracle Face (Renata Franca)", desc: "Immediate lifting effect facial massage and lymphatic drainage.", img: "service_miracle_face.jpg", icon: "aesthetic" },
                    { title: "Kinesiotape", desc: "Pain relief, improved circulation, and muscle support.", img: "service_kinesio_new.jpg", icon: "recovery" }
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
                    { title: "BTL X-Wave", desc: "Acoustic wave therapy to treat cellulite and improve skin texture.", img: "machine_btl.jpg" }
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
                title: "Contact Us",
                subtitle: "Contact us to confirm next steps.",
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
                { label: "Por que Nós", anchor: "#why-choose-us" },
                { label: "Sobre", anchor: "#bio" },
                { label: "Parceiros", anchor: "#partners" },
                { label: "Contato", anchor: "#contact" }
            ],
            more: "Mais",
            tagline: "Massoterapia e tratamentos estéticos na cidade de Quebec.",
            description: "Uma clínica acolhedora e moderna focada em resultados reais, conforto e atendimento profissional.",
            cta: "Agendar Consulta",
            partners: {
                title: "Nossos Parceiros",
                items: [
                    { name: "Simony Teixeira", role: "Enfermeira esteta injetora", img: "partner_simony.png" },
                    { name: "Maria Carolina", role: "Enfermeira LPN - Especializada em medicina estética", img: "partner_maria.png" }
                ]
            },
            bio: {
                title: "Proprietária e Terapeuta Certificada",
                description: "Apaixonada por bem-estar e estética, Taíse Neves combina expertise técnica e abordagem humana para oferecer cuidados personalizados de alta qualidade. Com anos de experiência em massoterapia e drenagem linfática, ela se dedica a ajudar cada cliente a alcançar seus objetivos de saúde e autoconfiança.",
                stats: [
                    { label: "Anos de Experiência", value: "10+" },
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
                    { title: "Limpeza Profunda", desc: "Cuidado completo para uma pele purificada e radiante." },
                    { title: "Luz Pulsada (Sharplight)", desc: "Rosácea, telangiectasias, acne, foliculite, imperfeições e rejuvenescimento." },
                    { title: "Laser Q-switched", desc: "Remoção de tatuagem eficaz e segura." },
                    { title: "Peeling Hollywood", desc: "Laser Q-switched (Sharplight): Peeling de carbono para brilho instantâneo." },
                    { title: "Depilação a Laser", desc: "Tecnologias Sharplight e LightSheer para pele macia duradoura." },
                    { title: "Radiofrequência", desc: "Remodelação corporal e facial, celulite e flacidez (Sharplight e Exilis).", img: "service_rf_new.jpg" },
                    { title: "Criolipólise (Bfreeze)", desc: "Eliminação de gordura localizada através do frio." },
                    { title: "Microagulhamento", desc: "Estimulação de colágeno, redução de rugas, cicatrizes e imperfeições." },
                    { title: "Cuidados Pré/Pós-Op", desc: "Acompanhamento especializado para cirurgia plástica, bariátrica e facial.", icon: "recovery" },
                    { title: "Massoterapia & Drenagem", desc: "Terapêutica, miofascial e drenagem linfática (Renata Franca, Goddoy, Leduc).", img: "service_massage_myofascial.jpg", icon: "massage" },
                    { title: "Massagem Relaxante", desc: "Relaxamento muscular e redução do estresse para um bem-estar completo.", img: "service_massage_relaxant.jpg", icon: "massage" },
                    { title: "Miracle Face (Renata Franca)", desc: "Massagem facial com efeito lifting imediato e drenagem linfática.", img: "service_miracle_face.jpg", icon: "aesthetic" },
                    { title: "Kinesio Taping", desc: "Alívio da dor, melhora da circulação e suporte muscular.", img: "service_kinesio_new.jpg", icon: "recovery" }
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
                    { title: "BTL X-Wave", desc: "Terapia por ondas acústicas para tratar celulite e melhorar a textura da pele.", img: "machine_btl.jpg" }
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
                title: "Contate-nos",
                subtitle: "Entre em contato para confirmar os próximos passos.",
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
        machines: ["taise_machines.jpg", "machine_lightsheer.jpg", "machine_btl.jpg"],
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
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`
};

/* --- Core Logic --- */

document.addEventListener('DOMContentLoaded', () => {
    setupMobileMenuListeners(); // Trigger listeners once
    renderUI();
    initScrollEffects();
    initForm();
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
    renderPartners();
    renderContactForm();
    renderContactInfo();
    renderFooter();

    renderFooter();
    // renderMobileBottomBar(); // Removed dynamic rendering

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
}

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
                        <a href="#contact" class="btn btn-primary">
                            <span class="btn-icon">${ICONS.calendar}</span>
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
                        <div class="service-card">
                            <div class="service-card-image">
                                <img src="${imagePath}" alt="${s.title}">
                            </div>
                            <div class="service-card-content">
                                <div class="service-icon">${ICONS[iconName] || ''}</div>
                                <h3>${s.title}</h3>
                                <p>${s.desc}</p>
                                <details class="service-details">
                                    <summary>${t.services.details}</summary>
                                    <div class="details-content">
                                        <p>${t.services.specialized}</p>
                                    </div>
                                </details>
                            </div>
                        </div>
                    `;
    }).join('')}
            </div>
        </div>
    `;
    root.appendChild(section);
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
                <a href="${CONFIG.business.instagram}" target="_blank" class="text-link">${t.reviews.more}</a>
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
                        <p class="profile-bio-text">${t.bio.description}</p>
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

    const serviceOptions = t.services.items.map(s => `<option value="${s.title}">${s.title}</option>`).join('');

    section.innerHTML = `
        <div class="container">
            <div class="form-card">
                <div class="form-header">
                    <h2>${t.cta}</h2>
                    <p>${t.contact.subtitle}</p>
                </div>
                <form id="appointment-form" action="${CONFIG.form.endpoint}" method="POST">
                    <div class="form-grid">
                        <div class="form-group">
                            <label for="name">${t.contact.name}</label>
                            <input type="text" id="name" name="Nom" required>
                        </div>
                        <div class="form-group">
                            <label for="contact_info">${t.contact.info}</label>
                            <input type="text" id="contact_info" name="Contact" required>
                        </div>
                        <div class="form-group">
                            <label for="service">${t.contact.type}</label>
                            <select id="service" name="Service">
                                ${serviceOptions}
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="preferred_time">${t.contact.time}</label>
                            <select id="preferred_time" name="Moment">
                                ${t.contact.times.map(time => `<option value="${time}">${time}</option>`).join('')}
                            </select>
                        </div>
                        <div class="form-group full-width">
                            <label for="message">${t.contact.message}</label>
                            <textarea id="message" name="Message" rows="4"></textarea>
                        </div>
                        <div style="display:none"><input type="text" name="_gotcha"></div>
                        <div class="form-actions full-width">
                            <button type="submit" class="btn btn-primary btn-block">${t.contact.send}</button>
                        </div>
                    </div>
                    <div id="form-status" class="form-status"></div>
                </form>
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
        const frDay = CONFIG.translations.fr.contact.days[idx];
        const frHours = CONFIG.translations.fr.contact.days[idx] === "Dimanche" ? "Fermé" : "9h - 19h"; // Fallback logic
        // Safer logic: use index to match common clinic hours
        const hours = (idx < 5) ? "9:00 - 19:00" : (idx === 5 ? "10:00 - 15:00" : t.contact.closed);
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

    // Populate links
    navLinks.innerHTML = CONFIG.translations[currentLang].nav.map(n => `<a href="${n.anchor}" class="mobile-nav-item">${n.label}</a>`).join('');

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

function initForm() {
    const form = document.getElementById('appointment-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());

            status.innerHTML = currentLang === 'fr' ? "Envoi..." : "Sending...";
            status.className = "form-status active";
            status.style.display = "block";

            try {
                const response = await fetch(CONFIG.form.endpoint, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                if (response.ok) {
                    status.innerHTML = currentLang === 'fr' ? "Merci ! Votre demande a été envoyée." : "Thank you! Your request has been sent.";
                    status.className = "form-status active success";
                    form.reset();
                } else {
                    throw new Error();
                }
            } catch (err) {
                status.innerHTML = "Oups ! Une erreur est survenue. Veuillez réessayer ou nous appeler directement.";
                status.className = "form-status error";
            }
        });
    }
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
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "19:00" },
        { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "10:00", "closes": "15:00" }
    ],
    "sameAs": [
        CONFIG.business.instagram
    ]
});
document.head.appendChild(script);
