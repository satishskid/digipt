export type UserRole = 'parent' | 'teacher';

export interface Reference {
  name: string;
  url: string;
}

export interface Example {
  title: string;
  scenario: string[];
  dialogue?: { speaker: string; line: string }[];
}

export interface Topic {
  id: string;
  title: string;
  emoji: string;
  shortDescription: string;
  explanation: {
    title: string;
    details: string[];
  };
  examples: Example[];
  reflection: {
    title: string;
    points: string[];
  };
  exercise: {
    title: string;
    details: string[];
  };
  references: Reference[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface PlanStep {
  title: string;
  description: string;
  rationale: string;
}

export interface PersonalizedPlan {
  title: string;
  intro: string;
  steps: PlanStep[];
}

export interface ExamplePlan extends PersonalizedPlan {
  id: string;
  role: UserRole;
}

export interface FAQItem {
  question: string;
  answer: string;
  role: UserRole | 'all';
}
