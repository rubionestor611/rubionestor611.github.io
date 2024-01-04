import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <div>
        <Header/>
        <p className=''>Hello</p>
        <Footer/>
      </div>
    </ThemeProvider>
      
  )
}

export default App
