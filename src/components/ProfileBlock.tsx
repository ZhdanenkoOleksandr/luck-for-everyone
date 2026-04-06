import React from 'react';

const StarRating: React.FC<{ rating: number; max: number }> = ({ rating, max }) => {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < Math.floor(rating);
        const partial = !filled && i < rating;
        return (
          <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="none">
            <defs>
              <linearGradient id={`star-grad-${i}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset={partial ? `${(rating % 1) * 100}%` : filled ? '100%' : '0%'} stopColor="#f59e0b" />
                <stop offset={partial ? `${(rating % 1) * 100}%` : filled ? '100%' : '0%'} stopColor="#374151" />
              </linearGradient>
            </defs>
            <polygon
              points="10,1 12.9,7 19.5,7.6 14.5,12 16.2,18.5 10,15 3.8,18.5 5.5,12 0.5,7.6 7.1,7"
              fill={filled ? '#f59e0b' : partial ? `url(#star-grad-${i})` : '#374151'}
            />
          </svg>
        );
      })}
      <span className="ml-1 text-sm text-[var(--color-text-muted)]">{rating} / {max}</span>
    </div>
  );
};

const ProfileBlock: React.FC = () => {
  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        border: '1px solid #7c3aed40',
        boxShadow: '0 0 40px #7c3aed20',
      }}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
        {/* Avatar */}
        <div className="relative">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white"
            style={{
              background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
              boxShadow: '0 0 20px #7c3aed60',
            }}
          >
            АЖ
          </div>
          <div
            className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: '#10b981', border: '2px solid #0f0f1a' }}
          >
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
              Александр Жданенко
            </h1>
            <span
              className="px-3 py-0.5 rounded-full text-xs font-semibold"
              style={{ background: '#10b98120', color: '#10b981', border: '1px solid #10b98140' }}
            >
              ● Активен
            </span>
          </div>
          <p className="text-sm text-[var(--color-text-muted)] mb-3">
            Участник платформы OneSuccess
          </p>
          <div className="flex flex-wrap gap-4">
            <div>
              <p className="text-xs text-[var(--color-text-muted)] mb-0.5">AURA рейтинг</p>
              <StarRating rating={3.7} max={5} />
            </div>
          </div>
        </div>

        {/* Goal Card */}
        <div
          className="rounded-xl p-5 min-w-[220px]"
          style={{
            background: 'linear-gradient(135deg, #7c3aed20, #3b82f620)',
            border: '1px solid #7c3aed40',
          }}
        >
          <p className="text-xs text-[var(--color-text-muted)] mb-1 uppercase tracking-wider">Моя Цель</p>
          <p
            className="text-3xl font-black mb-3"
            style={{
              background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            $1,000,000
          </p>
          <div>
            <div className="flex justify-between text-xs text-[var(--color-text-muted)] mb-1.5">
              <span>Прогресс</span>
              <span className="text-[var(--color-text-primary)] font-semibold">Шаг 2 из 10</span>
            </div>
            <div className="w-full h-2 rounded-full" style={{ background: '#16213e' }}>
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  width: '20%',
                  background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
                  boxShadow: '0 0 8px #7c3aed80',
                }}
              />
            </div>
            <div className="flex justify-between text-xs mt-1" style={{ color: '#7c3aed' }}>
              <span>20%</span>
              <span>Алгоритм Успеха</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlock;
