import React, { Component } from "react";
import ArtF from "./common/ArtF"
import CatTable from "./common/CatTable"
import {getArtF, getArtFC} from "../database/ArtF"

export default class Cat1 extends Component {
  state = {
    arts: [],
    cats: []
  };
  //Aqui se carga la base de datos al estado local
  componentDidMount() {
    this.setState({arts: getArtF()});
    this.setState({cats: getArtFC()});
}


  render() {
    const {arts, cats} = this.state;
    console.log(cats);
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
          {/* Aqui se filtran los trabajos de arte a base de la categoria */}
        {arts.filter(art => art.sub != true && art.cat.name === "Retratos").map(art => (
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

