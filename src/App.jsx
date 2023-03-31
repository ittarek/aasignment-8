import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componets/header/Header";
import Home from "./componets/header/home-page/home/Home";
import SideCard from "./componets/header/home-page/home/sideCard/SideCard";
import Question from "./componets/Questions/Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  //  bookmark add title
  const [bookmarkedTitle, setBookmarkedTitle] = useState([]);

  const handleCard = (title) => {
    if (bookmarkedTitle) {
      bookmarkedTitle;
    } else {
      let addBook = bookmarkedTitle.map((book) => <li>book={book}</li>);
      bookmarkedTitle.push(addBook);
    }
    const readBook = bookmarkedTitle.map((book) => <li>book={book}</li>);

    setBookmarkedTitle(title);
  };

  // timing function
  const [timing, setTiming] = useState(0);
  const handleMinutes = (Time) => {
    let previousReadTime = Time;

    let sum = previousReadTime + timing;
    setTiming(sum);
  };

  return (
    <div className="App">
      {/* <button onClick={notify}>Notify!</button> */}

      <Header></Header>
      <div className="main row">
        <div className="row single-card  outline-0 col-md-8 col-sm-12 p-3 g-2">
          <Home handleCard={handleCard} handleMinutes={handleMinutes}></Home>
        </div>
        <div className="card col-md-4  col-sm-12 p-3 g-2 bg-gray ">
          <SideCard
            bookmarkedTitle={bookmarkedTitle}
            timing={timing}
          ></SideCard>
        </div>
      </div>
      <Question></Question>
    </div>
  );
}

export default App;
