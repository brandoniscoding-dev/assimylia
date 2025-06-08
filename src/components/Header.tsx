
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { MobileNav } from './MobileNav';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-lg border-b border-border/40 shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo - Graduation cap only in hero, full text when scrolled */}
        <motion.div
          className="font-space font-bold text-2xl cursor-pointer flex items-center"
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
          layout
        >
          <GraduationCap className="h-8 w-8 text-primary" />
          <AnimatePresence>
            {isScrolled && (
              <motion.span
                className="gradient-text ml-2"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.3 }}
              >
                Assimylia
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('hero')}
            className="nav-link"
          >
            {t('nav.home')}
          </button>
          <button
            onClick={() => scrollToSection('why')}
            className="nav-link"
          >
            {t('nav.why')}
          </button>
          <button
            onClick={() => scrollToSection('features')}
            className="nav-link"
          >
            {t('nav.features')}
          </button>
          <button
            onClick={() => scrollToSection('how-it-works')}
            className="nav-link"
          >
            {t('nav.howItWorks')}
          </button>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageToggle />
          
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-2 ml-4">
            <Button variant="ghost" size="sm">
              {t('nav.login')}
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              {t('nav.signup')}
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </motion.header>
  );
}
