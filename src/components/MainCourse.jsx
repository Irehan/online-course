import { Link } from "react-router-dom"
import CoursesList from "./CoursesList"

export const MainCourse = () => {
    return (
        <>
            <section className="w3l-courses">
                <div className="blog pb-5" id="courses">
                    <div className="container py-lg-5 py-md-4 py-2">
                        <div className="row">
                            <CoursesList />
                        </div>

                        <div className="mt-5 text-more">
                            <p className="pt-md-3 sample text-center">
                                Control your personal preference settings to get notified about
                                appropriate courses
                                <Link to="/courses">
                                    View All Courses{" "}
                                    <span className="pl-2 fa fa-long-arrow-right" />
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}