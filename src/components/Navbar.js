import react from 'react';
import Homepage from "../pages/Homepage";
import Article from "../pages/Article";
import Content from "../pages/Content";
import Community from "../pages/Community";
import Aboutus from "../pages/Aboutus";
import './Navbar.css'
import { UilBars } from '@iconscout/react-unicons'
import { UilSearch } from '@iconscout/react-unicons'
import { UilBell } from '@iconscout/react-unicons'

// font awsome import 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  faBell
} from '@fortawesome/free-regular-svg-icons';

library.add(
  faBell
);


const Navbar = () => {
    return (
        <nav>
            <header className="container">
            
            <div className="topNav">
                <div className="top-left-icon position-relative">
                    <UilBars className="bar-toggle" />
                    <div className="d-inline-block ">   
                        <UilSearch className="search-icon" />
                        <form action="#">
                            <input className="search-input" type="text" placeholder="Type to Search"/>
                            <button type="submit">
                                <UilSearch className="search-submit" />
                            </button>
                        </form>
                    </div>
                </div>
                <div className="date">
                    <p>Wednesday, May 26, 2021 Last Update:04:21 pm</p>
                </div>
                <div className="top-right">
                        <FontAwesomeIcon className="bell-icon" icon={["far", "bell"]} />
                        
                <a className="login" href="#">LOGIN</a>
                </div>
            </div>

            <div className="middle-nav">
                <h1 className="logo">LOGO</h1>
            </div>

            <div className="bottom-nav">
                <a href="#" className="langBtn">বাংলা</a>
                <ul className="main-menu">
                    <li><a href="#">home</a></li>
                    <li><a href="#">article</a></li>
                    <li><a href="#">litrature</a></li>
                    <li><a href="#">videos</a></li>
                    <li><a href="#">community</a></li>
                    <li><a href="#">news</a></li>
                    <li><a href="#">about</a></li>
                </ul>
                <div></div>
            </div>

        </header>
        </nav>
    );
};
export default Navbar;