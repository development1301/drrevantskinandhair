"use client";
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Journey3D from './Journey3D';
import styles from '../sections/Journey.module.css';

class WebGLBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function JourneyCanvas({ scrollYProgress }) {
  return (
    <WebGLBoundary 
      fallback={
        <div className={styles.failsafeFallback}>
          <div className={styles.failsafeCore}></div>
        </div>
      }
    >
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        <Journey3D scrollProgress={scrollYProgress} />
      </Canvas>
    </WebGLBoundary>
  );
}
