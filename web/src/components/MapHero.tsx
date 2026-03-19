import { useI18n } from '../i18n';

type MapHeroProps = {
  city: string;
  count: number;
};

export function MapHero({ city, count }: MapHeroProps) {
  const { t } = useI18n();

  return (
    <section className="map-hero" aria-label={t('mapPlaceholder')}>
      <div className="map-surface" aria-hidden="true" />
      <div className="map-overlay">
        <div>
          <div className="map-title">{t('mapPlaceholder')}</div>
          <p>{t('mapHint')}</p>
        </div>
        <div className="map-meta">
          <span className="map-chip">{count} nearby</span>
          <span className="map-chip">{city}</span>
        </div>
      </div>
    </section>
  );
}
