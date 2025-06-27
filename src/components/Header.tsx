import { Badge } from './Badge';
import { Button } from './Button';

interface HeaderProps {
    personImage: string;
    personTags: string[];
    title: string;
    subtitle: string;
    btnsText: { section: string; description: string }[];
}

export function Header(props: HeaderProps) {
    return (
        <header>
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xxl-7">
                        <div className="d-flex justify-content-center">
                            <div className="person bg-gradient-primary-to-secondary">
                                <img
                                    src={props.personImage}
                                    alt="Person Image"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-5">
                        <div className="text-center text-xxl-start">
                            <Badge values={props.personTags} />
                            <h1 className="display-3 fw-bolder mb-2">
                                <span className="text-gradient d-inline">
                                    {props.title}
                                </span>
                            </h1>
                            <div className="fs-3 mb-5 fw-light text-muted">
                                {props.subtitle}
                            </div>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                {props.btnsText.map((btn, index) => (
                                    <Button
                                        key={index}
                                        outline={index > 0}
                                        href={`#section_${btn.section}`}
                                        text={btn.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
