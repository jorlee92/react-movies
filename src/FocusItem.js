import React, {Component} from 'react';

class FocusItem extends Component {
    render() {
        return (
        <div className="carousel-item">
        <img className="d-block img-fluid" src={this.props.image} alt={this.props.title}/>
        </div>)
    }
}

export default FocusItem;