import React from 'react';
import { Link } from 'react-router-dom';
function CourseCard({ image, title, price, duration, students, level, rating, author, authorImg, category }) {
    return (
        <div className="col-lg-4 col-md-6 item">
            <div className="card">
                <div className="card-header p-0 position-relative">
                    <Link to="/ComingSoon" className="zoom d-block"></Link>
                    <img className="card-img-bottom d-block" src={image} alt={title} />

                    <div className="post-pos">
                        <Link to="/ComingSoon" className="receipe blue">{level}</Link>
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
                    <Link to="/ComingSoon" className="course-desc">{title}</Link>
                    <div className="course-meta mt-4">
                        <div className="meta-item course-lesson">
                            <span className="fa fa-clock-o"></span>
                            <span className="meta-value"> {duration} hrs </span>
                        </div>
                        <div className="meta-item course-lesson">
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
                                <span className="meta-value mx-1">by</span> <Link to="/ComingSoon"> {author}</Link>
                            </li>
                            <li>
                                <span className="meta-value mx-1">in</span> <Link to="/ComingSoon"> {category}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default CourseCard;
