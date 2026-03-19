import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Modal } from '../components/Modal';
import { RequestForm, RequestFormValues } from '../components/RequestForm';
import { useMechanics } from '../hooks/useMechanics';
import { useRequests } from '../hooks/useRequests';
import { useI18n } from '../i18n';
import { LineItem, Request } from '../types';

export default function MechanicProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useI18n();
  const { mechanics, loading } = useMechanics();
  const { addRequest } = useRequests();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const mechanic = useMemo(() => mechanics.find((item) => item.id === id), [mechanics, id]);

  if (loading) {
    return <div className="banner">{t('loadingMechanics')}</div>;
  }

  if (!mechanic) {
    return <div className="banner">{t('mechanicNotFound')}</div>;
  }

  const handleSubmit = (values: RequestFormValues) => {
    const lineItems: LineItem[] = [
      { description: 'Mobile diagnostics', amount: 85 },
      { description: 'Labor estimate', amount: 120 },
      { description: 'Parts placeholder', amount: 60 }
    ];
    const total = lineItems.reduce((sum, item) => sum + item.amount, 0);

    const request: Request = {
      id: `req-${Date.now()}`,
      mechanicId: mechanic.id,
      mechanicName: mechanic.name,
      vehicleType: values.vehicleType,
      symptoms: values.symptoms,
      address: values.address,
      notes: values.notes,
      status: 'Requested',
      queuedOffline: !navigator.onLine,
      createdAt: new Date().toISOString(),
      lineItems,
      total
    };

    addRequest(request);
    setIsModalOpen(false);
    navigate('/requests', { state: { createdId: request.id } });
  };

  return (
    <div className="list-column">
      <Link className="support-link" to="/">
        {t('backToHome')}
      </Link>

      <section className="card profile-hero">
        <div>
          <h2>{mechanic.name}</h2>
          <p>{mechanic.bio}</p>
          <div className="profile-stats">
            <div className="stat">Rating {mechanic.rating.toFixed(1)}</div>
            <div className="stat">{mechanic.responseTimeMins} min response</div>
            <div className="stat">{mechanic.jobsThisMonth} jobs this month</div>
          </div>
        </div>
        <div className="list-column">
          <div className="badge gold">{mechanic.locationArea}</div>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            {t('requestQuote')}
          </button>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>{t('portfolio')}</h3>
        </div>
        <div className="portfolio-grid">
          {mechanic.portfolio.map((image, index) => (
            <img key={`${mechanic.id}-portfolio-${index}`} src={image} alt="Portfolio" />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>{t('certifications')}</h3>
        </div>
        <div className="card">
          <div className="mechanic-tags">
            {mechanic.certifications.map((cert) => (
              <span key={cert} className="tag">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h3>{t('reviews')}</h3>
        </div>
        <div className="list-column">
          {mechanic.reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="card-header">
                <div>
                  <strong>{review.name}</strong>
                  <div className="mechanic-meta">Rating {review.rating}</div>
                </div>
                <span className="badge">{review.date}</span>
              </div>
              <p>{review.comment}</p>
              <div className="review-photos">
                {review.photos.map((photo, index) => (
                  <img key={`${review.id}-${index}`} src={photo} alt="Review" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <Modal title={t('requestFormTitle')} onClose={() => setIsModalOpen(false)}>
          <RequestForm onSubmit={handleSubmit} onCancel={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}
