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
     <div className="item row white">
      <div className="description">
        <span className="column">{art.title}</span>
        <span className="column">{art.owner.name}</span>
        <span className="column">{art.cat.name}</span>
      </div>
      <Button 
        variant="contained"
        color="secondary" 
        size="small"
        onClick={() => onDelete(art._id)}
        // onClick={onDelete.bind.this}
        style={{
            height: '20x',
            width: '160px',
            left: '220px',
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
