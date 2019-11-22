import React from "react";
import '../css/shopping.css'
import { Grid, Cell } from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { fontSize } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  margin: {
  margin: theme.spacing(1),
  }
  }));

export default function ShopItem({key, title, owner_name, cat, cost, onDelete, art}) {
  return (
    <div style={{
      padding: '2px'
    }}>
      {/* Aqui se encuentra la informacion de cada objeto que se va a comprar */}
     <div className="item white">
        <span style={{margin: '4px'}}>{art.title}</span>
        <span style={{margin: '8px'}}>{art.owner.name}</span>
        <span style={{margin: '4px'}}>{art.cat.name}</span>
        <span style={{marginLeft: '20px', right: '8px'}}>Cost: {art.shopping.cost}</span>
      <Button 
        variant="contained"
        color="secondary" 
        size="small"
        onClick={() => onDelete(art._id)}
        // onClick={onDelete.bind.this}
        style={{
            height: '20x',
            width: '160px',
            left: '100px',
            top: '-10px'
        }}>
            Remove from cart
        </Button>
      <div className="quantity">
        {/* <input type="text" name="name" defaultValue={100}/> */}
        <div className="total-price">{cost}</div>
      </div>
    </div>
    </div>
  );
}
