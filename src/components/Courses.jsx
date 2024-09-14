import React from 'react';
import { Header } from './Header'
import { Footer } from './Footer'
import MoveToTop from './MoveToTop';
import Breadcrumb from './Breadcrumb';
import CoursesList from './CoursesList';
import Pagination from './Pagination';
import { CoursesProvider } from '../context/CoursesContext';

export const Courses = () => (
    <CoursesProvider>
        <Header />
        <Breadcrumb />
        <CoursesList />
        <Pagination />
        <MoveToTop />
        <Footer />
    </CoursesProvider>
);