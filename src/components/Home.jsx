import blueGTR from "../assets/blue-gtr.jpg";

function Home() {

  return (
    <div id="home" className="full-screen-section home-section">
      <div className="home-info">
        <h1>Rent <span id="elegance">Elegance.</span><br />Drive <span id="power">Power.</span></h1>
        <div className="home-desc">
          <p>At VDrive, we offer <span>200+</span> luxury vehicles.</p>
          <p>Explore our extensive fleet today.</p>
        </div>
        <button>Browse Our Fleet</button>
      </div>
      <div className="home-img-container">
        <img className="blue-gtr" src={blueGTR} alt="Blue GTR" />
      </div>
    </div>
  );
}

export default Home;