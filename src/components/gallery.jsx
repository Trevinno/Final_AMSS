import React, {Component} from "react";
import { Grid, Cell } from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import './css/feed.css'
import { fontSize } from "@material-ui/system";
import ArtF from "./common/ArtF"
import {getArtF, getArfFU} from "../database/ArtF"



export default class Gallery extends Component {
constructor(props) {
    super(props);
    this.state = {
        arts: [],
        unique:[]
    };
    }

    componentDidMount() {
        this.setState({arts: getArtF()});
        this.setState({unique: getArfFU()});
    }

    onlyUnique = (value, index, self) => { 
        return self.indexOf(value) === index;
    }


    render() {
    const {arts, unique} = this.state;
    return (
    <div>
      
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item" style={{
            left: '35%'
            }}> {arts.length} Posts </li>
        <li className="breadcrumb-item" style={{
            left: '35%'
            }}>2 New Posts</li>
        <li className="breadcrumb-item"  style={{
            left: '35%'
            }}> {unique} Subscribers </li>
        </ol>
    </nav>

    <div>
    {arts.filter(art => art.sub === true).map(art => (
    <ArtF
    key={art.id}
    title={art.title}
    owner_name={art.owner.name}
    owner_pic={art.owner.pic}
    route={art.route}
    url={art.url}
    {...this.props}
    />
    ))}
    </div>


    </div>
  );
}
}