import StartContent from './components/StartContent/StartContent'
import Header from './components/Header/Header'

import './App.css'
import About from './components/About/About'
import Pets from './components/Pets/Pets'
import Help from './components/Help/Help'
import Donation from './components/Donation/Donation'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <div>
      <Header />
      <StartContent />
      <About />
      <Pets />
      <Help />
      <Donation />
      <Footer />


    </div>
  )
}

export default App
