import { HTMLAttributes } from "react";

// =================================================
interface TilesProps {
  name: string;
  review: string;
  designation: string;
  blockClassName?: HTMLAttributes<HTMLQuoteElement>["className"];
  blockDetailsClassName?: HTMLAttributes<HTMLDivElement>["className"];
}
// =================================================

export default function TilesCard({
  name,
  review,
  designation,
  blockClassName = "icon icon-top fs-lg text-center",
  blockDetailsClassName = "blockquote-details justify-content-center text-center"
}: TilesProps) {
  return (
    <blockquote className={blockClassName}>
      <p>“{review}”</p>

      <div className={blockDetailsClassName}>
        <div className="info ps-0">
          <h5 className="mb-1">{name}</h5>
          <p className="mb-0">{designation}</p>
        </div>
      </div>
    </blockquote>
  );
}
