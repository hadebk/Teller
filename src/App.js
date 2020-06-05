import React, { Component } from 'react';
import { Router , Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar_';
import Home from './components/Home/Home';
import TopRated from './components/TopRated/TopRated';
import Upcoming from './components/Upcoming/Upcoming';
import NowPlaying from './components/NowPlaying/NowPlaying';
import Popular from './components/Popular/Popular';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage';
import Footer from './components/Footer/Footer';
import history from './components/history';
import NoMatchPage from './components/PageNotFound404/PageNotFound';

const $ = window.$;

class  App extends Component {

  componentDidMount() {
    // Change the height of navbar on scroll
    let navbarsc = $('.navbar');
    let mynav = $('#myNavbar');
    
    $(window).scroll(function(){
        if($(window).scrollTop() <= 70){
            navbarsc.removeClass('navbar-scroll')
            mynav.removeClass('mynav-top')
        } else {
            navbarsc.addClass('navbar-scroll')
            mynav.addClass('mynav-top')
        }
    })
  }

  render(){ 
    return (
      <Router history={history}>
        <div className="App">
          <Navbar />
          <Switch> {/* let one Route invoked at a time */}
            <Route exact path="/Teller" component={Home}/>
            <Route path="/Teller/topRated" component={TopRated}/>
            <Route path="/Teller/upComing" component={Upcoming}/>
            <Route path="/Teller/nowPlaying" component={NowPlaying}/>
            <Route path="/Teller/popular" component={Popular}/>
            <Route  path="/Teller/movie/:movie_id" component={MovieDetailsPage}/>
            <Route  path="/Teller/upComing_/:movie_id" component={MovieDetailsPage}/>
            <Route  path="/Teller/topRated_/:movie_id" component={MovieDetailsPage}/>
            <Route  path="/Teller/popular_/:movie_id" component={MovieDetailsPage}/>
            <Route  path="/Teller/nowPlaying_/:movie_id" component={MovieDetailsPage}/>
            <Route component={NoMatchPage} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
  
}

export default App;
