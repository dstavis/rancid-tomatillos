import React from "react";
import "./GenreBubble.css"

function GenreBubble({genre}) {
  return (
    <div className="genre-bubble">
      <p>{genre}</p>
    </div>
  )
}

export default GenreBubble