import React, { useState } from 'react';
import { generatePersonalizedPlan } from '../services/geminiService';
import { EXAMPLE_PLANS } from '../constants';
import type { PersonalizedPlan, ExamplePlan } from '../types';
import { Icon } from './Icon';
import { useRole } from './RoleContext';
import { useApiKey } from './ApiKeyContext';
import { Navigate, Link } from 'react-router-dom';
import { PlanDisplay } from './PlanDisplay';
import { PlanFormulaInfographic } from './PlanFormulaInfographic';

const LoadingSpinner: React.FC<{roleText: string}> = ({ roleText }) => (
  <div className="flex flex-col justify-center items-center py-10 text-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    <p className="mt-4 text-slate-500 font-medium">Your specialist is creating your {roleText} plan...</p>
  </div>
);

const ExamplePlanCard: React.FC<{ plan: ExamplePlan }> = ({ plan }) => (
    <Link 
        to={`/plan/${plan.id}`}
        className="block group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 h-full flex flex-col hover:-translate-y-1.5"
    >
        <h3 className="text-lg font-bold text-slate-800 mb-2">{plan.title}</h3>
        <p className="text-slate-500 flex-grow text-sm">{plan.intro}</p>
        <div className="mt-4 pt-4 flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
            View Plan
            <Icon icon="arrowRight" className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
        </div>
    </Link>
);


export const PersonalPlan: React.FC = () => {
  const { role } = useRole();
  const { apiKey, openModal } = useApiKey();
  const [userInput, setUserInput] = useState('');
  const [plan, setPlan] = useState<PersonalizedPlan | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!role) {
    return <Navigate to="/" replace />;
  }

  const content = {
      parent: {
          title: "Create a Personalized Plan",
          description: "Describe a challenge, even combining issues (e.g., homework fights and screen time). Our AI specialist will craft a custom, evidence-based action plan for you.",
          label: "Your parenting challenge",
          placeholder: "e.g., 'My child struggles with both homework and screen time limits, leading to daily arguments.'",
      },
      teacher: {
          title: "Create a Classroom Action Plan",
          description: "Describe a classroom challenge, even combining issues (e.g., disruption and lack of engagement). Our AI specialist will craft a custom, evidence-based action plan for you.",
          label: "Your classroom challenge",
          placeholder: "e.g., 'A student is constantly disruptive during lessons and also refuses to participate in group activities.'",
      }
  }
  const currentContent = content[role];
  const currentExamplePlans = EXAMPLE_PLANS.filter(p => p.role === role);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !apiKey) return;

    setIsLoading(true);
    setError(null);
    setPlan(null);

    const generatedPlan = await generatePersonalizedPlan(userInput, role, apiKey);
    
    setIsLoading(false);
    if (generatedPlan) {
      setPlan(generatedPlan);
    } else {
      setError('Sorry, I couldn\'t create a plan for that. Please try rephrasing or check your API key.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
            <Icon icon="plan" className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-4">{currentContent.title}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          {currentContent.description}
        </p>
      </div>
      
      <div className="mt-10 max-w-2xl mx-auto">
        {apiKey ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="challenge-input" className="block text-sm font-medium text-slate-700 mb-2">
              {currentContent.label}
            </label>
            <textarea
              id="challenge-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder={currentContent.placeholder}
              className="w-full p-4 border border-slate-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition text-base"
              rows={4}
              disabled={isLoading}
              aria-required="true"
            />
            <button
              type="submit"
              disabled={isLoading || !userInput.trim()}
              className="mt-4 w-full flex items-center justify-center gap-2 px-8 py-3 bg-primary-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-300 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isLoading ? (
                  'Generating Plan...'
              ) : (
                  <>
                      <Icon icon="sparkles" className="w-5 h-5"/>
                      <span>Create My Custom Plan</span>
                  </>
              )}
            </button>
          </form>
        ) : (
            <div className="bg-slate-100 p-6 rounded-2xl text-center border-2 border-dashed border-slate-300">
                 <div className="w-12 h-12 bg-primary-200 text-primary-600 rounded-full flex items-center justify-center mx-auto">
                    <Icon icon="lock-closed" className="w-6 h-6"/>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mt-4">Unlock Custom Plans</h3>
                <p className="mt-1 text-slate-500">Provide your Gemini API key to generate unlimited, personalized action plans.</p>
                <button onClick={openModal} className="mt-4 flex items-center justify-center gap-2 px-5 py-2 bg-white text-slate-700 font-semibold rounded-lg shadow-sm border border-slate-300 hover:bg-slate-50 transition-all">
                    <Icon icon="key" className="w-4 h-4"/>
                    <span>Unlock with API Key</span>
                </button>
            </div>
        )}
      </div>
      
      {isLoading && <LoadingSpinner roleText={role} />}
      
      {error && (
        <div className="mt-8 text-center bg-red-100 text-red-800 p-4 rounded-lg font-medium">
          {error}
        </div>
      )}

      {plan && <PlanDisplay plan={plan} />}

      {!plan && <PlanFormulaInfographic />}

      <div className="mt-20">
        <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center">
                <Icon icon="collection" className="w-8 h-8 text-slate-600" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-4">Plan Library</h2>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-slate-600">
                Need inspiration? Browse our library of pre-made plans for common challenges.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
            {currentExamplePlans.map(p => (
                <ExamplePlanCard key={p.id} plan={p} />
            ))}
        </div>
      </div>
    </div>
  );
};