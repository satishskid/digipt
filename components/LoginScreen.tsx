import React, { useState } from 'react';
import { useAuth } from './AuthContext';

export const LoginScreen: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      await login(email);
      setSubmitted(true);
    } catch (err) {
      setError('Login failed. Please check your email and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-md mx-auto">
        <header className="text-center mb-8">
            <a href="https://www.skids.clinic" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 text-lg font-semibold text-primary-600 hover:text-primary-800 tracking-wide">
                skids.clinic
            </a>
            <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">Welcome to SKIDS</h1>
            <p className="mt-3 text-lg text-slate-600">
                Sign in to access your evidence-based guidance.
            </p>
        </header>

        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
            {submitted ? (
                <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <h2 className="text-2xl font-bold text-slate-800 mt-4">Check Your Email</h2>
                    <p className="mt-2 text-slate-600">
                        We've sent a secure "magic link" to <span className="font-semibold text-primary-600">{email}</span>. Click the link to log in.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                            Email Address
                        </label>
                        <div className="mt-1">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                                placeholder="you@example.com"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

                    <div className="mt-6">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:bg-primary-300 transition-all"
                        >
                            {isLoading ? 'Sending...' : 'Sign In with Magic Link'}
                        </button>
                    </div>
                </form>
            )}
        </div>
         <footer className="text-center mt-12 text-slate-500 text-sm">
            <p className="font-bold">SKIDS</p>
            <p>518, VV Arcade, 1st Main Road, Block B, AECS Layout, Bangalore</p>
            <p className="mt-1 font-medium text-primary-600">hello@skids.health</p>
            <p className="text-xs text-slate-400 mt-4">© 2025 SKIDS. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};
