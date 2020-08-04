import React from 'react';
import styles from './App.module.css';
import { NavBar } from './Components/NavBar/NavBar';
import { Trending } from './Components/Trending/Trending';
import {fetchTrending , fetchSports, fetchEntertaintment} from './API/index';
import { Sports } from './Components/Sports/Sports';
import { Entertaintment } from './Components/Entertaintment/Entertaintment';

class App extends React.Component{
  state={
    data:[{}],
    sportsData:[{}],
    entertaintmentData:[{}]
  }

   async componentDidMount(){
     const response = await fetchTrending();
     this.setState({data:response})
     const sports = await fetchSports();
     this.setState({sportsData:sports});
     const entertaintment = await fetchEntertaintment();
     this.setState({entertaintmentData:entertaintment})
   }


  render(){
    const {data,sportsData,entertaintment} = this.state;

    return (
      <div>
        <NavBar />
        <img className={styles.ad1} src="https://media.giphy.com/headers/2020-07-27-05-1595862312/NBA_BANNER_HP.gif" />
        <Trending data={data} />
        <Sports data={sportsData} />
        <Entertaintment data={entertaintment} />
      </div>
    )
  }
}

export default App;
