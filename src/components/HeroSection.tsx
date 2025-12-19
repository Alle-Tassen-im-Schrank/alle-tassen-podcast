import { motion } from "framer-motion";
import CupIcon from "./CupIcon";
import { Button } from "./ui/button";
import { Headphones, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Floating cups decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-[10%]"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <CupIcon size="lg" variant="tilted" className="opacity-20" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-[15%]"
          animate={{ y: [0, -15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <CupIcon size="xl" className="opacity-15" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-[20%]"
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <CupIcon size="md" variant="tilted" className="opacity-25" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 right-[25%]"
          animate={{ y: [0, -18, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        >
          <CupIcon size="lg" className="opacity-10" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main cup with steam */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <CupIcon size="xl" variant="steam" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            Alle Tassen im Schrank
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-accent font-medium mb-4 italic"
          >
            — aber nicht der Reihe nach.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Neurodivergente Unternehmer:innen im Gespräch. 
            Ein Podcast über Autismus, ADHS und die einzigartigen Wege zum Erfolg.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Jetzt reinhören
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Headphones className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Podcast abonnieren
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z"
            className="fill-card"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
