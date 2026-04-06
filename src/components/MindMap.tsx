import React from 'react';

interface Branch {
  icon: string;
  label: string;
  tags: string[];
  color: string;
  glow: string;
}

const branches: Branch[] = [
  {
    icon: '💰',
    label: 'Финансы',
    tags: ['инвестиции', 'события Bitbon'],
    color: '#10b981',
    glow: '#10b98130',
  },
  {
    icon: '🧘',
    label: 'Здоровье',
    tags: ['йога', 'нутрициология'],
    color: '#3b82f6',
    glow: '#3b82f630',
  },
  {
    icon: '💬',
    label: 'Отношения',
    tags: ['встреча', 'развод', 'переезд'],
    color: '#ec4899',
    glow: '#ec489930',
  },
  {
    icon: '🧠',
    label: 'Личностный рост',
    tags: ['бросить пить', 'новые привычки'],
    color: '#a78bfa',
    glow: '#a78bfa30',
  },
  {
    icon: '📚',
    label: 'Образование',
    tags: ['метафайлы', 'книги'],
    color: '#f59e0b',
    glow: '#f59e0b30',
  },
  {
    icon: '🔮',
    label: 'Осмысление',
    tags: ['наставники', 'астрологи'],
    color: '#7c3aed',
    glow: '#7c3aed30',
  },
];

const MindMap: React.FC = () => {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: '#1a1a2e', border: '1px solid #16213e' }}
    >
      <div className="mb-5">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Визуальная карта</h2>
        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Карта целей и направлений развития</p>
      </div>

      {/* Center goal */}
      <div className="flex justify-center mb-6">
        <div
          className="px-8 py-4 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
            boxShadow: '0 0 30px #7c3aed60, 0 0 60px #3b82f620',
          }}
        >
          <p className="text-xs text-purple-200 mb-0.5 uppercase tracking-wider">Главная цель</p>
          <p className="text-2xl font-black text-white">$1,000,000</p>
        </div>
      </div>

      {/* SVG connector lines - simplified decoration */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center gap-2">
          {branches.map((_, i) => (
            <div key={i} className="w-1 h-4 rounded-full opacity-30" style={{ background: branches[i].color }} />
          ))}
        </div>
      </div>

      {/* Branch cards grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {branches.map((branch, i) => (
          <div
            key={i}
            className="rounded-xl p-4 transition-all hover:scale-[1.02] cursor-pointer"
            style={{
              background: `${branch.glow}`,
              border: `1px solid ${branch.color}40`,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl">{branch.icon}</span>
              <span className="text-sm font-bold" style={{ color: branch.color }}>
                {branch.label}
              </span>
            </div>
            <div className="flex flex-wrap gap-1">
              {branch.tags.map((tag, j) => (
                <span
                  key={j}
                  className="px-2 py-0.5 rounded text-xs"
                  style={{ background: `${branch.color}20`, color: branch.color }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindMap;
