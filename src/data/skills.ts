import {
    SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript,
    SiHtml5, SiCss3, SiReact, SiNextdotjs, SiTailwindcss,
    SiFramer, SiThreedotjs, SiNodedotjs, SiFirebase, SiSupabase,
    SiMongodb, SiSqlite, SiGit, SiGithub, SiDocker,
    SiGooglecloud
} from "react-icons/si";
import { TbApi, TbDatabase } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import { IconType } from "react-icons";

interface Skill {
    name: string;
    level: number;
    icon?: IconType;
    color?: string;
}

export const skills: {
    languages: Skill[];
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
    concepts: string[];
} = {
    languages: [
        { name: "C", level: 85, icon: SiC, color: "#A8B9CC" },
        { name: "C++", level: 90, icon: SiCplusplus, color: "#00599C" },
        { name: "Python", level: 88, icon: SiPython, color: "#3776AB" },
        { name: "JavaScript", level: 92, icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", level: 85, icon: SiTypescript, color: "#3178C6" },
        { name: "SQL", level: 80, icon: TbDatabase, color: "#336791" },
        { name: "HTML5", level: 95, icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", level: 90, icon: SiCss3, color: "#1572B6" },
    ],
    frontend: [
        { name: "React.js", level: 92, icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", level: 88, icon: SiNextdotjs, color: "#ffffff" },
        { name: "Tailwind CSS", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", level: 75, icon: SiFramer, color: "#0055FF" },
        { name: "Three.js", level: 70, icon: SiThreedotjs, color: "#ffffff" },
    ],
    backend: [
        { name: "Node.js", level: 85, icon: SiNodedotjs, color: "#339933" },
        { name: "REST APIs", level: 90, icon: TbApi, color: "#FF6C37" },
        { name: "Firebase", level: 88, icon: SiFirebase, color: "#FFCA28" },
        { name: "Supabase", level: 85, icon: SiSupabase, color: "#3FCF8E" },
        { name: "MongoDB", level: 82, icon: SiMongodb, color: "#47A248" },
        { name: "SQLite", level: 78, icon: SiSqlite, color: "#003B57" },
    ],
    tools: [
        { name: "Git", level: 90, icon: SiGit, color: "#F05032" },
        { name: "GitHub", level: 90, icon: SiGithub, color: "#ffffff" },
        { name: "Docker", level: 70, icon: SiDocker, color: "#2496ED" },
        { name: "Google Cloud", level: 72, icon: SiGooglecloud, color: "#4285F4" },
        { name: "VS Code", level: 95, icon: VscCode, color: "#007ACC" },
    ],
    concepts: [
        "Data Structures & Algorithms",
        "Operating Systems",
        "DBMS",
        "Network Security",
        "OOP",
        "Software Engineering",
        "Computer Vision",
        "Machine Learning",
    ],
};

export type SkillCategory = keyof typeof skills;
