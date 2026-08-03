"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const predefinedResponses: Record<string, string> = {
  hello: "Hello! Welcome to AvaLimo. How can I help you today?",
  hi: "Hi there! I'm the AvaLimo assistant. Do you need a ride, have questions about our fleet, or want to know about our services?",
  pricing: "Our pricing is simple: S-Class starts at $55 base + $2/mile, Escalade at $82 base + $4/mile, and Sprinter at $128 base + $5/mile. No surge, ever! Want a quote?",
  fleet: "We have three premium vehicles: Mercedes S-Class (1-3 passengers), Cadillac Escalade (1-6 passengers), and Mercedes Sprinter (1-14 passengers). Which one interests you?",
  airport: "We service both IAH and Hobby airports with real-time flight tracking and 45 minutes free wait time. Need a ride to the airport?",
  wedding: "Congratulations! We offer white-glove wedding service with champagne options and photo-worthy arrivals. Would you like to book a consultation?",
  booking: "You can book online in 30 seconds! Just tell us your pickup location, destination, date/time, and vehicle. Or call us at (832) 567-8050.",
  default:
    "I'd be happy to help! You can ask about pricing, our fleet (S-Class, Escalade, Sprinter), airport transfers, weddings, or book a ride. What would you like to know?",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("price") || lower.includes("cost") || lower.includes("rate"))
    return predefinedResponses.pricing;
  if (lower.includes("fleet") || lower.includes("vehicle") || lower.includes("car"))
    return predefinedResponses.fleet;
  if (lower.includes("airport") || lower.includes("iah") || lower.includes("hobby"))
    return predefinedResponses.airport;
  if (lower.includes("wedding") || lower.includes("marry"))
    return predefinedResponses.wedding;
  if (lower.includes("book") || lower.includes("reserve") || lower.includes("ride"))
    return predefinedResponses.booking;
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey"))
    return predefinedResponses.hello;
  return predefinedResponses.default;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm the AvaLimo Assistant. How can I help you today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const response: Message = {
        id: messages.length + 2,
        text: getResponse(input),
        isUser: false,
      };
      setMessages((prev) => [...prev, response]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-lg z-50 hover:shadow-yellow-500/25 transition-shadow"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-gray-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-950"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </motion.button>

      {/* Online indicator */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed bottom-6 right-20 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-lg z-50 flex items-center gap-2"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Online
        </motion.div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900 rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden border border-white/10"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl">🚗</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-950">
                    AvaLimo Assistant
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-gray-800">
                    <span className="w-2 h-2 bg-green-600 rounded-full" />
                    Online
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                      msg.isUser
                        ? "bg-yellow-500 text-gray-950 rounded-br-md"
                        : "bg-gray-800 text-white rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about rides, pricing..."
                  className="flex-1 bg-gray-800 border border-white/10 rounded-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500/50"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors"
                >
                  <svg
                    className="w-5 h-5 text-gray-950"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
