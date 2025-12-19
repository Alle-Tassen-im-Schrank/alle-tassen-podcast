import { motion } from "framer-motion";

interface CupIconProps {
  className?: string;
  variant?: "default" | "tilted" | "steam";
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-12 h-12",
  md: "w-20 h-20",
  lg: "w-32 h-32",
  xl: "w-48 h-48",
};

const CupIcon = ({ className = "", variant = "default", size = "md" }: CupIconProps) => {
  const rotation = variant === "tilted" ? "rotate-12" : "";
  
  return (
    <div className={`relative ${sizeClasses[size]} ${rotation} ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cup body */}
        <path
          d="M20 30 L20 75 C20 85 30 90 50 90 C70 90 80 85 80 75 L80 30 Z"
          className="fill-cup-terracotta"
        />
        
        {/* Cup highlight */}
        <path
          d="M25 35 L25 70 C25 78 33 82 50 82"
          className="stroke-cup-soft-orange"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
        
        {/* Cup rim */}
        <ellipse
          cx="50"
          cy="30"
          rx="30"
          ry="8"
          className="fill-cup-soft-orange"
        />
        
        {/* Coffee inside */}
        <ellipse
          cx="50"
          cy="32"
          rx="25"
          ry="5"
          className="fill-cup-deep-blue"
          opacity="0.8"
        />
        
        {/* Handle */}
        <path
          d="M80 40 C95 40 98 55 95 65 C92 75 85 75 80 70"
          className="stroke-cup-terracotta"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {/* Steam animation */}
      {variant === "steam" && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-4 bg-muted-foreground/30 rounded-full"
              animate={{
                y: [-5, -15, -25],
                opacity: [0, 0.6, 0],
                scale: [1, 1.2, 1.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CupIcon;
