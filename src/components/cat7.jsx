import React, { Component } from "react";
import ArtF from "./common/ArtF"
import CatTable from "./common/CatTable"
import {getArtF, getArtFC} from "../database/ArtF"

export default class Cat1 extends Component {
  state = {
    arts: [],
    cats: [],
    css: 'center4'
  };
  //Esta funcion carga los datos de la base de datos
  componentDidMount() {
    this.setState({arts: getArtF()});
    this.setState({cats: getArtFC()});
}


  render() {
    const {arts, cats, css} = this.state;
    console.log(cats);
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
            {/* Aqui se filtran las artes a base de la categoria */}
        {arts.filter(art => art.sub != true && art.cat.name === "Comics").map(art => (
        <ArtF
        key={art.id}
        title={art.title}
        owner_name={art.owner.name}
        owner_pic={art.owner.pic}
        route={art.route}
        url={art.url}
        css={css}
        />
        ))}

          </div>
        </div>
      </div>
    );
  }
}

