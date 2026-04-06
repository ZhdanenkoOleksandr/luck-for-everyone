import React from 'react';

interface Vote {
  topic: string;
  participation: string;
  voted: boolean;
  status: string;
  statusType: 'pending' | 'deadline';
  deadline?: string;
}

const votes: Vote[] = [
  {
    topic: 'Добавить трекер привычек',
    participation: 'Проголосовал "за"',
    voted: true,
    status: 'Ожидается',
    statusType: 'pending',
  },
  {
    topic: 'Запустить фонд "История Франка"',
    participation: 'Не проголосовал',
    voted: false,
    status: '⏳ До 12.08.2025',
    statusType: 'deadline',
    deadline: '12.08.2025',
  },
];

const DaoVoting: React.FC = () => {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: '#1a1a2e', border: '1px solid #16213e' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Голосования DAO</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Децентрализованное управление платформой</p>
        </div>
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold"
          style={{ background: '#f59e0b20', color: '#f59e0b', border: '1px solid #f59e0b30' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b] animate-pulse inline-block" />
          {votes.filter((v) => !v.voted).length} ожидает
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid #16213e' }}>
              {['Тема', 'Участие', 'Статус', ''].map((h) => (
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
            {votes.map((vote, i) => (
              <tr
                key={i}
                style={{ borderBottom: '1px solid #16213e20' }}
                className="transition-colors hover:bg-[#7c3aed08]"
              >
                <td className="py-4 px-3 font-medium text-[var(--color-text-primary)] max-w-[250px]">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: vote.voted ? '#10b981' : '#f59e0b' }}
                    />
                    {vote.topic}
                  </div>
                </td>
                <td className="py-4 px-3">
                  <span
                    className="px-2 py-1 rounded-lg text-xs font-medium"
                    style={
                      vote.voted
                        ? { background: '#10b98115', color: '#10b981' }
                        : { background: '#f59e0b15', color: '#f59e0b' }
                    }
                  >
                    {vote.participation}
                  </span>
                </td>
                <td className="py-4 px-3">
                  <span
                    className="text-xs font-medium"
                    style={
                      vote.statusType === 'deadline'
                        ? { color: '#f59e0b' }
                        : { color: '#94a3b8' }
                    }
                  >
                    {vote.status}
                  </span>
                </td>
                <td className="py-4 px-3">
                  {!vote.voted && (
                    <button
                      className="px-4 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
                      style={{
                        background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                        color: '#fff',
                        boxShadow: '0 0 12px #7c3aed40',
                      }}
                    >
                      Проголосовать
                    </button>
                  )}
                  {vote.voted && (
                    <button
                      className="px-3 py-1.5 rounded-lg text-xs transition-all hover:opacity-80"
                      style={{ background: '#16213e', color: '#94a3b8' }}
                    >
                      детали
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="md:hidden space-y-3">
        {votes.map((vote, i) => (
          <div
            key={i}
            className="rounded-xl p-4"
            style={{
              background: '#16213e',
              border: `1px solid ${vote.voted ? '#10b98130' : '#f59e0b30'}`,
            }}
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <p className="text-sm font-medium text-[var(--color-text-primary)]">{vote.topic}</p>
              <span
                className="text-xs shrink-0"
                style={{ color: vote.statusType === 'deadline' ? '#f59e0b' : '#94a3b8' }}
              >
                {vote.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="px-2 py-1 rounded text-xs"
                style={vote.voted ? { background: '#10b98115', color: '#10b981' } : { background: '#f59e0b15', color: '#f59e0b' }}
              >
                {vote.participation}
              </span>
              {!vote.voted && (
                <button
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #3b82f6)', color: '#fff' }}
                >
                  Проголосовать
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaoVoting;
