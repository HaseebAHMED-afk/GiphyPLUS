import React from 'react';
import styles from './App.module.css';
import { NavBar } from './Components/NavBar/NavBar';
import { Typography } from '@material-ui/core';
import { Trending } from './Components/Trending/Trending';

class App extends React.Component{
  render(){
    return (
      <div>
        <NavBar />
        <img className={styles.ad1} src="https://media.giphy.com/headers/2020-07-27-05-1595862312/NBA_BANNER_HP.gif" />
        <Trending />
      </div>
    )
  }
}

export default App;
