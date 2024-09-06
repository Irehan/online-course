/* global $ */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BannerSlider = () => {
    useEffect(() => {
        const initializeCarousel = () => {
            $(".owl-one").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplaySpeed: 1000,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    667: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        };
        initializeCarousel();

        $(".owl-one").trigger('refresh.owl.carousel');

        return () => {
            $(".owl-one").trigger('destroy.owl.carousel');
        };
    }, []);

    return (
        <section className="w3l-main-slider" id="home">
            <div className="companies20-content">
                <div className="owl-one owl-carousel owl-theme">
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>50% Discount on all Popular Courses</h5>
                                            <p className="mt-4 pr-lg-4">
                                                Take the first step to your journey to success with us
                                            </p>
                                            <Link
                                                className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                                                to="/about"
                                            >

                                                Ready to get started?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info  banner-view banner-top1 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Learn and Improve Yourself in Less Time </h5>
                                            <p className="mt-4 pr-lg-4">
                                                Our self improvement courses is very effective
                                            </p>
                                            <Link
                                                className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                                                to="/about"
                                            >
                                                Ready to get started?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top2 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Be More Productive to Be More Successful</h5>
                                            <p className="mt-4 pr-lg-4">
                                                Don't waste your time, check out our productive courses
                                            </p>
                                            <Link
                                                className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                                                to="/about"
                                            >
                                                Ready to get started?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
                    <div className="item">
                        <li>
                            <div className="slider-info banner-view banner-top3 bg bg2">
                                <div className="banner-info">
                                    <div className="container">
                                        <div className="banner-info-bg">
                                            <h5>Enhance your skills with best online courses</h5>
                                            <p className="mt-4 pr-lg-4">
                                                Take the first step to your journey to success with us
                                            </p>
                                            <Link
                                                className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2"
                                                to="/about"
                                            >

                                                Ready to get started?
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </div>
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
};

export default BannerSlider;
