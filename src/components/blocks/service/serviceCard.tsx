// ================================================
interface ServiceCardProps {
    title: string;
    Icon: JSX.Element;
    className?: string;
    description: string;
  }
  // ================================================
  
  export default function ServiceCard({ Icon, title, description, className = "d-flex flex-row" }: ServiceCardProps) {
    return (
      <div className={className}>
        <div>{Icon}</div>
  
        <div>
          <h4 className="mb-1">{title}</h4>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    );
  }
  