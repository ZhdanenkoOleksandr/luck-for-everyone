import React from 'react';

interface MetaAsset {
  name: string;
  type: string;
  link: string;
  status: 'Активен' | 'Архив';
}

const assets: MetaAsset[] = [
  {
    name: 'Бумажный доллар — $1,000,000',
    type: 'ZHD-1M',
    link: 'Результат',
    status: 'Активен',
  },
  {
    name: 'Шаг в Систему Bitbon',
    type: 'EVT',
    link: 'Событие',
    status: 'Активен',
  },
  {
    name: 'Defender',
    type: 'Результат',
    link: 'Следствие',
    status: 'Активен',
  },
  {
    name: 'Манифест изобилия',
    type: 'Метафайл',
    link: 'Ценность',
    status: 'Архив',
  },
];

const typeColors: Record<string, { bg: string; text: string }> = {
  'ZHD-1M': { bg: '#10b98120', text: '#10b981' },
  EVT: { bg: '#3b82f620', text: '#60a5fa' },
  Результат: { bg: '#f59e0b20', text: '#f59e0b' },
  Метафайл: { bg: '#a78bfa20', text: '#a78bfa' },
};

const MetaAssets: React.FC = () => {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: '#1a1a2e', border: '1px solid #16213e' }}
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Мои метаактивы</h2>
          <p className="text-xs text-[var(--color-text-muted)] mt-0.5">Токенизированные активы и достижения</p>
        </div>
        <div
          className="px-3 py-1 rounded-lg text-xs font-bold"
          style={{ background: '#7c3aed20', color: '#a78bfa' }}
        >
          {assets.length} активов
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr style={{ borderBottom: '1px solid #16213e' }}>
              {['Название', 'Тип', 'Связь', 'Статус', ''].map((h) => (
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
            {assets.map((asset, i) => {
              const tc = typeColors[asset.type] || { bg: '#94a3b820', text: '#94a3b8' };
              return (
                <tr
                  key={i}
                  style={{ borderBottom: '1px solid #16213e20' }}
                  className="transition-colors hover:bg-[#7c3aed08]"
                >
                  <td className="py-3.5 px-3 font-medium text-[var(--color-text-primary)]">{asset.name}</td>
                  <td className="py-3.5 px-3">
                    <span
                      className="px-2 py-0.5 rounded text-xs font-mono font-semibold"
                      style={{ background: tc.bg, color: tc.text }}
                    >
                      {asset.type}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-[var(--color-text-muted)]">{asset.link}</td>
                  <td className="py-3.5 px-3">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={
                        asset.status === 'Активен'
                          ? { background: '#10b98115', color: '#10b981', border: '1px solid #10b98130' }
                          : { background: '#94a3b815', color: '#94a3b8', border: '1px solid #94a3b830' }
                      }
                    >
                      {asset.status === 'Активен' ? '● ' : '○ '}{asset.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-3">
                    <button
                      className="px-3 py-1 rounded text-xs transition-all hover:opacity-80"
                      style={{ background: '#16213e', color: '#94a3b8' }}
                    >
                      подробнее
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {assets.map((asset, i) => {
          const tc = typeColors[asset.type] || { bg: '#94a3b820', text: '#94a3b8' };
          return (
            <div key={i} className="rounded-xl p-4" style={{ background: '#16213e' }}>
              <div className="flex justify-between items-start mb-2">
                <p className="text-sm font-medium text-[var(--color-text-primary)] flex-1 mr-2">{asset.name}</p>
                <span
                  className="px-2 py-0.5 rounded-full text-xs font-semibold shrink-0"
                  style={
                    asset.status === 'Активен'
                      ? { background: '#10b98115', color: '#10b981' }
                      : { background: '#94a3b815', color: '#94a3b8' }
                  }
                >
                  {asset.status}
                </span>
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded text-xs font-mono" style={{ background: tc.bg, color: tc.text }}>
                  {asset.type}
                </span>
                <span className="px-2 py-0.5 rounded text-xs" style={{ background: '#1a1a2e', color: '#94a3b8' }}>
                  {asset.link}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MetaAssets;
