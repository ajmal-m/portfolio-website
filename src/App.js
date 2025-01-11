import logo from './logo.svg';
import ThemeSwitcher from './components/ThemeSwitcher';
import './App.css';

function App() {
  return (
    <div className="App h-screen flex items-center justify-center bg-[grey] dark:bg-[red]">
      <ThemeSwitcher/>
    </div>
  );
}

export default App;
