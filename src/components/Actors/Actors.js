import React, {Component} from 'react';
import axios from 'axios';
import './Actors_style.css';
import {URL_IMAGE,URL_DETAIL, API_KEY} from '../../const';
import NoActor from '../../images/avatar.png';
import Actorloader from './Loader/Actor_Loader'

const $ = window.$

/*
  This component will recive Movie_id as props in MoviesDetailsPage.js 
  and will return all actors of this movie
*/
class Actors extends Component {

    constructor(props) {
        super(props);
        this.state = {
        cast:[]
        };
    } 

    UNSAFE_componentWillReceiveProps(nextProps){
      if(this.props.movie_id !== nextProps.movie_id){
        this.setState({cast:[]})
        this.dataRequest(nextProps.movie_id)
      }
    }
  
    componentDidMount() {
      let movie_id = this.props.movie_id;
      this.dataRequest(movie_id);
    }

    dataRequest(movie_id_) {
        // get movie's actors
        axios
        .get(`${URL_DETAIL}${movie_id_}/credits${API_KEY}`)
        .then(response => {
            this.setState({
                cast : response.data.cast
            })
        }).catch((error)=>{
          console.log(error)
        })
    }

    componentDidUpdate(){
    // owl carousel init
    $('.owl-carousel').owlCarousel({
        stagePadding: 40,
        loop: false,
        margin: 0,
        nav: true,
        autoplay:true,
        autoplayTimeout:2000,
        touchDrag: true,
        autoplayHoverPause:true,
        mergeFit: true,
        autoWidth: false,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
          0: {
            items: 2
          },
          400: {
            items: 3
          },
          600: {
            items: 3
          },
          767: {
            items: 4
          },
          1000: {
            items: 5
          },
          1200: {
            items: 6
          }
        }
      });
    }

    render() {
    const {cast} = this.state

     // handle movie's actors
    const actors_all = cast.length > 0
    ? (
      <div>
        <div className='owl-carousel owl-theme'>
          {
            cast.map(actor => {
              return (
                <div className="_item" style={{'textAlign':'center'}} key={actor.id+actor.name}>
                  <div className="actor-img-box">
                    <img alt="actor-img" src={actor.profile_path ? (`${URL_IMAGE}${actor.profile_path}`) 
                    : (NoActor)} className="animated bounceIn delay-1s"/>
                  </div>
                  <p>{actor.name ? (actor.name) : ('Actor')}</p>
                </div>
              )
            })
          }
        </div>
        <div className="owl-theme">
          <div className="owl-controls">
            <div className="custom-nav owl-nav"></div>
          </div>
        </div>
      </div>
    ) 
    : (<Actorloader/>)

        return (
            <div className="all_actors">
                {actors_all}
            </div>
        )
    }

}

export default Actors
