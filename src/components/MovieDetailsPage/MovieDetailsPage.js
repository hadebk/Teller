import React, {Component} from 'react';
import axios from 'axios';
import './Movie_style.css';
import {URL_IMAGE,URL_DETAIL, API_KEY, URL_BACKGROUND} from '../../const';
import NoPoster from '../../images/no_image.jpg';
import NoDirector from '../../images/avatar.png';
import GetGernes from '../GetGernes';
import Actors from '../Actors/Actors';
import MovieTrailer from '../MovieTrailer/MovieTrailer';
import DirectorLoader from './Director_Loader/DirectorLoader';
import SimilarMovies from '../SimilarMovies/SimilarMovies';

var movie_id;

/*
    - This component receive movie_id as props then show this movie details.
    - Make request with movie id and return all details 
*/

class MovieDetailsPage extends Component {

    movie_id
    constructor(props) {
        super(props);
        this.state = {
        movie: [],
        header_image: null,
        director:[],
        lang_length:null
        };

        this.movie_id = this.props.match.params.movie_id;
    } 

    // reload this page when this com receive new movie id
    UNSAFE_componentWillReceiveProps(nextProps){
        if(this.movie_id !== nextProps.match.params.movie_id){
            this.movie_id=nextProps.match.params.movie_id;
            this.dataRequest(nextProps.match.params.movie_id);
            window.scrollTo(0, 0)
        }
    }

    componentDidMount() { 
        // when load the page scroll to top
        window.scrollTo(0, 0)
        this.dataRequest(this.movie_id);
    }

    dataRequest(movie_id_){
        // get movie details
        axios
        .get(`${URL_DETAIL}${movie_id_}${API_KEY}&language=en-US`)
        .then(response => {
            this.setState({
                movie: response.data,
                lang_length: response.data.spoken_languages.length
            })
            document.title= 'Movie | '+this.state.movie.title
            // check if response has cover image or not
            if(response.data.hasOwnProperty('backdrop_path') && 
            response.data.backdrop_path !== null){
                this.setState({header_image:response.data.backdrop_path})
            }else{
                this.setState({header_image:null})
            }
        }).catch((error)=>{
            console.log(error)
          })

        // get movie's director
        axios
        .get(`${URL_DETAIL}${movie_id_}/credits${API_KEY}`)
        .then(response => {
            var director_ = response.data.crew.filter((crew)=>{
                return crew.job === 'Director'
            });
            this.setState({
                director : director_
            })
        }).catch((error)=>{
            console.log(error)
          })
    }

    render() {
        const {header_image, movie, director, lang_length} = this.state

        // add background image to header div
        const cover_image = header_image !== null
        ? (<img src={URL_BACKGROUND+header_image} alt="cover_img"/>)
        : (<div className="light-1"></div>)

        // handle poster image
        const poster_image = movie.poster_path 
        ? (`${URL_IMAGE}${movie.poster_path}`) 
        : (NoPoster)

        // handle movie's directors
        const director_all= director.length > 0
        ? (director.map(dir=>{
            return(
                <div style={{'textAlign':'center', 'margin':'0 20px'}} key={dir.id}>
                <div className="director-img-box">
                    <img alt="director-img" 
                    src={dir.profile_path 
                    ? (`https://image.tmdb.org/t/p/w500/${dir.profile_path}`) 
                    : (NoDirector)} className="animated bounceIn delay-1s"/>
                </div>
                <p>{dir.name ? (dir.name) : ('Director')}</p>
                </div>
            )
        })) 
        : (<DirectorLoader/>)
        
        return (
            <div className="movie_details_main">
                
                <div className="wrapper">
                    {cover_image}
                </div>
                
                <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 poster__">
                            <div className="poster-box">
                                <div className="poster-btn-box">
                                <img src={poster_image} alt="poster-img" className="animated bounceIn delay-1s"/>
                                <MovieTrailer video_id={this.movie_id}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 movie-data">
                               
                            <div className="data_1">
                                <h3>{movie.title ? (movie.title) : ('No Title')}</h3>
                                
                                <p className="movie-rate">
                                    <i className="fa fa-star" style={{"marginRight": "3px","color": "#B30415"}}></i>
                                    <span>{movie.vote_average ? (movie.vote_average) : ('0.0')}</span>
                                </p>
                            </div>
                            <div className="data_2">
                                <p>{movie.genres ? (<GetGernes movie_id={movie.id}></GetGernes>) : ('No Genres')}</p>
                            </div>
                            <div className="data_3 row">
                                <span className="col-xs-6">
                                    <i className="fas fa-calendar-alt" style={{"marginRight": "7px"}}></i>
                                    <span>{movie.release_date ? (movie.release_date) : ('yyyy/mm/dd')}</span>
                                </span>
                                <span className="col-xs-6">
                                    <i className="fa fa-clock" style={{"marginRight": "7px"}}></i>
                                    <span>{movie.runtime ? (movie.runtime+" min") : ('0 min')}</span>
                                </span>
                                <span className="col-xs-6">
                                    <i className="fa fa-volume-up" style={{"marginRight": "7px"}}></i>
                                    <span>{lang_length > 0 
                                    ? (movie.spoken_languages[0].name) 
                                    : ('No Language')}</span>
                                </span>
                                <span className="col-xs-6">
                                    <i className="fa fa-wallet" style={{"marginRight": "7px"}}></i>
                                    <span>{movie.budget ? ("$ "+movie.budget.toLocaleString()) : ('$ 0.0')}</span>
                                </span>
                            </div>
                            <div className="data_4">
                                <p>{movie.overview ? (movie.overview) : ('No Overview')}</p>
                            </div>
                            <hr/>
                            <div className="director">
                                <h5>DIRECTOR:</h5>
                                <div className="all_directors">{director_all}</div>
                            </div>
                            <hr/>
                            <div className="actors">
                                <h5>ACTORS:</h5>
                                <Actors movie_id={this.movie_id}/>
                            </div>
                            <hr style={{'marginTop': '30px'}}/>
                            
                        </div>
                        
                    </div>

                    <div>
                        <div>
                            <h5>SIMILAR MOVIES:</h5>
                            <SimilarMovies movie_id={this.movie_id}/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }

}

export default MovieDetailsPage
