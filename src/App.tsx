
import './index.css'
import FormLayout from './components/FormLayout/FormLayout'
import TicketLayout from './components/TicketLayout/TicketLayout'
import { useAppSelector } from './hooks/redux'
import logo from './assets/logo-full.svg'

function App() {
  
  const {ticketReady} = useAppSelector(state => state.formReducer)
  return (
    <main>
      <img className='logo' src={logo} alt="logo" />
      {ticketReady ? <TicketLayout/> : <FormLayout/>} 
    </main>
  )
}

export default App
