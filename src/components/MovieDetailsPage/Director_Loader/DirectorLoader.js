import React, {Component} from 'react';
import './DirectorLoader.css';

class DirectorLoader extends Component {

    render() {
        return (
            <div style={{'textAlign':'center', 'margin':'0 20px'}} className="director-loader-main">
                <div className="director-img-box">
                    <div className="light-actor"></div>
                </div>
                <div className="_p">
                    <div className="light-actor"></div>
                </div>
            </div>
        )
    }

}

export default DirectorLoader
