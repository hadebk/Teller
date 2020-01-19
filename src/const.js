export const URL_DETAIL = 'https://api.themoviedb.org/3/movie/';
export const URL_SEARCH = 'https://api.themoviedb.org/3/search/movie?query=';
export const URL_IMAGE = 'https://image.tmdb.org/t/p/w500/';
export const URL_BACKGROUND = 'https://image.tmdb.org/t/p/original';
export const API_KEY = '?api_key=a1060f88470af5b4424c86e56e474303';
export const API_KEY_ALT = '&api_key=a1060f88470af5b4424c86e56e474303';
export const IMG_SIZE_XSMALL = 'https://image.tmdb.org/t/p/w45/';
export const VIDEO_LINK = 'https://api.themoviedb.org/3/movie/';
 
/* get movies by gernes ==>

Action movies=
(https://api.themoviedb.org/3/discover/movie?api_key=a1060f88470af5b4424c86e56e474303&language=en-US&sort_by=popularity.desc&page=1&with_genres=28)

*/


// example of results =>
// https://api.themoviedb.org/3/movie/550?api_key=a1060f88470af5b4424c86e56e474303
/*
{
    "adult": false,
    "backdrop_path": "/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg",
    "belongs_to_collection": null,
    "budget": 63000000,
    "genres": [{
        "id": 18,
        "name": "Drama"
    }],
    "homepage": "http://www.foxmovies.com/movies/fight-club",
    "id": 550,
    "imdb_id": "tt0137523",
    "original_language": "en",
    "original_title": "Fight Club",
    "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    "popularity": 35.468,
    "poster_path": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
    "production_companies": [{
        "id": 508,
        "logo_path": "/7PzJdsLGlR7oW4J0J5Xcd0pHGRg.png",
        "name": "Regency Enterprises",
        "origin_country": "US"
    }, {
        "id": 711,
        "logo_path": "/tEiIH5QesdheJmDAqQwvtN60727.png",
        "name": "Fox 2000 Pictures",
        "origin_country": "US"
    }, {
        "id": 20555,
        "logo_path": "/hD8yEGUBlHOcfHYbujp71vD8gZp.png",
        "name": "Taurus Film",
        "origin_country": "DE"
    }, {
        "id": 54051,
        "logo_path": null,
        "name": "Atman Entertainment",
        "origin_country": ""
    }, {
        "id": 54052,
        "logo_path": null,
        "name": "Knickerbocker Films",
        "origin_country": "US"
    }, {
        "id": 25,
        "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
        "name": "20th Century Fox",
        "origin_country": "US"
    }, {
        "id": 4700,
        "logo_path": "/A32wmjrs9Psf4zw0uaixF0GXfxq.png",
        "name": "The Linson Company",
        "origin_country": ""
    }],
    "production_countries": [{
        "iso_3166_1": "DE",
        "name": "Germany"
    }, {
        "iso_3166_1": "US",
        "name": "United States of America"
    }],
    "release_date": "1999-10-15",
    "revenue": 100853753,
    "runtime": 139,
    "spoken_languages": [{
        "iso_639_1": "en",
        "name": "English"
    }],
    "status": "Released",
    "tagline": "Mischief. Mayhem. Soap.",
    "title": "Fight Club",
    "video": false,
    "vote_average": 8.4,
    "vote_count": 17481
}
*/


/*
import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './MoviesCategory_style.css';
import NoImage from '../../images/joker-poster-main2.jpg'
import axios from 'axios';
import {URL_DETAIL, API_KEY} from '../../const';
import OwlCarousel from 'react-owl-carousel';
const $ = window.$;
class MoviesCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };

  }

  componentDidMount() {
    
    console.log(this.props)
    axios
      .get(`${URL_DETAIL}${this.props.api_url}${API_KEY}&language=en-US&page=1`)
      .then((response) => {
        this.setState({results: response.data.results});
        console.log(response.data.results)
      });
    }

  componentDidUpdate(){
      var x= this.props.api_url
      this.init(x)
  }

  init(id_){
    const $ = window.$;

    // owl carousel init
    $('.main-content #'+id_).owlCarousel({
        stagePadding: 50,
        loop: true,
        margin: 30,
        nav: true,
        touchDrag: true,
        mergeFit:true,
        autoWidth: false,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '.main-content .custom-nav',
        responsive: {
          0: {
            items: 1
          },
          425:{
              items:2
          },
          600: {
            items: 4
          },
          1000: {
            items: 6
          }
        }
    });
  }
  

  render() {
    const {type, api_url} = this.props

    return (
      <div className="movies-category-box">
            <div className="container titel">
                <h3>{type}</h3>
                <p>View All<i className="fa fa-chevron-right" style={{"marginLeft": "8"+"px"}}></i></p>
            </div>
            
            <div className="main-content">
                <div className='owl-carousel owl-theme' id={api_url}>
                    {this.state.results.length && (
                    <>
                        {this.state.results.map(movie => {
                            console.log(movie);
                            return (
                                <div className="item" key={movie.id}>
                                    <div className="box-poster">
                                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster"/>
                                    </div>
                                    <div className="data-box">
                                            <p className="movie-date">{movie.release_date.slice(0,4)}</p>
                                            <div className="line2-box">
                                                <p className="movie-name">{movie.title}</p>
                                                <p className="movie-rate">
                                                    <i className="fa fa-star" style={{"marginRight": "3"+"px","color":"#B30415"}}></i>
                                                    <span>{movie.vote_average}</span>
                                                </p>
                                            </div>
                                    </div>
                                </div>         
                            )        
                        })}
                    </>
                    )}
                </div>
                <div className="owl-theme">
                    <div className="owl-controls">
                            <div className="custom-nav owl-nav">
                            
                            </div>
                    </div>
                </div>
            </div>
      </div>

    )
  }

}
export default MoviesCategory
*/
/*
const MoviesCategory = (props) => {

    return(
        <div className="movies-category-box">
        <h3>category--{props.type}--{props.api_url}</h3>
        </div>
    )
}


            
*/