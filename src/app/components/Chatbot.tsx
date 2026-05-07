"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, ShieldCheck, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

type ChatStep = "name" | "org" | "email" | "message" | "sending" | "success";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<ChatStep>("name");
  const [inputValue, setInputValue] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    user_org: "",
    user_email: "",
    message: "",
  });

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [step]);

  const handleNextStep = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const currentInput = inputValue.trim();
    setInputValue("");

    if (step === "name") {
      setFormData((prev) => ({ ...prev, user_name: currentInput }));
      setStep("org");
    } else if (step === "org") {
      setFormData((prev) => ({ ...prev, user_org: currentInput }));
      setStep("email");
    } else if (step === "email") {
      setFormData((prev) => ({ ...prev, user_email: currentInput }));
      setStep("message");
    } else if (step === "message") {
      const finalData = { ...formData, message: currentInput };
      setFormData(finalData);
      setStep("sending");
      sendEmail(finalData);
    }
  };

  const sendEmail = (data: any) => {
    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
      data,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
    )
    .then(() => {
      setStep("success");
      toast.success("Message sent via Chatbot!");
      setTimeout(() => {
        setIsOpen(false);
        setStep("name");
        setFormData({ user_name: "", user_org: "", user_email: "", message: "" });
      }, 5000);
    })
    .catch(() => {
      toast.error("Failed to send. Please try again.");
      setStep("message");
    });
  };

  const getQuestion = () => {
    switch (step) {
      case "name": return "Welcome to Lextr. We are currently in private beta. What is your full name?";
      case "org": return `Great to meet you, ${formData.user_name}. Which organization are you with?`;
      case "email": return "Perfect. What is your work email for the priority waitlist?";
      case "message": return "One last thing: What is your primary compliance challenge? (Optional)";
      default: return "";
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-100 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-85 bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-gray-100 overflow-hidden animate-reveal flex flex-col">
          {/* Header */}
          <div className="bg-navy p-5 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">Lextr Intel</div>
                <div className="text-[10px] text-blue-300 font-bold uppercase tracking-wider">Online & Secure</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* Messages Area */}
          <div ref={scrollRef} className="p-6 h-[320px] overflow-y-auto bg-gray-50/50 space-y-4">
            <div className="flex flex-col gap-4">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
                <p className="text-sm text-gray-700 leading-relaxed">{getQuestion()}</p>
              </div>
              
              {step === "sending" && (
                <div className="flex items-center gap-2 text-blue-600 font-bold text-xs animate-pulse">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Transmitting Signal...
                </div>
              )}

               {step === "success" && (
                <div className="bg-blue-600/5 p-6 rounded-2xl border border-blue-600/20 text-center animate-reveal">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/20 rotate-3">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-navy font-black text-lg mb-2 tracking-tight">You're on the list.</h4>
                  <p className="text-gray-500 text-xs font-medium leading-relaxed">
                    We've logged your interest for early access. You'll be the first to know when we deploy.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          {step !== "success" && step !== "sending" && (
            <div className="p-4 bg-white border-t border-gray-100">
              <form onSubmit={handleNextStep} className="relative">
                <input
                  autoFocus
                  type={step === "email" ? "email" : "text"}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your answer..."
                  className="w-full bg-gray-50 border-none rounded-xl py-3.5 pl-4 pr-12 text-sm font-medium focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-navy text-white rounded-lg flex items-center justify-center hover:bg-black transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 cursor-pointer ${
          isOpen ? "bg-white text-navy rotate-90 scale-90" : "bg-navy text-white hover:scale-105"
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 group-hover:opacity-40 transition-opacity" />
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
      </button>
    </div>
  );
}
