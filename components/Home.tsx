
import React from 'react';
import { Link } from 'react-router-dom';
import { PARENT_TOPICS, TEACHER_TOPICS } from '../constants';
import { Icon } from './Icon';
import type { Topic } from '../types';
import { useRole } from './RoleContext';
import { SummaryInfographic } from './SummaryInfographic';

const TopicCard: React.FC<{ topic: Topic }> = ({ topic }) => (
  <Link to={`/topic/${topic.id}`} className="block group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 h-full flex flex-col hover:-translate-y-1.5">
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-800 mb-2">{topic.title}</h3>
        <p className="text-slate-500 flex-grow mb-4">{topic.shortDescription}</p>
      </div>
      <div className="text-4xl ml-4 bg-primary-50 text-primary-600 p-3 rounded-lg flex-shrink-0">{topic.emoji}</div>
    </div>
    <div className="mt-auto pt-4 flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
      Read Guide
      <Icon icon="arrowRight" className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
    </div>
  </Link>
);

export const Home: React.FC = () => {
  const { role, clearRole } = useRole();
  const topics = role === 'teacher' ? TEACHER_TOPICS : PARENT_TOPICS;

  return (
    <div className="animate-fade-in">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">
            Confident, Mindful Guidance
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Explore evidence-based insights and practical strategies for today's parenting and teaching challenges.
          </p>
        </div>
      </div>
      
      <div className="border-b border-slate-200">
        <SummaryInfographic />
      </div>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-center mb-8 px-2">
              <h2 className="text-3xl font-bold text-slate-800">Key Topics for {role === 'teacher' ? 'Educators' : 'Parents'}</h2>
              <button onClick={clearRole} className="font-semibold text-primary-600 hover:text-primary-800 transition">Change Role</button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
          {topics.map(topic => (
              <TopicCard key={topic.id} topic={topic} />
          ))}
          </div>
      </div>
    </div>
  );
};