import { useMemo, useState } from 'react';
import React from "react";


const translations = {
  en: {
    clinicName: 'NILKANTH HOMEOPATHY ',
    tagline: 'Natural Healing, Trusted Care',
    callNow: 'Call Now',
    whatsapp: 'WhatsApp',
    about: 'About Doctor',
    doctorName: 'Dr. Hitexa Kanazariya',
    aboutText:
      'Dr. Hitexa Kanazariya(B.H.M.S)(C.C.H)\nI am a homeopathic doctor who focuses on understanding each patient in detail and addressing the underlying cause of illness.\nI provide safe and gentle treatment for skin problems, female health, allergies, child health concerns, and common illnesses. Each treatment is planned based on the patient’s individual condition.\nI believe in giving proper time during consultation to understand the problem clearly and manage it in a thoughtful and systematic way.',
    services: 'Our Treatments',
    whyTitle: 'Why Choose Us',
    whyPoints: ['Certified Specialist', 'Personalized Plans', '100% Natural Remedies', 'Convenient Teleconsultation'],
    testimonials: 'Testimonials',
    contact: 'Contact Us',
    contactDetails: 'Phone, email and clinic location details to reach us easily.',
    name: 'Name',
    phone: 'Phone',
    problem: 'Problem',
    sendRequest: 'Send Request via WhatsApp',
    phoneNumber: '+917359779869',
    email: 'nilkanthhomoeopathy@gmail.com',
    address: 'jay corner,near yogi kirana store,turkha road,Botad, Gujrat',
    time: 'MORNING : 9:00 AM to 1:00 PM |EVENING : 4:00 PM to 8:00 PM',
    servicesList: [
  {
    title: 'Skin Problems',
    desc: 'Skin & Hair Conditions Management of eczema, ',
    fullDesc:'Skin & Hair Conditions Management of eczema,psoriasis,fungal infection (ringworm), acne, itching, hair fall,alopecia,dandruff, and scalp issues with personalized homeopathic treatment.Focus is on identifying the root cause and providing safe, long-lasting improvement.'
  },
  { title: 'Female Health', 
    desc: 'Treatment for PCOS, ',
    fullDesc:'Treatment for PCOS,Irregular periods, white discharge, painful periods, PCOD/PCOS, hormonal imbalance,ovarian cyst, uterine fibroid,recurrent abortion, infertility and other common female concerns.' },
  {
    title: 'Child Health',
    desc: 'Frequent cold and cough, low immunity, ' ,
    fullDesc:'Frequent cold and cough, low immunity,poor appetite, digestive issues, recurrent infections, teething problems, and other common childhood concerns.'
  },
  {
    title: 'Allergies',
    desc: 'Long-term relief from allergies like dust, ',
    fullDesc:'Long-term relief from allergies like dust,Sneezing, cold, cough, dust allergy,throat irritation, breathing difficulty, and recurrent respiratory problems.'
  },
  { title: 'Hair Loss', 
    desc: 'Hair fall, dandruff and alopecia treatment.',
    fullDesc:'Hair fall, dandruff and alopecia treatment, alopecia, scalp issues, and other hair-related concerns.' },

  {
    title: 'Joint Pain',
    desc: 'back pain, neck pain, knee pain, ',
    fullDesc:'back pain, neck pain, knee pain,muscle pain,sciatica, varicose veins and other common pain-related conditions.'
  },
  

  { title: 'Digestive Problems', 
    desc: 'Acidity, gas, indigestion, constipation, ',
    fullDesc:'Acidity, gas, indigestion, constipation,piles (haemorrhoids), fissure, fistula, abdominal pain, and other digestive concerns.' },

  { title: 'Mental Disorders', 
    desc: 'Migraine, stress, anxiety and neurological support.',
    fullDesc:'Migraine, stress, anxiety and neurological support.We treat safe and effective homeopathic treatment for mental disorders. Strengthen emotional health naturally with personalized remedies. Trusted homeopathy clinic for anxiety, depression and more.' },

  

  
  
],
    // serviceDesc: 'treatment provided with custom follow-up and holistic care.',
    footer: '© 2026 Nilkanth Homeopathy. All Rights Reserved.Homeopathy ',
    languageToggle: 'ગુજરાતી'
  },
  gu: {
    clinicName: 'નિલકંઠ હોમિયોપેથી ',
    tagline: 'પ્રાકૃતિક ઉપચાર, વિશ્વસનીય સંભાળ',
    callNow: 'કોલ કરો',
    whatsapp: 'વોટ્સએપ',
    about: 'ડોક્ટરની પરિચય',
    doctorName: 'ડૉ. હિતેક્ષા કણઝરીયા',
    aboutText:
      'ડૉ. હિતેક્ષા કણઝરીયા(B.H.M.S)(C.C.H) હોમિયોપેથીક ડોક્ટર તરીકે દરેક દર્દીને ધ્યાનથી સાંભળી તેની તકલીફને સારી રીતે સમજી સારવાર આપે છે. ફક્ત લક્ષણ નહીં, પરંતુ તેની પાછળના મૂળ કારણને ધ્યાનમાં રાખીને સારવાર કરવામાં આવે છે.\nચામડીની તકલીફો, મહિલાઓના આરોગ્ય સંબંધિત પ્રશ્નો, એલર્જી, બાળકોના રોગો અને સામાન્ય બિમારીઓમાં હળવી અને સલામત હોમિયોપેથીક સારવાર આપવામાં આવે છે. દરેક દર્દી મુજબ દવા અને સારવાર ગોઠવવામાં આવે છે.\nદરેક દર્દીને પૂરતો સમય આપી તેની સમસ્યા સારી રીતે સમજવામાં આવે છે અને યોગ્ય રીતે સારવાર કરવામાં આવે છે.',
    services: 'અમારા ઉપચાર',
    whyTitle: 'અમને પસંદ કરો કેમ',
    whyPoints: ['પ્રમાણિત નિષ્ણાત', 'વ્યક્તિગત યોજના', '100% કુદરતી દવાઓ', 'ટેલીએમસલ્ટેશન સુવિધા'],
    testimonials: 'પ્રશંસાપત્રો',
    contact: 'સંપર્ક કરો',
    contactDetails: 'ફોન, ઈમેલ અને ક્લિનિક સરનામું સરળતાથી પહોંચવા માટે.',
    name: 'નામ',
    phone: 'ફોન',
    problem: 'સમસ્યા',
    sendRequest: 'વોટ્સએપ દ્વારા વિનંતી મોકલો',
    phoneNumber: '+917359779869',
    email: 'nilkanthhomoeopathy@gmail.com',
    address: 'જય કોર્નર, યોગી કિરાણા સ્ટોર પાસે, તુરખા રોડ, બોટાદ, ગુજરાત',
    time: 'સમય: સવારે 9:00 થી 1:00 | સાંજે 4:00 થી 8:00',
    servicesList: [
  {
    title: 'ચામડીની સ્થિતિ',
    desc: 'ખરજવું, સોરિયાસિસ,ધાધર, ખીલ,',
    fullDesc:' ખરજવું, સોરિયાસિસ,ધાધર, ખીલ,ખંજવાળ, વાળ ખરવા, ઉંદરી, ડેન્ડ્રફ અને વાળ સંબંધિત તકલીફોમાં વ્યક્તિગત હોમિયોપેથીક સારવાર આપવામાં આવે છે.મૂળ કારણ શોધીને સલામત અને લાંબા ગાળે ફાયદાકારક સુધારો થાય તે રીતે સારવાર આપવામાં આવે છે.'
  },
  { title: 'સ્ત્રી આરોગ્ય', 
    desc: 'PCOS, માસિક સમસ્યાઓ, હોર્મોનલ અસંતુલન માટે સારવાર.',
    fullDesc:'PCOS, માસિક સમસ્યાઓ, હોર્મોનલ અસંતુલન માટે સારવાર.અનિયમિત માસિક, સફેદ પાણી, માસિક દરમિયાન દુ:ખાવો, પીસીઓડી/પીસીઓએસ, હોર્મોનલ અસંતુલન, અંડાશયમાં ગાંઠ, ગર્ભાશયની ગાંઠ, વારંવાર ગર્ભપાત, ગર્ભ ધારણ કરવામાં મુશ્કેલી  અને અન્ય સામાન્ય મહિલાઓના પ્રશ્નો.' },
  {
    title: 'બાળ આરોગ્ય',
    desc: 'બાળકોના આરોગ્ય સંબંધિત તકલીફો',
   fullDesc:'બાળકોના આરોગ્ય સંબંધિત તકલીફો વારંવાર થતી શરદી-ઉધરસ, ઓછી રોગપ્રતિકારક શક્તિ, ભૂખ ન લાગવી, પાચનની તકલીફો, વારંવાર થતા ઇન્ફેક્શન.'
  },
  {
    title: 'એલર્જી',
    desc: 'ધૂળ, પરાગકણ અને સીઝનલ એલર્જી માટે લાંબા સમયનો રાહત.',
    fullDesc:'ધૂળ, પરાગકણ અને સીઝનલ એલર્જી માટે લાંબા સમયનો રાહત,છીંક, શરદી, ઉધરસ, ધૂળની એલર્જી,ગળામાં બળતરા, શ્વાસ લેવામાં તકલીફ અને વારંવાર થતી શ્વાસ સંબંધિત સમસ્યાઓ.'
  },
  { title: 'વાળ ખરવા', 
    desc: 'વાળ ખરવા, ખોડો અને ઉંદરીની સારવાર.' ,
    fullDesc:'વાળ ખરવા, ખોડો, ઉંદરી, સ્કેલ્પની સમસ્યાઓ અને અન્ય વાળ સંબંધિત સમસ્યાઓ.' 
},
  {
    title: 'સાંધાની પીડા',
    desc: 'આર્થ્રાઇટિસ, ઘૂંટણના દુખાવા અને ચાલવામાં સુધારા માટે ઉપચાર.',
    fullDesc:'આર્થ્રાઇટિસ, ઘૂંટણના દુખાવા અને ચાલવામાં સુધારા માટે ઉપચાર ,કમરનો દુખાવો, ગરદનનો દુખાવો, ઘૂંટણનો દુખાવો, માંસપેશીઓનો દુખાવો.'
  },
  

  { title: 'પાચન સમસ્યાઓ', 
    desc: 'એસિડિટી, કબજિયાત, થાંભલાઓ અને એનોરેક્ટલ સમસ્યાઓની સારવાર.' ,
    fullDesc:'એસિડિટી, કબજિયાત, થાંભલાઓ અને એનોરેક્ટલ સમસ્યાઓની સારવાર.એસિડિટી, ગેસ, પાચનમાં તકલીફ, કબજિયાત,હરસ/મસા, પેટમાં દુખાવો અને અન્ય પાચન સંબંધિત સમસ્યાઓ.'},

  { title: 'મગજની સમસ્યાઓ', 
    desc: 'માઇગ્રેન, તણાવ, ચિંતા અને ન્યુરોલોજીકલ સપોર્ટ.',
    fullDesc:'માઇગ્રેન, તણાવ, ચિંતા અને ન્યુરોલોજીકલ સપોર્ટ માઇગ્રેન, તણાવ, ચિંતા, નિંદ્રા ન આવવી, ન્યુરોલોજીકલ સ્થિતિઓ અને જ્ઞાનાત્મક સપોર્ટ.' },

  
  

  
],
    // serviceDesc: 'ઉપચાર કસ્ટમ ફોલો-અપ અને સમગ્ર કાળજી સાથે આપવામાં આવે છે.',
    footer: '© 2026 નિલકંઠ હોમિયોપેથી. સર્વ અધિકારો રાખેલ છે.',
    languageToggle: 'English'
  }
};

const serviceCards = [
  { icon: '🟢', key: 'skin' },
  { icon: '♀️', key: 'female' },
  { icon: '👶', key: 'child' },
  { icon: '🌿', key: 'allergy' },
  { icon: '💇', key: 'hair' },
  { icon: '🦴', key: 'joint' },
  { icon: '🤢', key: 'digestive' },
  { icon: '🧠', key: 'mental' },
];

const policyTexts = {
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Your Data, Our Care',
        text: 'Nilkanth Homeopathy respects your privacy. We collect only essential contact details to schedule appointments and respond to inquiries.'
      },
      {
        heading: 'How Information Is Used',
        text: 'Personal details are used for booking confirmation and follow-up care. We do not share your information with third parties except when required by law.'
      },
      {
        heading: 'Secure Access',
        text: 'Our site uses modern HTTPS protection. Sensitive data is stored securely and never sold.'
      }
    ]
  },
  terms: {
    title: 'Terms & Conditions',
    sections: [
      {
        heading: 'Service Agreement',
        text: 'Nilkanth Homeopathy provides informational resources and appointment scheduling. Diagnostic and treatment decisions are made by authorized clinic practitioners.'
      },
      {
        heading: 'Appointment Use',
        text: 'Bookings made through this website are subject to availability. Please verify your appointment details before arriving.'
      },
      {
        heading: 'General Use',
        text: 'Use of this website means you agree to respectful and legal interaction. Unsolicited commercial services or harmful content are prohibited.'
      }
    ]
  }
};

function PolicyModal({ variant, onClose }) {
  const policy = policyTexts[variant];
  if (!policy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4">
      <div className="max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-2xl bg-white p-5 shadow-2xl sm:p-7">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-green-700">{policy.title}</h3>
          <button onClick={onClose} className="rounded-md bg-slate-100 px-3 py-1 text-sm text-slate-700 hover:bg-slate-200">Close</button>
        </div>

        <div className="max-h-[70vh] space-y-4 overflow-y-auto pr-2 text-sm leading-6 text-slate-700">
          {policy.sections.map((item) => (
            <div key={item.heading}>
              <h4 className="mb-1 text-base font-semibold text-slate-900">{item.heading}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Footer({ onOpenPolicy }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-24 border-t border-green-100 bg-[#f0fdf4] text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-2xl font-bold text-[#22c55e]">Nilkanth Homeopathy</h3>
            <p className="mt-2 text-sm text-slate-600">Natural Healing with Homeopathy</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700">Quick Links</h4>
            <nav className="mt-3 space-y-2 text-sm">
              {['home', 'about', 'services', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="block rounded-lg px-2 py-1 text-slate-700 transition hover:bg-[#dcfce7] hover:text-[#166534]"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-700">
              <p className="inline-flex items-center gap-2">📞 +91 73597 79869</p>
              {/* <p className="inline-flex items-center gap-2">📍 Jay Corner, Turkha Road, Botad, Gujarat</p> */}
              <div className="mt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14779.351008799471!2d71.64066553115846!3d22.170247227255967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958dd00151fb309%3A0x7c5d520673cbbe1c!2sNilkanth%20clinic!5e0!3m2!1sen!2sin!4v1773745770655!5m2!1sen!2sin"
                   width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-xl">

    </iframe>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-slate-700">Legal</h4>
            <div className="mt-3 space-y-2 text-sm">
              <button
                type="button"
                onClick={() => onOpenPolicy('privacy')}
                className="w-full text-left rounded-lg px-2 py-1 text-slate-700 transition hover:bg-[#dcfce7] hover:text-[#166534]"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onOpenPolicy('terms')}
                className="w-full text-left rounded-lg px-2 py-1 text-slate-700 transition hover:bg-[#dcfce7] hover:text-[#166534]"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-green-100 pt-4 text-center text-xs text-slate-500">
          © {currentYear} Nilkanth Homeopathy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState('en');
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', problem: '' });
  const [activePolicy, setActivePolicy] = useState(null);

  const t = translations[lang];

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Appointment Request Name: ${form.name} Phone: ${form.phone} Problem: ${form.problem}`;
    window.open(`https://wa.me/917359779869?text=${encodeURIComponent(message)}`, '_blank');
  };

//   const serviceCardsText = useMemo(() => t.servicesList, [t.servicesList]);
  const serviceCardsText = useMemo(() => t.servicesList, [lang]);
  const [showAll, setShowAll] = useState(false);
  
  const visibleServices = showAll 
    ? t.servicesList 
    : t.servicesList.slice(0, 4);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-green-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#home" className="font-bold text-xl text-homeoGreen">{t.clinicName}</a>

          <nav className="hidden space-x-5 text-sm font-medium md:flex">
            {[
              ['home', 'Home'],
              ['about', t.about],
              ['services', t.services],
              ['contact', t.contact]
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-lg px-3 py-2 text-slate-700 transition hover:bg-homeoGreen hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang((prev) => (prev === 'en' ? 'gu' : 'en'))}
              className="rounded-full bg-homeoGreen px-4 py-2 text-white shadow-sm transition hover:shadow-lg"
            >
              {t.languageToggle}
            </button>
            <button
              className="md:hidden rounded-lg bg-slate-100 px-3 py-2 text-slate-800"
              onClick={() => setMenu((v) => !v)}
            >
              ☰
            </button>
          </div>
        </div>

        {menu && (
          <div className="md:hidden border-t border-green-100 bg-white px-4 py-4 text-sm">
            <div className="space-y-2">
              <a className="block rounded-lg px-3 py-2 hover:bg-homeoGreen hover:text-white" href="#home" onClick={() => setMenu(false)}>
                Home
              </a>
              <a className="block rounded-lg px-3 py-2 hover:bg-homeoGreen hover:text-white" href="#about" onClick={() => setMenu(false)}>
                {t.about}
              </a>
              <a className="block rounded-lg px-3 py-2 hover:bg-homeoGreen hover:text-white" href="#services" onClick={() => setMenu(false)}>
                {t.services}
              </a>
              <a className="block rounded-lg px-3 py-2 hover:bg-homeoGreen hover:text-white" href="#contact" onClick={() => setMenu(false)}>
                {t.contact}
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative bg-[url('https://images.unsplash.com/photo-1596495577886-d920f0754fc1?fit=crop&w=1400&q=80')] bg-cover bg-center py-20 text-white">
          <div className="absolute inset-0 bg-homeoGreen/70" />
          <div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
            <h1 className="z-10 fade-in text-3xl font-bold tracking-tight md:text-5xl">{t.clinicName}</h1>
            <p className="z-10 mt-4 text-lg md:text-2xl">{t.tagline}</p>

            <div className="z-10 mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href={`tel:${t.phoneNumber}`}
                className="rounded-xl bg-white px-10 py-3 font-semibold text-homeoGreen transition hover:bg-green-50"
              >
                {t.callNow}
              </a>
              <a
                href={`https://wa.me/917359779869`}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-[#25D366] px-10 py-3 font-semibold text-white transition hover:opacity-90"
              >
                {t.whatsapp}
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="bg-lightGreyGreen py-14">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-4 text-3xl font-bold text-homeoGreen">{t.about}</h2>
            <div className="rounded-2xl border border-green-100 bg-white p-6 text-slate-700 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{t.doctorName}</h3>
              {t.aboutText.split('\n').map((line, idx) => (
                <p key={idx} className="mt-3">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-14">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <h2 className="mb-8 text-3xl font-bold text-homeoGreen">
                    {t.services}
                    </h2>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {visibleServices.map((item, index) => (
                        <article
                        key={index}
                        className="rounded-2xl border border-green-100 bg-white p-6 transition hover:shadow-xl"
                        >
                        <h3 className="text-4xl">
                            {serviceCards[index % 8].icon}
                        </h3>

                        <h4 className="mt-4 text-xl font-semibold text-slate-800">
                            {item.title}
                        </h4>

                        <p className="mt-2 text-slate-600">
                            {item.desc}
                        </p>

                        {/* ✅ Read More Button (INSIDE CARD) */}
                        <button
                            onClick={() => setSelectedService(item)}
                            className="mt-3 text-homeoGreen font-semibold hover:underline"
                        >
                            Read More →
                        </button>
                        </article>
                    ))}
                    </div>

                    {/* ✅ View More Button */}
                    <div className="mt-8 text-center">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="rounded-xl bg-homeoGreen px-6 py-3 text-white font-semibold hover:bg-green-700 transition"
                    >
                        {showAll ? 'Show Less' : 'View More'}
                    </button>
                    </div>
                </div>

                {/* ✅ Popup Modal (KEEP OUTSIDE GRID) */}
                {selectedService && (
                    <div
                        // bar click karvi atle jatu re
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fadeIn"
                        onClick={() => setSelectedService(null)} 
                        >
                        <div
                            className="max-w-lg w-full rounded-2xl bg-white p-6 shadow-xl relative transform transition-all scale-100"
                            onClick={(e) => e.stopPropagation()}
                        >

                        {/* Close Button */}
                        <button
                        onClick={() => setSelectedService(null)}
                        className="absolute top-3 right-3 text-xl"
                        >
                        ✖
                        </button>

                        {/* Content */}
                        <h2 className="text-2xl font-bold text-homeoGreen">
                        {selectedService.title}
                        </h2>

                        <p className="mt-4 text-slate-700">
                        {selectedService.fullDesc}
                        </p>
                    

                    </div>
                    </div>
                )}
</section>


        <section id="why" className="bg-lightGreyGreen py-14">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-homeoGreen">{t.whyTitle}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.whyPoints.map((point) => (
                <div key={point} className="rounded-xl border border-green-100 bg-white p-5 text-slate-700 transition hover:shadow-lg">
                  <p>✅ {point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-14">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-8 text-3xl font-bold text-homeoGreen">{t.testimonials}</h2>
            <div className="space-y-4">
              <blockquote className="rounded-2xl border border-green-100 bg-white p-6 text-slate-700 shadow-sm">
                "I was suffering from severe skin allergy and constant itching for months. After taking treatment from NILKANTH Homeopathy, I noticed gradual but lasting improvement. The medicines were gentle and completely safe. Now my skin is much clearer and healthier. Highly recommended!"
              </blockquote>
              <blockquote className="rounded-2xl border border-green-100 bg-white p-6 text-slate-700 shadow-sm">
                "I had been facing hormonal imbalance and irregular periods for a long time. After starting homeopathic treatment at NILKANTH , my health improved naturally without any side effects. The doctor understood my problem deeply and provided personalized care. I feel much better and more confident now."
              </blockquote>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-lightGreyGreen py-14">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="mb-6 text-3xl font-bold text-homeoGreen">{t.contact}</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-green-100 bg-white p-6">
                <p className="mb-2 font-semibold">📞 {t.phoneNumber}</p>
                <p className="mb-2">✉️ {t.email}</p>
                <p>📍 {t.address}</p>
                <p className="mt-2">⏰ {t.time}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-green-100 bg-white p-6 shadow-sm">
                <input
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder={t.name}
                  required
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-homeoGreen"
                />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  placeholder={t.phone}
                  required

                  maxLength={10}
                  pattern="[0-9]{10}"
                  
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-homeoGreen"
                />
                <textarea
                  value={form.problem}
                  onChange={(e) => setForm((p) => ({ ...p, problem: e.target.value }))}
                  placeholder={t.problem}
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-homeoGreen"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-homeoGreen py-3 font-semibold text-white hover:bg-[#256d2e] transition"
                >
                  {t.sendRequest}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenPolicy={setActivePolicy} />
      {activePolicy && <PolicyModal variant={activePolicy} onClose={() => setActivePolicy(null)} />}

      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-evenly border-t border-green-200 bg-white p-2 md:hidden">
        <a href={`tel:${t.phoneNumber}`} className="w-1/2 rounded-lg bg-homeoGreen py-2 text-center text-xs font-bold text-white">
          {t.callNow}
        </a>
        <a href="https://wa.me/917359779869" target="_blank" rel="noreferrer" className="w-1/2 rounded-lg bg-[#25D366] py-2 text-center text-xs font-bold text-white">
          {t.whatsapp}
        </a>
      </div>
    </div>
  );
}
