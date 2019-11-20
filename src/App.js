import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import  Searchbox  from './Components/Searchbox'
import Multiselect from './Components/Multiselect'
import Multiselect2 from './Components/Multiselect2'
import Multiselect3 from './Components/Multiselect3'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FullWidthTabs  from './Containers/tabcontainer'




class App extends Component {

  
  state = {

    Multiselect: [
      {
        id: '1',
        label: 'multi',
      },
      {
        id: '2',
        label: 'movie',
      },
      {
        id: '3',
        label: 'tv-show',
      },
    ],
    tvshowsmultiselect: [
      {
        id: '1',
        label: 'airing_today',
      },
      {
        id: '2',
        label: 'popular',
      },
      {
        id: '3',
        label: 'on_the_air',
      },
      {
          id: '4',
          label: 'top_rated'
      }
    ],
    moviesmultiselect: [
      {
        id: '1',
        label: 'now_playing',
      },
      {
        id: '2',
        label: 'popular',
      },
      {
        id: '3',
        label: 'top_rated',
      },
      {
          id: '4',
          label: 'upcomming'
      }


    ]





  }

  render(){

  return (

    <div className="App">
    <header>
      <h2 className="title">React Movies App</h2>
    </header>
    <Grid container spacing={2} style={{flexGrow: 1}}>
  <Grid item xs={6} sm={6} spacing={1} style={{textAlign:'right'}}>
  <Searchbox></Searchbox>    
  </Grid>
  <Grid item sm={2} spacing={1} style={{textAlign:'center'}}>
  
    <Multiselect Multiselectvalues={this.state.Multiselect}></Multiselect>
        
  </Grid>

  <Grid item sm={1} style={{alignSelf: 'center', textAlign: "left"}} >

    <Button variant="contained" color="primary" >
            Search
    </Button>
  </Grid>

  </Grid>

  <FullWidthTabs style={{width: '100%'}} 
  tvshowsmultiselect= {this.state.tvshowsmultiselect}
  moviesmultiselect={this.state.moviesmultiselect}></FullWidthTabs>



  </div>
    );
  }
  }

export default App;
