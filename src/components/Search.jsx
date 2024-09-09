import { useState } from 'react';

export const Search = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle popup visibility
    const togglePopup = () => {
        console.log("Popup toggled");
        setIsOpen(!isOpen);
    };

    // Handle overlay click to close popup
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("pop-overlay")) {
            setIsOpen(false);
        }
    };

    return (
        <div className="search-right">
            {/* Trigger popup */}
            <span
                className="fa fa-search"
                aria-hidden="true"
                onClick={togglePopup}
                style={{ cursor: "pointer" }}
                aria-label="Open search"
            />

            {/* Conditionally render the popup */}
            {isOpen && (
                <div
                    className="pop-overlay"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                    onClick={handleOverlayClick}
                >
                    <div
                        className="popup"
                        style={{
                            position: "relative",
                            zIndex: 1001,
                        }}
                    >
                        <form action="error.html" method="GET" className="search-box">
                            <input
                                type="search"
                                placeholder="Search"
                                name="search"
                                required
                                autoFocus
                                style={{
                                    padding: "10px",
                                    fontSize: "16px",
                                    width: "80%",
                                    marginBottom: "10px",
                                }}
                            />
                            <button type="submit" className="btn">
                                <span className="fa fa-search" aria-hidden="true" />
                            </button>
                        </form>
                        {/* Close button */}
                        <span
                            className="close"
                            onClick={togglePopup}
                            style={{
                                cursor: "pointer",
                                position: "absolute",

                                right: "10px",
                                fontSize: "24px",
                                fontWeight: "bold",
                            }}
                            aria-label="Close search"
                        >
                            ×
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};
