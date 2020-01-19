import React, {Component} from 'react';
import './AllMoviesLoader.css';

class AllMoviesLoader extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            items:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
        };
    } 

    render() {

        var items_card= this.state.items.map((i)=>{
            return(
                <div className="col-lg-3 col-lg-offset-1 col-md-4 col-sm-6 col-xs-12 pos" key={i}>
                    <div className="box-poster hvr-float-shado">
                        <div className="light-actor"></div>
                    </div>
                    <div className="data-box">
                        <div className="movie-date animated fadeIn delay-1s">
                            <div className="light-actor"></div>
                        </div>
                        <div className="line2-box animated fadeIn delay-1s">
                            <div className="light-actor"></div>
                        </div>
                    </div> 
                </div>
            )
        })

        return (
            <div className="movies-box _card_loader row animated fadeIn">
                {items_card}
            </div>
        )
    }

}

export default AllMoviesLoader
