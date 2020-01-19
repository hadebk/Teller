import React, { Component } from "react";
import axios from "axios";
import ModalVideo from 'react-modal-video';
import './MovieTrailer.css';
import {VIDEO_LINK,API_KEY} from '../../const';

class MovieTrailer extends Component {
 
  constructor () {
    super()
    this.state = {
      isOpen: false,
      videoID: null
    }
    this.openModal = this.openModal.bind(this)
  }

  componentDidMount() {
    const id = this.props.video_id;
    const url = `${VIDEO_LINK}${id}/videos${API_KEY}`;
    axios.get(url).then(response => {
      if(response.data.results.length > 0){
        this.setState({ videoID: response.data.results[0].key });
      }else{
        this.setState({ videoID: null });
      }
    }).catch((error)=>{
      console.log(error)
    });
  }

  openModal () {
    this.setState({isOpen: true})
  }
 
  render () {
    const btn= this.state.videoID !== null 
    ? (
        <>
          <ModalVideo 
            channel='youtube' 
            isOpen={this.state.isOpen} 
            videoId={this.state.videoID}
            onClose={() => this.setState({isOpen: false})}
          />
          <i onClick={this.openModal} className="far fa-play-circle"></i>
        </>
    ) 
    : ('')
    return (
      <div className="movie-trailer">
        {btn}
      </div> 
    )
  }
}

export default MovieTrailer