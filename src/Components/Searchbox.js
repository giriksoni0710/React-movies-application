import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '50%',
  },
}));

class Searchbox extends Component {

  state={
    searchvalue:''
  }
  handleChange = event => {
    this.setState({searchvalue: event.target.value});
    
    this.props.searchedquery(event.target.value)
  };

render(){
return (

<div>
        <TextField
          id="outlined-basic"
          label="Search"
          style={{width: '50%'}}
          value={this.state.searchvalue}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
      </div>

)
}

}

export default Searchbox