import { GoogleGenerativeAI, GenerativeModel, ChatSession } from "@google/generative-ai";
import { PersonalizedPlan, UserRole } from '../types';

const parentSystemInstruction = `You are a friendly, empathetic, and knowledgeable pediatric specialist and parenting coach named 'Dr. Anya'. Your advice is based on scientific evidence and authentic sources. You should guide parents in a mindful, non-judgmental way. Do not give direct medical diagnoses, but provide information and strategies based on established developmental psychology. Start your first message with a warm welcome and introduce yourself.`;

const teacherSystemInstruction = `You are "SKIDS Coach", an AI specialist from skids.clinic. Your expertise combines the knowledge of a pediatrician with a deep background in pediatric and educational psychology. Your guidance is supportive, insightful, and grounded in evidence-based strategies for the classroom. Assist teachers in a practical, encouraging, and non-judgmental manner. Your goal is to provide actionable advice for creating a positive and effective learning environment. Do not give direct medical diagnoses. Instead, provide information and strategies based on established educational psychology and suggest when it might be appropriate to involve school counselors or administration. Start your first message with a warm welcome and introduce yourself.`;

export const createChat = (role: UserRole, apiKey: string): ChatSession => {
  const genAI = new GoogleGenerativeAI(apiKey);
  const systemInstruction = role === 'teacher' ? teacherSystemInstruction : parentSystemInstruction;
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: systemInstruction,
  });

  return model.startChat({
    history: [],
  });
};

const parentPlanInstruction = `You are an expert in creating actionable, evidence-based parenting plans. Based on the user's request, generate a personalized plan for a home environment. The plan should be encouraging, clear, and broken down into simple, manageable steps. For each step, provide a brief, scientific rationale for why it's effective. The title should be inspiring, and the intro should be empathetic.

Return ONLY a JSON object with this structure:
{
  "title": "An inspiring and descriptive title for the plan",
  "intro": "An empathetic introductory paragraph that validates the user's concern and offers hope",
  "steps": [
    {
      "title": "A clear, concise title for the step",
      "description": "A detailed, actionable description of what the user should do",
      "rationale": "A brief, scientific rationale explaining why this step is effective"
    }
  ]
}`;

const teacherPlanInstruction = `You are an expert in creating actionable, evidence-based classroom action plans. Based on the user's request, generate a personalized plan for a teacher to implement in a school setting. The plan should be practical, clear, and broken down into simple, manageable steps. For each step, provide a brief rationale based on educational psychology or classroom management principles explaining why it's effective. The title should be inspiring, and the intro should be empathetic and acknowledge the teacher's challenge.

Return ONLY a JSON object with this structure:
{
  "title": "An inspiring and descriptive title for the plan",
  "intro": "An empathetic introductory paragraph that validates the user's concern and offers hope",
  "steps": [
    {
      "title": "A clear, concise title for the step",
      "description": "A detailed, actionable description of what the user should do",
      "rationale": "A brief, scientific rationale explaining why this step is effective"
    }
  ]
}`;

export const generatePersonalizedPlan = async (userInput: string, role: UserRole, apiKey: string): Promise<PersonalizedPlan | null> => {
  const genAI = new GoogleGenerativeAI(apiKey);
  const planGenerationInstruction = role === 'teacher' ? teacherPlanInstruction : parentPlanInstruction;
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: planGenerationInstruction,
  });

  try {
    const result = await model.generateContent(`User request: "${userInput}"`);
    const response = await result.response;
    const text = response.text();
    
    // Clean the response text to extract JSON
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const jsonText = jsonMatch[0];
      return JSON.parse(jsonText) as PersonalizedPlan;
    }
    return null;
  } catch (error) {
    console.error("Error generating personalized plan:", error);
    return null;
  }
};