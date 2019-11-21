import React, { Component } from "react";
import '../css/feed.css'
import { Grid, Cell } from 'react-mdl';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { fontSize } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
    margin: {
    margin: theme.spacing(1),
    }
    }));


export default class ArtF extends Component {
    render(){
        const {title, owner_name, owner_pic, route, url, history, match,css} = this.props;
        // const classes = useStyles();
        return (
        <div>
        {/* A continuacion se carga todas las partes del componente como el titulo, artista, la foto y opciones de navegacion */}
        <p className="center3 font">{title}</p>
        <div className={css}>
        <img
            src={url}
            alt={title}
            className="imgcss"
            // style={{
            //     height: '400px',
            //     width: '400px',
            //     left: '5px'
            // }}
            />

        <div className="center font2"> 
            <img
                src={owner_pic}
                alt="avatar"
                className="avatarcss"
                // style={{
                // height: '80px',
                // width: '80px'
                // }}
                    />
        {owner_name}
        </div> 
        <div>
        <Button 
        variant="contained" 
        // className={classes.margin}
        color="primary" 
        size="small"
        className="buttoncssx"
        onClick={() => history.push(route)}
        // style={{
        //     height: '50x',
        //     width: '160px',
        //     left: '220px',
        //     top: '1px'
        // }}
        >
            Explore
        </Button>
        </div>
        <Button 
        variant="contained" 
        className="buttoncssb"
        // className={classes.margin}
        color="secondary" 
        size="small"
        // style={{
        //     height: '20x',
        //     width: '160px',
        //     left: '220px',
        //     top: '-10px'
        // }}
        >
            Add to Cart
        </Button>

    </div>


            
            </div>
        );
    }
}