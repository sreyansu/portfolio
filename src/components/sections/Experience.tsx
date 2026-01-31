"use client";

import { motion } from "framer-motion";
import { experiences, certifications } from "@/data/experience";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
};

export default function Experience() {
    return (
        <section id="experience" className="relative py-16 md:py-0">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="space-y-10 md:space-y-16"
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="max-w-2xl">
                        <p className="text-accent font-medium mb-2 md:mb-4 uppercase tracking-wider text-xs md:text-sm">
                            Experience
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[--font-playfair] leading-tight">
                            Where I&apos;ve{" "}
                            <span className="accent-underline">worked</span> &{" "}
                            <span className="gradient-text">learned</span>
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-5 gap-6 md:gap-12">
                        {/* Experience Timeline */}
                        <div className="lg:col-span-3 space-y-0">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    variants={itemVariants}
                                    className="relative group"
                                >
                                    {/* Connection Line */}
                                    {index < experiences.length - 1 && (
                                        <div className="absolute left-[27px] top-[60px] w-[2px] h-[calc(100%-32px)] bg-gradient-to-b from-accent to-border" />
                                    )}

                                    <div className="flex gap-3 md:gap-6 pb-8 md:pb-12">
                                        {/* Timeline Marker */}
                                        <div className="relative flex-shrink-0 hidden sm:block">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-accent/10 border-2 border-accent flex items-center justify-center text-accent font-bold text-sm md:text-lg font-[--font-playfair] group-hover:bg-accent group-hover:text-white transition-all">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 bento-card">
                                            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-text mb-1">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-accent font-medium">{exp.company}</p>
                                                </div>
                                                <span className="px-4 py-2 rounded-full bg-surface-alt text-text-muted text-sm font-medium">
                                                    {exp.period}
                                                </span>
                                            </div>

                                            <p className="text-text-muted mb-4 leading-relaxed">
                                                {exp.description}
                                            </p>

                                            {/* Key Achievements */}
                                            <div className="space-y-2 mb-4">
                                                {exp.achievements.slice(0, 3).map((achievement, i) => (
                                                    <div
                                                        key={i}
                                                        className="flex items-start gap-3 text-sm"
                                                    >
                                                        <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                            <svg
                                                                className="w-3 h-3 text-accent"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={3}
                                                                    d="M5 13l4 4L19 7"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <span className="text-text-muted">{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tech */}
                                            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                                                {exp.tech.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-2 py-1 rounded-md bg-accent/5 text-accent text-xs font-medium"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <div className="bento-card sticky top-24">
                                <h3 className="text-xl font-bold text-text mb-6 font-[--font-playfair]">
                                    Certifications
                                </h3>
                                <div className="space-y-3">
                                    {certifications.map((cert, index) => (
                                        <motion.div
                                            key={cert}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="group flex items-center gap-4 p-4 rounded-xl bg-surface-alt hover:bg-accent transition-colors cursor-default"
                                        >
                                            <div className="w-10 h-10 rounded-xl bg-accent/10 group-hover:bg-white/20 flex items-center justify-center text-accent group-hover:text-white transition-colors">
                                                <svg
                                                    className="w-5 h-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                                    />
                                                </svg>
                                            </div>
                                            <span className="text-text-muted group-hover:text-white transition-colors font-medium">
                                                {cert}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
