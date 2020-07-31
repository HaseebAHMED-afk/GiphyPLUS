import React from "react";
import styles from "./Trending.module.css";
import { Grid } from "@material-ui/core";

export const Trending = () => {
  return (
    <div>
      <h2 className={styles.trending}>TRENDING Gifs</h2>
      <Grid container spacing={5}>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};
