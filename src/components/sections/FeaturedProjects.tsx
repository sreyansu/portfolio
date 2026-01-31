"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { useRef, useState, useEffect } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

// Hook to detect touch device
function useIsTouchDevice() {
    const [isTouch, setIsTouch] = useState(false);

    useEffect(() => {
        setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    return isTouch;
}

function ProjectCard({ project, index, isTouch }: { project: Project; index: number; isTouch: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isTouch || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const isLarge = index === 0 || index === 3;

    return (
        <motion.div
            ref={cardRef}
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={isTouch ? {} : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`bento-card glow-effect group cursor-pointer ${isLarge ? "md:span-2 md:row-2" : ""
                }`}
        >
            <div style={isTouch ? {} : { transform: "translateZ(50px)" }} className="h-full flex flex-col">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-3 md:mb-4">
                    <span className="px-2.5 md:px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium uppercase tracking-wider">
                        {project.category}
                    </span>
                    <div className="flex gap-2">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                        )}
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-surface-alt flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/10 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>

                {/* Number - smaller on mobile */}
                <span className="text-4xl md:text-6xl font-bold text-text/5 font-[--font-playfair] mb-1 md:mb-2">
                    0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-text mb-2 md:mb-3 group-hover:text-accent transition-colors font-[--font-playfair]">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-xs md:text-sm leading-relaxed mb-3 md:mb-4 flex-1 line-clamp-3 md:line-clamp-none">
                    {isLarge ? project.longDescription || project.description : project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto pt-3 md:pt-4 border-t border-border">
                    {project.tech.slice(0, isLarge ? 6 : 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-0.5 md:py-1 rounded-md bg-surface-alt text-xs text-text-muted"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function FeaturedProjects() {
    const featuredProjects = projects.filter((p) => p.featured);
    const isTouch = useIsTouchDevice();

    return (
        <section id="projects" className="relative bg-surface-alt/50 py-16 md:py-0">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="space-y-8 md:space-y-12"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
                        <div className="max-w-2xl">
                            <p className="text-accent font-medium mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
                                Selected Work
                            </p>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[--font-playfair] leading-tight">
                                Projects that{" "}
                                <span className="gradient-text">showcase</span> my craft
                            </h2>
                        </div>
                        <a
                            href="https://github.com/sreyansu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="magnetic-btn group self-start"
                        >
                            <span className="flex items-center gap-2">
                                View All
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </a>
                    </motion.div>

                    {/* Projects Grid - simpler on mobile */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} isTouch={isTouch} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
