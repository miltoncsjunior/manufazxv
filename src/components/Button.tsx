import { Link } from 'react-router-dom';
interface ButtonProps {
    href: string;
    outline?: boolean;
    text: string;
    leftIcon?: string;
    rightIcon?: string;
    onClick?: () => void;
}

export function Button(props: ButtonProps) {
    props = {
        outline: false,
        ...props,
    };

    return (
        <Link
            className={`btn btn-${
                props.outline === false
                    ? 'primary text-white me-sm-3'
                    : 'outline-dark'
            } btn-lg px-5 py-3 fs-6 fw-bolder`}
            to={props.href}
            {...(props.onClick ? { onClick: props.onClick } : {})}
            role="button"
        >
            {props.leftIcon && (
                <i
                    className={`bi bi-${props.leftIcon} me-2 d-inline-block`}
                ></i>
            )}
            {props.text}
            {props.rightIcon && (
                <i
                    className={`bi bi-${props.rightIcon} me-2 d-inline-block`}
                ></i>
            )}
        </Link>
    );
}
