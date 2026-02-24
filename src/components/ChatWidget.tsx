import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, MessageCircle, Loader2 } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  time: string;
}

const getTime = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const quickReplies = [
  "Tell me about Ali's experience",
  "What projects has Ali built?",
  "How can I contact Ali?",
  "What are Ali's skills?",
];

const botResponses: Record<string, string> = {
  experience:
    "Ali has 2+ years of experience as an AI Agent Developer and Full-Stack AI Solutions Engineer. He's worked with companies like Alef.ba Team, Ertebatat Net Mihan, and Bani Andisheh Baya, building production-grade autonomous systems.",
  projects:
    "Ali has built 10+ AI agents including: 24/7 Website Customer Support Agent, Multilingual Voice AI Agent (Australia), Multi-LLM Platform (Belgium), intelligent exam proctoring, tax audit systems, and various automation agents. Check out the Projects section for more details!",
  contact:
    "You can reach Ali at imalinozad@gmail.com or via Telegram at @itsalinozad. He's based in Rasht, Iran and available for work.",
  skills:
    "Ali specializes in LLM engineering (GPT-4o, Claude, Gemini), agent workflows, automation (n8n, Make), voice AI, full-stack development (React, Python), cloud/DevOps (Linux, Docker, Nginx), and multimodal AI systems.",
  default:
    "That's a great question! For detailed information, feel free to email Ali at imalinozad@gmail.com or explore the different sections of this portfolio.",
};

const ChatWidget = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Ali's AI assistant. I can answer questions about his experience, projects, skills, or how to get in touch. What would you like to know?",
      sender: "bot",
      time: getTime(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const getResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase();

    if (lowerText.includes("experience") || lowerText.includes("work") || lowerText.includes("job")) {
      return botResponses.experience;
    }
    if (lowerText.includes("project") || lowerText.includes("built") || lowerText.includes("portfolio")) {
      return botResponses.projects;
    }
    if (lowerText.includes("contact") || lowerText.includes("email") || lowerText.includes("reach") || lowerText.includes("telegram")) {
      return botResponses.contact;
    }
    if (lowerText.includes("skill") || lowerText.includes("technology") || lowerText.includes("tech") || lowerText.includes("tool")) {
      return botResponses.skills;
    }
    if (lowerText.includes("hi") || lowerText.includes("hello") || lowerText.includes("hey")) {
      return "Hello! I'm here to help you learn more about Ali. Feel free to ask about his experience, projects, skills, or how to contact him.";
    }
    if (lowerText.includes("who") || lowerText.includes("about")) {
      return "Ali Nozad is an AI Agent Developer and Full-Stack AI Solutions Engineer based in Rasht, Iran. He specializes in building production-grade autonomous systems and has delivered 10+ AI agents for clients worldwide.";
    }

    return botResponses.default;
  };

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMsg: Message = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      time: getTime(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowQuickReplies(false);
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(messageText);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: response,
          sender: "bot",
          time: getTime(),
        },
      ]);
      setIsTyping(false);
    }, 800 + Math.random() * 400);
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl border border-[#1e3a5f] bg-[#112240] shadow-2xl shadow-[#64FFDA]/10 flex flex-col overflow-hidden"
          style={{ height: 520 }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e3a5f] bg-[#0a1929]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#64FFDA]/20 flex items-center justify-center ring-2 ring-[#64FFDA]/30">
                <MessageCircle className="w-4 h-4 text-[#64FFDA]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white font-mono">
                  Ali's Assistant
                </p>
                <p className="text-xs text-gray-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                  Always here to help
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-[#0A192F]">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-[#64FFDA] text-[#0A192F] rounded-br-md font-medium"
                      : "bg-[#112240] text-gray-300 rounded-bl-md border border-[#1e3a5f]"
                  }`}
                >
                  {msg.text}
                  <p
                    className={`text-[10px] mt-1.5 ${
                      msg.sender === "user" ? "text-[#0A192F]/60" : "text-gray-500"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-[#112240] border border-[#1e3a5f] px-4 py-3 rounded-2xl rounded-bl-md">
                  <Loader2 className="w-4 h-4 text-[#64FFDA] animate-spin" />
                </div>
              </motion.div>
            )}

            {showQuickReplies && messages.length === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-2 space-y-2"
              >
                <p className="text-xs text-gray-500 font-mono px-1">Quick questions:</p>
                {quickReplies.map((reply, i) => (
                  <motion.button
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    onClick={() => handleQuickReply(reply)}
                    className="block w-full text-left px-3 py-2 rounded-lg text-xs text-gray-400 bg-[#112240] border border-[#1e3a5f] hover:border-[#64FFDA]/50 hover:text-[#64FFDA] transition-all"
                  >
                    {reply}
                  </motion.button>
                ))}
              </motion.div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="px-4 py-3 border-t border-[#1e3a5f] bg-[#0a1929]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-[#112240] border border-[#1e3a5f] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-gray-500 outline-none focus:ring-2 focus:ring-[#64FFDA]/50 focus:border-[#64FFDA]/50 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 rounded-xl bg-[#64FFDA] text-[#0A192F] flex items-center justify-center hover:bg-[#64FFDA]/90 transition-colors shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWidget;
