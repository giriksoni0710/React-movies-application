import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { isAbsolute } from 'path';
import { flexbox } from '@material-ui/system';
import Grid from '@material-ui/core/Grid'

import  Multiselect3  from '../Components/Multiselect3'

import { getTv } from '../services/api'


class MediaCard2 extends Component {

  state={
  tvshowslist: []
  }
   
  getTvdata = (type) =>{
    getTv(type).then((response)=>{

      console.log(response.results);
      this.setState({tvshowslist: response.results})
    }).catch((err)=>{
      console.log(err);
    })
  }

  render(){
  return (


    <>

  <Multiselect3 getTvdata={this.getTvdata} tvshowsmultiselect={this.props.tvshowsmultiselect}></Multiselect3>

  
  {this.state.tvshowslist.map(tvshow=>{
  const {id, overview, poster_path, original_name, first_air_date, popularity} = tvshow
    
  return(     

    <Card key={id} style={{ maxWidth: "100%",
    display: "flexbox",
    marginTop: "2rem",
    flexDirection: "row"
    }}>
    <Grid container spacing={1} style={{height: '200'}}>
      
      <Grid sm={4}>
      <Card>
        <CardMedia style={{height: 460}}
         image={`http://image.tmdb.org/t/p/w185/${poster_path}`}
         title="Contemplative Reptile"
        />
        </Card>
        </Grid>
        <Grid sm={8} style={{alignSelf: 'center'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {original_name}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Release date: {first_air_date} | Popularity: {popularity} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {overview}
          </Typography>
         
        </CardContent>
        </Grid>
        </Grid>      
       </Card>
        )
       })}
       </>
  
  );
  }
}

export default MediaCard2