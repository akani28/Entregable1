
import { useState } from 'react';
import './App.css'
import quotes from './db/quotes.json'
import { getRandom } from './utils/random';
import QuoteBox from './components/QuoteBox.jsx'


function App() {
  
  const [quote, setQuote] = useState(getRandom(quotes))

  const handleChangeQuote = () =>{
    setQuote(getRandom(quotes))

  }
 

  return (
    <main>
      <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote}/>
    </main>
  )
}

export default App
