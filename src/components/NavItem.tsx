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
                    <a
                        className="nav-link"
                        href={`#section_${item.sectionName}`}
                    >
                        {item.shortcutText}
                    </a>
                </li>
            ))}
        </>
    );
}
