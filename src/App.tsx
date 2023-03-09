import { Appointments } from './components/Appointments'
import { Faq } from './components/Faq'
import { QrSongs } from './components/QrSongs'
import { StepGreeting } from './components/StepGreeting'

function App() {
  return (
    <div className="App">
      <StepGreeting />
      <Appointments />
      <QrSongs />
      <Faq />
    </div>
  )
}

export default App
