import React from "react";
import "./SideCard.css";

import { useState, useEffect } from "react";

const SideCard = ({book}) => {
  const [authorTitle, setAuthorTitle] = useState([book]);
  console.log("side card from");



//   useEffect(() => {

//   }, [authorTitle]);



  return (
    <div className="side-card  position-fixed">
      <div className="timing mb-5">
        <h2 className="text-start ">Spend Time on Read : min</h2>
      </div>
      <div className="bookmark-blog">
        <h2>Bookmark blog :{authorTitle}</h2>
      </div>
    </div>
  );
};

export default SideCard;
