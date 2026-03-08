import portrait from "@/assets/marco-portrait.jpg";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "20+", label: "Jahre Erfahrung" },
  { value: "24×", label: "Titelseiten" },
  { value: "4.9★", label: "Google" },
  { value: "500+", label: "Klienten" },
];

const credentials = [
  "Akkreditierter Mental Coach",
  "Zertifizierter Ernährungsberater",
  "Spezialist für Hormonforschung und Bioprint",
  "Ausgebildet nach der Charles Poliquin Methode",
];

const AboutMarco = () => (
  <section id="ueber-marco" className="py-32 bg-[#0d0d0d] px-6 section-divider">
    <div className="container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <img src={portrait} alt="Marco Laterza Personal Trainer Zürich"
            className="rounded-xl w-full object-cover aspect-[4/5]" loading="lazy" />
          <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-primary/40 rounded-xl" />
          <div className="absolute -top-3 -left-3 glass-card rounded-lg px-4 py-3 shadow-gold">
            <p className="font-inter text-[10px] text-white/40">International anerkannt</p>
            <p className="font-inter text-primary font-bold text-base">24× Cover</p>
          </div>
        </div>

        <div>
          <p className="font-inter text-xs text-primary uppercase tracking-[0.18em] mb-3">Über Marco Laterza</p>
          <h2 className="font-inter font-bold text-white mb-6 leading-snug" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
            Ich weiss wie Ihr Alltag wirklich aussieht.
          </h2>
          <p className="font-inter text-white/55 leading-relaxed mb-5 text-base">
            Ich habe über zwei Jahrzehnte mit Menschen gearbeitet die in ihrem Beruf keine Kompromisse kennen. CEOs die um 6 Uhr morgens im Flieger sitzen. Sportler die auf internationalem Niveau performen. Unternehmer die gleichzeitig Dutzende Baustellen managen.
          </p>
          <p className="font-inter text-white/45 leading-relaxed mb-5 text-base">
            Was ich dabei gelernt habe: Standardprogramme funktionieren für diese Menschen nicht. Was sie brauchen ist ein System das ihre Biologie versteht, sich in ihren Alltag fügt und trotzdem Ergebnisse liefert die man sieht und spürt.
          </p>
          <p className="font-inter text-white/45 leading-relaxed mb-8 text-base">
            Meine eigene Karriere als internationales Fitnessmodel mit 24 Magazin-Titelseiten hat mir gezeigt was der menschliche Körper leisten kann wenn man ihn richtig behandelt. Heute gebe ich dieses Wissen an Sie weiter. Präzise. Individuell. Ohne Umwege.
          </p>

          <div className="grid grid-cols-1 gap-2 mb-8">
            {credentials.map((c, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="font-inter text-sm text-white/55">{c}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8 py-6 border-y border-white/8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-inter font-black text-xl text-gradient-gold">{s.value}</div>
                <div className="font-inter text-[10px] text-white/35 mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <a href="#kontakt"
            className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-[#0d0d0d] font-inter font-bold hover:brightness-110 transition shadow-gold">
            Kostenloses Erstgespräch buchen
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutMarco;
