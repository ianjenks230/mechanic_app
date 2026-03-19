import { appConfig } from '../config';
import { useI18n } from '../i18n';

export default function Profile() {
  const { t, language, setLanguage } = useI18n();

  return (
    <div className="list-column">
      <h2>{t('profile')}</h2>

      <div className="card">
        <h3>{t('demoRider')}</h3>
        <p>{t('demoProfileText')}</p>
        <div className="profile-stats">
          <div className="stat">{t('savedLocations')}</div>
          <div className="stat">{t('instantQuotes')}</div>
        </div>
      </div>

      <div className="card">
        <h3>{t('language')}</h3>
        <div className="inline-actions">
          <button
            className={`btn ${language === 'en' ? 'btn-primary' : ''}`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
          <button
            className={`btn ${language === 'es' ? 'btn-primary' : ''}`}
            onClick={() => setLanguage('es')}
          >
            Espanol
          </button>
        </div>
      </div>

      <div className="card">
        <h3>{t('supportTitle')}</h3>
        <p>Contact: {appConfig.supportEmail}</p>
        <div className="notice">{t('payDirectly')}</div>
      </div>
    </div>
  );
}
