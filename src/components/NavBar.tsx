import { NavItem } from './NavItem';

interface NavBarProps {
    title: string;
    itemsDescription: string[];
}

export function NavBar(props: NavBarProps) {
    return (
        <nav id="navBar" className="navbar navbar-expand-lg bg-white py-3">
            <div className="container px-5">
                <span className="fw-bolder text-primary">{props.title}</span>
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
                        <NavItem
                            itemsSection={['about', 'event', 'rsvp']}
                            itemsDescription={[
                                props.itemsDescription[0],
                                props.itemsDescription[1],
                                props.itemsDescription[2],
                            ]}
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
}
