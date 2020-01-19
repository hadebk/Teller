import React, {Component} from 'react';
import Movies from '../AllMovies/AllMovies'

class Popular extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title='Popular Movies'
  }
  render() {

    return (<Movies h2="POPULAR MOVIES" api_url="popular" to="popular_"/>)

  }
}

export default Popular