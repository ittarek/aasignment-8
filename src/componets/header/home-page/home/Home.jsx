import React, { useEffect } from "react";
import { useState } from "react";
import "./Home.css";
import SingleCard from "./../singleCard/SingleCard";

const Home = ({ handleBookMark }) => {
  const [programers, setProgramers] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProgramers(data));
  }, []);
  return (
    <div className="">
      {programers.map((programer) => (
        <SingleCard
          handleBookMark={handleBookMark}
          programer={programer}
          key={programer.id}
        ></SingleCard>
      ))}
    </div>
  );
};

export default Home;
