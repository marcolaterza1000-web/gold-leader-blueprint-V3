import { Zap, Clock, Brain } from "lucide-react";

const cards = [
  {
    icon: Zap,
    title: "Sie funktionieren. Aber Sie spüren den Unterschied.",
    text: "Früher hatten Sie nach einem langen Tag noch Energie für das Wesentliche. Heute verwalten Sie Ihren Akku. Sie wissen genau wovon ich spreche.",
  },
  {
    icon: Clock,
    title: "Jede Stunde die Sie investieren muss sich rechnen.",
    text: "Sie haben keine Zeit für ineffizientes Training. Sie brauchen ein System das in Ihren Kalender passt und trotzdem messbare Ergebnisse liefert. Nicht irgendwann. Jetzt.",
  },
  {
    icon: Brain,
    title: "Ihr Kopf arbeitet auf Hochtouren. Ihr Körper kommt nicht mehr mit.",
    text: "Entscheidungsqualität, Fokus und Resilienz hängen direkt von Ihrer körperlichen Verfassung ab. Was in Ihrer Biologie passiert bestimmt was in Ihrem Büro passiert.",
  },
];

const ProblemSection = () => (
  <section className="py-32 bg-[#0d0d0d] px-6 section-divider">
    <div className="container mx-auto max-w-5xl">
      <p className="font-inter text-xs text-primary uppercase tracking-[0.18em] text-center mb-4">Die Realität von Leistungsträgern</p>
      <h2 className="font-inter font-bold text-foreground text-center mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
        Kennen Sie dieses Gefühl?
      </h2>
      <p className="text-center font-inter text-white/45 mb-16 max-w-xl mx-auto text-base leading-relaxed">
        Die meisten Menschen in Ihrer Position haben dasselbe Problem. Sie sind aussergewöhnlich diszipliniert in allem was sie tun. Nur beim eigenen Körper fehlt das richtige System.
      </p>
      <div className="grid md:grid-cols-3 gap-5">
        {cards.map((c, i) => (
          <div key={i} className="glass-card rounded-xl p-8 hover:border-primary/25 transition-all duration-300 hover:-translate-y-1">
            <c.icon className="w-9 h-9 text-primary mb-6" />
            <h3 className="font-inter font-bold text-lg text-white mb-3 leading-snug">{c.title}</h3>
            <p className="font-inter text-white/45 leading-relaxed text-sm">{c.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-14 text-center glass-card rounded-2xl p-10 max-w-3xl mx-auto">
        <p className="font-inter text-lg text-white/80 leading-relaxed">
          Das Problem ist nicht fehlende Disziplin. Das Problem ist ein System das nicht zu Ihnen passt. Genau das ändert die Zusammenarbeit mit Marco Laterza.
        </p>
      </div>
    </div>
  </section>
);

export default ProblemSection;
