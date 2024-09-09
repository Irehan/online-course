import React, { useState } from 'react';

export function ContactForm() {
    const [formData, setFormData] = useState({
        w3lName: '',
        w3lSender: '',
        w3lSubject: '',
        w3lMessage: ''
    });

    const [responseMessage, setResponseMessage] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent page reload on form submission

        try {
            const response = await fetch('https://formcarry.com/s/xfChJHlitlR', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setResponseMessage('Thank you! Your message has been sent.');
                setFormData({ w3lName: '', w3lSender: '', w3lSubject: '', w3lMessage: '' });
            } else {
                setResponseMessage('Oops! Something went wrong. Please try again.');
            }
        } catch (error) {
            setResponseMessage('Error: Unable to send your message. Please check your internet connection.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="twice-two">
                    <input
                        type="text"
                        className="form-control"
                        name="w3lName"
                        id="w3lName"
                        placeholder="Name"
                        value={formData.w3lName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        className="form-control"
                        name="w3lSender"
                        id="w3lSender"
                        placeholder="Email"
                        value={formData.w3lSender}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="twice">
                    <input
                        type="text"
                        className="form-control"
                        name="w3lSubject"
                        id="w3lSubject"
                        placeholder="Subject"
                        value={formData.w3lSubject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <textarea
                    name="w3lMessage"
                    className="form-control"
                    id="w3lMessage"
                    placeholder="Message"
                    value={formData.w3lMessage}
                    onChange={handleChange}
                    required
                ></textarea>
                <div className="text-right">
                    <button type="submit" className="btn btn-primary btn-style mt-4">Send Message</button>
                </div>
                {responseMessage && <p>{responseMessage}</p>}
            </form>
        </>
    );
}
