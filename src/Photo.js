import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";

const styles = {
  card: {
    maxWidth: 345,
    float: "left",
    padding: "20px"
  },
  media: {
    height: 140
  }
};

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      likes: []
    };
  }

  componentDidMount() {
    axios
      .get("http://starlord.hackerearth.com/insta")
      .then(response => {
        return response.data;
      })
      .then(response => {
        console.log(response[0].Image);
        let photos = response.map((photo, i) => {
          this.setState({ images: [...this.state.images, response[i].Image] });
        });
      });
  }

  /* render() {
    const { classes } = this.props;
    let photos = this.state.images.map(photo => {
      return (
        <div>
          <img src={photo} width="200px" height="200px" />
        </div>
      );
    });
    console.log(this.state.images);
    return <div>{photos}</div>;
  }
}
MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Photo;*/

  render() {
    const { classes } = this.props;
    let photos = this.state.images.map(photo => {
      return (
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={photo}
              title="Contemplative Reptile"
            />
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Like
            </Button>
            <Button size="small" color="primary">
              Delete
              <DeleteIcon />
            </Button>
          </CardActions>
        </Card>
      );
    });
    console.log(this.state.images);
    return <div className="Photos">{photos}</div>;
  }
}
Photo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Photo);
