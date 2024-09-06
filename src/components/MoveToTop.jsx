import { useEffect, useRef } from 'react';
function MoveToTop() {
    const moveTopRef = useRef(null);
    useEffect(() => {
        const scrollFunction = () => {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                if (moveTopRef.current) {
                    moveTopRef.current.style.display = 'block';
                }
            } else {
                if (moveTopRef.current) {
                    moveTopRef.current.style.display = 'none';
                }
            }
        };
        window.onscroll = scrollFunction;
        return () => {
            window.onscroll = null;
        };
    }, []);

    const scrollToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
    return (
        <div>
            <button
                ref={moveTopRef}
                onClick={scrollToTop}
                style={{
                    display: 'none',
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 99,
                    fontSize: '18px',
                    border: 'none',
                    outline: 'none',
                    cursor: 'pointer',
                    color: '#fff',
                    width: '50px',
                    height: '50px',
                    background: 'var(--primary-color)',  // CSS variable
                    padding: '0',
                    lineHeight: '36px',
                    borderRadius: '35px',
                    transition: '0.3s ease-out',
                }}
                id="movetop"
            >
                &#10548;
            </button>
        </div>
    )
}
export default MoveToTop