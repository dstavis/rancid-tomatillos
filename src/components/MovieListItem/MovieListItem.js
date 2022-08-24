import React, {Component} from "react"

class MovieListItem extends Component {
  constructor({title}){
    super()
    this.state = { title: title }
  }

  render = () => {
    return (
      <li> { this.state.title } </li>  
    )
  }
}

export default MovieListItem