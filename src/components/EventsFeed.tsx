import React, { useState } from 'react';

interface Event {
  date: string;
  event: string;
  reason: string;
  effect: string;
  value: string;
  expert: string;
  token: string;
}

const events: Event[] = [
  {
    date: '2006',
    event: 'Просмотр фильма "Секрет"',
    reason: 'Интерес к сознанию',
    effect: 'Вера в возможность',
    value: 'Осознанность',
    expert: '—',
    token: 'EVT-001',
  },
  {
    date: '2018',
    event: 'Манифест "У меня не будет проблем с финансами"',
    reason: 'Внутренний выбор',
    effect: 'Установка изобилия',
    value: 'Самодисциплина',
    expert: '—',
    token: 'EVT-002',
  },
  {
    date: '2023',
    event: 'Первая инвестиция в Систему Bitbon',
    reason: 'Финансовый кризис',
    effect: 'Опора на блокчейн',
    value: 'Ответственность',
    expert: '👨‍🏫 Наставник',
    token: 'EVT-003',
  },
  {
    date: '2025',
    event: 'Покупка Defender',
    reason: 'Завершение этапа',
    effect: 'Вознаграждение за путь',
    value: 'Целеустремлённость',
    expert: '—',
    token: 'EVT-004',
  },
];

const EventsFeed: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: '#1a1a2e',
        border: '1px solid #16213e',
      }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Лента Событий</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">История Успеха — токенизировано как EVT</p>
        </div>
        <button
          className="px-4 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
          style={{ background: '#7c3aed20', color: '#a78bfa', border: '1px solid #7c3aed40' }}
        >
          + Добавить событие
        </button>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid #16213e' }}>
              {['Дата', 'Событие', 'Причина', 'Следствие', 'Ценность', 'Эксперт', 'Токен'].map((h) => (
                <th
                  key={h}
                  className="text-left py-3 px-3 text-xs uppercase tracking-wider font-semibold"
                  style={{ color: '#94a3b8' }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {events.map((ev, i) => (
              <tr
                key={i}
                className="transition-colors cursor-pointer"
                style={{ borderBottom: '1px solid #16213e10' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#7c3aed08')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                <td className="py-3.5 px-3 font-bold" style={{ color: '#7c3aed' }}>{ev.date}</td>
                <td className="py-3.5 px-3 font-medium text-[var(--color-text-primary)] max-w-[200px]">{ev.event}</td>
                <td className="py-3.5 px-3 text-[var(--color-text-muted)]">{ev.reason}</td>
                <td className="py-3.5 px-3 text-[var(--color-text-muted)]">{ev.effect}</td>
                <td className="py-3.5 px-3">
                  <span
                    className="px-2 py-0.5 rounded-md text-xs font-medium"
                    style={{ background: '#3b82f620', color: '#60a5fa' }}
                  >
                    {ev.value}
                  </span>
                </td>
                <td className="py-3.5 px-3 text-[var(--color-text-muted)] text-xs">{ev.expert}</td>
                <td className="py-3.5 px-3">
                  <span
                    className="px-2 py-0.5 rounded text-xs font-mono"
                    style={{ background: '#10b98115', color: '#10b981', border: '1px solid #10b98130' }}
                  >
                    {ev.token}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {events.map((ev, i) => (
          <div
            key={i}
            className="rounded-xl p-4 cursor-pointer"
            style={{ background: '#16213e', border: '1px solid #7c3aed20' }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-sm font-bold" style={{ color: '#7c3aed' }}>{ev.date}</span>
                <p className="text-sm font-medium text-[var(--color-text-primary)] mt-0.5">{ev.event}</p>
              </div>
              <span
                className="px-2 py-0.5 rounded text-xs font-mono ml-2 shrink-0"
                style={{ background: '#10b98115', color: '#10b981' }}
              >
                {ev.token}
              </span>
            </div>
            {expanded === i && (
              <div className="mt-3 pt-3 space-y-1.5" style={{ borderTop: '1px solid #16213e' }}>
                <p className="text-xs text-[var(--color-text-muted)]"><span className="text-[var(--color-text-primary)]">Причина:</span> {ev.reason}</p>
                <p className="text-xs text-[var(--color-text-muted)]"><span className="text-[var(--color-text-primary)]">Следствие:</span> {ev.effect}</p>
                <p className="text-xs text-[var(--color-text-muted)]"><span className="text-[var(--color-text-primary)]">Ценность:</span> {ev.value}</p>
                {ev.expert !== '—' && (
                  <p className="text-xs text-[var(--color-text-muted)]"><span className="text-[var(--color-text-primary)]">Эксперт:</span> {ev.expert}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsFeed;
