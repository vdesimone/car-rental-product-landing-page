import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Fleet from "./Fleet";
import Reviews from "./Reviews";
import FAQ from "./FAQ";

function LandingPage() {

  return (
    <div className="landing-page-container">
      <Navbar />
      <Home />
      <About />
      <Fleet />
      <Reviews />
      <FAQ />
    </div>
  );
}

export default LandingPage;