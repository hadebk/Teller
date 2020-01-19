import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/Logo1.svg'
import './Navbar_style.css';
import Serach from '../Search/Search'

const $ = window.$

class Navbar_ extends Component {


    searchIconAction(){
        $('.search-icon-nav').toggleClass('fa-search fa-times');
        $('.search-nav').toggleClass('search-nav-toggle');
    }

    barsIconAction(){
        $('.bars-icon-nav').toggleClass('fa-bars fa-times');
    }

   render(){
    return(
        <nav className="navbar navbar-expand-lg navbar-fixed-top container-fluid animated fadeIn">
            <div className="container">
                <div className="d-flex flex-grow-1">
                    <Link to="/" className="navbar-brand d-lg-inline-block">
                        <div className="logo_box"><img alt="logo" src={logo}/></div>
                    </Link>
                    <div className="w-100 text-right" id="menu-button">
                        <button className="navbar-toggler" type="button">
                            <i className="fal fa-search search-icon-nav" onClick={()=>{this.searchIconAction()}}></i>
                        </button>
                        <button className="navbar-toggler" id="menu-btn" type="button" data-toggle="collapse" data-target="#myNavbar">
                            <i className="fal fa-bars bars-icon-nav" onClick={()=>{this.barsIconAction()}}></i>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                    
                        <div className="container">
                        <ul className="navbar-nav ml-auto flex-nowrap">
                        <Link to="/">  
                                <li className="nav-item">
                                    <span  className="nav-link m-2 menu-item hvr-underline-from-left">Home</span>
                                </li>
                            </Link>
                            <Link to="/popular">
                                <li className="nav-item">
                                    <span className="nav-link m-2 menu-item hvr-underline-from-left">Popular</span>
                                </li>
                            </Link>
                            <Link to="/upComing">
                                <li className="nav-item">
                                    <span className="nav-link m-2 menu-item hvr-underline-from-left">Upcoming</span>
                                </li>
                            </Link>
                            <Link to="/nowPlaying">
                                <li className="nav-item">
                                    <span className="nav-link m-2 menu-item hvr-underline-from-left">Now Playing</span>
                                </li>
                            </Link>
                            <Link to="/topRated">
                                <li className="nav-item">
                                    <span className="nav-link m-2 menu-item hvr-underline-from-left">Top Rated</span>
                                </li>
                            </Link>
                            <Link to='#' className="search-icon">
                                <li className="nav-item search-item">
                                    <span className="nav-link m-2 menu-item span-search-icon">
                                        <i className="fal fa-search search-icon-nav" onClick={()=>{this.searchIconAction()}}></i>
                                    </span>
                                    <div className='icon-bg'></div>
                                </li>
                            </Link>
                        </ul>
                        
                    </div>
                </div>
                    <div className="search-nav container"><Serach/></div>
            </div>
        </nav>
        
    )
   }
}



export default Navbar_
