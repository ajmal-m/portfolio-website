import React from "react";
import { motion } from "framer-motion";

const AnimatedCard = ({ children, delay = 0, className = "", ...props }) => {
  // Animation variants for the card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts off invisible and slightly below
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay }, // Animate with delay for staggered effect
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% of the card is visible
      variants={cardVariants}
      className={`min-w-[250px] h-[400px] 
                hover:bg-transparent flex-1 
                grayscale drop-shadow-md bg-[#101010] rounded
                hover:grayscale-0
                backdrop-filter backdrop-blur-lg
                group relative`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
