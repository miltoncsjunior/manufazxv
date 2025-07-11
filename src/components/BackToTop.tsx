import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';

export function BackToTop() {
    useEffect(() => {
        const btn = document.getElementById('topButton');
        const handleScroll = () => {
            if (!btn) return;
            btn.style.display = window.scrollY > 200 ? 'block' : 'none';
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <HashLink
            id="topButton"
            smooth
            to="#top"
            className="btn btn-secondary rounded-circle position-fixed text-white"
            style={{
                bottom: '30px',
                right: '30px',
                display: 'none',
                zIndex: 1000,
            }}
        >
            <i className="bi bi-arrow-up"></i>
        </HashLink>
    );
}
