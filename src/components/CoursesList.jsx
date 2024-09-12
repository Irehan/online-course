// CoursesList.jsx
import React from 'react';
import CourseCard from './CourseCard';
import { useCourses } from './CoursesContext';

const CoursesList = () => {
    const { courses } = useCourses();

    return (
        <section className="w3l-courses">
            <div className="blog pb-5" id="courses">
                <div className="container py-lg-5 py-md-4 py-2">
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