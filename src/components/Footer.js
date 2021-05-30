import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="container">
            <div className="footer-top row">
                <h1 className="footer-logo col-md-6 ">
                    LOGO
                </h1>

                {/* Newsletter Form  */}
                
                <form action="#" className="footer-form col-md-6 text-right">
                    <div className="input-email">
                        <input type="text" placeholder="Enter Your Email"/>
                        <div className="email-icon"></div>
                    </div>
                    <input type="submit" value="Subscribe"/>
                </form>
                </div>
                
                <hr/>

            <div className="footer-middle row">
                <div className="col-lg-4 my-md-0 my-3 footer-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                
                <div className="col-lg-4 my-md-0 my-3 trending-topics">
                    <div className="title">
                        <h4>Trending Topics</h4>
                    </div>
                    <ul>
                        <li><a href="#">Science</a></li>
                        <li><a href="#">Tech</a></li>
                        <li><a href="#">Apps</a></li>
                        <li><a href="#">Cars</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>
                
                <div className="col-lg-4 my-md-0 my-3 important-link">
                    <div className="title">
                        <h4>Important Links</h4>
                    </div>
                    <ul>
                        <li><a href="#">Community Guidelines</a></li>
                        <li><a href="#">Communications Preferences</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Contribute</a></li>
                    </ul>
                </div>
            </div>

            </div>
            <div className="footer-bottom">
                <p className="text-center">© Copyright 2021, All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
