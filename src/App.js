import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import  Searchbox  from './Components/Searchbox'
import Multiselect from './Components/Multiselect'
import Grid from '@material-ui/core/Grid'
import { textAlign } from '@material-ui/system';
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/styles';


class App extends Component {
  

  render(){

  return (

    <div className="App">
    <header>
      <h2 className="title">React Movies App</h2>
    </header>
    <Grid container spacing={2} style={{flexGrow: 1}}>
  <Grid item xs={6} sm={6} spacing={2} style={{textAlign:'right'}}>
  <Searchbox></Searchbox>    
  </Grid>
  <Grid item sm={2} spacing={1} style={{textAlign:'center'}}>
  
    <Multiselect></Multiselect>
        
  </Grid>

  <Grid item sm={1} style={{alignSelf: 'center', textAlign: "left"}} >

    <Button variant="contained" color="primary" className="buttonclass">
            Primary
    </Button>
  </Grid>

  </Grid>



  </div>
    );
  }
  }

export default App;
