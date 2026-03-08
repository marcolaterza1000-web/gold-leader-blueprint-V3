import { useEffect } from "react";
import { Phone, Shield, Clock } from "lucide-react";

const BookingSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section id="kontakt" className="py-32 bg-[#0d0d0d] px-6 section-divider">
      <div className="container mx-auto max-w-3xl">
        <div className="glass-card rounded-2xl p-8 md:p-14 text-center shadow-gold-lg border-primary/20">
          <p className="font-inter text-xs text-primary uppercase tracking-[0.18em] mb-3">Der erste Schritt</p>
          <h2 className="font-inter font-bold text-white mb-4 leading-snug" style={{ fontSize: "clamp(26px, 3.5vw, 40px)" }}>
            30 Minuten die alles verändern können.
          </h2>
          <p className="font-inter text-white/55 leading-relaxed mb-4 max-w-xl mx-auto text-base">
            Im kostenlosen Erstgespräch analysieren wir gemeinsam Ihre Situation. Wir schauen wo Sie stehen, wo Sie hinwollen und ob eine Zusammenarbeit wirklich Sinn macht.
          </p>
          <p className="font-inter text-white/40 leading-relaxed mb-8 max-w-xl mx-auto text-sm">
            Kein Verkaufsgespräch. Kein Druck. Nur ein ehrliches Gespräch zwischen zwei Menschen die dasselbe Ziel haben: das Beste aus Ihnen herauszuholen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            {[
              { icon: Shield, text: "Vollständig vertraulich" },
              { icon: Clock, text: "30 Minuten, kein Verkaufsdruck" },
              { icon: Phone, text: "Online oder persönlich in Zürich" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/40 font-inter text-sm justify-center">
                <item.icon className="w-3.5 h-3.5 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <div className="calendly-inline-widget rounded-xl overflow-hidden mb-8"
            data-url="https://calendly.com/marcolaterza/strategiegesprach?hide_gdpr_banner=1&background_color=0d0d0d&text_color=f0f0f0&primary_color=c9a84c"
            style={{ minWidth: "320px", height: "700px" }} />
          <div className="flex items-center justify-center gap-2 text-white/35 font-inter text-sm">
            <Phone className="w-3.5 h-3.5" />
            <span>Lieber direkt anrufen?{" "}
              <a href="tel:+41794445851" className="text-primary hover:underline font-semibold">+41 79 444 58 51</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
