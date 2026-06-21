"use client";
import { Canvas } from '@react-three/fiber';
import { Preload, Environment } from '@react-three/drei';
import { usePathname } from 'next/navigation';
import Particles from './Particles';
import GoldenShield from './GoldenShield';
import SignatureSequence3D from './SignatureSequence3D';

function SceneContent() {
  const pathname = usePathname();
  
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#D4A24C" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#081321" />
      <Environment preset="city" />
      <Particles />
      {/* 3D Logo removed per user request */}
      {pathname === '/' && <SignatureSequence3D />}
    </>
  );
}

export default function Scene({ children }) {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100vw', 
      height: '100vh', 
      zIndex: -1, 
      pointerEvents: 'none' 
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <SceneContent />
        {children}
        <Preload all />
      </Canvas>
    </div>
  );
}
