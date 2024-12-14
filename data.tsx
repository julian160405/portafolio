import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { Mail } from "lucide-react";

export const socialNetworks = [
    {
        id: 1,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/julianortiz160405",
    },

    {
        id: 2,
        logo: <Mail size={30} strokeWidth={1} />, // Ícono de email
        src: "mailto:julianortiz160405@gmail.com", // La ruta que deseas para esta página
    },

];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Soporte técnico - Auxiliar de laboratorios",
        subtitle: "Universidad Abierta Interamericana",
        description: "Me dediqué a realizar el mantenimiento preventivo y correctivo de los equipos informáticos de la UAI. Resolver incidencias, peticiones y consultas informáticas tanto de docentes como alumnos, supervisar y mantener el orden y funcionamiento tanto de los equipos como las instalaciones. ",
        date: "Abril 2024 - Octubre 2024 ",
    },
    {
        id: 2,
        title: "Desarrollador Móvil Jr - Pasante",
        subtitle: "Calipso",
        description: "Me encargué junto a mi compañero de equipo realizar una aplicación para Android según los requisitos de la empresa. Utilizando tecnologías como Java y Firebase.",
        date: "Abril 2023 - Diciembre 2023",
    },
    {
        id: 3,
        title: "Desarrollador Web Jr",
        subtitle: "Mercosur - Hackathón 2023",
        description: "Fui miembro de la delegación de 10 alumnos del país encargados de representar a la Argentina en el hackathón 2023 del Mercosur llevado a cabo en Aunción (Paraguay). En el mismo 5 grupos desarrollamos cada uno un prototipo de sistema de consultas para escuelas técnicas de la región. Utilizando tecnologías como: HTML, CSS. Javascript, PHP, MySQL y librerías de Js.",
        date: "4 de junio 2023 - 10 de junio 2023",
    },

]

export const dataEducation = [
    {
        id: 1,
        title: "Ingeniería en sistemas informáticos",
        subtitle: "Universidad Abierta Interamericana",
        description: "Me encuentro estudiando Ingeniería en sistemas informáticos en la UAI, en la cual conjunto a mis estudios autónomos formarán un gran profesional. ",
        date: "Abril 2024 - Actualidad ",
    },
    {
        id: 2,
        title: "Tecnicatura secundaria en programación",
        subtitle: "Escuela Educación Secundaria Técnica N°1 Esteban Echeverría",
        description: "Me recibí de mi secundaria como técnico en programación (8.30 promedio) adquiriendo habilidades de desarrollo tanto como para frontend como backend, además del análisis de requisitos de sistemas, desarrollo del mismo, testeos y documentación.",
        date: "Abril 2017 - Diciembre 2023",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Notas periodisticas",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 2,
        text: "Olimpiadas",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Certificados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 2,
        text: "Reconocimientos",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },

    {
        icon: <Rocket />,
        title: "Documentación",
        description: "Realización de la documentación correspondiente junto a manuales de usuario para la utilización de sistemas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Sistema de gestión ALEM SUR",
        image: "/image-11.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Sistema de reservas de canchas LA PREVIA",
        image: "/image-22.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Juego web estilo LA PALABRA DEL DÍA",
        image: "/image-33.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Web de Armado y Reparación de PC",
        image: "/image-44.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Sistema de encuestas",
        image: "/image-55.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Sistema de administración E-commerce",
        image: "/image-66.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Ecommerce funcional",
        image: "/image-77.png",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "Diseño de E-commerce web",
        image: "/image-88.png",
        urlGithub: "#!",
        urlDemo: "#!",
    }
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Agustín Raffo",
        description:
            "Ha sido un gran gusto trabajar con Julián. Llevamos adelante grandes proyectos. Lo enfermo de mierda que es me encanta. (esa parte no pongas). Gran compañero de trabajo. Sin duda llegará lejos.",
        imageUrl: "/profile.jpeg",
    },
    {
        id: 2,
        name: "Leandro Juárez",
        description:
            "Trabajar con Julián ha sido una experiencia excelente. Su compromiso y atención al detalle aseguran que cada proyecto esté bien pensado y ejecutado a la perfección.",
        imageUrl: "/profile2.jpeg",
    },
    {
        id: 3,
        name: "Luciano O'Connell",
        description:
            "Julián cuando trabajamos en equipo aportaba dinamismo y soluciones rápidas, fue una experiencia muy cómoda trabajar con él y sin duda lo eligiría para cualquier tipo de proyecto. Una masa el loco, aparte la tiene grande",
        imageUrl: "/profile1.jpg",
    },
    {
        id: 4,
        name: "Agustín Elizalde",
        description:
            "Todos los proyectos que he podido ver de Julián fueron muy buenos y completos, sin duda una persona muy dedicada en su área.",
        imageUrl: "/profile3.jpeg",
    },
];