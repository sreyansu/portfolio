"use client";

import { useRef, Suspense } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function Avatar() {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/models/avatar.glb");
    const { mouse } = useThree();

    // Base rotation - facing the user
    const baseRotationY = -Math.PI / 2;

    useFrame((state) => {
        if (groupRef.current) {
            // Look towards user with subtle mouse-follow
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                baseRotationY + mouse.x * 0.15,
                0.06
            );

            // Very slight tilt based on vertical mouse
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                -mouse.y * 0.05,
                0.06
            );
        }
    });

    return (
        <group
            ref={groupRef}
            scale={6}
            position={[0, -2.8, 0]}
            rotation={[0, -Math.PI / 2, 0]}
        >
            <primitive object={scene} />
        </group>
    );
}

export default function AvatarModel() {
    return (
        <>
            {/* Higher contrast lighting setup */}
            <ambientLight intensity={0.4} />

            {/* Strong key light for contrast */}
            <directionalLight
                position={[3, 4, 5]}
                intensity={2.5}
                castShadow
                shadow-mapSize={[1024, 1024]}
            />

            {/* Weaker fill light for more contrast */}
            <directionalLight
                position={[-3, 2, 3]}
                intensity={0.5}
            />

            {/* Subtle backlight for depth */}
            <directionalLight
                position={[0, 2, -3]}
                intensity={0.8}
            />

            {/* Environment lighting */}
            <Environment preset="apartment" />

            {/* Avatar */}
            <Suspense fallback={null}>
                <Avatar />
            </Suspense>
        </>
    );
}

// Preload the model
useGLTF.preload("/models/avatar.glb");
