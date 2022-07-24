import React, {useState} from 'react';

import IconStar from './images/icon-star.svg';
import './App.scss';

function App() {
  const [rating, setRating] = useState(null);

  return (
    <main>
      <div className="wrapper">
        
        {/* Rating */}
        <div className='rating__container'>
          <div className='rating__star'>
            <img src={IconStar} alt='Star Icon'/>
          </div>
        </div>
        {/* Switches */}
      </div>
    </main>
  );
}

export default App;
