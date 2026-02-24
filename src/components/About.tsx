import SectionTitle from "./ui/SectionTitle";
import FadeUp from "./ui/FadeUp";
import { Bot, Zap, Globe, TrendingUp, Users, Clock } from "lucide-react";

const stats = [
  { icon: Bot, label: "10+ AI Agents Built" },
  { icon: Zap, label: "6 Complex Automations" },
  { icon: Users, label: "5+ Clients Served" },
  { icon: Globe, label: "2 International Projects" },
  { icon: Clock, label: "70% Response Time Reduction" },
  { icon: TrendingUp, label: "50% Team Productivity Boost" },
];

const About = () => (
  <section id="about" className="py-16 sm:py-20 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <FadeUp>
      <SectionTitle number="01" title="About Me" />
    </FadeUp>

    <div className="grid md:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-start">
      <FadeUp delay={0.1}>
        <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            I'm Ali Nozad, based in Rasht, Iran — an AI Agent Developer and
            Full-Stack AI Solutions Engineer who doesn't just build models, but
            builds systems that work in production.
          </p>
          <p>
            My work sits at the intersection of large language models, workflow
            automation, and product thinking. I've shipped voice AI assistants,
            customer support agents, multi-LLM platforms, and intelligent exam
            proctoring systems — for clients in Iran, Australia, and Belgium.
          </p>
          <p>
            I believe the best AI product isn't the one with the smartest model —
            it's the one that reliably solves a real business problem, ships on
            time, and can be improved with data. That's what I build.
          </p>
          <p>
            Currently pursuing my B.Sc. in Software Engineering at Islamic Azad
            University, Rasht (2023–Present), while building at the frontier of
            applied AI.
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.2}>
        <div className="flex justify-center mb-8 md:mb-0">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full border-2 border-primary bg-card overflow-hidden">
            <img
              src="/photo_5814368112642559384_y.jpg"
              alt="Ali Nozad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </FadeUp>
    </div>

    <FadeUp delay={0.3}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-12 sm:mt-16">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-lg p-3 sm:p-4 text-center hover:border-primary/30 transition-colors duration-300"
          >
            <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1.5 sm:mb-2" />
            <p className="text-[10px] sm:text-xs font-mono text-foreground leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>
    </FadeUp>
  </section>
);

export default About;
