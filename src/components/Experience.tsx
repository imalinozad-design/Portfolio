import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import FadeUp from "./ui/FadeUp";

interface Job {
  company: string;
  title: string;
  responsibilities: string[];
  achievements: string[];
}

const jobs: Job[] = [
  {
    company: "Alef.ba Team",
    title: "Full-Stack AI Solutions Engineer (AI Agent Developer)",
    responsibilities: [
      "Designed and implemented AI agents for text, voice, and multimodal interactions",
      "Built custom automation workflows combining LLMs with internal tools, CRMs, spreadsheets, and messaging platforms",
      "Developed full-stack AI products: from frontend (web/UI) to backend logic and cloud deployment",
      "Turned prototypes into production-ready AI products with robust error handling, logging, monitoring, and security",
      "Managed Linux servers, Nginx reverse proxy, SSL, and domain/DNS configuration",
      "Designed real-time usage and cost dashboards (AI consumption in USD per user and per project)",
      "Acted as product owner for selected AI initiatives, shaping requirements and UX",
    ],
    achievements: [
      "Built 10+ advanced AI agents and 6 complex automation workflows for 5+ clients (B2C and B2B)",
      "Increased team productivity by up to 50% through workflow automation and intelligent routing",
      "Deployed a 24/7 customer support agent that reduced average response time by ~70%",
      "Implemented a usage-tracking and cost-calculation panel (USD per user / per project)",
      "Delivered international projects: voice AI assistant (Australia), multi-LLM platform (Belgium)",
      "Led cross-functional teams on AI product initiatives",
    ],
  },
  {
    company: "Ertebatat Net Mihan",
    title: "AI Agent Developer",
    responsibilities: [
      "Built conversational agents to assist users and internal teams",
      "Automated repetitive operational workflows using LLMs and integration platforms",
      "Connected agents with existing CRMs, support tools, spreadsheets, and reporting dashboards",
      "Monitored agent performance and iterated based on real-world usage and feedback",
    ],
    achievements: [
      "Introduced AI-powered automations that reduced manual workload and improved customer response speed",
      "Helped the company adopt AI safely and effectively in day-to-day operations",
    ],
  },
  {
    company: "Bani Andisheh Baya",
    title: "Prompt AI Engineer",
    responsibilities: [
      "Collaborated with an AI engineering team on language and image model projects",
      "Designed, experimented with, and optimized prompts for Q&A, content generation, classification, and tool use",
      "Contributed to early AI-based workflows that later evolved into complex agent systems",
      "Bridged communication between non-technical stakeholders and engineers",
    ],
    achievements: [],
  },
  {
    company: "Freelance",
    title: "Frontend Developer & AI Integration Developer",
    responsibilities: [
      "Delivered responsive front-end interfaces and admin panels for AI-related projects",
      "Integrated AI capabilities into websites (chatbots, content generation, automation triggers)",
      "Built UI components for managing agents, viewing logs, and controlling workflows",
      "Collaborated with designers and product owners for intuitive AI feature UX",
    ],
    achievements: [],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <FadeUp>
        <div className="mb-10 sm:mb-12 md:mb-16">
          <p className="font-mono text-[#64FFDA] text-base sm:text-lg md:text-xl font-bold">
            03. <span className="text-white">Experience</span>
          </p>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="flex flex-col md:flex-row gap-0">
          {/* Tab list */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border shrink-0 -mx-4 px-4 md:mx-0 md:px-0">
            {jobs.map((j, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 font-mono text-xs sm:text-sm text-left whitespace-nowrap transition-colors duration-200 ${
                  i === active
                    ? "text-primary border-b-2 md:border-b-0 md:border-l-2 border-primary bg-primary/5"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                }`}
              >
                {j.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[350px] sm:min-h-[400px] md:pl-6 lg:pl-8 pt-5 sm:pt-6 md:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-1 leading-tight">
                  {job.title}
                </h3>
                <p className="font-mono text-primary text-xs sm:text-sm mb-4 sm:mb-6">
                  @ {job.company}
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {job.responsibilities.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-xs sm:text-sm"
                    >
                      <span className="text-primary mt-0.5 shrink-0">▹</span>
                      <span className="leading-relaxed">{r}</span>
                    </li>
                  ))}
                </ul>

                {job.achievements.length > 0 && (
                  <>
                    <h4 className="font-mono text-xs sm:text-sm text-foreground mb-2 sm:mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {job.achievements.map((a, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 sm:gap-3 text-muted-foreground text-xs sm:text-sm"
                        >
                          <span className="text-primary mt-0.5 shrink-0">▹</span>
                          <span className="leading-relaxed">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </FadeUp>
    </section>
  );
};

export default Experience;
