"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Active section detection
            const sections = navLinks.map((link) =>
                document.querySelector(link.href)
            );
            const scrollPos = window.scrollY + 200;

            sections.forEach((section, i) => {
                if (section) {
                    const top = (section as HTMLElement).offsetTop;
                    const height = (section as HTMLElement).offsetHeight;
                    if (scrollPos >= top && scrollPos < top + height) {
                        setActiveSection(navLinks[i].href.replace("#", ""));
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-border"
                    : "bg-transparent"
                }`}
        >
            <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="#home" className="group relative">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-2xl font-bold font-[--font-playfair]"
                    >
                        <span className="text-text group-hover:text-accent transition-colors">
                            S
                        </span>
                        <span className="text-accent">.</span>
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-2 text-sm font-medium group"
                            >
                                <span
                                    className={`relative z-10 transition-colors ${isActive ? "text-accent" : "text-text-muted group-hover:text-text"
                                        }`}
                                >
                                    {link.name}
                                </span>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-accent/10 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <ThemeToggle />

                    {/* CTA Button - Desktop */}
                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition-colors"
                    >
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        Hire Me
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden relative w-10 h-10 flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 flex flex-col gap-1.5">
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? 45 : 0,
                                    y: isMobileMenuOpen ? 8 : 0,
                                    width: isMobileMenuOpen ? "100%" : "100%",
                                }}
                                className="h-0.5 bg-text block origin-center"
                            />
                            <motion.span
                                animate={{
                                    opacity: isMobileMenuOpen ? 0 : 1,
                                    width: "60%",
                                }}
                                className="h-0.5 bg-text block"
                            />
                            <motion.span
                                animate={{
                                    rotate: isMobileMenuOpen ? -45 : 0,
                                    y: isMobileMenuOpen ? -8 : 0,
                                    width: isMobileMenuOpen ? "100%" : "80%",
                                }}
                                className="h-0.5 bg-text block origin-center"
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-surface border-b border-border overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block py-3 text-lg text-text-muted hover:text-accent transition-colors font-medium"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                                className="pt-4 mt-2 border-t border-border"
                            >
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                    Hire Me
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
