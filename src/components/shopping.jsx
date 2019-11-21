import React, { Component } from "react";
import './css/shopping.css'
import {getArtF} from "../database/ArtF"
import ShopItem from './common/ShopItem'
import { Grid, Cell } from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { fontSize } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  margin: {
  margin: theme.spacing(1),
  }
  }));

export default class Shopping extends Component {
  constructor() {
    super();
    this.state = {
    arts: [],
  };
}


  componentDidMount() {
    this.setState({arts: getArtF()});
  }
  // Esta funcion hace que los componentes individuales de compra se puedan borrar
  handleDelete = itemID => {
    console.log("Event Handler Called", itemID);
    const shopitems = this.state.arts.filter(c => c._id !== itemID);
    this.setState({ arts: shopitems });
  };


render() { 
  const {arts} = this.state;
  console.log(arts);
  let may = 8;
  let total = arts.filter(art => art.shopping.cost > 1).reduce((acc, cur) => {
    return acc + cur.shopping.cost;
  }, 0);
  console.log(total, 'aqui');
return(
    <div>
      <shopItem></shopItem>
    {/* Title */}
    <div className="title">Shopping Bag</div>
    <div>
    {/* Aqui se mapean los componentes */}
    {arts.filter(art => art.shopping.cost > 1).map(art => (
        <ShopItem
        art={art}
        // title={art.title}
        // owner_name={art.owner.name}
        // cat={art.name}
        // cost={art.cost}
        onDelete={this.handleDelete}
        />
        ))}
    </div>
    <div className="item white">
      <div className="description">
    <p>Total: {total}</p>
      </div>
      <Button 
        variant="contained" 
        // className={classes.margin}
        color="secondary" 
        size="small"
        // onClick={console.log("hello")}
        style={{
            height: '20x',
            width: '660px',
            left: '1px',
            top: '-10px'
        }}>
            Buy
        </Button>
    </div>
    </div>

        );   
    }
}
