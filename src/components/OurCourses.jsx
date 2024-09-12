// OurCourses.jsx
import React from 'react';

function OurCourses({ image, title, price, duration, students, level, rating, author, authorImg, category }) {
    return (


        <>
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6 item">
                <div className="card">
                    <div className="card-header p-0 position-relative">
                        <a href="#course-single" className="zoom d-block">
                            <img className="card-img-bottom d-block" src={image} alt={title} />
                        </a>
                        <div className="post-pos">
                            <a href="#reciepe" className="receipe blue">{level}</a>
                        </div>
                    </div>
                    <div className="card-body course-details">
                        <div className="price-review d-flex justify-content-between mb-1 align-items-center">
                            <p>{price}</p>
                            <ul className="rating-star">
                                {Array(5).fill().map((_, i) => (
                                    <li key={i}>
                                        <span className={`fa ${i < rating ? "fa-star" : "fa-star-o"}`}></span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <a href="#course-single" className="course-desc">{title}</a>
                        <div className="course-meta mt-4">
                            <div className="meta-item course-lesson">
                                <span className="fa fa-clock-o"></span>
                                <span className="meta-value"> {duration} hrs </span>
                            </div>
                            <div className="meta-item course-">
                                <span className="fa fa-user-o"></span>
                                <span className="meta-value"> {students} </span>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="author align-items-center">
                            <img src={authorImg} alt={author} className="img-fluid rounded-circle" />
                            <ul className="blog-meta">
                                <li>
                                    <span className="meta-value mx-1">by</span> <a href="#author"> {author}</a>
                                </li>
                                <li>
                                    <span className="meta-value mx-1">in</span> <a href="#category"> {category}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>


    );
}

export default OurCourses;
