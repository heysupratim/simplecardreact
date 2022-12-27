import './App.css'
import Badge from './components/Badge'
import Button from './components/Button'
import {PaperAirplaneIcon} from '@heroicons/react/24/solid'
import Card from './components/Card'

function App() {
  return (
    <div className="App">
      <section className="card-container">
        <Card
          title='Title' 
          subtitle='Subtitle'
          indicator='Indicator'
          badge={{
            text: 'Badge Text',
            filled: false
          }}
          btn={{
            href: '#',
            type: 'primary',
            text: 'Button',
            filled: true,
            icon: <PaperAirplaneIcon/>
          }}
          image='https://source.unsplash.com/random'
          body= 'Body Message' />
      </section>
    </div>
  )
}

export default App
