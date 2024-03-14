// React imports
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Navbar -----------------style later
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* add logo below later? */}
                <div className="brand">Logo</div>
                <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Me</Link>
                    </li>
                    <li>
                        <Link to="/resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};