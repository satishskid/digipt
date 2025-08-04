
import React from 'react';
import { useRole } from './RoleContext';
import { Icon } from './Icon';

interface InfoCardProps {
    icon: 'shield-check' | 'heart' | 'sparkles' | 'academic-cap';
    title: string;
    children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, children }) => (
    <div className="flex flex-col items-center text-center p-4">
        <div className="flex-shrink-0 bg-primary-100 text-primary-600 p-4 rounded-full">
            <Icon icon={icon} className="w-8 h-8" />
        </div>
        <h3 className="mt-4 text-lg font-bold text-slate-800">{title}</h3>
        <p className="mt-1 text-slate-500 text-sm">{children}</p>
    </div>
);

export const SummaryInfographic: React.FC = () => {
    const { role } = useRole();

    const content = {
        parent: {
            principles: [
                { icon: 'shield-check' as const, title: 'Evidence-Based', description: 'Grounded in pediatric science from the AAP & IAP.' },
                { icon: 'heart' as const, title: 'Relationship-Focused', description: 'Emphasizing connection before correction to build trust.' },
                { icon: 'sparkles' as const, title: 'Practical Strategies', description: 'Actionable steps for real-life parenting challenges.' },
            ]
        },
        teacher: {
            principles: [
                { icon: 'shield-check' as const, title: 'Evidence-Based', description: 'Grounded in educational psychology and research.' },
                { icon: 'academic-cap' as const, title: 'Proactive & Positive', description: 'Building a supportive classroom environment to prevent issues.' },
                { icon: 'sparkles' as const, title: 'Practical Strategies', description: 'Clear, actionable techniques for classroom success.' },
            ]
        }
    };
    
    const currentContent = role ? content[role] : content.parent;

    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {currentContent.principles.map((p) => (
                    <InfoCard key={p.title} icon={p.icon} title={p.title}>
                        {p.description}
                    </InfoCard>
                ))}
            </div>
        </div>
    );
};
