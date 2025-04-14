import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  const handleMenuClick = () => {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
      menuSection.style.opacity = "1";
      menuSection.style.transform = "translateY(0)";
    }
  };

  return (
    <div className={`header-vibrant ${isLoaded ? "loaded" : ""}`}>
      {/* Animated background elements */}
      <div className="bg-elements">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="light-beam beam-1"></div>
        <div className="light-beam beam-2"></div>
        <div className="light-beam beam-3"></div>
      </div>

      {/* Content wrapper */}
      <div className="content-wrapper">
        {/* Text content */}
        <div className="text-content">
          <h1 className="main-title">
            <span className="text-line">Order your</span>
            <span className="text-line">delicious food</span>
            <span className="text-line highlight">here</span>
          </h1>

          <p className="description">
            Ready to feast? Select your favorites and proceed to the view cart
            section to savor the flavors in the comfort of your own home. We
            provide door-to-door clean and hygienic food. Indulge in a
            delectable array of dishes.
          </p>

          <button
            className={`menu-button ${isHovered ? "hover" : ""}`}
            onClick={handleMenuClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="button-text">View Menu</span>
            <span className="button-shine"></span>
          </button>
        </div>

        {/* 3D Ice cream container */}
        <div className="ice-cream-showcase">
          {/* Vanilla */}
          <div className="ice-cream vanilla">
            <div className="shine-effect"></div>
            <div className="scoop">
              <div className="drip drip-1"></div>
              <div className="drip drip-2"></div>
            </div>
            <div className="cone">
              <div className="waffle-pattern"></div>
            </div>
          </div>

          {/* Orange */}
          <div className="ice-cream orange">
            <div className="shine-effect"></div>
            <div className="scoop">
              <div className="drip drip-1"></div>
              <div className="drip drip-2"></div>
            </div>
            <div className="cone">
              <div className="waffle-pattern"></div>
            </div>
          </div>

          {/* Strawberry */}
          <div className="ice-cream strawberry">
            <div className="shine-effect"></div>
            <div className="scoop">
              <div className="drip drip-1"></div>
              <div className="drip drip-2"></div>
              <div className="sprinkle sprinkle-1"></div>
              <div className="sprinkle sprinkle-2"></div>
              <div className="sprinkle sprinkle-3"></div>
            </div>
            <div className="cone">
              <div className="waffle-pattern"></div>
            </div>
          </div>

          {/* Mint */}
          <div className="ice-cream mint">
            <div className="shine-effect"></div>
            <div className="scoop">
              <div className="drip drip-1"></div>
              <div className="drip drip-2"></div>
            </div>
            <div className="cone">
              <div className="waffle-pattern"></div>
            </div>
            <div className="hand"></div>
          </div>
        </div>
      </div>

      {/* Particle effects */}
      <div className="particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default Header;
