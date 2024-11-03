import React from 'react'

const MoviesCard = ({poster , title}) => {
  return (
     <div className="movies_card">
        <div className="card">
         <div className="movies_poster">
            <img src={poster} alt="" className="movie_logo w-[13vw] rounded-lg" />
         </div>
         <p>{title}</p>
     </div>
     </div>
  )
}

export default MoviesCard