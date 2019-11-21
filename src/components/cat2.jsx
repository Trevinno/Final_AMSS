import React, { Component } from "react";
import ArtF from "./common/ArtF"
import CatTable from "./common/CatTable"
import {getArtF, getArtFC} from "../database/ArtF"

export default class Cat2 extends Component {
  state = {
    arts: [],
    cats: [],
    css: 'center4'
  };

  componentDidMount() {
    this.setState({arts: getArtF()});
    this.setState({cats: getArtFC()});
}


  render() {
    const {arts, cats,css} = this.state;
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
        {arts.filter(art => art.sub != true && art.cat.name === "Animales").map(art => (
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

