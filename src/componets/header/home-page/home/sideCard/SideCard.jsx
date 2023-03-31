import React from "react";
import "./SideCard.css";

import { useState, useEffect } from "react";

const SideCard = ({ bookmarkedTitle, timing}) => {
  return (
    <div className="side-card  position-sticky">
      <div className="timing mb-5 card bg-secondary">
        <h2 className="text-start ">Spend Time on Read :{timing} min</h2>
      </div>
      <div className="bookmark-blog card bg-info">
        <h2>Bookmark blog : {bookmarkedTitle}</h2>
      </div>
    </div>
  );
};

export default SideCard;
