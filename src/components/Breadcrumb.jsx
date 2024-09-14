import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <section className="w3l-breadcrumb">
            <div className="breadcrumb-bg breadcrumb-bg-about py-5">
                <div className="container pt-lg-5 pt-3 p-lg-4 pb-3">
                    <h2 className="title mt-5 pt-lg-5 pt-sm-3">
                        {pathnames[pathnames.length - 1]?.replace('-', ' ') || 'Home'}
                    </h2>
                    <ul className="breadcrumbs-custom-path pb-sm-5 pb-4 mt-2 text-center mb-5">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        {pathnames.map((name, index) => {
                            const pathTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;

                            return (
                                <li key={index} className={isLast ? 'active' : ''}>
                                    {isLast ? (
                                        <> / {name.replace('-', ' ')}</>
                                    ) : (
                                        <>
                                            {' / '}
                                            <Link to={pathTo}>{name.replace('-', ' ')}</Link>
                                        </>
                                    )}
                                </li>
                            );
                        })}
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
    );
}

export default Breadcrumb;
