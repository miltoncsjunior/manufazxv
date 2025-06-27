import { convertDomNodeToReact } from '../utils/HtmlToReact';

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

export default RenderHtmlString;
