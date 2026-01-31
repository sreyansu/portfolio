"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Preload } from "@react-three/drei";

interface Scene3DProps {
    children: React.ReactNode;
    className?: string;
}

export default function Scene3D({ children, className = "" }: Scene3DProps) {
    return (
        <div className={`canvas-container ${className}`}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 75 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    {children}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    );
}
