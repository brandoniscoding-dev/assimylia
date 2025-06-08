
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, Brain, Clock } from 'lucide-react';

export function FeaturesSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: FileText,
      title: t('features.summaries'),
      description: "Obtiens des résumés clairs et structurés de n'importe quel contenu",
    },
    {
      icon: Brain,
      title: t('features.flashcards'),
      description: "Mémorise efficacement avec des flashcards générées automatiquement",
    },
    {
      icon: Clock,
      title: t('features.quizzes'),
      description: "Teste tes connaissances avec des quiz adaptatifs et personnalisés",
    },
    {
      icon: FileText,
      title: t('features.sheets'),
      description: "Révise avec des fiches synthétiques parfaitement organisées",
    },
    {
      icon: Brain,
      title: t('features.explanations'),
      description: "Comprends les concepts complexes avec des explications simplifiées",
    },
    {
      icon: Clock,
      title: t('features.planning'),
      description: "Optimise tes révisions avec un planning intelligent et adaptatif",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="section-spacing">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
