const fs = require('fs');

const hairTreatments = [
  { id: 'fue', title: 'Hair Transplant (FUE)', slug: 'hair-transplant-fue', desc: 'State-of-the-art Follicular Unit Extraction.',
    content: {
      overview: 'Follicular Unit Extraction (FUE) is the gold standard in hair transplantation. Individual hair follicles are meticulously extracted from the donor area and implanted into the recipient area, ensuring a completely natural-looking hairline with no linear scarring.',
      process: ['Detailed Scalp Analysis & Hairline Design', 'Local Anesthesia Administration', 'Micro-extraction of donor follicles', 'Precision Implantation at natural angles'],
      benefits: ['No linear scarring', 'Permanent, natural results', 'Fast recovery time', 'Minimal discomfort']
    }
  },
  { id: 'prp', title: 'PRP Therapy', slug: 'prp-therapy', desc: 'Platelet-Rich Plasma to stimulate growth.',
    content: {
      overview: 'PRP (Platelet-Rich Plasma) therapy is an advanced, non-surgical treatment that uses your own blood plasma to stimulate hair follicles, promoting new growth and thickening existing hair naturally.',
      process: ['Blood Collection', 'Centrifugation to isolate plasma', 'Activation of growth factors', 'Micro-injection into the scalp'],
      benefits: ['100% natural and safe', 'Increases hair thickness', 'Stops hair fall rapidly', 'No downtime required']
    }
  },
  { id: 'gfc', title: 'GFC Therapy', slug: 'gfc-therapy', desc: 'Growth Factor Concentrate treatment.',
    content: {
      overview: 'Growth Factor Concentrate (GFC) is a highly advanced form of plasma therapy. It delivers a highly concentrated dose of your bodys own growth factors directly to the hair roots, providing superior rejuvenation compared to standard PRP.',
      process: ['Specialized Blood Draw', 'Advanced Acellular Preparation', 'Concentration of Growth Factors', 'Targeted Scalp Delivery'],
      benefits: ['Highly concentrated formula', 'Fewer sessions required', 'Superior clinical results', 'Painless application']
    }
  },
  { id: 'meso', title: 'Mesotherapy', slug: 'mesotherapy', desc: 'Nutrient injections for hair vitality.',
    content: {
      overview: 'Mesotherapy involves the micro-injection of a customized cocktail of vitamins, minerals, amino acids, and DHT blockers directly into the mesoderm of the scalp to nourish follicles and stop hair loss.',
      process: ['Scalp Cleansing', 'Custom Cocktail Preparation', 'Micro-needling or Injection Delivery', 'Post-treatment Soothing'],
      benefits: ['Direct nutrient delivery', 'Reverses thinning hair', 'Improves scalp blood circulation', 'Quick 30-minute procedure']
    }
  },
  { id: 'beard', title: 'Beard Transplant', slug: 'beard-transplant', desc: 'Precision facial hair restoration.',
    content: {
      overview: 'Achieve the dense, perfectly contoured beard you have always wanted. Using FUE technology, we transplant healthy follicles to fill in patches or create a completely new beard with perfect angulation.',
      process: ['Facial Symmetry Analysis', 'Donor Follicle Extraction', 'Micro-slit Creation at precise angles', 'Individual Follicle Placement'],
      benefits: ['Permanent results', 'Natural growth direction', 'Customizable density and shape', 'Minimal facial downtime']
    }
  },
  { id: 'eyebrow', title: 'Eyebrow Restoration', slug: 'eyebrow-restoration', desc: 'Natural-looking eyebrow density.',
    content: {
      overview: 'Restore over-plucked or thinning eyebrows with microscopic precision. We select the finest hair follicles to perfectly match the texture and growth direction of natural eyebrows.',
      process: ['Aesthetic Shape Design', 'Selection of Fine Donor Hairs', 'Micro-graft Extraction', 'Artistic Implantation'],
      benefits: ['Perfect facial symmetry', 'Eliminates need for makeup/tattooing', 'Completely natural look', 'Permanent enhancement']
    }
  },
  { id: 'female-hair-loss', title: 'Female Hair Loss', slug: 'female-hair-loss', desc: 'Specialized solutions for women.',
    content: {
      overview: 'Female pattern hair loss requires a delicate and highly personalized approach. We offer comprehensive diagnostic panels and targeted treatments ranging from advanced plasma therapy to non-shave transplants.',
      process: ['Hormonal & Nutritional Profiling', 'Trichoscopy Analysis', 'Customized Medical Therapy', 'Advanced Restorative Procedures'],
      benefits: ['Addresses root causes', 'Maintains existing length', 'Restores overall density', 'Boosts self-confidence']
    }
  },
  { id: 'alopecia', title: 'Alopecia Treatment', slug: 'alopecia-treatment', desc: 'Medical management of Alopecia.',
    content: {
      overview: 'Whether it is Alopecia Areata or Traction Alopecia, our clinic provides advanced dermatological management utilizing intralesional therapies, immunomodulators, and cutting-edge topical treatments to trigger regrowth.',
      process: ['Detailed Clinical Diagnosis', 'Intralesional Injections (if required)', 'Topical Immunotherapy', 'Continuous Regrowth Monitoring'],
      benefits: ['Halts disease progression', 'Stimulates dormant follicles', 'Evidence-based medical protocols', 'Compassionate care']
    }
  },
  { id: 'scalp', title: 'Scalp Treatments', slug: 'scalp-treatments', desc: 'Revitalize scalp health.',
    content: {
      overview: 'A healthy scalp is the foundation of healthy hair. Our clinical scalp treatments address severe dandruff, seborrheic dermatitis, and scalp psoriasis using medical-grade exfoliants and soothing agents.',
      process: ['Microscopic Scalp Evaluation', 'Deep Medical Cleansing', 'Application of Targeted Serums', 'LED Light Therapy'],
      benefits: ['Eliminates flaking and itching', 'Balances scalp pH and sebum', 'Creates optimal growth environment', 'Immediate relief from irritation']
    }
  }
];

const skinTreatments = [
  { id: 'acne', title: 'Acne Treatment', slug: 'acne-treatment', desc: 'Clear skin solutions.',
    content: {
      overview: 'Stop active breakouts and prevent future ones with our personalized acne protocols. We combine medical-grade topicals, oral medications, and advanced clinical peels to target acne at its root.',
      process: ['Skin Barrier Assessment', 'Deep Pore Cleansing', 'Targeted Acid Peels', 'LED Blue Light Therapy'],
      benefits: ['Clears stubborn active acne', 'Prevents permanent scarring', 'Reduces inflammation and redness', 'Customized to your skin type']
    }
  },
  { id: 'acne-scar', title: 'Acne Scar Treatment', slug: 'acne-scar-treatment', desc: 'Advanced scar revision.',
    content: {
      overview: 'Erase the reminders of past breakouts. We utilize fractional CO2 lasers, microneedling radiofrequency (MNRF), and subcision to physically break down scar tissue and stimulate massive collagen remodeling.',
      process: ['Scar Type Mapping (Ice-pick, Boxcar, Rolling)', 'Subcision for tethered scars', 'Energy-based Resurfacing', 'Application of Healing Serums'],
      benefits: ['Dramatically smoother texture', 'Permanent scar reduction', 'Stimulates deep collagen', 'Safe for all skin tones']
    }
  },
  { id: 'peels', title: 'Chemical Peels', slug: 'chemical-peels', desc: 'Skin resurfacing and glow.',
    content: {
      overview: 'Reveal fresh, luminous skin. Our medical-grade chemical peels use specialized blends of AHA, BHA, and TCA to gently exfoliate the damaged outer layers of skin, addressing dullness, fine lines, and mild pigmentation.',
      process: ['Skin Pre-conditioning', 'Customized Acid Application', 'Neutralization', 'Post-peel Barrier Repair'],
      benefits: ['Instant radiant glow', 'Refines pore size', 'Evens out skin tone', 'Quick lunchtime procedure']
    }
  },
  { id: 'hydra', title: 'Hydrafacial', slug: 'hydrafacial', desc: 'Deep cleansing and hydration.',
    content: {
      overview: 'Experience the ultimate skin detox. The clinical Hydrafacial uses patented vortex technology to cleanse, extract impurities, and simultaneously infuse the skin with intensive hydrating serums.',
      process: ['Vortex Exfoliation', 'Painless Suction Extraction', 'Antioxidant & Peptide Infusion', 'LED Therapy Finish'],
      benefits: ['Immediate, noticeable hydration', 'Zero downtime', 'Perfect before major events', 'Safe for sensitive skin']
    }
  },
  { id: 'pigmentation', title: 'Pigmentation Treatment', slug: 'pigmentation-treatment', desc: 'Even skin tone.',
    content: {
      overview: 'Erase sun damage, age spots, and uneven tone. We employ highly specific Q-switched lasers and advanced depigmenting peels to safely shatter excess melanin without damaging surrounding tissue.',
      process: ['Wood’s Lamp Evaluation', 'Laser Toning Sessions', 'Targeted Spot Treatment', 'Prescription Homecare Integration'],
      benefits: ['Fades stubborn dark spots', 'Safe for Indian/darker skin tones', 'Improves overall complexion', 'Non-ablative and comfortable']
    }
  },
  { id: 'anti-aging', title: 'Anti-Aging Treatments', slug: 'anti-aging-treatments', desc: 'Youthful restoration.',
    content: {
      overview: 'Reverse the clock with our comprehensive anti-aging protocols. We combine high-intensity focused ultrasound (HIFU), fractional lasers, and bio-remodeling injectables to restore elasticity and youth.',
      process: ['Facial Vector Analysis', 'Collagen Stimulating Therapy', 'Skin Hydration Boosters', 'Long-term Maintenance Planning'],
      benefits: ['Lifts sagging skin', 'Smooths fine lines', 'Restores youthful bounce', 'Non-surgical alternatives to facelifts']
    }
  },
  { id: 'botox', title: 'Botox', slug: 'botox', desc: 'Wrinkle reduction.',
    content: {
      overview: 'Smooth out dynamic wrinkles with precision. Our expert dermatologists administer FDA-approved botulinum toxin to temporarily relax the specific facial muscles responsible for frown lines and crow’s feet.',
      process: ['Dynamic Muscle Assessment', 'Micro-droplet Injection', 'Targeted Muscle Relaxation', 'Two-week Follow Up'],
      benefits: ['Visible results within days', 'Prevents wrinkles from deepening', 'Maintains natural facial expressions', 'Quick and virtually painless']
    }
  },
  { id: 'fillers', title: 'Fillers', slug: 'fillers', desc: 'Volume restoration.',
    content: {
      overview: 'Instantly restore lost facial volume and enhance your natural contours. We use premium hyaluronic acid dermal fillers to sculpt cheekbones, plump lips, and erase deep folds.',
      process: ['Facial Proportion Mapping', 'Topical Numbing Application', 'Strategic Filler Placement', 'Immediate Sculpting and Molding'],
      benefits: ['Instant, visible transformation', 'Hydrates skin from within', 'Fully reversible', 'Lasts up to 12-18 months']
    }
  },
  { id: 'laser-hair', title: 'Laser Hair Reduction', slug: 'laser-hair-reduction', desc: 'Permanent hair reduction.',
    content: {
      overview: 'Ditch the razor forever. Our advanced diode and triple-wavelength laser systems target the hair follicle’s melanin, destroying its ability to regrow hair while keeping the surrounding skin perfectly safe.',
      process: ['Skin and Hair Typing', 'Cooling Gel Application', 'Rapid Laser Gliding', 'Post-laser Soothing'],
      benefits: ['Up to 90% permanent reduction', 'Eliminates ingrown hairs', 'Pain-free ice-cool technology', 'Safe for the entire body']
    }
  },
  { id: 'skin-tightening', title: 'Skin Tightening', slug: 'skin-tightening', desc: 'Non-surgical facelifts.',
    content: {
      overview: 'Achieve a firmer, more contoured face without surgery. Using advanced Radiofrequency (RF) and HIFU technology, we heat the deep dermal layers to contract existing collagen and stimulate new production.',
      process: ['Application of Conductive Gel', 'Targeted Thermal Energy Delivery', 'Deep Tissue Heating', 'Immediate Collagen Contraction'],
      benefits: ['Lifts the jawline and neck', 'No incisions or downtime', 'Continues improving over months', 'Safe, focused energy']
    }
  },
  { id: 'melasma', title: 'Melasma', slug: 'melasma', desc: 'Targeted pigmentation care.',
    content: {
      overview: 'Melasma requires a highly delicate, multi-modal approach. We avoid aggressive lasers that can cause rebounds, instead utilizing specific gentle toning, tranexamic acid therapies, and specialized peels.',
      process: ['Trigger Identification (Hormonal/Sun)', 'Gentle Laser Toning', 'Medical Depigmentation Masks', 'Strict Photoprotection Protocol'],
      benefits: ['Safely lightens stubborn patches', 'Minimizes risk of rebound pigmentation', 'Evidence-based medical approach', 'Improves overall skin barrier']
    }
  },
  { id: 'psoriasis', title: 'Psoriasis', slug: 'psoriasis', desc: 'Medical management.',
    content: {
      overview: 'Find relief from chronic psoriasis plaques. Our clinical management includes targeted narrow-band UVB phototherapy, advanced biologics, and prescription topical therapies to induce long-term remission.',
      process: ['Severity Scoring (PASI)', 'Targeted Light Therapy Sessions', 'Systemic or Biologic Medication', 'Emollient Therapy'],
      benefits: ['Clears thick, scaly plaques', 'Reduces severe itching', 'Prevents joint involvement', 'Dramatically improves quality of life']
    }
  },
  { id: 'vitiligo', title: 'Vitiligo', slug: 'vitiligo', desc: 'Repigmentation therapies.',
    content: {
      overview: 'We offer cutting-edge treatments to halt the spread of vitiligo and stimulate repigmentation. Protocols include Excimer laser therapy, targeted immunosuppressants, and advanced melanocyte grafting for stable cases.',
      process: ['Disease Stability Assessment', 'Targeted Excimer Light Therapy', 'Medical Ointment Application', 'Surgical Grafting (if stable)'],
      benefits: ['Promotes return of natural skin color', 'Halts disease progression', 'State-of-the-art phototherapy', 'Comprehensive psychosocial support']
    }
  },
  { id: 'eczema', title: 'Eczema', slug: 'eczema', desc: 'Soothing relief.',
    content: {
      overview: 'Heal the skin barrier and stop the itch-scratch cycle. Our eczema protocols focus on intense ceramide repair, identifying triggers, and using safe, non-steroidal immunomodulators to calm flares.',
      process: ['Patch Testing for Allergies', 'Barrier Repair Emollients', 'Targeted Anti-inflammatory Therapy', 'Trigger Avoidance Counseling'],
      benefits: ['Immediate relief from itching', 'Restores cracked, dry skin', 'Reduces reliance on harsh steroids', 'Safe for infants and adults']
    }
  },
  { id: 'wart', title: 'Wart Removal', slug: 'wart-removal', desc: 'Safe and effective removal.',
    content: {
      overview: 'Quickly and safely eliminate contagious viral warts. We use precision radiofrequency ablation, cryotherapy, or targeted laser removal to destroy the viral tissue with minimal scarring.',
      process: ['Lesion Assessment', 'Local Anesthesia', 'Precision Thermal Ablation', 'Post-procedure Healing Care'],
      benefits: ['One-time procedure for most warts', 'Prevents spreading to other areas', 'Minimal to no scarring', 'Fast and virtually painless']
    }
  },
  { id: 'mole', title: 'Mole Removal', slug: 'mole-removal', desc: 'Precision aesthetic excision.',
    content: {
      overview: 'Remove unwanted or suspicious moles safely. Every mole is assessed dermoscopically by our experts before being removed using radiofrequency for a cosmetically flawless, stitch-free result.',
      process: ['Dermoscopic Assessment', 'Pain-free Local Numbing', 'Stitch-free RF Shave Excision', 'Histopathology (if required)'],
      benefits: ['Cosmetically elegant healing', 'No stitches required', 'Ensures medical safety', 'Instant removal in minutes']
    }
  },
  { id: 'allergy', title: 'Allergy Treatments', slug: 'allergy-treatments', desc: 'Dermatological allergy care.',
    content: {
      overview: 'Identify and resolve mysterious skin rashes, hives, and contact dermatitis. We offer comprehensive allergy patch testing and personalized medical management to keep your skin clear and calm.',
      process: ['Detailed History Taking', 'Comprehensive Patch Testing', 'Allergen Identification', 'Targeted Antihistamine Therapy'],
      benefits: ['Pinpoints exact allergic triggers', 'Eliminates chronic hives/rashes', 'Reduces need for systemic steroids', 'Empowers you with knowledge']
    }
  }
];

const fileContent = "export const hairTreatments = " + JSON.stringify(hairTreatments, null, 2) + ";\n\nexport const skinTreatments = " + JSON.stringify(skinTreatments, null, 2) + ";\n\nexport const getAllTreatments = () => {\n  return [...hairTreatments, ...skinTreatments];\n};\n";

fs.writeFileSync('./src/data/treatments.js', fileContent);
console.log('Successfully generated rich treatments data!');
