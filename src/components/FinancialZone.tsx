import React from 'react';

interface FinCard {
  label: string;
  value: string;
  unit: string;
  icon: string;
  color: string;
  glow: string;
  change?: string;
}

const cards: FinCard[] = [
  {
    label: 'Инвестировано через Contributing',
    value: '3,000',
    unit: 'ERBB',
    icon: '📈',
    color: '#10b981',
    glow: '#10b98120',
    change: '+12%',
  },
  {
    label: 'Доли участия',
    value: '1/1000',
    unit: 'в OneSuccess',
    icon: '🏛️',
    color: '#7c3aed',
    glow: '#7c3aed20',
  },
  {
    label: 'Куплено метаактивов',
    value: '12',
    unit: 'активов',
    icon: '💎',
    color: '#3b82f6',
    glow: '#3b82f620',
    change: '+3 в этом месяце',
  },
  {
    label: 'Доход от метаактивов',
    value: '840',
    unit: 'ERBB',
    icon: '💰',
    color: '#f59e0b',
    glow: '#f59e0b20',
    change: '+840 всего',
  },
];

const FinancialZone: React.FC = () => {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: '#1a1a2e', border: '1px solid #16213e' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Финансовая зона</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Ваши активы и инвестиции в системе</p>
        </div>
        <div
          className="px-3 py-1 rounded-lg text-xs font-semibold"
          style={{ background: '#10b98115', color: '#10b981', border: '1px solid #10b98130' }}
        >
          ● Синхронизировано
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <div
            key={i}
            className="rounded-xl p-5 transition-all hover:scale-[1.02] cursor-pointer"
            style={{
              background: card.glow,
              border: `1px solid ${card.color}30`,
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-2xl">{card.icon}</span>
              {card.change && (
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded"
                  style={{ background: `${card.color}20`, color: card.color }}
                >
                  {card.change}
                </span>
              )}
            </div>
            <p
              className="text-2xl font-black mb-1"
              style={{ color: card.color }}
            >
              {card.value}
            </p>
            <p className="text-xs font-semibold" style={{ color: card.color }}>
              {card.unit}
            </p>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Mini chart area - decorative bar chart */}
      <div
        className="mt-5 rounded-xl p-4"
        style={{ background: '#16213e', border: '1px solid #16213e' }}
      >
        <p className="text-xs text-[var(--color-text-muted)] mb-3">Динамика дохода (ERBB)</p>
        <div className="flex items-end gap-2 h-16">
          {[120, 200, 180, 350, 290, 420, 480, 510, 840].map((val, i) => (
            <div
              key={i}
              className="flex-1 rounded-t transition-all hover:opacity-80"
              style={{
                height: `${(val / 840) * 100}%`,
                background:
                  i === 8
                    ? 'linear-gradient(180deg, #7c3aed, #3b82f6)'
                    : '#7c3aed40',
                minHeight: '4px',
              }}
              title={`${val} ERBB`}
            />
          ))}
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-xs text-[var(--color-text-muted)]">Янв</span>
          <span className="text-xs text-[var(--color-text-muted)]">Сент</span>
        </div>
      </div>
    </div>
  );
};

export default FinancialZone;
