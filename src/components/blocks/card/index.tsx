import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

interface CardProps {
    start_date: string;
    end_date: string;
    title: string;
    category: string;
    className?: string;
    description: string;
    completeAddress?: string;
    secure_url?: string;
    can_register?: boolean;
}

export default function Card(props: CardProps) {
    const { start_date, end_date, secure_url, title, category, description, className = "card card__", completeAddress } = props;

    return (
        <article>
            <div className={className}>
                <figure className="card-img-top image-wrapper">
                    <Link href="#">
                        <Image
                            src={secure_url ?? '/'}
                            alt={title}
                            fill
                            className="card-image"
                        />
                    </Link>
                </figure>

                <div className="card-body">
                    <div className="post-header">
                        <h2 className="post-title h3 mt-1 mb-3">
                            {title}
                        </h2>
                    </div>

                    <div className="post-content">
                        <div
                            className="card-description"
                            dangerouslySetInnerHTML={{ __html: description }}
                        />

                    </div>
                </div>

                <div className="card-footer">
                    <ul className="post-meta d-flex mb-0">
                        <li className="post-date">
                            <i className="uil uil-calendar-alt" />
                            <span>{dayjs(start_date).format("DD MMM YYYY")}</span>
                        </li>

                        <li className="post-date">
                            <i className="uil uil-calendar-alt" />
                            <span>{dayjs(end_date).format("DD MMM YYYY")}</span>
                        </li>

                        <li className="post-comments">
                            {category}
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    );
}
