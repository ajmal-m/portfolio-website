import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div 
      className="
        bg-[grey] dark:bg-[red] h-screen overflow-y-auto 
        bg-blue-shadow flex justify-center
      "
    >
      <div class="max-w-[700px]">
        <Navbar></Navbar>
        <Routes>
          <Route path="/home"  element={ <Home/>} />
          <Route path="/skills"  element={ <Skills/>} />
          <Route path="/projects"  element={ <Projects/>} />
          <Route path="/contact"  element={<Contact/>} />
        </Routes>
      </div>
    </div>
  );
}


export default App;
