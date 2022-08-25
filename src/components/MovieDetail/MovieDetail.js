import React, { Component } from "react";

class MovieDetail extends Component {
  constructor(props){
    const {id} = props
    super(props)

    this.state = {
      id: id
    }
  }

  componentDidMount = () => {
    // fetch here
  }

  render = () => {
    return (
      <div> MOVIE DETAIL </div>
    )
  }

}

export default MovieDetail