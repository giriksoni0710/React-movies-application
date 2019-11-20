import React from 'react';
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

const useStyles = makeStyles({
  card: {
    maxWidth: "100%",
    display: "flexbox",
    marginTop: "2rem",
    flexDirection: "row"
    
  },
  media: {
    height: 460,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    
    <Card className={classes.card} >
    <Grid container spacing={1} style={{height: '200'}}>
      
      <Grid sm={4}>
      <Card>
        <CardMedia style={{height: "300"}}
          className={classes.media}
          image= {require('../assets/about.jpg')}
          title="Contemplative Reptile"
        />
        </Card>
        </Grid>
        <Grid sm={8} style={{alignSelf: 'center'}}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            Movie Name
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Release date: xyz | Popularity: 524637 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </Typography>
         
        </CardContent>
        </Grid>
        </Grid>      
       </Card>
  
  );
}