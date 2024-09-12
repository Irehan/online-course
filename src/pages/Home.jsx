import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Link } from 'react-router-dom'
import BannerSlider from '../components/BannerSlider'
import ClientSlider from '../components/ClientSlider'
import MoveToTop from '../components/MoveToTop'
import CoursesList from '../components/CoursesList'
export const Home = () => (
    <>
        <Header />
        <div>
            <BannerSlider />
        </div>
        <section className="w3l-courses">
            <div className="blog pb-5" id="courses">
                <div className="container py-lg-5 py-md-4 py-2">
                    <h5 className="title-small text-center mb-1">
                        Join our learn Courses
                    </h5>
                    <h3 className="title-big text-center mb-sm-5 mb-4">
                        Featured Online <span>Courses</span>
                    </h3>
                    <div className="row">
                        <CoursesList />
                        <CoursesList />
                    </div>
                    <div className="mt-5 text-more">
                        <p className="pt-md-3 sample text-center">
                            Control your personal preference settings to get notified about
                            appropriate courses
                            <Link to="/courses">
                                View All Courses{" "}
                                <span className="pl-2 fa fa-long-arrow-right" />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="w3l-features py-5" id="facilities">
            <div className="call-w3 py-lg-5 py-md-4 py-2">
                <div className="container">
                    <div className="row main-cont-wthree-2">
                        <div className="col-lg-5 feature-grid-left">
                            <h5 className="title-small mb-1">Study and graduate</h5>
                            <h3 className="title-big mb-4">Our Facilities </h3>
                            <p className="text-para">
                                Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
                                nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis
                                eros et, commodo risus. Nullam sit amet laoreet elit.
                                Suspendisse non magna a velit efficitur.{" "}
                            </p>
                            <p className="mt-3">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptas ab qui impedit, libero illo quia sequi quibusdam iure.
                                Error minus quod reprehenderit quae dolor velit soluta animi
                                voluptate dicta enim? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odio, provident!
                            </p>
                            <Link to="#url" className="btn btn-primary btn-style mt-md-5 mt-4">
                                Discover More
                            </Link>
                        </div>
                        <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                            <div className="call-grids-w3 d-grid">
                                <div className="grids-1 box-wrap">
                                    <Link to="#more" className="icon">
                                        <span className="fa fa-certificate" />
                                    </Link>
                                    <h4>
                                        <Link to="#feature" className="title-head">
                                            Global Certificate
                                        </Link>
                                    </h4>
                                    <p>
                                        Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                                        doloramet laoreet.
                                    </p>
                                </div>
                                <div className="grids-1 box-wrap">
                                    <Link to="#more" className="icon">
                                        <span className="fa fa-book" />
                                    </Link>
                                    <h4>
                                        <Link to="#feature" className="title-head">
                                            Books &amp; Library
                                        </Link>
                                    </h4>
                                    <p>
                                        Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor
                                        amet laoreet.
                                    </p>
                                </div>
                                <div className="grids-1 box-wrap">
                                    <Link to="#more" className="icon">
                                        <span className="fa fa-trophy" />
                                    </Link>
                                    <h4>
                                        <Link to="#feature" className="title-head">
                                            Scholarship
                                        </Link>
                                    </h4>
                                    <p>
                                        Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor
                                        amet laoreet.
                                    </p>
                                </div>
                                <div className="grids-1 box-wrap">
                                    <Link to="#more" className="icon">
                                        <span className="fa fa-graduation-cap" />
                                    </Link>
                                    <h4>
                                        <Link to="#feature" className="title-head">
                                            Alumni Support
                                        </Link>
                                    </h4>
                                    <p>
                                        Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor
                                        amet laoreet.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="w3l-homeblock3 py-5">
            <div className="container py-lg-5 py-md-4 py-2">
                <h5 className="title-small text-center mb-1">From the news</h5>
                <h3 className="title-big text-center mb-sm-5 mb-4">
                    Latest <span>News</span>
                </h3>
                <div className="row top-pics">
                    <div className="col-md-6">
                        <div className="top-pic1">
                            <div className="card-body blog-details">
                                <Link to="#blog-single" className="blog-desc">
                                    Enhance your educational skills and also experience with best
                                    online courses
                                </Link>
                                <div className="author align-items-center">
                                    <img
                                        src="assets/images/team1.jpg"
                                        alt="A description of the example"
                                        className="img-fluid rounded-circle"
                                    />
                                    <ul className="blog-meta">
                                        <li>
                                            <Link to="#author">Isabella ava</Link>
                                        </li>
                                        <li className="meta-item blog-lesson">
                                            <span className="meta-value"> Nov 19, 2020 </span>.{" "}
                                            <span className="meta-value ml-2">
                                                <span className="fa fa-clock-o" /> 1 min
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-4">
                        <div className="top-pic2">
                            <div className="card-body blog-details">
                                <Link to="#blog-single" className="blog-desc">
                                    Be more productive to be more Successful. Take your first
                                    jouney
                                </Link>
                                <div className="author align-items-center">
                                    <img
                                        src="assets/images/team2.jpg"
                                        alt="A description of the example"
                                        className="img-fluid rounded-circle"
                                    />
                                    <ul className="blog-meta">
                                        <li>
                                            <Link to="#author">Charlotte mia</Link>
                                        </li>
                                        <li className="meta-item blog-lesson">
                                            <span className="meta-value"> Nov 19, 2020 </span>.{" "}
                                            <span className="meta-value ml-2">
                                                <span className="fa fa-clock-o" /> 1 min
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="top-pic3">
                                <div className="card-body blog-details">
                                    <Link to="#blog-single" className="blog-desc">
                                        {" "}
                                        Our self improvement courses are more effective. Start
                                        leaarning online
                                    </Link>
                                    <div className="author align-items-center">
                                        <img
                                            src="assets/images/team3.jpg"
                                            alt="A description of the example"
                                            className="img-fluid rounded-circle"
                                        />
                                        <ul className="blog-meta">
                                            <li>
                                                <Link to="#author">Elizabeth</Link>
                                            </li>
                                            <li className="meta-item blog-lesson">
                                                <span className="meta-value"> Nov 19, 2020 </span>.{" "}
                                                <span className="meta-value ml-2">
                                                    <span className="fa fa-clock-o" /> 1 min
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-md-5 mt-4 text-more text-center">
                    <Link to="/blog">
                        View All Posts <span className="pl-2 fa fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
        <div className="middle py-5">
            <div className="container py-lg-5 py-md-4 py-2">
                <div className="welcome-left text-center py-lg-4">
                    <h5 className="title-small mb-1">Start learning online</h5>
                    <h3 className="title-big">
                        Enhance your skills with best online courses
                    </h3>
                    <Link
                        to="/started"
                        className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                    >
                        Get started now
                    </Link>
                    <Link
                        to="/contact"
                        className="btn btn-style btn-primary mt-sm-5 mt-4"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
        <section className="w3l-team py-5" id="team">
            <div className="call-w3 py-lg-5 py-md-4">
                <div className="container">
                    <div className="row main-cont-wthree-2">
                        <div className="col-lg-5 feature-grid-left">
                            <h5 className="title-small mb-1">Experienced professionals</h5>
                            <h3 className="title-big mb-4">Meet our teachers</h3>
                            <p className="text-para">
                                Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
                                nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis
                                eros et, commodo risus. Nullam sit amet laoreet elit.
                                Suspendisse non magna a velit efficitur.{" "}
                            </p>
                            <p className="mt-3">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Voluptas ab qui impedit, libero illo quia sequi quibusdam iure.
                                Error minus quod reprehenderit quae dolor velit soluta animi
                                voluptate dicta enim? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Odio, provident!
                            </p>
                            <Link to="#url" className="btn btn-primary btn-style mt-md-5 mt-4">
                                Discover More
                            </Link>
                        </div>
                        <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="box16">
                                        <Link to="#url">
                                            <img
                                                src="assets/images/team1.jpg"
                                                alt="A description of the example"
                                                className="img-fluid radius-image"
                                            />
                                        </Link>
                                        <div className="box-content">
                                            <h3 className="title">
                                                <Link to="#url">James</Link>
                                            </h3>
                                            <span className="post">Director</span>
                                            <ul className="social">
                                                <li>
                                                    <Link to="#" className="facebook">
                                                        <span className="fa fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="twitter">
                                                        <span className="fa fa-twitter" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mt-sm-0 mt-3">
                                    <div className="box16">
                                        <Link to="#url">
                                            <img
                                                src="assets/images/team2.jpg"
                                                alt="A description of the example"
                                                className="img-fluid radius-image"
                                            />
                                        </Link>
                                        <div className="box-content">
                                            <h3 className="title">
                                                <Link to="#url">Victoria</Link>
                                            </h3>
                                            <span className="post">Managing Director</span>
                                            <ul className="social">
                                                <li>
                                                    <Link to="#" className="facebook">
                                                        <span className="fa fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="twitter">
                                                        <span className="fa fa-twitter" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mt-lg-4 mt-3">
                                    <div className="box16">
                                        <Link to="#url">
                                            <img
                                                src="assets/images/team3.jpg"
                                                alt="A description of the example"
                                                className="img-fluid radius-image"
                                            />
                                        </Link>
                                        <div className="box-content">
                                            <h3 className="title">
                                                <Link to="#url">Isabella</Link>
                                            </h3>
                                            <span className="post">Teacher</span>
                                            <ul className="social">
                                                <li>
                                                    <Link to="#" className="facebook">
                                                        <span className="fa fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="twitter">
                                                        <span className="fa fa-twitter" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 mt-lg-4 mt-3">
                                    <div className="box16">
                                        <Link to="#url">
                                            <img
                                                src="assets/images/team4.jpg"
                                                alt="A description of the example"
                                                className="img-fluid radius-image"
                                            />
                                        </Link>
                                        <div className="box-content">
                                            <h3 className="title">
                                                <Link to="#url">Elizabeth</Link>
                                            </h3>
                                            <span className="post">Teacher</span>
                                            <ul className="social">
                                                <li>
                                                    <Link to="#" className="facebook">
                                                        <span className="fa fa-facebook-f" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="#" className="twitter">
                                                        <span className="fa fa-twitter" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ClientSlider />
        <section className="w3l-clients py-5" id="clients">
            <div className="call-w3 py-md-4 py-2">
                <div className="container">
                    <div className="company-logos text-center">
                        <div className="row logos">
                            <div className="col-lg-2 col-md-3 col-4">
                                <img
                                    src="assets/images/brand1.png"
                                    alt="A description of the example"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-2 col-md-3 col-4">
                                <img
                                    src="assets/images/brand2.png"
                                    alt="A description of the example"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-2 col-md-3 col-4">
                                <img
                                    src="assets/images/brand3.png"
                                    alt="A description of the example"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                                <img
                                    src="assets/images/brand4.png"
                                    alt="A description of the example"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                                <img
                                    src="assets/images/brand5.png"
                                    alt="A description of the example"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                                <img
                                    src="assets/images/brand6.png"
                                    alt="A description of the example"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <MoveToTop />
        <Footer />
    </>
)
