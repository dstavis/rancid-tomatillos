import React from "react"

function MovieListItem({id, title, onClick}) {
  return (
    <li onClick={ () => onClick(id)}> { title } </li>  
  )
}

export default MovieListItem