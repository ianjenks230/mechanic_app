import { Link } from 'react-router-dom';
import { appConfig } from '../config';
import { useI18n } from '../i18n';

export function TopBar() {
  const { language, setLanguage, t } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="brand" aria-label={appConfig.appName}>
          {appConfig.appName}
        </Link>
        <div className="topbar-actions">
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={`${t('language')}: ${language.toUpperCase()}`}
          >
            {language.toUpperCase()}
          </button>
          <a className="support-link" href={`mailto:${appConfig.supportEmail}`} aria-label={t('support')}>
            {t('support')}
          </a>
        </div>
      </div>
    </header>
  );
}
