import About from "./components/About";
import Allpackage from "./components/Allpackage";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Packages />
      <Allpackage />
      <Clients />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
