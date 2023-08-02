import React from "react";
import "./styles/QuoteBox.css"

const QuoteBox = ({handleChangeQuote, quote, currentBg}) => {
  const bgColorPhrase=(string) =>{
    return currentBg==="bg1" && (<p className={`content_phrase ${string}`}>{quote.phrase}</p>)
  }
  return (
    <section className="content">
      <h1>Fortune Cookies</h1>
      <section className="items">
      <button className="btn" onClick={handleChangeQuote}>Try Luck</button>
      <article>
        { bgColorPhrase("bg11")}
        {
          currentBg==="bg2" && (<p className="content_phrase bg22">{quote.phrase}</p>)
        }
        {
          currentBg==="bg3" && (<p className="content_phrase bg33">{quote.phrase}</p>)
        }

        {
          currentBg==="bg4" && (<p className="content_phrase bg44">{quote.phrase}</p>)
        }
        
       </article>
      </section>
      <footer className="source">
       <h4>Source: {quote.author}</h4>
      </footer>
    </section>
  );
};

export default QuoteBox;
