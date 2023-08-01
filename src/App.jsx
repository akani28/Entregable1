
import { useState } from 'react';
import './App.css'
import quotes from './db/quotes.json'

function App() {
  
  const [quote, setQuote] = useState(getRandom(quotes))
 

  return (
    <>
      <p>Entregable1</p>
    </>
  )
}

export default App
