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
id="outlined-multiline-static"
label="Message"
multiline
rows="4"
defaultValue="Write your message here"
margin="normal"
variant="outlined"
/> 
</div> 
<Button variant="outlined" onClick={this.props.closePopup}>
        Send Message
</Button>
</div>  
);  
}  
}  

export default Popup;