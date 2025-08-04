import React from 'react';
import { Avatar } from './Avatar';

interface StoryboardProps {
    dialogue: { speaker: string; line: string }[];
}

export const Storyboard: React.FC<StoryboardProps> = ({ dialogue }) => {
    return (
        <div className="mt-6 space-y-4">
            {dialogue.map((entry, index) => (
                <div key={index} className={`flex items-start gap-3 animate-fade-in`}>
                    <Avatar speaker={entry.speaker} />
                    <div className="flex-1 bg-slate-100 p-3 px-4 rounded-xl rounded-tl-none">
                        <p className="font-semibold text-sm text-slate-800">{entry.speaker}</p>
                        <p className="text-slate-600">{entry.line}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
