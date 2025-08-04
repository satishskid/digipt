import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { createChat } from '../services/geminiService';
import { Icon } from './Icon';
import type { Message } from '../types';
import type { ChatSession } from '@google/generative-ai';
import { useRole } from './RoleContext';
import { useApiKey } from './ApiKeyContext';
import { Navigate } from 'react-router-dom';

const TypingIndicator = () => (
  <div className="flex items-center space-x-1.5 p-2">
    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.2s]"></div>
    <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse [animation-delay:0.4s]"></div>
  </div>
);

const LockedFeature: React.FC<{ title: string, description: string, onUnlock: () => void }> = ({ title, description, onUnlock }) => (
    <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-slate-100 m-4 rounded-2xl">
        <div className="w-16 h-16 bg-primary-200 text-primary-600 rounded-full flex items-center justify-center">
            <Icon icon="lock-closed" className="w-8 h-8"/>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mt-6">{title}</h3>
        <p className="mt-2 max-w-md text-slate-500">{description}</p>
        <button onClick={onUnlock} className="mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all">
            <Icon icon="key" className="w-5 h-5"/>
            <span>Unlock with API Key</span>
        </button>
    </div>
);

export const ChatSpecialist: React.FC = () => {
  const { role } = useRole();
  const { apiKey, openModal } = useApiKey();
  const [chat, setChat] = useState<ChatSession | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const initializeChat = useCallback(async () => {
    if (!role || !apiKey) {
        setIsLoading(false);
        return;
    };

    try {
      const chatInstance = createChat(role, apiKey);
      setChat(chatInstance);
      setIsLoading(true);
      
      const result = await chatInstance.sendMessage('Hello');
      const response = await result.response;
      const initialMessage = response.text();
      
      setIsLoading(false);
      setMessages([{ role: 'model', text: initialMessage }]);
    } catch (error) {
      console.error('Failed to initialize chat:', error);
      setIsLoading(false);
      setMessages([{ role: 'model', text: 'Sorry, I am having trouble connecting. Your API key might be invalid. Please verify it and refresh the page.' }]);
    }
  }, [role, apiKey]);

  useEffect(() => {
    initializeChat();
  }, [initializeChat]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !chat || isLoading) return;

    const userMessage: Message = { role: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    const modelMessageIndex = messages.length + 1;
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      const result = await chat.sendMessage(userInput);
      const response = await result.response;
      const modelResponse = response.text();
      
      setMessages(prev => {
        const newMessages = [...prev];
        newMessages[modelMessageIndex] = { role: 'model', text: modelResponse };
        return newMessages;
      });
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => {
          const newMessages = [...prev];
          newMessages[modelMessageIndex] = { role: 'model', text: 'Oops, something went wrong. This could be due to an invalid API key or a network issue. Please try again.' };
          return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!role) {
    return <Navigate to="/" replace />;
  }

  const specialist = {
      parent: { name: "Dr. Anya", title: "Your AI-powered parenting specialist.", avatar: "A" },
      teacher: { name: "SKIDS Coach", title: "Your AI-powered pediatric & educational specialist.", avatar: "+" },
  }
  const currentSpecialist = specialist[role];

  return (
    <div className="h-[calc(100vh-80px)] md:h-screen flex flex-col max-w-4xl mx-auto bg-white md:border-x md:border-slate-200">
      <header className="text-center py-5 px-4 border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-sm z-10">
        <h1 className="text-2xl font-bold text-slate-900">Chat with {currentSpecialist.name}</h1>
        <p className="text-slate-500 text-sm mt-1">{currentSpecialist.title}</p>
      </header>
      
      {!apiKey ? (
          <LockedFeature 
              title="Unlock Specialist Chat" 
              description="Provide your Gemini API key to start a conversation with our AI specialist."
              onUnlock={openModal}
          />
      ) : (
        <>
            <div className="flex-1 overflow-y-auto px-4 md:px-8 pt-6 pb-4 space-y-6">
                {messages.map((msg, index) => (
                <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.role === 'model' && (
                        <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold flex-shrink-0 text-lg">{currentSpecialist.avatar}</div>
                    )}
                    <div className={`max-w-lg md:max-w-xl p-3 px-4 rounded-2xl animate-fade-in ${msg.role === 'user' ? 'bg-primary-600 text-white rounded-br-lg' : 'bg-slate-100 text-slate-800 rounded-bl-lg'}`}>
                    {msg.text ? (
                        <div className={`prose prose-sm max-w-none ${msg.role === 'user' ? 'prose-invert' : ''}`}>
                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                    ) : <TypingIndicator />}
                    </div>
                </div>
                ))}
                {isLoading && messages[messages.length-1]?.role === 'user' && (
                <div className="flex items-start gap-3 justify-start animate-fade-in">
                    <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold flex-shrink-0 text-lg">{currentSpecialist.avatar}</div>
                    <div className="max-w-lg md:max-w-xl p-3 px-4 rounded-2xl bg-slate-100 text-slate-800 rounded-bl-lg">
                    <TypingIndicator />
                    </div>
                </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-white border-t border-slate-200">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="flex-1 w-full px-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition bg-slate-50"
                    disabled={isLoading}
                    aria-label="Chat input"
                />
                <button type="submit" disabled={!userInput.trim() || isLoading} className="w-11 h-11 bg-primary-600 text-white rounded-full flex items-center justify-center hover:bg-primary-700 disabled:bg-primary-300 disabled:cursor-not-allowed transition-colors flex-shrink-0">
                    <Icon icon="send" className="w-5 h-5" />
                </button>
                </form>
            </div>
        </>
      )}
    </div>
  );
};