import React from 'react';
import CourseCard from './CourseCard';  // Updated import
import courses from './coursesData'; // Adjust the path as necessary


const CoursesList = () => {
    return (
        <section className="w3l-courses">
            <div className="blog pb-5" id="courses">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="row">
                        {courses.map((course, index) => (
                            <CourseCard
                                key={index}
                                image={course.image}
                                title={course.title}
                                price={course.price}
                                duration={course.duration}
                                students={course.students}
                                level={course.level}
                                rating={course.rating}
                                author={course.author}
                                authorImg={course.authorImg}
                                category={course.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesList;
