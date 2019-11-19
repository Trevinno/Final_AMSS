import React, {Component} from "react";
import { Grid, Cell } from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import './css/feed.css'
import { fontSize } from "@material-ui/system";
import ArtF from "./common/ArtF"
import {getArtF, getArtFC} from "../database/ArtF"
import CatTable from "./common/CatTable"



export default class Gallery extends Component {
constructor(props) {
    super(props);
    this.state = {
        arts: [],
        cats:[]
    };
    }
    //Aqui se carga la base de datos al estado local del componente
    componentDidMount() {
        this.setState({arts: getArtF()});
        this.setState({cats: getArtFC()});
    }



    render() {
    const {arts, cats} = this.state;
    return (
        <div style={{ marginTop: "1em" }}>
        <div className="row">
          <div className="col-2">
            <CatTable
            cats={cats}
            {...this.props}
            />
          </div>
          <div className="col-10">
          {/* Aqui se filtran los componentes a base de los trabajos que no tienen a alguien subscripto */}
          {arts.filter(art => art.sub === false).map(art => (
            <ArtF
            key={art.id}
            title={art.title}
            owner_name={art.owner.name}
            owner_pic={art.owner.pic}
            route={art.route}
            url={art.url}
            />
            ))}
          </div>
        </div>
      </div>
  );
}
}
