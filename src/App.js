import React, { Component } from 'react';
import './App.css';
import Preview from './Preview'
import CategoryCards from './CategoryCards';
import Axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.state = { 
      jsonMovies : [],
      headliner: {
        image: "http://www.denofgeek.us/sites/denofgeekus/files/styles/main_wide/public/8/99/ultron_1_2.jpg",
        title: "Avengers: Age of Ultron",
      },
      categories: [
        {
        name: "Family",
        movies: [
        {
          img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMWEyZjcxMDgtZWM0Ni00NmY3LWJhNTItYjE5ZDRlZTRmYWYzXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg",
          title: "Mulan"
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMWEyZjcxMDgtZWM0Ni00NmY3LWJhNTItYjE5ZDRlZTRmYWYzXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg",
          title: "Mulan"
        },
        {
          img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMWEyZjcxMDgtZWM0Ni00NmY3LWJhNTItYjE5ZDRlZTRmYWYzXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg",
          title: "Mulan"
        }
        
      ],
    }, {
      name: "Horror",
      movies: [
      {
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMWEyZjcxMDgtZWM0Ni00NmY3LWJhNTItYjE5ZDRlZTRmYWYzXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg",
        title: "Mulan"
      },
      {
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMWEyZjcxMDgtZWM0Ni00NmY3LWJhNTItYjE5ZDRlZTRmYWYzXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg",
        title: "Mulan"
      },
      {
        img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMWEyZjcxMDgtZWM0Ni00NmY3LWJhNTItYjE5ZDRlZTRmYWYzXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg",
        title: "Mulan"
      }
      
    ],
  }
      ]
}
  }
  render() {
    console.log(this.state.categories)
    let categories = this.state.categories.map(
      (category, i) => {
        return <CategoryCards key = { i } category = { category.name } movies={ category.movies }/>
      }
    );
    return (
      <div id="App">
      <div className="container">
      <div className="row">
      <Preview image={ this.state.headliner.image } title={this.state.headliner.title}/>
      </div>
      { categories }
      <CategoryCards category_id = { 14 } category="Fantasy"/>
      <CategoryCards category_id = { 10751 } category="Family"/>
      <CategoryCards category_id = { 36 } category="History"/>
      <CategoryCards category="action"/>
      </div>
      </div>
    );
  }
}

export default App;
