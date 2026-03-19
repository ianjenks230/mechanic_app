import { useState } from 'react';
import type { FormEvent } from 'react';
import { useI18n } from '../i18n';
import { VehicleCategory, VEHICLE_CATEGORIES } from '../types';

export type RequestFormValues = {
  vehicleType: VehicleCategory;
  symptoms: string;
  address: string;
  notes: string;
};

type RequestFormProps = {
  onSubmit: (values: RequestFormValues) => void;
  onCancel: () => void;
};

export function RequestForm({ onSubmit, onCancel }: RequestFormProps) {
  const { t } = useI18n();
  const [vehicleType, setVehicleType] = useState<VehicleCategory>('Car');
  const [symptoms, setSymptoms] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({ vehicleType, symptoms, address, notes });
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="vehicleType">{t('vehicleType')}</label>
        <select
          id="vehicleType"
          className="select"
          value={vehicleType}
          onChange={(event) => setVehicleType(event.target.value as VehicleCategory)}
        >
          {VEHICLE_CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="symptoms">{t('symptoms')}</label>
        <textarea
          id="symptoms"
          className="textarea"
          value={symptoms}
          onChange={(event) => setSymptoms(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="address">{t('address')}</label>
        <input
          id="address"
          className="input"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="notes">{t('notes')}</label>
        <textarea
          id="notes"
          className="textarea"
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {t('submitRequest')}
        </button>
        <button type="button" className="btn" onClick={onCancel}>
          {t('cancel')}
        </button>
      </div>
    </form>
  );
}
