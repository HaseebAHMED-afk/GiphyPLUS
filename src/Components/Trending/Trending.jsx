import React from "react";
import styles from "./Trending.module.css";
import { Grid } from "@material-ui/core";

export const Trending = ({data:data}) => {
  data.map((d,i) =>{
    const {images} = d;
    if(images){
      const {downsized_small} = images;
      console.log(downsized_small);
    }
  })
  
  return (
    <div>
      <h2 className={styles.trending}>TRENDING Gifs</h2>
      
    </div>
  );
};
