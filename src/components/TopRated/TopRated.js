import React, {Component} from 'react';
import Movies from '../AllMovies/AllMovies'

/* 
  - This component return top rated movies.
  - There data comes from AllMovies.js component.
*/

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
