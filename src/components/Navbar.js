import react from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="" alt="" />
            <ul>
                <Link to="/">
                    <li>HOME</li>
                </Link>
                <Link to="/article">
                    <li>ARTICLE</li>
                </Link>
                <Link to="/community">
                    <li>COMMUNITY</li>
                </Link>
                <Link to="/content">
                    <li>CONTENT</li>
                </Link>
                <Link to="/about">
                    <li>ABOUT US</li>
                </Link>
            </ul>
        </nav>
    );
};
export default Navbar;