
import './App.css'
import quotes from './db/quotes.json'

function App() {
  const getRandom= (list) =>{
    const randomIndex = Math.floor(Math.random()*list.length) 
    return list[randomIndex];
  }
  console.log(getRandom(quotes));
 

  return (
    <>
      <h1>Entregable1</h1>
    </>
  )
}

export default App
