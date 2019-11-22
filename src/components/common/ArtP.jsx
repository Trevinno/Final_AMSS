import React, { Component } from "react";
import '../css/portfolio.css'

export default class ArtP extends Component {
    render(){
        const {title, url} = this.props;
        return (
            <div>
            {/* Shows the image of the art */}
            <img
            src={url}
            alt={title}
                style={{height: '300px'}}
                 />
            <p className='font'> {title}</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
            </div>
        );
    }
}
