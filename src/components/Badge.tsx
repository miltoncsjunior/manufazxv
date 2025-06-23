interface BadgeProps {
    values: string[];
}

export function Badge(props: BadgeProps) {
    return (
        <>
            {props.values.map((value, index) => (
                <span
                    className="badge bg-gradient-primary-to-secondary text-white text-uppercase me-1"
                    key={index}
                >
                    {value}
                </span>
            ))}
        </>
    );
}
