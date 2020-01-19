import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MoviesCategory_style.css';
import NoPoster from '../../images/no_image.jpg';
import axios from 'axios';
import {URL_DETAIL, API_KEY} from '../../const';
import GetGernes from '../GetGernes';
import Loader from './Loader/Loader'


const $ = window.$;

class MoviesCategory extends Component {

  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      results: [],
      genres: []
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    this._isMounted = true;
    // get details of movies
    axios
      .get(`${URL_DETAIL}${this.props.api_url}${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        this.setState({results: response.data.results});
      }).catch((error)=>{
        console.log(error)
      })
  }

  componentDidUpdate() {
    var x = this.props.api_url
    this.init(x)
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  init(id_) {
    // owl carousel init
    $('.main-content #' + id_).owlCarousel({
      stagePadding: 70,
      loop: true,
      margin: 30,
      nav: true,
      touchDrag: true,
      mergeFit: true,
      autoWidth: false,
      navText: [
        '<i class="far fa-angle-left" aria-hidden="true"></i>', '<i class="far fa-angle-right" aria-hidden="true"></i>'
      ],
      responsive: {
        0: {
          items: 1
        },
        440: {
          items: 2
        },
        600: {
          items: 3
        },
        767: {
          items: 4
        },
        1000: {
          items: 5
        },
        1200: {
          items: 7
        },
        2000:{
          items:17
        }
      }
    });
  }

  render() {
    const {type, api_url, to} = this.props
    const new_res=  this.state.results.filter((res)=>{
      return res.id !== 449924
    })
    // items => store all movies
    const items = this.state.results.length > 0
      ? (
        <div className="main-content">
          <div className='owl-carousel owl-theme' id={api_url}>
            {
              new_res.map(movie => {
                return (
                  <div key={movie.id}>
                    <Link to={"movie/"+movie.id} movie_id={movie.id}>
                      <div className="box-poster">
                        <img
                          className="img-responsive animated bounceIn delay-1s"
                          src={movie.poster_path ? (`https://image.tmdb.org/t/p/w500/${movie.poster_path}`) : (NoPoster)}
                        alt="movie poster"/>
                        <div className="light-hov"></div>
                      </div>
                    </Link>
                    <div className="data-box">
                      <p className="movie-date animated bounceIn delay-1s">
                        {movie.release_date ? (movie.release_date.slice(0, 4) + " - ") : ('No Date - ')}
                        {movie.genre_ids ? <GetGernes movie_id={movie.id}></GetGernes> : 'No Data'}
                      </p>
                      <div className="line2-box animated bounceIn delay-1s">
                        <p className="movie-name">{movie.title ? (movie.title) : ('No Title')}</p>
                        <p className="movie-rate">
                          <i className="fa fa-star" style={{"marginRight": "3px","color": "#B30415"}}></i>
                          <span>{movie.vote_average ? (movie.vote_average) : ('0.0')}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="owl-theme">
            <div className="owl-controls">
              <div className="custom-nav owl-nav"></div>
            </div>
          </div>
        </div>
      ) 
      : (<Loader></Loader>)

    return (
      <div className="movies-category-box animated fadeIn">
        <div className="container titel">
          <h3>{type}</h3>
          <Link to={to}>
            <p>View All
              <i className="fa fa-chevron-right"
                style={{"marginLeft": "8px"}}
              >
              </i>
            </p>
          </Link>
        </div>
        {items}
      </div>
    )
  }
}
export default MoviesCategory