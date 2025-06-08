
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-16 right-4 left-4 bg-background/95 backdrop-blur-lg border border-border/40 rounded-2xl shadow-xl z-40 p-6"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {/* Logo in mobile menu */}
              <div className="flex items-center justify-center mb-6">
                <GraduationCap className="h-8 w-8 text-primary mr-2" />
                <span className="font-space font-bold text-xl gradient-text">
                  Assimylia
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block w-full text-left p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  {t('nav.home')}
                </button>
                <button
                  onClick={() => scrollToSection('why')}
                  className="block w-full text-left p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  {t('nav.why')}
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  {t('nav.features')}
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="block w-full text-left p-3 rounded-lg hover:bg-accent transition-colors"
                >
                  {t('nav.howItWorks')}
                </button>
              </nav>

              {/* Auth Buttons */}
              <div className="flex flex-col space-y-3 mt-6 pt-6 border-t border-border/20">
                <Button variant="ghost" className="justify-start">
                  {t('nav.login')}
                </Button>
                <Button className="bg-primary hover:bg-primary/90 justify-start">
                  {t('nav.signup')}
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
