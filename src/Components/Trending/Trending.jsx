import React, { useState } from "react";
import styles from "./Trending.module.css";
import { Grid } from "@material-ui/core";

export const Trending = ({data:data}) => {
  const {images} = data[0];
  const downsized = images ? images.downsized : null;
  const url = downsized ? downsized.url : null;

  return (
    <div>
      <h2 className={styles.trending}>TRENDING Gifs</h2>
      {
        data.map((data,i) =>{
          const {images} = data;
          const original = images ? images.original : null;
          const url = original ? original.url : null;
          return <img key={i} src={url} height="320" width="320" />
        })
      }
    </div>
  );
};
