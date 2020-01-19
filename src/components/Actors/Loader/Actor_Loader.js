import React, {Component} from 'react';
import './Actor_Loader.css';

const $ = window.$
class Actor_Loader extends Component {

    constructor(props) { 
        super(props);
        this.state = {}; 
    } 

    componentDidMount() {
    }

    componentDidUpdate(){
    // owl carousel init
    $('.owl-carousel').owlCarousel({
        stagepadding: 40,
        loop: false,
        margin: 0,
        nav: true,
        autoplay:false,
        autoplayTimeout:2000,
        touchDrag: true,
        autoplayHoverpause:true,
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
        return (
            <div className="all_actors">
                <div className="">
                    <div className='owl-carousel owl-theme'>
                        <div className="_item" style={{'textAlign':'center'}}>
                            <div className="actor-img-box">
                                <div className="light-actor"></div>
                            </div>
                            <div className="p"><div className="light-actor"></div></div>
                        </div>
                        <div className="_item" style={{'textAlign':'center'}}>
                            <div className="actor-img-box">
                                <div className="light-actor"></div>
                            </div>
                            <div className="p"><div className="light-actor"></div></div>
                        </div>
                        <div className="_item" style={{'textAlign':'center'}}>
                            <div className="actor-img-box">
                                <div className="light-actor"></div>
                            </div>
                            <div className="p"><div className="light-actor"></div></div>
                        </div>
                        <div className="_item" style={{'textAlign':'center'}}>
                            <div className="actor-img-box">
                                <div className="light-actor"></div>
                            </div>
                            <div className="p"><div className="light-actor"></div></div>
                        </div>
                        <div className="_item" style={{'textAlign':'center'}}>
                            <div className="actor-img-box">
                                <div className="light-actor"></div>
                            </div>
                            <div className="p"><div className="light-actor"></div></div>
                        </div>
                        <div className="_item" style={{'textAlign':'center'}}>
                            <div className="actor-img-box">
                                <div className="light-actor"></div>
                            </div>
                            <div className="p"><div className="light-actor"></div></div>
                        </div>
                    </div>
                    <div className="owl-theme">
                    <div className="owl-controls">
                        <div className="custom-nav owl-nav"></div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Actor_Loader
