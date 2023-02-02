import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = (props)=> {
        return (
            <div>
                <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand"to="/NewsMonkey">
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
                                    <Link className="nav-link" aria-current="page"to="/NewsMonkey">
                                        <strong>  Home </strong>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link"to="/NewsMonkey">
                                        <strong>  About </strong>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="btn" style={{ border: "none" }} data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>  Categories <i className="fa-solid fa-caret-down"></i></span>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-light">
                                        <li><Link className="dropdown-item" to='/Business' style={{ cursor: 'pointer' }} ><i className="fa-solid fa-briefcase"></i><span> Business</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Entertainment' style={{ cursor: 'pointer' }} ><i className="fa-solid fa-film"></i><span> Entertainment</span></Link></li>
                                        <li><Link className="dropdown-item" to='/General' style={{ cursor: 'pointer' }} ><i className="fa-solid fa-users"></i> <span>General</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Health' style={{ cursor: 'pointer' }} ><i className="fa-solid fa-kit-medical"></i> <span>Health</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Science' style={{ cursor: 'pointer' }} ><i className="fa-solid fa-atom"></i> <span>Science</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Sports' style={{ cursor: 'pointer' }} ><i className="fas fa-futbol"></i> <span>Sports</span></Link></li>
                                        <li><Link className="dropdown-item" to='/Technology' style={{ cursor: 'pointer' }} ><i className="fa-solid fa-globe"></i> <span>Technology</span></Link></li>
                                    </ul>
                                </li>
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
                            <div className={`form-check form-switch d-flex my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                            <input className="form-check-input ms-lg-0 me-3 " onClick={props.toggle} style={{ height: '1.5em', width: '3em', cursor:'pointer' }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label " htmlFor="flexSwitchCheckDefault"style={{ cursor: 'pointer' }}>Enable {props.mode === 'light' ? 'dark' : 'light'} mode</label>
                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
}

export default NavBar;