import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 593
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

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined" style={{marginLeft: "auto", marginRight: "auto", marginTop: "50px"}}>
      <CardContent>
        <Typography variant="h4" component="h2">
          Instructions
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          Made with <span>❤️</span> by Jack He <br />
          Please consider subscribing to my{" "}
          <a href="https://youtube.com/c/JackHeTech" target="_blank">
            YouTube channel.
          </a>
        </Typography>

        <Typography variant="h5" component="h2">
          1. Write Code
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{ marginLeft: "30px" }}
        >
          - You MUST include at least 1 recursive function
          <br />
          - If you defined more than 1 function, please specify which one to track.  
          <br />
          - NO empty return statements. You gotta return something.
          <br />
          - Be sure to call your function in the end.
          <br />
          - Make sure the code you write follows correct syntax and indentation
          (Python 3.8) <br />
        </Typography>
        <Typography variant="h5" component="h2">
          2. Run Code
        </Typography>
        <Typography
          variant="body2"
          component="p"
          style={{ marginLeft: "30px" }}
        >
          - If all goes well, you will see a nice recursive visualization of
          your function <br />
          - Green node == initial call. Red node == recursive call. Blue node == base case. <br />
          - Turn 'Jelly' off for a static graph <br />- Click on any Node and
          view it's return value
        </Typography>
        <br />
        <br />
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QwUZxCBtfLw"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder = "0"
        ></iframe>
      </CardContent>
    </Card>
  );
}
