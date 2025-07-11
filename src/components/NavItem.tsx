import { NavHashLink } from 'react-router-hash-link';

interface NavItemProps {
    items: {
        sectionName: string;
        shortcutText: string;
    }[];
}

export function NavItem(props: NavItemProps) {
    return (
        <>
            {props.items.map((item, index) => (
                <li className="nav-item" key={index}>
                    <NavHashLink
                        className="nav-link"
                        smooth
                        to={`#section_${item.sectionName}`}
                    >
                        {item.shortcutText}
                    </NavHashLink>
                </li>
            ))}
        </>
    );
}
