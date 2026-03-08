import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#ueber-marco", label: "Über Marco" },
    { href: "#methode", label: "Methode" },
    { href: "#ergebnisse", label: "Ergebnisse" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0d0d0d]/95 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10">
        <a href="#" className="font-inter font-black text-xl tracking-tight text-white">
          ML <span className="text-primary">COACHING</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-inter text-white/60 hover:text-white transition-colors duration-200">
              {l.label}
            </a>
          ))}
        </div>

        <a href="#kontakt" className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-primary text-[#0d0d0d] font-inter text-sm font-bold hover:brightness-110 transition shadow-gold">
          Erstgespräch buchen
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white/80 hover:text-white transition" aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/5 px-6 pb-8 pt-4 space-y-1">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block text-white/70 hover:text-white py-3 font-inter text-base border-b border-white/5 last:border-0 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="pt-4">
            <a href="#kontakt" onClick={() => setOpen(false)}
              className="block text-center px-6 py-4 rounded-full bg-primary text-[#0d0d0d] font-inter font-bold text-base shadow-gold">
              Kostenloses Erstgespräch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
