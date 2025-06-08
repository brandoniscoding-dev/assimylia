
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      // Navigation
      "nav.home": "Accueil",
      "nav.why": "Pourquoi ?",
      "nav.features": "Fonctionnalités",
      "nav.howItWorks": "Comment ça marche",
      "nav.login": "Connexion",
      "nav.signup": "S'inscrire",
      
      // Hero Section
      "hero.title": "Assimile plus vite, retient plus fort",
      "hero.subtitle": "L'IA qui transforme ton contenu en expérience de mémorisation interactive et ludique.",
      "hero.cta": "Démarrer maintenant",
      "hero.imageAlt": "Interface Assimylia",
      "hero.smartLearning": "Apprentissage intelligent",
      "hero.fastLearning": "Apprentissage rapide",
      
      // Why Section
      "why.title": "Pourquoi Assimylia ?",
      "why.card1.title": "Trop d'infos, pas assez de structure",
      "why.card1.desc": "Tu croules sous les informations sans savoir comment les organiser efficacement.",
      "why.card2.title": "Tu lis mais tu retiens peu",
      "why.card2.desc": "Malgré tes efforts, les connaissances ne restent pas gravées dans ta mémoire.",
      "why.card3.title": "Créer des fiches prend trop de temps",
      "why.card3.desc": "Synthétiser et créer des supports d'apprentissage te fait perdre un temps précieux.",
      
      // Features Section
      "features.title": "Apprendre n'a jamais été aussi simple",
      "features.subtitle": "Découvre tous les outils générés par l'IA pour optimiser ton apprentissage",
      "features.summaries": "Résumés générés",
      "features.flashcards": "Flashcards interactives",
      "features.quizzes": "Quiz personnalisés",
      "features.sheets": "Fiches de révision",
      "features.explanations": "Explication de concepts",
      "features.planning": "Planification de révisions",
      
      // How it works
      "howItWorks.title": "Comment ça marche",
      "howItWorks.step1": "Tu importes un contenu",
      "howItWorks.step2": "L'IA le comprend",
      "howItWorks.step3": "Tu assimiles avec les bons outils",
      
      // Footer
      "footer.developed": "Développé avec passion par",
      "footer.rights": "Tous droits réservés."
    }
  },
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.why": "Why?",
      "nav.features": "Features",
      "nav.howItWorks": "How it works",
      "nav.login": "Login",
      "nav.signup": "Sign up",
      
      // Hero Section
      "hero.title": "Learn faster, remember stronger",
      "hero.subtitle": "The AI that transforms your content into an interactive and engaging memorization experience.",
      "hero.cta": "Get started now",
      "hero.imageAlt": "Assimylia Interface",
      "hero.smartLearning": "Smart Learning",
      "hero.fastLearning": "Fast Learning",
      
      // Why Section
      "why.title": "Why Assimylia?",
      "why.card1.title": "Too much info, not enough structure",
      "why.card1.desc": "You're drowning in information without knowing how to organize it effectively.",
      "why.card2.title": "You read but retain little",
      "why.card2.desc": "Despite your efforts, knowledge doesn't stick in your memory.",
      "why.card3.title": "Creating sheets takes too much time",
      "why.card3.desc": "Synthesizing and creating learning materials wastes your precious time.",
      
      // Features Section
      "features.title": "Learning has never been this simple",
      "features.subtitle": "Discover all the AI-generated tools to optimize your learning",
      "features.summaries": "Generated summaries",
      "features.flashcards": "Interactive flashcards",
      "features.quizzes": "Personalized quizzes",
      "features.sheets": "Revision sheets",
      "features.explanations": "Concept explanations",
      "features.planning": "Revision planning",
      
      // How it works
      "howItWorks.title": "How it works",
      "howItWorks.step1": "You import content",
      "howItWorks.step2": "AI understands it",
      "howItWorks.step3": "You learn with the right tools",
      
      // Footer
      "footer.developed": "Developed with passion by",
      "footer.rights": "All rights reserved."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
