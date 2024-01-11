import './App.css';
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import SkillsSection from "./components/SkillsSection"
import Projects from "./components/Projects"
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <SkillsSection/>
      <Projects/>
      <Contact/>   
    </div>
  );
}

export default App;
