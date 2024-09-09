import { useState } from 'react';

export const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle popup visibility
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="search-right">
            {/* Instead of using href, use an onClick handler */}
            <span className="fa fa-search" aria-hidden="true" onClick={togglePopup} />

            {/* Conditionally render the popup */}
            {isOpen && (
                <div className="pop-overlay">
                    <div className="popup">
                        <form action="error.html" method="GET" className="search-box">
                            <input
                                type="search"
                                placeholder="Search"
                                name="search"
                                required="required"
                                autoFocus
                            />
                            <button type="submit" className="btn">
                                <span className="fa fa-search" aria-hidden="true" />
                            </button>
                        </form>
                        {/* Close button */}
                        <span className="close" onClick={togglePopup}>
                            ×
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};