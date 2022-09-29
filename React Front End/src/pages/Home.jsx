import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Carusol from "../components/Carusol";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import Merch from "../components/Merch";
import Collections from "../components/Collections";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Merch />
      <About />
      <Collections />
      <Carusol />
      <Roadmap />
      <Team />
      <Partners />
      <Footer />
    </div>
  );
}

export default Home;
