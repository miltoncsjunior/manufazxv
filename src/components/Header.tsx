import { Badge } from './Badge';

type HeaderProps = {
    profileImage: string;
    profileTags: string[];
    title: string;
    subtitle: string;
    btnText: [string, string];
};

export function Header(props: HeaderProps) {
    return (
        <header>
            <div className="container px-5 pb-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xxl-7">
                        <div className="d-flex justify-content-center">
                            <div className="profile bg-gradient-primary-to-secondary">
                                <img
                                    src={props.profileImage}
                                    className="profile-img"
                                    alt="Profile Image"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-5">
                        <div className="text-center text-xxl-start">
                            <Badge values={props.profileTags} />
                            <h1 className="display-3 fw-bolder mb-2">
                                <span className="text-gradient d-inline">
                                    {props.title}
                                </span>
                            </h1>
                            <div className="fs-3 mb-5 fw-light text-muted">
                                {props.subtitle}
                            </div>
                            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                                <a
                                    className="btn btn-primary btn-lg text-white px-5 py-3 me-sm-3 fs-6 fw-bolder"
                                    href="#event"
                                >
                                    {props.btnText[0]}
                                </a>
                                <a
                                    className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                                    href="#rsvp"
                                >
                                    {props.btnText[1]}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
