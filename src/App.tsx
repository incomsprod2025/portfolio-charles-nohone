import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import RealisationsInfographie from "./components/RealisationsInfographie";
import RealisationsVideo from "./components/RealisationsVideo";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-warm-beige min-h-screen text-charcoal-black relative font-sans antialiased selection:bg-brick/10 selection:text-brick">
      {/* Dynamic Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Realisations Infographie Section */}
      <RealisationsInfographie />

      {/* Realisations Montage Video Section */}
      <RealisationsVideo />

      {/* Partners Section */}
      <Partners />

      {/* Footer & Digital CV Toggler Section */}
      <Footer />
    </div>
  );
}

