import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LikeCounter from './Components/LikeCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LikeCounter/>
    </div>
  )
}

export default App
