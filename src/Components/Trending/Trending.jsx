import React from "react";
import styles from "./Trending.module.css";

export const Trending = ({data:data}) => {
  

  return (
    <div>
      <h2 className={styles.trending}>TRENDING Gifs</h2>
      <div className={styles.image_area}>
      {
        data.map((data,i) =>{
          const {images} = data;
          const original = images ? images.original : null;
          const url = original ? original.url : null;
          return <img key={i} src={url}  className={styles.img}/>
        })
      }
      </div>
    </div>
  );
};
