import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from './pages/About';
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ParticleBackground from './components/ParticleBackground';



function App() {

  return (
   <Router>
    {/* Particle Background - Always behind all content */}
    <ParticleBackground />

    <div className="relative z-10 min-h-screen">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
   </Router>
  )
}

export default App


