import React from 'react';
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import MoveToTop from '../components/MoveToTop';
import Breadcrumb from '../components/Breadcrumb';
// import OurCourses from '../components/OurCourses';
import Pagination from '../components/Pagination';
import CoursesList from '../components/CoursesList';
export const Courses = () => (
    <>
        <Header />
        <Breadcrumb />
        <CoursesList />
        <Pagination />
        <MoveToTop />
        <Footer />
    </>
);



