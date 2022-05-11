import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Navbar: FC = () => {
    return (
        <nav>
            <div className="nav-wrapper pink accent-3 pdx-1">
                <a href="/" className="brand-logo">React + TypeScript</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Список дел</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;