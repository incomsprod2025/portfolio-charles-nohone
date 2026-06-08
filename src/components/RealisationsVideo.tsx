import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Video, Play, X } from "lucide-react";

import gpImg from "../images/GP.png";
import mhImg from "../images/MH.PNG";
import rmImg from "../images/RM.PNG";
import srImg from "../images/SR.PNG";

const videos = [
  {
    id: "sNUnosSlmus",
    title: "Promo formation CELAF",
    category: "Reels / Shorts",
    bgImage: rmImg,
  },
  {
    id: "5y7iseQVsEg",
    title: "Conseils Stratégiques",
    category: "Astuces / Business",
    bgImage: mhImg,
  },
  {
    id: "OxjQ2Ru4GAk",
    title: "Création de Contenu",
    category: "E-Commerce",
    bgImage: srImg,
  },
  {
    id: "XzGIhbD_7pk",
    title: "Coaching & Mentorat",
    category: "Développement",
    bgImage: gpImg,
  }
];

export default function RealisationsVideo() {
  const [selectedVideo, setSelectedVideo] = useState<typeof videos[0] | null>(null);

  // Helper function to build bulletproof sandbox-safe YouTube embed URLs
  const getEmbedUrl = (videoId: string) => {
    if (typeof window === "undefined") {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&playsinline=1&rel=0`;
    }
    const origin = window.location.origin;
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&playsinline=1&rel=0&enablejsapi=1&origin=${encodeURIComponent(origin)}`;
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="video" className="py-24 bg-white relative overflow-hidden scroll-mt">
      {/* Visual background details */}
      <div className="absolute top-[20%] right-[-5%] w-80 h-80 bg-brick/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-72 h-72 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="text-xs font-mono font-bold text-brick tracking-widest uppercase bg-brick-light px-4 py-2 rounded-full border border-brick/10 inline-flex items-center gap-1.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-brick animate-pulse" />
            Réalisations Vidéo &amp; Reels
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-charcoal-black mt-5 tracking-tight leading-tight">
            Des montages qui captivent <br />
            <span className="text-brick">dès la première seconde</span>
          </h2>
          <p className="text-charcoal-black/60 mt-4 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Découvrez une sélection de mes créations au format vertical optimisé pour retenir l&apos;attention de vos prospects sur les réseaux sociaux.
          </p>
        </div>

        {/* 4 Videos Grid on a Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 justify-center items-center">
          {videos.map((video, index) => {
            return (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center cursor-pointer"
                onClick={() => setSelectedVideo(video)}
                id={`video-item-${video.id}`}
              >
                {/* Phone Frame Mockup container */}
                <div 
                  className="relative w-full max-w-[260px] aspect-[9/16] bg-stone-950 rounded-[2.2rem] p-3.5 shadow-xl border-4 border-stone-900/90 flex flex-col justify-between hover:border-brick/55 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                  id={`phone-frame-${video.id}`}
                >
                  {/* Smartphone Speaker/Camera Notch */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-stone-900 rounded-full z-25 flex items-center justify-center">
                    <div className="w-6 h-0.5 bg-stone-800 rounded-full" />
                  </div>

                  {/* Inner Screen Container */}
                  <div className="w-full h-full rounded-[1.6rem] overflow-hidden bg-black z-10 relative">
                    <div className="relative w-full h-full group/cover overflow-hidden bg-stone-900">
                      {/* Custom Poster/Background Image */}
                      <img 
                        src={video.bgImage} 
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/cover:scale-110 opacity-70"
                        referrerPolicy="no-referrer"
                      />
                      {/* Subtle dark vignette overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/45" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-20">
                        <div className="w-14 h-14 rounded-full bg-brick text-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover/cover:scale-110">
                          <Play className="w-6 h-6 fill-white ml-0.5 animate-pulse" />
                        </div>
                        <span className="text-white text-xs font-mono font-medium tracking-wide drop-shadow-md bg-stone-950/40 px-3 py-1.5 rounded-full backdrop-blur-xs">
                          Regarder le reel
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom CTA button at the bottom */}
        <div className="mt-16 text-center">
          <a
            href={`https://wa.me/2250140980335?text=${encodeURIComponent(
              `Bonjour Charles, j'ai vu vos réalisations vidéo et j'aimerais collaborer avec vous pour le montage de mes vidéos !`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-brick hover:bg-brick-dark text-white rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            id="cta-whatsapp-video"
          >
            <Video className="w-4 h-4 animate-pulse" />
            <span>Commander votre montage vidéo</span>
          </a>
        </div>

      </div>

      {/* Video Overlay / Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center" id="video-overlay-modal">
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute inset-0 bg-stone-950/85 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Content container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[360px] sm:max-w-[380px] aspect-[9/16] p-4 bg-stone-900 rounded-[2.5rem] shadow-2xl border border-white/10 z-10 flex flex-col justify-between mx-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top smartphone details bar overlay / Close action */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-4 bg-stone-950 rounded-full z-30 flex items-center justify-center">
                <div className="w-8 h-0.5 bg-stone-800 rounded-full" />
              </div>

              {/* Float Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-5 right-5 z-40 bg-black/60 hover:bg-brick hover:scale-105 transition-all text-white p-2.5 rounded-full shadow-md border border-white/10 flex items-center justify-center"
                aria-label="Fermer la vidéo"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Video Screen Inside Frame */}
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-black relative shadow-inner z-10 mt-2 flex items-center justify-center">
                {selectedVideo.videoUrl ? (
                  <video
                    src={selectedVideo.videoUrl}
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    playsInline
                    id={`local-video-modal-${selectedVideo.id}`}
                  />
                ) : (
                  <iframe
                    src={getEmbedUrl(selectedVideo.id)}
                    className="w-full h-full border-0 absolute inset-0"
                    title={selectedVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    id={`iframe-video-modal-${selectedVideo.id}`}
                  />
                )}
              </div>

              {/* Elegant floating info footer overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none drop-shadow-md">
                <span className="text-[10px] font-mono font-bold tracking-widest text-brick uppercase bg-black/70 px-2 py-0.5 rounded-md border border-white/5 inline-block">
                  {selectedVideo.category}
                </span>
                <h3 className="text-white text-base font-display font-medium tracking-wide mt-1.5 line-clamp-1">
                  {selectedVideo.title}
                </h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

