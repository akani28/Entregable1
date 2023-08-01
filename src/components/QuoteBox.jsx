import React from "react";

const QuoteBox = ({handleChangeQuote, quote}) => {
  return (
    <section>
      <h1>Fortune Cookies</h1>
      <section>
      <button onClick={handleChangeQuote}>Try Luck</button>
      <article>
        <p>
          {quote.phrase}
        </p>
      </article>
      </section>
      <footer>
       <h4>Source: {quote.author}</h4>
      </footer>
    </section>
  );
};

export default QuoteBox;
