import { Box, Grid } from "@material-ui/core";
import React from "react";
import Banner from "./Banner";
import Catogeries from "./Catogeries";
import Post from "./Posts";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
            <Grid item lg={2} xs={12} sm={2}>
                 <Catogeries />
            </Grid>
            <Grid container item lg={10} xs={12} sm={10}>
                 <Post />
            </Grid>
      </Grid>
    </>
  );
};

export default Home;
