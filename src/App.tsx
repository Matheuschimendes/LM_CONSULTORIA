import { useLandingInteractions } from './components/landing/hooks/useLandingInteractions';
import { SeoHead } from './components/SeoHead';
import { WhatsSubtleButton } from './components/landing/WhatsSubtleButton';
// import { AudienceSection } from './components/landing/sections/AudienceSection';
import { ChecklistSection } from './components/landing/sections/ChecklistSection';
import { ComparisonSection } from './components/landing/sections/ComparisonSection';
// import { ContextSection } from './components/landing/sections/ContextSection';
import { FAQSection } from './components/landing/sections/FAQSection';
import { FinalCTASection } from './components/landing/sections/FinalCTASection';
import { FooterSection } from './components/landing/sections/FooterSection';
import { HeroSection } from './components/landing/sections/HeroSection';
import { MatrixSection } from './components/landing/sections/MatrixSection';
import { NavBar } from './components/landing/sections/NavBar';
import { NumbersSection } from './components/landing/sections/NumbersSection';
import { PillarsSection } from './components/landing/sections/PillarsSection';
// import { QuoteSection } from './components/landing/sections/QuoteSection';
import { SolutionMAPASection } from './components/landing/sections/SolutionMAPASection';
import { TestimonialsSection } from './components/landing/sections/TestimonialsSection';

export default function App() {
  useLandingInteractions();

  return (
    <>
      <SeoHead />
      <NavBar />
      <HeroSection />
      <NumbersSection />
      {/* <QuoteSection /> */}
      <SolutionMAPASection />
      {/* <ContextSection /> */}
      {/* <AudienceSection /> */}
      <MatrixSection />
      <PillarsSection />
      <ComparisonSection />
      <TestimonialsSection />
      <ChecklistSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
      <WhatsSubtleButton />
    </>
  );
}
