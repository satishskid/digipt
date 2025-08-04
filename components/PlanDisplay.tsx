import React from 'react';
import type { PersonalizedPlan } from '../types';
import { Icon } from './Icon';

export const PlanDisplay: React.FC<{ plan: PersonalizedPlan }> = ({ plan }) => (
  <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-slate-200 mt-12 animate-fade-in">
    <header className="text-center border-b-2 border-slate-100 pb-6 mb-8">
        <Icon icon="sparkles" className="w-12 h-12 mx-auto text-primary-500" />
        <h2 className="text-3xl font-bold text-slate-900 mt-4">{plan.title}</h2>
        <p className="text-slate-600 mt-3 max-w-2xl mx-auto">{plan.intro}</p>
    </header>
    <div className="space-y-8">
      {plan.steps.map((step, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                {index + 1}
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800">{step.title}</h3>
                <p className="mt-2 text-slate-600">{step.description}</p>
                <div className="mt-4 p-4 bg-primary-50 text-primary-800 rounded-lg border-l-4 border-primary-300">
                    <p className="font-semibold text-sm text-primary-700">Why it works:</p>
                    <p className="text-sm mt-1">{step.rationale}</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  </div>
);
