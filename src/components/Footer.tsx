import { motion } from "framer-motion";
import CupIcon from "./CupIcon";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <CupIcon size="sm" />
            <span className="font-display text-xl font-semibold text-foreground">
              Alle Tassen im Schrank
            </span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground mb-8 max-w-md">
            Neurodivergente Unternehmer:innen im Gespräch. 
            Ein Podcast von Chris Burger und Benjamin Wennek.
          </p>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Alle Tassen im Schrank. Alle Rechte vorbehalten.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-primary transition-colors">Impressum</a>
              {" · "}
              <a href="#" className="hover:text-primary transition-colors">Datenschutz</a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
