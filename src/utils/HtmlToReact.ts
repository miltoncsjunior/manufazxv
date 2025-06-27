import React, { type ReactNode } from 'react';

export function convertDomNodeToReact(node: ChildNode, key: number): ReactNode {
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
