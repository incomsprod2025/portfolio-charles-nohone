import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageSquare, Briefcase } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", id: "services" },
    { name: "Design Graphique", id: "infography" },
    { name: "Montage Vidéo", id: "video" },
    { name: "Expériences & CV", id: "cv" },
    { name: "Partenaires", id: "partners" },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-warm-beige/90 backdrop-blur-md shadow-sm border-b border-warm-gray py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex flex-col cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span className="font-display font-extrabold tracking-tight text-xl text-charcoal-black flex items-center gap-1">
              CHARLES NOHONE<span className="w-2.5 h-2.5 rounded-full bg-brick inline-block"></span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-brick uppercase font-semibold">
              Social Media Manager
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScrollTo(link.id)}
                className="text-sm font-medium text-charcoal-black/80 hover:text-brick cursor-pointer transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brick transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/2250140980335?text=Bonjour%20Charles,%20je%20suis%20intéressé(e)%20par%20vos%20services%20de%20création"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brick text-white hover:bg-brick-dark rounded-full font-medium text-sm transition-all duration-200 shadow-sm shadow-brick/20 cursor-pointer hover:translate-y-[-1px]"
              id="cta-whatsapp-header"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discutons sur WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-charcoal-black hover:text-brick hover:bg-warm-gray transition-colors focus:outline-none"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-warm-beige border-b border-warm-gray"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 shadow-inner">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="block w-full text-left px-3 py-2.5 text-base font-medium text-charcoal-black/80 hover:text-brick hover:bg-warm-gray rounded-lg transition-all"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-4 border-t border-warm-gray">
                <a
                  href="https://wa.me/2250140980335?text=Bonjour%20Charles,%20je%20suis%20intéressé(e)%20par%20vos%20services%20de%20création"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brick text-white hover:bg-brick-dark rounded-xl font-medium text-sm transition-colors shadow-sm"
                  id="cta-whatsapp-mobile"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Contactez Charles (+225)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
