import React, { Component } from 'react'; //import Componet from react
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

class Movie extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        genres: PropTypes.array.isRequired,
        synopsis: PropTypes.string.isRequired
    }//check prop of title, poster


    render(){
        return(
            <div className="Movie">
                <div className="Movie__Column">
                    <MoviePoster poster={this.props.poster} alt={this.props.title}/>
                </div>
                <div className="Movie__Column">
                        <h1>{this.props.title}</h1>
                        <div className="Movie__Genres">
                            {this.props.genres+" "}
                        <div className="Movie__Synopsis">
                            <LinesEllipsis
                            text={this.props.synopsis}
                            maxLine='3'
                            ellipsis='...'
                            trimRight
                            basedOn='letters'
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }//Component alway need to show something

}

class MoviePoster extends Component{

    static propTypes = {
        poster: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.poster} alt={this.props.alt} title={this.props.alt} className="Movie__Poster"/>//when hover movie title appear
        )
    }
}

export default Movie; //export Movie by Movie.js