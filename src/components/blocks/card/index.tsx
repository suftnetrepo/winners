import { Calendar, Clock, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { capitalizeFirstLetter } from "@/utils/helpers";

interface Event {
  start_date: string;
  end_date: string;
  title: string;
  category: string;
  description: string;
  completeAddress?: string;
  secure_url?: string;
  can_register?: boolean;
}

interface EventCardProps {
  event: Event;
}

interface CardProps extends Event {
  className?: string;
}

// Separate helper components
const RegistrationBadge = ({ canRegister }: { canRegister?: boolean }) => {
  if (canRegister) {
    return (
      <span className="badge bg-success-subtle text-success border border-success-subtle">
        <CheckCircle size={12} className="me-1" /> Open
      </span>
    );
  }

  return (
    <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle">
      <XCircle size={12} className="me-1" /> Closed
    </span>
  );
};

const EventDateDisplay = ({ date, showIcon = true }: { date: Date, showIcon: boolean }) => (
  <div className="d-flex align-items-center text-muted large">
    {
      showIcon && (
        <Calendar size={24} className="text-primary me-2" />
      )
    }

    <span>
      {date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      })}
    </span>
  </div>
);

const EventLocation = ({ address }: { address?: string }) => {
  if (!address) return null;

  return (
    <div className="d-flex align-items-center text-muted large">
      <MapPin size={24} className="text-primary me-2" />
      <span>{address}</span>
    </div>
  );
};

const EventTimeDisplay = ({ event }: { event: Event }) => {
  const start = new Date(event.start_date);
  const end = new Date(event.end_date);

  const isMultiDay = start.toDateString() !== end.toDateString();

  const formatTime = (date: Date) =>
    date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

  return (
    <div className="d-flex align-items-center text-muted large">
      <Clock size={24} className="text-primary me-2" />
      <span>
        {isMultiDay
          ? `${formatTime(start)} - ${formatTime(end)}`
          : `${formatTime(start)} — ${formatTime(end)}`}
      </span>
    </div>
  );
};

const EventImage = ({ src, alt }: { src?: string; alt: string }) => {
  if (!src) {
    return (
      <div
        className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
        style={{ height: '200px' }}
      >
        <span className="text-white">No Image</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      className="card-img-top"
      alt={alt}
      style={{ height: '200px', objectFit: 'cover' }}
    />
  );
};

const EventDescription = ({ html }: { html: string }) => (
  <div
    className="card-text text-secondary large flex-grow-1"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

// Main EventCard component
const EventCard = ({ event }: EventCardProps) => {
  const startDate = new Date(event.start_date);
  const endDate = new Date(event.end_date);
  const isMultiDay = startDate.toDateString() !== endDate.toDateString();

  return (
    <div className="col">
      <div className="card h-100 border-1 shadow-sm rounded-4 overflow-hidden position-relative hover-lift">
        <EventImage src={event.secure_url} alt={event.title} />

        <div className="card-body d-flex flex-column p-4">
          <div className="mb-2">
            <RegistrationBadge canRegister={event.can_register} />
          </div>

          <h5 className="card-title fw-bold mb-3">
            {capitalizeFirstLetter(event.title)}
          </h5>

          <div className="vstack gap-3 mb-4">
            {isMultiDay ? (
              <div className='d-flex align-items-center gap-2'>
                <EventDateDisplay date={startDate} showIcon={true} /> -
                <EventDateDisplay date={endDate} showIcon={false} />
              </div>
            ) : (
              <EventDateDisplay date={startDate} showIcon={true} />
            )}

            <EventTimeDisplay event={event} />
            <EventLocation address={event.completeAddress} />
          </div>

          <EventDescription html={event.description} />
        </div>
      </div>
    </div>
  );
};

// Main exported component
export default function Card(props: CardProps) {
  return <EventCard event={props} />;
}

// Optional: Add prop validation
EventCard.defaultProps = {
  event: {
    can_register: false,
    secure_url: undefined,
    completeAddress: undefined
  }
};