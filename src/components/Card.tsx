interface CardProps {
    left: {
        period: [string, string];
        title: string;
        subtitle: string;
    };
    right: {
        text: string;
    };
}

export function Card(props: CardProps) {
    return (
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-primary fw-bolder mb-2">
                                {props.left.period[0]} - {props.left.period[1]}
                            </div>
                            <div className="small fw-bolder">
                                {props.left.title}
                            </div>
                            <div className="small text-muted">
                                {props.left.subtitle}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>{props.right.text}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
