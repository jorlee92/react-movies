import React, {Component} from 'react';

class MediaCard extends Component {

    render() {
    return (
      <div className="video col-md-3">
      <img className="video-image" src={this.props.img} alt={this.props.title}/>

      </div>);
    }
}

export default MediaCard;