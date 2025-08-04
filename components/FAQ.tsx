import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import { useRole } from './RoleContext';
import { Icon } from './Icon';
import { Navigate } from 'react-router-dom';

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5 px-1"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-slate-800 text-lg">{question}</span>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </span>
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">
                    <div className="prose prose-slate max-w-none text-slate-600 pb-5 px-1">
                       <p>{answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const FAQ: React.FC = () => {
    const { role } = useRole();

    if (!role) {
        return <Navigate to="/" replace />;
    }

    const filteredFaqs = FAQ_DATA.filter(faq => faq.role === role || faq.role === 'all');

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
            <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <Icon icon="question-mark-circle" className="w-9 h-9 text-primary-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">Frequently Asked Questions</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                    Find answers to common questions. This section is available offline.
                </p>
            </div>
            <div className="mt-12">
                {filteredFaqs.map((faq, index) => (
                    <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
};