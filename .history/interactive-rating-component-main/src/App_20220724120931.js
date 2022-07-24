import React, { useState } from "react";

import IconStar from "./images/icon-star.svg";
import illustration from "./images/illustration-thank-you.svg";
import "./App.scss";

function App() {
  const [rating, setRating] = useState(1);
  const [isSent, setIsSent] = useState(false);

  const submitRating = (e) => {
    e.preventDefault();
    setIsSent(true);
  }

  return (
    <main>
      <div className="wrapper">
        {/* Rating */}
        {
          !isSent ? 
          (
            <div className="rating__container">
              <div className="rating__star">
                <img src={IconStar} alt="Star Icon" />
              </div>

              <div className="rating__info">
                <h1>How did we do?</h1>
                <p>
                  Please let us know how we did with your support request. All
                  feedback is appreciated to help us improve our offering!
                </p>
              </div>

              <div className="rating__list" role="list">
                <button className={rating === 1 ? `rating__list_btn rating__list_activeBtn` : `rating__list_btn`} onClick={() => setRating(1)}>
                  1
                </button>
                <button className={rating === 2 ? `rating__list_btn rating__list_activeBtn` : `rating__list_btn`} onClick={() => setRating(2)}>
                  2
                </button>
                <button className={rating === 3 ? `rating__list_btn rating__list_activeBtn` : `rating__list_btn`} onClick={() => setRating(3)}>
                  3
                </button>
                <button className={rating === 4 ? `rating__list_btn rating__list_activeBtn` : `rating__list_btn`} onClick={() => setRating(4)}>
                  4
                </button>
                <button className={rating === 5 ? `rating__list_btn rating__list_activeBtn` : `rating__list_btn`} onClick={() => setRating(5)}>
                  5
                </button>
              </div>

              <button type="submit" className="rating__cta" onClick={submitRating}>SUBMIT</button>
            </div>
          ) : (
            <div className="appreciation">
              <img src={illustration} alt='illustration' className="illustration"/>
              <span className="appreciation__rating">You selected {rating} out of 5</span>
              div
            </div>
          )
        }
      </div>
    </main>
  );
}

export default App;
