import { Link, useParams } from 'react-router-dom';
import { downloadInvoicePdf } from '../utils/invoice';
import { useRequests } from '../hooks/useRequests';
import { useI18n } from '../i18n';
import { formatCurrency, formatDate } from '../utils/format';

export default function Invoice() {
  const { id } = useParams();
  const { requests } = useRequests();
  const { t } = useI18n();

  const request = requests.find((item) => item.id === id);

  if (!request) {
    return (
      <div className="list-column">
        <div className="banner">{t('invoiceNotFound')}</div>
        <Link className="btn" to="/requests">
          {t('backToRequests')}
        </Link>
      </div>
    );
  }

  return (
    <div className="list-column">
      <Link className="support-link" to="/requests">
        {t('backToRequests')}
      </Link>

      <div className="card">
        <div className="card-header">
          <div>
            <h2>{t('invoice')}</h2>
            <p>{request.mechanicName}</p>
          </div>
          <span className="badge gold">{request.status}</span>
        </div>

        <div className="mechanic-meta">
          <span>{formatDate(request.createdAt)}</span>
          <span>{request.vehicleType}</span>
        </div>

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
          <button className="btn btn-primary" onClick={() => downloadInvoicePdf(request)}>
            {t('downloadPdf')}
          </button>
        </div>

        <div className="notice">{t('payDirectly')}</div>
      </div>
    </div>
  );
}
