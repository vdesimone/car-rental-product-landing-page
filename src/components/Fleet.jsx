import { useState, useEffect } from "react";
import carData from "../assets/carData";

function Fleet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("New Arrivals");
  const [carsPerRow, setCarsPerRow] = useState(3);

  const updateCarsPerRow = () => {
    const width = window.innerWidth;
    if (width <= 855) {
      setCarsPerRow(1);
    } else if (width <= 1200) {
      setCarsPerRow(2);
    } else {
      setCarsPerRow(3);
    }
  };

  const filteredCars = carData.filter(
    (car) =>
      selectedCategory === "All Vehicles" ||
      car.category.includes(selectedCategory)
  );

  const carsToDisplay = filteredCars.slice(currentIndex, currentIndex + carsPerRow);

  const canGoNext = currentIndex + carsPerRow < filteredCars.length;

  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const debouncedUpdateCarsPerRow = debounce(updateCarsPerRow, 200);

  useEffect(() => {
    updateCarsPerRow();
    window.addEventListener("resize", debouncedUpdateCarsPerRow);
    return () => {
      window.removeEventListener("resize", debouncedUpdateCarsPerRow);
    };
  }, [debouncedUpdateCarsPerRow]);

  useEffect(() => {
    preloadImages(carsToDisplay);
  }, [carsToDisplay]);

  const preloadImages = (cars) => {
    cars.forEach(car => {
      const img = new Image();
      img.src = car.image;
    });
  };

  return (
    <div id="fleet" className="full-screen-section">
      <div className="fleet-section">
        <h2>Our Fleet</h2>
        <div className="car-categories">
          <button onClick={() => {handleCategoryClick("New Arrivals")}}>New Arrivals</button>
          <button onClick={() => {handleCategoryClick("Exotic Vehicles")}}>Exotic Vehicles</button>
          <button onClick={() => {handleCategoryClick("Luxury Vehicles")}}>Luxury Vehicles</button>
          <button onClick={() => {handleCategoryClick("All Vehicles")}}>All Vehicles</button>
        </div>

        <div className="car-slider">
          <div className="car-container">
            {carsToDisplay.map((car) => (
              <div key={car.id} className="car">
                <img loading="lazy" src={car.image} alt={car.name} />
                <div className="car-desc">
                  <h4>{car.name}</h4>
                </div>
                <div className="car-info">
                  <div className="price">
                    <span>${car.price}</span>/day
                  </div>
                </div>
                <div className="rent-button">
                  <button>Rent Now</button>
                </div>
                <div className="car-properties">
                  <div className="car-year property">
                    <div className="icon">
                      <i className="ri-roadster-line"></i>
                    </div>
                    <p>{car.year}</p>
                  </div>
                  <div className="car-seats property">
                    <div className="icon">
                      <i className="ri-user-line"></i>
                    </div>
                    <p>{car.seats} seater</p>
                  </div>
                  <div className="car-transmission-type property">
                    <div className="icon">
                      <i className="ri-steering-line"></i>
                    </div>
                    <p>{car.transmissionType}</p>
                  </div>
                  <div className="car-fuel-type property">
                    <div className="icon">
                      <i className="ri-gas-station-line"></i>
                    </div>
                    <p>{car.fuelType}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-arrows">
            <button onClick={prevSlide}>&#8249;</button>
            <div className="slider-dots">
              <span
                className={`dot ${currentIndex === 0 ? "active" : ""}`}
                onClick={() => setCurrentIndex(0)}
              />
              {filteredCars.slice(carsPerRow).map((_, index) => (
                <span
                  key={index + 1}
                  className={`dot ${index + 1 === Math.floor(currentIndex / 1) ? "active" : ""}`}
                  onClick={() => setCurrentIndex(index + 1)}
                />
              ))}
            </div>
            <button onClick={nextSlide} disabled={!canGoNext}>&#8250;</button>
          </div>
          <button className="view-all-button">View All Vehicles</button>
        </div>
      </div>
    </div>
  );
}

export default Fleet;