import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './SimilarMovies_style.css';
import GetGernes from '../GetGernes'
import NoPostser from '../../images/no_image.jpg';
import {URL_DETAIL,API_KEY} from '../../const';
import NoData_undraw from '../../images/no_results_undraw.svg';

/* 
  - This component return similar movies.
  - Imported in MovieDetailsPage.
  - recieve movie_id as props and make request to return the similar movies.
*/

class SimilarMovies extends Component {
  
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      results: []
    };
  }
  
  UNSAFE_componentWillReceiveProps(nextProps){
    if(this.props.movie_id !== nextProps.movie_id){
      this.setState({results:[]})
      this.dataRequest(nextProps.movie_id)
    }
  }

  componentDidMount() {
    let movie_id = this.props.movie_id;
    this.dataRequest(movie_id);
  }
  
  dataRequest(movie_id_) {
    window.scrollTo(0, 0)
    axios
      .get(`${URL_DETAIL}${movie_id_}/similar${API_KEY}&language=en-US&page=1`)
      .then((response) => {
          this.setState({
            results: response.data.results
          });
      }).catch((error)=>{
        console.log(error)
      })
  }

  render() {
    const {results} = this.state

    // items => store all movies
    const items = results.length > 0
      ? (
        <div className="movies-box row animated fadeIn">
            {
              results.map(movie => {
                return (
                  <div key={movie.id} className="col-lg-3 col-lg-offset-1 col-md-4 col-sm-6 col-xs-12 pos">
                    <Link to={'/movie/'+movie.id} movie_id={movie.id}>
                      <div className="box-poster hvr-float-shado">
                        <img
                          className="img-responsive animated bounceIn"
                          src={movie.poster_path ? (`https://image.tmdb.org/t/p/w500/${movie.poster_path}`) : (NoPostser)}
                        alt="movie poster"/>
                        <div className="light-hov"></div>
                      </div>
                    </Link>
                    <div className="data-box">
                      <p className="movie-date animated fadeIn">
                        {movie.release_date ? (movie.release_date.slice(0, 4) + " - ") : ('No Date - ')}
                        {movie.genre_ids.length>0 ? (<GetGernes movie_id={movie.id}></GetGernes>) : ('No Genres')}
                      </p>
                      <div className="line2-box animated fadeIn">
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
      )
      : (
        <div className='row no_similar_movies_box'>
          <h5>Oops!</h5>
          <p>There is no similar movies.</p>
          <img src={NoData_undraw} alt='no movies'></img>
        </div>
        )
      
    return (
      <div className="main-header">
        <div className="container mar-top">
          {items}
        </div>
      </div>
    )
  }
}

export default SimilarMovies