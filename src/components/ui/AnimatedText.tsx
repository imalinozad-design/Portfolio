import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
  phrases: string[];
}

export default function AnimatedText({ phrases }: AnimatedTextProps) {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const phrase = phrases[currentPhrase];
    let charIndex = 0;
    let timeout: NodeJS.Timeout;

    const typeChar = () => {
      if (charIndex < phrase.length) {
        setDisplayText(phrase.substring(0, charIndex + 1));
        charIndex++;
        timeout = setTimeout(typeChar, 30);
      } else {
        timeout = setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setDisplayText("");
        }, 2000);
      }
    };

    typeChar();

    return () => clearTimeout(timeout);
  }, [currentPhrase, phrases]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-primary inline-block min-w-max"
    >
      {displayText}
      <span className="animate-cursor-blink">|</span>
    </motion.span>
  );
}
