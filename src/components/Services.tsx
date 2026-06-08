import { useState } from "react";
import { motion } from "motion/react";
import { servicesData } from "../data";
import { Service } from "../types";
import { Palette, Video, Globe, Check, MessageSquare, ArrowRight, ChevronRight } from "lucide-react";

// Helper component to render proper Icons based on string names
function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case "Palette":
      return <Palette className="w-6 h-6 text-brick" />;
    case "Video":
      return <Video className="w-6 h-6 text-brick" />;
    case "Globe":
      return <Globe className="w-6 h-6 text-brick" />;
    default:
      return <Palette className="w-6 h-6 text-brick" />;
  }
}

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);

  // Creative addition: Live Quote Calculator for Charles' services based on selected choices
  const [calcService, setCalcService] = useState<string>("infography");
  const [calcComplexity, setCalcComplexity] = useState<number>(1.2); // Multiplier
  const [calcQuantity, setCalcQuantity] = useState<number>(3); // Number of items

  // Estimator logic
  const getEstimatedPrice = () => {
    let basePrice = 15000;
    if (calcService === "video") basePrice = 25000;
    if (calcService === "webdev") basePrice = 120000;

    const total = Math.round(basePrice * calcComplexity * calcQuantity);
    return total.toLocaleString("fr-FR") + " FCFA";
  };

  const getCalcWhatsappLink = () => {
    const serviceName = servicesData.find(s => s.id === calcService)?.title || "Service";
    const text = `Bonjour Charles, j'ai utilisé l'estimateur de votre portfolio. Je suis intéressé(e) par la commande de ${calcQuantity} x "${serviceName}" avec un niveau d'exigence personnalisé. Pouvons-nous en discuter ?`;
    return `https://wa.me/2250140980335?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden scroll-mt">
      {/* Background aesthetics */}
      <div className="absolute top-[30%] right-[5%] w-72 h-72 bg-brick/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-warm-gray/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-brick tracking-widest uppercase bg-brick-light px-3.5 py-1.5 rounded-full">
            CE QUE JE FAIS DE MIEUX
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal-black mt-4 tracking-tight leading-tight">
            Des services de communication digitale <br />
            <span className="text-brick">orientés croissance</span>
          </h2>
          <p className="text-charcoal-black/70 mt-4 text-base sm:text-lg">
            Que ce soit pour captiver l&apos;attention visuellement, dynamiser l&apos;engagement vidéo, 
            ou propulser votre présence sur le Web, je crée des solutions taillées pour convertir.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service: Service, idx) => {
            const isActive = activeService === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
                className={`relative rounded-3xl p-8 border hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? "bg-stone-900 text-stone-200 border-stone-800 shadow-xl translate-y-[-4px]"
                    : "bg-radial from-slate-50 to-warm-beige/30 text-charcoal-black border-warm-gray"
                }`}
              >
                <div>
                  {/* Service Accent Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-4 rounded-2xl ${isActive ? "bg-stone-800" : "bg-brick-light/50"}`}>
                      <ServiceIcon name={service.iconName} />
                    </div>
                    {service.priceRange && (
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        isActive ? "bg-brick text-white" : "bg-warm-gray text-charcoal-black/60"
                      }`}>
                        {service.priceRange}
                      </span>
                    )}
                  </div>

                  <h3 className={`font-display font-extrabold text-xl tracking-tight mb-2 ${
                    isActive ? "text-white" : "text-charcoal-black"
                  }`}>
                    {service.title}
                  </h3>
                  
                  <p className={`text-xs font-mono font-medium mb-4 ${
                    isActive ? "text-brick" : "text-brick"
                  }`}>
                    {service.subtitle}
                  </p>

                  <p className={`text-sm leading-relaxed mb-6 ${
                    isActive ? "text-stone-300/90" : "text-charcoal-black/70"
                  }`}>
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <Check className="w-4 h-4 text-brick mt-0.5 shrink-0" />
                        <span className={isActive ? "text-stone-300" : "text-charcoal-black/80"}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card footer details / Link to WhatsApp */}
                <div className="pt-6 border-t border-dashed border-stone-800/10 dark:border-stone-100/10">
                  <a
                    href={`https://wa.me/2250140980335?text=${encodeURIComponent(
                      `Bonjour Charles, j'ai vu votre service "${service.title}" sur votre portfolio et j'aimerais qu'on en discute.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider py-1 cursor-pointer transition-colors ${
                      isActive ? "text-brick hover:text-white" : "text-brick hover:text-charcoal-black"
                    }`}
                  >
                    <span>Lancer un projet</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic quote calculator - A creative differentiator that is highly useful for client conversions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-charcoal-black text-stone-200 rounded-[2.5rem] p-8 lg:p-12 border border-stone-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle logo vector */}
          <div className="absolute right-0 bottom-0 w-64 h-64 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-white">
              <polygon points="50,15 90,85 10,85" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Title */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-brick font-bold uppercase bg-brick/15 px-3 py-1 rounded">
                SIMULATEUR DE PROJETS
              </span>
              <h3 className="font-display font-black text-2xl lg:text-3xl text-white tracking-tight">
                Estimez le tarif de <br/>votre commande en 1 clic
              </h3>
              <p className="text-sm text-stone-400 leading-relaxed">
                Choisissez votre prestation, ajustez la quantité et le niveau d&apos;urgence pour obtenir un budget indicatif instantané.
              </p>
              
              <div className="bg-stone-900 border border-stone-800 px-4 py-3 rounded-2xl">
                <span className="text-[10px] font-mono text-stone-400 uppercase block mb-1">Total estimé</span>
                <span className="text-2xl font-display font-black text-brick animate-pulse">{getEstimatedPrice()}</span>
                <span className="text-[10px] text-stone-500 block mt-1">*Tarif indicatif sous réserve de validation de cahier des charges</span>
              </div>
            </div>

            {/* Calculations Fields */}
            <div className="lg:col-span-7 bg-stone-900 p-6 lg:p-8 rounded-3xl border border-stone-800/80 space-y-6">
              {/* Prestation selection list */}
              <div>
                <label className="block text-xs font-mono font-bold text-stone-400 uppercase mb-3">
                  1. Quel service désirez-vous ?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {servicesData.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setCalcService(s.id)}
                      className={`text-xs font-bold py-3.5 px-2 rounded-xl border text-center transition-all cursor-pointer ${
                        calcService === s.id
                          ? "bg-brick text-white border-brick shadow-md shadow-brick/20"
                          : "bg-charcoal-black border-stone-800 text-stone-400 hover:text-stone-200"
                      }`}
                    >
                      {s.id === "infography" ? "Design / Graphique" : s.id === "video" ? "Montage Vidéo" : "Création Web"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Quantity adjustments */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-400 uppercase mb-2">
                    2. Volume de livraison : <span className="text-brick font-bold">{calcQuantity}</span> {calcService === "webdev" ? "Page / Livrable" : "Visuel / Vidéo"}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="15"
                    value={calcQuantity}
                    onChange={(e) => setCalcQuantity(parseInt(e.target.value))}
                    className="w-full accent-brick cursor-pointer bg-stone-800 h-1.5 rounded-lg appearance-none"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-500 mt-1">
                    <span>1 lvr</span>
                    <span>15 lvr</span>
                  </div>
                </div>

                {/* Urgency adjustments */}
                <div>
                  <label className="block text-xs font-mono font-bold text-stone-400 uppercase mb-2">
                    3. Niveau de priorité &amp; Urgence
                  </label>
                  <div className="flex items-center gap-1.5 justify-between">
                    {[
                      { label: "Standard (+7j)", val: 1.0 },
                      { label: "Prioritaire (4-6j)", val: 1.25 },
                      { label: "Express (48h)", val: 1.5 }
                    ].map((urg) => (
                      <button
                        key={urg.label}
                        onClick={() => setCalcComplexity(urg.val)}
                        className={`text-[10px] font-bold p-2.5 rounded-lg border flex-1 text-center transition-all cursor-pointer ${
                          calcComplexity === urg.val
                            ? "bg-stone-800 text-brick border-brick"
                            : "bg-charcoal-black border-stone-800 text-stone-400 hover:text-stone-300"
                        }`}
                      >
                        {urg.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instant checkout order */}
              <div className="pt-2">
                <a
                  href={getCalcWhatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-brick hover:bg-brick-dark text-white rounded-xl font-bold text-sm shadow-lg shadow-brick/25 cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Envoyer cette estimation à Charles (+225)</span>
                </a>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
