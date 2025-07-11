import { Link } from 'react-router-dom';
interface AboutProps {
    description: string;
    socialMedias?: {
        icon: string;
        link: string;
    }[];
}

export function About(props: AboutProps) {
    return (
        <>
            <p className="text-muted">{props.description}</p>
            <div className="d-flex justify-content-center fs-2 gap-4">
                {props.socialMedias?.map((media, index) => (
                    <Link key={index} className="text-gradient" to={media.link}>
                        <i className={`bi bi-${media.icon}`}></i>
                    </Link>
                ))}
            </div>
        </>
    );
}
