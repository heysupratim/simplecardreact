import { useState } from 'react'
import './App.css'
import Badge from './components/Badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card-container">
        <Badge text='New Post' filled={true}/>
      </div>
    </div>
  )
}

export default App
