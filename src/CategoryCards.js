import React, {Component} from 'react';
import MediaCard from './MediaCard';
import Axios from 'axios';
class CategoryCards extends Component {
    constructor(props){
        super(props);
        this.state = { movies : []};
    }
    componentDidMount(){
        Axios.get("https://api.themoviedb.org/3/genre/" + this.props.category_id + "/movies?api_key=bd0ec9a39d66c4b5" + 
        "35d111fc22b9b4ea&language=en-US&include_adult=false&sort_by=created_at.asc").then((result) => {
            console.log(result)
            let jsonMovies = result.data.results.map((result) => {
              return <MediaCard title = { result.title }  img= { "https://image.tmdb.org/t/p/w500/" + result.backdrop_path } />
            })
            this.setState({ movies : jsonMovies });
        })
    }

    render() {
        console.log(this.props.movies);
        let cards;
        if(this.props.movies){
            // I honestly have no idea why I need the above check, but that fixed the issue of Chrome reporting that
            // this.props.movies was undefined.
            cards = this.props.movies.map((movie, i) => {
                console.log(movie);
                return <MediaCard key = { i } img={ movie.img } title={ movie.title } />
            });
        }
        console.log("Movies" + this.state.movies);
        if(this.state.movies){
            cards = this.state.movies;
        }
        return (
            <div className="row">
            <h2 className="category-name">{this.props.category} </h2>
            { cards }
            </div>
        );
    }
}
export default CategoryCards;