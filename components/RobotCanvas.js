"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { Suspense, useRef, useEffect } from "react";
import * as THREE from "three";

function RobotModel({ url }) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);
  const mouse = useRef(new THREE.Vector2());
  const head = useRef();

  // Play the first animation when loaded
  useEffect(() => {
    const firstAction = Object.values(actions)[0];
    if (firstAction) firstAction.reset().fadeIn(0.5).play();
  }, [actions]);

  // Detect head bone if present
  useEffect(() => {
    scene.traverse((child) => {
      if (child.name.toLowerCase().includes("head")) head.current = child;
    });
  }, [scene]);

  // Track mouse X movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!group.current) return;

    group.current.scale.set(3, 3, 3);
    const targetY = mouse.current.x * 0.5;

    if (head.current)
      head.current.rotation.y += (targetY - head.current.rotation.y) * 0.1;
    else group.current.rotation.y += (targetY - group.current.rotation.y) * 0.08;
  });

  return <primitive ref={group} object={scene} position={[0, -1.1, 0]} />;
}

// Optional fallback loader (in case of very slow network)
function Loader() {
  return (
    <div className="flex items-center justify-center h-full text-white text-sm font-light animate-pulse">
      Loading 3D Model...
    </div>
  );
}

export default function RobotCanvas() {
  return (
    <div className="md:w-[40vw] w-[80vw] md:h-[80vh] h-[70vh] bg-transparent">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Suspense fallback={<Loader />}>
          <RobotModel url="/futuristic_flying_animated_robot_-_low_poly.glb" />
        </Suspense>
      </Canvas>
    </div>
  );
}

// ✅ Preload the model for instant appearance
useGLTF.preload("/futuristic_flying_animated_robot_-_low_poly.glb");
