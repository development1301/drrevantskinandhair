"use client";
import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Journey3D from '../canvas/Journey3D';
import styles from './Journey.module.css';

// Simple Error Boundary for WebGL Fallback
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

export default function Journey() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeStage, setActiveStage] = useState(0);

  // Exact 0-33-66-100 logical mapping mapping into 4 equal quarters
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveStage(0);
    else if (latest < 0.50) setActiveStage(1);
    else if (latest < 0.75) setActiveStage(2);
    else setActiveStage(3);
  });

  const barFill = useTransform(scrollYProgress, [0, 0.75], ["0%", "100%"]);

  // Opacities mapped exactly to quarters. Month 1 is visible immediately.
  const month1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const month3Opacity = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
  const month6Opacity = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  const month12Opacity = useTransform(scrollYProgress, [0.7, 0.75, 0.85, 0.88], [0, 1, 1, 0]);

  // Split Screen Reveal (0.88 to 0.92)
  const splitScreenOpacity = useTransform(scrollYProgress, [0.85, 0.88, 0.92, 0.95], [0, 1, 1, 0]);
  const splitLeftX = useTransform(scrollYProgress, [0.85, 0.88], ["-50%", "0%"]);
  const splitRightX = useTransform(scrollYProgress, [0.85, 0.88], ["50%", "0%"]);

  // Signature Finale (0.92 to 1.0)
  const finaleOpacity = useTransform(scrollYProgress, [0.92, 0.95, 1], [0, 1, 1]);
  const finaleScale = useTransform(scrollYProgress, [0.92, 1], [0.8, 1.1]);

  return (
    <section id="journey-sequence" ref={containerRef} className={styles.journeySection}>
      <div className={styles.stickyWrap}>
        
        {/* 3D Environment Background & Simulation with WebGL Fallback */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
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
        </div>

        {/* TOP TRANSFORMATION BAR */}
        <motion.div 
          className={styles.topBar}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.85, 0.88], [1, 1, 0]) }}
        >
          <div className={styles.timelineTrack}>
            <motion.div className={styles.timelineFill} style={{ width: barFill }} />
          </div>
          
          {['Month 1', 'Month 3', 'Month 6', 'Month 12'].map((label, i) => (
            <div key={i} className={styles.timelineNode}>
              <div className={`${styles.nodeDot} ${activeStage >= i ? styles.nodeDotActive : ''}`} />
              <span className={`${styles.nodeLabel} ${activeStage >= i ? styles.nodeLabelActive : ''}`}>{label}</span>
            </div>
          ))}
        </motion.div>

        {/* MAIN OVERLAY */}
        <div className={styles.overlayLayer}>
          
          {/* LEFT: Huge Month Typography */}
          <div className={styles.leftColumn}>
            <motion.h1 className={styles.hugeMonth} style={{ opacity: month1Opacity }}>01</motion.h1>
            <motion.h1 className={styles.hugeMonth} style={{ opacity: month3Opacity }}>03</motion.h1>
            <motion.h1 className={styles.hugeMonth} style={{ opacity: month6Opacity }}>06</motion.h1>
            <motion.h1 className={styles.hugeMonth} style={{ opacity: month12Opacity }}>12</motion.h1>
          </div>

          {/* RIGHT: Data Visualizations & Descriptions */}
          <div className={styles.rightColumn}>
            {/* Month 1 Panel */}
            <motion.div className={styles.infoPanel} style={{ opacity: month1Opacity }}>
              <h3 className={`gold-text ${styles.chapterTitle}`}>Month 1</h3>
              <p className={styles.chapterDesc}>Sparse tiny sprouts. New follicles establish themselves beneath the dermis.</p>
              <div className={styles.metricsGrid}>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Hair Density</span><span className={styles.metricValue}>20%</span></div>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Recovery</span><span className={styles.metricValue}>30%</span></div>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Graft Maturity</span><span className={styles.metricValue}>20%</span></div>
              </div>
            </motion.div>

            {/* Month 3 Panel */}
            <motion.div className={styles.infoPanel} style={{ opacity: month3Opacity }}>
              <h3 className={`gold-text ${styles.chapterTitle}`}>Month 3</h3>
              <p className={styles.chapterDesc}>Visible thin hairs. Early growth and strengthening begin.</p>
              <div className={styles.metricsGrid}>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Hair Density</span><span className={styles.metricValue}>40%</span></div>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Recovery</span><span className={styles.metricValue}>60%</span></div>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Graft Maturity</span><span className={styles.metricValue}>45%</span></div>
              </div>
            </motion.div>

            {/* Month 6 Panel */}
            <motion.div className={styles.infoPanel} style={{ opacity: month6Opacity }}>
              <h3 className={`gold-text ${styles.chapterTitle}`}>Month 6</h3>
              <p className={styles.chapterDesc}>Medium density. Significant thickness develops as more follicles activate.</p>
              <div className={styles.metricsGrid}>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Hair Density</span><span className={styles.metricValue}>75%</span></div>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Recovery</span><span className={styles.metricValue}>85%</span></div>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Graft Maturity</span><span className={styles.metricValue}>80%</span></div>
              </div>
            </motion.div>

            {/* Month 12 Panel */}
            <motion.div className={styles.infoPanel} style={{ opacity: month12Opacity }}>
              <h3 className={`gold-text ${styles.chapterTitle}`}>Month 12</h3>
              <p className={styles.chapterDesc}>Full natural density. Long-lasting, fully mature results achieved.</p>
              <div className={styles.metricsGrid}>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Hair Density</span><span className={styles.metricValue}>100%</span></div>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Recovery</span><span className={styles.metricValue}>100%</span></div>
                <div className={styles.metricItem}><span className={styles.metricLabel}>Graft Maturity</span><span className={styles.metricValue}>100%</span></div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SPLIT SCREEN REVEAL */}
        <motion.div 
          className={styles.splitScreenContainer}
          style={{ opacity: splitScreenOpacity, pointerEvents: 'none' }}
        >
          <motion.div className={`${styles.splitHalf} ${styles.splitLeft}`} style={{ x: splitLeftX }}>
            <div className={styles.splitLabel}>BEFORE</div>
          </motion.div>
          <motion.div className={styles.splitHalf} style={{ x: splitRightX }}>
            <div className={styles.splitLabel}>AFTER</div>
          </motion.div>
        </motion.div>

        {/* SIGNATURE FINALE */}
        <motion.div 
          className={styles.finalTitleContainer}
          style={{ opacity: finaleOpacity, scale: finaleScale, pointerEvents: 'none' }}
        >
          <h1 className={`gold-text ${styles.finalHeadline}`}>Science.</h1>
          <h1 className={`gold-text ${styles.finalHeadline}`}>Precision.</h1>
          <h1 className={`gold-text ${styles.finalHeadline}`}>Confidence Restored.</h1>
        </motion.div>

      </div>
    </section>
  );
}
