import greenBMW from "../assets/green-bmw.jpg";

function Home() {

  return (
    <div id="home" className="full-screen-section home-section">
      <div className="home-info">
        <h1>Rent <span id="elegance">Elegance.</span><br />Drive <span id="power">Power.</span></h1>
        <div className="home-desc">
          <p>At VDrive, we offer 200+ luxury vehicles.</p>
          <p>Explore our extensive fleet today.</p>
          <button>Browse Our Fleet</button>
        </div>
      </div>
      <div className="home-img-container">
        <img className="home-img" src={greenBMW} alt="Green BMW Background Image" />
      </div>
    </div>
  );
}

export default Home;