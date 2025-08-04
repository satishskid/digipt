
import React from 'react';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from './components/Home';
import { TopicDetail } from './components/TopicDetail';
import { ChatSpecialist } from './components/ChatSpecialist';
import { PersonalPlan } from './components/PersonalPlan';
import { Icon } from './components/Icon';
import { RoleProvider, useRole } from './components/RoleContext';
import { RoleSelectionScreen } from './components/RoleSelectionScreen';
import { ExamplePlanDetail } from './components/ExamplePlanDetail';
import { FAQ } from './components/FAQ';
import { ApiKeyProvider } from './components/ApiKeyContext';
import { AuthProvider, useAuth } from './components/AuthContext';
import { LoginScreen } from './components/LoginScreen';

const MainLayout: React.FC = () => {
  const { role } = useRole();
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex flex-col md:flex-row items-center md:space-x-3 md:px-4 md:py-3 rounded-lg transition-colors duration-200 group ${
      isActive
        ? 'text-primary-600 bg-primary-50'
        : 'text-slate-500 hover:bg-primary-50 hover:text-primary-600'
    }`;

  const navItems = [
    { to: "/", icon: "home" as const, label: "Home" },
    { to: "/chat", icon: "chat" as const, label: "Specialist Chat" },
    { to: "/plan", icon: "plan" as const, label: "Action Plan" },
    { to: "/faq", icon: "question-mark-circle" as const, label: "FAQ" },
  ];
  
  const navTitle = role === 'teacher' ? 'Educator Guide' : 'Parent Guide';

  return (
      <div className="min-h-screen bg-slate-50">
        <div className="flex">
          {/* Desktop Sidebar */}
          <aside className="hidden md:flex md:flex-col w-64 bg-white border-r border-slate-200 p-4 shrink-0 h-screen sticky top-0">
            <div className="flex items-center mb-10 px-2 pt-4 h-10">
               <a href="https://www.skids.clinic" target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-primary-700 tracking-tight">
                skids.clinic
              </a>
            </div>
            <nav className="flex flex-col space-y-2">
              {navItems.map(item => (
                <NavLink key={item.to} to={item.to} className={navLinkClasses} end={item.to === "/"}>
                  <Icon icon={item.icon} className="w-6 h-6 mb-1 md:mb-0" />
                  <span className="text-sm md:text-base font-medium">{item.label}</span>
                </NavLink>
              ))}
            </nav>
            <footer className="mt-auto text-center text-xs text-slate-400 py-4">
                <p className="font-semibold text-slate-500 mb-2">SKIDS</p>
                <p>518, VV Arcade, 1st Main Road,</p>
                <p>AECS Layout, Bangalore</p>
                <p className="mt-2 font-medium text-primary-600">hello@skids.health</p>
                <p className="mt-4">© 2025 SKIDS</p>
            </footer>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0 pb-20 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/topic/:id" element={<TopicDetail />} />
              <Route path="/chat" element={<ChatSpecialist />} />
              <Route path="/plan" element={<PersonalPlan />} />
              <Route path="/plan/:id" element={<ExamplePlanDetail />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-2 z-10">
          {navItems.map(item => (
             <NavLink key={item.to} to={item.to} className={navLinkClasses} end={item.to === "/"}>
                <Icon icon={item.icon} className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">{item.label}</span>
             </NavLink>
          ))}
        </nav>
      </div>
  );
};

const AppWrapper: React.FC = () => {
    const { isLoggedIn, isLoading } = useAuth();
    const { role } = useRole();

    if (isLoading) {
        return (
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div>
            </div>
        );
    }
    
    if (!isLoggedIn) {
        return <LoginScreen />;
    }

    if (!role) {
        return <RoleSelectionScreen />;
    }

    return <MainLayout />;
}

const App: React.FC = () => {
    return (
        <HashRouter>
          <AuthProvider>
            <RoleProvider>
              <ApiKeyProvider>
                <AppWrapper />
              </ApiKeyProvider>
            </RoleProvider>
          </AuthProvider>
        </HashRouter>
    )
}

export default App;