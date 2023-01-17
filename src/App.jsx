import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mx-auto w-96 relative h-screen">
      <header className="border-b border-gray-400 py-4">
        <h1 className="text-3xl font-bold text-center uppercase">Wordle</h1>
      </header>
    </div>
  )
}

export default App
