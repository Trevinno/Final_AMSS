import React from 'react';  
import './popup'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class PopupC extends React.Component {  
  render() {  
return (  
<div className='popup'>  
<div className='popup\_inner'>  
<TextField
id="outlined-multiline-static"
label="Details of artwork"
multiline
rows="4"
defaultValue="Write your message here"
margin="normal"
variant="outlined"
/> 
</div> 
<Button variant="contained" color='secondary' component="span">
          Payment Method
</Button>
<Button variant="outlined" onClick={this.props.closePopup}>
        Send Comission
</Button>
</div>  
);  
}  
}  
