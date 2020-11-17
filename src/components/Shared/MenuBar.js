import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-color">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">POWER <span className="logoX">X</span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/ourClasses">Our Classes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MenuBar;