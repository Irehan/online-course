import React from 'react';
import CourseCard from './CourseCard';
import { useCourses } from '../context/CoursesContext';

const CoursesList = () => {
    const { courses } = useCourses();

    if (!courses) {
        return <div>Loading courses...</div>;
    }

    return (

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
                        {courses.map((course, index) => (
                            <CourseCard
                                key={index}
                                {...course}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesList;