import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';


class Multiselect3 extends Component {
  
state={

  value:'',
  alltvshows: []

}


  
  handleChange = event => {
    this.setState({value: event.target.value});
    
    this.props.getTvdata(event.target.value)
  };
render(){
  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField style={{ width: 200}}
          id="outlined-select-currency-native"
          select
          label="Category"
          value={this.state.value}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        >
          {this.props.tvshowsmultiselect.map(option => (
            <option key={option.id} value={option.label}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
          }
}

export default Multiselect3