import React from "react";
import "./styles/QuoteBox.css"

const QuoteBox = ({handleChangeQuote, quote}) => {
  return (
    <section className="content">
      <h1>Fortune Cookies</h1>
      <section className="items">
      <button className="btn" onClick={handleChangeQuote}>Try Luck</button>
      <article>
        <p className="content_phrase">
          {quote.phrase}
        </p>
      </article>
      </section>
      <footer className="source">
       <h4>Source: {quote.author}</h4>
      </footer>
    </section>
  );
};

export default QuoteBox;
