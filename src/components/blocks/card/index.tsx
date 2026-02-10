import { Calendar, Clock, MapPin, CheckCircle, XCircle } from 'lucide-react';
import { capitalizeFirstLetter } from '@/utils/helpers';
import RegistrationModal from '@/events/register';
import { useState } from 'react';

interface Event {
  start_date: string;
  end_date: string;
  title: string;
  category: string;
  description: string;
  completeAddress?: string;
  secure_url?: string;
  can_register?: boolean;
  _id: string;
}

interface EventCardProps {
  event: Event;
}

interface CardProps extends Event {
  className?: string;
}

const RegistrationBadge = ({
  canRegister,
  handleShowModal
}: {
  canRegister?: boolean;
  handleShowModal: () => void;
}) => {
  if (canRegister) {
    return (
      <span
        className="badge bg-success-subtle text-success border border-success-subtle"
        onClick={() => {
          handleShowModal();
        }}
      >
        <CheckCircle size={12} className="me-1"    style={{cursor : 'crosshair'}} /> Open
      </span>
    );
  }

  return (
    <span className="badge bg-secondary-subtle text-secondary border border-secondary-subtle">
      <XCircle size={12} className="me-1" /> Closed
    </span>
  );
};

const EventDateDisplay = ({ date, showIcon = true }: { date: Date; showIcon: boolean }) => (
  <div className="d-flex align-items-center text-muted large">
    {showIcon && <Calendar size={24} className="text-primary me-2" />}

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
        {isMultiDay ? `${formatTime(start)} - ${formatTime(end)}` : `${formatTime(start)} — ${formatTime(end)}`}
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

  return <img src={src} className="card-img-top" alt={alt} style={{ height: '200px', objectFit: 'cover' }} />;
};

const EventDescription = ({ html }: { html: string }) => (
  <div className="card-text text-secondary large flex-grow-1" dangerouslySetInnerHTML={{ __html: html }} />
);

// Main EventCard component
const EventCard = ({ event }: EventCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const startDate = new Date(event.start_date);
  const endDate = new Date(event.end_date);
  const isMultiDay = startDate.toDateString() !== endDate.toDateString();

  return (
    <>
      <div className="col">
        <div className="card h-100 border-1 shadow-sm rounded-4 overflow-hidden position-relative hover-lift">
          <EventImage src={event.secure_url} alt={event.title} />

          <div className="card-body d-flex flex-column p-4">
            <div className="mb-2">
              <RegistrationBadge handleShowModal={() => setShowModal(true)} canRegister={event.can_register} />
            </div>

            <h5 className="card-title fw-bold mb-3">{capitalizeFirstLetter(event.title)}</h5>

            <div className="vstack gap-3 mb-4">
              {isMultiDay ? (
                <div className="d-flex align-items-center gap-2">
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
      <RegistrationModal
        show={showModal}
        onClose={() => setShowModal(false)}
        eventTitle={event.title}
        eventId={event._id}
      />
    </>
  );
};

// Main exported component
export default function Card(props: CardProps) {
  return <EventCard event={props} />;
}
