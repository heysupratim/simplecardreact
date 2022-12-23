import { useState } from 'react'
import './App.css'
import Badge from './components/Badge'
import Button from './components/Button'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card-container">
        <Badge 
          text='New Post' 
          filled={false}/>
        <Button
          text='Button'
          href='#'
          type='primary'
          filled={true}
          icon ={<PaperAirplaneIcon/>}
          />
      </div>
    </div>
  )
}

export default App
