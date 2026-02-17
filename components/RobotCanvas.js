"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

/* ============================= */
/* ======== ROBOT MODEL ======== */
/* ============================= */

function RobotModel({ url }) {
  const group = useRef();
  const head = useRef();
  const mouse = useRef(new THREE.Vector2());

  const { scene, animations } = useGLTF(url);
  const { actions } = useAnimations(animations, group);

  /* Play first animation */
  useEffect(() => {
    if (!actions) return;

    const firstAction = Object.values(actions)[0];
    if (firstAction) {
      firstAction.reset().fadeIn(0.5).play();
    }
  }, [actions]);

  /* Detect head bone + set scale once */
  useEffect(() => {
    if (!scene) return;

    scene.traverse((child) => {
      if (child.name.toLowerCase().includes("head")) {
        head.current = child;
      }
    });

    if (group.current) {
      group.current.scale.set(3, 3, 3);
    }
  }, [scene]);

  /* Mouse tracking */
  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  /* Smooth rotation */
  useFrame(() => {
    const targetY = mouse.current.x * 0.5;

    if (head.current) {
      head.current.rotation.y +=
        (targetY - head.current.rotation.y) * 0.1;
    } else if (group.current) {
      group.current.rotation.y +=
        (targetY - group.current.rotation.y) * 0.08;
    }
  });

  return (
    <primitive
      ref={group}
      object={scene}
      position={[0, -1.1, 0]}
    />
  );
}

/* ============================= */
/* ======== CANVAS WRAPPER ===== */
/* ============================= */

export default function RobotCanvas() {
  return (
    <div className="md:w-[40vw] w-[80vw] md:h-[80vh] h-[70vh] bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <RobotModel url="/futuristic_flying_animated_robot_-_low_poly.glb" />
      </Canvas>
    </div>
  );
}

/* Preload model */
useGLTF.preload("/futuristic_flying_animated_robot_-_low_poly.glb");
  