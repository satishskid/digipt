import React from 'react';
import type { Topic } from '../types';
import { Icon } from './Icon';

interface SummaryProps {
    topic: Topic;
}

const SummaryCard: React.FC<{ icon: 'bulb' | 'eye' | 'brain' | 'pencil-square', title: string, text: string }> = ({ icon, title, text }) => (
    <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-4 h-full">
        <div className="flex-shrink-0 bg-primary-50 text-primary-600 p-2 rounded-lg mt-1">
            <Icon icon={icon} className="w-5 h-5" />
        </div>
        <div>
            <h4 className="font-bold text-sm text-slate-800">{title}</h4>
            <p className="text-xs text-slate-500 mt-1">{text}</p>
        </div>
    </div>
);


export const TopicSummaryInfographic: React.FC<SummaryProps> = ({ topic }) => {
    // We'll take the first item from each section for a concise summary
    const bigIdeaText = topic.explanation.details[0] || 'N/A';
    const exampleText = topic.examples[0]?.title || 'N/A';
    const reflectionText = topic.reflection.points[0] || 'N/A';
    const exerciseText = topic.exercise.details[0] || 'N/A';

    return (
        <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 mt-10 animate-fade-in">
            <h3 className="font-bold text-slate-800 text-center mb-1">Topic Takeaway</h3>
            <p className="text-sm text-slate-500 text-center mb-6">A quick summary of the core ideas from this guide.</p>
            <div className="grid md:grid-cols-2 gap-4">
                <SummaryCard icon="bulb" title="The Big Idea" text={bigIdeaText} />
                <SummaryCard icon="eye" title="A Key Strategy" text={exampleText} />
                <SummaryCard icon="brain" title="A Core Reflection" text={reflectionText} />
                <SummaryCard icon="pencil-square" title="An Actionable Step" text={exerciseText} />
            </div>
        </div>
    );
};