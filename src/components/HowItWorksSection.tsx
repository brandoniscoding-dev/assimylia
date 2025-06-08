
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Upload, Brain, Sparkles } from 'lucide-react';

export function HowItWorksSection() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Upload,
      title: t('howItWorks.step1'),
      description: "Importe tes documents, vidéos, audios ou textes en quelques clics",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Brain,
      title: t('howItWorks.step2'),
      description: "Notre IA analyse et comprend ton contenu en profondeur",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Sparkles,
      title: t('howItWorks.step3'),
      description: "Utilise les outils générés pour apprendre efficacement",
      color: "from-primary to-orange-600",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section id="how-it-works" className="section-spacing bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            {t('howItWorks.title')}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un processus simple et intuitif pour transformer ton apprentissage
          </p>
        </motion.div>

        {/* Layout horizontal simplifié pour desktop, vertical pour mobile */}
        <div className="max-w-6xl mx-auto">
          <div className="hidden md:flex items-center justify-between space-x-8">
            {steps.map((step, index) => (
              <div key={index} className="flex-1">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  {/* Step card */}
                  <div className={`relative p-6 rounded-2xl ${step.bgColor} backdrop-blur-sm border border-border/20 hover:border-border/40 transition-all duration-300 hover:scale-105 group`}>
                    {/* Step number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <step.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Mobile vertical layout */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`p-6 rounded-2xl ${step.bgColor} backdrop-blur-sm border border-border/20`}>
                  <div className="flex items-start space-x-4">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} shadow-lg mb-3`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
