import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Search_style.css';
import NoImage from '../../images/icons8-image-100.jpg'
import NoData from '../../images/no-result.png'
import {URL_SEARCH, API_KEY_ALT, URL_IMAGE} from '../../const';
const $ = window.$;

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
  }

  componentDidMount(){
      $('body').click(()=>{
          $('.suggestions').css('display','none')
      })
      document.querySelector('.form-control').addEventListener('click', function(e) {
        $('.suggestions').css('display','block')
        e.stopPropagation();
      });
  }

  get_suggestions = (query) => {
    const inputValue = query.trim().toLowerCase();

    const inputLength = inputValue.length;

    const url = URL_SEARCH + inputValue + API_KEY_ALT;

    return inputLength === 0
      ? []
      : axios
        .get(url)
        .then(response => {
          this.setState({suggestions: response.data.results})
        })
        .catch(error => {
          console.log(`Error Message ${error}`)
        });
  }

  onChange = (event) => {
    const query = event.target.value
    this.setState({
      value: query
    }, () => {
      this.get_suggestions(query)
    });
  };

  render() {
    const {value, suggestions} = this.state;
    const suggestions_box = value.length > 0
      ? (
          <div className="container main-box_">
        <div className="suggestions">
          {suggestions.length > 0
            ? (suggestions.map((movie) => {
              return (
                <Link to={"/movie/"+movie.id} key={movie.id}>
                  <img
                    className="searchResult-image"
                    alt="Poster"
                    src={movie.poster_path
                    ? (URL_IMAGE + movie.poster_path)
                    : NoImage}/>
                  <div className="searchResult-text">
                    <div className="searchResult-name">
                      {movie.title === null
                        ? 'Title Not Available!'
                        : movie.title}
                    </div>
                    <div className="searchResult-date">
                      {movie.release_date
                        ? movie.release_date
                        : 'Date Not Available!'}
                    </div>
                  </div>
                </Link>
              )
            }))
            : (
              <div className="no-results">
                  <img src={NoData} alt="no result found"/>
                  <h3>Oops! No result found</h3>
                  <p>No result match your search word, please try another search word.</p>
              </div>
            )
}
        </div>
        </div>
      )
      : ('')
    return (
      <div className="search-box">
        <div className="form-group">
          <span className="fal fa-search form-control-feedback"></span>
          <input
            type="text"
            value={value}
            className="form-control"
            placeholder="Search by movie name.."
            onChange={this.onChange}/>
        </div>
        {suggestions_box}
      </div>
    )
  }
}

export default Search