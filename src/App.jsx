import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Recommend from "./components/Recommend_Movies/Recommend";
import Series from "./components/Recommend_Series/RecommendSeries";
import { Outlet } from "react-router";
function App() {
  return (
    <div className="App space-y-4 bg-[#F5F5F5] min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
