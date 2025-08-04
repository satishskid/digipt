import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { EXAMPLE_PLANS } from '../constants';
import { PlanDisplay } from './PlanDisplay';
import { Icon } from './Icon';
import type { ExamplePlan } from '../types';

export const ExamplePlanDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const plan: ExamplePlan | undefined = EXAMPLE_PLANS.find(p => p.id === id);

  if (!plan) {
    return (
      <div className="text-center py-20 px-4">
        <h2 className="text-2xl font-bold text-slate-800">Plan not found</h2>
        <Link to="/plan" className="text-primary-600 hover:underline mt-4 inline-block font-semibold">
          Back to Action Plans
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/plan" className="inline-flex items-center text-slate-600 hover:text-primary-600 font-semibold mb-8 group transition-colors">
        <Icon icon="arrowLeft" className="w-5 h-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" />
        Back to Plan Library
      </Link>
      <PlanDisplay plan={plan} />
    </div>
  );
};
