import { motion } from "framer-motion";
import CupIcon from "./CupIcon";

const hosts = [
  {
    name: "Chris Burger",
    role: "Host",
    description:
      "Chris bringt seine einzigartige Perspektive und jahrelange Erfahrung als neurodivergenter Unternehmer in jedes Gespräch ein.",
  },
  {
    name: "Benjamin Wennek",
    role: "Host",
    description:
      "Benjamin sorgt mit seinem analytischen Blick und seiner Empathie für tiefgehende und authentische Gespräche.",
  },
];

const HostsSection = () => {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative cups */}
      <div className="absolute top-10 right-10 opacity-10">
        <CupIcon size="xl" variant="tilted" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10">
        <CupIcon size="lg" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Eure Hosts
          </h2>
          <p className="text-lg text-muted-foreground">
            Zwei Stimmen, eine Mission: Die Geschichten neurodivergenter Unternehmer:innen 
            hörbar machen und Inspiration teilen.
          </p>
        </motion.div>

        {/* Hosts grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hosts.map((host, index) => (
            <motion.div
              key={host.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              {/* Avatar placeholder with cup */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <CupIcon size="sm" variant="steam" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {host.name}
                  </h3>
                  <p className="text-primary font-medium">{host.role}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {host.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostsSection;
