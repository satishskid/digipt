import React from 'react';

interface AvatarProps {
  speaker: string;
}

export const Avatar: React.FC<AvatarProps> = ({ speaker }) => {
  const getAvatarColor = (speaker: string) => {
    switch (speaker.toLowerCase()) {
      case 'parent':
        return 'bg-blue-100 text-blue-600';
      case 'teen':
      case 'child':
      case 'student':
        return 'bg-purple-100 text-purple-600';
      case 'teacher':
        return 'bg-green-100 text-green-600';
      default:
        return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-lg ${getAvatarColor(speaker)}`}>
      {speaker.charAt(0).toUpperCase()}
    </div>
  );
};
