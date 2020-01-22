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
            <Route exact path="/" component={Home}/>
            <Route path="/topRated" component={TopRated}/>
            <Route path="/upComing" component={Upcoming}/>
            <Route path="/nowPlaying" component={NowPlaying}/>
            <Route path="/popular" component={Popular}/>
            <Route  path="/movie/:movie_id" component={MovieDetailsPage}/>
            <Route  path="/upComing_/:movie_id" component={MovieDetailsPage}/>
            <Route  path="/topRated_/:movie_id" component={MovieDetailsPage}/>
            <Route  path="/popular_/:movie_id" component={MovieDetailsPage}/>
            <Route  path="/nowPlaying_/:movie_id" component={MovieDetailsPage}/>
            <Route component={NoMatchPage} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
  
}

export default App;