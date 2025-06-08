
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Aminata Diallo",
      role: "Étudiante en Médecine",
      content: "Assimylia a révolutionné ma façon d'étudier. Les flashcards générées automatiquement m'ont fait gagner des heures de préparation !",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Kwame Asante",
      role: "Étudiant en Ingénierie",
      content: "L'IA comprend parfaitement mes cours techniques. Les résumés sont précis et les quiz m'aident vraiment à retenir.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Fatou Ba",
      role: "Étudiante en Droit",
      content: "Fini le stress des révisions ! Assimylia transforme mes textes juridiques complexes en fiches claires et mémorisables.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Omar Traore",
      role: "Étudiant en Business",
      content: "Le système de planification de révisions s'adapte parfaitement à mon emploi du temps chargé. Très efficace !",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Aisha Mohammed",
      role: "Étudiante en Sciences",
      content: "Les explications de concepts complexes sont claires et adaptées à mon niveau. J'ai amélioré mes notes !",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Joseph Nkomo",
      role: "Étudiant en Histoire",
      content: "Assimylia rend l'apprentissage ludique. Les quiz interactifs transforment mes longues lectures en jeu captivant.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
    }
  ];

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section-spacing bg-gradient-to-br from-background via-purple-50/20 to-background dark:via-purple-950/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-orange-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Découvre comment Assimylia transforme l'expérience d'apprentissage des étudiants
          </p>
        </motion.div>

        {/* Infinite scroll container */}
        <div className="relative">
          <div className="flex space-x-6 animate-scroll-left">
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                  <Quote className="w-6 h-6 text-primary/40" />
                </div>

                <p className="text-sm leading-relaxed mb-4 text-muted-foreground">
                  {testimonial.content}
                </p>

                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays for infinite effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}
