import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScarcityBanner from "@/components/ScarcityBanner";
import TrustBar from "@/components/TrustBar";
import AuthorityStrip from "@/components/AuthorityStrip";
import ProblemSection from "@/components/ProblemSection";
import AboutMarco from "@/components/AboutMarco";
import MethodSection from "@/components/MethodSection";
import ResultsSection from "@/components/ResultsSection";
import TransformationGallery from "@/components/TransformationGallery";
import GoogleReviews from "@/components/GoogleReviews";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen bg-[#0d0d0d]">
    <Navbar />
    <HeroSection />
    <ScarcityBanner />
    <TrustBar />
    <AuthorityStrip />
    <ProblemSection />
    <AboutMarco />
    <MethodSection />
    <ResultsSection />
    <TransformationGallery />
    <GoogleReviews />
    <BookingSection />
    <FAQSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
