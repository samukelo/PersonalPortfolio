import "./App.css";
import NavBar from "./components/navbar";
import AboutMe from "./components/aboutmesection";
import MyTechnologies from "./components/technologiessection";
import ProjectSection from "./components/projectssection";

function App() {
  return (
    <>
      <NavBar />
      <AboutMe />
      <MyTechnologies />
      <ProjectSection />
    </>
  );
}

export default App;
