import React, { Component } from "react";
import "./App.css";
import Movie from './Movie';

const movies = [
  {
   title: "Matirx",
   poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIVxLB1FVL2POzHuv2R6TbhXzONdxLmyJUqKLuUyDZRcY06AtX" 
  },
  {
    title: "Full Metal Jacket",
    poster:"https://images-na.ssl-images-amazon.com/images/I/71qDKzqJZrL._SL1101_.jpg"
  },
  {
    title: "Oldboy",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU1tTmiH4_DdTSbDOsrrnANifLOoVpIOfeGNRiJrYu2WkMPAumzA"
  },
  {
    title: "Star Wars",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqE44O4JQKJ23DYL8VF-3t5dofC7BIZ6VOJxSmTtylgfMbGrdj"
  }

]
class App extends Component {
  render() {
    return (
      <div className="App">
       {movies.map(movie => {
        return <Movie title={movie.title} poster={movie.poster} />
       })}
      </div>
      
    );
  }
}

export default App;
