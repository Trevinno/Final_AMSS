import React, { Component } from "react";


export default class ArtP extends Component {
    render(){
        const {title, url} = this.props;
        return (
            <div>

            <img
            src={url}
            alt={title}
                style={{height: '300px'}}
                 />
            <p> {title}</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            
            </div>
        );
    }
}
