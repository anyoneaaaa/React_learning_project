// import React from 'react'
import { useState } from 'react'

function App() {
  var [a,b] = useState(9);
  return (
    <div className='bg-zinc-400 text-white w-full h-screen p-5 text-8xl'>
      <h1>{a}</h1>
      <button onClick={()=>b(a+1)} className="px-3 py-1 bg-red-400 rounded-lg text-sm">Click this</button>
    </div>
  )
}

export default App