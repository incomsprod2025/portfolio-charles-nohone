import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { infographyProjects } from "../data";
import { Eye, X, MessageSquare, Sparkles } from "lucide-react";

export default function RealisationsInfographie() {
  const [activeProject, setActiveProject] = useState<typeof infographyProjects[0] | null>(null);

  // Generate WhatsApp message for a chosen design
  const getWhatsAppLink = (project: typeof infographyProjects[0]) => {
    const isRegistration = project.client === "Cabinet de formation CELAF" || 
                           project.title.toLowerCase().includes("celaf") || 
                           project.title.toLowerCase().includes("masterclass");
    const text = isRegistration
      ? `Bonjour Charles, je souhaite m'inscrire à la formation "${project.title}" présentée sur votre site. Pouvez-vous me donner plus d'informations ?`
      : `Bonjour Charles, j'ai vu votre réalisation d'infographie "${project.title}" sur votre site et j'aimerais commander un visuel similaire pour mon projet !`;
    return `https://wa.me/2250140980335?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="infography" className="py-24 bg-warm-beige relative overflow-hidden scroll-mt">
      {/* Decorative ambient blobs */}
      <div className="absolute top-[10%] left-[-5%] w-72 h-72 bg-brick/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-orange-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Sleek, Minimal Section Header - Focuses purely on visual arts */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold text-brick tracking-widest uppercase bg-brick-light px-4 py-2 rounded-full border border-brick/10 inline-flex items-center gap-1.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brick animate-pulse" />
            Galerie de Réalisations
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-charcoal-black mt-5 tracking-tight leading-tight">
            Design Graphique &amp; Infographie
          </h2>
          <p className="text-charcoal-black/60 mt-4 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Cliquez sur n&apos;importe quel visuel de la galerie pour l&apos;afficher en plein écran et démarrer votre projet directement via WhatsApp.
          </p>
        </div>

        {/* Pure Images Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {infographyProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer aspect-square sm:aspect-[4/5] bg-stone-100 rounded-[2rem] overflow-hidden border border-warm-gray/70 hover:border-brick/20 shadow-xs hover:shadow-2xl transition-all duration-500 relative"
              id={`gallery-item-${project.id}`}
            >
              {/* Overlay with Zoom & Icon on Hover */}
              <div className="absolute inset-0 bg-charcoal-black/0 group-hover:bg-charcoal-black/45 transition-colors duration-300 z-10 flex items-center justify-center">
                <span className="p-4 bg-white/95 backdrop-blur-md rounded-full text-brick opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-400 shadow-xl relative z-20">
                  <Eye className="w-6 h-6 stroke-[2.5]" />
                </span>
              </div>

              {/* The Visual Image - Zoom on Hover */}
              <img
                src={project.imageUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                id={`gallery-img-${project.id}`}
              />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Elegant Lightbox overlay showing ONLY the image as requested */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-charcoal-black/95 backdrop-blur-xl"
              id="lightbox-backdrop"
            />

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] flex flex-col justify-center items-center z-10"
              id="lightbox-content"
            >
              {/* Float Close button at the absolute top right */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute -top-12 sm:top-2 right-2 sm:-right-12 z-30 p-2.5 rounded-full bg-white/15 hover:bg-brick text-white sm:text-white/80 hover:text-white transition-all cursor-pointer shadow-lg border border-white/10"
                aria-label="Fermer la vue"
                id="lightbox-close-btn"
              >
                <X className="w-6 h-6" />
              </button>

              {/* High-definition image display container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border border-white/10 max-h-[75vh] w-full max-w-[440px] mx-auto flex items-center justify-center">
                <img
                  src={activeProject.imageUrl}
                  alt={activeProject.title}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-[75vh] object-contain rounded-xl"
                  id="lightbox-main-img"
                />
              </div>

              {/* Elegant floating metadata/call-to-action overlay below image */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-lg px-6 py-3.5 rounded-2xl border border-white/10 max-w-md w-full justify-between shadow-lg">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-mono text-white/50 uppercase tracking-widest">Infographie</p>
                  <p className="text-sm font-semibold text-white mt-0.5 line-clamp-1">{activeProject.title}</p>
                </div>
                <a
                  href={getWhatsAppLink(activeProject)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-brick hover:bg-brick-dark text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md shrink-0 cursor-pointer"
                  id="lightbox-whatsapp-cta"
                >
                  <MessageSquare className="w-4 h-4 fill-white/15" />
                  <span>
                    {activeProject.client === "Cabinet de formation CELAF" || 
                     activeProject.title.toLowerCase().includes("celaf") || 
                     activeProject.title.toLowerCase().includes("masterclass") 
                      ? "S'inscrire" 
                      : "Commander"}
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
