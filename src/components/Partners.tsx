import { motion } from "motion/react";
import { partnersData } from "../data";
import { Quote, Mail, ExternalLink, Award } from "lucide-react";

export default function Partners() {
  return (
    <section id="partners" className="py-24 bg-warm-beige relative overflow-hidden scroll-mt">
      {/* Visual background details */}
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-brick/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[35%] h-[35%] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-brick tracking-widest uppercase bg-brick-light px-3.5 py-1.5 rounded-full">
            NOS PARTENAIRES &amp; RÉFÉRENCES
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal-black mt-4 tracking-tight leading-tight">
            Ils me font confiance pour <br />
            <span className="text-brick">propulser leur image</span>
          </h2>
          <p className="text-charcoal-black/70 mt-4 text-sm sm:text-base">
            Qu&apos;il s&apos;agisse de cabinets de formation agréés, d&apos;incuba-starters ou d&apos;acteurs de l&apos;e-commerce et de la logistique à Abidjan, 
            mes réalisations ont fait leurs preuves auprès de structures variées.
          </p>
        </div>

        {/* Written testimonies cards list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnersData.map((partner, idx) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl p-8 border border-warm-gray relative flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow group"
            >
              {/* Quote icon banner background */}
              <div className="absolute right-6 top-6 text-brick/10 group-hover:text-brick/15 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div className="space-y-4">
                {/* Rating score design indicator */}
                <div className="text-xs font-mono font-bold tracking-widest text-brick flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>CRÉATION LOGO &amp; SUPPORTS CERTIFIÉS</span>
                </div>

                <p className="text-sm text-charcoal-black/80 leading-relaxed font-sans relative z-10 italic">
                  &quot;{partner.comment}&quot;
                </p>
              </div>

              {/* Author profiles details */}
              <div className="pt-6 mt-6 border-t border-warm-gray flex flex-col sm:flex-row gap-4 justify-between sm:items-center">
                <div>
                  <h4 className="font-display font-bold text-base text-charcoal-black">{partner.name}</h4>
                  <p className="text-xs font-mono text-brick font-semibold uppercase tracking-wider">{partner.role}</p>
                </div>

                {/* Direct Action links buttons */}
                <div className="flex flex-wrap gap-2.5">
                  {partner.email && (
                    <a
                      href={`mailto:${partner.email}`}
                      className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase border border-warm-gray px-3 py-1.5 rounded-lg text-charcoal-black/75 hover:bg-warm-gray hover:text-brick transition-all cursor-pointer"
                      title="Envoyer un mail"
                    >
                      <Mail className="w-3.5 h-3.5 text-brick" />
                      <span>Email</span>
                    </a>
                  )}
                  {partner.website && (
                    <a
                      href={`https://${partner.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase border border-warm-gray px-3 py-1.5 rounded-lg text-charcoal-black/75 hover:bg-warm-gray hover:text-brick transition-all cursor-pointer"
                      title="Visiter le site"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-brick" />
                      <span>Site web</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
