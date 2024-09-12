import React from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import MoveToTop from '../components/MoveToTop';
import Breadcrumb from '../components/Breadcrumb';
import CoursesList from '../components/CoursesList';
import Pagination from '../components/Pagination';
export const Courses = () => (
    <>
        <Header />
        <Breadcrumb />
        <section className="w3l-courses">
            <div className="blog pb-5" id="courses">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="row">
                        <CourseCard
                            image={course1.image}
                            title={course1.title}
                            price={course1.price}
                            duration={course1.duration}
                            students={course1.students}
                            level={course1.level}
                            rating={course1.rating}
                            author={course1.author}
                            authorImg={course1.authorImg}
                            category={course1.category}
                        />
                        <CourseCard
                            image={course2.image}
                            title={course2.title}
                            price={course2.price}
                            duration={course2.duration}
                            students={course2.students}
                            level={course2.level}
                            rating={course2.rating}
                            author={course2.author}
                            authorImg={course2.authorImg}
                            category={course2.category}
                        />
                    </div>
                </div>
            </div>
        </section>
        <MoveToTop />
        <Footer />
    </>
);



