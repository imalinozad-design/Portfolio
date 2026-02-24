import { motion } from "framer-motion";
import AnimatedText from "./ui/AnimatedText";

const terminalLines = [
  { prompt: "$ ali --status", delay: 0.6 },
  { text: "> Role: AI Agent Product Builder", delay: 0.9 },
  { text: "> Location: Rasht, Iran 🌍", delay: 1.1 },
  { text: "> Projects: 10+ Agents Built", delay: 1.3 },
  { text: "> Status: Available for Work ✓", delay: 1.5 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
    {/* Dot grid bg */}
    <div className="absolute inset-0 dot-grid opacity-40" />

    <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-center pt-20 sm:pt-24 pb-8 sm:pb-12">
      {/* Left content */}
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="font-mono text-primary text-xs sm:text-sm mb-3 sm:mb-4">
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={item}
          className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-3 sm:mb-4 leading-tight"
        >
          Ali Nozad.
        </motion.h1>
        <motion.h2
          variants={item}
          className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-muted-foreground mb-4 sm:mb-6 leading-tight"
        >
          I build intelligent AI agents{" "}
          <span className="block sm:inline mt-2 sm:mt-0">
            <AnimatedText
              phrases={[
                "that automate workflows.",
                "for customer support.",
                "with voice capabilities.",
                "that process documents.",
                "for real-time analytics.",
                "that integrate systems.",
                "with multimodal AI.",
                "for business automation.",
                "that understand context.",
                "powered by LLMs.",
                "with RAG pipelines.",
                "for intelligent routing.",
              ]}
            />
          </span>
        </motion.h2>
        <motion.p
          variants={item}
          className="text-muted-foreground text-sm sm:text-base max-w-xl mb-6 sm:mb-8 leading-relaxed"
        >
          I'm an AI Agent Developer and Full-Stack AI Solutions Engineer specializing
          in building production-grade autonomous systems — from conversational
          agents and voice AI to multimodal workflows and cost-tracking platforms. I
          own the full lifecycle: design, build, deploy, and iterate.
        </motion.p>
        <motion.div variants={item} className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
          <a
            href="#projects"
            className="font-mono text-xs sm:text-sm bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-primary/90 transition-colors text-center"
          >
            View My Projects →
          </a>
          <a
            href="mailto:imalinozad@gmail.com"
            className="font-mono text-xs sm:text-sm border border-primary text-primary px-5 sm:px-6 py-2.5 sm:py-3 rounded hover:bg-primary/10 transition-colors text-center"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Terminal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden lg:block bg-[#0F1419] border border-[#2A3F5F] rounded-lg overflow-hidden shadow-2xl"
      >
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1A2332] border-b border-[#2A3F5F]">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-500" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 font-mono text-xs text-[#7A8FA3]">
            ali@portfolio:~
          </span>
        </div>
        <div className="p-5 font-mono text-sm space-y-1 bg-[#0F1419]">
          {terminalLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: line.delay }}
              className={
                line.prompt ? "text-[#06D6A0]" : "text-[#C4CDD5]"
              }
            >
              {line.prompt || line.text}
            </motion.div>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="inline-block w-2 h-4 bg-[#06D6A0] animate-cursor-blink mt-2"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
