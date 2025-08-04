import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PARENT_TOPICS, TEACHER_TOPICS } from '../constants';
import { Icon } from './Icon';
import { Storyboard } from './Storyboard';
import { TopicSummaryInfographic } from './TopicSummaryInfographic';
import type { Topic } from '../types';

const DetailCard: React.FC<{ icon: 'bulb' | 'eye' | 'brain' | 'pencil-square', title: string, children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm animate-fade-in transition-all duration-300 hover:shadow-lg hover:border-primary-200">
        <div className="flex items-start gap-4">
            <div className="flex-shrink-0 bg-primary-50 text-primary-600 p-3 rounded-lg">
                <Icon icon={icon} className="w-6 h-6" />
            </div>
            <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-800">{title}</h3>
                <div className="mt-2 text-slate-600 prose prose-sm max-w-none">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

export const TopicDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const topic: Topic | undefined = [...PARENT_TOPICS, ...TEACHER_TOPICS].find(t => t.id === id);

  if (!topic) {
    return (
      <div className="text-center py-20 px-4">
        <h2 className="text-2xl font-bold text-slate-800">Topic not found</h2>
        <Link to="/" className="text-primary-600 hover:underline mt-4 inline-block font-semibold">
          Back to all topics
        </Link>
      </div>
    );
  }
  
  const { explanation, examples, reflection, exercise, references } = topic;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="inline-flex items-center text-slate-600 hover:text-primary-600 font-semibold mb-8 group transition-colors">
        <Icon icon="arrowLeft" className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" />
        All Topics
      </Link>
      
      <header className="mb-12">
        <div className="flex items-center space-x-4">
          <span className="text-5xl bg-primary-50 text-primary-600 p-4 rounded-xl flex-shrink-0">{topic.emoji}</span>
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{topic.title}</h1>
        </div>
      </header>

      <div className="space-y-6">
        <DetailCard icon="bulb" title={explanation.title}>
            {explanation.details.map((p, i) => <p key={i}>{p}</p>)}
        </DetailCard>

        {examples.map((example, index) => (
            <DetailCard key={index} icon="eye" title={example.title}>
                {example.scenario.map((p, i) => <p key={i}><em>{p}</em></p>)}
                {example.dialogue && <Storyboard dialogue={example.dialogue} />}
            </DetailCard>
        ))}

        <DetailCard icon="brain" title={reflection.title}>
            <ul className="list-disc pl-5">
                {reflection.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
        </DetailCard>

        <DetailCard icon="pencil-square" title={exercise.title}>
             <ul className="list-disc pl-5">
                {exercise.details.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
        </DetailCard>

        <TopicSummaryInfographic topic={topic} />

        <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 mt-10 animate-fade-in">
            <h3 className="font-bold text-slate-800 text-center mb-4">Grounded In Research</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm">
                {references.map((ref, i) => (
                    <a 
                        key={i} 
                        href={ref.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-800 hover:underline font-medium"
                    >
                        {ref.name}
                    </a>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};