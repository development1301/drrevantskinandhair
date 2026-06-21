import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="Dr. Revanth Clinic" className={styles.logoImage} />
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <Link href="/about">About</Link>
          
          <div className={styles.dropdown}>
            <span>Hair</span>
            <div className={styles.megaMenu}>
              <div className={styles.megaGrid}>
                {/* HAIR MEGA MENU ITEMS */}
                <Link href="/treatments/hair/hair-transplant-fue" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🔬</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Hair Transplant (FUE)</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Restore natural hair density using advanced follicular unit extraction with minimal downtime and natural-looking results.</p>
                </Link>
                
                <Link href="/treatments/hair/prp-therapy" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🩸</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>PRP Therapy</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Platelet-rich plasma therapy designed to strengthen follicles and stimulate natural hair growth.</p>
                </Link>

                <Link href="/treatments/hair/gfc-therapy" className={styles.megaItem}>
                  <div className={styles.megaIcon}>✨</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>GFC Therapy</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Concentrated growth factor treatment that promotes healthier, stronger, and thicker hair.</p>
                </Link>

                <Link href="/treatments/hair/mesotherapy" className={styles.megaItem}>
                  <div className={styles.megaIcon}>💉</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Mesotherapy</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Targeted nutrient injections to improve scalp health and reduce hair fall.</p>
                </Link>

                <Link href="/treatments/hair/beard-transplant" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🧔</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Beard Transplant</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Create a fuller, natural-looking beard through precision follicle implantation.</p>
                </Link>

                <Link href="/treatments/hair/eyebrow-restoration" className={styles.megaItem}>
                  <div className={styles.megaIcon}>👁️</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Eyebrow Restoration</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Restore eyebrow density and shape with natural hair transplantation techniques.</p>
                </Link>

                <Link href="/treatments/hair/female-hair-loss" className={styles.megaItem}>
                  <div className={styles.megaIcon}>👩</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Female Hair Loss</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Personalized solutions for thinning hair and female pattern hair loss.</p>
                </Link>

                <Link href="/treatments/hair/alopecia-treatment" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🛡️</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Alopecia Treatment</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Comprehensive management of patchy and autoimmune-related hair loss conditions.</p>
                </Link>

                <Link href="/treatments/hair/scalp-treatments" className={styles.megaItem}>
                  <div className={styles.megaIcon}>💆</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Scalp Treatments</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Advanced treatments for dandruff, inflammation, and scalp-related concerns.</p>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.dropdown}>
            <span>Skin</span>
            <div className={styles.megaMenu}>
              <div className={styles.megaGrid}>
                {/* SKIN MEGA MENU ITEMS */}
                <Link href="/treatments/skin/acne-treatment" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🎯</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Acne Treatment</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Treat active acne and prevent future breakouts with personalized dermatological care.</p>
                </Link>

                <Link href="/treatments/skin/acne-scar-treatment" className={styles.megaItem}>
                  <div className={styles.megaIcon}>✨</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Acne Scar Treatment</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Reduce scars and improve skin texture using advanced resurfacing techniques.</p>
                </Link>

                <Link href="/treatments/skin/chemical-peels" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🧪</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Chemical Peels</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Promote skin renewal and improve tone, texture, and radiance.</p>
                </Link>

                <Link href="/treatments/skin/hydrafacial" className={styles.megaItem}>
                  <div className={styles.megaIcon}>💧</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Hydrafacial</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Deep cleansing and hydration for refreshed, glowing skin.</p>
                </Link>

                <Link href="/treatments/skin/pigmentation-treatment" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🌓</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Pigmentation</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Target melasma, dark spots, and uneven skin tone with advanced therapies.</p>
                </Link>

                <Link href="/treatments/skin/anti-aging-treatments" className={styles.megaItem}>
                  <div className={styles.megaIcon}>⏳</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Anti-Aging</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Improve elasticity and reduce visible signs of aging.</p>
                </Link>

                <Link href="/treatments/skin/botox" className={styles.megaItem}>
                  <div className={styles.megaIcon}>💉</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Botox</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Smooth fine lines and wrinkles with precision injectable treatments.</p>
                </Link>

                <Link href="/treatments/skin/fillers" className={styles.megaItem}>
                  <div className={styles.megaIcon}>✨</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Fillers</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Restore facial volume and enhance natural contours.</p>
                </Link>

                <Link href="/treatments/skin/laser-hair-reduction" className={styles.megaItem}>
                  <div className={styles.megaIcon}>⚡</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Laser Hair Reduction</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Long-term reduction of unwanted body hair using advanced laser technology.</p>
                </Link>

                <Link href="/treatments/skin/skin-tightening" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🌟</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Skin Tightening</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Improve firmness and collagen stimulation for youthful skin.</p>
                </Link>

                <Link href="/treatments/skin/melasma" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🛡️</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Melasma Treatment</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Personalized therapies to manage stubborn pigmentation concerns.</p>
                </Link>

                <Link href="/treatments/skin/psoriasis" className={styles.megaItem}>
                  <div className={styles.megaIcon}>⚕️</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Psoriasis Treatment</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Medical management of chronic inflammatory skin conditions.</p>
                </Link>

                <Link href="/treatments/skin/vitiligo" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🤍</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Vitiligo Treatment</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Treatment strategies for restoring pigmentation and improving skin appearance.</p>
                </Link>

                <Link href="/treatments/skin/eczema" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🌿</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Eczema Treatment</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Reduce inflammation and improve skin barrier health.</p>
                </Link>

                <Link href="/treatments/skin/wart-removal" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🔬</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Wart Removal</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Safe and effective removal of benign skin growths.</p>
                </Link>

                <Link href="/treatments/skin/mole-removal" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🔍</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Mole Removal</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Professional assessment and removal of unwanted moles.</p>
                </Link>

                <Link href="/treatments/skin/allergy-treatments" className={styles.megaItem}>
                  <div className={styles.megaIcon}>🩺</div>
                  <div className={styles.megaTitleWrapper}>
                    <p className={styles.megaTitle}>Allergy Treatments</p>
                    <span className={styles.megaArrow}>→</span>
                  </div>
                  <p className={styles.megaDesc}>Diagnosis and management of skin allergies and sensitivities.</p>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/hair-transplant-experience">Experience</Link>
          <Link href="/before-after">Results</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact</Link>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.cta}
          >
            Book Consultation
          </motion.button>
        </div>

        <button 
          className={styles.mobileMenuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
}
