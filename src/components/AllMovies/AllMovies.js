import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './AllMovies_style.css';
import GetGernes from '../GetGernes'
import Pagination from "react-js-pagination";
import AllMoviesLoader from './Loader/AllMoviesLoader';
import NoPostser from '../../images/no_image.jpg';
import {URL_DETAIL,API_KEY,URL_BACKGROUND} from '../../const';

var th;

class AllMovies extends Component {
  
  constructor(props) {
    super(props);
    this.mounted = false;
    this.state = {
      results: [],
      header_image:null,
      activePage:1,
      total_pages:1,
      total_results:1
    };
    
  }
  
  componentDidMount() {
    th=this
    this.mounted = true;
    window.scrollTo(0, 0)
    this.makeRequest(this.state.activePage)
  }

  componentWillUnmount() {
    this._isMounted = false;
    
  }

  handlePageChange(pageNumber) {
    th.mounted = true;
    th.setState({
      activePage:pageNumber
    })
    th.makeRequest(pageNumber)
  }
 
  makeRequest(pageNumber){
    axios
      .get(`${URL_DETAIL}${th.props.api_url}${API_KEY}&language=en-US&page=${pageNumber}`)
      .then((response) => {
        var random_movie=Math.floor(Math.random() * (response.data.results.length))
          th.setState({
            results: response.data.results,
            total_pages: response.data.total_pages,
            total_results:response.data.total_results
          });
          if(response.data.results.length > 0){
            if(response.data.results[random_movie].hasOwnProperty('backdrop_path') && 
          response.data.results[random_movie].backdrop_path !== null){
            th.setState({header_image:response.data.results[random_movie].backdrop_path})
          }else{
            th.setState({header_image:null})
          }
          }
      }).catch((error)=>{
        console.log(error)
      })
  }

  render() {
    const {results, header_image, activePage ,total_pages, total_results} = this.state
    
    // add bachground image to header div
    var cover_image= header_image !== null
    ? (<img src={URL_BACKGROUND+header_image} alt="cover-img"/>)
    : (<div className="light-2"></div>)

    // items => store all movies
    const items = results.length > 0
      ? (
        <div className="movies-box row animated fadeIn">
            {
              results.map(movie => {
                return (
                  <div key={movie.id} className="col-lg-3 col-lg-offset-1 col-md-4 col-sm-6 col-xs-12 pos">
                    <Link to={'/'+th.props.to+'/'+movie.id} movie_id={movie.id}>
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
      : (<AllMoviesLoader/>)
      
    return (
      <div className="main-header">
        <div className="wrapper_">
           {cover_image}
           <h2>{this.props.h2}</h2>
        </div>
        <div className="container mar-top">
          <h3>Page: {activePage}</h3>
          <Pagination
          activePage={activePage}
          pageCount={total_pages}
          itemsCountPerPage={results.length}
          totalItemsCount={total_results}
          pageRangeDisplayed={1}
          itemClassFirst={activePage === 1 ? 'disabled_' : ''}
          itemClassPrev={activePage === 1 ? 'disabled_' : ''}
          itemClassNext={activePage === total_pages ? 'disabled_' : ''}
          itemClassLast={activePage === total_pages ? 'disabled_' : ''}
          firstPageText={'First'}
          lastPageText={'Last'}
          prevPageText={'-'}
          nextPageText={'+'}
          onChange={this.handlePageChange}
        />
          {items}
          <Pagination
          activePage={activePage}
          pageCount={total_pages}
          itemsCountPerPage={results.length}
          totalItemsCount={total_results}
          pageRangeDisplayed={1}
          itemClassFirst={activePage === 1 ? 'disabled_' : ''}
          itemClassPrev={activePage === 1 ? 'disabled_' : ''}
          itemClassNext={activePage === total_pages ? 'disabled_' : ''}
          itemClassLast={activePage === total_pages ? 'disabled_' : ''}
          firstPageText={'First'}
          lastPageText={'Last'}
          prevPageText={'-'}
          nextPageText={'+'}
          onChange={this.handlePageChange}
        />
        </div>
      </div>
    )
  }
}

export default AllMovies