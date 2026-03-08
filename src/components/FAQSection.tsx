import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Für wen ist die Zusammenarbeit mit Marco wirklich geeignet?",
    a: "Für Menschen die im Leben Verantwortung tragen und verstehen dass ihr Körper keine Nebensache ist. Führungskräfte, Unternehmer, Sportler und alle die mit sich selbst denselben Anspruch haben wie mit ihrer Arbeit. Voraussetzung ist nicht ein bestimmtes Fitnesslevel sondern die Bereitschaft konsequent zu arbeiten.",
  },
  {
    q: "Wie läuft das erste Gespräch ab?",
    a: "Das Erstgespräch dauert 30 Minuten und ist kostenlos. Wir sprechen über Ihre aktuelle Situation, Ihre Ziele und was Sie bisher versucht haben. Am Ende wissen wir beide ob und wie eine Zusammenarbeit aussehen könnte. Sie müssen sich nicht vorbereiten.",
  },
  {
    q: "Wo findet das Training statt?",
    a: "In unserem privaten Studio in Urdorf oder im Ultimate Personal Training in Zürich. Beide Standorte bieten höchste Diskretion und sind exklusiv für unsere Klienten. Auf Wunsch bieten wir auch hybride Modelle mit Online-Sessions.",
  },
  {
    q: "Wann werde ich erste Ergebnisse spüren?",
    a: "Die meisten Klienten berichten bereits nach zwei bis drei Wochen von deutlich mehr Energie und besserem Schlaf. Sichtbare körperliche Veränderungen zeigen sich in der Regel nach sechs bis acht Wochen.",
  },
  {
    q: "Warum arbeitet Marco nur mit einer begrenzten Anzahl Klienten?",
    a: "Weil echte Betreuung Zeit braucht. Marco begleitet Sie persönlich und ist nicht nur beim Training dabei. Er analysiert Ihre Fortschritte, passt das Programm laufend an und ist für Sie erreichbar wenn Sie ihn brauchen. Aktuell sind zwei Plätze verfügbar.",
  },
];

const FAQSection = () => (
  <section className="py-32 bg-[#0d0d0d] px-6 section-divider">
    <div className="container mx-auto max-w-3xl">
      <p className="font-inter text-xs text-primary uppercase tracking-[0.18em] text-center mb-3">Häufige Fragen</p>
      <h2 className="font-inter font-bold text-white text-center mb-12" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
        Was Sie wissen möchten.
      </h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`}
            className="glass-card rounded-xl px-6 border-white/6">
            <AccordionTrigger className="font-inter font-semibold text-white hover:text-primary py-5 text-left text-sm">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="font-inter text-white/45 leading-relaxed pb-5 text-sm">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center mt-12">
        <a href="#kontakt"
          className="inline-flex items-center px-8 py-4 rounded-full bg-primary text-[#0d0d0d] font-inter font-bold hover:brightness-110 transition shadow-gold">
          Direkt fragen im Erstgespräch
        </a>
      </div>
    </div>
  </section>
);

export default FAQSection;
