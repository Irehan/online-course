import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
// import { Link } from 'react-router-dom'
import BannerSlider from '../components/BannerSlider'
import ClientSlider from '../components/ClientSlider'
import MoveToTop from '../components/MoveToTop'
// import CoursesList from '../components/CoursesList'
// import { FeaturedGrid } from '../components/FeaturedGrid'
import { LatestNews } from '../components/LatestNews'
import { OurFacilities } from '../components/OurFacilities'
import { StartLearn } from '../components/StartLearn'
import { OurTeacher } from '../components/OurTeachers'
import { MainCourse } from '../components/MainCourse'
export const Home = () => (
    <>
        <Header />
        <BannerSlider />
        <MainCourse />
        <OurFacilities />
        <LatestNews />
        <StartLearn />
        <OurTeacher />
        <ClientSlider />
        <MoveToTop />
        <Footer />
    </>
)
