import React from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import MoveToTop from '../components/MoveToTop';
import Breadcrumb from '../components/Breadcrumb';
// import CoursesList from '../components/CoursesList';
import Pagination from '../components/Pagination';
import CourseCard from '../components/CourseCard';
export const Courses = () => (
    <>
        <Header />
        <Breadcrumb />
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
        <Pagination />
        <MoveToTop />
        <Footer />
    </>
);



