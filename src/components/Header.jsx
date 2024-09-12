import React from "react"
import { Link } from 'react-router-dom';
import ThemeToggle from "./ThemeToggle";
import { Search } from "./Search";
import { Login } from "./Login";
export const Header = () => (
    <header id="site-header" className="fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark stroke">
                <h1>
                    <Link className="navbar-brand" to="/home">
                        <span className="fa fa-diamond" />
                        Study Course <span className="logo">Journey to success</span>
                    </Link>
                </h1>
                <button
                    className="navbar-toggler  collapsed bg-gradient"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon fa icon-expand fa-bars" />
                    <span className="navbar-toggler-icon fa icon-close fa-times" />
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-lg-auto">
                        <li className="nav-item @@home__active">
                            <Link className="nav-link" to="/home">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">
                                Courses
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Search />
                    <Login />
                </div>
                {/* toggle switch for light and dark theme  */}
                <div className="mobile-position">
                    <nav className="theme-switch-wrapper">
                        <ThemeToggle />
                    </nav>
                </div>
                {/* toggle switch for light and dark theme  */}
            </nav>
        </div>
    </header>
)
