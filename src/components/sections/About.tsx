"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { IconType } from "react-icons";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

// Skill badge component with icon and brand color - optimized for mobile
function SkillBadge({ name, icon: Icon, color }: { name: string; icon?: IconType; color?: string }) {
    return (
        <span
            className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium border transition-all md:hover:scale-105 cursor-default bg-surface-alt border-border md:hover:border-current group"
            style={{
                '--brand-color': color || 'var(--accent)',
            } as React.CSSProperties}
        >
            {Icon && (
                <Icon
                    className="w-3 h-3 md:w-4 md:h-4 transition-colors flex-shrink-0"
                    style={{ color: color || 'currentColor' }}
                />
            )}
            <span className="text-text-muted group-hover:text-text transition-colors whitespace-nowrap">{name}</span>
        </span>
    );
}

// Animated marquee component - touch-friendly
function Marquee({ children, speed = 30 }: { children: React.ReactNode; speed?: number }) {
    return (
        <div className="flex overflow-hidden group">
            <motion.div
                className="flex gap-4 md:gap-8 flex-shrink-0 md:group-hover:[animation-play-state:paused]"
                animate={{ x: "-50%" }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: speed,
                        ease: "linear",
                    },
                }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
}

// Interactive concept item for marquee - no hover effects on mobile
function ConceptItem({ concept }: { concept: string }) {
    return (
        <span
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black text-text/[0.07] whitespace-nowrap cursor-default"
        >
            {concept}
        </span>
    );
}

export default function About() {
    return (
        <section id="about" className="relative overflow-hidden py-16 md:py-0">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="space-y-10 md:space-y-16"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="max-w-3xl">
                        <p className="text-accent font-semibold mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
                            About Me
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                            Building{" "}
                            <span className="relative inline-block">
                                digital
                                <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-accent/30 -skew-x-12 -z-10" />
                            </span>{" "}
                            experiences that{" "}
                            <span className="text-accent">matter</span>
                        </h2>
                    </motion.div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
                        {/* Left - Bio */}
                        <motion.div variants={itemVariants} className="space-y-4 md:space-y-6">
                            {/* Profile Card */}
                            <div className="bento-card p-5 md:p-8 space-y-4 md:space-y-6">
                                <div className="flex items-start gap-4 md:gap-6">
                                    {/* Avatar */}
                                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-accent/30">
                                        <img
                                            src="/image/Photo_SREYANSU_SEKHAR_MOHANTY_-_Copy-removebg-preview.png"
                                            alt="Sreyansu Sekhar Mohanty"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-lg md:text-2xl font-bold text-text mb-0.5 md:mb-1">
                                            Sreyansu Sekhar Mohanty
                                        </h3>
                                        <p className="text-accent font-medium text-sm md:text-base">Full Stack Developer</p>
                                        <p className="text-text-muted text-sm mt-2">
                                            B.Tech CSE @ VSSUT Burla
                                        </p>
                                    </div>
                                </div>

                                <div className="h-px bg-border" />

                                <p className="text-text-muted leading-relaxed">
                                    I specialize in building <span className="text-text font-medium">full-stack web applications</span> —
                                    from frontend dashboards to backend APIs. My core strength is turning
                                    complex ideas into <span className="text-accent font-medium">production-ready systems</span>.
                                </p>

                                <p className="text-text-muted leading-relaxed">
                                    I&apos;ve built multi-role platforms, payment flows, real-time logic,
                                    AI pipelines, and authentication systems — not just demos, but
                                    <span className="text-text font-medium"> complete business systems</span>.
                                </p>

                                {/* Quick Links */}
                                <div className="flex flex-wrap gap-3 pt-2">
                                    <a
                                        href="https://github.com/sreyansu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub
                                    </a>
                                    <a
                                        href="https://linkedin.com/in/sreyansu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 rounded-full border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                        LinkedIn
                                    </a>
                                </div>
                            </div>

                            {/* Education Cards */}
                            <div className="space-y-4">
                                {/* B.Tech */}
                                <div className="bento-card p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-text">B.Tech in Computer Science & Engineering</h4>
                                            <p className="text-text-muted text-sm">VSSUT, Sambalpur • 2023-2027</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-accent">8.58</p>
                                            <p className="text-xs text-text-muted uppercase tracking-wider">CGPA</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 12th */}
                                <div className="bento-card p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-text">Class XII (CBSE)</h4>
                                            <p className="text-text-muted text-sm">SBD International School, Bhadrak • 2022</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-accent">93%</p>
                                            <p className="text-xs text-text-muted uppercase tracking-wider">Score</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 10th */}
                                <div className="bento-card p-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-text">Class X (CBSE)</h4>
                                            <p className="text-text-muted text-sm">SBD International School, Bhadrak • 2020</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-3xl font-black text-accent">94.2%</p>
                                            <p className="text-xs text-text-muted uppercase tracking-wider">Score</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Skills */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            {/* Languages */}
                            <div className="bento-card p-6">
                                <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    Languages
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.languages.map((skill) => (
                                        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
                                    ))}
                                </div>
                            </div>

                            {/* Frontend */}
                            <div className="bento-card p-6">
                                <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    Frontend
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.frontend.map((skill) => (
                                        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
                                    ))}
                                </div>
                            </div>

                            {/* Backend */}
                            <div className="bento-card p-6">
                                <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    Backend & Databases
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.backend.map((skill) => (
                                        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
                                    ))}
                                </div>
                            </div>

                            {/* Tools */}
                            <div className="bento-card p-6">
                                <h4 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-accent" />
                                    Tools & Platforms
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.tools.map((skill) => (
                                        <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} color={skill.color} />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scrolling Tech Marquee with Hover Interactivity */}
                    <motion.div
                        variants={itemVariants}
                        className="py-8 border-y border-border/50 -mx-6 px-6"
                    >
                        <Marquee speed={40}>
                            {skills.concepts.map((concept, i) => (
                                <ConceptItem key={i} concept={concept} />
                            ))}
                        </Marquee>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
