import React, { Component } from 'react';
import './App.css';
import Preview from './Preview'
import CategoryCards from './CategoryCards';
import Axios from 'axios';

class App extends Component {
  changeHeadliner(image, title){
    this.setState({
      headliner: {
        image: image, 
        title: title,
      }
    })
  }
  constructor(props){
    super(props);
    this.state = { 
      jsonMovies : [],
      headliner: {
        image: "http://www.denofgeek.us/sites/denofgeekus/files/styles/main_wide/public/8/99/ultron_1_2.jpg",
        title: "Avengers: Age of Ultron",
      },
    }

  }
  render() {
    return (
      <div id="App">
      <div className="container">
      <div className="row">
      <Preview image={ this.state.headliner.image } title={this.state.headliner.title}/>
      </div>
      <CategoryCards category_id = { 14 } category="Fantasy" limit= { 8 } />
      <CategoryCards category_id = { 10751 } category="Family" limit = { 4 } />
      <CategoryCards category_id = { 36 } category="History" limit = { 4 } />
      <CategoryCards category_id= { 27 } category="Horror" limit = { 4 } />
      </div>
      </div>
    );
  }
}

export default App;
