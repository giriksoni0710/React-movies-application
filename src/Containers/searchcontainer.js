import React, {Component} from 'react';
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



class SearchCard extends Component {

  render(){

   const {firstsearchresults} = this.props; 
    return (

      <div>

    {firstsearchresults.map(mixed=>{

const { id, title, poster_path, overview,release_date, popularity }=mixed

return(
    <Card key={id} style={{    maxWidth: "100%",
    display: "flexbox",
    marginTop: "2rem",
    flexDirection: "row"

    }} 
    >
    <Grid container spacing={1} style={{height: '200'}}>
      
      <Grid sm={4}>
      <Card>
        <CardMedia style={{height: 460}}
          image= {`http://image.tmdb.org/t/p/w185/${poster_path}`}
          title="Contemplative Reptile"
        />
        </Card>
        </Grid>
        <Grid sm={8} style={{alignSelf: 'center'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {title}
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Release date: {release_date} | Popularity: {popularity} 
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

       </div>
  );
  }
  }

  export default SearchCard