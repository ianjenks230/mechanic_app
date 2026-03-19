import { useI18n } from '../i18n';

export default function Messages() {
  const { t } = useI18n();

  return (
    <div className="list-column">
      <h2>{t('messages')}</h2>
      <div className="card">
        <p>{t('noMessages')}</p>
      </div>
      <div className="card">
        <h3>{t('messagesHintTitle')}</h3>
        <p>{t('messagesHintBody')}</p>
      </div>
    </div>
  );
}
