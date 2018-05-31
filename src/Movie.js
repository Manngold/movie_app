import React, { Component } from 'react'; //import Componet from react
import './Movie.css';

class Movie extends Component{
    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }//Component alway need to show something

}
class MoviePoster extends Component{
    render(){
        return(
            <img src={this.props.poster} />
        )
    }
}

export default Movie; //export Movie by Movie.js