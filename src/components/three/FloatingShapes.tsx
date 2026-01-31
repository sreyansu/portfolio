"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShapesProps {
    count?: number;
    radius?: number;
}

function FloatingShape({ position, rotation, scale, color }: {
    position: [number, number, number];
    rotation: [number, number, number];
    scale: number;
    color: string;
}) {
    const meshRef = useRef<THREE.Mesh>(null);
    const speed = useMemo(() => 0.2 + Math.random() * 0.3, []);
    const rotationSpeed = useMemo(() => ({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
    }), []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed.x;
            meshRef.current.rotation.y += rotationSpeed.y;
            meshRef.current.position.y =
                position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.3;
        }
    });

    const geometry = useMemo(() => {
        const shapes = [
            new THREE.IcosahedronGeometry(1, 0),
            new THREE.OctahedronGeometry(1, 0),
            new THREE.TetrahedronGeometry(1, 0),
            new THREE.TorusGeometry(0.7, 0.3, 8, 16),
        ];
        return shapes[Math.floor(Math.random() * shapes.length)];
    }, []);

    return (
        <mesh
            ref={meshRef}
            position={position}
            rotation={rotation}
            scale={scale}
            geometry={geometry}
        >
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.6}
                roughness={0.4}
                metalness={0.8}
            />
        </mesh>
    );
}

export default function FloatingShapes({ count = 15, radius = 8 }: FloatingShapesProps) {
    const shapes = useMemo(() => {
        const colors = ["#a78bfa", "#c4b5fd", "#f0abfc", "#8b5cf6", "#7c3aed"];
        return Array.from({ length: count }, (_, i) => {
            const angle = (i / count) * Math.PI * 2;
            const r = radius * (0.5 + Math.random() * 0.5);
            return {
                position: [
                    Math.cos(angle) * r,
                    (Math.random() - 0.5) * 6,
                    Math.sin(angle) * r - 5,
                ] as [number, number, number],
                rotation: [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                ] as [number, number, number],
                scale: 0.3 + Math.random() * 0.4,
                color: colors[Math.floor(Math.random() * colors.length)],
            };
        });
    }, [count, radius]);

    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#a78bfa" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f0abfc" />
            {shapes.map((props, i) => (
                <FloatingShape key={i} {...props} />
            ))}
        </>
    );
}
