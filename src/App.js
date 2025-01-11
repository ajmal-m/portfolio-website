import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div 
      className="
        bg-[grey] dark:bg-[red] min-h-screen overflow-y-auto 
        bg-blue-shadow flex justify-center
      "
    >
      <Navbar></Navbar>
    </div>
  );
}

export default App;
