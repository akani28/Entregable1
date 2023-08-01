
import { useState } from 'react';
import './App.css'
import quotes from './db/quotes.json'
import { getRandom } from './utils/random';
import QuoteBox from './components/QuoteBox.jsx'


function App() {
  
  const [quote, setQuote] = useState(getRandom(quotes))
 

  return (
    <main>
      <QuoteBox/>
    </main>
  )
}

export default App
