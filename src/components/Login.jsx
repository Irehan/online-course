import { useState } from 'react';

export const Login = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle popup visibility
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    // Handle overlay click to close popup
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains("pop-overlay")) {
            setIsOpen(false);
        }
    };

    return (
        <div className="top-quote mr-lg-2 text-center">
            {/* Login Button */}
            <a
                href="#login"
                className="btn login mr-2"
                onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    togglePopup();
                }}
            >
                <span className="fa fa-user" /> login
            </a>

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
                            backgroundColor: "#fff",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            position: "relative",
                            zIndex: 1001,
                        }}
                    >
                        <h2>Login</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                // Handle form submission (e.g., display a message or validate inputs)
                                alert('Login functionality not implemented.');
                            }}
                            className="login-form"
                        >
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Enter your username"
                                required
                                style={{
                                    padding: "10px",
                                    fontSize: "16px",
                                    width: "100%",
                                    marginBottom: "10px",
                                }}
                            />
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                style={{
                                    padding: "10px",
                                    fontSize: "16px",
                                    width: "100%",
                                    marginBottom: "10px",
                                }}
                            />
                            <button type="submit" className="btn">
                                Login
                            </button>
                        </form>
                        {/* Close button */}
                        <span
                            className="close"
                            onClick={togglePopup}
                            style={{
                                cursor: "pointer",
                                position: "absolute",
                                top: "10px",
                                right: "10px",
                                fontSize: "24px",
                                fontWeight: "bold",
                            }}
                            aria-label="Close login popup"
                        >
                            ×
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};
