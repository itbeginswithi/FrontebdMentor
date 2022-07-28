import React, {useState, useEffect, useMemo} from 'react';

import './App.scss';
import {images} from './images';

function App() {
  const [quote, setQuote] = useState(null);
  const [quoteId, setQuoteId] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAdvice();
  }, [])
  
  const fetchAdvice = async () => {
    setLoading(true);
    const { slip } = await (await fetch("https://api.adviceslip.com/advice", {cache: "no-cache"})).json();
    setLoading(false);
    
    setQuote(slip.advice);
    setQuoteId(slip.id);
  }

  return (
    <main className="wrapper">
      <div className="content">
        <h3 className='content__title'>ADVICE #{quoteId}</h3>
        { 
          !loading ? 
          (
            <p className="content__quote">"{quote}"</p>
          )
          :
          <div className="loading" />
        }
        <div className="pattern-divider"/>
      </div>
      <button className="dice" onClick={fetchAdvice} disabled={loading? true : false}>
        <img src={images.diceIcon} alt="Dice icon"/>
      </button>
    </main>
  );
}

export default App;
