import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Category from './components/Category/Category'
import Recommend from './components/Recommend_Movies/Recommend'
import  Series from "./components/Recommend_Series/RecommendSeries";
function App() {

  return (
    <div className="App space-y-4 bg-[#F5F5F5]">
      <Navbar/>
      <Category/>
      <Recommend/>
      <Series/>
    </div>
  )
}

export default App
