import About from "./Components/About";
import Faq from "./Components/Faq";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar"
import RoadMap from "./Components/RoadMap";
import Team from "./Components/Team";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <RoadMap />
      <Faq />
      <Team />
      <Footer />
    </>
  )
}

export default App;
