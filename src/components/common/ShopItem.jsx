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

export default function ShopItem({key, title, owner_name, cat, cost}) {
  return (
    <div>
     <div className="item">
      <div className="description">
        <span>{title}</span>
        <span>{owner_name}</span>
        <span>{cat}</span>
      </div>
      <Button 
        variant="contained" 
        // className={classes.margin}
        color="secondary" 
        size="small"
        style={{
            height: '20x',
            width: '160px',
            left: '220px',
            top: '-10px'
        }}>
            Remove from cart
        </Button>
      <div className="quantity">
        <input type="text" name="name" defaultValue={100} />
      </div>
      <div className="total-price">{cost}</div>
    </div>
    </div>
  );
}
