import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './PageNotFound_style.css'
import NotFound404 from '../../images/404.svg';

/* 
  - This component handel not found page (wrong url).
  - Imported in App.js.
*/

class PageNotFound extends Component {

  render() {

    return (
      <div className="container main-box-pageNotFound">
        <h4>Oops! Erorr 404</h4>
        <p>Page not found.</p>
        <img src={NotFound404} alt='no movies'></img>
        <div className='goHom-box'>
        <Link to="/" id="goHome">
            <i className="fa fa-home" style={{"marginRight": "8px"}}></i>
            <span>Home</span>
        </Link>
        </div>
      </div>
    )
  }
}

export default PageNotFound