
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@/hooks/useTheme';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { WhySection } from '@/components/WhySection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { Footer } from '@/components/Footer';
import '../lib/i18n';

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set page title based on language
    document.title = i18n.language === 'fr' 
      ? 'Assimylia - Assimile plus vite, retient plus fort'
      : 'Assimylia - Learn faster, remember stronger';
  }, [i18n.language]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="assimylia-theme">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <WhySection />
          <FeaturesSection />
          <HowItWorksSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
