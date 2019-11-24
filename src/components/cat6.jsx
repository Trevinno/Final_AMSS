import React, { Component } from "react";
import ArtF from "./common/ArtF"
import CatTable from "./common/CatTable"
import {getArtF, getArtFC} from "../database/ArtF"

export default class Cat1 extends Component {
  state = {
    arts: [],
    cats: [],
    css: 'center4',
    term: ''
  };
  //Esta funcion carga los datos de la base de datos
  componentDidMount() {
    this.setState({arts: getArtF()});
    this.setState({cats: getArtFC()});
}

//Esta funcion actualiza el state con lo que se busque
searchHandler = (e) => {
  this.setState({term: e.target.value})
}

//Esta funcion se usa para filtar la busquda
searchingFor = (term) => {
  return (x) => {
    return x.owner.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}


  render() {
    const {arts, cats, css, term} = this.state;
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

          {/* Con este componente se pueden hacer busquedas a base del autor */}
          <h3>Search Bar</h3>
        <form> <input
         type='text'
         onChange={this.searchHandler}
         value={term}
          />
        </form>
        
            {/* Aqui se filtran las artes a base de la categoria */}
        {arts.filter(this.searchingFor(term)).filter(art => art.sub != true && art.cat.name === "Caricaturas").map(art => (
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

