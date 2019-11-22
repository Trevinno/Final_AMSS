import React from 'react';  
import './popup'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class Popup extends React.Component {  
    render() {  
  return (  
  <div className='popup'>  
  <div className='popup\_inner'>  
  <div>
  <TextField
    id="standard-basic"
    label="country"
    margin="normal"
  />
  </div>
  <div>
  <TextField
    id="standard-basic"
    label="state"
    margin="normal"
  />
  </div>
  <div>
  <TextField
    id="standard-basic"
    label="city"
    margin="normal"
  />
  </div>
  <div>
  <TextField
    id="standard-basic"
    label="username"
    margin="normal"
  />
  </div>
  <TextField
    id="standard-basic"
    label="occupation"
    margin="normal"
  />
  </div> 
  <Button variant="outlined" onClick={this.props.closePopup}>
        Save Changes
  </Button>
  </div>  
  );  
  }  
  }  
  
  export default Popup;