
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, BookOpen, Brain } from 'lucide-react';

export function HeroSection() {
  const { t } = useTranslation();

  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWhy = () => {
    const element = document.getElementById('why');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradients - more colorful and playful */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-orange-950/20" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-gradient-to-br from-blue-400/10 to-green-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Floating icons for playful effect */}
          <motion.div
            className="absolute top-10 left-10 md:top-20 md:left-20"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />
          </motion.div>

          <motion.div
            className="absolute top-32 right-10 md:top-40 md:right-20"
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -5, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-16 md:bottom-32 md:left-32"
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Brain className="w-6 h-6 md:w-8 md:h-8 text-blue-500" />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text block sm:inline">{t('hero.title')}</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="cta-button group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              onClick={scrollToFeatures}
            >
              {t('hero.cta')}
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Hero illustration - Image d'étudiants africains utilisant des appareils technologiques */}
          <motion.div
            className="relative max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-card/80 backdrop-blur-sm border border-border/40 hover:shadow-3xl transition-all duration-500">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&crop=center"
                alt={t('hero.imageAlt')}
                className="w-full h-48 sm:h-64 md:h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
