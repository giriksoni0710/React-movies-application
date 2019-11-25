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
import Axios from 'axios'
import { movie, tv, API_KEY, search } from './services/api_config';





class App extends Component {

  
  state = {
    
    multi: '',
    searchValue: '',
    firstsearchresults: [],
    
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
        id: 1,
        label: 'now_playing',
      },
      {
        id: 2,
        label: 'popular',
      },
      {
        id: 3,
        label: 'top_rated',
      },
      {
          id: 4,
          label: 'upcoming'
      }


    ]
  }

  Multiselectselected= multiple=>{
    console.log(multiple);
    this.setState({
        multi: multiple
    })
  }

  searchvalue= searchvalue=>{
    console.log(searchvalue);
    this.setState({
        searchValue: searchvalue
    })
  }
  
  searchresults= ()=>{

    Axios.get(`${search}${this.state.multi}`,{
      params:{
        api_key: API_KEY,
        query: this.state.searchValue
      }
    }).then((response) =>
     {
      //  console.log(response.data.results)
    this.setState(
      {firstsearchresults: response.data.results}
      )
      // console.log("results are :"+response.data.results)
    }).catch(error => console.log(error));

  }

  render(){

  return (

    <div className="App">
    <header>
      <h2 className="title">React Movies App</h2>
    </header>
    <Grid container spacing={2} style={{flexGrow: 1}}>
  <Grid item xs={6} sm={6} spacing={1} style={{textAlign:'right'}}>
  <Searchbox searchedquery={this.searchvalue}></Searchbox>    
  </Grid>
  <Grid item sm={2} spacing={1} style={{textAlign:'center'}}>
  
    <Multiselect Multiselectvalues={this.state.Multiselect}
    Multiselectselected={this.Multiselectselected}></Multiselect>
        
  </Grid>

  <Grid item sm={1} style={{alignSelf: 'center', textAlign: "left"}} >

    <Button variant="contained" color="primary" onClick={this.searchresults}>
            Search
    </Button>
  </Grid>

  </Grid>

  <FullWidthTabs style={{width: '100%'}} 
  tvshowsmultiselect= {this.state.tvshowsmultiselect}
  moviesmultiselect={this.state.moviesmultiselect}
  firstsearchresults={this.state.firstsearchresults}></FullWidthTabs>



  </div>
    );
  }
  }

export default App;
