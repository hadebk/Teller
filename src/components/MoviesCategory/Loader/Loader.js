import React, {Component} from 'react';
import './Loader_style.css';

class Loader extends Component {


  
  render() {

    return (
      <div className="loader-box container">
        <div className="poster"><div className="light"></div></div>
        <div className="data-11"><div className="light"></div></div>
        <div className="data-22"><div className="light"></div></div>
      </div>
    )
  }
}
export default Loader