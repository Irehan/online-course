import { Link } from "react-router-dom"

export const StartLearn = () => {
    return (
        <>
            <div className="middle py-5">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="welcome-left text-center py-lg-4">
                        <h5 className="title-small mb-1">Start learning online</h5>
                        <h3 className="title-big">
                            Enhance your skills with best online courses
                        </h3>
                        <Link
                            to="/started"
                            className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2"
                        >
                            Get started now
                        </Link>
                        <Link
                            to="/contact"
                            className="btn btn-style btn-primary mt-sm-5 mt-4"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}