import { Link } from "react-router-dom"
export const OurTeacher = () => {
    return (
        <>
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
        </>
    )
}