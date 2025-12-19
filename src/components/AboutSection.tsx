import { motion } from "framer-motion";
import { Brain, Lightbulb, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Neurodiversität feiern",
    description:
      "Wir zeigen, dass unterschiedliche Denkweisen keine Hindernisse sind, sondern einzigartige Stärken im Unternehmertum.",
  },
  {
    icon: Lightbulb,
    title: "Authentische Geschichten",
    description:
      "Echte Gespräche mit Unternehmer:innen aus dem Autismus-Spektrum und mit ADHS über ihre Wege zum Erfolg.",
  },
  {
    icon: Users,
    title: "Community aufbauen",
    description:
      "Ein Raum für Austausch, Inspiration und gegenseitige Unterstützung in der neurodivergenten Business-Community.",
  },
];

const AboutSection = () => {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Über den Podcast
          </h2>
          <p className="text-lg text-muted-foreground">
            «Alle Tassen im Schrank» ist mehr als ein Podcast – es ist eine Bewegung. 
            Wir bringen neurodivergente Unternehmer:innen zusammen und zeigen, 
            dass der Weg zum Erfolg nicht linear sein muss.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
