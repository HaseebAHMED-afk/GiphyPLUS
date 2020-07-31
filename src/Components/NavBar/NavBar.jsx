import React from "react";
import styles from "./NavBar.module.css";
import { Button } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
        <h1 className={styles.navHeading}>GIPHY<span className={styles.plus}>+</span></h1>
        <a>Trending</a>
        <a>Movies</a>
        <a>Sports</a>
        <a>Reactions</a>
        <div className={styles.buttonArea}>
        <Button variant="contained" color="primary" className={styles.button} size="medium" startIcon={<AccountCircleIcon />}>Log In</Button>
        <Button variant="outlined" color="secondary" className={styles.button} size="medium" startIcon={<ArrowUpwardIcon />}>Sign Up</Button>
        </div>
    </div>
  );
};
