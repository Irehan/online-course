// CoursesList.js
import React from 'react';
import CourseCard from './OurCourses';

const courses = [
    {
        image: "assets/images/c1.jpg",
        title: "Open Programming Courses for everyone: Python",
        price: "$35.00",
        duration: 20,
        students: 50,
        level: "Beginner",
        rating: 4, // Rating out of 5
        author: "Olivia",
        authorImg: "assets/images/a1.jpg",
        category: "Programming",
    },
    {
        title: "Learn Master JQuery in a Short Period of Time",
        price: "$49.00",
        duration: 20,
        students: 50,
        author: "William",
        category: "Programming",
        image: "jquery-course-image-url",
        badge: "New"
    },
    {
        title: "Learning to Write as a Clean and Professional Author",
        price: "$0.00",
        duration: 20,
        students: 50,
        author: "Isabella",
        category: "Teaching",
        image: "author-course-image-url",
        badge: "Beginner"
    },
    // You can add more courses here
];

const CoursesList = () => {
    return (
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
    );
};

export default CoursesList;
