import React from 'react';
import {Link} from 'react-router-dom';
import './Footer_style.css';
import logo from '../../images/Logo1.svg'
import logo_tmdb from '../../images/mdb_logo.svg'
import Linkedin from '../../images/linkedin-logo.svg'
import Github from '../../images/github-sign.svg'
 

const Footer = () => {

    var year= new Date().getFullYear();

    return(
        <>
        <div className="main animated fadeIn">
            <div className="container">
                <div className="row footer-box">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 left">
                        <div className="about">
                            <div className="img-box">
                                <Link to="/">
                                    <img src={logo} alt="logo"/>
                                </Link>
                            </div>
                            <p>Here you can discover the details of all movies,
                                and search for any movie to see it's details.
                                Have a nice experience.
                            </p>
                        </div>
                        <div className="powerd-by">
                            <h4>Powerd by</h4>
                            <div className="img-box">
                                <a href="https://www.themoviedb.org/">
                                    <img src={logo_tmdb} alt="logo-tmdb"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 right">
                        <h4>Useful Link</h4>
                        <div id="links">
                            <div><Link to="/popular">Popular Movies</Link></div>
                            <div><Link to="/upComing">Upcoming Movies</Link></div>
                            <div><Link to="/nowPlaying">Now Playing Movies</Link></div>
                            <div><Link to="/topRated">Top Rated Movies</Link></div>
                        </div>
                        <div className="contact">
                            <h4>Find me: </h4>
                            <div>
                                <a href="https://www.linkedin.com/in/abdalhady-bakr-b37516152/">
                                <img src={Linkedin} alt="linkedin"/>
                                </a>
                            </div>
                            <div><a href="https://www.linkedin.com/in/abdalhady-bakr-b37516152/"><img src={Github} alt="github"/></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                    <div>
                        <div style={{"marginBottom":"5px"}}>
                        Made With <i className="fa fa-heart" style={{"margin": "0 10px 0 5px", "color":"#B30415"}}></i> 
                        By <a href="https://www.linkedin.com/in/abdalhady-bakr-b37516152/">Me</a>
                        </div>
    <div><i className="fal fa-copyright"></i>Teller {year}. All Rights Reserved</div>
                    </div>
            </div>
        </div>
        </>
    )
}



export default Footer
