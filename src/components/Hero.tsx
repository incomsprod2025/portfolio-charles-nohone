import { motion } from "motion/react";
import { MessageSquare, ArrowRight, MapPin, Sparkles, Trophy, Star } from "lucide-react";

export default function Hero() {
  const socialSkills = [
    { name: "Infographie Pro", color: "bg-brick text-white border-brick" },
    { name: "Montage Vidéo Reel/TikTok", color: "bg-charcoal-black text-warm-beige border-charcoal-black" },
    { name: "Création Web & FlutterFlow", color: "bg-brick-light text-brick border-brick/20" },
    { name: "Emailing & Tunnels de Vente", color: "bg-white text-charcoal-black border-warm-gray" }
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-radial from-slate-50 via-warm-beige to-warm-gray/40 overflow-hidden"
    >
      {/* Decorative ambient elements */}
      <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-brick/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Copywriting Text details */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            <div>
              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brick-light border border-brick/10 text-brick text-xs font-mono font-bold uppercase tracking-wider mb-5 mx-auto lg:mx-0 shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5 animate-bounce text-brick" />
                <span>Disponible à Abidjan &amp; International</span>
              </motion.div>

              {/* Catchy headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal-black leading-[1.1]"
              >
                Donnez du souffle à votre <br />
                <span className="text-brick relative inline-block">
                  communication digitale
                  <svg className="absolute left-0 bottom-[-8px] w-full h-2.5 text-brick/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-charcoal-black/75 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Je m'appelle <strong>Charles Nohone</strong>. Social Media Manager et Infographe spécialisé.
              J'accompagne les cabinets de formation, les startups logistiques et les créateurs à capturer l'attention avec des 
              visuels originaux et des vidéos de format court (Reels/TikTok) ultra-dynamiques.
            </motion.p>

            {/* Main CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/2250140980335?text=Bonjour%20Charles,%20j'ai%20visité%20votre%20portfolio%20et%20j'aimerais%20lancer%20un%20projet%20avec%20vous"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brick hover:bg-brick-dark text-white rounded-2xl font-bold text-base shadow-lg shadow-brick/25 hover:shadow-brick/35 cursor-pointer hover:translate-y-[-2px] transition-all duration-200"
                id="cta-whatsapp-hero"
              >
                <MessageSquare className="w-5.5 h-5.5" />
                <span>Me lancer sur WhatsApp</span>
              </a>
              <button
                onClick={() => handleScrollTo("services")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border border-warm-gray text-charcoal-black hover:bg-warm-gray rounded-2xl font-semibold text-base transition-all duration-200 cursor-pointer shadow-xs"
                id="cta-discover-hero"
              >
                <span>Découvrir mes services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Micro skill tags layout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-warm-gray text-left"
            >
              <h2 className="text-xs font-mono font-bold text-charcoal-black/50 uppercase tracking-widest mb-3 text-center lg:text-left">
                Champs d&apos;expertise et savoir-faire
              </h2>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {socialSkills.map((skill, index) => (
                  <span
                    key={index}
                    className={`text-xs font-medium px-3.5 py-1.5 rounded-full border shadow-2xs ${skill.color}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Column 2: Digital Workspace Graphic illustration representation representing a high-energy media workspace */}
          <div className="lg:col-span-5 relative flex justify-center py-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[380px] lg:max-w-none aspect-square sm:aspect-4/5"
            >
              {/* Outer floating visual cards representing Charles' multi-talented stack */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brick/10 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Main Visual Profile illustration container with clean visual framing */}
              <div className="absolute inset-4 rounded-[2.5rem] bg-charcoal-black p-1 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-radial from-brick/20 via-transparent to-charcoal-black opacity-65 z-10" />
                
                {/* Simulated professional workspace design showing editing tools, sliders and Charles' focus */}
                <div className="w-full h-full bg-radial from-stone-900 to-charcoal-black text-stone-200 p-6 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Decorative timeline editor pattern representing editing capability */}
                  <div className="absolute right-0 top-0 w-32 h-32 opacity-15 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white">
                      <circle cx="100" cy="0" r="100" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="0" r="80" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="100" cy="0" r="60" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  </div>

                  {/* Header widget */}
                  <div className="flex justify-between items-center relative z-20">
                    <span className="text-[10px] font-mono font-bold text-brick tracking-widest flex items-center gap-1.5 bg-brick/15 px-2 py-1 rounded">
                      <Sparkles className="w-3 h-3 text-brick animate-spin" />
                      LIVE STUDIO
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">FPS: 60.0</span>
                  </div>

                  {/* Center Face / Avatar Simulation Illustration (representing his sleek profile picture on the CV) */}
                  <div className="my-[5%] flex flex-col items-center justify-center relative z-20">
                    <div className="relative">
                      {/* Circle border gradient */}
                      <div className="w-48 h-48 rounded-full bg-gradient-to-b from-brick via-brick-dark to-stone-900 p-[3px] shadow-xl relative group">
                        <div className="w-full h-full rounded-full bg-charcoal-black flex items-center justify-center overflow-hidden relative">
                          
                          {/* Face Avatar Vector Graphic */}
                          <svg viewBox="0 0 100 100" className="w-full h-full text-stone-300 fill-stone-500 scale-[0.82] translate-y-3">
                            {/* Head & Face */}
                            <path d="M50 25 C33 25 30 42 30 52 C30 62 38 72 50 72 C62 72 70 62 70 52 C70 42 67 25 50 25 Z" fill="#2E231C" />
                            <path d="M50 23 C35 23 32 38 32 48 C32 49 68 49 68 48 C68 38 65 23 50 23 Z" fill="#1C1512" />
                            {/* Face details */}
                            <path d="M30 55 C30 57 32 60 40 60 L60 60 C68 60 70 57 70 55 C70 54 30 54 30 55 Z" fill="#261C16" />
                            <circle cx="43" cy="48" r="2.5" fill="#111" />
                            <circle cx="57" cy="48" r="2.5" fill="#111" />
                            {/* Beard / Shadow */}
                            <path d="M36 53 C36 67 43 71 50 71 C57 71 64 67 64 53 C64 58 57 65 50 65 C43 65 36 58 36 53 Z" fill="#16100C" />
                            {/* Shoulder / Collar */}
                            <path d="M12 95 C14 80 25 74 38 72 L42 77 L58 77 L62 72 C75 74 86 80 88 95 Z" fill="#1B1715" />
                            <path d="M38 72 L50 82 L62 72 C58 75 42 75 38 72 Z" fill="#2E231C" />
                            {/* Sleek Suit Collar */}
                            <path d="M26 84 L38 72 L42 85 Z" fill="#0C0A09" />
                            <path d="M74 84 L62 72 L58 85 Z" fill="#0C0A09" />
                            {/* White Shirt Tip */}
                            <path d="M48 78 L52 78 L50 83 Z" fill="#FFF" />
                          </svg>

                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/75 via-transparent to-transparent" />
                        </div>
                      </div>

                      {/* Sparkle badge */}
                      <div className="absolute -bottom-2 -right-1 bg-brick text-white p-2 rounded-full shadow-lg">
                        <Trophy className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <h3 className="font-display font-bold text-lg tracking-wide text-white">Charles Nohone</h3>
                      <p className="text-xs text-brick font-mono uppercase tracking-widest font-semibold">Social Media &amp; Designer</p>
                    </div>
                  </div>

                  {/* Creative Interactive Statistics Panel representation representing Charles' high reviews */}
                  <div className="bg-stone-900/90 rounded-2xl p-3 border border-stone-800/80 grid grid-cols-3 gap-2 relative z-20 text-center">
                    <div>
                      <span className="block text-xl font-display font-extrabold text-brick">07+</span>
                      <span className="text-[8px] font-mono text-stone-400 uppercase tracking-wider">Ans Expérience</span>
                    </div>
                    <div className="border-x border-stone-800">
                      <span className="block text-xl font-display font-extrabold text-white">100%</span>
                      <span className="text-[8px] font-mono text-stone-400 uppercase tracking-wider">Réussite</span>
                    </div>
                    <div>
                      <span className="block text-xl font-display font-extrabold text-white">24/7/365</span>
                      <span className="text-[8px] font-mono text-stone-400 uppercase tracking-wider">Support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Widget 1: Happy review notification feedback */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
                className="absolute top-[10%] -left-6 md:-left-12 bg-white/95 rounded-2xl p-4 shadow-xl border border-warm-gray max-w-[200px]"
              >
                <div className="flex items-center gap-1.5 mb-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <p className="text-[10px] text-charcoal-black/85 leading-tight">
                  &quot;Taux de clics record pour nos courriels d&apos;inscription&quot;
                </p>
                <span className="block text-[8px] text-brick font-mono mt-1">Cabinet CELAF</span>
              </motion.div>

              {/* Floating Widget 2: Video tools action */}
              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  delay: 1,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[13%] -right-6 md:-right-12 bg-charcoal-black text-white rounded-2xl p-3 shadow-xl flex items-center gap-3 border border-stone-800"
              >
                <div className="bg-brick/20 text-brick p-2 rounded-xl">
                  <Sparkles className="w-4 h-4 text-brick" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-stone-400 uppercase">Vidéo Reels</span>
                  <span className="block text-xs font-bold font-display text-white">Rendu ultra-fluide</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
