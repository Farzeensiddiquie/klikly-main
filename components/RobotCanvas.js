"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";

function RobotModel({ url }) {
  const group = useRef();
  const [modelLoaded, setModelLoaded] = useState(false);
  
  let scene, animations;
  try {
    const gltf = useGLTF(url);
    scene = gltf.scene;
    animations = gltf.animations;
  } catch (error) {
    console.error("Failed to load model:", error);
    return null;
  }

  const { actions } = useAnimations(animations, group);
  const mouse = useRef(new THREE.Vector2());
  const head = useRef();

  // Play the first animation when loaded
  useEffect(() => {
    setModelLoaded(true);
    if (!actions || Object.keys(actions).length === 0) return;
    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      firstAction.clampWhenFinished = true;
      firstAction.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  // Detect head bone if present
  useEffect(() => {
    if (!scene) return;
    scene.traverse((child) => {
      if (child.name.toLowerCase().includes("head")) head.current = child;
    });
  }, [scene]);

  // Track mouse X movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (typeof window === "undefined") return;
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    };
    typeof window !== "undefined" && window.addEventListener("mousemove", handleMouseMove);
    return () => {
      typeof window !== "undefined" && window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (!group.current) return;

    group.current.scale.set(3, 3, 3);
    const targetY = mouse.current.x * 0.5;

    if (head.current)
      head.current.rotation.y += (targetY - head.current.rotation.y) * 0.1;
    else group.current.rotation.y += (targetY - group.current.rotation.y) * 0.08;
  });

  if (!modelLoaded) return null;
  return <primitive ref={group} object={scene} position={[0, -1.1, 0]} />;
}

export default function RobotCanvas() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="md:w-[40vw] w-[80vw] md:h-[80vh] h-[70vh] bg-transparent rounded-lg" />
    );
  }

  return (
    <div className="md:w-[40vw] w-[80vw] md:h-[80vh] h-[70vh] bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <RobotModel url="/futuristic_flying_animated_robot_-_low_poly.glb" />
      </Canvas>
    </div>
  );
}

// ✅ Preload the model for instant appearance
if (typeof window !== "undefined") {
  useGLTF.preload("/futuristic_flying_animated_robot_-_low_poly.glb");
}
