import React, { Component } from 'react'
// import { Link } from 'react-router-dom';

export default class Navbar extends Component {
 componentDidMount() {
     const items = document.querySelectorAll('.listItems');
     items.forEach(item => {
        item.addEventListener('click',()=> {
          console.log(`${item.children[0].children[1].innerText} clicked`);
          this.setState({category:item.children[0].children[1].innerText})
        });
      });
  }
    render() {
        return (
            <>
                <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            NewsMonkey
                        </a>
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
                                    <a className="nav-link" aria-current="page" href="/">
                                        <strong>  Home </strong>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <strong>  About </strong>
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <button className="btn dropdown-toggle" style={{ border: "none" }} data-bs-toggle="dropdown" aria-expanded="false">
                                        <strong>  Categories </strong>
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-light">
                                        <li className='listItems'><a className="dropdown-item" style={{cursor:'pointer'}} ><i className="fa-solid fa-briefcase"></i><span className='items'> Business</span></a></li>
                                        <li className='listItems'><a className="dropdown-item" style={{cursor:'pointer'}} ><i className="fa-solid fa-film"></i><span className='items'> Entertainment</span></a></li>
                                        <li className='listItems'><a className="dropdown-item" style={{cursor:'pointer'}} ><i className="fa-solid fa-users"></i> <span className='items'>General</span></a></li>
                                        <li className='listItems'><a className="dropdown-item" style={{cursor:'pointer'}} ><i className="fa-solid fa-kit-medical"></i> <span className='items'>Health</span></a></li>
                                        <li className='listItems'><a className="dropdown-item" style={{cursor:'pointer'}} ><i className="fa-solid fa-atom"></i> <span className='items'>Science</span></a></li>
                                        <li className='listItems'><a className="dropdown-item" style={{cursor:'pointer'}} ><i className="fas fa-futbol"></i> <span className='items'>Sports</span></a></li>
                                        <li className='listItems'><a className="dropdown-item" style={{cursor:'pointer'}} ><i className="fa-solid fa-globe"></i> <span className='items'>Technology</span></a></li>
                                    </ul>
                                </li>
                                {/* <li className="nav-item items"style={{cursor:'pointer'}}>
                                <a className="nav-link">
                                    Business
                                </a>
                            </li>
                            <li className="nav-item items"style={{cursor:'pointer'}}>
                                <a className="nav-link">
                                    Entertainment
                                </a>
                            </li>
                            <li className="nav-item items"style={{cursor:'pointer'}}>
                                <a className="nav-link">
                                    General
                                </a>
                            </li>
                            <li className="nav-item items"style={{cursor:'pointer'}}>
                                <a className="nav-link">
                                    Health
                                </a>
                            </li>
                            <li className="nav-item items"style={{cursor:'pointer'}}>
                                <a className="nav-link">
                                    Science
                                </a>
                            </li>
                            <li className="nav-item items"style={{cursor:'pointer'}}>
                                <a className="nav-link">
                                    Sports
                                </a>
                            </li>
                            <li className="nav-item items"style={{cursor:'pointer'}}>
                                <a className="nav-link">
                                    Technology
                                </a>
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
