import SectionTitle from "./ui/SectionTitle";
import FadeUp from "./ui/FadeUp";
import { Send, Github, Phone, Mail } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-16 sm:py-20 md:py-24 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <FadeUp>
      <div className="mb-10 sm:mb-12 md:mb-16">
        <p className="font-mono text-[#64FFDA] text-base sm:text-lg md:text-xl font-bold">
          05. <span className="text-white">What's Next?</span>
        </p>
      </div>
    </FadeUp>

    <FadeUp delay={0.1}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
        Let's Build Something Intelligent.
      </h2>
    </FadeUp>

    <FadeUp delay={0.2}>
      <p className="text-muted-foreground text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
        I'm currently open to new opportunities, collaborations, and interesting
        AI challenges. Whether you have a project in mind or just want to connect
        — my inbox is open.
      </p>
    </FadeUp>

    <FadeUp delay={0.3}>
      <button
        className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm border border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-primary/10 transition-colors duration-200"
      >
        <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        Say Hello →
      </button>
    </FadeUp>

    <FadeUp delay={0.4}>
      <div className="flex items-center justify-center gap-5 sm:gap-6 mt-10 sm:mt-12">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=imalinozad@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://github.com/imalinozad-design"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
        <a
          href="https://t.me/alinozad"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
          aria-label="Telegram"
        >
          <img src="/telegram.png" alt="Telegram" className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </FadeUp>
  </section>
);

export default Contact;
