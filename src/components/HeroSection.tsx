import heroBg from "@/assets/hero-bg.jpg";
import { Star, ArrowRight } from "lucide-react";

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "24×", label: "Magazin-Cover" },
  { value: "500+", label: "Transformationen" },
  { value: "4.9★", label: "Google Bewertung" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0d0d]">
    {/* Right side image — desktop */}
    <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block">
      <img src={heroBg} alt="Marco Laterza Personal Training Zürich"
        className="w-full h-full object-cover" style={{ objectPosition: "center 10%" }} loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/50 to-transparent" />
    </div>

    {/* Mobile background */}
    <div className="absolute inset-0 md:hidden">
      <img src={heroBg} alt="Marco Laterza" className="w-full h-full object-cover"
        style={{ objectPosition: "center 10%" }} loading="eager" />
      <div className="absolute inset-0 bg-[#0d0d0d]/75" />
    </div>

    {/* Subtle background texture */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
      backgroundSize: "48px 48px"
    }} />

    {/* Content */}
    <div className="relative z-10 w-full md:w-1/2 px-6 md:px-12 lg:px-20 pt-32 pb-20">
      <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/25 rounded-full px-4 py-1.5 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <p className="font-inter text-xs text-primary uppercase tracking-[0.15em]">
          Exklusives Personal Coaching · Zürich
        </p>
      </div>

      <h1 className="font-inter font-black leading-[1.05] mb-6"
        style={{ fontSize: "clamp(36px, 5.5vw, 72px)", lineHeight: "1.05" }}>
        <span style={{ color: "#ffffff", display: "block", fontWeight: 700 }}>Sie haben alles erreicht.</span>
        <span style={{ color: "rgb(200, 156, 76)", display: "block", fontWeight: 700 }}>Ihr Körper hält nicht Schritt.</span>
      </h1>

      <p className="font-inter text-base md:text-lg text-white/60 max-w-md mb-8 leading-relaxed">
        Marco Laterza arbeitet mit Führungskräften, Unternehmern und Spitzensportlern die verstehen dass körperliche Leistungsfähigkeit kein Luxus ist. Sie ist die Voraussetzung für alles andere.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-12">
        <a href="#kontakt"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-[#0d0d0d] font-inter font-bold text-base hover:brightness-110 transition-all duration-200 shadow-gold-lg">
          Kostenloses Erstgespräch
          <ArrowRight className="w-4 h-4" />
        </a>
        <a href="#ergebnisse"
          className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/15 text-white/60 font-inter text-base hover:border-primary/50 hover:text-white transition-all duration-200">
          Resultate ansehen
        </a>
      </div>

      <div className="grid grid-cols-4 gap-4 pt-8 border-t border-white/8">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="font-inter font-black text-xl text-gradient-gold">{s.value}</div>
            <div className="font-inter text-xs text-white/40 mt-0.5 leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-primary fill-primary" />)}
        </div>
        <span className="font-inter text-xs text-white/40">
          59 verifizierte Google Bewertungen · Aktuell 2 Plätze frei
        </span>
      </div>
    </div>
  </section>
);

export default HeroSection;
