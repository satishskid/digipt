import React from 'react';
import { Icon } from './Icon';

const InfoStep: React.FC<{ icon: 'target' | 'heart' | 'puzzle-piece'; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
            <Icon icon={icon} className="w-8 h-8" />
        </div>
        <h4 className="mt-4 font-bold text-slate-800">{title}</h4>
        <p className="mt-1 text-sm text-slate-500">{children}</p>
    </div>
);

const PlusIcon = () => (
    <div className="text-slate-300 font-light text-3xl hidden md:block">
      +
    </div>
);

const EqualsIcon = () => (
    <div className="text-slate-400 font-bold text-3xl hidden md:block">
      =
    </div>
);

export const PlanFormulaInfographic: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-200 mt-12 animate-fade-in">
        <header className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900">The Formula for a Great Plan</h3>
            <p className="text-slate-500 mt-2 max-w-lg mx-auto">Use this simple framework when thinking about your custom plan.</p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-y-6 md:gap-x-4">
            <InfoStep icon="target" title="Identify the Challenge">
                What is the specific behavior you want to address?
            </InfoStep>
            <PlusIcon />
            <InfoStep icon="heart" title="Understand the 'Why'">
                What need might the child be trying to meet?
            </InfoStep>
            <PlusIcon />
             <div className="md:hidden text-slate-300 font-light text-3xl text-center">+</div>
            <InfoStep icon="puzzle-piece" title="Choose Strategies">
                What tools or techniques can you use?
            </InfoStep>
        </div>
        <div className="flex justify-center my-6">
            <div className="w-1/2 border-t-2 border-dashed border-slate-300"></div>
        </div>
        <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <Icon icon="trophy" className="w-10 h-10" />
            </div>
            <h4 className="mt-4 font-bold text-lg text-slate-800">A Successful, Empathetic Plan</h4>
            <p className="mt-1 text-slate-500">A clear path forward that supports both you and your child.</p>
        </div>
    </div>
  );
};