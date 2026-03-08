import logoUbs from "@/assets/logo-ubs.png";
import logoZkb from "@/assets/logo-zkb.png";
import logoRaiffeisen from "@/assets/logo-raiffeisen.png";
import logoLgt from "@/assets/logo-lgt.png";
import logoMobiliar from "@/assets/logo-mobiliar.png";
import logoBkb from "@/assets/logo-bkb.png";

const logos = [
  { src: logoUbs, alt: "UBS", invert: false },
  { src: logoZkb, alt: "Zürcher Kantonalbank", invert: true },
  { src: logoRaiffeisen, alt: "Raiffeisen", invert: false },
  { src: logoLgt, alt: "LGT Private Banking", invert: false },
  { src: logoMobiliar, alt: "Die Mobiliar", invert: false },
  { src: logoBkb, alt: "Basler Kantonalbank", invert: true },
];

const TrustBar = () => (
  <section className="py-10 bg-[#0d0d0d] border-b border-white/5">
    <div className="container mx-auto px-6">
      <p className="font-inter text-[10px] uppercase tracking-[0.2em] text-white/25 text-center mb-8">
        Vertraut von führenden Institutionen
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
        {logos.map((logo, i) => (
          <img key={i} src={logo.src} alt={logo.alt}
            className="h-7 w-auto transition-all duration-300 hover:opacity-90"
            style={{
              filter: logo.invert
                ? "grayscale(100%) invert(1) opacity(0.4)"
                : "grayscale(100%) opacity(0.4)",
            }}
            onMouseEnter={e => {
              (e.target as HTMLImageElement).style.filter = logo.invert
                ? "grayscale(0%) invert(0%) opacity(1)"
                : "grayscale(0%) opacity(1)";
            }}
            onMouseLeave={e => {
              (e.target as HTMLImageElement).style.filter = logo.invert
                ? "grayscale(100%) invert(1) opacity(0.4)"
                : "grayscale(100%) opacity(0.4)";
            }}
          />
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;
