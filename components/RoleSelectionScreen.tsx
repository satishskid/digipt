

import React from 'react';
import { useRole } from './RoleContext';
import { Icon } from './Icon';
import type { UserRole } from '../types';

const RoleButton: React.FC<{
  role: UserRole;
  icon: 'family' | 'academic-cap';
  title: string;
  subtitle: string;
  onClick: (role: UserRole) => void;
}> = ({ role, icon, title, subtitle, onClick }) => (
  <button
    onClick={() => onClick(role)}
    className="w-full max-w-xs text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group focus:outline-none focus:ring-4 focus:ring-primary-300"
  >
    <Icon icon={icon} className="w-12 h-12 mx-auto text-primary-500 transition-transform duration-300 group-hover:scale-110" />
    <h3 className="text-xl font-bold text-slate-800 mt-4">{title}</h3>
    <p className="text-slate-500 mt-1 text-base">{subtitle}</p>
  </button>
);

export const RoleSelectionScreen: React.FC = () => {
  const { setRole } = useRole();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 animate-fade-in">
        <div className="w-full max-w-lg mx-auto">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Select Your Role</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
                    Get personalized, evidence-based support for the challenges you face.
                </p>
            </header>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                <RoleButton
                role="parent"
                icon="family"
                title="I'm a Parent"
                subtitle="Get strategies for challenges at home."
                onClick={setRole}
                />
                <RoleButton
                role="teacher"
                icon="academic-cap"
                title="I'm a Teacher"
                subtitle="Find support for challenges in the classroom."
                onClick={setRole}
                />
            </div>
        </div>
    </div>
  );
};