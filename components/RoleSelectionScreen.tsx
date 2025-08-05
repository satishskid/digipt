

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
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Empowering Message */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
            You're Not Alone in This Journey
          </h1>
          <p className="text-xl text-slate-700 mb-4 max-w-3xl mx-auto">
            Every challenge you face is valid. Every question you have matters. You're taking a brave step toward understanding and support.
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get personalized, evidence-based guidance for the challenges you face every day.
          </p>
        </header>

        {/* Role Selection */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Select Your Role</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
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

        {/* Why This Matters Now */}
        <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">Why This Matters Now</h2>
          <div className="space-y-6 text-slate-700">
            <p className="text-lg leading-relaxed">
              <strong>Early intervention changes everything.</strong> When children receive the right support at the right time, 
              they develop stronger coping skills, better emotional regulation, and more positive relationships.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>You don't have to figure this out alone.</strong> Whether you're a parent wondering if certain behaviors 
              are typical, or a teacher looking for classroom strategies, having expert guidance makes all the difference.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Every child deserves to thrive.</strong> By seeking support and understanding, you're advocating for 
              a child's potential and helping them build the foundation for lifelong success.
            </p>
          </div>
        </section>

        {/* What is a SKID? */}
        <section className="bg-primary-50 p-8 rounded-2xl border border-primary-200">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">What is a SKID?</h2>
          <div className="space-y-4 text-slate-700">
            <p className="text-lg">
              <strong>SKID</strong> stands for <strong>"Severely Kidding, I Don't know"</strong> – that feeling when you're 
              faced with challenging behaviors or situations and genuinely don't know what to do next.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-3">For Parents:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Meltdowns that seem to come from nowhere</li>
                  <li>• Bedtime battles and sleep challenges</li>
                  <li>• Difficulty with transitions and changes</li>
                  <li>• Social struggles with peers</li>
                  <li>• Academic or behavioral concerns</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="font-bold text-slate-800 mb-3">For Teachers:</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Classroom disruptions and attention issues</li>
                  <li>• Students who seem overwhelmed or withdrawn</li>
                  <li>• Difficulty following directions or routines</li>
                  <li>• Social conflicts during group work</li>
                  <li>• Concerns about a student's development</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-slate-600 mt-6 italic">
              Whatever your SKID moment is, you've come to the right place for guidance and support.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};