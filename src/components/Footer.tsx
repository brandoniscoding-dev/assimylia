
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and description */}
          <div className="space-y-4">
            <motion.div
              className="font-space font-bold text-2xl"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">Assimylia</span>
            </motion.div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              L'IA qui transforme ton contenu en expérience de mémorisation.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('why')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
              >
                {t('nav.why')}
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
              >
                {t('nav.features')}
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left text-sm"
              >
                {t('nav.howItWorks')}
              </button>
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Développement</h4>
            <p className="text-muted-foreground text-sm">
              {t('footer.developed')}{' '}
              <a
                href="https://www.linkedin.com/in/brandon-duclerc-tamwa-kamga/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium underline underline-offset-4"
              >
                brandoniscoding
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Assimylia. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
