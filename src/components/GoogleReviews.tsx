import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Robert Skrobak",
    text: "Marco geht individuell auf die Situation jedes Klienten ein. Besonders schätze ich seine Erfahrung mit Unternehmern und C-Level Menschen. Er versteht das stressvolle Umfeld und berät mit echtem Fokus auf Resilienz, Leistungsfähigkeit und Erholung.",
  },
  {
    name: "Yvon Hochstrasser",
    text: "Die Zusammenarbeit mit Marco war eine echte Transformation. Ich habe nicht nur mein körperliches Ziel erreicht sondern auch in einer schwierigen Lebensphase neue mentale Stärke gefunden. Seine Philosophie ist einzigartig.",
  },
  {
    name: "Nicola Hägeli",
    text: "Als Unternehmer war ich nie wirklich in einer stabilen Routine. Marco hat das verändert. Ohne Druck aber mit Klarheit. Strukturiert, individuell und alltagstauglich.",
  },
];

const GoogleReviews = () => (
  <section className="py-32 bg-[#0d0d0d] px-6 section-divider">
    <div className="container mx-auto max-w-5xl">
      <p className="font-inter text-xs text-primary uppercase tracking-[0.18em] text-center mb-3">Verifizierte Google Bewertungen</p>
      <h2 className="font-inter font-bold text-white text-center mb-12" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
        Was Klienten über Marco sagen.
      </h2>
      <div className="grid md:grid-cols-3 gap-5 mb-10">
        {reviews.map((r, i) => (
          <div key={i} className="glass-card rounded-xl p-6 hover:border-primary/25 transition-all duration-300">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-primary fill-primary" />)}
            </div>
            <p className="font-inter text-white/55 leading-relaxed mb-5 text-sm">{r.text}</p>
            <p className="font-inter font-semibold text-white text-sm">{r.name}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3 glass-card rounded-full px-6 py-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-primary fill-primary" />)}
          </div>
          <span className="font-inter text-white font-semibold">4.9</span>
          <span className="font-inter text-white/40 text-sm">· 59 Google Bewertungen</span>
        </div>
        <a href="https://search.google.com/local/reviews?placeid=ChIJhZrzumoKkEcR9iO2vfn5Uh8"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 font-inter text-sm text-primary hover:underline">
          Alle Bewertungen lesen <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </section>
);

export default GoogleReviews;
