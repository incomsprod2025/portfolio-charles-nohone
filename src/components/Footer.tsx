import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { experiencesData } from "../data";
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, GraduationCap, Globe, FileText, CheckCircle2, MessageSquare } from "lucide-react";

export default function Footer() {
  const [showCv, setShowCv] = useState<boolean>(false);

  const stats = [
    { label: "Projets Graphiques", value: "80+" },
    { label: "Montages Vidéos", value: "45+" },
    { label: "Sites Web Intégrés", value: "10+" },
    { label: "Clients Heureux", value: "100%" }
  ];

  return (
    <footer id="footer" className="bg-charcoal-black text-stone-200 pt-20 pb-10 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-[-10%] w-[45%] h-[45%] bg-brick/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-72 h-72 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main contact CTA card banner */}
        <div className="bg-stone-900 rounded-[2.5rem] border border-stone-800 p-8 lg:p-12 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-6 text-left">
              <span className="text-[10px] font-mono tracking-widest text-brick font-bold uppercase bg-brick/15 px-3 py-1 rounded inline-block">
                LANCEZ VOTRE SÉANCE DE SÉQUENCE
              </span>
              <h3 className="font-display font-black text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                Prêt à faire briller <br />
                <span className="text-brick">votre marque en ligne ?</span>
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed max-w-md">
                Discutons de vos besoins de design, montage de Reels ou création web. Mon processus est ultra-rapide, transparent, et centré sur vos indicateurs de performance.
              </p>

              {/* Status display credits */}
              <div className="flex gap-4 items-center">
                <span className="flex items-center gap-1.5 text-xs text-stone-500 font-mono">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  Disponible pour projets
                </span>
                <span className="text-stone-700">|</span>
                <span className="text-xs text-stone-500 font-mono">
                  Réponse sous 1 heure
                </span>
              </div>
            </div>

            {/* Direct Contact links details list */}
            <div className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Whatsapp call option card */}
                <a
                  href="https://wa.me/2250140980335?text=Bonjour%20Charles,%20j'arrive%20de%20votre%20portfolio%20et%20j'ai%20une%20demande%20urgente."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-950 p-5 rounded-2xl border border-stone-850 hover:bg-stone-900 hover:border-brick/35 transition-all flex items-start gap-3.5 group cursor-pointer"
                  id="cta-whatsapp-footer-card"
                >
                  <div className="p-3 rounded-xl bg-brick/15 text-brick group-hover:bg-brick group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase block font-semibold">WHATSAPP DIRECT</span>
                    <span className="text-sm font-bold text-white block mt-0.5">+225 01 40 98 03 35</span>
                    <span className="text-[9px] text-brick mt-1 block font-medium underline">Lancer la discussion</span>
                  </div>
                </a>

                {/* Email Option Card */}
                <a
                  href="mailto:charlesdrepebanohone@gmail.com"
                  className="bg-stone-950 p-5 rounded-2xl border border-stone-850 hover:bg-stone-900 hover:border-brick/35 transition-all flex items-start gap-3.5 group cursor-pointer"
                  id="cta-email-footer-card"
                >
                  <div className="p-3 rounded-xl bg-brick/15 text-brick group-hover:bg-brick group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-stone-500 uppercase block font-semibold">EMAIL PROFESSIONNEL</span>
                    <span className="text-sm font-bold text-white block mt-0.5 break-all">charlesdrepebanohone@gmail.com</span>
                    <span className="text-[9px] text-brick mt-1 block font-medium underline">Envoyer un courriel</span>
                  </div>
                </a>
              </div>

              {/* Physical presence location card */}
              <div className="bg-stone-950/50 p-4 rounded-xl border border-stone-850/60 flex items-center gap-3 text-xs text-stone-400">
                <MapPin className="w-4 h-4 text-brick animate-bounce" />
                <span>Adresse physique : <strong>Koumassi Sicogi, Abidjan - Côte d&apos;Ivoire</strong></span>
              </div>

            </div>

          </div>
        </div>

        {/* INTERACTIVE COMPREHENSIVE DIGITAL CV DRAWER ACCORDION */}
        <div id="cv" className="border border-stone-800 bg-stone-900/40 rounded-3xl mb-16 overflow-hidden">
          
          {/* Drawer trigger bar */}
          <button
            onClick={() => setShowCv(!showCv)}
            className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-stone-900/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-stone-800 text-brick">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-extrabold text-base text-white tracking-wide uppercase">
                  Consulter mon CV complet interactif
                </h4>
                <p className="text-xs text-stone-400 mt-0.5">
                  Parcours professionnel, diplômes universitaires et langues (Français &amp; Anglais)
                </p>
              </div>
            </div>
            <div className="p-1 rounded-full bg-stone-800 text-stone-400">
              {showCv ? <ChevronUp className="w-5 h-5 text-brick" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>

          {/* Drawer body details collapsible content */}
          <AnimatePresence>
            {showCv && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="p-6 lg:p-8 border-t border-stone-800 bg-stone-900/20 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
                  
                  {/* Left sub-column: Expérience list timeline switcher */}
                  <div className="lg:col-span-8 space-y-6">
                    <h5 className="text-xs font-mono font-bold text-brick uppercase tracking-widest border-b border-stone-800 pb-2">
                      EXPÉRIENCES PROFESSIONNELLES (2017 - 2025)
                    </h5>
                    
                    <div className="relative border-l border-stone-800 pl-5 space-y-8 py-2">
                      {experiencesData.map((exp) => (
                        <div key={exp.id} className="relative group">
                          {/* Indicator glowing timeline node */}
                          <div className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-stone-800 group-hover:bg-brick border border-stone-900 transition-colors" />
                          
                          <div>
                            <span className="text-[10px] font-mono font-bold text-stone-500 uppercase tracking-widest">
                              {exp.duration}
                            </span>
                            <h6 className="font-display font-extrabold text-base text-white mt-1">
                              {exp.role}
                            </h6>
                            <p className="text-xs text-brick font-medium">
                              {exp.company} — <span className="text-[10px] text-stone-400">{exp.location}</span>
                            </p>
                            
                            <ul className="mt-3.5 space-y-2">
                              {exp.description.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2 text-xs text-stone-300">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-brick mt-0.5 shrink-0" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right sub-column: Formation & competencies and languages */}
                  <div className="lg:col-span-4 space-y-8">
                    
                    {/* Education block */}
                    <div className="space-y-4">
                      <h5 className="text-xs font-mono font-bold text-brick uppercase tracking-widest border-b border-stone-800 pb-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-brick" />
                        <span>DIPLÔMES &amp; FORMATIONS</span>
                      </h5>
                      <div className="space-y-4">
                        <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                          <span className="text-[10px] font-mono text-stone-500 font-bold">2013 - 2014</span>
                          <h6 className="text-xs font-display font-bold text-white mt-0.5">Licence en Science Informatique</h6>
                          <p className="text-[10px] font-mono text-brick">Groupe ITA Ingénierie SA</p>
                        </div>
                        <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
                          <span className="text-[10px] font-mono text-stone-500 font-bold">2012 - 2013</span>
                          <h6 className="text-xs font-display font-bold text-white mt-0.5">BTS en IDA</h6>
                          <p className="text-[10px] font-mono text-brick">Groupe ITA Ingénierie SA</p>
                        </div>
                      </div>
                    </div>

                    {/* Competencies skills stats indicator */}
                    <div className="space-y-3">
                      <h5 className="text-xs font-mono font-bold text-brick uppercase tracking-widest border-b border-stone-800 pb-2">
                        COMPÉTENCES STRATÉGIQUES
                      </h5>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Digital Marketing",
                          "Création site web",
                          "Création application",
                          "Vibe Coding",
                          "Python / FlutterFlow",
                          "Leadership"
                        ].map((skill, sIdx) => (
                          <div key={sIdx} className="bg-stone-900 p-2.5 rounded-lg border border-stone-800/80 text-[10px] text-stone-300 font-medium font-mono text-center">
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Languages block */}
                    <div className="space-y-3">
                      <h5 className="text-xs font-mono font-bold text-brick uppercase tracking-widest border-b border-stone-800 pb-2 flex items-center gap-2">
                        <Globe className="w-4 h-4 text-brick" />
                        <span>MAÎTRISE DES LANGUES</span>
                      </h5>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex justify-between items-center bg-stone-900 px-3 py-2.5 rounded-lg border border-stone-800">
                          <span className="text-stone-350">Français</span>
                          <span className="text-brick font-bold">Maternelle / Courant</span>
                        </div>
                        <div className="flex justify-between items-center bg-stone-900 px-3 py-2.5 rounded-lg border border-stone-800">
                          <span className="text-stone-350">Anglais</span>
                          <span className="text-brick font-bold">Intermédiaire (Moyen)</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Global Statistics ticker row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-stone-800/80 text-center mb-16">
          {stats.map((s, idx) => (
            <div key={idx}>
              <span className="block text-3xl sm:text-4xl font-display font-black text-brick tracking-tight">{s.value}</span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-500 font-medium block mt-1">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Footer legal credits bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-stone-500">
          <div>
            <span>Conçu &amp; Développé pour <strong>Charles Nohone</strong> © {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-brick select-none">Abidjan, Côte d&apos;Ivoire</span>
            <span>•</span>
            <a href="https://wa.me/2250140980335" target="_blank" rel="noopener noreferrer" className="hover:text-brick underline">Support WhatsApp</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
