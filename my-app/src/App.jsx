import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState("h")

  return (
    
      <div>
       {count}
        <button onClick={() => setCount((count) => count(int) + 1)}>
          count is {count}
        </button>
      </div>
   
  )
}

export default App
