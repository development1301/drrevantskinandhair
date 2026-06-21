"use client";
import { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 3000;

export default function SignatureSequence3D() {
  const pointsRef = useRef();

  // Pre-calculate positions for the different phases
  const { follicle, dna, hair } = useMemo(() => {
    const f = new Float32Array(PARTICLE_COUNT * 3);
    const d = new Float32Array(PARTICLE_COUNT * 3);
    const h = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      
      // Follicle (A teardrop/bulb shape at the bottom)
      const theta = Math.random() * Math.PI * 2;
      const y = Math.random() * 4 - 2;
      const radius = Math.exp(y * 0.8) * Math.random() * 0.5;
      f[i3] = Math.cos(theta) * radius;
      f[i3 + 1] = y;
      f[i3 + 2] = Math.sin(theta) * radius;

      // DNA (Double Helix / Spiral)
      const t = (i / PARTICLE_COUNT) * Math.PI * 8; // 4 turns
      const strand = i % 2 === 0 ? 1 : -1;
      const offset = (Math.random() - 0.5) * 0.2;
      d[i3] = Math.cos(t) * 1.5 * strand + offset;
      d[i3 + 1] = (i / PARTICLE_COUNT) * 8 - 4;
      d[i3 + 2] = Math.sin(t) * 1.5 * strand + offset;

      // Hair Growth (Vertical lines exploding)
      h[i3] = (Math.random() - 0.5) * 8;
      h[i3 + 1] = Math.random() * 15 - 5;
      h[i3 + 2] = (Math.random() - 0.5) * 8;
    }
    return { follicle: f, dna: d, hair: h };
  }, []);

  // Initialize positions array
  const positions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  useFrame(() => {
    // 1. Get Scroll Progress for the specific section
    const section = document.getElementById('signature-sequence');
    let progress = 0;
    
    if (section) {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollDistance = rect.height + windowHeight;
      const scrolledDistance = windowHeight - rect.top;
      progress = Math.max(0, Math.min(1, scrolledDistance / totalScrollDistance));
    }

    // 2. Animate Particles based on Progress
    if (pointsRef.current) {
      const positionsArray = pointsRef.current.geometry.attributes.position.array;
      
      let source = follicle;
      let target = dna;
      let lerpFactor = 0;

      if (progress < 0.2) {
        // Phase 1: Follicle
        source = follicle; target = follicle; lerpFactor = 0;
      } else if (progress < 0.5) {
        // Morph Follicle -> DNA (Spiral)
        source = follicle; target = dna; lerpFactor = (progress - 0.2) / 0.3;
      } else if (progress < 0.8) {
        // Morph DNA -> Hair Explosion (Blow it)
        source = dna; target = hair; lerpFactor = (progress - 0.5) / 0.3;
      } else {
        // Exploded Hair (Fading out)
        source = hair; target = hair; lerpFactor = 0;
      }

      // Apply interpolation
      for (let i = 0; i < positionsArray.length; i++) {
        positionsArray[i] = THREE.MathUtils.lerp(source[i], target[i], lerpFactor);
        
        // Add some noise based on time
        if (progress > 0 && progress < 0.8) {
           positionsArray[i] += Math.sin(Date.now() * 0.001 + i) * 0.002;
        }
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
      
      // Rotate the whole cloud for cinematic effect
      pointsRef.current.rotation.y = progress * Math.PI * 2;
      pointsRef.current.rotation.x = progress * 0.5;

      // Particle opacity
      if (progress > 0 && progress < 0.8) {
        pointsRef.current.material.opacity = Math.min(1, progress * 5) * (1 - Math.max(0, (progress - 0.7) * 10));
      } else {
        pointsRef.current.material.opacity = 0;
      }
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#D4A24C"
          transparent
          opacity={0}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
    </group>
  );
}
