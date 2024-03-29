// React imports
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Navbar
export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" onClick={closeMenu}>
                    <img src='/images/iconFaviconDark.png' alt='My Logo' />
                </Link>
                <div>
                    <div className='burgerBox'>
                        <div className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </div>
                    <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                        <li>
                            <Link to="/" onClick={closeMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={closeMenu}>Contact Me</Link>
                        </li>
                        <li>
                            <Link to="/resume" onClick={closeMenu}>Resume</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};