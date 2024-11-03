import React from 'react'
import Series from "../Recommend_Series/RecommendSeries.jsx"
import Movie from "../Recommend_Movies/Recommend.jsx"
const Hero = () => {
  return (
     <div className="hero">
       <Movie/>
       <Series/>
     </div>
  )
}

export default Hero