'use client';

// AppLayout is now provided globally via ConditionalLayout
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatbotPage() {
    const [messages, setMessages] = useState<Array<{ role: 'user' | 'bot'; content: string }>>([
        {
            role: 'bot',
            content: "Hello! I'm here to help you understand One Nation One Election. Ask me anything about ONOE, its history, benefits, concerns, or legal aspects."
        }
    ]);
    const [inputMessage, setInputMessage] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // Sample responses - in production, this would connect to an AI API
    const getBotResponse = (userMessage: string): string => {
        const lowerMessage = userMessage.toLowerCase();

        if (lowerMessage.includes('what') && lowerMessage.includes('onoe')) {
            return "One Nation One Election (ONOE) refers to the idea of holding simultaneous elections to the Lok Sabha (Parliament) and all State Legislative Assemblies across India. Currently, elections are held separately at different times.";
        } else if (lowerMessage.includes('history') || lowerMessage.includes('when')) {
            return "India actually had simultaneous elections from 1951 to 1967. The cycle broke due to premature dissolution of some state assemblies and the Lok Sabha. The idea has been revived in recent years with reports from the Law Commission and NITI Aayog.";
        } else if (lowerMessage.includes('benefit') || lowerMessage.includes('advantage')) {
            return "Proponents argue that ONOE could: 1) Reduce election costs significantly, 2) Allow for more continuous governance by reducing the frequency of the Model Code of Conduct, and 3) Improve administrative efficiency by consolidating resources.";
        } else if (lowerMessage.includes('concern') || lowerMessage.includes('problem') || lowerMessage.includes('challenge')) {
            return "Critics raise several concerns: 1) It could undermine India's federal structure by reducing focus on state-specific issues, 2) Managing simultaneous elections across India presents enormous logistical challenges, and 3) Less frequent elections could reduce democratic accountability.";
        } else if (lowerMessage.includes('constitution') || lowerMessage.includes('legal') || lowerMessage.includes('law')) {
            return "The Indian Constitution doesn't explicitly mandate or prohibit simultaneous elections. Articles 83 and 172 specify the five-year term for Lok Sabha and State Assemblies. Implementing ONOE would likely require constitutional amendments, particularly regarding dissolution of assemblies and handling of hung assemblies.";
        } else if (lowerMessage.includes('cost') || lowerMessage.includes('money') || lowerMessage.includes('expensive')) {
            return "While ONOE may reduce election costs, the exact savings are debated. Some claim savings of ₹1 lakh crore annually, but independent estimates suggest the actual savings would likely be lower. The Election Commission's expenditure varies significantly between elections.";
        } else {
            return "That's an interesting question! For detailed information, I recommend checking our Learning Modules or Fact-Checking sections. You can also ask me about specific aspects like history, benefits, concerns, or constitutional aspects of ONOE.";
        }
    };

    const handleSendMessage = () => {
        if (!inputMessage.trim()) return;

        // Add user message
        const userMsg = { role: 'user' as const, content: inputMessage };
        setMessages([...messages, userMsg]);
        setInputMessage('');
        setIsTyping(true);

        // Simulate bot response delay
        setTimeout(() => {
            const botResponse = getBotResponse(inputMessage);
            setMessages(prev => [...prev, { role: 'bot', content: botResponse }]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const suggestedQuestions = [
        "What is ONOE?",
        "What are the benefits of ONOE?",
        "What are the concerns about ONOE?",
        "Tell me about the history of simultaneous elections in India"
    ];

  return (
    <>
            <div className="h-screen flex flex-col bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800">
                {/* Header */}
                <div className="bg-white dark:bg-dark-800 border-b border-slate-200 dark:border-dark-700 p-6">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-dark-50 mb-2">
                            ONOE Chatbot Assistant
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Ask me anything about One Nation One Election
                        </p>
                    </div>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-4xl mx-auto space-y-4">
                        {messages.map((message, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg p-4 ${message.role === 'user'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white dark:bg-dark-800 text-gray-800 dark:text-dark-50 border border-slate-200 dark:border-dark-700'
                                        }`}
                                >
                                    <p className="whitespace-pre-wrap">{message.content}</p>
                                </div>
                            </motion.div>
                        ))}

                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-start"
                            >
                                <div className="bg-white dark:bg-dark-800 rounded-lg p-4 border border-slate-200 dark:border-dark-700">
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Suggested Questions (show only at start) */}
                        {messages.length === 1 && (
                            <div className="mt-8">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Suggested questions:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {suggestedQuestions.map((question, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setInputMessage(question)}
                                            className="text-left p-3 bg-slate-100 dark:bg-dark-700 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-dark-600 transition-colors"
                                        >
                                            {question}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Input Area */}
                <div className="bg-white dark:bg-dark-800 border-t border-slate-200 dark:border-dark-700 p-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex space-x-3">
                            <textarea
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask a question about ONOE..."
                                rows={1}
                                className="flex-1 px-4 py-3 border border-slate-300 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-dark-700 dark:text-dark-50 resize-none"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputMessage.trim()}
                                className={`px-6 py-3 rounded-lg font-medium transition-all ${inputMessage.trim()
                                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                            Note: This is a demo chatbot with pre-programmed responses. In production, it would connect to an AI service.
                        </p>
                    </div>
                </div>
            </div>
    </>
  );
}
