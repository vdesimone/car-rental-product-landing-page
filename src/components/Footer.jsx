import { useState, useEffect } from "react";

function Footer() {

  const [selectedSection, setSelectedSection] = useState("faq");

  useEffect(() => {
    const sections = ["home", "about", "fleet", "reviews", "faq"]
    let currentSection = "";
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        currentSection = sectionId;
      }
    });
    setSelectedSection(currentSection);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return(
    <footer className="footer">
      <div className="footer-container">
        <div className="f-col">
          <div className="f-logo">
            VDrive
          </div>
          <div className="f-desc">
            <p>Rent with us today!</p>
            <p>(212) 212-2121</p>
            <p>611 5th Ave</p>
            <p>New York, NY 1002</p>
          </div>
          <ul className="f-socials">
            <li><a href="https://www.facebook.com" target="_blank"><i className="ri-facebook-circle-fill"></i></a></li>
            <li><a href="https://www.instagram.com" target="_blank"><i className="ri-instagram-fill"></i></a></li>
            <li><a href="https://www.x.com" target="_blank"><i className="ri-twitter-x-fill"></i></a></li>
            <li><a href="https://www.linkedin.com/" target="_blank"><i className="ri-linkedin-box-fill"></i></a></li>
          </ul>
        </div>
        <div className="f-col">
          <div className="f-title">
            Menu
          </div>
          <ul className="f-links">
            <li className={selectedSection === "home" ? "active" : ""}>
              <a onClick={() => scrollToSection("home")}>Home</a>
            </li>
            <li className={selectedSection === "about" ? "active" : ""}>
              <a onClick={() => scrollToSection("about")}>About Us</a>
            </li>
            <li className={selectedSection === "fleet" ? "active" : ""}>
              <a onClick={() => scrollToSection("fleet")}>Our Fleet</a>
            </li>
            <li className={selectedSection === "reviews" ? "active" : ""}>
              <a onClick={() => scrollToSection("reviews")}>Reviews</a>
            </li>
            <li className={selectedSection === "faq" ? "active" : ""}>
              <a onClick={() => scrollToSection("faq")}>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="f-col">
          <div className="f-title">
            Quick Links
          </div>
          <ul className="f-links">
            <li><a>Rent</a></li>
            <li><a>Contact Us</a></li>
            <li><a>Help Center</a></li>
            <li><a>Privacy Policy</a></li>
          </ul>
        </div>
        <div className="f-col">
          <div className="f-title">
            Services
          </div>
          <ul className="f-links">
            <li><a>Chauffeuring</a></li>
            <li><a>Airport Transfer</a></li>
            <li><a>Replacement Vehicles</a></li>
            <li><a>Exclusive Deals</a></li>
          </ul>
          <div className="watermark">
            <p><a href="https://github.com/vdesimone" target="_blank">vdesimone 2025</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;