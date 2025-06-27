export interface CardProps {
    period: { start: string; end?: string };
    title: string;
    subTitle: string;
    description: string;
}

export function Card(props: CardProps) {
    return (
        <div className="card shadow border-0 rounded-4 mb-5">
            <div className="card-body p-5">
                <div className="row align-items-center gx-5">
                    <div className="col text-center text-lg-start mb-4 mb-lg-0">
                        <div className="bg-light p-4 rounded-4">
                            <div className="text-primary fw-bolder mb-2">
                                {props.period.start}{' '}
                                {props.period.end && ` - ${props.period.end}`}
                            </div>
                            <div className="small fw-bolder">{props.title}</div>
                            <div className="small text-muted">
                                {props.subTitle}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div>{props.description}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
