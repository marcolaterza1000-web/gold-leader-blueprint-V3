import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Kaspar Luginbühl",
    role: "Wirtschaftsanwalt, Partner",
    quote: "Dank Marcos Coaching fühle ich mich mit Mitte 40 so ausgeglichen und fitt wie noch nie. Seine Methode verbindet körperliche Leistungsfähigkeit mit mentaler Klarheit. Genau das was ich als Anwalt täglich brauche.",
    highlight: "Fitter mit 40 als mit 30",
  },
  {
    name: "Burkhard Boeckem",
    role: "CTO Hexagon AB",
    quote: "Als CTO eines globalen Unternehmens ist Energie und Fokus mein wichtigstes Kapital. Marco versteht das und arbeitet entsprechend. Er hat mich wieder in Topform gebracht ohne dass ich meinen Alltag auf den Kopf stellen musste.",
    highlight: "Topform trotz globalem Führungsalltag",
  },
  {
    name: "Pascal Zuberbühler",
    role: "Senior Football Expert, FIFA",
    quote: "Es war schwierig wieder in einen guten Trainingsmodus hineinzukommen. Marco hat mich dabei immens unterstützt. Sein strukturierter und individueller Ansatz ist das Beste was mir passieren konnte.",
    highlight: "Zurück auf Top-Niveau",
  },
  {
    name: "Manuela Leonhard",
    role: "Assistentin Stadtpräsidentin Zürich",
    quote: "Von Marco habe ich gelernt dass mein Körper alles schaffen kann. Es ist der Geist den man überzeugen muss. Dank Marcos ganzheitlichem Coaching konnte ich genau das erreichen.",
    highlight: "Körper und Geist in Einklang",
  },
  {
    name: "Gabriela Weiss",
    role: "Senior Payroll Specialist",
    quote: "Dank Marco konnte ich meinen Körperfettanteil von 26 Prozent auf 17 Prozent senken. Nachhaltig, ohne Crash-Diäten und ohne mein Leben auf den Kopf zu stellen.",
    highlight: "Von 26% auf 17% Körperfett",
  },
  {
    name: "Nicola Hägeli",
    role: "Unternehmer",
    quote: "Als Unternehmer ist mein Alltag oft chaotisch. Marco hat das geändert ohne Druck aber mit Klarheit. Sein Coaching ist strukturiert, individuell und vor allem alltagstauglich.",
    highlight: "Endlich ein System das hält",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-primary fill-primary" />)}
  </div>
);

const ResultsSection = () => (
  <section id="ergebnisse" className="py-32 bg-[#0d0d0d] px-6 section-divider">
    <div className="container mx-auto max-w-6xl">
      <p className="font-inter text-xs text-primary uppercase tracking-[0.18em] text-center mb-3">Echte Klienten. Echte Ergebnisse.</p>
      <h2 className="font-inter font-bold text-white text-center mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
        Was Menschen sagen die <span className="text-primary">denken wie Sie.</span>
      </h2>
      <p className="text-center font-inter text-white/45 mb-16 max-w-xl mx-auto text-base leading-relaxed">
        Führungskräfte, Spitzensportler und Entscheider die denselben Anspruch an sich selbst stellen wie Sie.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div key={i} className="glass-card rounded-xl p-7 flex flex-col hover:border-primary/25 transition-all duration-300 hover:-translate-y-1">
            <Stars />
            <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-3 py-1 mb-4 self-start">
              <span className="font-inter text-[10px] text-primary font-medium">{t.highlight}</span>
            </div>
            <Quote className="w-5 h-5 text-primary/20 mb-3" />
            <p className="font-inter text-white/55 leading-relaxed mb-6 flex-1 text-sm">{t.quote}</p>
            <div className="border-t border-white/6 pt-4">
              <p className="font-inter font-semibold text-white text-sm">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#kontakt"
          className="inline-flex items-center px-10 py-4 rounded-full bg-primary text-[#0d0d0d] font-inter font-bold text-base hover:brightness-110 transition shadow-gold">
          Schreiben Sie Ihre eigene Erfolgsgeschichte
        </a>
      </div>
    </div>
  </section>
);

export default ResultsSection;
