import './App.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/"  element={ <Home/>} />
          <Route path="/home"  element={ <Home/>} />
          <Route path="/skills"  element={ <Skills/>} />
          <Route path="/projects"  element={ <Projects/>} />
          <Route path="/contact"  element={<Contact/>} />
        </Routes>
    </div>
  );
}


export default App;
