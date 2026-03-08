import { Linkedin, Youtube, Instagram, Twitter, Facebook, Phone, MapPin } from "lucide-react";

const social = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/marco-laterza/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/channel/UCMPQ4avjkYuDbKICyU8M_2w", label: "YouTube" },
  { icon: Instagram, href: "https://www.instagram.com/marcolaterza/", label: "Instagram" },
  { icon: Twitter, href: "https://x.com/mlaterza", label: "X" },
  { icon: Facebook, href: "https://www.facebook.com/marcolaterzafit", label: "Facebook" },
];

const Footer = () => (
  <footer className="bg-[#080808] border-t border-white/5 py-16 px-6">
    <div className="container mx-auto max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        <div>
          <p className="font-inter font-black text-xl text-white mb-3">ML <span className="text-primary">COACHING</span></p>
          <p className="font-inter text-white/35 text-sm leading-relaxed">
            Premium Personal Coaching für Führungskräfte, Unternehmer und Spitzensportler in Zürich.
          </p>
        </div>
        <div>
          <p className="font-inter text-xs text-white/30 uppercase tracking-[0.15em] mb-4">Standorte</p>
          <div className="space-y-3">
            {[
              "ML Coaching Studio · Urdorf",
              "Ultimate Personal Training · Zürich 8002",
            ].map((loc, i) => (
              <div key={i} className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                <span className="font-inter text-white/40 text-sm">{loc}</span>
              </div>
            ))}
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
              <a href="tel:+41794445851" className="font-inter text-white/40 text-sm hover:text-primary transition">
                +41 79 444 58 51
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="font-inter text-xs text-white/30 uppercase tracking-[0.15em] mb-4">Folgen Sie Marco</p>
          <div className="flex gap-3">
            {social.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/35 hover:border-primary/50 hover:text-primary transition-all duration-200">
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-inter text-xs text-white/25">© {new Date().getFullYear()} Marco Laterza Coaching. Alle Rechte vorbehalten.</p>
        <p className="font-inter text-xs text-white/20">Zürich · Schweiz</p>
      </div>
    </div>
  </footer>
);

export default Footer;
