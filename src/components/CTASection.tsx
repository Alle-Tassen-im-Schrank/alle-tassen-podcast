import { motion } from "framer-motion";
import { Button } from "./ui/button";
import CupIcon from "./CupIcon";
import { Apple, Headphones, Youtube } from "lucide-react";

const platforms = [
  { name: "Apple Podcasts", icon: Apple },
  { name: "Spotify", icon: Headphones },
  { name: "YouTube", icon: Youtube },
  { name: "Podigee", icon: Headphones },
];

const CTASection = () => {
  return (
    <section id="subscribe" className="py-24 bg-cup-deep-blue text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-[5%]"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <CupIcon size="lg" />
        </motion.div>
        <motion.div
          className="absolute bottom-10 right-[10%]"
          animate={{ y: [0, -20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <CupIcon size="xl" variant="tilted" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-[30%]"
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <CupIcon size="md" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <CupIcon size="lg" variant="steam" className="mx-auto mb-8" />
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Bereit für eine Tasse Inspiration?
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Abonniere den Podcast und verpasse keine Episode. 
            Jede Woche neue Geschichten von neurodivergenten Unternehmer:innen.
          </p>

          {/* Platform buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform) => (
              <Button
                key={platform.name}
                variant="secondary"
                size="lg"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20 group"
              >
                <platform.icon className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                {platform.name}
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
