import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { LaunchListQuery } from "../../generated/graphql";
import { Typography, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DefaultImg from "../images/spacex.jpg";

const useStyles = makeStyles({
  heading: {
    color: "#55585c",
  },
  paperContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  paper: {
    width: "200px",
    margin: "20px 0px",
    padding: "5px",
  },
  img: {
    width: "100%",
  },
  typo: {
    paddingTop: "5px",
  },
});

interface Props {
  data: LaunchListQuery;
}

const LaunchList: React.FC<Props> = ({ data }) => {
  const classes = useStyles();

  const { launches } = data;

  return (
    <Fragment>
      <Typography variant="h4" align="center" className={classes.heading}>
        LAUNCHES
      </Typography>
      <Grid container>
        <Grid item xs={1} sm={1} />
        <Grid item xs={10} sm={10}>
          <div className={classes.paperContainer}>
            {launches?.map((launch) => (
              <Paper
                elevation={3}
                className={`${classes.paper} paper`}
                key={launch?.id}
              >
                <Link to={`/${launch?.id}`}>
                  <img
                    src={launch?.links?.mission_patch || DefaultImg}
                    alt={`${launch?.mission_name}` || "spacex"}
                    className={classes.img}
                  />
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.typo}
                  >
                    {launch?.mission_name} - {launch?.launch_year}
                  </Typography>
                </Link>
              </Paper>
            ))}
          </div>
        </Grid>
        <Grid item xs={1} sm={1} />
      </Grid>
    </Fragment>
  );
};

export default LaunchList;
