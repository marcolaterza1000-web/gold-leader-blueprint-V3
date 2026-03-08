import { MessageCircle } from "lucide-react";

const FloatingButtons = () => (
  <>
    <a href="https://wa.me/41794445851" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-gold hover:brightness-110 transition-all hover:scale-105"
      aria-label="WhatsApp">
      <MessageCircle className="w-5 h-5 text-[#0d0d0d]" />
    </a>
    <a href="#kontakt"
      className="fixed bottom-6 right-6 z-40 md:hidden px-6 py-3 rounded-full bg-primary text-[#0d0d0d] font-inter font-bold text-sm shadow-gold hover:brightness-110 transition-all">
      Jetzt buchen
    </a>
  </>
);

export default FloatingButtons;
