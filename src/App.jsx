import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1 className="text-3xl font-bold text-red-500 text-center">Hallo IVZ!</h1>
      <p className="pt-4 text-lg text-green-500">Wir, Andreas und Alexander, freuen uns über den Projektstart.</p>
  </div>
  )
}

export default App
