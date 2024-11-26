import React, { useState } from 'react';
import img1 from '../assets/images/img1.jpeg';
import img2 from '../assets/images/img2.jpeg';
import img3 from '../assets/images/img3.jpeg';
import img4 from '../assets/images/img4.jpeg';
import img5 from '../assets/images/img5.jpeg';
import img6 from '../assets/images/img6.jpeg';
import img7 from '../assets/images/img7.jpeg';
import img8 from '../assets/images/img8.jpeg';
import img9 from '../assets/images/img9.jpeg';
import img10 from '../assets/images/img10.jpeg';
import img11 from '../assets/images/img11.jpeg';
import img12 from '../assets/images/img12.jpeg';
import img13 from '../assets/images/img13.jpeg';
import img14 from '../assets/images/img14.jpeg';
import img15 from '../assets/images/img15.jpeg';
import img16 from '../assets/images/img16.jpeg';
import img17 from '../assets/images/img17.jpeg';
import img18 from '../assets/images/img18.jpeg';
import arrowIcon from '../assets/images/arrow.png';
import checkboxIcon from '../assets/images/Checkbox.png';
import VectorIcon from "../assets/images/Vector.png";

import leftArrow from '../assets/images/leftarrow.png';
import rightArrow from '../assets/images/rightarrow.png';
import "../styles/gallery.css";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [recommendedVisible, setRecommendedVisible] = useState(false);

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18
  ];

  const productNames = {
    0: "PPXOC MILKYWAY DRESS IN...",  
    1: "PPXOC MILKYWAY DRESS IN...",  
  };

  const toggleFilterOptions = (filterName) => {
    if (filterName === 'idealFor') {
      setActiveFilter(activeFilter === 'idealFor' ? null : 'idealFor');
    }
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleRecommendedOptions = () => {
    setRecommendedVisible(!recommendedVisible);
  };

  return (
    <section className="gallery">
      <div className={`sidebar ${sidebarVisible ? '' : 'hidden'}`}>
        <ul className="filter-list">
          <li className="filter-item customizable-box">
            <img src={checkboxIcon} alt="Checkbox" className="checkbox-icon" />
            CUSTOMIZABLE
          </li>

          <li className="filter-item">
            <div className="filter-header">
              <span>IDEAL FOR</span>
              <img
                src={arrowIcon}
                alt="Arrow"
                className="arrow-icon"
                onClick={() => toggleFilterOptions('idealFor')}
              />
            </div>
            {activeFilter === 'idealFor' && (
              <ul className="dropdown-options">
                <li>
                  <img src={checkboxIcon} alt="Checkbox" className="checkbox-icon" />
                  Men
                </li>
                <li>
                  <img src={checkboxIcon} alt="Checkbox" className="checkbox-icon" />
                  Women
                </li>
                <li>
                  <img src={checkboxIcon} alt="Checkbox" className="checkbox-icon" />
                  Baby & Kids
                </li>
              </ul>
            )}
            <div className="all-option">All</div>
          </li>

          <li className="filter-item">
            <div className="filter-header">
              <span>OCASSION</span>
              <img
                src={arrowIcon}
                alt="Arrow"
                className="arrow-icon"
                onClick={() => toggleFilterOptions('occasion')}
              />
            </div>
            <div className="all-option">All</div>
          </li>

          <li className="filter-item">
            <div className="filter-header">
              <span>WORK</span>
              <img
                src={arrowIcon}
                alt="Arrow"
                className="arrow-icon"
                onClick={() => toggleFilterOptions('work')}
              />
            </div>
            <div className="all-option">All</div>
          </li>

          <li className="filter-item">
            <div className="filter-header">
              <span>FABRIC</span>
              <img
                src={arrowIcon}
                alt="Arrow"
                className="arrow-icon"
                onClick={() => toggleFilterOptions('fabric')}
              />
            </div>
            <div className="all-option">All</div>
          </li>

          <li className="filter-item">
            <div className="filter-header">
              <span>SEGMENT</span>
              <img
                src={arrowIcon}
                alt="Arrow"
                className="arrow-icon"
                onClick={() => toggleFilterOptions('segment')}
              />
            </div>
            <div className="all-option">All</div>
          </li>

          <li className="filter-item">
            <div className="filter-header">
              <span>SUITABLE FOR</span>
              <img
                src={arrowIcon}
                alt="Arrow"
                className="arrow-icon"
                onClick={() => toggleFilterOptions('suitableFor')}
              />
            </div>
            <div className="all-option">All</div>
          </li>

          <li className="filter-item">
            <div className="filter-header">
              <span>RAW MATERIAL</span>
              <img
                src={arrowIcon}
                alt="Arrow"
                className="arrow-icon"
                onClick={() => toggleFilterOptions('rawMaterial')}
              />
            </div>
            <div className="all-option">All</div>
          </li>

          <li className="filter-item">
            <div className="filter-header">
              <span>PATTERN</span>
              <img
                src={arrowIcon}
                alt="Arrow"
                className="arrow-icon"
                onClick={() => toggleFilterOptions('pattern')}
              />
            </div>
            <div className="all-option">All</div>
          </li>
        </ul>
      </div>

      <div className="gallery-content">
        <div className="gallery-header">
          <h2>DISCOVER OUR PRODUCTS</h2>
          <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus</p>
          <p>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor</p>
          <div className="gray-line"></div>
        </div>

        <div className="filter-section">
          <div className="filter-left">
            <span className="item-count">3425 ITEMS</span>
            <button className="hide-filters" onClick={toggleSidebar}>
              <span className="hide-filters-text"></span>
              <img
                src={sidebarVisible ? leftArrow : rightArrow}
                alt="Toggle Arrow"
                className="toggle-arrow"
              />
              {sidebarVisible ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          <div className="filter-right">
            <span>RECOMMENDED</span>
            <img
              src={arrowIcon}
              alt="Arrow"
              className="arrow-icon"
              onClick={toggleRecommendedOptions} 
            />
          </div>
        </div>

        {recommendedVisible && (
          <div className="recommended-box">
            <div className="recommended-header">
              <img src={VectorIcon} alt="VectorIcon" className="vector-icon" />
              <p>RECOMENDED</p>
            </div>
            <ul>
              <li className="right-align">NEWEST PRODUCT</li>
              <li className="right-align">POPULAR</li>
              <li>PRICE: HIGH TO LOW</li>
              <li>PRICE: LOW TO HIGH</li>
            </ul>
          </div>
        )}

        <div className={`gallery-grid ${sidebarVisible ? '' : 'hidden-sidebar'}`}>
          {sidebarVisible
            ? images.map((image, index) => (
                <div className="gallery-item" key={index}>
                  <img src={image} alt={`Task ${index + 1}`} />
                  <div className="product-details">
                    <p className="product-name">{productNames[index] || "PRODUCT NAME"}</p>
                    <p className="pricing-info">
                      <span className="underline">Sign In </span> or Create an Account to See the Pricing
                    </p>
                  </div>
                </div>
              ))
            : images.slice(0, 18).map((image, index) => (
                <div className="gallery-item" key={index}>
                  <img src={image} alt={`Task ${index + 1}`} />
                  <div className="product-details">
                    <p className="product-name">{productNames[index] || "Product Name"}</p>
                    <p className="pricing-info">
                      <span className="underline">Sign In</span> or Create an Account to See the Pricing
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
