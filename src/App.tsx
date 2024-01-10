import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';
import Home from './sections/Home';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import About from './sections/About';

function App() {

  return (
    <ThemeProvider>
      <div className='app'>
        <Header/>
        <Home/>
        <Skills/>
        <Experience/>
        <About/>
        <Contact/>
        <Footer/>
      </div>
    </ThemeProvider>
      
  )
}

export default App
