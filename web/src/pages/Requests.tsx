import { Link, useLocation } from 'react-router-dom';
import { StatusTimeline } from '../components/StatusTimeline';
import { useRequests } from '../hooks/useRequests';
import { useI18n } from '../i18n';
import { formatCurrency, formatDate } from '../utils/format';

export default function Requests() {
  const { requests, advanceStatus } = useRequests();
  const { t } = useI18n();
  const location = useLocation();
  const createdId = (location.state as { createdId?: string } | null)?.createdId;

  return (
    <div className="list-column">
      <h2>{t('requests')}</h2>
      {createdId && <div className="banner">{t('requestCreated')}</div>}

      {requests.length === 0 ? (
        <div className="banner">{t('noRequests')}</div>
      ) : (
        <div className="list-column">
          {requests.map((request) => (
            <div key={request.id} className="card">
              <div className="card-header">
                <div>
                  <h3>{request.mechanicName}</h3>
                  <div className="mechanic-meta">
                    <span>{request.vehicleType}</span>
                    <span>{formatDate(request.createdAt)}</span>
                  </div>
                </div>
                <span className="badge gold">{request.status}</span>
              </div>

              {request.queuedOffline && <span className="badge">{t('queueOffline')}</span>}

              <p>{request.symptoms}</p>
              <p>{request.address}</p>

              <StatusTimeline status={request.status} />

              <div className="invoice-grid">
                {request.lineItems.map((item) => (
                  <div key={item.description} className="invoice-row">
                    <span>{item.description}</span>
                    <span>{formatCurrency(item.amount)}</span>
                  </div>
                ))}
                <div className="invoice-row invoice-total">
                  <span>{t('total')}</span>
                  <span>{formatCurrency(request.total)}</span>
                </div>
              </div>

              <div className="inline-actions">
                <button className="btn" onClick={() => advanceStatus(request.id)}>
                  {t('advanceStatus')}
                </button>
                <Link className="btn btn-primary" to={`/requests/${request.id}/invoice`}>
                  {t('invoice')}
                </Link>
              </div>

              {request.status === 'Complete' && <div className="notice">{t('payDirectly')}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
