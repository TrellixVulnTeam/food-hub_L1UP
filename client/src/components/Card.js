import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function MediaCard({ name, thumbnail, link }) {
  const classes = useStyles();

  return (
    <div className="col-lg-4 d-flex  justify-content-around mt-5">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={"http://localhost:4000/images/" + thumbnail}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/restaurant">
            <Link to={link}>
              <Button size="small" color="primary">
                Order
              </Button>
            </Link>
          </Link>
          <Button size="small" color="primary">
            Website
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default MediaCard;
