import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  
  root: {
    marginTop:150,
    marginLeft:80,
    maxWidth: 345,
  },
});

const CompanyCard = (props) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Company N1"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Company N1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Name of company 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            There is will be text about your company 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}