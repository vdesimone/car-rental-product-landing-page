import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      const sections = ["home", "about", "fleet", "reviews", "faq"];
      let currentSection = "";
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        const rect = section.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom > 0) {
          currentSection = sectionId;
        }
      });
      setSelectedSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return(
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="company-name">
        VDrive
      </div>
      <ul>
        <li
          onClick={() => scrollToSection('home')}
          className={selectedSection === "home" ? "active" : ""}
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection('about')}
          className={selectedSection === "about" ? "active" : ""}
        >
          About Us
        </li>
        <li
          onClick={() => scrollToSection('fleet')}
          className={selectedSection === "fleet" ? "active" : ""}
        >
          Fleet
        </li>
        <li
          onClick={() => scrollToSection('reviews')}
          className={selectedSection === "reviews" ? "active" : ""}
        >
          Reviews
        </li>
        <li
          onClick={() => scrollToSection('faq')}
          className={selectedSection === "faq" ? "active" : ""}
        >
          FAQ
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;