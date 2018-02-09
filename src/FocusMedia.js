import React, {Component} from 'react';
import FocusItem from './FocusItem';
class FocusMedia extends Component {
    render() {
        return (<div id="FocusMedia" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
            <FocusItem 
            image="https://www.screengeek.net/wp-content/uploads/2017/05/thor-ragnarok-marvel.png"
            title="Thor"/>
        </div>
      </div>
      )
    }
}

export default FocusMedia;