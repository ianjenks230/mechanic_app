import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Mechanic } from '../types';

type MechanicCardProps = {
  mechanic: Mechanic;
  index: number;
};

export function MechanicCard({ mechanic, index }: MechanicCardProps) {
  const delayStyle = { '--delay': `${index * 0.06}s` } as CSSProperties;

  return (
    <Link
      to={`/mechanic/${mechanic.id}`}
      className="card fade-up"
      style={delayStyle}
      aria-label={`View ${mechanic.name} profile`}
    >
      <div className="card-header">
        <div>
          <h3>{mechanic.name}</h3>
          <div className="mechanic-meta">
            <span>Rating {mechanic.rating.toFixed(1)}</span>
            <span>{mechanic.responseTimeMins} min response</span>
            <span>{mechanic.jobsThisMonth} jobs this month</span>
          </div>
        </div>
        <span className="badge gold">{mechanic.locationArea}</span>
      </div>
      <div className="mechanic-tags">
        {mechanic.specialties.map((specialty) => (
          <span className="tag" key={specialty}>
            {specialty}
          </span>
        ))}
      </div>
    </Link>
  );
}
