import React, {Component} from 'react';
import Movies from '../AllMovies/AllMovies'

class TopRated extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title='Top Rated Movies'
  }
  render() { 
  
    return (<Movies h2="TOP RATED MOVIES" api_url="top_rated" to="topRated_"/>)

  }
}

export default TopRated
/*<Movies type="Top Rated" api_url="top_rated"/>*/
