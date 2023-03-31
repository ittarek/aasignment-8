import { useState,useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componets/header/Header";
import Home from "./componets/header/home-page/home/Home";
import SideCard from "./componets/header/home-page/home/sideCard/SideCard";

function App() {
  const newArr = [];

  const [arr , setArr] = useState([])
 const handleBookMark = (book) => {
  setArr([...book,newArr])
  
  console.log(book);
  console.log(newArr);
 }






  return (
    <div className="App">
      <Header></Header>
      <div className="main row">
        <div className="row single-card  outline-0 col-md-8 col-sm-12 p-3 g-2">
          <Home handleBookMark={handleBookMark}></Home>
        </div>
        <div className="card col-md-4  col-sm-12 p-3 g-2 bg-info ">
          <SideCard></SideCard>
        </div>
      </div>
    </div>
  );
}

export default App;
