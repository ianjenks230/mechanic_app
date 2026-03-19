import { useMemo, useState } from 'react';
import { Chip } from '../components/Chip';
import { MapHero } from '../components/MapHero';
import { MechanicCard } from '../components/MechanicCard';
import { appConfig } from '../config';
import { useI18n } from '../i18n';
import { useMechanics } from '../hooks/useMechanics';
import { VehicleCategory, VEHICLE_CATEGORIES } from '../types';

export default function Home() {
  const { mechanics, loading, offline } = useMechanics();
  const { t } = useI18n();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string>('All');

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    return mechanics.filter((mechanic) => {
      const matchesCategory =
        category === 'All' || mechanic.categories.includes(category as VehicleCategory);

      const matchesQuery =
        trimmed.length === 0 ||
        mechanic.name.toLowerCase().includes(trimmed) ||
        mechanic.specialties.some((specialty) => specialty.toLowerCase().includes(trimmed));

      return matchesCategory && matchesQuery;
    });
  }, [mechanics, query, category]);

  const categories = ['All', ...VEHICLE_CATEGORIES];

  return (
    <div className="list-column">
      {offline && <div className="banner">{t('offlineBanner')}</div>}

      <div className="search-bar">
        <input
          className="search-input"
          placeholder={t('searchPlaceholder')}
          aria-label={t('searchPlaceholder')}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

      <div className="chip-row">
        {categories.map((value) => (
          <Chip
            key={value}
            label={value}
            selected={category === value}
            onClick={() => setCategory(value)}
          />
        ))}
      </div>

      <MapHero city={appConfig.defaultCity} count={filtered.length} />

      <section className="section">
        <div className="section-header">
          <h2>{t('mechanicsNearYou')}</h2>
          <span className="badge gold">{filtered.length} total</span>
        </div>
        {loading ? (
          <div className="banner">{t('loadingMechanics')}</div>
        ) : (
          <div className="card-grid">
            {filtered.map((mechanic, index) => (
              <MechanicCard key={mechanic.id} mechanic={mechanic} index={index} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
