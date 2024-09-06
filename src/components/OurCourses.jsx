import React from 'react'
function OurCourses() {
    return (
        <section className="w3l-courses">
            <div className="blog pb-5" id="courses">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="row">
                        {/* Card 1 */}
                        <div className="col-lg-4 col-md-6 item">
                            <div className="card">
                                <div className="card-header p-0 position-relative">
                                    <a href="#course-single" className="zoom d-block">
                                        <img className="card-img-bottom d-block" src="assets/images/c1.jpg" alt="" />
                                    </a>
                                    <div className="post-pos">
                                        <a href="#reciepe" className="receipe blue">Beginner</a>
                                    </div>
                                </div>
                                <div className="card-body course-details">
                                    <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                                        <p>$35.00</p>
                                        <ul className="rating-star">
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star"></span></li>
                                            <li><span className="fa fa-star-o"></span></li>
                                        </ul>
                                    </div>
                                    <a href="#course-single" className="course-desc">Open Programming Courses for everyone: Python</a>
                                    <div className="course-meta mt-4">
                                        <div className="meta-item course-lesson">
                                            <span className="fa fa-clock-o"></span>
                                            <span className="meta-value"> 20 hrs </span>
                                        </div>
                                        <div className="meta-item course-">
                                            <span className="fa fa-user-o"></span>
                                            <span className="meta-value"> 50 </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="author align-items-center">
                                        <img src="assets/images/a1.jpg" alt="" className="img-fluid rounded-circle" />
                                        <ul className="blog-meta">
                                            <li>
                                                <span className="meta-value mx-1">by</span> <a href="#author"> Olivia</a>
                                            </li>
                                            <li>
                                                <span className="meta-value mx-1">in</span> <a href="#author"> Programming</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Other Cards can follow the same pattern */}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurCourses