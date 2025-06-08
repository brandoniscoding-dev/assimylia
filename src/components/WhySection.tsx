
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FileText, Brain, Clock } from 'lucide-react';

export function WhySection() {
  const { t } = useTranslation();

  const problems = [
    {
      icon: FileText,
      title: t('why.card1.title'),
      description: t('why.card1.desc'),
    },
    {
      icon: Brain,
      title: t('why.card2.title'),
      description: t('why.card2.desc'),
    },
    {
      icon: Clock,
      title: t('why.card3.title'),
      description: t('why.card3.desc'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="why" className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t('why.title')}
          </h2>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="feature-card text-center group"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
