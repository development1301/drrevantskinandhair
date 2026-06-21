"use client";
import { useState } from 'react';
import Loader from './Loader';
import Navigation from './Navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <Navigation />
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(10px)' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </>
  );
}
