import { Link } from "react-router-dom";

export const Footer = () => (
    <section className="w3l-footer-29-main">
        <div className="footer-29 py-5">
            <div className="container py-md-4">
                <div className="row footer-top-29">
                    <div className="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
                        <h6 className="footer-title-29">Contact Info </h6>
                        <p>
                            Address : Study course, 343 marketing, #2214 cravel street, NY -
                            62617.
                        </p>
                        <p className="my-2">
                            Phone : <a href="tel:+1(21) 234 4567">+1(21) 234 4567</a>
                        </p>
                        <p>
                            Email : <a href="mailto:info@example.com">info@example.com</a>
                        </p>
                        <div className="main-social-footer-29 mt-4">
                            <a href="#facebook" className="facebook">
                                <span className="fa fa-facebook" />
                            </a>
                            <a href="#twitter" className="twitter">
                                <span className="fa fa-twitter" />
                            </a>
                            <a href="#instagram" className="instagram">
                                <span className="fa fa-instagram" />
                            </a>
                            <a href="#linkedin" className="linkedin">
                                <span className="fa fa-linkedin" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">
                        <ul>
                            <h6 className="footer-title-29">Company</h6>
                            <li>
                                <Link to="/about">About company</Link>
                            </li>
                            <li>
                                <Link to="/blog"> Latest Blog posts</Link>
                            </li>
                            <li>
                                <Link to="/teacher"> Became a teacher </Link>
                            </li>
                            <li>
                                <Link to="/courses">Online Courses</Link>
                            </li>
                            <li>
                                <Link to="/contact"> Get in touch </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                        <h6 className="footer-title-29">Programs</h6>
                        <ul>
                            <li>
                                <Link to="/traning">Training Center</Link>
                            </li>
                            <li>
                                <Link to="/documentation">Documentation</Link>
                            </li>
                            <li>
                                <Link to="/release">Release Status</Link>
                            </li>
                            <li>
                                <Link to="/customers"> Customers</Link>
                            </li>
                            <li>
                                <Link to="/helpcenter"> Help Center</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                        <h6 className="footer-title-29">Suppport</h6>
                        <a href="#playstore">
                            <img
                                src="assets/images/googleplay.png"
                                className="img-responsive"
                                alt="A description of the example"
                            />
                        </a>
                        <a href="#appstore">
                            <img
                                src="assets/images/appstore.png"
                                className="img-responsive mt-3"
                                alt="A description of the example"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <section className="w3l-copyright text-center">
            <div className="container">
                <p className="copy-footer-29">
                    © 2024 Study Course. All rights reserved. <span> <a href="https://www.alirehanhaider.com/" target="_blank" rel="noreferrer"> Powered by ARH </a> </span>
                </p>
            </div>

        </section>

    </section>
)
