import React, { useState } from 'react';
import ProfileBlock from './ProfileBlock';
import EventsFeed from './EventsFeed';
import SuccessAlgorithm from './SuccessAlgorithm';
import MindMap from './MindMap';
import MetaAssets from './MetaAssets';
import MyConnections from './MyConnections';
import DaoVoting from './DaoVoting';
import FinancialZone from './FinancialZone';

const navItems = [
  { id: 'overview', label: 'Обзор', icon: '🏠' },
  { id: 'events', label: 'События', icon: '📋' },
  { id: 'algorithm', label: 'Алгоритм', icon: '🎯' },
  { id: 'map', label: 'Карта', icon: '🗺️' },
  { id: 'assets', label: 'Активы', icon: '💎' },
  { id: 'connections', label: 'Связи', icon: '🔗' },
  { id: 'dao', label: 'DAO', icon: '🏛️' },
  { id: 'finance', label: 'Финансы', icon: '💰' },
];

const Dashboard: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setSidebarOpen(false);
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex min-h-screen" style={{ background: '#0f0f1a' }}>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full z-30 transition-transform duration-300 flex flex-col ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:flex`}
        style={{
          width: '220px',
          background: '#1a1a2e',
          borderRight: '1px solid #16213e',
          flexShrink: 0,
        }}
      >
        {/* Logo */}
        <div
          className="px-6 py-5 flex items-center gap-3"
          style={{ borderBottom: '1px solid #16213e' }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-black text-white"
            style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6)' }}
          >
            OS
          </div>
          <div>
            <p className="text-sm font-bold text-[var(--color-text-primary)]">OneSuccess</p>
            <p className="text-xs text-[var(--color-text-muted)]">Participant</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full flex items-center gap-3 px-6 py-3 text-sm transition-all text-left"
              style={
                activeSection === item.id
                  ? {
                      background: '#7c3aed20',
                      color: '#a78bfa',
                      borderRight: '3px solid #7c3aed',
                    }
                  : {
                      color: '#94a3b8',
                    }
              }
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.background = '#7c3aed10';
                  e.currentTarget.style.color = '#e2e8f0';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#94a3b8';
                }
              }}
            >
              <span className="text-base">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom info */}
        <div className="px-6 py-4" style={{ borderTop: '1px solid #16213e' }}>
          <div className="flex items-center gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6)' }}
            >
              АЖ
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--color-text-primary)]">Александр Ж.</p>
              <p className="text-xs text-[var(--color-text-muted)]">Шаг 2/10</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header
          className="sticky top-0 z-10 flex items-center justify-between px-4 md:px-6 py-3"
          style={{
            background: '#0f0f1a',
            borderBottom: '1px solid #16213e',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ background: '#1a1a2e', color: '#94a3b8' }}
              onClick={() => setSidebarOpen(true)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-sm font-semibold text-[var(--color-text-primary)]">Личный кабинет</h1>
              <p className="text-xs text-[var(--color-text-muted)]">OneSuccess — Участник платформы</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Notification bell */}
            <button
              className="relative p-2 rounded-lg"
              style={{ background: '#1a1a2e', color: '#94a3b8' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span
                className="absolute top-1 right-1 w-2 h-2 rounded-full"
                style={{ background: '#f59e0b' }}
              />
            </button>

            {/* Date */}
            <div
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs"
              style={{ background: '#1a1a2e', color: '#94a3b8' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>06.04.2026</span>
            </div>
          </div>
        </header>

        {/* Dashboard sections */}
        <main className="flex-1 p-4 md:p-6 space-y-6 overflow-y-auto">
          <section id="section-overview">
            <ProfileBlock />
          </section>

          <section id="section-events">
            <EventsFeed />
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <section id="section-algorithm">
              <SuccessAlgorithm />
            </section>
            <section id="section-map">
              <MindMap />
            </section>
          </div>

          <section id="section-assets">
            <MetaAssets />
          </section>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <section id="section-connections">
              <MyConnections />
            </section>
            <section id="section-dao">
              <DaoVoting />
            </section>
          </div>

          <section id="section-finance">
            <FinancialZone />
          </section>

          {/* Footer */}
          <footer className="pt-4 pb-2 text-center">
            <p className="text-xs text-[var(--color-text-muted)]">
              OneSuccess Platform © 2026 — Powered by Bitbon System
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
