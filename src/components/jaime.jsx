import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './css/portfolio.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArtP from './common/ArtP'
import getArtP from '../database/ArtsP'
import Popup from './popup'
import PopupC from './popupC'
import PopupS from './popupS'


export default class Portfolio extends Component {
    constructor(props) {
    super(props);
    this.state = {
        arts: [],
        showPopup: false,
        showPopupC: false,
        showPopupS: false
    };
    }
    // este botton permite el uso de una ventana pop up al momento de precionar el boton
    togglePopup() {  
      this.setState({  
           showPopup: !this.state.showPopup  
      });  
      } 

      togglePopupC() {  
        this.setState({  
             showPopupC: !this.state.showPopupC 
        });  
        } 

        togglePopupS() {  
          this.setState({  
               showPopupS: !this.state.showPopupS  
          });  
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
                src="https://i.ibb.co/x1HMCG8/099980.jpg"
                alt="avatar"
                style={{height: '200px'}}
              />

            </div>

            <h2 style={{paddingTop: '0.2em'}}>Jaime Gomez</h2>
            <div className="row"> 
            <div className="column">

            <TextField
            id="filled-name"
            label="e-mail"
            value="jaimegomezg@gmail.com"
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
            value="JaimeG"
            margin="normal"
            variant="filled"
            />

            <TextField
            id="filled-name"
            label="State"
            value="Nuevo Leon"
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
            value="Monterrey"
            margin="normal"
            variant="filled"
            />

            </div>
            </div>
            <br/>
            <Button variant="contained" color="primary" onClick={this.togglePopup.bind(this)}>
            Message Artist
            </Button>
          
            <Button variant="contained" color="secondary" onClick={this.togglePopupS.bind(this)}>
            Subscribe
            </Button>

            <Button variant="contained" color="primary" onClick={this.togglePopupC.bind(this)}>
            Commission Artist
            </Button>

            {/* El boton permite que el usuario agregue informacion para poder mensajear el dueño del perfil */}
            {this.state.showPopup ?  
            <Popup    
            closePopup={this.togglePopup.bind(this)}  
            />  
            : null  
            } 

            {/* El boton permite que el usuario agregue informacion para poder mensajear el dueño del perfil */}
            {this.state.showPopupS ?  
            <PopupS   
            closePopup={this.togglePopupS.bind(this)}  
            />  
            : null  
            } 
          

            {/* El boton permite que el usuario agregue informacion para poder mensajear el dueño del perfil */}
            {this.state.showPopupC ?  
            <PopupC    
            closePopup={this.togglePopupC.bind(this)}  
            />  
            : null  
            } 
            

            <div className="row">
            
            <div className="column">
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {arts.filter(art => art.column === 1 && art.owner === "Jaime Gomez").map(art => (
            <ArtP
            key={art.id}
            title={art.title}
            url={art.url}
            />
            ))}
            </div>

            <div className="column">
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {arts.filter(art => art.column === 2 && art.owner === "Jaime Gomez").map(art => (
            <ArtP
            key={art.id}
            title={art.title}
            url={art.url}
            />
            ))}
            </div>

            <div className="column">
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            {arts.filter(art => art.column === 3 && art.owner === "Jaime Gomez").map(art => (
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