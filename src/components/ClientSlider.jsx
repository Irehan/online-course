/* global $ */
import React, { useEffect } from 'react';
const ClientSlider = () => {
    useEffect(() => {
        const initializeCarousel = () => {
            $("#owl-demo1").owlCarousel({
                loop: true,
                margin: 20,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        nav: false
                    },
                    768: {
                        items: 2,
                        nav: false
                    },
                    1000: {
                        items: 3,
                        nav: false,
                        loop: false
                    }
                }
            });
        };
        initializeCarousel();
        $(".owl-carousel").trigger('refresh.owl.carousel');
        return () => {
            $(".owl-carousel").trigger('destroy.owl.carousel');
        };
    }, []);
    return (
        <>
            <section className="w3l-testimonials" id="clients">
                <div className="cusrtomer-layout py-5">
                    <div className="container py-lg-4 py-md-3 pb-lg-0">
                        <h5 className="title-small text-center mb-1">Testimonials</h5>
                        <h3 className="title-big text-center mb-sm-5 mb-4">
                            Happy Clients &amp; Feedbacks
                        </h3>
                        <div className="testimonial-width">
                            <div id="owl-demo1" className="owl-two owl-carousel owl-theme">
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>
                                                    Lorem ipsum dolor sit amet elit. Velit beatae laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi,
                                                    doloribus tempora. Dolores molestias adipisci dolo
                                                    amet!.
                                                </q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img
                                                        src="assets/images/team1.jpg"
                                                        className="img-fluid"
                                                        alt="A description of the example"
                                                    />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>John wilson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>
                                                    Lorem ipsum dolor sit amet elit. Velit beatae laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi,
                                                    doloribus tempora. Dolores molestias adipisci dolo
                                                    amet!.
                                                </q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img
                                                        src="assets/images/team2.jpg"
                                                        className="img-fluid"
                                                        alt="A description of the example"
                                                    />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Julia sakura</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>
                                                    Lorem ipsum dolor sit amet elit. Velit beatae laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi,
                                                    doloribus tempora. Dolores molestias adipisci dolo
                                                    amet!.
                                                </q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img
                                                        src="assets/images/team3.jpg"
                                                        className="img-fluid"
                                                        alt="A description of the example"
                                                    />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Roy Linderson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>
                                                    Lorem ipsum dolor sit amet elit. Velit beatae laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi,
                                                    doloribus tempora. Dolores molestias adipisci dolo
                                                    amet!.
                                                </q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img
                                                        src="assets/images/team4.jpg"
                                                        className="img-fluid"
                                                        alt="A description of the example"
                                                    />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Mike Thyson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>
                                                    Lorem ipsum dolor sit amet elit. Velit beatae laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi,
                                                    doloribus tempora. Dolores molestias adipisci dolo
                                                    amet!.
                                                </q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img
                                                        src="assets/images/team2.jpg"
                                                        className="img-fluid"
                                                        alt="A description of the example"
                                                    />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Laura gill</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>
                                                    Lorem ipsum dolor sit amet elit. Velit beatae laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi,
                                                    doloribus tempora. Dolores molestias adipisci dolo
                                                    amet!.
                                                </q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img
                                                        src="assets/images/team3.jpg"
                                                        className="img-fluid"
                                                        alt="A description of the example"
                                                    />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Smith Johnson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>
                                                    Lorem ipsum dolor sit amet elit. Velit beatae laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi,
                                                    doloribus tempora. Dolores molestias adipisci dolo
                                                    amet!.
                                                </q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img
                                                        src="assets/images/team2.jpg"
                                                        className="img-fluid"
                                                        alt="A description of the example"
                                                    />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Laura gill</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>
                                                    Lorem ipsum dolor sit amet elit. Velit beatae laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi,
                                                    doloribus tempora. Dolores molestias adipisci dolo
                                                    amet!.
                                                </q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img">
                                                    <img
                                                        src="assets/images/team3.jpg"
                                                        className="img-fluid"
                                                        alt="A description of the example"
                                                    />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Smith Johnson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ClientSlider