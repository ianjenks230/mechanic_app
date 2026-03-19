import { REQUEST_STATUSES, RequestStatus } from '../types';

type StatusTimelineProps = {
  status: RequestStatus;
};

export function StatusTimeline({ status }: StatusTimelineProps) {
  const currentIndex = REQUEST_STATUSES.indexOf(status);

  return (
    <div className="status-timeline" aria-label="Status timeline">
      {REQUEST_STATUSES.map((step, index) => {
        const isActive = index === currentIndex;
        const isComplete = index < currentIndex;
        const className = isActive
          ? 'status-step active'
          : isComplete
          ? 'status-step complete'
          : 'status-step';

        return (
          <span key={step} className={className}>
            {step}
          </span>
        );
      })}
    </div>
  );
}
