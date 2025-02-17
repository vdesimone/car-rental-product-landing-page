import homeImg from "../assets/otherImages/home-page.jpg";

function Home() {

  return (
    <div id="home" className="full-screen-section">
      <div className="home-info">
        <h1>Premium Car Rental Service</h1>
        <p>At VDrive, we offer an exclusive selection of over 200 luxury vehicles, designed to provide you with the ultimate driving experience.</p>
        <button>Browse Our Fleet</button>
      </div>
      <div className="home-img-container">
        <img className="home-img" src={homeImg} alt="Porsche Image" />
      </div>
    </div>
  );
}

export default Home;