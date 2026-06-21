"use client";
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 8000;
const AMBIENT_COUNT = 2000;
const TOTAL_HAIRS = 200; // Massively increased density

export default function Journey3D({ scrollProgress }) {
  const groupRef = useRef();
  const skinRef = useRef();
  const mainHairRef = useRef();
  const secondaryHairsRef = useRef([]);
  const pointsRef = useRef();
  const ambientRef = useRef();

  // Create base geometric states for the particles (Finale Explosion)
  const { explosion, logo } = useMemo(() => {
    const e = new Float32Array(PARTICLE_COUNT * 3);
    const l = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;
      // Explosion (Bursting outward from center)
      const u = Math.random();
      const v = Math.random();
      const thetaExp = u * 2.0 * Math.PI;
      const phiExp = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * 10;
      e[i3] = r * Math.sin(phiExp) * Math.cos(thetaExp);
      e[i3 + 1] = r * Math.sin(phiExp) * Math.sin(thetaExp) + 2;
      e[i3 + 2] = r * Math.cos(phiExp);

      // Logo (A glowing shield / abstract crest shape)
      const t = (i / PARTICLE_COUNT) * Math.PI * 2;
      const shieldX = Math.sin(t) * 4;
      const shieldY = Math.cos(t) * 4 - (Math.sin(t) * Math.sin(t) * 2);
      const inside = Math.random();
      l[i3] = shieldX * inside + (Math.random() - 0.5) * 1;
      l[i3 + 1] = shieldY * inside + (Math.random() - 0.5) * 1 + 2;
      l[i3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    return { explosion: e, logo: l };
  }, []);

  const particlePositions = useMemo(() => new Float32Array(PARTICLE_COUNT * 3), []);

  // Pre-calculate ambient floating elements for visual density
  const ambientPositions = useMemo(() => {
    const pos = new Float32Array(AMBIENT_COUNT * 3);
    for (let i = 0; i < AMBIENT_COUNT; i++) {
      const i3 = i * 3;
      pos[i3] = (Math.random() - 0.5) * 20;
      pos[i3 + 1] = (Math.random() - 0.5) * 20;
      pos[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  // Pre-calculate random positions for the secondary hairs
  const hairData = useMemo(() => {
    const data = [];
    for (let i = 0; i < TOTAL_HAIRS; i++) {
      // Direct mapping to the 0-33-66-100 logic
      let phase = 0;
      if (i < 20) phase = 1; // Month 1 (Sparse) - 10% of hairs
      else if (i < 80) phase = 2; // Month 3 (Thin) - 40% of hairs
      else if (i < 150) phase = 3; // Month 6 (Medium) - 75% of hairs
      else phase = 4; // Month 12 (Dense) - 100% of hairs

      const r = Math.random() * 3.5 + 0.2; // Spread around the center
      const theta = Math.random() * Math.PI * 2;
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      
      data.push({ x, z, phase, id: i });
    }
    return data;
  }, []);

  useFrame((state) => {
    // BUG FIX: Must call .get() to extract the value from a Framer Motion MotionValue!
    // Without this, p becomes undefined -> NaN -> WebGL crashes silently.
    const p = scrollProgress.get();

    // Gentle camera rotation
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05 + (p * Math.PI * 0.5);
      groupRef.current.position.y = -1 - (p * 1); // Pan down slowly
    }

    // Ambient floating particles movement
    if (ambientRef.current) {
      ambientRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      ambientRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }

    // --- ANIMATE PROCEDURAL CROSS-SECTION ---
    const showCrossSection = p < 0.88;
    
    if (skinRef.current) {
      skinRef.current.visible = showCrossSection;
      skinRef.current.material.opacity = 1 - Math.max(0, (p - 0.8) * 10);
    }

    if (mainHairRef.current && showCrossSection) {
      // Main hair grows continuously
      const growth = Math.max(0, Math.min(1, p / 0.8));
      mainHairRef.current.scale.y = 0.1 + (growth * 6); 
      mainHairRef.current.position.y = mainHairRef.current.scale.y / 2 - 1.5;
      mainHairRef.current.material.opacity = 1 - Math.max(0, (p - 0.8) * 10);
    }

    // Animate surrounding density hairs based on the specific pacing
    secondaryHairsRef.current.forEach((hair, i) => {
      if (hair && hairData[i]) {
        hair.visible = showCrossSection;
        const phase = hairData[i].phase;
        
        // Month 1: 0.0 - 0.25
        // Month 3: 0.25 - 0.50
        // Month 6: 0.50 - 0.75
        // Month 12: 0.75 - 0.85
        let startP = 0;
        if (phase === 1) startP = 0.0;
        else if (phase === 2) startP = 0.25;
        else if (phase === 3) startP = 0.50;
        else if (phase === 4) startP = 0.75;

        if (p >= startP) {
          const localGrowth = Math.max(0, Math.min(1, (p - startP) / 0.25));
          hair.scale.y = 0.1 + (localGrowth * (4 + Math.random() * 2)); 
          hair.position.y = hair.scale.y / 2 - 1.5;
          
          // Bend the hairs outward slightly based on their distance from center
          const dist = Math.sqrt(hairData[i].x * hairData[i].x + hairData[i].z * hairData[i].z);
          hair.rotation.x = hairData[i].z * 0.05 * localGrowth;
          hair.rotation.z = -hairData[i].x * 0.05 * localGrowth;

          hair.material.opacity = (0.5 + localGrowth * 0.5) * (1 - Math.max(0, (p - 0.8) * 10));
        } else {
          hair.scale.y = 0.001; // Hidden
        }
      }
    });

    // --- ANIMATE FINALE PARTICLES ---
    if (pointsRef.current) {
      if (p > 0.85) {
        pointsRef.current.visible = true;
        const posArray = pointsRef.current.geometry.attributes.position.array;
        const expProgress = Math.max(0, Math.min(1, (p - 0.85) / 0.15));
        
        for (let i = 0; i < posArray.length; i++) {
          const basePos = THREE.MathUtils.lerp(explosion[i] * (1 - expProgress), logo[i], expProgress);
          posArray[i] = basePos;
        }
        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.material.opacity = Math.sin(expProgress * Math.PI);
      } else {
        pointsRef.current.visible = false;
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      
      {/* AMBIENT VISUAL DENSITY (DNA, Cells, Gold Dust) */}
      <points ref={ambientRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={AMBIENT_COUNT}
            array={ambientPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.03}
          color="#D4A24C"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* --- CROSS SECTION --- */}
      <group ref={skinRef}>
        {/* Skin Block (Dermis / Epidermis) */}
        <mesh position={[0, -0.5, 0]}>
          <boxGeometry args={[10, 2, 10]} />
          <meshStandardMaterial 
            color="#2a1f18" 
            transparent 
            opacity={0.8} 
            roughness={0.8}
            depthWrite={false}
          />
        </mesh>
        
        {/* Surface Grid Line (gives it a medical tech feel) */}
        <gridHelper args={[10, 15, "rgba(212, 162, 76, 0.4)", "rgba(212, 162, 76, 0.1)"]} position={[0, 0.51, 0]} />

        {/* Main Follicle Bulb (Under the skin) */}
        <mesh position={[0, -1.5, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#D4A24C" emissive="#D4A24C" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Main Center Hair */}
      <mesh ref={mainHairRef} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.06, 0.1, 1, 16]} />
        <meshStandardMaterial color="#111111" roughness={0.2} transparent />
      </mesh>

      {/* Surrounding Procedural Hairs for Density */}
      {hairData.map((data, i) => (
        <mesh 
          key={i} 
          ref={el => secondaryHairsRef.current[i] = el}
          position={[data.x, 0, data.z]}
        >
          <cylinderGeometry args={[0.03, 0.06, 1, 8]} />
          <meshStandardMaterial color="#222222" roughness={0.3} transparent />
        </mesh>
      ))}

      {/* --- FINALE PARTICLES --- */}
      <points ref={pointsRef} visible={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#D4A24C"
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Lighting for the realistic cross-section */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
      <pointLight position={[0, -1, 0]} intensity={3} color="#D4A24C" distance={8} />
    </group>
  );
}
