import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY,URL_DETAIL} from '../const';

/* 
  - This component return gernes of movie.
  - Imported in MovieDetailsPage.js and MoviesCategory.js.
  - recieve movie_id as props and make request to return the similar movies.
*/

class GetGernes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      genres:[]
    };
  }

  componentDidMount() {
    // get gernes of movies
    axios 
        .get(`${URL_DETAIL}${this.props.movie_id}${API_KEY}&language=en-US`)
        .then((response1) => {
          this.setState({genres: response1.data.genres});
        }).catch((error)=>{
          console.log(error)
        });
    }

  render() {
    const {genres} = this.state;

    const arr_gernes = [];
    
    for(let i in genres){
      arr_gernes.push(genres[i].name)
    }

    return (
        <>
          <span>{arr_gernes.join(', ')}</span> 
        </>
    )
  }

}

export default GetGernes