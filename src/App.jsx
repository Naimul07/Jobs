import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Jobs from './Components/Jobs.jsx'
import Footer from './Components/Footer.jsx'
import Cardjobs from './Components/Cardjobs.jsx'

function App() {
  return (

    <>
       <div className='flex flex-col h-screen bg-indigo-600'>
        <Navbar />
        <Hero />
      </div>
      <Cardjobs />
      <Jobs />
      <Footer /> 

        
    </>

  )
}

export default App