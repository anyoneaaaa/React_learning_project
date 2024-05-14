import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
  const add_value=()=>{
    setCount (count + 1)
  }

  const substract_value = ()=>{
    setCount (count-1)
  }

  // let counter = 5

  return (
    <>
      <h1>hello</h1>
      <h2>counter value : {count}</h2>
      <button onClick={add_value}>add in</button>
      <br />
      <button onClick={substract_value}>substract {count} </button>
    </>
  )
}

export default App
