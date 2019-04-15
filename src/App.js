import React, { Component } from 'react';
import './App.css';
import Mytravel from "./Mytravel"
import Travels5destination from './Travels5destination';
import Form from './Form';


class App extends Component {
  render() {
    return (
      <div>
      <Mytravel 
      destination = "Paris"
      distance = "100km"
      country = "France"
      photo = "https://lejournaldeleco.fr/wp-content/uploads/appartement-paris-attitude_590a00242b96b.jpg"  />
      
      <Mytravel 
      destination = "Lyon"
      distance = "800km"
      country = "France"
      photo = "https://www.larousse.fr/encyclopedie/data/images/1314872-Lyon.jpg"  /> 
      
      
      <Travels5destination />
      <Form />
      
      </div>
    );


  }
}

export default App;
