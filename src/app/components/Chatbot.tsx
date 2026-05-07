"use client";

import { useState } from "react";
import { MessageSquare, X, Send, ShieldCheck } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Simulate email sending
    console.log("Sending message to email:", message);
    setIsSent(true);
    setMessage("");
    
    setTimeout(() => {
      setIsSent(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-100 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-reveal">
          <div className="bg-navy p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="font-semibold text-sm">Lextr Support</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="p-6 min-h-[200px] flex flex-col justify-end">
            {isSent ? (
              <div className="text-center animate-reveal">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-6 h-6" />
                </div>
                <p className="text-sm font-medium text-gray-800">Message Sent!</p>
                <p className="text-xs text-gray-500 mt-1">Our team will contact you via email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                  Hello! How can we help you with your compliance needs today?
                </p>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full text-sm p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                  rows={3}
                />
                <button
                  type="submit"
                  className="w-full bg-navy text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-black transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 cursor-pointer ${
          isOpen ? "bg-white text-navy rotate-90" : "bg-navy text-white hover:scale-110"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
