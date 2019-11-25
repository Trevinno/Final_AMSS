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
    id="standard-basic"
    label="How many Months?"
    margin="normal"
  />
</div> 
<Button variant="outlined" onClick={this.props.closePopup}>
        Send Subscription to Cart
</Button>
</div>  
);  
}  
}  
