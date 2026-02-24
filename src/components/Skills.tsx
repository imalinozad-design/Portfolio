import SectionTitle from "./ui/SectionTitle";
import FadeUp from "./ui/FadeUp";
import GlowCard from "./ui/GlowCard";
import {
  Brain,
  GitBranch,
  Link2,
  Code2,
  Server,
  Mic,
  BarChart2,
} from "lucide-react";
import { ReactNode } from "react";

interface SkillCategory {
  icon: ReactNode;
  title: string;
  emoji: string;
  items: string[];
}

const categories: SkillCategory[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    emoji: "🤖",
    title: "AI & LLM Engineering",
    items: [
      "LLM prompt engineering, tool-calling & function-calling",
      "Multi-step reasoning & agentic workflows",
      "Multimodal AI (text, image, audio, video)",
      "RAG / Knowledge-augmented systems",
      "Fine-tuning & domain adaptation",
      "OpenAI GPT-4o, Claude, Gemini, Llama, DeepSeek, Qwen, Mistral, Hugging Face",
    ],
  },
  {
    icon: <GitBranch className="w-6 h-6" />,
    emoji: "⚙️",
    title: "Agent & Workflow Development",
    items: [
      "Multi-step agent architectures (routing, tool selection, error recovery)",
      "n8n (advanced), Make, Zapier, custom API pipelines",
      "Event-driven workflows with fallback/fail-safe logic",
      "Production logging & observability for agents",
      "State management across multi-turn interactions",
    ],
  },
  {
    icon: <Link2 className="w-6 h-6" />,
    emoji: "🔗",
    title: "Automation & Integration",
    items: [
      "Connecting agents to CRMs, spreadsheets, messaging platforms",
      "VoIP/communication integration (Twilio, Telnyx)",
      "Web front-end ↔ AI backend integration",
      "Telegram bots, WhatsApp, and chat platform agents",
      "Custom API orchestration",
    ],
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    emoji: "🌐",
    title: "Web & Product Development",
    items: [
      "HTML, CSS, JavaScript / React",
      "Admin panels & AI dashboards",
      "UX design for AI interactions",
      "No-code/low-code rapid prototyping",
      "Bolt.new, V0/Vercel AI, Replit AI, Lovable, Rocket.new",
    ],
  },
  {
    icon: <Server className="w-6 h-6" />,
    emoji: "☁️",
    title: "Cloud, Servers & DevOps",
    items: [
      "Linux (Ubuntu Server), VPS/DigitalOcean",
      "Nginx reverse proxy, SSL/TLS, DNS management",
      "Docker & containerized microservices",
      "Environment security, secrets management",
      "Monitoring: uptime, performance, resource usage",
    ],
  },
  {
    icon: <Mic className="w-6 h-6" />,
    emoji: "🎙️",
    title: "Voice & Multimodal AI",
    items: [
      "Real-time speech recognition + LLM + synthesis pipelines",
      "ElevenLabs, Minimax, HeyGen, Sora-style video workflows",
      "Multilingual voice agents with interruption handling",
      "Multimodal content generation (image + video orchestration)",
    ],
  },
  {
    icon: <BarChart2 className="w-6 h-6" />,
    emoji: "📊",
    title: "Data, Analytics & Operations",
    items: [
      "Interaction logging and agent step tracking",
      "KPI design and experiment tracking",
      "AI usage & cost analytics (per user / per project / USD)",
      "JSON, spreadsheets, and lightweight database design",
    ],
  },
];

const Skills = () => (
  <section id="skills" className="py-16 sm:py-20 md:py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <FadeUp>
      <SectionTitle number="02" title="Skills & Tools" />
    </FadeUp>
    <FadeUp delay={0.1}>
      <p className="text-muted-foreground text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl">
        A curated toolkit for building end-to-end AI products — from LLM
        orchestration to cloud deployment.
      </p>
    </FadeUp>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
      {categories.map((cat, i) => (
        <FadeUp key={i} delay={0.1 + i * 0.08}>
          <GlowCard className="h-full">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="text-primary flex-shrink-0">{cat.icon}</span>
              <h3 className="font-mono text-xs sm:text-sm font-semibold text-foreground leading-tight">
                {cat.emoji} {cat.title}
              </h3>
            </div>
            <ul className="space-y-1.5 sm:space-y-2">
              {cat.items.map((item, j) => (
                <li
                  key={j}
                  className="text-muted-foreground text-xs sm:text-sm flex items-start gap-2"
                >
                  <span className="text-primary mt-0.5 sm:mt-1 shrink-0">▹</span>
                  <span className="leading-tight sm:leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </GlowCard>
        </FadeUp>
      ))}
    </div>
  </section>
);

export default Skills;
