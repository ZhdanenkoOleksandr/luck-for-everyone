import React from 'react';

interface Connection {
  name: string;
  role: string;
  aura: number;
  events: number;
  initials: string;
  color: string;
}

const connections: Connection[] = [
  {
    name: 'Виталий А.',
    role: 'Наставник',
    aura: 4,
    events: 3,
    initials: 'ВА',
    color: '#7c3aed',
  },
  {
    name: 'Ольга Г.',
    role: 'Психотерапевт',
    aura: 3,
    events: 1,
    initials: 'ОГ',
    color: '#ec4899',
  },
  {
    name: 'Астролог Анна',
    role: 'Эксперт',
    aura: 4,
    events: 2,
    initials: 'АА',
    color: '#3b82f6',
  },
];

const roleColors: Record<string, { bg: string; text: string }> = {
  Наставник: { bg: '#7c3aed20', text: '#a78bfa' },
  Психотерапевт: { bg: '#ec489920', text: '#f472b6' },
  Эксперт: { bg: '#3b82f620', text: '#60a5fa' },
};

const Stars: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 20 20">
        <polygon
          points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"
          fill={i < count ? '#f59e0b' : '#374151'}
        />
      </svg>
    ))}
  </div>
);

const MyConnections: React.FC = () => {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: '#1a1a2e', border: '1px solid #16213e' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Мои связи LINK</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Эксперты и наставники в вашей сети</p>
        </div>
        <button
          className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
          style={{ background: '#7c3aed20', color: '#a78bfa', border: '1px solid #7c3aed40' }}
        >
          + Добавить
        </button>
      </div>

      <div className="space-y-3">
        {connections.map((conn, i) => {
          const rc = roleColors[conn.role] || { bg: '#94a3b820', text: '#94a3b8' };
          return (
            <div
              key={i}
              className="flex items-center gap-4 rounded-xl p-4 transition-all hover:bg-[#7c3aed08] cursor-pointer"
              style={{ background: '#16213e', border: '1px solid #16213e' }}
            >
              {/* Avatar */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{ background: conn.color, boxShadow: `0 0 12px ${conn.color}60` }}
              >
                {conn.initials}
              </div>

              {/* Name & role */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[var(--color-text-primary)] truncate">{conn.name}</p>
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium mt-0.5"
                  style={{ background: rc.bg, color: rc.text }}
                >
                  {conn.role}
                </span>
              </div>

              {/* AURA */}
              <div className="hidden sm:block shrink-0">
                <p className="text-xs text-[var(--color-text-muted)] mb-1">AURA</p>
                <Stars count={conn.aura} />
              </div>

              {/* Events */}
              <div className="shrink-0 text-center">
                <p
                  className="text-xl font-black"
                  style={{ color: '#7c3aed' }}
                >
                  {conn.events}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">событий</p>
              </div>

              {/* Action */}
              <button
                className="hidden sm:block px-3 py-1.5 rounded-lg text-xs transition-all hover:opacity-80"
                style={{ background: '#7c3aed20', color: '#a78bfa' }}
              >
                связаться
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyConnections;
