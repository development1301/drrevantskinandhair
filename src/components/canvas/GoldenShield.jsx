"use client";
import { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

export default function GoldenShield() {
  const meshRef = useRef();
  
  // Load the logo texture
  const colorMap = useLoader(TextureLoader, '/logo.png');

  useFrame((state) => {
    if (meshRef.current) {
      // Magnetic mouse rotation effect
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
      meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[2.5, 0, 0]} scale={[3, 3, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial 
        map={colorMap}
        transparent={true}
        alphaTest={0.01}
        metalness={0.9}
        roughness={0.1}
        emissive={colorMap}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}
