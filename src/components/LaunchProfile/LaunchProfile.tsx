import React from "react";
import { LaunchProfileQuery } from "../../generated/graphql";
import { Link } from "react-router-dom";
import { Container, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CheckCircle } from "@material-ui/icons";
import CancelIcon from "@material-ui/icons/Cancel";
// @ts-ignore
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles(() => ({
  back: {
    textDecoration: "none",
  },
  heading: {
    color: "#55585c",
    fontWeight: "bold",
  },
  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
}));

interface Props {
  data: LaunchProfileQuery;
}

const LaunchProfile: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  console.log(data);
  if (!data.launch) return <h1>No Launch Available</h1>;

  return (
    <Container>
      <Typography align="center">
        <Link to="/" className={classes.back}>
          Back To Home
        </Link>
      </Typography>
      <Typography
        variant="h4"
        align="center"
        className={classes.heading}
        style={{ margin: "20px 0px" }}
      >
        Mission: {data.launch.mission_name}
      </Typography>
      <Grid container>
        <Grid item container xs={12} sm={12}>
          <Grid item xs={12} sm={7}>
            <Carousel showThumbs={false} infiniteLoop autoPlay stopOnHover>
              {data.launch.links?.flickr_images?.map((img) => (
                <img
                  src={`${img}` || ""}
                  alt={`${img}` || ""}
                  key={img}
                  style={{ height: "400px" }}
                />
              ))}
            </Carousel>
          </Grid>
          <Grid item sm={1} />
          <Grid item xs={12} sm={4}>
            <div className={classes.div}>
              <Typography variant="h5" className={classes.heading}>
                Status
              </Typography>
              <Typography variant="body1">
                {data.launch.launch_success ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <CancelIcon color="error" />
                )}
              </Typography>
            </div>
            <div className={classes.div}>
              <Typography variant="h5" className={classes.heading}>
                Year
              </Typography>
              <Typography variant="body1">{data.launch.launch_year}</Typography>
            </div>
            <div className={classes.div}>
              <Typography variant="h5" className={classes.heading}>
                Rocket
              </Typography>
              <Typography variant="body1">
                {data.launch.rocket?.rocket_name}
              </Typography>
            </div>
            <div className={classes.div}>
              <Typography variant="h5" className={classes.heading}>
                Rocket Type
              </Typography>
              <Typography variant="body1">
                {data.launch.rocket?.rocket_type}
              </Typography>
            </div>

            <div className={classes.div}>
              <Typography variant="h5" className={classes.heading}>
                Launch Site
              </Typography>
              <Typography variant="body1">
                {data.launch.launch_site?.site_name}
              </Typography>
            </div>
            <Typography variant="h5" align="center" className={classes.heading}>
              Details
            </Typography>
            <Typography variant="h6">
              {data.launch.details ? data.launch.details : "Not Available"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LaunchProfile;
