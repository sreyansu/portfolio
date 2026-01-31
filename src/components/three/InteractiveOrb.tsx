"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Ring } from "@react-three/drei";
import * as THREE from "three";

export default function InteractiveOrb() {
    const mainOrbRef = useRef<THREE.Mesh>(null);
    const ringRef1 = useRef<THREE.Mesh>(null);
    const ringRef2 = useRef<THREE.Mesh>(null);
    const { mouse } = useThree();

    useFrame((state) => {
        const time = state.clock.elapsedTime;

        // Main orb - subtle mouse follow
        if (mainOrbRef.current) {
            mainOrbRef.current.rotation.x = time * 0.1;
            mainOrbRef.current.rotation.y = time * 0.15;
            mainOrbRef.current.position.x = THREE.MathUtils.lerp(
                mainOrbRef.current.position.x,
                mouse.x * 0.5,
                0.02
            );
            mainOrbRef.current.position.y = THREE.MathUtils.lerp(
                mainOrbRef.current.position.y,
                mouse.y * 0.3,
                0.02
            );
        }

        // Rotating rings
        if (ringRef1.current) {
            ringRef1.current.rotation.x = time * 0.3;
            ringRef1.current.rotation.y = time * 0.2;
        }
        if (ringRef2.current) {
            ringRef2.current.rotation.x = -time * 0.25;
            ringRef2.current.rotation.z = time * 0.15;
        }
    });

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} color="#e94560" />
            <directionalLight position={[-10, -10, -5]} intensity={0.6} color="#667eea" />
            <pointLight position={[0, 0, 5]} intensity={0.8} color="#ffffff" />
            <pointLight position={[-5, 5, 0]} intensity={0.4} color="#0f3460" />

            {/* Main Distorted Orb */}
            <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
                <Sphere ref={mainOrbRef} args={[1.8, 128, 128]} position={[0, 0, 0]}>
                    <MeshDistortMaterial
                        color="#e94560"
                        attach="material"
                        distort={0.35}
                        speed={2.5}
                        roughness={0.15}
                        metalness={0.9}
                    />
                </Sphere>
            </Float>

            {/* Inner glowing core */}
            <Sphere args={[0.6, 32, 32]} position={[0, 0, 0]}>
                <meshBasicMaterial color="#ffffff" transparent opacity={0.3} />
            </Sphere>

            {/* Orbiting Ring 1 */}
            <Ring
                ref={ringRef1}
                args={[2.2, 2.35, 64]}
                position={[0, 0, 0]}
            >
                <meshBasicMaterial color="#e94560" transparent opacity={0.6} side={THREE.DoubleSide} />
            </Ring>

            {/* Orbiting Ring 2 */}
            <Ring
                ref={ringRef2}
                args={[2.6, 2.7, 64]}
                position={[0, 0, 0]}
            >
                <meshBasicMaterial color="#667eea" transparent opacity={0.4} side={THREE.DoubleSide} />
            </Ring>

            {/* Floating particles */}
            {Array.from({ length: 60 }).map((_, i) => (
                <FloatingParticle key={i} index={i} />
            ))}

            {/* Small orbiting spheres */}
            {Array.from({ length: 6 }).map((_, i) => (
                <OrbitingSphere key={`orb-${i}`} index={i} />
            ))}
        </>
    );
}

function FloatingParticle({ index }: { index: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const radius = 2.8 + Math.random() * 2;
    const speed = 0.2 + Math.random() * 0.3;
    const offset = (index / 60) * Math.PI * 2;
    const yOffset = (Math.random() - 0.5) * 3;
    const size = 0.015 + Math.random() * 0.025;

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.elapsedTime * speed + offset;
            meshRef.current.position.x = Math.cos(time) * radius;
            meshRef.current.position.z = Math.sin(time) * radius;
            meshRef.current.position.y = yOffset + Math.sin(time * 2) * 0.4;
        }
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[size, 8, 8]} />
            <meshBasicMaterial
                color={index % 3 === 0 ? "#e94560" : index % 3 === 1 ? "#667eea" : "#ffffff"}
                transparent
                opacity={0.8}
            />
        </mesh>
    );
}

function OrbitingSphere({ index }: { index: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const radius = 3 + index * 0.3;
    const speed = 0.4 - index * 0.05;
    const offset = (index / 6) * Math.PI * 2;

    useFrame((state) => {
        if (meshRef.current) {
            const time = state.clock.elapsedTime * speed + offset;
            meshRef.current.position.x = Math.cos(time) * radius;
            meshRef.current.position.z = Math.sin(time) * radius - 1;
            meshRef.current.position.y = Math.sin(time * 1.5) * 0.8;
        }
    });

    return (
        <Float speed={3} floatIntensity={0.3}>
            <Sphere ref={meshRef} args={[0.08 + index * 0.02, 16, 16]}>
                <MeshDistortMaterial
                    color={index % 2 === 0 ? "#e94560" : "#667eea"}
                    distort={0.3}
                    speed={3}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
}
