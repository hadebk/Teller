import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home_style.css';
import joker from '../../images/joker.png'
import Search from '../Search/Search'
import MoviesCategory from '../MoviesCategory/MoviesCategory'
import axios from "axios";
import ModalVideo from 'react-modal-video';
import {VIDEO_LINK, API_KEY} from '../../const';

class Home extends Component {

  constructor() {
    super()
    this.state = {
      isOpen: false,
      videoID: null
    }
    this.openModal = this
      .openModal
      .bind(this)
  }

  componentDidMount() {
    document.title = 'Teller | Movies World';
    // get joker's trailer
    const url = `${VIDEO_LINK}475557/videos${API_KEY}`;
    axios
      .get(url)
      .then(response => {
        if (response.data.results.length > 0) {
          this.setState({videoID: response.data.results[0].key});
        } else {
          this.setState({videoID: null});
        }
      }).catch((error)=>{
        console.log(error)
      });
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render() {
    return (
      <div className="main-box">
        <div className="header-box">
          <div className="content container">
            <ModalVideo 
            channel='youtube' 
            isOpen={this.state.isOpen} 
            videoId={this.state.videoID}
            onClose={() => this.setState({isOpen: false})}
            />
            <div className="img-box">
              <img alt="Joker" src={joker}/>
            </div>
            <div className="_buttons">
              <div style={{"maxWidth": "100%"}}>
                <Link to="#" id="button-Trailer" onClick={this.openModal}>
                    <i className="fa fa-play" style={{"marginRight": "8px"}}></i>
                    <span>Play Trailer</span>
                </Link>
              </div>
              <div style={{"maxWidth": "100%"}}>
                <Link to="/movie/475557" id="button-details">
                  <span>More Details</span>
                  <i className="fa fa-chevron-right" style={{"marginLeft": "8px"}}></i>
                </Link>
              </div>
            </div>
            <div className="moie-details hidden-xs">
              <div className="data-1">
                <span>
                  <i className="fa fa-star" style={{"marginRight": "8px","color": "#B30415"}}></i>8.3</span>
                <span>122 min</span>
                <span>Crime, Drama, Thriller</span>
              </div>
              <div className="data-2 col-lg-5 col-sm-8 col-xs-12">
                During the 1980s, a failed stand-up comedian is driven insane and turns to a
                life of crime and chaos in Gotham City while becoming an infamous psychopathic
                crime figure.
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <Search/>
        </div>
        <MoviesCategory type="Popular" api_url="popular" to="/popular"/>
        <div className="container"><hr/></div>
        <MoviesCategory type="Upcoming" api_url="upcoming" to="/upComing"/>
        <div className="container"><hr/></div>
        <MoviesCategory type="Now Playing" api_url="now_playing" to="/nowPlaying"/>
        <div className="container"><hr/></div>
        <MoviesCategory type="Top Rated" api_url="top_rated" to="/topRated"/>

      </div>
    )
  }

}

export default Home
