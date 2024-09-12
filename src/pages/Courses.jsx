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
        <CoursesList />
        <Pagination />
        <MoveToTop />
        <Footer />
    </>
);



