import React, {Component} from 'react';
class Preview extends Component {
    render() {
        return (
            <div className="preview col-md-12" style={{backgroundImage: "url(" + this.props.image + ")"}}>
            <h1 className="preview-text">{ this.props.title }</h1>
            <p className="preview-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum distinctio, 
                quas beatae totam ut aliquid facere aspernatur porro maxime corrupti optio, sed debitis officiis 
                id dicta quidem molestiae natus.</p>
            <p className="preview-rating footer"><i className="fa fa-thumbs-up"></i> 99 Percent of people enjoyed this movie</p>
        </div>
      )
    }
}

export default Preview;
