import React from 'react';  
import './popup'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Popup extends React.Component {  
    render() {  
  return (  
  <div className='popup'>  
  <div className='popup\_inner'>  
  <TextField
    id="standard-basic"
    label="Nombre de imagen"
    margin="normal"
  />
  </div> 
  <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
  <Button variant="outlined" onClick={this.props.closePopup}>
        Post Artwork
  </Button>
  </div>  
  );  
  }  
  }  
  
  export default Popup;