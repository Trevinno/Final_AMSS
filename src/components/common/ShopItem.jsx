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

export default function ShopItem({key, title, owner_name, cat, cost, onDelete}) {
  return (
    <div>
     <div className="item row">
      <div className="description">
        <span className="column">{title}</span>
        <span className="column">{owner_name}</span>
        <span className="column">{cat}</span>
      </div>
      <Button 
        variant="contained" 
        // className={classes.margin}
        color="secondary" 
        size="small"
        onClick={onDelete}
        // onClick={() => console.log(key)}
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
