interface NavBarProps {
    navTitle: string;
    aboutTitle: string;
    eventTitle: string;
    rsvpTitle: string;
}

export function NavBar(props: NavBarProps) {
    return (
        <nav id="navBar" className="navbar navbar-expand-lg bg-white py-3">
            <div className="container px-5">
                <span className="fw-bolder text-primary">{props.navTitle}</span>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                {props.aboutTitle}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#event">
                                {props.eventTitle}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#rsvp">
                                {props.rsvpTitle}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
