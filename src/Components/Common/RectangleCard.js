import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    margin: 10,
    minWidth: 20,
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 14,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
    >
      <Grid item xs={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} gutterBottom>
              Temperature difference
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Temperature difference: {Math.abs(props.temp).toFixed(2)}°C
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              
            >
              Min Temperature difference: {Math.abs(props.minTemp).toFixed(2)}°C
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Min Temperature difference: {Math.abs(props.minTemp).toFixed(2)}°C
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
