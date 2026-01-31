"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Scene3D = dynamic(() => import("@/components/three/Scene3D"), {
    ssr: false,
});
const AvatarModel = dynamic(
    () => import("@/components/three/AvatarModel"),
    { ssr: false }
);

// Hook to detect mobile
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
}

// Simplified animated letter for mobile (no hover effects)
function AnimatedLetter({ char, index, delay, isMobile }: { char: string; index: number; delay: number; isMobile: boolean }) {
    if (isMobile) {
        // Simpler animation for mobile - no hover effects
        return (
            <motion.span
                className="inline-block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.4,
                    delay: delay + index * 0.02,
                    ease: "easeOut"
                }}
                style={{
                    WebkitTextStroke: "1.5px var(--text)",
                    WebkitTextFillColor: "transparent",
                }}
            >
                {char}
            </motion.span>
        );
    }

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
function AnimatedName({ name, baseDelay, isMobile }: { name: string; baseDelay: number; isMobile: boolean }) {
    return (
        <div className="overflow-hidden">
            <motion.h1
                className="text-[2.2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-black leading-[0.95] tracking-[-0.03em] flex flex-wrap"
            >
                {name.split("").map((char, i) => (
                    <AnimatedLetter key={i} char={char} index={i} delay={baseDelay} isMobile={isMobile} />
                ))}
            </motion.h1>
        </div>
    );
}

export default function Hero() {
    const isMobile = useIsMobile();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center py-20 md:py-0"
        >
            {/* 3D Avatar - Hidden on mobile for performance, adjusted for tablet */}
            {!isMobile && (
                <div className="absolute right-0 top-[15%] w-[350px] h-[60vh] md:w-[450px] md:h-[70vh] lg:w-[550px] lg:h-[75vh] xl:w-[650px]">
                    <Scene3D className="opacity-90">
                        <AvatarModel />
                    </Scene3D>
                </div>
            )}

            {/* Mobile-only decorative gradient */}
            {isMobile && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-purple-500/15 rounded-full blur-3xl" />
                </div>
            )}

            {/* Gradient Overlay - adjusted for mobile */}
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 md:via-background/85 to-background md:to-transparent z-[1] pointer-events-none" />

            {/* Content */}
            <div className="container relative z-10 px-4 sm:px-6 mx-auto">
                <div className="max-w-3xl space-y-4 md:space-y-5">
                    {/* GIANT Interactive Name */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-0"
                    >
                        <AnimatedName name="SREYANSU" baseDelay={0.2} isMobile={isMobile} />
                        <AnimatedName name="SEKHAR" baseDelay={isMobile ? 0.3 : 0.4} isMobile={isMobile} />
                        <AnimatedName name="MOHANTY" baseDelay={isMobile ? 0.4 : 0.6} isMobile={isMobile} />
                    </motion.div>

                    {/* Role & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: isMobile ? 0.6 : 1.0 }}
                        className="max-w-lg space-y-3 pt-2"
                    >
                        <div className="flex flex-wrap items-center gap-2 md:gap-3 text-sm md:text-lg">
                            <span className="w-6 md:w-10 h-[2px] bg-accent" />
                            <span className="font-semibold text-text">Full Stack Developer</span>
                            <span className="w-1.5 md:w-2 h-1.5 md:h-2 rounded-full bg-accent" />
                            <span className="font-semibold text-text">AI Enthusiast</span>
                        </div>
                        <p className="text-text-muted leading-relaxed text-sm md:text-lg">
                            Building <span className="text-accent font-semibold">production-grade</span> web
                            applications. Turning complex ideas into{" "}
                            <span className="text-accent font-semibold">real, working systems</span>.
                        </p>
                    </motion.div>

                    {/* CTAs - Stack on mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: isMobile ? 0.7 : 1.1 }}
                        className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
                    >
                        <a href="#projects" className="magnetic-btn group text-center">
                            <span className="flex items-center justify-center gap-2">
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
                            className="px-6 py-3 rounded-full border-2 border-text/20 text-text hover:border-accent hover:text-accent transition-all font-semibold text-sm md:text-base text-center"
                        >
                            Let&apos;s Talk
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Hidden on very small screens */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: isMobile ? 1 : 1.5 }}
                className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-text-muted uppercase tracking-widest font-medium">
                        Scroll
                    </span>
                    <div className="w-[2px] h-10 md:h-12 bg-gradient-to-b from-accent to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
