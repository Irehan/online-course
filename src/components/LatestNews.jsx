import { Link } from "react-router-dom"
export const LatestNews = () => {
    return (
        <>
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
                                    <Link to="/ComingSoon" className="blog-desc">
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
        </>
    )
}