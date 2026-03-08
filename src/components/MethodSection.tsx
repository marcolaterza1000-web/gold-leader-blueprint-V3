import { Dumbbell, Apple, Brain, Activity } from "lucide-react";

const tiles = [
  {
    icon: Dumbbell,
    title: "Training das in Ihr Leben passt",
    text: "Kein Programm von der Stange. Wir trainieren nach Ihrer Tagesform, Ihrem Kalender und Ihrem Hormonstatus. HRV-Messungen zeigen uns täglich genau wie viel Ihr Körper leisten kann und will. Das Resultat ist maximale Wirkung bei minimalem Zeitaufwand.",
    tag: "Training",
  },
  {
    icon: Apple,
    title: "Ernährung die funktioniert ohne dass Sie darüber nachdenken müssen",
    text: "Wir analysieren Ihre hormonelle Ausgangslage und entwickeln eine Strategie die bei Geschäftsessen genauso funktioniert wie auf Reisen. Kein Kalorienzählen. Keine Verbote. Stattdessen lernen Sie Ihren Körper so zu versorgen dass das Mittagstief zur Vergangenheit gehört.",
    tag: "Ernährung",
  },
  {
    icon: Brain,
    title: "Mentale Stärke die Sie in kritischen Momenten trägt",
    text: "Im vertraulichen Gespräch auf Augenhöhe arbeiten wir an den Mustern die Sie unbewusst bremsen. Sie lernen Ihr Nervensystem aktiv zu regulieren, Stressphasen produktiv zu nutzen und danach schnell wieder in Topform zu kommen.",
    tag: "Mental",
  },
  {
    icon: Activity,
    title: "Präzise Daten als Grundlage für alles",
    text: "Bauchgefühl reicht nicht. Gemeinsam mit Spitzenmedizinern analysieren wir Ihre Biomarker, Ihren Hormonstatus und Ihre Körperzusammensetzung. Erst wenn wir wissen was in Ihrem Körper wirklich passiert erstellen wir Ihren Plan.",
    tag: "Analyse",
  },
];

const MethodSection = () => (
  <section id="methode" className="py-32 bg-[#0d0d0d] px-6 section-divider">
    <div className="container mx-auto max-w-5xl">
      <p className="font-inter text-xs text-primary uppercase tracking-[0.18em] text-center mb-3">Die Methode</p>
      <h2 className="font-inter font-bold text-white text-center mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
        Vier Säulen. <span className="text-primary">Ein Ergebnis das bleibt.</span>
      </h2>
      <p className="text-center text-white/45 font-inter mb-16 max-w-xl mx-auto text-base leading-relaxed">
        Jede Säule greift in die andere. Zusammen bilden sie ein System das Ihren Körper und Ihren Geist auf das Niveau bringt das Sie von sich selbst erwarten.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {tiles.map((t, i) => (
          <div key={i}
            className="glass-card rounded-xl p-8 group transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            style={{ boxShadow: "0 0 0 transparent" }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(200,156,76,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 transparent")}>
            <div className="flex items-start justify-between mb-5">
              <t.icon className="w-9 h-9 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="font-inter text-[10px] text-primary/60 border border-primary/20 rounded-full px-3 py-1">
                {t.tag}
              </span>
            </div>
            <h3 className="font-inter font-bold text-lg text-white mb-3 leading-snug">{t.title}</h3>
            <p className="font-inter text-white/45 leading-relaxed text-sm">{t.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a href="#kontakt"
          className="inline-flex items-center px-10 py-4 rounded-full bg-primary text-[#0d0d0d] font-inter font-bold text-base hover:brightness-110 transition shadow-gold">
          Das System kennenlernen
        </a>
      </div>
    </div>
  </section>
);

export default MethodSection;
