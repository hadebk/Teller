import React,{Component} from 'react';
import Movies from '../AllMovies/AllMovies'

/* 
  - This component return now playing movies.
  - There data comes from AllMovies.js component.
*/

class NowPlaying extends Component {
    
    componentDidMount() {
      window.scrollTo(0, 0)
      document.title='Now Playing Movies'
    }

    render() {
      return(<Movies h2="NOW PLAYING MOVIES" api_url="now_playing" to="nowPlaying_"/>)
    }

  }

export default NowPlaying
