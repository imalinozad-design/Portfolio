import SectionTitle from "./ui/SectionTitle";
import FadeUp from "./ui/FadeUp";
import GlowCard from "./ui/GlowCard";
import TechBadge from "./ui/TechBadge";
import { ExternalLink } from "lucide-react";

interface FeaturedProject {
  title: string;
  tag: string;
  description: string;
  impact: string;
  tech: string[];
}

interface SmallProject {
  title: string;
  description: string;
  tech: string[];
}

const featured: FeaturedProject[] = [
  {
    title: "24/7 Website Customer Support AI Agent",
    tag: "Customer Automation | NLP | Web Integration",
    description:
      "A production-deployed text-based AI agent embedded in a client website to automate 24/7 customer support. Designed the conversational knowledge flow, integrated with the website frontend and internal data sources, and implemented logging, fallback handling, and basic analytics.",
    impact:
      "~70% reduction in average response time · Significant decrease in manual support load",
    tech: ["OpenAI", "n8n", "JavaScript", "Nginx", "Linux"],
  },
  {
    title: "Multilingual Real-Time Voice AI Agent",
    tag: "Voice AI | Multimodal | International",
    description:
      "A real-time voice assistant capable of conducting conversations in multiple languages, with structured data logging from each session. Built for an Australian client; connected speech recognition, LLMs, and speech synthesis in a seamless real-time pipeline with interruption and clarification handling.",
    impact:
      "Fast multi-language communication · Structured follow-up data for every session",
    tech: ["ElevenLabs", "OpenAI", "Twilio", "Python", "Real-time APIs"],
  },
  {
    title: "Multi-LLM Platform for Companies",
    tag: "Platform | Enterprise | International",
    description:
      "A unified business platform exposing multiple LLMs to enterprise users with role-based access control, usage analytics, and cost tracking. Built for a Belgian client. Designed authentication, model selection UI, API layer, and a management dashboard with real-time model cost visibility.",
    impact:
      "Teams can experiment with GPT-4o, Claude, Gemini side-by-side · Full usage + cost transparency",
    tech: ["OpenAI", "Claude", "Gemini", "React", "Docker", "DigitalOcean"],
  },
];

const smallProjects: SmallProject[] = [
  {
    title: "Message Management & Spreadsheet Automation Agent",
    description:
      "Auto-classifies incoming messages and stores them in structured spreadsheets — reduced manual triage by 40–50%.",
    tech: ["n8n", "LLMs", "Google Sheets"],
  },
  {
    title: "Digital Asset Market Monitoring Agent",
    description:
      "Monitors crypto prices and trends; generates real-time AI-powered summaries and alerts.",
    tech: ["Python", "OpenAI", "Price APIs"],
  },
  {
    title: "AI Usage & Cost Dashboard",
    description:
      "Internal dashboard tracking AI consumption per user/project in real-time USD.",
    tech: ["React", "Python", "Analytics"],
  },
  {
    title: "Intelligent Exam Proctoring Platform",
    description:
      "Web-based exam system with face tracking to detect suspicious behavior; admin panel with detailed PDF reports.",
    tech: ["Face Tracking", "JavaScript", "React"],
  },
  {
    title: "AI-Powered Tax Audit & Eligibility Platform",
    description:
      "Decision support system evaluating tax eligibility for businesses, integrated with the JAM tax system.",
    tech: ["AI Agent", "Database", "B2B/B2C"],
  },
  {
    title: "AutoCast — AI Social Content Automation",
    description:
      "Agent that turns a single prompt into a full social content package (scenario + images + video) and publishes automatically.",
    tech: ["Generative AI", "HeyGen", "Social APIs"],
  },
  {
    title: "AutoCode — Prompt-to-Website Generator",
    description:
      "An AI agent that translates natural language requests into complete websites using AI app-builder tools.",
    tech: ["AI Agents", "Bolt.new", "No-Code"],
  },
  {
    title: "Telegram Bot — Multi-Agent Gateway",
    description:
      "A Telegram bot acting as a single entry point routing users to multiple AI backend agents and workflows.",
    tech: ["Telegram API", "n8n", "LLMs"],
  },
  {
    title: "Multimodal Content Generation Agents",
    description:
      "Agents orchestrating multiple generative services to produce marketing images and educational videos from prompts.",
    tech: ["Stable Diffusion", "HeyGen", "Minimax"],
  },
];

const Projects = () => (
  <section id="projects" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <FadeUp>
      <div className="mb-10 sm:mb-12 md:mb-16">
        <p className="font-mono text-[#64FFDA] text-base sm:text-lg md:text-xl font-bold">
          04. <span className="text-white">Featured Projects</span>
        </p>
      </div>
    </FadeUp>
    <FadeUp delay={0.1}>
      <p className="text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl">
        A selection of AI systems I've architected and shipped — from autonomous
        agents to intelligent platforms.
      </p>
    </FadeUp>

    {/* Featured */}
    <div className="space-y-10 sm:space-y-12 md:space-y-16 mb-12 sm:mb-16 md:mb-20">
      {featured.map((p, i) => (
        <FadeUp key={i} delay={0.1}>
          <div
            className={`grid md:grid-cols-2 gap-6 sm:gap-8 items-center ${
              i % 2 === 1 ? "md:direction-rtl" : ""
            }`}
          >
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <p className="font-mono text-primary text-[10px] sm:text-xs mb-2">{p.tag}</p>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
                {p.title}
              </h3>
              <div className="bg-card border border-border rounded-lg p-4 sm:p-5 md:p-6 mb-3 sm:mb-4">
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
              <p className="font-mono text-[10px] sm:text-xs text-primary mb-3 sm:mb-4 leading-relaxed">{p.impact}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {p.tech.map((t) => (
                  <TechBadge key={t} label={t} />
                ))}
              </div>
            </div>
            <div
              className={`bg-card border border-border rounded-lg h-48 sm:h-56 flex items-center justify-center overflow-hidden ${
                i % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              {i === 0 ? (
                <img
                  src="/customer-support.png"
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              ) : i === 1 ? (
                <img
                  src="/image-copy.png"
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              ) : i === 2 ? (
                <img
                  src="/image.png"
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="font-mono text-muted-foreground text-sm">
                  Project Preview
                </span>
              )}
            </div>
          </div>
        </FadeUp>
      ))}
    </div>

    {/* Small projects grid */}
    <FadeUp>
      <h3 className="font-mono text-base sm:text-lg text-foreground mb-6 sm:mb-8 text-center">
        Other Noteworthy Projects
      </h3>
    </FadeUp>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      {smallProjects.map((p, i) => (
        <FadeUp key={i} delay={0.05 * i}>
          <GlowCard className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <h4 className="font-mono text-xs sm:text-sm font-semibold text-foreground leading-tight">
                {p.title}
              </h4>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-muted-foreground shrink-0 ml-2" />
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm flex-1 mb-3 sm:mb-4 leading-relaxed">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {p.tech.map((t) => (
                <TechBadge key={t} label={t} />
              ))}
            </div>
          </GlowCard>
        </FadeUp>
      ))}
    </div>
  </section>
);

export default Projects;
