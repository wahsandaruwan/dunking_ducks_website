// Custom Components
import About from "./Components/About";
import BgAnimation from "./Components/BgAnimation";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar"
import RoadMap from "./Components/RoadMap";
import Team from "./Components/Team";

const App = () => {
  return (
    <>
      <BgAnimation />
      <NavBar />
      <div className="scroll-container">
        <Hero />
        <About />
        <RoadMap />
        <Faq />
        <Team />
      </div>
      <Footer />
    </>
  )
}

export default App;
