import React, { type ReactNode } from 'react';

interface RenderHtmlStringProps {
    html: string;
}

const RenderHtmlString: React.FC<RenderHtmlStringProps> = ({ html }) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const nodes = Array.from(doc.body.childNodes);

    const reactElements = nodes.map((node, index) =>
        convertDomNodeToReact(node, index),
    );

    return <>{reactElements}</>;
};

function convertDomNodeToReact(node: ChildNode, key: number): ReactNode {
    if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
    }

    if (node.nodeType !== Node.ELEMENT_NODE) {
        return null;
    }

    const element = node as Element;

    const props: Record<string, unknown> = { key };
    for (const attr of Array.from(element.attributes)) {
        const name = attr.name === 'class' ? 'className' : attr.name;
        props[name] = attr.value;
    }

    const children: ReactNode[] = Array.from(element.childNodes).map(
        (child, index) => convertDomNodeToReact(child, index),
    );

    const type = element.tagName.toLowerCase();
    return React.createElement(type, props, ...children);
}

export default RenderHtmlString;
