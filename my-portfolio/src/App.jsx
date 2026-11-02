import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import FeaturedProjects from "./sections/FeaturedProjects";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Blog from "./sections/Blog";
import Resume from "./sections/Resume";
//import Courses from "./sections/Courses";
import Training from "./sections/training";
import Participation from "./sections/Participation";
import BeyondEngineering from "./sections/BeyondEngineering";
import Contact from "./sections/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <FeaturedProjects />
        <Achievements />
        <Education />
        <Blog />
        <Resume />
      
        <Training />
        <Participation/>
        <BeyondEngineering/>
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;