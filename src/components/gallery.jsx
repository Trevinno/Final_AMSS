import React, {Component} from "react";
import { Grid, Cell } from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import './css/feed.css'
import { fontSize } from "@material-ui/system";
import ArtF from "./common/ArtF"
import {getArtF, getArfFU} from "../database/ArtF"


// Gallery es la pagina de museo, en este codigo solo tiene diferente nombre
export default class Gallery extends Component {
constructor(props) {
    super(props);
    this.state = {
        arts: [],
        unique:[],
        css: 'center2'
    };
    }
    //Esta funcion carga la informacin del arte de la base de datos
    componentDidMount() {
        this.setState({arts: getArtF()});
        this.setState({unique: getArfFU()});
    }
    //Esta funcion crea un arrglo con las pinturas pero sin repetir las categorias
    onlyUnique = (value, index, self) => { 
        return self.indexOf(value) === index;
    }


    render() {
    const {arts, unique, css} = this.state;
    return (
        // Aqui se encuentras las obras que se pueden ver si tienes una subscripcion activa
    <div>
    <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item minimenu">
             {arts.length} Posts </li>
        <li className="breadcrumb-item minimenu">
            2 New Posts</li>
        <li className="breadcrumb-item minimenu">
             {unique} Subscribers </li>
        </ol>
    </nav>

    <div>
        {/* Aqui se mapean las artes a base de si el usuario esta subscrito al los otros usuarios */}
    {arts.filter(art => art.sub === true).map(art => (
    <ArtF
    key={art.id}
    title={art.title}
    owner_name={art.owner.name}
    owner_pic={art.owner.pic}
    route={art.route}
    url={art.url}
    css={css}
    {...this.props}
    />
    ))}
    </div>


    </div>
  );
}
}