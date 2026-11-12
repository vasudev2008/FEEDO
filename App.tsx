import React from 'react';
import { EcosystemProvider, useEcosystem } from './context/EcosystemContext.tsx';
import { TopNav } from './components/TopNav.tsx';
import { LandingPage } from './components/LandingPage.tsx';
import { CustomerDashboard } from './components/CustomerDashboard.tsx';
import { ChefDashboard } from './components/ChefDashboard.tsx';
import { ManagerDashboard } from './components/ManagerDashboard.tsx';
import { SupplierDashboard } from './components/SupplierDashboard.tsx';
import { SmartCounterView } from './components/SmartCounterView.tsx';
import { PayPalCheckoutModal } from './components/PayPalCheckoutModal.tsx';
import { DigitalReceiptModal } from './components/DigitalReceiptModal.tsx';
import { AuthModal } from './components/AuthModal.tsx';
import { GuidedDemoOverlay } from './components/GuidedDemoOverlay.tsx';
import { CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

const MainShell: React.FC = () => {
  const { activeView, loading, toastMessage } = useEcosystem();

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-950 text-white flex flex-col items-center justify-center p-6 space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center shadow-gold animate-pulse">
          <Sparkles className="w-7 h-7 text-navy-950" />
        </div>
        <div className="font-display font-black text-xl text-white tracking-tight">
          FEEDO • Luxury Food Commerce Ecosystem
        </div>
        <p className="text-xs text-ivory-200/70 font-mono">
          Synchronizing PayPal Verified Gateway, KitchenPulse AI & Stakeholder Telemetry
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 font-sans selection:bg-gold-500 selection:text-navy-950">
      <TopNav />

      {/* Global Luxury Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 max-w-md animate-bounce">
          <div
            className={`rounded-2xl px-4 py-3 shadow-2xl border flex items-start gap-3 text-xs ${
              toastMessage.tone === 'red'
                ? 'bg-red-950 text-red-100 border-red-500 shadow-red-900/40'
                : toastMessage.tone === 'gold'
                ? 'bg-navy-950 text-gold-300 border-gold-400 shadow-gold'
                : 'bg-navy-950 text-ivory-100 border-gold-500/50 shadow-gold'
            }`}
          >
            {toastMessage.tone === 'red' ? (
              <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
            )}
            <div>
              <div className="font-display font-black text-sm text-white">{toastMessage.title}</div>
              {toastMessage.subtitle && (
                <div className="text-[11px] text-ivory-200/80 mt-0.5">{toastMessage.subtitle}</div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Active Role View */}
      <main className="flex-1 pb-28">
        {activeView === 'landing' && <LandingPage />}
        {activeView === 'customer' && <CustomerDashboard />}
        {activeView === 'chef' && <ChefDashboard />}
        {activeView === 'manager' && <ManagerDashboard />}
        {activeView === 'supplier' && <SupplierDashboard />}
        {activeView === 'iot-counter' && <SmartCounterView />}
      </main>

      {/* Modals & Judge Walkthrough Overlay */}
      <PayPalCheckoutModal />
      <DigitalReceiptModal />
      <AuthModal />
      <GuidedDemoOverlay />
    </div>
  );
};

export default function App() {
  return (
    <EcosystemProvider>
      <MainShell />
    </EcosystemProvider>
  );
}
