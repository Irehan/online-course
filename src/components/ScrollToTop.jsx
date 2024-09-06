import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation(); // Get current path

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on route change
    }, [pathname]); // Run effect when pathname changes

    return null; // This component does not render anything
};

export default ScrollToTop;
