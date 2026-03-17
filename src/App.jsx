import { useMemo, useState, useEffect, useRef } from 'react';
import React from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";

// ─── TRANSLATIONS ────────────────────────────────────────────────────────────
const translations = {
  en: {
    clinicName: 'NILKANTH HOMEOPATHY',
    tagline: 'Natural Healing, Trusted Care',
    callNow: 'Call Now',
    whatsapp: 'WhatsApp',
    about: 'About Doctor',
    doctorName: 'Dr. Hitexa Kanazariya',
    qualification: 'B.H.M.S · C.C.H',
    aboutText: 'I am a homeopathic doctor who focuses on understanding each patient in detail and addressing the underlying cause of illness.\n\nI provide safe and gentle treatment for skin problems, female health, allergies, child health concerns, and common illnesses. Each treatment is planned based on the patient\'s individual condition.\n\nI believe in giving proper time during consultation to understand the problem clearly and manage it in a thoughtful and systematic way.',
    services: 'Our Treatments',
    whyTitle: 'Why Choose Us',
    whyPoints: [
      { icon: '🎓', title: 'Certified Specialist', desc: 'BHMS & CCH qualified practitioner' },
      { icon: '💊', title: 'Personalized Plans', desc: 'Treatment tailored to your unique condition' },
      { icon: '🌿', title: '100% Natural', desc: 'Safe remedies with zero side effects' },
      { icon: '📱', title: 'Teleconsultation', desc: 'Consult from the comfort of your home' },
    ],
    testimonials: 'What Patients Say',
    contact: 'Book Appointment',
    name: 'Your Name',
    phone: 'Phone Number',
    problem: 'Describe your concern...',
    sendRequest: 'Send via WhatsApp',
    phoneNumber: '+917359779869',
    email: 'nilkanthhomoeopathy@gmail.com',
    address: 'Jay Corner, Near Yogi Kirana Store, Turkha Road, Botad, Gujarat',
    timing: [
      { label: 'Morning', time: '9:00 AM – 1:00 PM' },
      { label: 'Evening', time: '4:00 PM – 8:00 PM' },
    ],
    servicesList: [
      { icon: '🟢', title: 'Skin Problems', desc: 'Eczema, psoriasis, acne & more', fullDesc: 'Management of eczema, psoriasis, fungal infection (ringworm), acne, itching, hair fall, alopecia, dandruff, and scalp issues with personalized homeopathic treatment. Focus is on identifying the root cause and providing safe, long-lasting improvement.' },
      { icon: '♀️', title: 'Female Health', desc: 'PCOS, hormonal balance & more', fullDesc: 'Treatment for PCOS, irregular periods, white discharge, painful periods, PCOD/PCOS, hormonal imbalance, ovarian cyst, uterine fibroid, recurrent abortion, infertility and other common female concerns.' },
      { icon: '👶', title: 'Child Health', desc: 'Immunity, digestion & growth', fullDesc: 'Frequent cold and cough, low immunity, poor appetite, digestive issues, recurrent infections, teething problems, and other common childhood concerns.' },
      { icon: '🌿', title: 'Allergies', desc: 'Dust, pollen & seasonal relief', fullDesc: 'Long-term relief from allergies like dust, sneezing, cold, cough, dust allergy, throat irritation, breathing difficulty, and recurrent respiratory problems.' },
      { icon: '💇', title: 'Hair Loss', desc: 'Hair fall, dandruff & alopecia', fullDesc: 'Hair fall, dandruff and alopecia treatment, alopecia, scalp issues, and other hair-related concerns.' },
      { icon: '🦴', title: 'Joint Pain', desc: 'Back pain, arthritis & sciatica', fullDesc: 'Back pain, neck pain, knee pain, muscle pain, sciatica, varicose veins and other common pain-related conditions.' },
      { icon: '🫀', title: 'Digestive Problems', desc: 'Acidity, gas & bowel concerns', fullDesc: 'Acidity, gas, indigestion, constipation, piles (haemorrhoids), fissure, fistula, abdominal pain, and other digestive concerns.' },
      { icon: '🧠', title: 'Mental Wellness', desc: 'Migraine, anxiety & stress', fullDesc: 'Safe and effective homeopathic treatment for mental disorders including migraine, stress, anxiety, insomnia, neurological conditions and cognitive support.' },
    ],
    footer: '© 2026 Nilkanth Homeopathy. All Rights Reserved.',
    languageToggle: 'ગુજરાતી',
    viewMore: 'View More',
    viewLess: 'Show Less',
    readMore: 'Learn More →',
    heroStats: [
      { value: '500+', label: 'Patients Treated' },
      { value: '8+', label: 'Conditions Treated' },
      { value: '5★', label: 'Patient Rating' },
    ],
  },
  gu: {
    clinicName: 'નિલકંઠ હોમિયોપેથી',
    tagline: 'પ્રાકૃતિક ઉપચાર, વિશ્વસનીય સંભાળ',
    callNow: 'કોલ કરો',
    whatsapp: 'વોટ્સએપ',
    about: 'ડોક્ટર પરિચય',
    doctorName: 'ડૉ. હિતેક્ષા કણઝરીયા',
    qualification: 'B.H.M.S · C.C.H',
    aboutText: 'હોમિયોપેથીક ડોક્ટર તરીકે દરેક દર્દીને ધ્યાનથી સાંભળી તેની તકલીફને સારી રીતે સમજી સારવાર આપે છે.\n\nચામડીની તકલીફો, મહિલાઓના આરોગ્ય સંબંધિત પ્રશ્નો, એલર્જી, બાળકોના રોગો અને સામાન્ય બિમારીઓમાં હળવી અને સલામત સારવાર.\n\nદરેક દર્દીને પૂરતો સમય આપી, તેની સમસ્યા સારી રીતે સમજી, યોગ્ય રીતે સારવાર કરવામાં આવે છે.',
    services: 'અમારા ઉપચાર',
    whyTitle: 'અમને કેમ પસંદ કરો',
    whyPoints: [
      { icon: '🎓', title: 'પ્રમાણિત નિષ્ણાત', desc: 'BHMS અને CCH લાયક ડોક્ટર' },
      { icon: '💊', title: 'વ્યક્તિગત સારવાર', desc: 'તમારી સ્થિતિ મુજબ ઉપચાર' },
      { icon: '🌿', title: '100% કુદરતી', desc: 'આડ અસર વિના સલામત દવા' },
      { icon: '📱', title: 'ટેલીકોન્સ્સ્ટ', desc: 'ઘેરબેઠા સારવાર' },
    ],
    testimonials: 'દર્દીઓ શું કહે છે',
    contact: 'એપોઇન્ટમેન્ટ લો',
    name: 'તમારું નામ',
    phone: 'ફોન નંબર',
    problem: 'તમારી સમસ્યા જણાવો...',
    sendRequest: 'વોટ્સએપ દ્વારા મોકલો',
    phoneNumber: '+917359779869',
    email: 'nilkanthhomoeopathy@gmail.com',
    address: 'જય કોર્નર, યોગી કિરાણા સ્ટોર પાસે, તુરખા રોડ, બોટાદ, ગુજરાત',
    timing: [
      { label: 'સવાર', time: '9:00 AM – 1:00 PM' },
      { label: 'સાંજ', time: '4:00 PM – 8:00 PM' },
    ],
    servicesList: [
      { icon: '🟢', title: 'ચામડીની સ્થિતિ', desc: 'ખરજવું, સોરિયાસિસ, ખીલ', fullDesc: 'ખરજવું, સોરિયાસિસ, ધાધર, ખીલ, ખંજવાળ, વાળ ખરવા, ઉંદરી, ડેન્ડ્રફ અને વાળ સંબંધિત તકલીફોમાં વ્યક્તિગત સારવાર.' },
      { icon: '♀️', title: 'સ્ત્રી આરોગ્ય', desc: 'PCOS, માસિક, હોર્મોન', fullDesc: 'PCOS, અનિયમિત માસિક, સફેદ પાણી, માસિક દરમિયાન દુ:ખાવો, હોર્મોનલ અસંતુલન, ગર્ભ ધારણ સમસ્યા.' },
      { icon: '👶', title: 'બાળ આરોગ્ય', desc: 'રોગ પ્રતિકારક, પાચન', fullDesc: 'વારંવાર થતી શરદી-ઉધરસ, ઓછી રોગ પ્રતિકારક શક્તિ, ભૂખ ન લાગવી, પાચન સમસ્યા.' },
      { icon: '🌿', title: 'એલર્જી', desc: 'ધૂળ, ઋતુ એલર્જી', fullDesc: 'ધૂળ, છીંક, શ્વાસ સમસ્યા, ગળામાં બળતરા અને સીઝનલ એલર્જી.' },
      { icon: '💇', title: 'વાળ ખરવા', desc: 'ખોડો, ઉંદરી', fullDesc: 'વાળ ખરવા, ખોડો, ઉંદરી, સ્કેલ્પ સમસ્યા.' },
      { icon: '🦴', title: 'સાંધા-પીડા', desc: 'આર્થ્રાઇટિસ, ઘૂંટણ', fullDesc: 'કમર, ગરદન, ઘૂંટણ દુખાવો, સ્ત્રાવ, વેરિકોઝ.' },
      { icon: '🫀', title: 'પાચન સમસ્યા', desc: 'એસિડ, ગેસ, મળ', fullDesc: 'એસિડ, ગેસ, કબજિયાત, હરસ, ફિશ્યૂર, ફિસ્ટ્યૂલા.' },
      { icon: '🧠', title: 'માનસિક સ્વાસ્થ્ય', desc: 'માઇગ્રેન, ચિંતા, તણાવ', fullDesc: 'માઇગ્રેન, ચિંતા, તણાવ, ઊંઘ ન આવવી, ન્યુરોલોજીકલ.' },
    ],
    footer: '© 2026 નિલકંઠ હોમિયોપેથી. સર્વ અધિકારો.',
    languageToggle: 'English',
    viewMore: 'વધુ જુઓ',
    viewLess: 'ઓછું જુઓ',
    readMore: 'વધુ જાણો →',
    heroStats: [
      { value: '500+', label: 'દર્દીઓ' },
      { value: '8+', label: 'સારવાર' },
      { value: '5★', label: 'રેટિંગ' },
    ],
  },
};

const policyTexts = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      { heading: 'Your Data, Our Care', text: 'Nilkanth Homeopathy respects your privacy. We collect only essential contact details to schedule appointments and respond to inquiries.' },
      { heading: 'How Information Is Used', text: 'Personal details are used for booking confirmation and follow-up care. We do not share your information with third parties except when required by law.' },
      { heading: 'Secure Access', text: 'Our site uses modern HTTPS protection. Sensitive data is stored securely and never sold.' },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      { heading: 'Service Agreement', text: 'Nilkanth Homeopathy provides informational resources and appointment scheduling. Diagnostic and treatment decisions are made by authorized clinic practitioners.' },
      { heading: 'Appointment Use', text: 'Bookings made through this website are subject to availability. Please verify your appointment details before arriving.' },
      { heading: 'General Use', text: 'Use of this website means you agree to respectful and legal interaction. Unsolicited commercial services or harmful content are prohibited.' },
    ],
  },
};

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i = 0) => ({ opacity: 1, scale: 1, transition: { duration: 0.45, delay: i * 0.08 } }),
};

// ─── REUSABLE SECTION REVEAL ─────────────────────────────────────────────────
function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── POLICY MODAL ─────────────────────────────────────────────────────────────
function PolicyModal({ variant, onClose }) {
  const policy = policyTexts[variant];
  if (!policy) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-xl font-bold text-[#2d6a4f]">{policy.title}</h3>
            <button onClick={onClose} className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-200">✕ Close</button>
          </div>
          <div className="max-h-[68vh] space-y-5 overflow-y-auto pr-1 text-sm leading-7 text-slate-600">
            {policy.sections.map(item => (
              <div key={item.heading}>
                <h4 className="mb-1 font-semibold text-slate-900">{item.heading}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── SERVICE MODAL ────────────────────────────────────────────────────────────
function ServiceModal({ service, onClose }) {
  if (!service) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="w-full max-w-lg rounded-2xl bg-white p-7 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 28 } }}
          exit={{ opacity: 0, scale: 0.9, y: 24 }}
          onClick={e => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 text-xl">✕</button>
          <div className="text-4xl mb-3">{service.icon}</div>
          <h2 className="text-2xl font-bold text-[#2d6a4f] mb-3">{service.title}</h2>
          <p className="text-slate-600 leading-7">{service.fullDesc}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ onOpenPolicy, t }) {
  return (
    <footer className="border-t border-[#d8f3dc] bg-[#f0fdf4] text-slate-700 pb-24 md:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🌿</span>
              <span className="font-bold text-lg text-[#2d6a4f]">Nilkanth Homeopathy</span>
            </div>
            <p className="text-sm text-slate-500">Natural Healing with Homeopathy</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Quick Links</h4>
            <nav className="space-y-1.5 text-sm">
              {[['home','Home'],['about','About'],['services','Services'],['contact','Contact']].map(([id,label]) => (
                <a key={id} href={`#${id}`} className="block rounded-lg px-2 py-1 hover:bg-[#d8f3dc] hover:text-[#1b4332] transition-colors">{label}</a>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>📞 +91 73597 79869</p>
              <p>✉️ nilkanthhomoeopathy@gmail.com</p>
              <div className="mt-3 overflow-hidden rounded-xl border border-green-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14779.351008799471!2d71.64066553115846!3d22.170247227255967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958dd00151fb309%3A0x7c5d520673cbbe1c!2sNilkanth%20clinic!5e0!3m2!1sen!2sin!4v1773745770655!5m2!1sen!2sin"
                  width="100%" height="150" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-3">Legal</h4>
            <div className="space-y-1.5 text-sm">
              {[['privacy','Privacy Policy'],['terms','Terms & Conditions']].map(([key,label]) => (
                <button key={key} type="button" onClick={() => onOpenPolicy(key)}
                  className="block w-full text-left rounded-lg px-2 py-1 hover:bg-[#d8f3dc] hover:text-[#1b4332] transition-colors">
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-green-100 pt-5 text-center text-xs text-slate-400">{t.footer}</div>
      </div>
    </footer>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState('en');
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', problem: '' });
  const [activePolicy, setActivePolicy] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const t = translations[lang];
  const visibleServices = showAll ? t.servicesList : t.servicesList.slice(0, 4);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Appointment Request\nName: ${form.name}\nPhone: ${form.phone}\nProblem: ${form.problem}`;
    window.open(`https://wa.me/917359779869?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* ── HEADER ── */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm border-b border-green-100' : 'bg-white border-b border-transparent'}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-8">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-xl">🌿</span>
            <span className="font-bold text-lg tracking-tight text-[#2d6a4f]">{t.clinicName}</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {[['home','Home'],['about',t.about],['services',t.services],['contact',t.contact]].map(([id,label]) => (
              <a key={id} href={`#${id}`}
                className="rounded-lg px-4 py-2 text-slate-600 hover:bg-[#d8f3dc] hover:text-[#1b4332] transition-colors">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setLang(p => p === 'en' ? 'gu' : 'en')}
              className="rounded-full border border-[#2d6a4f] px-4 py-1.5 text-sm font-semibold text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white transition-colors"
            >
              {t.languageToggle}
            </motion.button>
            <button className="md:hidden rounded-lg bg-slate-100 p-2 text-slate-700" onClick={() => setMenu(v => !v)}>
              {menu ? '✕' : '☰'}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menu && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden md:hidden border-t border-green-100 bg-white px-4"
            >
              <div className="space-y-1 py-3">
                {[['home','Home'],['about',t.about],['services',t.services],['contact',t.contact]].map(([id,label]) => (
                  <a key={id} href={`#${id}`} onClick={() => setMenu(false)}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-[#d8f3dc] hover:text-[#1b4332] transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* ── HERO ── */}
        <section id="home" className="relative overflow-hidden bg-[#1b4332] text-white">
          {/* Background */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?fit=crop&w=1400&q=80"
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#1b4332]/90 via-[#2d6a4f]/80 to-[#40916c]/70" />
            {/* Decorative orbs */}
            <motion.div
              animate={{ y: [0, -18, 0], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-10 right-16 h-56 w-56 rounded-full bg-[#52b788] blur-3xl opacity-30"
            />
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              className="absolute bottom-10 left-16 h-40 w-40 rounded-full bg-[#74c69d] blur-3xl opacity-20"
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36 md:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-5 py-2 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              🌿 Trusted Homeopathy Clinic · Botad, Gujarat
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22,1,0.36,1] }}
              className="text-4xl font-extrabold tracking-tight md:text-6xl leading-tight"
            >
              {t.clinicName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-4 text-lg md:text-2xl text-white/80 font-light"
            >
              {t.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
            >
              <motion.a
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                href={`tel:${t.phoneNumber}`}
                className="rounded-xl bg-white px-8 py-3.5 font-semibold text-[#1b4332] shadow-lg hover:shadow-xl transition-shadow"
              >
                📞 {t.callNow}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                href="https://wa.me/917359779869" target="_blank" rel="noreferrer"
                className="rounded-xl bg-[#25D366] px-8 py-3.5 font-semibold text-white shadow-lg hover:shadow-xl transition-shadow"
              >
                💬 {t.whatsapp}
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-sm mx-auto"
            >
              {t.heroStats.map((s, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-white/60 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 60H1440V20C1200 60 960 0 720 20C480 40 240 0 0 20V60Z" fill="white"/>
            </svg>
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section id="about" className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d8f3dc] px-4 py-1.5 text-sm font-semibold text-[#2d6a4f] mb-4">
                👩‍⚕️ {t.about}
              </div>
            </Reveal>

            <div className="mt-6 grid gap-10 lg:grid-cols-2 items-center">
              {/* Doctor Card */}
              <Reveal delay={0.1}>
                <div className="rounded-2xl bg-gradient-to-br from-[#d8f3dc] to-[#b7e4c7] p-8 flex flex-col items-center text-center shadow-sm">
                  <div className="w-28 h-28 rounded-full bg-[#52b788] flex items-center justify-center text-5xl shadow-lg mb-5 ring-4 ring-white">
                    👩‍⚕️
                  </div>
                  <h3 className="text-2xl font-bold text-[#1b4332]">{t.doctorName}</h3>
                  <p className="mt-1 text-sm font-medium text-[#40916c] bg-white/60 rounded-full px-4 py-1 mt-2">{t.qualification}</p>
                  <div className="mt-6 grid grid-cols-2 gap-3 w-full">
                    {[['🌿','100% Natural'],['💊','Personalized'],['📋','Detailed Consult'],['🏥','Botad Clinic']].map(([icon,label]) => (
                      <div key={label} className="flex items-center gap-2 bg-white/70 rounded-xl px-3 py-2 text-sm text-[#1b4332] font-medium">
                        <span>{icon}</span><span>{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* About Text */}
              <Reveal delay={0.2}>
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-[#1b4332]">{t.doctorName}</h2>
                  <p className="text-[#40916c] font-semibold">{t.qualification}</p>
                  {t.aboutText.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate-600 leading-8">{para}</p>
                  ))}
                  <motion.a
                    whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-2 rounded-xl bg-[#2d6a4f] px-6 py-3 font-semibold text-white hover:bg-[#1b4332] transition-colors"
                  >
                    Book Consultation →
                  </motion.a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section id="services" className="py-20 bg-[#f8fdf9]">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d8f3dc] px-4 py-1.5 text-sm font-semibold text-[#2d6a4f] mb-4">
                💊 {t.services}
              </div>
              <h2 className="text-3xl font-bold text-[#1b4332]">{t.services}</h2>
              <p className="mt-2 text-slate-500">Comprehensive homeopathic care for every need</p>
            </Reveal>

            <motion.div
              className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {visibleServices.map((item, i) => (
                <motion.article
                  key={i}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ y: -6, boxShadow: '0 12px 40px rgba(45,106,79,0.15)' }}
                  className="group relative rounded-2xl border border-green-100 bg-white p-6 cursor-pointer transition-all"
                  onClick={() => setSelectedService(item)}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="font-bold text-slate-800 text-lg mb-2">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-6">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center text-[#2d6a4f] font-semibold text-sm group-hover:gap-2 transition-all">
                    {t.readMore}
                  </span>
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-[#2d6a4f]/0 group-hover:ring-[#2d6a4f]/20 transition-all" />
                </motion.article>
              ))}
            </motion.div>

            <Reveal delay={0.3}>
              <div className="mt-8 text-center">
                <motion.button
                  whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => setShowAll(v => !v)}
                  className="rounded-xl border-2 border-[#2d6a4f] px-8 py-3 font-semibold text-[#2d6a4f] hover:bg-[#2d6a4f] hover:text-white transition-colors"
                >
                  {showAll ? t.viewLess : `${t.viewMore} (${t.servicesList.length - 4} more)`}
                </motion.button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section id="why" className="py-20 bg-[#1b4332] text-white">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <Reveal>
              <p className="text-[#95d5b2] font-semibold mb-2">✦ Our Promise</p>
              <h2 className="text-3xl font-bold">{t.whyTitle}</h2>
            </Reveal>

            <motion.div
              className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {t.whyPoints.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="text-3xl mb-4">{point.icon}</div>
                  <h3 className="font-bold text-lg mb-1">{point.title}</h3>
                  <p className="text-white/60 text-sm">{point.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d8f3dc] px-4 py-1.5 text-sm font-semibold text-[#2d6a4f] mb-4">
                ⭐ {t.testimonials}
              </div>
              <h2 className="text-3xl font-bold text-[#1b4332]">{t.testimonials}</h2>
            </Reveal>

            <motion.div
              className="mt-10 grid gap-5 md:grid-cols-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              {[
                { quote: 'I was suffering from severe skin allergy and constant itching for months. After taking treatment from NILKANTH Homeopathy, I noticed gradual but lasting improvement. The medicines were gentle and completely safe. Now my skin is much clearer and healthier. Highly recommended!', name: 'Ravi M.', tag: 'Skin Treatment' },
                { quote: 'I had been facing hormonal imbalance and irregular periods for a long time. After starting homeopathic treatment at NILKANTH, my health improved naturally without any side effects. The doctor understood my problem deeply and provided personalized care. I feel much better and more confident now.', name: 'Priya S.', tag: 'Female Health' },
              ].map((t_, i) => (
                <motion.blockquote
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="rounded-2xl border border-green-100 bg-[#f8fdf9] p-7 relative"
                >
                  <div className="text-4xl text-[#b7e4c7] font-serif leading-none mb-3">"</div>
                  <p className="text-slate-600 leading-8 italic">{t_.quote}</p>
                  <div className="mt-5 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2d6a4f] flex items-center justify-center text-white font-bold text-sm">
                      {t_.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{t_.name}</p>
                      <p className="text-xs text-[#40916c]">{t_.tag}</p>
                    </div>
                    <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
                  </div>
                </motion.blockquote>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section id="contact" className="py-20 bg-[#f8fdf9]">
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#d8f3dc] px-4 py-1.5 text-sm font-semibold text-[#2d6a4f] mb-4">
                📅 {t.contact}
              </div>
              <h2 className="text-3xl font-bold text-[#1b4332]">{t.contact}</h2>
            </Reveal>

            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {/* Info */}
              <Reveal delay={0.1}>
                <div className="space-y-5">
                  <div className="rounded-2xl bg-white border border-green-100 p-6 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4">Clinic Information</h3>
                    <div className="space-y-3 text-sm text-slate-600">
                      <p className="flex items-start gap-3"><span className="text-lg">📞</span><span>+91 73597 79869</span></p>
                      <p className="flex items-start gap-3"><span className="text-lg">✉️</span><span>nilkanthhomoeopathy@gmail.com</span></p>
                      <p className="flex items-start gap-3"><span className="text-lg">📍</span><span>Jay Corner, Near Yogi Kirana Store,<br/>Turkha Road, Botad, Gujarat</span></p>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white border border-green-100 p-6 shadow-sm">
                    <h3 className="font-bold text-slate-800 mb-4">⏰ Clinic Hours</h3>
                    <div className="space-y-3">
                      {t.timing.map((slot, i) => (
                        <div key={i} className="flex justify-between items-center bg-[#f0fdf4] rounded-xl px-4 py-3 text-sm">
                          <span className="font-medium text-[#1b4332]">{slot.label}</span>
                          <span className="text-slate-600">{slot.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Form */}
              <Reveal delay={0.2}>
                <div className="rounded-2xl bg-white border border-green-100 p-7 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-6">Send Appointment Request</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">{t.name}</label>
                      <input
                        value={form.name}
                        onChange={e => setForm(p => ({...p, name: e.target.value}))}
                        placeholder="Dr. Sharma..."
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">{t.phone}</label>
                      <input
                        type="tel" value={form.phone}
                        onChange={e => setForm(p => ({...p, phone: e.target.value}))}
                        placeholder="98765 43210"
                        maxLength={10} pattern="[0-9]{10}" required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wide">{t.problem}</label>
                      <textarea
                        value={form.problem}
                        onChange={e => setForm(p => ({...p, problem: e.target.value}))}
                        placeholder={t.problem}
                        rows={4}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] focus:border-transparent transition resize-none"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                      className="w-full rounded-xl bg-[#25D366] py-3.5 font-bold text-white text-sm shadow-lg hover:bg-[#1ebe57] transition-colors"
                    >
                      💬 {t.sendRequest}
                    </motion.button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenPolicy={setActivePolicy} t={t} />

      {/* Modals */}
      <AnimatePresence>
        {activePolicy && <PolicyModal key="policy" variant={activePolicy} onClose={() => setActivePolicy(null)} />}
      </AnimatePresence>
      <AnimatePresence>
        {selectedService && <ServiceModal key="service" service={selectedService} onClose={() => setSelectedService(null)} />}
      </AnimatePresence>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-2 border-t border-green-200 bg-white/95 backdrop-blur p-3 md:hidden">
        <a href={`tel:${t.phoneNumber}`}
          className="flex-1 rounded-xl bg-[#2d6a4f] py-3 text-center text-sm font-bold text-white">
          📞 {t.callNow}
        </a>
        <a href="https://wa.me/917359779869" target="_blank" rel="noreferrer"
          className="flex-1 rounded-xl bg-[#25D366] py-3 text-center text-sm font-bold text-white">
          💬 {t.whatsapp}
        </a>
      </div>
    </div>
  );
}