interface NavItemProps {
    sectionItems: {
        sectionName: string;
        shortcutText: string;
    }[];
}

export function NavItem(props: NavItemProps) {
    return (
        <>
            {props.sectionItems.map((item, index) => (
                <li className="nav-item" key={index}>
                    <a className="nav-link" href={`#${item.sectionName}`}>
                        {item.shortcutText}
                    </a>
                </li>
            ))}
        </>
    );
}
