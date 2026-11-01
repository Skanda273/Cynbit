import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureStudio } from './components/AIStudio/ArchitectureStudio';
import { BitElevateWorkbench } from './components/BitElevateHub/BitElevateWorkbench';
import { ServicesSection } from './components/ServicesSection/ServicesSection';
import { AboutSection } from './components/AboutSection/AboutSection';
import { TechnicalReport } from './components/ReportViewer/TechnicalReport';
import { Footer } from './components/Footer';
import { CynbitCopilot } from './components/ChatAssistant/CynbitCopilot';
import { DiscoveryModal } from './components/LeadCaptureModal/DiscoveryModal';

export function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalNotes, setModalNotes] = useState<string>('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenDiscovery = (notes?: string) => {
    setModalNotes(notes || '');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onOpenConsultation={() => handleOpenDiscovery('General Enterprise Consultation')}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreStudio={() => setActiveSection('studio')}
          onExploreBitElevate={() => setActiveSection('bitelevate')}
          onViewReport={() => setActiveSection('report')}
        />

        {/* Dynamic / Interactive Views */}
        {activeSection === 'studio' && (
          <div className="animate-in fade-in duration-300">
            <ArchitectureStudio onBookCall={handleOpenDiscovery} />
          </div>
        )}

        {activeSection === 'bitelevate' && (
          <div className="animate-in fade-in duration-300">
            <BitElevateWorkbench onEnrollClick={(track) => handleOpenDiscovery(`BitElevate Enrollment: ${track}`)} />
          </div>
        )}

        {activeSection === 'services' && (
          <div className="animate-in fade-in duration-300">
            <ServicesSection onSelectService={(srv) => handleOpenDiscovery(`Service Inquiry: ${srv}`)} />
          </div>
        )}

        {activeSection === 'about' && (
          <div className="animate-in fade-in duration-300">
            <AboutSection />
          </div>
        )}

        {activeSection === 'report' && (
          <div className="animate-in fade-in duration-300">
            <TechnicalReport />
          </div>
        )}

        {/* If user is in default hero mode, render the featured studio & preview */}
        {activeSection === 'hero' && (
          <div className="space-y-6">
            <ArchitectureStudio onBookCall={handleOpenDiscovery} />
            <BitElevateWorkbench onEnrollClick={(track) => handleOpenDiscovery(`BitElevate Enrollment: ${track}`)} />
            <ServicesSection onSelectService={(srv) => handleOpenDiscovery(`Service Inquiry: ${srv}`)} />
            <AboutSection />
            <TechnicalReport />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(sec) => setActiveSection(sec)} />

      {/* Floating Autonomous Chatbot */}
      <CynbitCopilot
        onOpenStudio={() => setActiveSection('studio')}
        onBookCall={() => handleOpenDiscovery('Inquiry via Copilot Chat')}
      />

      {/* Discovery Booking Modal */}
      <DiscoveryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialNotes={modalNotes}
      />
    </div>
  );
}

export default App;
