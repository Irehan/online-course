import React from 'react'
import { Link } from 'react-router-dom';

function Breadcrumb() {
    return (
        <section className="w3l-breadcrumb">
            <div className="breadcrumb-bg breadcrumb-bg-about py-5">
                <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
                    <h2 className="title mt-5 pt-lg-5 pt-sm-3">About Company</h2>
                    <ul className="breadcrumbs-custom-path pb-sm-5 pb-4 mt-2 text-center mb-5">
                        <li>
                            <Link to="/">Home</Link> {/* Use Link instead of anchor tag */}
                        </li>
                        <li className="active"> / About us </li>
                    </ul>
                </div>
            </div>
            <div className="waveWrapper waveAnimation">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                    <path
                        d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: "none" }}
                    />
                </svg>
            </div>
        </section>
    )
}

export default Breadcrumb