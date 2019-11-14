import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './css/portfolio.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArtP from './common/ArtP'
import getArtP from '../database/ArtsP'


export default class Portfolio extends Component {
    constructor(props) {
    super(props);
    this.state = {
        arts: [],
    };
    }

    componentDidMount() {
        this.setState({arts: getArtP()});
    }


  render() {
    const {arts} = this.state;
    return(
      <div style={{textAlign: 'center'}}>
        <Grid>
          <Cell col={2}>
            <div style={{textAlign: 'center', justifyContent: 'center',
                  alignItems: 'center'}, {paddingTop: '2em'}}   >
              <img
                src="https://i.ibb.co/yPkzTHq/099940.jpg"
                alt="avatar"
                style={{height: '200px'}}
                 />

            </div>

            <h2 style={{paddingTop: '0.2em'}}>Cristina Perez</h2>
            <div className="row"> 
            <div className="column">

            <TextField
            id="filled-name"
            label="e-mail"
            value="crisprz96@gmail.com"
            margin="normal"
            variant="filled"
            />

            <TextField
            id="filled-name"
            label="Country"
            value="Mexico"
            margin="normal"
            variant="filled"
            />
            </div>

            <div className="column">
            
            <TextField
            id="filled-name"
            label="Username"
            value="Blooming_Flower"
            margin="normal"
            variant="filled"
            />

            <TextField
            id="filled-name"
            label="State"
            value="Tamaulipas"
            margin="normal"
            variant="filled"
            />

            </div>
          

            <div className="column">
            

            <TextField
            id="filled-name"
            label="Occupation"
            value="Artist"
            margin="normal"
            variant="filled"
            />

            <TextField
            id="filled-name"
            label="City"
            value="Matamoros"
            margin="normal"
            variant="filled"
            />

            </div>
            </div>
            <br/>
            <Button variant="contained">
            Post New Artwork
            </Button>


            <div className="row">

            <div className="column">
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {arts.filter(art => art.column === 1 && art.owner === "Cristina Perez").map(art => (
            <ArtP
            key={art.id}
            title={art.title}
            url={art.url}
            />
            ))}
            </div>

            <div className="column">
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {arts.filter(art => art.column === 2 && art.owner === "Cristina Perez").map(art => (
            <ArtP
            key={art.id}
            title={art.title}
            url={art.url}
            />
            ))}
            </div>

            <div className="column">
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {arts.filter(art => art.column === 3 && art.owner === "Cristina Perez").map(art => (
            <ArtP
            key={art.id}
            title={art.title}
            url={art.url}
            />
            ))}
            </div>

            </div>


          </Cell>
          <Cell className="resume-right-col" col={8}>
          </Cell>
        </Grid>
      </div>
    )
  }
}

