import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircle, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const getTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const knowledgeBase = {
  greeting: [
    "Hi there! I'm Ali's AI assistant. I can tell you about his experience, skills, and projects. What would you like to know?",
    "Hello! Welcome to Ali's portfolio. Feel free to ask me anything about his work in AI, agent development, or his projects!",
    "Hey! I'm here to help you learn more about Ali Nozad and his AI expertise. What interests you?",
  ],
  skills: [
    "Ali specializes in AI Agent Development, LLM Engineering, and Full-Stack AI Solutions. He's proficient with OpenAI GPT-4o, Claude, Gemini, and various other models. He also excels in workflow automation using n8n, voice AI integration, and cloud deployment.",
    "His technical stack includes LLM prompt engineering, multi-agent architectures, React/JavaScript for web development, Linux server management, and Docker. He's built 10+ AI agents and 6 complex automation workflows.",
  ],
  experience: [
    "Ali has worked as a Full-Stack AI Solutions Engineer at Alef.ba Team, where he built 10+ advanced AI agents and increased team productivity by 50%. He's delivered projects for clients in Iran, Australia, and Belgium.",
    "He has experience at Ertebatat Net Mihan as an AI Agent Developer, Bani Andisheh Baya as a Prompt AI Engineer, and has done freelance work integrating AI into websites and building admin panels.",
  ],
  projects: [
    "Some notable projects include:\n\n1. 24/7 Website Customer Support AI Agent - Reduced response time by 70%\n2. Multilingual Real-Time Voice AI Agent for an Australian client\n3. Multi-LLM Platform for a Belgian company with usage analytics\n4. Intelligent Exam Proctoring Platform with face tracking\n5. AutoCast - AI Social Content Automation system",
    "Ali has built voice AI assistants, customer support agents, exam proctoring systems, and multimodal content generation agents. His projects span from B2C to B2B solutions with real production impact.",
  ],
  contact: [
    "You can reach Ali at:\n\nEmail: imalinozad@gmail.com\nTelegram: @itsalinozad\nPhone: +989113055679\n\nHe's currently open to new opportunities and collaborations!",
    "Ali is available for work! Contact him via email at imalinozad@gmail.com or on Telegram @itsalinozad. He's based in Rasht, Iran and works with international clients.",
  ],
  location: [
    "Ali is based in Rasht, Iran. He works remotely with clients internationally, including projects in Australia and Belgium.",
  ],
  education: [
    "Ali is currently pursuing his B.Sc. in Software Engineering at Islamic Azad University, Rasht (2023–Present) while building at the frontier of applied AI.",
  ],
  voice: [
    "Yes! Ali has extensive experience with voice AI. He built a Multilingual Real-Time Voice AI Agent for an Australian client that handles multiple languages with interruption handling. He works with ElevenLabs, Minimax, and real-time speech APIs.",
  ],
  automation: [
    "Ali specializes in workflow automation using n8n, Make, Zapier, and custom API pipelines. He's built message management systems, market monitoring agents, and complex multi-step automation workflows that have reduced manual workload by 40-50%.",
  ],
};

const getSmartResponse = (userMessage: string): string => {
  const msg = userMessage.toLowerCase();

  if (
    msg.match(/hi|hello|hey|greetings|good\s*(morning|afternoon|evening)/)
  ) {
    return knowledgeBase.greeting[
      Math.floor(Math.random() * knowledgeBase.greeting.length)
    ];
  }

  if (msg.match(/skill|tech|stack|tool|proficient|expert|know/)) {
    return knowledgeBase.skills[
      Math.floor(Math.random() * knowledgeBase.skills.length)
    ];
  }

  if (
    msg.match(
      /experience|work|job|career|background|worked|company|position|role/
    )
  ) {
    return knowledgeBase.experience[
      Math.floor(Math.random() * knowledgeBase.experience.length)
    ];
  }

  if (msg.match(/project|built|build|portfolio|work|created|developed/)) {
    return knowledgeBase.projects[
      Math.floor(Math.random() * knowledgeBase.projects.length)
    ];
  }

  if (
    msg.match(
      /contact|email|reach|hire|connect|telegram|phone|availability|available/
    )
  ) {
    return knowledgeBase.contact[
      Math.floor(Math.random() * knowledgeBase.contact.length)
    ];
  }

  if (msg.match(/where|location|based|live|from/)) {
    return knowledgeBase.location[0];
  }

  if (msg.match(/education|study|university|degree|student/)) {
    return knowledgeBase.education[0];
  }

  if (msg.match(/voice|speech|audio|talk|speak|conversation/)) {
    return knowledgeBase.voice[0];
  }

  if (msg.match(/automat|workflow|n8n|zapier|make/)) {
    return knowledgeBase.automation[0];
  }

  if (msg.match(/llm|gpt|claude|gemini|openai|model|ai\s*agent/)) {
    return "Ali works extensively with various LLMs including OpenAI GPT-4o, Claude, Gemini, Llama, DeepSeek, Qwen, and Mistral. He specializes in prompt engineering, multi-step reasoning, agentic workflows, and RAG systems. He's built production-grade AI agents that solve real business problems.";
  }

  if (msg.match(/price|cost|rate|budget|pricing/)) {
    return "For pricing and project discussions, please reach out to Ali directly at imalinozad@gmail.com. He'll be happy to discuss your specific needs and provide a tailored quote.";
  }

  if (msg.match(/why\s*ali|why\s*hire|what\s*makes|unique|special/)) {
    return "Ali doesn't just build models - he builds systems that work in production. He owns the full lifecycle: design, build, deploy, and iterate. With 10+ agents shipped, 70% response time improvements, and 50% productivity boosts, he delivers measurable business impact. Plus, he has international experience with clients in multiple countries.";
  }

  return "That's an interesting question! I can tell you about Ali's skills, experience, projects, or how to contact him. What would you like to know more about?";
};

const IntelligentChatbot = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm Ali's AI assistant. I can tell you about his experience, skills, and projects. What would you like to know?",
      sender: "bot",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg: Message = {
      id: Date.now(),
      text: trimmed,
      sender: "user",
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const webhookUrl = "https://n8nserver.alef.ba/webhook/3e1bcfb0-fda1-4fa8-b55a-9b8d456596cd";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmed,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.status}`);
      }

      const data = await response.json();
      let botResponse = data.response || data.message || data.text || data.reply;

      if (!botResponse) {
        botResponse = "I received your message. Thank you!";
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: botResponse,
          sender: "bot",
          time: getTime(),
        },
      ]);
    } catch (error) {
      console.error("Webhook error:", error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Sorry, I'm having trouble processing your message. Please try again.",
          sender: "bot",
          time: getTime(),
        },
      ]);
    }
  };

  const handleQuickQuestion = async (question: string) => {
    const userMsg: Message = {
      id: Date.now(),
      text: question,
      sender: "user",
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    try {
      const webhookUrl = "https://n8nserver.alef.ba/webhook/3e1bcfb0-fda1-4fa8-b55a-9b8d456596cd";

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Webhook error: ${response.status}`);
      }

      const data = await response.json();
      let botResponse = data.response || data.message || data.text || data.reply;

      if (!botResponse) {
        botResponse = "I received your message. Thank you!";
      }

      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: botResponse,
          sender: "bot",
          time: getTime(),
        },
      ]);
    } catch (error) {
      console.error("Webhook error:", error);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Sorry, I'm having trouble processing your message. Please try again.",
          sender: "bot",
          time: getTime(),
        },
      ]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/20 flex flex-col overflow-hidden"
          style={{ height: "min(520px, calc(100vh - 8rem))" }}
        >
          <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-foreground font-mono">
                  Ali's AI Assistant
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground flex items-center gap-1">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                  Online & Ready
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {messages.length === 1 && (
            <div className="px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border-b border-white/10">
              <p className="text-[10px] sm:text-xs text-muted-foreground mb-1.5 sm:mb-2 font-mono">
                Quick questions:
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  "What are his skills?",
                  "Show me projects",
                  "How to contact?",
                ].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-[10px] sm:text-xs bg-white/10 border border-white/20 text-primary px-2 sm:px-3 py-1 sm:py-1.5 rounded-full hover:bg-white/20 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 space-y-2 sm:space-y-3 bg-white/5">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-3 sm:px-4 py-2 sm:py-2.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-md"
                      : "bg-white/15 backdrop-blur-sm text-foreground rounded-bl-md border border-white/20"
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.text}</div>
                  <p
                    className={`text-[9px] sm:text-[10px] mt-1 sm:mt-1.5 ${msg.sender === "user" ? "text-primary-foreground/60" : "text-muted-foreground"}`}
                  >
                    {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex justify-start"
              >
                <div className="bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: 0,
                      }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: 0.2,
                      }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                    <motion.span
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        delay: 0.4,
                      }}
                      className="w-2 h-2 bg-primary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-3 sm:px-4 py-2.5 sm:py-3 border-t border-white/10 bg-white/5">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-1.5 sm:gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-white/50 outline-none focus:ring-2 focus:ring-primary/50 transition-all backdrop-blur-sm"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={isTyping || !input.trim()}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </form>
            <p className="text-[9px] sm:text-[10px] text-muted-foreground mt-1.5 sm:mt-2 text-center font-mono">
              Powered by AI • Answers about Ali's work
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntelligentChatbot;
