import './App.css';
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import SkillsSection from "./components/SkillsSection"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>   
    </div>
  );
}

export default App;
