import React, {Component} from 'react';
import Movies from '../AllMovies/AllMovies'


class Upcoming extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    document.title='Upcoming Movies'
  }
  render() {
    return (<Movies h2="UPCOMING MOVIES" api_url="upcoming" to="upComing_"/>)
  }

}

export default Upcoming
