export const experiences = [
    {
        id: "elevate-labs",
        role: "Full Stack Web Developer Intern",
        company: "Elevate Labs",
        location: "Bengaluru, Karnataka (Remote)",
        period: "Aug 2025 – Sep 2025",
        description:
            "Built an end-to-end resume builder application with seamless PDF generation and AI-powered content suggestions.",
        achievements: [
            "Built end-to-end resume builder using Next.js, Node.js, and MongoDB with seamless PDF generation",
            "Designed modular async APIs, reducing load time by 45%",
            "Integrated OpenAI-powered content, improving resume quality and user engagement by 50%",
        ],
        tech: ["Next.js", "Node.js", "MongoDB", "OpenAI API"],
    },
    {
        id: "skill-dunia",
        role: "Web Developer Intern",
        company: "Skill Dunia",
        location: "Hyderabad, Telangana (Remote)",
        period: "Feb 2025 – Apr 2025",
        description:
            "Developed full-stack CRUD applications and integrated REST APIs for seamless data handling.",
        achievements: [
            "Designed and implemented end-to-end frontend CRUD operations using HTML, CSS, and JavaScript",
            "Integrated REST APIs for seamless data transfer",
            "Improved user data handling efficiency by 40%",
        ],
        tech: ["HTML", "CSS", "JavaScript", "REST APIs"],
    },
    {
        id: "aerotech-lead",
        role: "Web Developer Lead",
        company: "AeroTech Club, VSSUT",
        location: "Sambalpur, Odisha",
        period: "2023 – Present",
        description:
            "Leading technical development and web presence for the university's aviation technology club. Maintaining 100% website uptime and growing audience reach.",
        achievements: [
            "Maintained 100% website uptime",
            "Achieved 3K+ audience reach",
            "Increased engagement by 40%",
            "Led technical development team",
        ],
        tech: ["React.js", "Firebase", "Tailwind CSS", "SEO"],
    },
];

export const certifications = [
    "IBM RAG & Agentic AI",
    "Build Your Own Chatbot (IBM)",
    "Machine Learning (Internshala)",
    "Accenture UK Developer Simulation",
    "Data Science (Internshala)",
    "DocumentAI Pipeline",
];

export type Experience = (typeof experiences)[number];
