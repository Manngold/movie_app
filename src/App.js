import React, { Component } from "react";
import "./App.css";
import Movie from './Movie';


class App extends Component {

  //Render: componentWillMount => render => componentDidMount
  //Update: componentWillReceiveProps() => shouldComponentUpdate() => componentWillUpdate() => render() =>componentDidUpdate()

  state = { }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
  
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
          },
          {
            title:'Transpoting',
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp7n7rhKsAmOeHdlDK-xozOLkO2kIN0WedJs_SHjCh_Coug_ypBw"
          }
        
        ]
      })
    },5000)
  }
  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
     })
     return movies
  }
  render() {
    
    return (
      <div className="App">
       {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
      
    );
  }
}

export default App;
