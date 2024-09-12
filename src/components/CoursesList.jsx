import React from 'react';
import CourseCard from './CourseCard';  // Updated import

const courses = [
    {
        image: "assets/images/c1.jpg",
        title: "Open Programming Courses for everyone: Python",
        price: "$35.00",
        duration: 20,
        students: 50,
        level: "Beginner",
        rating: 4,
        author: "Olivia",
        authorImg: "assets/images/a1.jpg",
        category: "Programming",
    },
    {
        image: "assets/images/c2.jpg",
        title: "Learn Master JQuery in a Short Period of Time",
        price: "$49.00",
        duration: 20,
        students: 50,
        author: "William",
        category: "Programming",
        level: "Intermediate",
        rating: 5,
        authorImg: "assets/images/william.jpg",
    },
    {
        image: "assets/images/c3.jpg",
        title: "Learning to Write as a Clean and Professional Author",
        price: "$0.00",
        duration: 20,
        students: 50,
        author: "Isabella",
        category: "Teaching",
        level: "Beginner",
        rating: 5,
        authorImg: "assets/images/isabella.jpg",
    },
];

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
