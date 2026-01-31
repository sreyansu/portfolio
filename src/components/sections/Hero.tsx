"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("@/components/three/Scene3D"), {
    ssr: false,
});
const AvatarModel = dynamic(
    () => import("@/components/three/AvatarModel"),
    { ssr: false }
);

// Animated letter component with hover effects
function AnimatedLetter({ char, index, delay }: { char: string; index: number; delay: number }) {
    return (
        <motion.span
            className="inline-block cursor-pointer transition-all duration-200"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.5,
                delay: delay + index * 0.03,
                ease: "easeOut"
            }}
            whileHover={{
                y: -12,
                scale: 1.1,
                color: "var(--accent)",
                textShadow: "0 0 30px var(--accent)",
                transition: { duration: 0.15 }
            }}
            whileTap={{ scale: 0.95 }}
            style={{
                WebkitTextStroke: "2px var(--text)",
                WebkitTextFillColor: "transparent",
            }}
        >
            {char}
        </motion.span>
    );
}

// Name row component
function AnimatedName({ name, baseDelay }: { name: string; baseDelay: number }) {
    return (
        <div className="overflow-hidden">
            <motion.h1
                className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.95] tracking-[-0.03em] flex flex-wrap"
            >
                {name.split("").map((char, i) => (
                    <AnimatedLetter key={i} char={char} index={i} delay={baseDelay} />
                ))}
            </motion.h1>
        </div>
    );
}

export default function Hero() {
    return (
        <section
            id="home"
            className="relative h-screen flex items-center"
        >
            {/* 3D Avatar Background */}
            <div className="absolute right-0 top-[15%] w-[450px] h-[75vh] md:w-[550px] lg:w-[650px] xl:w-[700px]">
                <Scene3D className="opacity-95">
                    <AvatarModel />
                </Scene3D>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent z-[1] pointer-events-none" />

            {/* Content */}
            <div className="container relative z-10 px-6 mx-auto">
                <div className="max-w-3xl space-y-5">
                    {/* GIANT Interactive Name - All Outline Style */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-0"
                    >
                        <AnimatedName name="SREYANSU" baseDelay={0.2} />
                        <AnimatedName name="SEKHAR" baseDelay={0.4} />
                        <AnimatedName name="MOHANTY" baseDelay={0.6} />
                    </motion.div>

                    {/* Role & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        className="max-w-lg space-y-3 pt-2"
                    >
                        <div className="flex items-center gap-3 text-base md:text-lg">
                            <span className="w-10 h-[2px] bg-accent" />
                            <span className="font-semibold text-text">Full Stack Developer</span>
                            <span className="w-2 h-2 rounded-full bg-accent" />
                            <span className="font-semibold text-text">AI Enthusiast</span>
                        </div>
                        <p className="text-text-muted leading-relaxed text-base md:text-lg">
                            Building <span className="text-accent font-semibold">production-grade</span> web
                            applications. Turning complex ideas into{" "}
                            <span className="text-accent font-semibold">real, working systems</span>.
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="flex flex-wrap items-center gap-3 pt-2"
                    >
                        <a href="#projects" className="magnetic-btn group">
                            <span className="flex items-center gap-2">
                                View My Work
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </span>
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full border-2 border-text/20 text-text hover:border-accent hover:text-accent transition-all font-semibold text-sm md:text-base"
                        >
                            Let&apos;s Talk
                        </a>
                    </motion.div>

                    {/* Stats Row */}
                    {/* <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex flex-wrap gap-10 pt-6 border-t border-border/30"
                    >
                        {[
                            { number: "10+", label: "Projects" },
                            { number: "2+", label: "Internships" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                className="space-y-0.5"
                                whileHover={{ scale: 1.05 }}
                            >
                                <p className="text-3xl md:text-4xl font-black text-accent">{stat.number}</p>
                                <p className="text-xs text-text-muted uppercase tracking-wider font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div> */}
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-text-muted uppercase tracking-widest font-medium">
                        Scroll
                    </span>
                    <div className="w-[2px] h-12 bg-gradient-to-b from-accent to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
