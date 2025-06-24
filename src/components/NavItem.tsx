interface NavItemProps {
    itemsSection: [string, string, string];
    itemsDescription: [string, string, string];
}

export function NavItem(props: NavItemProps) {
    return (
        <>
            {props.itemsSection.map((section, index) => (
                <li className="nav-item" key={section}>
                    <a className="nav-link" href={`#${section}`}>
                        {props.itemsDescription[index]}
                    </a>
                </li>
            ))}
        </>
    );
}
