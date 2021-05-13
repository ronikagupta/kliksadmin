import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 220,
    width:350,
    marginLeft: -50,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    
    <Card style={{}} className={classes.root}>
      
      <CardActionArea>
        <CardMedia
          // component="img"
          // alt="Contemplative Reptile"
          // height="80"
          // // image="/static/images/cards/contemplative-reptile.jpg"
          // title="Contemplative Reptile"
        />
       
        <CardContent>

        <Typography gutterBottom variant="h4" component="h2">
            $0.00
          </Typography>
          <Typography gutterBottom variant="h5" component="h1">
           Reimbursement
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
           (last 30 days)
          </Typography>
          <Typography  gutterBottom variant="h6" component="h2">
          <Link to="/Reimbursement" style={{color:"#16B396"}}>View Reimbursement</Link>
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
    </Card>
  );
}