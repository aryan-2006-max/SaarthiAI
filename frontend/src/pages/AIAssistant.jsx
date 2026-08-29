import React, { useState, useRef, useEffect } from 'react';
import { FiSend, FiUser, FiZap } from 'react-icons/fi';

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hello Aryan! 👋 I'm your Saarthi AI assistant. I can help you with routes, crowd info, spending, safety, and more. What would you like to know?"
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const suggestedQuestions = [
    'Best route to college?',
    'Should I leave now?',
    'Which bus is less crowded?',
    'How much did I spend?',
    'Is my route safe?',
    'Weather update'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const generateAIResponse = (userText) => {
    const text = userText.toLowerCase();
    
    if (text.includes('best route') || text.includes('route to college') || text.includes('route')) {
      return "📍 For your Home → IIT Delhi commute right now:\n\n⭐ **Recommended: Route B**\nE-rickshaw → Bus 127 → Metro → Walk\n⏱️ 46 min | 💰 ₹42 | 👥 Medium crowd\n\nYour normal Route A is predicted to be 19 min slower due to rain and high traffic. Route B saves you 15 minutes with only ₹7 extra.\n\nWould you like to start this journey?";
    }
    if (text.includes('leave now') || text.includes('should i leave') || text.includes('time')) {
      return "⏰ Based on current conditions:\n\n🌧️ Rain + 🔴 Heavy traffic detected\n\nI recommend leaving **15 minutes earlier** than usual. If you leave now, Route B gets you to IIT Delhi by approximately 9:15 AM with medium crowd levels.\n\nThe crowd on Bus 127 increases significantly after 9:00 AM.";
    }
    if (text.includes('crowded') || text.includes('crowd') || text.includes('bus')) {
      return "👥 Current Crowd Status for your route:\n\n🔴 Bus 42 (your normal): 90% occupied - Very crowded\n🟡 Bus 127 (Route B): 55% occupied - Moderate\n🟢 Bus 156 (alternative): 35% occupied - Light\n\n💡 I recommend Bus 127. Waiting for Bus 156 saves crowd but adds 12 minutes.";
    }
    if (text.includes('spend') || text.includes('cost') || text.includes('money') || text.includes('wallet')) {
      return "💰 Your Spending Summary:\n\n📅 Today: ₹55 (E-rickshaw ₹15 + Bus ₹10 + Metro ₹30)\n📅 This Week: ₹320\n📅 This Month: ₹820\n\n💡 A monthly metro pass could save you approximately ₹170. Want me to calculate the best pass for your travel pattern?";
    }
    if (text.includes('safe') || text.includes('safety')) {
      return "🛡️ Safety Assessment:\n\n🟢 Your recommended Route B has a safety score of **91/100**\n\n✅ Well-lit route segments\n✅ CCTV coverage at metro stations\n✅ Moderate crowd (safer than overcrowded)\n⚠️ Take care near Sarojini Nagar market area during rain\n\nWould you like me to activate Safety Mode for your journey?";
    }
    if (text.includes('accessible') || text.includes('wheelchair')) {
      return "♿ Accessibility Info for Route B:\n\n✅ E-rickshaw: Accessible pickup\n✅ Bus 127: Low-floor bus available\n✅ AIIMS Metro: Elevator available\n⚠️ IIT Delhi Metro: Use Gate 3 for ramp access\n\nAll segments rated accessible. Walking distance: 800m total.";
    }
    if (text.includes('weather') || text.includes('rain')) {
      return "🌤️ Delhi Weather Update:\n\n🌧️ Light to moderate rain expected till 2:00 PM\n🌡️ Temperature: 28°C\n💧 Humidity: 85%\n\n⚠️ Rain may cause waterlogging near Sarojini Nagar and INA. Route B avoids the worst affected areas.\n\nI've factored weather into today's route recommendations.";
    }
    
    return "I can help you with:\n\n🗺️ Route planning and recommendations\n👥 Crowd information and predictions\n💰 Spending analysis and savings tips\n🛡️ Safety information\n♿ Accessibility details\n🌤️ Weather impact on your commute\n\nTry asking: \"What's the best route to college?\" or \"How much did I spend this week?\"";
  };

  const handleSend = (text = inputValue) => {
    if (!text.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { id: Date.now(), sender: 'user', text }];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI thinking and responding
    setTimeout(() => {
      const response = generateAIResponse(text);
      setMessages(prev => [...prev, { id: Date.now(), sender: 'ai', text: response }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const formatText = (text) => {
    return text.split('\n').map((line, i) => {
      // Bold text formatting
      let formattedLine = line;
      if (formattedLine.includes('**')) {
        const parts = formattedLine.split('**');
        formattedLine = parts.map((part, idx) => 
          idx % 2 === 1 ? <strong key={idx} className="font-bold text-slate-900">{part}</strong> : part
        );
        return <p key={i} className="mb-1">{formattedLine}</p>;
      }
      return <p key={i} className={`${line.trim() === '' ? 'h-2' : 'mb-1'}`}>{line}</p>;
    });
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-sky-100 p-4 sticky top-0 z-10 flex items-center space-x-3 shadow-sm">
        <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center border border-sky-200">
          <FiZap className="text-sky-500 text-xl" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-slate-900 leading-tight">Saarthi AI</h1>
          <p className="text-xs text-sky-600 font-medium flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
            Online
          </p>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 bg-sky-50 pb-32">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-white border border-sky-200 flex items-center justify-center mr-2 shadow-sm shrink-0 mt-1">
                  <span className="text-sm">🤖</span>
                </div>
              )}
              
              <div 
                className={`max-w-[80%] p-3 shadow-sm text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-sky-500 text-white rounded-2xl rounded-br-sm' 
                    : 'bg-white border border-sky-100 rounded-2xl rounded-bl-sm text-slate-700'
                }`}
              >
                {formatText(msg.text)}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-white border border-sky-200 flex items-center justify-center mr-2 shadow-sm shrink-0 mt-1">
                <span className="text-sm">🤖</span>
              </div>
              <div className="bg-white border border-sky-100 rounded-2xl rounded-bl-sm p-4 shadow-sm flex space-x-1 items-center h-10">
                <div className="w-1.5 h-1.5 bg-sky-300 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 p-3 pb-safe z-20">
        {/* Suggested Questions */}
        <div className="flex overflow-x-auto hide-scrollbar space-x-2 mb-3 pb-1">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              disabled={isTyping}
              className="whitespace-nowrap bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 px-3 py-1.5 rounded-full text-xs font-medium transition-colors disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>
        
        <div className="flex items-center space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Saarthi AI..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-full py-3 px-5 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            disabled={isTyping}
          />
          <button
            onClick={() => handleSend()}
            disabled={!inputValue.trim() || isTyping}
            className="w-12 h-12 bg-sky-500 disabled:bg-slate-300 text-white rounded-full flex items-center justify-center shadow-md disabled:shadow-none hover:bg-sky-600 transition-colors shrink-0"
          >
            <FiSend className="-ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
