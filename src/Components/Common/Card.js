import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "52vh",
    margin: 5,
  },
  fullroot: {
    width: "52vh",
    alignSelf: "center",
    margin: 5,
    textAlign: "center",
    alignItems: "center",
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
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  

  return (
    <Card className={!props.style ? classes.root : classes.fullroot}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.Header}
        </Typography>
        <Typography variant="h2" component="h2">
          {props.temperature} °C
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.location}
        </Typography>
        <Typography variant="body2" component="p">
          Min. Temperature: {props.Mintemp}°C
          <br />
          Max. Temperature : {props.Maxtemp}°C
        </Typography>
      </CardContent>
    </Card>
  );
}
