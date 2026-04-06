import React from 'react';

interface Step {
  num: number;
  title: string;
  status: 'done' | 'active' | 'pending';
}

const steps: Step[] = [
  { num: 1, title: 'Осознание', status: 'done' },
  { num: 2, title: 'Образ желаемого', status: 'done' },
  { num: 3, title: 'Эмоциональная настройка', status: 'active' },
  { num: 4, title: 'Медитация', status: 'pending' },
  { num: 5, title: 'Изменение парадигм', status: 'pending' },
  { num: 6, title: 'Инспирированные действия', status: 'pending' },
  { num: 7, title: 'Доверие и непривязанность', status: 'pending' },
  { num: 8, title: 'Среда и окружение', status: 'pending' },
  { num: 9, title: 'Повторение и углубление', status: 'pending' },
  { num: 10, title: 'Благодарность и служение', status: 'pending' },
];

const statusConfig = {
  done: {
    icon: '✅',
    label: 'Завершён',
    badgeStyle: { background: '#10b98120', color: '#10b981', border: '1px solid #10b98140' },
    actions: ['смотреть', 'редактировать'],
    actionStyle: { background: '#10b98115', color: '#10b981' },
    rowStyle: { background: 'transparent' },
  },
  active: {
    icon: '🔄',
    label: 'В процессе',
    badgeStyle: { background: '#f59e0b20', color: '#f59e0b', border: '1px solid #f59e0b40' },
    actions: ['завершить'],
    actionStyle: { background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', color: '#fff' },
    rowStyle: { background: '#7c3aed08', border: '1px solid #7c3aed30' },
  },
  pending: {
    icon: '⏳',
    label: 'Не начат',
    badgeStyle: { background: '#94a3b815', color: '#94a3b8', border: '1px solid #94a3b830' },
    actions: [],
    actionStyle: {},
    rowStyle: { background: 'transparent' },
  },
};

const SuccessAlgorithm: React.FC = () => {
  const doneCount = steps.filter((s) => s.status === 'done').length;
  const progressPct = (doneCount / steps.length) * 100;

  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: '#1a1a2e', border: '1px solid #16213e' }}
    >
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Алгоритм Успеха</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">10 шагов к цели</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black" style={{ color: '#a78bfa' }}>3</p>
          <p className="text-xs text-[var(--color-text-muted)]">Шаг активен</p>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
          <span>Общий прогресс</span>
          <span className="font-semibold text-[var(--color-text-primary)]">{doneCount} / {steps.length} завершено</span>
        </div>
        <div className="w-full h-2 rounded-full" style={{ background: '#16213e' }}>
          <div
            className="h-2 rounded-full"
            style={{
              width: `${progressPct}%`,
              background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
              boxShadow: '0 0 8px #7c3aed60',
            }}
          />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-2">
        {steps.map((step) => {
          const cfg = statusConfig[step.status];
          return (
            <div
              key={step.num}
              className="flex items-center gap-3 rounded-xl px-4 py-3"
              style={cfg.rowStyle}
            >
              {/* Step number */}
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={
                  step.status === 'done'
                    ? { background: '#10b98125', color: '#10b981' }
                    : step.status === 'active'
                    ? { background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', color: '#fff' }
                    : { background: '#16213e', color: '#94a3b8' }
                }
              >
                {step.num}
              </div>

              {/* Icon + title */}
              <span className="text-base shrink-0">{cfg.icon}</span>
              <span
                className={`flex-1 text-sm font-medium ${
                  step.status === 'pending' ? 'text-[var(--color-text-muted)]' : 'text-[var(--color-text-primary)]'
                }`}
              >
                {step.title}
              </span>

              {/* Badge */}
              <span
                className="px-2 py-0.5 rounded-md text-xs font-medium hidden sm:inline-block shrink-0"
                style={cfg.badgeStyle}
              >
                {cfg.label}
              </span>

              {/* Actions */}
              {cfg.actions.map((action) => (
                <button
                  key={action}
                  className="px-3 py-1 rounded-lg text-xs font-semibold transition-all hover:opacity-80 hidden sm:inline-block shrink-0"
                  style={cfg.actionStyle}
                >
                  {action}
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SuccessAlgorithm;
