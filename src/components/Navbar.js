import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">
                            NewsMonkey
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="#">
                                        <strong>  Home </strong>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        <strong>  About </strong>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="btn dropdown-toggle" style={{ border: "none" }} data-bs-toggle="dropdown" aria-expanded="false">
                                        <strong>  Categories </strong>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-light">
                                        <li><Link className="dropdown-item" to="/Business"><i className="fa-solid fa-briefcase"></i><span> Business</span></Link></li>
                                        <li><Link className="dropdown-item" to="/Entertainment"><i className="fa-solid fa-film"></i><span> Entertainment</span></Link></li>
                                        <li><Link className="dropdown-item" to="/General"><i className="fa-solid fa-users"></i> <span>General</span></Link></li>
                                        <li><Link className="dropdown-item" to="/Health"><i className="fa-solid fa-kit-medical"></i> <span>Health</span></Link></li>
                                        <li><Link className="dropdown-item" to="/Science"><i className="fa-solid fa-atom"></i> <span>Science</span></Link></li>
                                        <li><Link className="dropdown-item" to="/Sports"><i className="fas fa-futbol"></i> <span>Sports</span></Link></li>
                                        <li><Link className="dropdown-item" to="/Technology"><i className="fa-solid fa-globe"></i> <span>Technology</span></Link></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Business
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Entertainment
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    General
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Health
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Science
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Sports
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Technology
                                </Link>
                            </li> */}
                            </ul>
                            <form className="d-flex" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-primary" type="submit">
                                    Search
                                </button>
                            </form>
                            <div className='form-check form-switch d-flex my-3'>
                                <input className="form-check-input ms-lg-0 me-3 " style={{ height: 1.5 + 'em', width: 3 + 'em' }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label text-dark" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
