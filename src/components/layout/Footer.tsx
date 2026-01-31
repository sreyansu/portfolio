"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="border-t border-border bg-background">
            <div className="container mx-auto px-6 py-16">
                {/* Big Name */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <Link href="#home">
                        <h3 className="text-6xl md:text-8xl font-bold font-[--font-playfair] text-text/5 hover:text-accent/20 transition-colors">
                            SSM
                        </h3>
                    </Link>
                </motion.div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-8 mb-12">
                    {footerLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-text-muted hover:text-accent transition-colors font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-center space-y-2">
                    <p className="text-text-muted text-sm">
                        © {new Date().getFullYear()} Sreyansu Sekhar Mohanty
                    </p>
                    <p className="text-text-muted/50 text-xs">
                        Designed & Built with Next.js, Three.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
