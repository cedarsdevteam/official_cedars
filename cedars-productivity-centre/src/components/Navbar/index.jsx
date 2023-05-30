import React from 'react';
import { useState } from 'react';
import Navlogo from '../../images/logo.jpg'
import { Link, useLocation } from 'react-router-dom';
import { Navlist } from '../../utilities/Navutils';
import './style.css';
import 'jquery/dist/jquery.slim';
import { List, X } from 'react-bootstrap-icons';
import { toggleLoader } from '../Others/Loader/Loader'

const Navbar = () => {

    // Nav mobile toggle
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click)
    }
    
    const location = useLocation().pathname;
    
    const navLinks = document.querySelectorAll('nav ul li.nav-item');

    function toggleNav (link) {
        let i = 0;
        while (i < navLinks.length) {
            if (navLinks[i].classList.contains('active')) {
                navLinks[i].classList.remove('active');
            }
            i++;
        }

        if(link)
        link.classList.toggle('active');
    }

    // Navbar active state
    switch (location) {
        case '/':
            toggleNav(navLinks[0])
            break;

        case '/about':
            toggleNav(navLinks[1])
            break;

        case '/programs':
            toggleNav(navLinks[2])
            break;

        case '/activities':
            toggleNav(navLinks[3])
            break;

        case '/blog':
            toggleNav(navLinks[3])
            break;

        case '/contact':
            toggleNav(navLinks[4])
            break;
    
        default:
            toggleNav(null)
            break;
    }

    return (
        <div id="nav">
            <nav className="navbar navbar-expand-lg">
                <div className="container-lg justify-content-around nav-mobile-row ">

                    <div className="col">
                        <Link className="navbar-brand" to={"/"}>
                            <img src={Navlogo} alt="logo" />
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation" onClick={handleClick}>
                        {
                            click ? <X size={30} /> : <List size={30} />
                        }
                    </button>

                    <div className="collapse navbar-collapse collapse-left justify-content-center" id="navbarNav">
                        <ul className="navbar-nav col d-flex justify-content-evenly mt-2 mt-lg-0">
                            {
                                Navlist.map((item, key) => {
                                    return <li className="nav-item p-2 pb-2 p-lg-0" key={key}>
                                        <Link className="nav-link p-0 ps-1 p-lg-0" to={item.to}>
                                            {item.label}
                                        </Link>
                                    </li>
                                })
                            }

                            <li className="nav-item shrink p-2 pb-2 p-lg-0">
                                <Link className="nav-link p-0 ps-1 p-lg-0" to={"/get-involved"}>
                                    Get Involved
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col button text-end">
                        <Link className="btn" to={"/get-involved"}>Get Involved</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;