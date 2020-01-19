import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import * as serviceWorker from './serviceWorker';
import './index.css'

const $ = window.$;

    // owl carousel init
    $('.main-content .owl-carousel').owlCarousel({
      stagePadding: 50,
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'
      ],
      navContainer: '.main-content .custom-nav',
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 4
        },
        1000: {
          items: 6
        }
      }
    });

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
