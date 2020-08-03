import React from 'react';
import styles from './App.module.css';
import { NavBar } from './Components/NavBar/NavBar';
import { Trending } from './Components/Trending/Trending';
import {fetchTrending} from './API/index';

class App extends React.Component{
  state={
    data:[{}]
  }

   async componentDidMount(){
     const response = await fetchTrending();
     this.setState({data:response})
   }

  render(){
    const {data} = this.state;

    return (
      <div>
        <NavBar />
        <img className={styles.ad1} src="https://media.giphy.com/headers/2020-07-27-05-1595862312/NBA_BANNER_HP.gif" />
        <Trending data={data} />
      </div>
    )
  }
}

export default App;
